const { gql } = require('apollo-server');

export const typeDefs = gql`

  type BlocksCon {
    _id: ID!
    height: Int
    hash: String
    transNum: String
    time: String
    lastBlockHash: String
    proposerAddress: String
    validators: [String]
    precommitsCount: Int
    validatorsCount: Int
  }

 extend type Query { 
    blocks: [BlocksCon]
    getBlocksByHeight(height: String): [BlocksCon]
    getBlocksByHash(hash: String): [BlocksCon]

}
  `;


module.exports = typeDefs;