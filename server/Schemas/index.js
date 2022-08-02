//npm run build error Apollo needs schema, typeDefs, or modules

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };

// export{ typeDefs, resolvers };