import { ApolloServer, gql } from 'apollo-server'
import { merge } from 'lodash';
import { typeDef as Endereco, resolvers as enderecoResolvers } from "./resolvers/endereco-resolver";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const server = new ApolloServer({
    typeDefs: [Query, Endereco],
    resolvers: merge(resolvers, enderecoResolvers)
});


server.listen().then(async ({ url }) => {
    console.log(`Http server running on ${url}`)
})


