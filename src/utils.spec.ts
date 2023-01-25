import { describe, expect, test } from 'vitest';
import { validarcep } from "./utils";

describe('utils', () => {
  test('validar cep', () => {
    expect(validarcep('01001000')).toBe(true)
    expect(validarcep('01001-000')).toBe(false)
  })
})
