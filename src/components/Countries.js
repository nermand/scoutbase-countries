import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { QUERIES } from '../utils/constants';
import { debounce } from '../utils/helpers';
import CountryListItem from './CountryListItem';
import Error from './Error';
import Spinner from './Spinner';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Filter = styled.input`
  width: 300px;
  padding: 0.6em 0.7em;
  color: #3b4045;
  background-color: #fff;
  font-size: 16px;
  border-color: #bbc0c4;
  border-radius: 5px;
`;

const Countries = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const refContainer = useRef(null);
  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRIES);

  const setFilterDebounced = filter => {
    setFilter(filter);
  };

  const handleChange = debounce(() => {
    setFilterDebounced(refContainer.current.value);
  }, 250);

  useEffect(() => {
    if (data.countries) {
      if (!filter.trim()) {
        return setCountries(data.countries);
      }

      const filtered = data.countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase()),
      );
      setCountries(filtered);
    }
  }, [data, filter]);

  if (loading) return <Spinner />;
  if (error) return <Error />;

  return (
    <React.Fragment>
      <ListHeader>
        <h1>
          {filter.trim()
            ? 'Here is the filtered country list'
            : `List of all ${countries.length} countries`}
        </h1>
        <Filter
          placeholder="Filter by country name"
          autocomplete="off"
          ref={refContainer}
          onChange={handleChange}
        />
      </ListHeader>
      <Container>
        {countries.map(country => (
          <CountryListItem key={country.code} country={country} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Countries;
