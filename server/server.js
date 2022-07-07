const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./Utils/auth');
const { typeDefs, resolvers } = require('./Schemas');
const db = require('./Config/connection');


// re: _dirname error
// import { dirname } from 'path';

// const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3001;
const app = express();



const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  // schema: await buildSchema ??
  context: authMiddleware,
  
});


// typeDefs, resolvers being called? 2/3/22 update npm run build debug same error "Apollo Server requires existing schema, module, typeDefs"

async function startServer() {

// 2/3/22 removed parameters typeDefs, resolvers passed into startServer() for debug


  await server.start();

server.applyMiddleware({ app, cors: false });



app.use(express.urlencoded({ extended: false }));
app.use(express.json());



if (process.env.NODE_ENV === 'production') {

  //2/17/22:
  app.use(express.static('client/build'));
  // app.use(express.static(path.join(__dirname, 'build')));

  app.use(express.static('public'));
}



app.get('*', (req, res) => {

// 3/11/22:
// __dirname = path.resolve(path.dirname(''));
// __dirname = path.resolve();

  //2/17/22:
  res.sendFile(path.resolve( 'client', 'build', 'index.html'));


  
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});


return { server, app };

};
startServer();


