import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`

type Endereco{
    cep: String 
    logradouro: String
    complemento: String
    bairro: String
    localidade: String
    uf: String
    ibge: String
}    


type Query {
    endereco:Endereco!
}
    
`

const server = new ApolloServer({
    typeDefs
});


server.listen().then(async ({ url }) => {
    console.log(`Http server running on ${url}`)
})


