const { gql } = require('apollo-server');

export const typeDefs = gql`

type VPDistributions {
    _id: ID
    height: Int
    numTopTwenty: Int
    topTwentyPower: Int
    numBottomEighty: Int
    bottomEightyPower: Int
    numTopThirtyFour: Int
    topThirtyFourPercent: Float
    numBottomSixtySix: Int
    bottomSixtySixPercent: Float
    numValidators: Int
    totalVotingPower: Int
    blockTime: String
    createAt: String
  }


 extend type Query {
    getVPDistributions: [VPDistributions]
}
  
  `;

  
module.exports = typeDefs;