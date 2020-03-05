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


import { ApolloServer} from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'
 
import ValidatorsSchema from './schema/validator.js';
import DelegationsSchema from './schema/delegations.js';
import BlocksconSchema from './schema/blocks.js' ;
import ChainSchema from './schema/chain.js';
import ChainStatesSchema from './schema/chainStates.js';
import CoinStatsSchema from './schema/coinStats.js';   
import ProposalsSchema from './schema/proposals.js'; 
import ValidatorRecordsSchema from './schema/validatorRecords.js'; 
import StatusSchema from './schema/status.js'; 
import TransactionsSchema from './schema/transactions.js';
import ValidatorSetsSchema from './schema/validatorSets.js';
import VotingPowerHistorySchema from './schema/votingPowerHistory.js';
import AnalyticsSchema from './schema/analytics.js';
import MissedBlocksSchema from './schema/missedBlocks.js'; 
import VPDistributionsSchema from './schema/VPDistributions.js'; 
import resolvers from './resolvers'
import { Mongo } from 'meteor/mongo';


const { gql } = require('apollo-server');
const { find, filter } = require('lodash');



const server = new ApolloServer({
  typeDefs: [
    ValidatorsSchema, 
    DelegationsSchema, 
    BlocksconSchema, 
    ChainSchema, 
    ChainStatesSchema, 
    CoinStatsSchema, 
    ProposalsSchema, 
    ValidatorRecordsSchema, 
    StatusSchema,
    TransactionsSchema,
    ValidatorSetsSchema,
    VotingPowerHistorySchema,
    AnalyticsSchema,
    MissedBlocksSchema,
    VPDistributionsSchema

],
  resolvers,
  tracing: true,
//   context: async ({ req }) => ({
//     user: await getUser(req.headers.authorization)
//   })
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

