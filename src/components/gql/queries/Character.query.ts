import { gql } from '@apollo/client';
// import { offsetLimitPagination } from '@apollo/client/utilities';

// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         page: offsetLimitPagination(['type']),
//       },
//     },
//   },
// });

const CHARACTERS = gql`
  query Characters($page: Int!) {
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
