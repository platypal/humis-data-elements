import { expect, test } from 'vitest'
import {
  udeName,
  udeDOB,
  udeSSN,
  psdeSex,
  udeRaceEthnicity,
  udeVeteranStatus,
  validateDef
} from '../src'

/**
 * Series of test to check the validity of the data elements
 */
test('udeName valid', () => {
  expect(validateDef(udeName)).toBe(true)
})

test('udeDOB valid', () => {
  expect(validateDef(udeDOB)).toBe(true)
})

test('udeSSN valid', () => {
  expect(validateDef(udeSSN)).toBe(true)
})

test('udeRaceEthnicity valid', () => {
  expect(validateDef(udeRaceEthnicity)).toBe(true)
})

test('udeVeteranStatus valid', () => {
  expect(validateDef(udeVeteranStatus)).toBe(true)
})
