import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { QUERIES } from '../utils/constants';
import CountryListItem from './CountryListItem';
import Error from './Error';

const Container = styled.div`
  padding: 20px 40px;
`;

const Countries = () => {
  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <Container>
      {data.countries &&
        data.countries.map(country => (
          <CountryListItem key={country.code} country={country} />
        ))}
    </Container>
  );
};

export default Countries;
