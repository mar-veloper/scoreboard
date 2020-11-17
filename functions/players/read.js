/* Import faunaDB sdk */
const process = require("process");
require("dotenv").config();

const { query, Client } = require("faunadb");

const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const handler = async (event) => {
  const { id } = event;
  console.log(`Function 'read' invoked. Read id: ${id}`);
  return client
    .query(query.Get(query.Ref(`classes/players/${id}`)))
    .then((response) => {
      console.log("success", response);
      const data = { id: response.ref.id, ...response.data };
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};

module.exports = { handler };
