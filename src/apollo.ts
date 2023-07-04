import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

apolloClient
  .query({
    query: gql`
      {
        user(login: "jvillad") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  languages(first: 100) {
                    nodes {
                      name
                    }
                  }
                  description
                  openGraphImageUrl
                }
              }
            }
          }
        }
      }
    `,
  })
  .then(({ data }) => {
    const { pinnedItems } = data.user;
    apolloClient.cache.writeQuery({
      query: gql`
        query GetPinnedItems {
          pinnedItems @client
        }
      `,
      data: {
        pinnedItems,
      },
    });
  });

export default apolloClient;
