const { gql } = require('apollo-server');

export const typeDefs = gql`

type ValidatorRecords {
    _id: id
    height: Int
    address: String
    exists: Boolean
    voting_power: Int
  }




 
 extend type Query {
    getAllValidatorsRecords: [ValidatorRecords]
    getValidatorRecords(address: String): ValidatorRecords

}
  
  `;

  
module.exports = typeDefs;