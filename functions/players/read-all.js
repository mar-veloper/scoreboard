/* Import faunaDB sdk */
const process = require('process');
require('dotenv').config();

const { query, Client } = require('faunadb');

const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const handler = async () => {
  try {
    console.log('Function `read-all` invoked');
    const { data: itemRefs } = await client.query(
      query.Paginate(query.Match(query.Ref('indexes/all_players')))
    );

    const getAllItemsDataQuery = itemRefs.map(ref => query.Get(ref));

    const ret = await client.query(getAllItemsDataQuery);
    const data = ret.map(({ ref, data }) => ({ id: ref.id, ...data }));

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log('error', error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }

  // return client
  //   .query(query.Paginate(query.Match(query.Ref('indexes/all_players'))))
  //   .then(response => {
  //     const itemRefs = response.data;
  //     // create new query out of item refs. http://bit.ly/2LG3MLg
  //     const getAllItemsDataQuery = itemRefs.map(ref => {
  //       return query.Get(ref);
  //     });
  //     // then query the refs
  //     return client.query(getAllItemsDataQuery).then(ret => {
  //       const data = ret.map(({ ref, data }) => ({ id: ref.id, ...data }));
  //       return {
  //         statusCode: 200,
  //         body: JSON.stringify(data),
  //       };
  //     });
  //   })
  //   .catch(error => {
  // console.log('error', error);
  // return {
  //   statusCode: 400,
  //   body: JSON.stringify(error),
  // };
  //   });
};

module.exports = { handler };
