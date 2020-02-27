// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// const url = 'mongodb://localhost:27017/db';

// mongoose.connect(url, { useNewUrlParser: true });
// mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));



const { ApolloServer, gql } = require("apollo-server");
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
  console.log("MONGOdb connected");
  db = client.db("mongod"); //mongodb database name
});

