import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { QUERIES } from '../utils/constants';

const CountryDetails = () => {
  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRY, {
    variables: { code: 'CI' },
  });

  if (loading) return <p>Loading...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default CountryDetails;
