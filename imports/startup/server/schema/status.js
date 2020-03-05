const { gql } = require('apollo-server');

export const typeDefs = gql`

type Status {
    _id: ID!
    chainId: String
    lastProcessedMissedBlockHeight: Int
    lastProcessedMissedBlockTime: String
  }

 
 extend type Query {
    getStatus: [Status]
}
  
  `;

  
module.exports = typeDefs;