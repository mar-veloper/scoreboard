/* Import faunaDB sdk */
const process = require("process");
require("dotenv").config();

const { query, Client } = require("faunadb");

const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const handler = async (event) => {
  const { id, name, continent, wins, losses } = JSON.parse(event.body);
  const gamesPlayed = Math.ceil(wins + losses);

  const data = {
    id,
    name,
    continent,
    gamesPlayed,
    winRate: ((wins / gamesPlayed) * 100).toFixed(2),
    wins,
    losses,
  };

  const { id: playerId } = event;
  console.log(`Function 'update' invoked. update id: ${playerId}`);
  return client
    .query(query.Update(query.Ref(`classes/players/${playerId}`), { data }))
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
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
