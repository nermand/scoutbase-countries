import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryListItem = ({ country }) => {
  return (
    <span>
      <Link to={`${country.code}`}>{country.name}</Link>
      <p>{country.name}</p>
      <p>{country.code}</p>
      <p>{country.native}</p>
      <p>{country.currency}</p>
      <p>{country.continent.name}</p>
      <pre>{JSON.stringify(country.languages, null, 2)}</pre>
    </span>
  );
};

CountryListItem.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    continent: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CountryListItem;
