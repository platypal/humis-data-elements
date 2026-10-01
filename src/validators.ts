import type { DataElement, DataElementField, DataElementFieldType } from './types'

/**
 * A function to validate a DataElement definition.
 * Typechecking handles most of the requirements for validity but does not
 * ensure that the fields are consistent with their type.
 * 
 * @param de DataElement to validate
 */
export function validateDef(de: DataElement): boolean {
  let valid = true
  const fk = Object.keys(de.fields)
  fk.forEach(k => {
    valid &&= validateFieldDef(de.fields[k])
  })

  return valid
}

/**
 * A wrapper to pass field onto the appropriate type validator.
 * 
 * @param f DataElementField
 */
export function validateFieldDef(f: DataElementField): boolean {
  switch(f.type) {
    case 'date':
      return validateDateFieldDef(f)
    case 'date-time':
      return validateDateTimeFieldDef(f)
    case 'text':
      return validateTextFieldDef(f)
    case 'options':
      return validateOptionsFieldDef(f)
    case 'multi-select':
      return validateMultiSelectFieldDef(f)
    case 'checkbox':
      return validateCheckboxFieldDef(f)
  }
}

/**
 * A function to validate a definition of a field with type 'date'.
 * Date field defs are valid when they have a type of 'date', a defaultValue (if
 * given) in the proper format, leave maxLength and responseOptions undefined
 * and have a pattern (if given) that matches the proper format.
 * 
 * @param f DataElementField
 */
export function validateDateFieldDef(f: DataElementField): boolean {
  if(f.type !== 'date') return false
  if(f.maxLength !== undefined || f.responseOptions !== undefined) return false
  let valid = true
  if(f.defaultValue !== undefined) {
    try {
      validateDateFieldVal(f, f.defaultValue)
    } catch (err) {
      valid = false
      console.log(err)
    }
  }
  return valid
}

/**
 * Validate a date against its field definition. Returns nothing if validation
 * succeeds, throws a ValidationError on failure.
 * 
 * @param f DataElementField - Field to validate against
 * @param v DataElementFieldType - Value to validate
 */
function validateDateFieldVal(f: DataElementField, v: DataElementFieldType) {
  // track any errors
  let errs: string[] = []

  // v should have 'string' type
  if(typeof v !== 'string') {
    errs.push(`${f.name} must have "string" data type`)
  }
  // v should have format YYYY-MM-DD
  if((typeof v === 'string') && !isValidDateFormat(v)) {
    errs.push(`${f.name} should have the form YYYY-MM-DD`)
  }
  // v should be a valid date
  if((typeof v === 'string') && Number.isNaN(new Date(v))) {
    errs.push(`${f.name} is not a valid date`)
  }
  
  if(errs.length > 0) throw new ValidateValueError(errs, `One or more validation errors occured checking ${f.name}`)
}

/**
 * A function to validate a definition of a field with type 'date-time'.
 * DateTime field defs are valid when they have a type of 'date', a defaultValue
 * (if given) in the proper format, leave maxLength and responseOptions
 * undefined and have a pattern (if given) that matches the proper format.
 * 
 * @param f DataElementField
 */
function validateDateTimeFieldDef(f: DataElementField): boolean {
  if(f.type !== 'date-time') return false
  if(f.maxLength !== undefined || f.responseOptions !== undefined) return false
  let valid = true
  if(f.defaultValue !== undefined) {
    try {
      validateDateTimeFieldVal(f, f.defaultValue)
    } catch (err) {
      valid = false
      console.log(err)
    }
  }
  return valid
}

/**
 * Validate a date-time against its field definition. Returns nothing if
 * validation succeeds, throws a ValidationError on failure.
 * 
 * @param f DataElementField - Field to validate against
 * @param v DataElementFieldType - Value to validate
 */
function validateDateTimeFieldVal(f: DataElementField, v: DataElementFieldType) {
  // track any errors
  let errs: string[] = []

  // v should have 'string' type
  if(typeof v !== 'string') {
    errs.push(`${f.name} must have "string" data type`)
  }
  // v should have format YYYY-MM-DD HH:mm:ss
  if((typeof v === 'string') && !isValidDateTimeFormat(v)) {
    errs.push(`${f.name} should have the form YYYY-MM-DD HH:mm:ss`)
  }
  // v should be a valid date
  if((typeof v === 'string') && Number.isNaN(new Date(v))) {
    errs.push(`${f.name} is not a valid date`)
  }
  
  if(errs.length > 0) throw new ValidateValueError(errs, `One or more validation errors occured checking ${f.name}`)
}

/**
 * A function to validate a definition of a field with type 'text'.
 * Text field defs are valid when they have a type of 'text', a defaultValue
 * (if given) that is a string, maxLength (if given) larger than 0 and leave
 * responseOptions undefined. Having a pattern is ok but whether or not the
 * pattern is valid regEx is not covered by this function.
 * 
 * @param f DataElementField
 */
function validateTextFieldDef(f: DataElementField): boolean {
  if(f.type !== 'text') return false
  if(f.responseOptions !== undefined) return false
  let valid = true
  if(f.defaultValue !== undefined) {
    valid &&= validateTextFieldVal(f, f.defaultValue)
  }
  if(f.maxLength !== undefined) {
    valid &&= (f.maxLength > 0)
  }
  return valid
}

