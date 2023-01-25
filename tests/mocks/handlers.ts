import { graphql, rest } from 'msw'

// Mock Data
export const enderecos = [

    {
        cep: "00000-000",
        logradouro: "Rua 1234",
        complemento: "logo ali",
        bairro: "Centro",
        localidade: "São Paulo",
        uf: "SP",
        ibge: "0000000"
    }

]


export const handlers = [
    rest.get('https://raw.githubusercontent.com/SeuAliado/OpenCEP/main/v1/00000000.json', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(enderecos[0]))
    }),
]