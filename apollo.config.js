module.exports = {
  client: {
    service: {
      name: "my-graphql-app",
      // url: "https://rickandmortyapi.com/graphql",
      localSchemaFile: "src/components/gql/schema.json",
      endpoint: null
    },
    skipSSLValidation: true
  }
};
