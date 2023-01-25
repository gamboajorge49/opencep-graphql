import { assert, describe, expect, it, test } from 'vitest';
import { getendereco } from './endereco-resolver';

describe('endereco resolver', () => {

    test('get endereço cep invalido', async () => {
        await expect(() => getendereco('00000000000000000')).rejects.toThrow()
    })

})