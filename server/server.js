const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./Utils/auth');
const { typeDefs, resolvers } = require('./Schemas');
const db = require('./Config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  // schema: await buildSchema ??
  context: authMiddleware,
  
});

// npm run start throwing error for await server.start() before calling server

async function startServer(typeDefs, resolvers) {

// define const server within this function ??

  await server.start();

server.applyMiddleware({ app, cors: false });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// what is file path client/build ??

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});



};
startServer();


