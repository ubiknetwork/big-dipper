const { gql } = require('apollo-server');

export const typeDefs = gql`

 type Chain {
    _id: ID!
    chainId: String
    activeVotingPower: Int
    auth: Auth
    bank: Bank
    consensusParams: ConsensusParams
    crisis: Crisis
    distr: Distr
    genesisTime: String
    gov: Gov
    mint: Mint
    readGenesis: Boolean
    slashing: Slashing
    staking: Staking
    precommits: [String]
    prevotes: [String]
    proposerAddress: String
    votedPower: Int
    votingHeight: String
    votingRound: String
    votingStep: Int
    latestBlockHeight: String
    latestBlockTime: String
    validators: Int
    blockTime: Float
    lastSyncedTime: String
  }

  type Auth{
    params: Params
  }

  type Params{
    max_memo_characters: String
    sig_verify_cost_ed25519: String
    sig_verify_cost_secp256k1: String
    tx_sig_limit: String
    tx_size_cost_per_byte: String
  }

  type Bank{
    send_enabled: Boolean
  }

  type ConsensusParams{
    block: BlockParams
    evidence: EvidenceParams
    validator: ValidatorParams

  }
  type BlockParams{
    max_bytes: String
    max_gas: String
    time_iota_ms: String
  }

  type EvidenceParams{
    max_age: String
  }

  type ValidatorParams{
    pub_key_types: [String]
  }

  type Crisis{
    constant_fee: Constant_fee
  }

  type Constant_fee{
    denom: String
    amount: String
  }

  type Distr{
    communityTax: String
    baseProposerReward: String
    bonusProposerReward: String
    withdrawAddrEnabled: Boolean
  }

  type Gov{
    startingProposalId: String
    depositParams: DepositParams
    votingParams: VotingParams
    tallyParams: TallyParams
  }

  type DepositParams{
    min_deposit: [Min_deposit]
    max_deposit_period: String
  }

  type Min_deposit{
    denom: String
    amount: String
  }

  type VotingParams{
    voting_period: String
  }

  type TallyParams{
    quorum: String
    threshold: String
    veto: String
  }

  type Mint{
    minter: Minter
    params: Mint_params
  }

  type Minter{
    inflation: String
    annual_provisions: String
  }

  type Mint_params{
    blocks_per_year: String
    goal_bonded: String
    inflation_max: String
    inflation_min: String
    inflation_rate_change: String
    mint_denom: String
  }

  type Slashing{
    params: Slashing_params
  }

  type Slashing_params{
    downtime_jail_duration: String
    max_evidence_age: String
    min_signed_per_window: String
    signed_blocks_window: String
    slash_fraction_double_sign: String
    slash_fraction_downtime: String
  }

  type Staking{
    params: Staking_params
  }

  type Staking_params{
    unbonding_time: String
    max_validators: Int
    max_entries: Int
    bond_denom: String
  }


  extend type Query { 
    getChain: [Chain]
    getChainbyID(chainId: String): Chain

}
  `;

  
module.exports = typeDefs;