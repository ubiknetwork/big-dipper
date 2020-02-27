import Schema from './schema'
import { Mongo } from 'meteor/mongo';

// export default {
//     Query: {
//     delegation: () => Resolvers.delegation,
//     validator: () => Resolvers.validator,
//     }
// }

import { Validators } from '/imports/api/validators/validators.js';  
//import { Proposals } from '../proposals.js';

//const varst =  Mongo.Collection('validators');


// let momo = Mongo.Collection.find;
// console.log('the mongo - > ' + momo)
// export default {
//     Query: {
//       async validator(root, args, context) {
//         if (context) {
//             console.log('the contex - > ' + contex)
//           return await Meteor.users.findOne(context);
//         }
//         return null;
//       },
//       delegation: () => Resolvers.delegation,
//     }
//   };

// export const resolvers = {
//     Query: {
//       async user(root, args, context) {
//         if (context.userId) {
//           return await Meteor.users.findOne(context.userId);
//         }
//         return null;
//       },
//     }
//   };

const resolvers = {
    Query: {
      hello: () => {
        return `hey sup ? `;
      },
      validator: async () => {
        values = await db.collection('validators').find().toArray().then(res => { return res });
        return values
      }
    }
  };