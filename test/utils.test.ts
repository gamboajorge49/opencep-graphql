import { assert, describe, it } from 'vitest';
import { validarcep } from "../src/utils";

describe('utils', () => {
    it('validarcep', () => {      
      assert.equal(validarcep('01001000'), true)
      assert.equal(validarcep('01001-000'), false)
    })
  })

