const { gql } = require('apollo-server');

export const typeDefs = gql`

type Transactions {
    _id: ID
    height: Int
    txhash: String
    raw_log: String
    logs: [Logs]
    gas_wanted: String
    gas_used: String
    tx: Tx
    timestamp: String
    events: [Events]

  }

 type Logs{
    msg_index: Int
    success: Boolean
    log: String
    events: [Events]
 }

 type Events{
    type: String
    attributes: [Attributes]
 }

 type Attributes{
    key: String
    value: String

 }

 type Tx{
    type: String
    value: TxValue
 }

 type TxValue{
    msg: [Msg]
    fee: Fee
    signatures: [Signatures]
    memo: String 
 }
 type Msg{
    type: String
    value: MsgValue
 }

 type MsgAmount{
    denom: String
    amount: String
 }

 type MsgValue{
    from_address: String
    to_address: String
    amount: MsgAmount
 }

 type Fee{
    amount: [MsgAmount]
    gas: String
 }

 type Signatures{
    pub_key: PubKey
    signature: String
 }




 extend type Query {
    getTransactions: [Transactions]
    getTransactionsByID(_id: ID): [Transactions]
    getTransactionsByHeight(height: Int): [Transactions]
    getTransactionsByTXHash(txhash: String): [Transactions]
    
}
  
  `;

  
module.exports = typeDefs;