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
      validators: async () => queryData({ dataValue: Validators }),
      validator: async (address, { validatorAddress }) => queryDataParams({ dataValue: Validators},{ dataParams: validatorAddress }, {data: address}),
      blocks: async () => queryData({ dataValue: Blockscon }),
      getBlocksByHeight: async (height, { blockHeight }) => queryDataParams({ dataValue: Blockscon},{ dataParams: blockHeight }, {data: height}),
      getBlocksByHash: async  (hash, { hashValue }) => queryDataParams({ dataValue: Blockscon},{ dataParams: hashValue }, {data: hash}),
      chain: async () => queryData({ dataValue: Chain }),
      getByChainID: async (chainId, { chainIDValue }) => queryDataParams({ dataValue: Chain},{ dataParams: chainIDValue }, {data: chainId}),
      getChainStates: async () => queryData({ dataValue: ChainStates }),
      getCoinStats: async () => queryData({ dataValue: CoinStats }), 
      getProposals: async () => queryData({ dataValue: Proposals }),  
      getDelegations: async () => queryData({ dataValue: Delegations }),  
      getAllValidatorsRecords: async () => queryData({ dataValue: ValidatorRecords }),
      getValidatorRecords: async (address, { addressValue }) => queryDataParams({ dataValue: ValidatorRecords},{ dataParams: addressValue }, {data: address}),
      getStatus: async () => queryData({ dataValue: Status }),
      getTransactions: async () => queryData({ dataValue: Transactions }),
      getValidatorSets: async () => queryData({ dataValue: ValidatorSets }),
      getVotingPowerHistory: async () => queryData({ dataValue: VotingPowerHistory }),
      getAnalytics: async () => queryData({ dataValue: Analytics }),
      getAnalyticsbyAddress: async (address, { addressValue }) => queryDataParams({ dataValue: Analytics},{ dataParams: addressValue }, {data: address}),
      getMissedBlocks: async () => queryData({ dataValue: MissedBlocks }),
      getVPDistributions: async () => queryData({ dataValue: VPDistributions }),
  }
};

module.exports = resolvers;