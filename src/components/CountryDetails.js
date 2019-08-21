import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

import { QUERIES } from '../utils/constants';
import Error from './Error';
import Spinner from './Spinner';

const Header = styled.h1`
  border-bottom: 1px #d4d3d3 solid;
`;

const Line = styled.div`
  display: flex;
  margin-bottom: 10px;

  > div:first-child {
    width: 150px;
    color: #d4d3d3;
    font-style: italic;
  }
`;

const GoBack = styled(Link)`
  display: flex;
  justify-content: flex-end;
`;

const CountryDetails = ({ match }) => {
  const {
    params: { code },
  } = match;

  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <Spinner />;
  if (error) return <Error />;

  if (!data.country) {
    return <p>Sorry - no details for the selected country</p>;
  }

  return (
    <div>
      <Header>{data.country.name} Details</Header>
      <ul />
      <Line>
        <div>Name:</div>
        <div>
          {data.country.name} ({data.country.native})
        </div>
      </Line>
      <Line>
        <div>Currency:</div>
        <div>{data.country.currency}</div>
      </Line>
      <Line>
        <div>Area Code:</div>
        <div>{data.country.phone}</div>
      </Line>
      <GoBack to="/countries/">Go Back</GoBack>
    </div>
  );
};

CountryDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryDetails;
