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
  console.log("dataParams " + JSON.stringify(dataParams))

  console.log("DATA " + JSON.stringify(data))
  let dataQueryList = new Object();
  const found = dataValue.find();
  found.forEach(function(val, i) {
    if (i != null) {
        switch (data){
          case 'ID':
            (val._id === dataParams) || (val._id._str === dataParams)  ? dataQueryList = val : null;
            break;
          case 'address':
            (val.address === dataParams) ? dataQueryList = val : null;;
            break;
          case 'height':
            (val.height === dataParams) ? dataQueryList = val : null;;
            break;
          case 'hash':
            (val.hash === dataParams) ? dataQueryList = val : null;;
            break;
          case 'chainId':
            (val.chainId === dataParams) ? dataQueryList = val : null;;
            break;
          case 'proposalId':
            (val.proposalId === dataParams) ? dataQueryList = val : null;;
            break;
          case 'txhash':
            (val.txhash === dataParams) ? dataQueryList = val : null;;
            break;
          case 'blockHeight':
            (val.blockHeight === dataParams) ? dataQueryList = val : null;;
            break;
          default:
              return null;
          }
          return    dataQueryList;
    }
});

  // if(data === _id){
  //   found.forEach(function(val, i) {
  //     if (i != null) {
  //         if(val.data === dataParams){
  //          dataQueryList = val;
  //         }
  //     }
  // });
  // }
  // else{
  //   found.forEach(function(val, i) {
  //     if (i != null) {
  //         if(val.data === dataParams){
  //          dataQueryList = val;
  //         }
  //     }
  // });
  // }
   
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
      getValidatorByAddress: async (_, { address }) => queryDataParams({ dataValue: Validators},{ dataParams: address }, {data: 'address'}),
      getValidatorByID: async ( _, { _id }) => queryDataParams({ dataValue: Validators},{ dataParams: _id }, {data: 'ID'}),
      getBlocks: async () => queryData({ dataValue: Blockscon }),
      getBlocksByID: async (_, { _id }) => queryDataParams({ dataValue: Blockscon},{ dataParams: _id }, {data: 'ID'}),
      getBlocksByHeight: async ( _, { height }) => queryDataParams({ dataValue: Blockscon},{ dataParams: height }, {data: 'height'}),
      getBlocksByHash: async  (_ , { hash }) => queryDataParams({ dataValue: Blockscon},{ dataParams: hash }, {data: 'hash'}),
      getChain: async () => queryData({ dataValue: Chain }),
      getChainbyID: async (_, { chainId }) => queryDataParams({ dataValue: Chain},{ dataParams: chainId }, {data: 'chainId'}),
      getChainStates: async () => queryData({ dataValue: ChainStates }),
      getCoinStats: async () => queryData({ dataValue: CoinStats }), 
      getProposals: async () => queryData({ dataValue: Proposals }),
      getProposalByID: async (_, { _id }) => queryDataParams({ dataValue: Proposals},{ dataParams: _id }, {data: 'ID'}),
      getProposalsByProposalID: async (_, { proposalId }) => queryDataParams({ dataValue: Proposals},{ dataParams: proposalId }, {data: 'proposalId'}),
      getDelegations: async () => queryData({ dataValue: Delegations }),  
      getDelegationsByID: async (_, { _id }) => queryDataParams({ dataValue: Delegations},{ dataParams: _id }, {data: 'ID'}),
      getValidatorsRecords: async () => queryData({ dataValue: ValidatorRecords }),
      getValidatorRecordsByAddress: async (_, { address }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: address }, {data: 'address'}),
      getValidatorRecordsByID: async (_, { _id }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: _id }, {data: 'ID'}),
      getValidatorRecordsByHeight: async (_, { height }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: height }, {data: 'height'}),
      getStatus: async () => queryData({ dataValue: Status }),
      getTransactions: async () => queryData({ dataValue: Transactions }),
      getTransactionsByID: async (_, { _id }) => queryDataParams({ dataValue: Transactions},{ dataParams: _id }, {data: 'ID'}),
      getTransactionsByHeight: async (_, { height }) => queryDataParams({ dataValue: Transactions},{ dataParams: height }, {data: 'height'}),
      getTransactionsByTXHash: async (_, { txhash }) => queryDataParams({ dataValue: Transactions},{ dataParams: txhash }, {data: 'txhash'}),
      getValidatorSets: async () => queryData({ dataValue: ValidatorSets }),
      getValidatorSetsByID: async (_, { _id }) => queryDataParams({ dataValue: ValidatorSets},{ dataParams: _id }, {data: 'ID'}),
      getValidatorSetsByHeight: async (_, { height }) => queryDataParams({ dataValue: ValidatorSets},{ dataParams: height }, {data: 'height'}),
      getVotingPowerHistory: async () => queryData({ dataValue: VotingPowerHistory }),
      getVotingPowerHistoryByID: async (_, { _id }) => queryDataParams({ dataValue: VotingPowerHistory},{ dataParams: _id }, {data: 'ID'}),
      getVotingPowerHistoryByAddress: async (_, { address }) => queryDataParams({ dataValue: VotingPowerHistory},{ dataParams: address }, {data: 'address'}),
      getVotingPowerHistoryByHeight: async (_, { height }) => queryDataParams({ dataValue: VotingPowerHistory},{ dataParams: height }, {data: 'height'}),
      getAnalytics: async () => queryData({ dataValue: Analytics }),
      getAnalyticsbyAddress: async (_, { address }) => queryDataParams({ dataValue: Analytics},{ dataParams: address }, {data: 'address'}),
      getMissedBlocks: async () => queryData({ dataValue: MissedBlocks }),
      getMissedBlocksByHeight: async (_, { blockHeight }) => queryDataParams({ dataValue: MissedBlocks},{ dataParams: blockHeight }, {data: 'blockHeight'}),
      getVPDistributions: async () => queryData({ dataValue: VPDistributions }),
      getVPDistributionsByID: async (_, { _id }) => queryDataParams({ dataValue: VPDistributions},{ dataParams: _id }, {data: 'ID'}),
      getVPDistributionsByHeight: async (_, { height }) => queryDataParams({ dataValue: VPDistributions},{ dataParams: height }, {data: 'height'}),

  }
};

module.exports = resolvers;