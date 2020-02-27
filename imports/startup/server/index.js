// Import server startup through a single index entry point

import './util.js';
import './register-api.js';
import './create-indexes.js';

// import React from 'react';
// import { renderToNodeStream } from 'react-dom/server';
// import { renderToString } from "react-dom/server";
import { onPageLoad } from 'meteor/server-render';
// import { StaticRouter } from 'react-router-dom';
// import { ServerStyleSheet } from "styled-components"
import { Helmet } from 'react-helmet';

// import App from '../../ui/App.jsx';


import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

import typeDefs from './schema'
import resolvers from './resolvers'

// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   type Validator {
//     operator_address: String
//     consensus_pubkey: String
//     jailed:	Boolean
//     status:	Int
//     tokens:	String
//     delegator_shares: String
//     bond_height: String
//     bond_intra_tx_counter: Int
//     unbonding_height: String
//     unbonding_time:	String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//     validator: [Validator]
//   }
// `;


// const resolvers = {
//     Query: {
//       books: () => books,
//       validator: () => validator,
//     },
//   };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})


// const { ApolloServer, gql } = require("apollo-server");
// const fetch = require("node-fetch");
// const _ = require("lodash");

// // Construct a schema, using GraphQL schema language
// const typeDefs = `
//   type Query {
//     rates(currency: String!): [ExchangeRate]
//   }

// 	type ExchangeRate {
// 		currency: String
// 		rate: String
// 		name: String
// 	}
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     rates: async (root, { currency }) => {
//       try {
//         const results = await fetch(
//           `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
//         );
//         const exchangeRates = await results.json();

//         return _.map(exchangeRates.data.rates, (rate, currency) => ({
//           currency,
//           rate
//         }));
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   },
//   ExchangeRate: {
//     name: async ({ currency }) => {
//       try {
//         const results = await fetch("https://api.coinbase.com/v2/currencies");
//         const currencyData = await results.json();

//         const currencyInfo = currencyData.data.find(
//           c => c.id.toUpperCase() === currency
//         );
//         return currencyInfo ? currencyInfo.name : null;
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });





// const { ApolloServer } = require('apollo-server');
// const typeDefs = require('./schema');

// const server = new ApolloServer({ typeDefs });

// server.listen(3000).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
//   });

// const { ApolloServer, gql } = require('apollo-server');

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//     {
//       title: 'Harry Potter and the Chamber of Secrets',
//       author: 'J.K. Rowling',
//     },
//     {
//       title: 'Jurassic Park',
//       author: 'Michael Crichton',
//     },
//   ];

//   // Resolvers define the technique for fetching the types defined in the
// // schema. This resolver retrieves books from the "books" array above.
// const resolvers = {
//     Query: {
//       books: () => books,
//     },
//   };

onPageLoad(sink => {
    // const context = {};
    // const sheet = new ServerStyleSheet()

    // const html = renderToString(sheet.collectStyles(
    //     <StaticRouter location={sink.request.url} context={context}>
    //         <App />
    //     </StaticRouter>
    //   ));

    // sink.renderIntoElementById('app', html);

    const helmet = Helmet.renderStatic();
    sink.appendToHead(helmet.meta.toString());
    sink.appendToHead(helmet.title.toString());

    // sink.appendToHead(sheet.getStyleTags());
});

// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

