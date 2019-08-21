import { gql } from 'apollo-boost';

export const API_ENDPOINT = 'https://countries.trevorblades.com/';

export const QUERIES = {
  GET_COUNTRIES: gql`
    {
      countries {
        name
        code
        native
        continent {
          code
          name
        }
        languages {
          code
          name
          native
        }
      }
    }
  `,

  GET_COUNTRY: gql`
    query Country($code: String!) {
      country(code: $code) {
        name
        native
        currency
        phone
        languages {
          code
          name
          native
        }
      }
    }
  `,
};
