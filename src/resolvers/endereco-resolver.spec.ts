import { assert, describe, expect, it, test } from 'vitest';
import { getendereco } from './endereco-resolver';

describe('endereco resolver', () => {

    test('get endereço cep invalido', async () => {
        await expect(() => getendereco('00000000000000000')).rejects.toThrow()
    })


    test('request ok', async () => {
        var obj = await getendereco('01001000');        
        expect(obj.localidade).toBe('São Paulo');

    })

})