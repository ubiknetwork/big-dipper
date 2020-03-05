const { gql } = require('apollo-server');

export const typeDefs = gql`

type MissedBlocks {
    _id: id
    voter: String
    blockHeight: Int
    proposer: String
    precommitsCount: Int
    validatorsCount: Int
    time: String
    precommits: Int
    averageBlockTime: Float
    timeDiff: Int
    votingPower: Int
    votedVotingPower: Int
    updatedAt: Int
    missCount: Int
    totalCount: Int
  }


 extend type Query {
    getMissedBlocks: [MissedBlocks]
    getMissedBlocksByHeight(blockHeight: Int): [MissedBlocks]
    getMissedBlocksByVoter(voter: String): [MissedBlocks]
}
  
  `;

  
module.exports = typeDefs;