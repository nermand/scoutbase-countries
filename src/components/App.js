import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import client from '../utils/graphql';
import ErrorBoundary from './ErrorBoundary';
import NavMenu from './NavMenu';
import Routes from './Routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ErrorBoundary>
          <NavMenu />
          <Routes />
        </ErrorBoundary>
      </Router>
    </ApolloProvider>
  );
}

export default App;
