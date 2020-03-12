const { gql } = require('apollo-server');

export const typeDefs = gql`

type Delegations {
    _id: ID
    delegations: [DelegationParams]
  }

  type DelegationParams{
    delegator_address: String
    validator_address: String
    shares: String
    balance: String
  }

 extend type Query {
    getDelegations: [Delegations]
    getDelegationsByID(_id: ID): Delegations
}
  
  `;

  
module.exports = typeDefs;