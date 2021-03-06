#!/usr/bin/env node
const process = require('process');
require('dotenv').config();

/* bootstrap database in your FaunaDB account - use with `netlify dev:exec <path-to-this-file>` */
const { query, Client } = require('faunadb');

const createFaunaDB = function () {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log('No FAUNADB_SERVER_SECRET in environment, skipping DB setup');
  }
  console.log('Create the database!');
  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  /* Based on your requirements, change the schema here */
  return client
    .query(query.Create(query.Ref('classes'), { name: 'players' }))
    .then(() => {
      console.log('Created players class');
      return client.query(
        query.Create(query.Ref('indexes'), {
          name: 'all_players',
          source: query.Ref('classes/players'),
          active: true,
        })
      );
    })

    .catch(error => {
      if (
        error.requestResult.statusCode === 400 &&
        error.message === 'instance not unique'
      ) {
        console.log('DB already exists');
      }
      throw error;
    });
};

createFaunaDB();
