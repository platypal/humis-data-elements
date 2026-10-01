import * as ude from './universal-data-elements'
import * as vde from './veteran-data-elements'
import * as psde from './project-specific-data-elements'

/**
 * Array of all data elements.
 * Used by functions in this file to load data elements and their fields.
 */
const elements = [
  ude.udeName,
  ude.udeSSN,
  ude.udeDOB,
  ude.udeRaceEthnicity,
  ude.udeVeteranStatus,
  vde.vdeVeteransInformation,
  psde.psdeSex
]

/**
 * Function to find a data element by its key
 */
export function loadDataElement(de: string) {
  const ele = elements.find((ele) => ele.key === de)
  if(ele === undefined) throw Error(`No data element with key: '${de}' found`)
  return ele
}

/**
 * Function for library consumers to load data elements fields based on a
 * string. The string should have the format "<dE.key>.<dE.field>"
 */
export function loadDataElementField(f: string) {
  // Parse the string
  // -- It should have one and only one '.' character
  const parts = f.split('.')
  if(parts.length !== 2) throw Error('Data element field name must be split into 2 parts using "." separator.')
  // -- It should have a valid data element key before the '.'
  const de = loadDataElement(parts[0]) // let calling function catch the error
  // -- It should have a valid field of said data element after the '.'
  const field = de.fields[parts[1]]
  if(field === undefined) throw Error(`${de.key} has no field named ${parts[1]}`)
  return field
}