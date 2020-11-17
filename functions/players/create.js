const process = require("process");
require("dotenv").config();

const { query, Client } = require("faunadb");

/* configure faunaDB Client with our secret */
const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

/* export our lambda function as named "handler" export */
const handler = async (event) => {
  /* parse the string body into a useable JS object */
  const { name, continent } = JSON.parse(event.body);

  const data = {
    name,
    continent,
    gamesPlayed: 0,
    winRate: 0,
    wins: 0,
    losses: 0,
  };

  const player = { data };

  console.log("Function `create` invoked", player);
  /* construct the fauna query */
  return client
    .query(query.Create(query.Ref("classes/players"), player))
    .then((response) => {
      const data = { id: response.ref.id, ...response.data };
      console.log("success", data);
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    })
    .catch((error) => {
      console.log("error", error);
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};

module.exports = { handler };
