import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './utils/graphql';

import './App.css';
import Countries from './components/Countries';

function App() {
  return (
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>
  );
}

export default App;
