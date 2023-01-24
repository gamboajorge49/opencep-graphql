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

export const resolvers = {
    Query: {
        endereco: async (parent: any, args: any, contextValue: any, info: any) => {
            console.log(args);

            const response = await fetch(`https://raw.githubusercontent.com/SeuAliado/OpenCEP/main/v1/${args.cep}.json`, {
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
        },
    }
};