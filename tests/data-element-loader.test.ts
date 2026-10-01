import { expect, test } from 'vitest'
import { loadDataElementField } from '../src/data-element-loader.ts'

test('Data element field exists', () => {
  expect(loadDataElementField('udeName.firstName')).toBeDefined()
})