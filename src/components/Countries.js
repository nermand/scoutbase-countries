import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { QUERIES } from '../utils/constants';
import CountryListItem from './CountryListItem';
import Error from './Error';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Countries = () => {
  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  const countries = data.countries ? data.countries : [];

  return (
    <div>
      <h1>List of all {countries.length} countries</h1>
      <Container>
        {countries.map(country => (
          <CountryListItem key={country.code} country={country} />
        ))}
      </Container>
    </div>
  );
};

export default Countries;
