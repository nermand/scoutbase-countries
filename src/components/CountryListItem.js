import React from 'react';
import PropTypes from 'prop-types';

const CountryListItem = ({ country }) => {
  return (
    <span key={country.code}>
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
  country: {
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    native: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    continent: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  },
};

export default CountryListItem;
