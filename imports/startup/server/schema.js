import Resolvers from './resolvers'
const { gql } = require('apollo-server');

const typeDefs = gql`

type User {
    id: ID!
  }

  type counters{
  _id:String,
  seq:String
  }

type Commission {
    rate: String
    max_rate: String
    max_change_rate: String
    update_time: String
}

type Validator {
    operator_address: String
    consensus_pubkey: String
    jailed:	Boolean
    status:	Int
    tokens:	String
    delegator_shares: String
    bond_height: String
    bond_intra_tx_counter: Int
    unbonding_height: String
    unbonding_time:	String
    commission: [Commission]
  }

  type Delegation {
    delegator_address: String
    validator_address: String
    shares: String
    balance: [Coin]
  }

  type Coin {
    denom: String
    amount: String
  }

  type Query {
    validator: [Validator]
    delegation: [Delegation]
    me: User
    user(id: ID!): User
    users: [User!]!
    my_query:[counters]
    hello: String

  }
`;

module.exports = typeDefs;