import { Validators } from '/imports/api/validators/validators.js';
import { Blockscon } from '/imports/api/blocks/blocks.js';  
import { Chain, ChainStates } from '/imports/api/chain/chain.js';
import { CoinStats } from '/imports/api/coin-stats/coin-stats.js';
import { Delegations } from '/imports/api/delegations/delegations.js'; 
import { Evidences } from '/imports/api/evidences/evidences.js'; 
import { Proposals } from '/imports/api/proposals/proposals.js'; 
import { ValidatorRecords, Analytics, MissedBlocksStats, MissedBlocks, VPDistributions, AverageData, AverageValidatorData } from '/imports/api/records/records.js';  
import { Status} from '/imports/api/status/status.js'; 
import { Transactions } from '/imports/api/transactions/transactions.js'; 
import { ValidatorSets} from '/imports/api/validator-sets/validator-sets.js'; 
import { VotingPowerHistory } from '/imports/api/voting-power/history.js';


const queryDataParams = ( {dataValue} , {dataParams} , {data} ) => {
  let dataQueryList = new Object();
  const found = dataValue.find();
   found.forEach(function(val, i) {
      if (i != null) {
          if(val.data === dataParams){
           dataQueryList = val;
          }
      }
  });
  return Promise.resolve(dataQueryList);
}

 const queryData = ( {dataValue} ) => {
   let dataQuery = [];
   const found = dataValue.find();
    found.forEach(function(val, i) {
       if (i != null) {
           dataQuery[i] = val;
       }
   });
   return Promise.resolve(dataQuery);
 }
 
const resolvers = {
  Query: {
      getValidators: async () => queryData({ dataValue: Validators }),
      getValidatorByAddress: async (address, { validatorAddress }) => queryDataParams({ dataValue: Validators},{ dataParams: validatorAddress }, {data: address}),
      getValidatorByID: async (_id, { IDAddress }) => queryDataParams({ dataValue: Validators},{ dataParams: IDAddress }, {data: _id}),
      getBlocks: async () => queryData({ dataValue: Blockscon }),
      getBlocksByID: async (_id, { IDValue }) => queryDataParams({ dataValue: Blockscon},{ dataParams: IDValue }, {data: _id}),
      getBlocksByHeight: async (height, { blockHeight }) => queryDataParams({ dataValue: Blockscon},{ dataParams: blockHeight }, {data: height}),
      getBlocksByHash: async  (hash, { hashValue }) => queryDataParams({ dataValue: Blockscon},{ dataParams: hashValue }, {data: hash}),
      getChain: async () => queryData({ dataValue: Chain }),
      getChainbyID: async (chainId, { chainIDValue }) => queryDataParams({ dataValue: Chain},{ dataParams: chainIDValue }, {data: chainId}),
      getChainStates: async () => queryData({ dataValue: ChainStates }),
      getCoinStats: async () => queryData({ dataValue: CoinStats }), 
      getProposals: async () => queryData({ dataValue: Proposals }),
      getProposalsByID: async (id, { IDValue }) => queryDataParams({ dataValue: Proposals},{ dataParams: IDValue }, {data: id}),
      getProposalsByProposalID: async (proposalId, { IDValue }) => queryDataParams({ dataValue: Proposals},{ dataParams: IDValue }, {data: proposalId}),
      getDelegations: async () => queryData({ dataValue: Delegations }),  
      getDelegationsByID: async (_id, { IDValue }) => queryDataParams({ dataValue: Delegations},{ dataParams: IDValue }, {data: _id}),
      getValidatorsRecords: async () => queryData({ dataValue: ValidatorRecords }),
      getValidatorRecordsByAddress: async (address, { addressValue }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: addressValue }, {data: address}),
      getValidatorRecordsByID: async (_id, { IDValue }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: IDValue }, {data: _id}),
      getValidatorRecordsByHeight: async (height, { heightValue }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: heightValue }, {data: height}),
      getStatus: async () => queryData({ dataValue: Status }),
      getTransactions: async () => queryData({ dataValue: Transactions }),
      getTransactionsByID: async (_id, { IDValue }) => queryDataParams({ dataValue: Transactions},{ dataParams: IDValue }, {data: _id}),
      getTransactionsByHeight: async (height, { heightValue }) => queryDataParams({ dataValue: Transactions},{ dataParams: heightValue }, {data: height}),
      getTransactionsByTXHash: async (txhash, { txHashValue }) => queryDataParams({ dataValue: Transactions},{ dataParams: txHashValue }, {data: txhash}),
      getValidatorSets: async () => queryData({ dataValue: ValidatorSets }),
      getValidatorSetsByID: async (_id, { IDValue }) => queryDataParams({ dataValue: ValidatorSets},{ dataParams: IDValue }, {data: _id}),
      getValidatorSetsByHeight: async (height, { heightValue }) => queryDataParams({ dataValue: ValidatorSets},{ dataParams: heightValue }, {data: height}),
      getVotingPowerHistory: async () => queryData({ dataValue: VotingPowerHistory }),
      getVotingPowerHistoryByID: async (_id, { IDValue }) => queryDataParams({ dataValue: VotingPowerHistory},{ dataParams: IDValue }, {data: _id}),
      getVotingPowerHistoryByAddress: async (address, { addressValue }) => queryDataParams({ dataValue: VotingPowerHistory},{ dataParams: addressValue }, {data: address}),
      getVotingPowerHistoryByHeight: async (height, { heightValue }) => queryDataParams({ dataValue: VotingPowerHistory},{ dataParams: heightValue }, {data: height}),
      getAnalytics: async () => queryData({ dataValue: Analytics }),
      getAnalyticsbyAddress: async (address, { addressValue }) => queryDataParams({ dataValue: Analytics},{ dataParams: addressValue }, {data: address}),
      getMissedBlocks: async () => queryData({ dataValue: MissedBlocks }),
      getMissedBlocksByHeight: async (blockHeight, { blockHeightValue }) => queryDataParams({ dataValue: MissedBlocks},{ dataParams: blockHeightValue }, {data: blockHeight}),
      getMissedBlocksByHeight: async (voter, { voterValue }) => queryDataParams({ dataValue: MissedBlocks},{ dataParams: voterValue }, {data: voter}),
      getVPDistributions: async () => queryData({ dataValue: VPDistributions }),
      getVPDistributionsByID: async (_id, { IDValue }) => queryDataParams({ dataValue: VPDistributions},{ dataParams: IDValue }, {data: _id}),
      getVPDistributionsByHeight: async (height, { heightValue }) => queryDataParams({ dataValue: VPDistributions},{ dataParams: heightValue }, {data: height}),

  }
};

module.exports = resolvers;