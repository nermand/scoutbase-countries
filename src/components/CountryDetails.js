import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
// import styled from 'styled-components';

import { QUERIES } from '../utils/constants';
import Error from './Error';

const CountryDetails = ({ match }) => {
  const {
    params: { code },
  } = match;

  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <Error />;

  if (!data.country) {
    return <p>Sorry - no details for the selected country</p>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

CountryDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryDetails;
