import { gql } from '@apollo/client';

const CHARACTERS = gql`
  query Characters($page: Int, $name: String, $gender: String, $species: String) {
    characters(page: $page, filter: { name: $name, gender: $gender, species: $species }) {
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
