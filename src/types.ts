import type { AllCsvHeaders } from "./csv-headers"

/**
 * Representation of a HUD Data Element
 *
 * @param deNumber string value of the Data Element ID (e.g., '3.01')
 * @param key unique string value to use as programmatic identifier (e.g., form fields, html tags)
 * @param name string value for HUD given name of Data Element
 * @param displayName string name used for display in UI elements (e.g., forms)
 * @param fields array of fields required by Data Element
 */
export type DataElement = {
  deNumber: string
  key: string
  name: string
  displayName?: string | undefined
  fields: {[key: string]: DataElementField}
}

/**
 * Should contain the necessary elements to create a form input that satisfies
 * the HUD Data Dictionary requirements. Eventually want to figure out rules for
 * related fields but that will come later.
 *
 * @param id string value representing HUD Data Element ID
 * @param key unique string value to use as programmatic identifier (e.g., form fields, html tags)
 * @param name string used to display Data Element Name in reports (CSV header)
 * @param displayName string name used for display in UI elements (e.g., forms)
 * @param type used to specify the type of form input for the Data Element
 * @param placeholder text to use as a placeholder of the form input
 * @param altText text to use as alt-text of the form input
 * @param maxLength required by Fields where 'type' is Text
 * @param responseOptions required by Fields where 'type' is Options or Multi-Select
 * @param pattern regular expression that can be used for input validation
 * @param nullable boolean that is true if null value is allowed
 */
export type DataElementField = {
  id: string
  name: AllCsvHeaders
  displayName?: string | undefined
  type: 'text' | 'date' | 'date-time' | 'options' | 'multi-select' | 'checkbox'
  defaultValue?: DataElementFieldType
  placeholder: string
  altText: string
  maxLength?: number
  responseOptions?: ResponseOption[]
  pattern?: string
  nullable?: boolean | undefined
}

export type DataElementFieldType = string | number | number[] | undefined | null

/**
 * Fields of type Options and MultiSelect require options
 *
 * @param value - the value needed for reporting
 * @param displayText - human readable text to display in UI
 * @param enabled - selectable in UI when true
 */
export type ResponseOption = {
  value: number
  displayText: string
  disabled?: boolean
}

/**
 * Need a type to represent a collecion of elements that hold the values of the
 * data element field definitions. It can take the type of the defaultValue to create
 * a new key with
 */