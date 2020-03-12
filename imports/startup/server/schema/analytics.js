const { gql } = require('apollo-server');

export const typeDefs = gql`

type Analytics {
    _id: ID
    address: String
    prev_voting_power: Int
    voting_power: Int
    type: String
    height: Int
    block_time: String
  }


 extend type Query {
    getAnalytics: [Analytics]
    getAnalyticsbyAddress(address: String): Analytics
}
  
  `;

  
module.exports = typeDefs;