const { gql } = require('apollo-server');

export const typeDefs = gql`

  type Blocks {
    _id: ID
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
    getBlocks: [Blocks]
    getBlocksByID(_id: ID): [Blocks]
    getBlocksByHeight(height: String): [Blocks]
    getBlocksByHash(hash: String): [Blocks]

}
  `;


module.exports = typeDefs;