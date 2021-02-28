import { gql } from '@apollo/client';

const CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
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