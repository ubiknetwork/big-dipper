const { gql } = require('apollo-server');

export const typeDefs = gql`

type CoinStats {
    _id: ID!
    last_updated_at: Int
    usd: Float
    usd_24h_change: Float
    usd_24h_vol: Float
    usd_market_cap: Float
  }

 
 extend type Query {
    getCoinStats: [CoinStats]
}
  
  `;

  
module.exports = typeDefs;