function validateTextFieldVal(f: DataElementField, v: DataElementFieldType): boolean {
  if(typeof v !== 'string') return false
  let valid = true
  if(f.maxLength !== undefined && f.maxLength > 0) {
    valid &&= v.length <= f.maxLength
  }
  return valid
}

/**
 * A function to validate a definition of a field with type 'options'.
 * DateTime field defs are valid when they have a type of 'options', a set of
 * defined responseOptions, a defaultValue (if given) that is possible given
 * the defined options and leave maxLength and pattern undefined.
 * 
 * @param f DataElementField
 */
function validateOptionsFieldDef(f: DataElementField): boolean {
  if(f.type !== 'options') return false
  if(f.maxLength !== undefined || f.pattern !== undefined) return false
  if(f.responseOptions === undefined || f.responseOptions === null) return false
  let valid = true
  if(f.defaultValue) {
    valid &&= validateOptionsFieldVal(f, f.defaultValue)
  }
  return valid
}

function validateOptionsFieldVal(f: DataElementField, v: DataElementFieldType): boolean {
  if(typeof v !== "number") return false
  if(f.responseOptions === undefined || f.responseOptions === null) return false
  let valid = true
    let rok: number[] = []
    f.responseOptions.forEach(val => {rok.push(val.value)})
    if(!rok.includes(v)) return false
  return valid
}

/**
 * A function to validate a definition of a field with type 'multi-select'.
 * DateTime field defs are valid when they have a type of 'multi-select', a set
 * of defined responseOptions, a defaultValue (if given) that is possible given
 * the defined options and leave maxLength and pattern undefined.
 * 
 * @param f DataElementField
 */
function validateMultiSelectFieldDef(f: DataElementField): boolean {
  if(f.type !== 'multi-select') return false
  let valid = true
  if(f.defaultValue) {
    valid &&= validateMultiSelectFieldVal(f, f.defaultValue as number[])
  }
  return valid
}

function validateMultiSelectFieldVal(f: DataElementField, v: DataElementFieldType): boolean {
  if(!isNumericArray(v)) return false
  if(f.responseOptions === undefined || f.responseOptions === null) return false
  let rok: number[] = []
  f.responseOptions.forEach(val => {rok.push(val.value)})
  if(!(v as number[]).every(val => rok.includes(val))) return false
  return true
}

/**
 * A function to validate a definition of a field with type 'checkbox'.
 * DateTime field defs are valid when they have a type of 'checkbox', a set
 * of defined responseOptions, a defaultValue (if given) that is possible given
 * the defined options and leave maxLength and pattern undefined.
 * 
 * @param f DataElementField
 */
function validateCheckboxFieldDef(f: DataElementField): boolean {
  if(f.type !== 'checkbox') return false
  let valid = true
  if(f.defaultValue) {
    valid &&= validateCheckboxFieldVal(f, f.defaultValue as number)
  }
  return valid
}

function validateCheckboxFieldVal(f: DataElementField, v: DataElementFieldType): boolean {
  if(!isNumericArray(v)) return false
  if(f.responseOptions === undefined || f.responseOptions === null) return false
  let rok: number[] = []
  f.responseOptions.forEach(val => {rok.push(val.value)})
  if(!rok.includes(v as number)) return false
  return true
}

/**
 * Determine if an object has type number[]. Used by validators that expect the
 * value of a data element (e.g. multi-select) to be a numeric array.
 * 
 * @param obj any
 * @returns boolean
 */
export function isNumericArray(obj: any): boolean {
  if(!Array.isArray(obj)) return false
  let valid = true
  obj.forEach(v => valid &&= (typeof v === "number"))
  return valid
}

/**
 * Checks that a date is formatted as YYYY-MM-DD and that the century is the
 * 1900s or 2000s. Does not test whether a date is possible.
 * 
 * @example
 * 2026-09-27 // passes
 * 09-27-2026 // fails - wrong format
 * 2026-02-30 // passes but not a possible date
 * 
 * @param d string - date to check
 * @returns boolean
 */
export function isValidDateFormat(d: string): boolean {
  const regex = /^((19|20)\d{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
  if(d.match(regex)) return true
  return false
}

/**
 * Checks that a date-time is formatted as YYYY-MM-DD HH:mm:ss and that the
 * century is the 1900s or 2000s. Does not test whether a date is possible.
 * 
 * @example
 * 2026-09-27 12:34:56 // passes
 * 09-27-2026 12:34:56 // fails - wrong format
 * 2026-02-30 12:34:56 // passes but not a possible date
 * 
 * @param d string - date to check
 * @returns boolean
 */
export function isValidDateTimeFormat(d: string): boolean {
  const regex = /^((19|20)\d{2})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[1-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
  if(d.match(regex)) return true
  return false
}

export class ValidateValueError extends Error {
  constructor(public status: string[], message: string) {
    super(message)
    this.name = "ValidateValueError"
  }
}

export class ValidateDefError extends Error {
  constructor(public status: string[], message: string) {
    super(message)
    this.name = "ValidateDefError"
  }
}