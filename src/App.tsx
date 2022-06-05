import React from 'react';
import {ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import './App.css';
import Main from "./components/Main"

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
