import { GraphQLError } from 'graphql';
import { validarcep } from "../utils";
import fetch from "node-fetch";

export const typeDef = `
  extend type Query {
    endereco(cep:String!):Endereco
  }  

  type Endereco{
    cep: String 
    logradouro: String
    complemento: String
    bairro: String
    localidade: String
    uf: String
    ibge: String
}    
`;

export async function getendereco(cep: string) {

    if (validarcep(cep)) {
        const response = await fetch(`https://raw.githubusercontent.com/SeuAliado/OpenCEP/main/v1/${cep}.json`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.status == 200) {
            const object = await response.json();
            return object;

        } else {
            return null;
        }
    } else {

        throw new GraphQLError('Cep inválido', {
            extensions: { code: 'BAD_USER_INPUT' },
        });

    }

}



export const resolvers = {
    Query: {
        endereco: async (parent: any, args: any, contextValue: any, info: any) => {
            return getendereco(args.cep);
        },
    }
};