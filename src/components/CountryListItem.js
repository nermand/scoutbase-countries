import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex-basis: 45%;
  border: 1px #b5a49d solid;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const CountryListItem = ({ country }) => {
  return (
    <Container>
      <p>
        Name: <Link to={`${country.code}`}>{country.name}</Link>
      </p>
      <p>Code: {country.code}</p>
      <p>Native name: {country.native}</p>
      <p>
        Continent: {country.continent.name}({country.continent.code})
      </p>
      <p>Official languages:</p>
      <Languages>
        {country.languages.map(lang => (
          <span key={lang.code}>
            - {lang.name} ({lang.native})
          </span>
        ))}
      </Languages>
    </Container>
  );
};

CountryListItem.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    continent: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryListItem;
