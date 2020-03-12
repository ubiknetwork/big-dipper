const { gql } = require('apollo-server');

export const typeDefs = gql`

type ValidatorRecords {
    _id: ID
    height: Int
    address: String
    exists: Boolean
    voting_power: Int
  }




 
 extend type Query {
    getValidatorsRecords: [ValidatorRecords]
    getValidatorRecordsByAddress(address: String): ValidatorRecords
    getValidatorRecordsByID(_id: ID): ValidatorRecords
    getValidatorRecordsByHeight(height: Int): ValidatorRecords

}
  
  `;

  
module.exports = typeDefs;