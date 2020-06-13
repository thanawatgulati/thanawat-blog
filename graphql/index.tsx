import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "https://bq3zxi3b.api.sanity.io/v1/graphql/production/default",
});
