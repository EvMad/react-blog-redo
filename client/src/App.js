import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//import components !!

import Explore from './Components/Explore';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import CreatePost from './Components/CreatePost';
import ViewPost from './Components/ViewPost';
import EditPost from './Components/EditPost';
import Comment from './Components/Comment';






// construct main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//request middleware / attach JWT to every request

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };

});

// Apollo Client

const client = ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


//function App()

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
    <section>

    </section>

    <section>
      <Navbar />

      <Route exact path="/">
        <Explore />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

    </section>

      </Router>
    </ApolloProvider>
  );
}

export default App;