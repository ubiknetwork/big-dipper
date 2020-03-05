const { gql } = require('apollo-server');

export const typeDefs = gql`

type ChainStates {
    _id: ID!
    height: Int
    time: String
    bondedTokens: Float
    notBondedTokens: Float
    totalSupply: Float
    communityPool: [communityPool]
    inflation: Float
    annualProvisions: Float
  }

  type communityPool {
    denom: String
    amount: Float
  }
 
 extend type Query {
    getChainStates: [ChainStates]
}
  
  `;

  
module.exports = typeDefs;