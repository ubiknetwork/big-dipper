const { gql } = require('apollo-server');

export const typeDefs = gql`


type Validator {
    _id: id
    address: String
    accpub: String
    commission: Commission
    consensus_pubkey: String
    delegator_address: String
    delegator_shares: String
    description: Description
    jailed: Boolean
    min_self_delegation: String
    operator_address: String
    operator_pubkey: String
    proposer_priority: Int
    pub_key: PubKey 
    self_delegation: Float
    status: Int
    tokens: String
    unbonding_height: String
    unbonding_time: String
    voting_power: Int
    lastSeen: String
    uptime: Float

  }

  type CommissionRates {
    rate: String
    max_rate: String
    max_change_rate: String
}

type Commission{
    commission_rates: CommissionRates
    update_time: String
}

  type Description{
    moniker: String
    identity: String
    website: String
    details: String
  }

  type PubKey{
    type: String
    value: String
  }

   
  type Query {
    getValidators: [Validator]
    getValidatorByAddress(address: String): Validator  
    getValidatorByID(_id: ID): Validator
}

  
  `;

  
module.exports = typeDefs;