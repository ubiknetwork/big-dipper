const { gql } = require('apollo-server');

export const typeDefs = gql`

type Proposals {
    _id: ID
    proposalId: Int
    content: Content
    deposit_end_time: String
    final_tally_result: FinalTallyResult
    proposal_status: String
    proposer: String
    submit_time: String
    total_deposit: [TotalDeposit]
    voting_end_time: String
    voting_start_time: String
  }

 

  type Content{
    type: String
    value: Value
  }

  type Value{
      title: String
      description: String
  }

  type FinalTallyResult{
    yes: String
    abstain: String
    no: String
    no_with_veto: String
  }

  type TotalDeposit{
    denom: String
    amount: String
  }

 
 extend type Query {
    getProposals: [Proposals]
    getProposalByID(_id: ID): Proposals 
    getProposalsByProposalID(proposalId: Int): Proposals
}
  
  `;

  
module.exports = typeDefs;