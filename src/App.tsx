import React from 'react';
import {ApolloProvider } from '@apollo/client'
import './App.css';
import Main from "./components/_Main"
import client from "./common/apollo-client"


function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
