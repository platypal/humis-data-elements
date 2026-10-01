import { expect, test } from 'vitest'
import { validateFieldDef, isValidDateFormat, isValidDateTimeFormat } from '../src'
import type { DataElementField } from '../src'

/**
 * Series of tests to check correctness of validateDef
 */
const dateFieldMaxLengthDefined: DataElementField = {
    id: "1",
    name: "DOB",
    type: "date",
    maxLength: 10,
    placeholder: "yyyy-mm-dd",
    altText: "Enter client date of birth",
}

test('Date field with maxLength defined invalid', () => {
  expect(validateFieldDef(dateFieldMaxLengthDefined)).toBe(false)
})

/**
 * Check if a date is in the correct format (YYYY-MM-DD) and is between 1900 and 2099
 */
const formattedDate = '2012-06-30' // should pass
const wrongOrderDate = '30-06-2012' // should fail
const wrongCenturyDate = '2112-06-30' // should fail

test('Correctly formatted date', () => {
  expect(isValidDateFormat(formattedDate)).toBe(true)
})

test('Date in the wrong order', () => {
  expect(isValidDateFormat(wrongOrderDate)).toBe(false)
})

test('Date in the wrong century', () => {
  expect(isValidDateFormat(wrongCenturyDate)).toBe(false)
})

/**
 * Check if a date-time is in the correct format (YYYY-MM-DD HH:mm:ss)
 */
const formattedDateTime = '2012-06-25 12:44:43'
const invalidSeconds = '2012-06-25 12:44:60'

test('Date-time formatted correctly', () => {
  expect(isValidDateTimeFormat(formattedDateTime)).toBe(true)
})

test('Date-time has invalid seconds', () => {
  expect(isValidDateTimeFormat(invalidSeconds)).toBe(false)
})