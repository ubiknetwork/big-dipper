const { gql } = require('apollo-server');

export const typeDefs = gql`

type ValidatorSets {
    _id: ID
    block_height: Int
    validators: [Validators]
  }

  type Validators {
    address: String
    pub_key: PubKey
    voting_power: String
    proposer_priority: String
  }
 
 extend type Query {
    getValidatorSets: [ValidatorSets]
    getValidatorSetsByID(_id: ID): ValidatorSets
    getValidatorSetsByHeight(block_height: Int): ValidatorSets
}
  
  `;

  
module.exports = typeDefs;