const { TestData } = require('./Data');
// const resolvers = {
//   Query: {
//     getAllData() {
//       console.log("==============")
//       return TestData;
//     },
//   },
//   Mutation: {
//     createData(parent, args) {
//       const newData = args;
//       TestData.push(newData);
//       return newData;
//     }
//   }
// };

// module.exports = { resolvers };

module.exports = {
  getAllData() {
    console.log({TestData})
    return TestData;
  },
  createData(parent, args) {
    const newData = args;
    TestData.push(newData);
    return newData;
  }
}