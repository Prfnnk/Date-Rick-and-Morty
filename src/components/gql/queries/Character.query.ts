import { gql } from '@apollo/client';

const CHARACTERS = gql`
  query Characters {
    characters {
      info {
        count
      }
      results {
        id
        name
        species
        location {
          name
        }
        image
      }
    }
  }
`;

export { CHARACTERS };
