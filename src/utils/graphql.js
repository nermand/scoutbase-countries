import ApolloClient from 'apollo-boost';

import { API_ENDPOINT } from './constants';

const client = new ApolloClient({
  uri: API_ENDPOINT,
});

export default client;
