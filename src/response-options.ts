import type { ResponseOption } from "./types"

export const RACE_GENDER_NONE_1_6: ResponseOption[] = [
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const NO_YES_MISSING_1_7: ResponseOption[] = [
  {value: 0, displayText:  'No'},
  {value: 1, displayText: 'Yes'},
  {value: 99, displayText: 'Data not collected'},
]

export const NO_YES_REASONS_FOR_MISSING_DATA_1_8: ResponseOption[] = [
  {value: 0, displayText: 'No'},
  {value: 1, displayText: 'Yes'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const NO_YES_1_10: ResponseOption[] = [
  {value: 0, displayText: 'No'},
  {value: 1, displayText: 'Yes'},
]

export const NAME_DATA_QUALITY_3_01_5: ResponseOption[] = [
  {value: 1, displayText: 'Full name reported'},
  {value: 2, displayText: 'Partial, street name, or code name reported'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const SSN_DATA_QUALITY_3_02_2: ResponseOption[] = [
  {value: 1, displayText: 'Full SSN reported'},
  {value: 2, displayText: 'Approximate or partial SSN reported'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const DOB_DATA_QUALITY_3_03_2: ResponseOption[] = [
  {value: 1, displayText: 'Full DOB reported'},
  {value: 2, displayText: 'Approximate or partial DOB reported'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const RACE_ETHNICITY_CHOICE_3_04_1: ResponseOption[] = [
  {value: 1, displayText: 'American Indian, Alaska Native, or Indigenous'},
  {value: 2, displayText: 'Asian or Asian American'},
  {value: 3, displayText: 'Black, African American, or African'},
  {value: 6, displayText: 'Hispanic/Lantina/o'},
  {value: 7, displayText: 'Middle Eastern or North African'},
  {value: 4, displayText: 'Native Hawaiian or Pacific Islander'},
  {value: 5, displayText: 'White'},
]

export const GENDER_CHOICE_3_06_1: ResponseOption[] = [
  {value: 0, displayText: 'Woman (Girl, if child)'},
  {value: 1, displayText: 'Man (Boy, if child)'},
  {value: 2, displayText: 'Culturally Specific Identity (e.g., Two-Spirit)'},
  {value: 5, displayText: 'Transgender'},
  {value: 4, displayText: 'Non-Binary'},
  {value: 6, displayText: 'Questioning'},
  {value: 3, displayText: 'Different Identity'},
]

export const LIVING_SITUATION_DESTINATION_3_12_1: ResponseOption[] = [
  {value: 101, displayText: 'Emergency shelter, including hotel or motel paid for with emergency shelter voucher, Host Home shelter'},
  {value: 116, displayText: 'Place not meant for habitation (e.g., a vehicle, an abandoned building, bus/train/subway station/airport or anywhere outside)'},
  {value: 118, displayText: 'Safe Haven'},
  {value: 215, displayText: 'Foster care home or foster care group home'},
  {value: 206, displayText: 'Hospital or other residential non-psychiatric medical facility'},
  {value: 207, displayText: 'Jail, prison, or juvenile detention facility'},
  {value: 225, displayText: 'Long-term care facility or nursing home'},
  {value: 204, displayText: 'Psychiatric hospital or other psychiatric facility'},
  {value: 205, displayText: 'Substance abuse treatment facility or detox center'},
  {value: 302, displayText: 'Transitional housing for homeless persons (including homeless youth)'},
  {value: 329, displayText: 'Residential project or halfway house with no homeless criteria'},
  {value: 314, displayText: 'Hotel or motel paid for without emergency shelter voucher'},
  {value: 332, displayText: 'Host Home (non-crisis)'},
  {value: 312, displayText: 'Staying or living with family, temporary tenure (e.g. room, apartment, or house)'},
  {value: 313, displayText: 'Staying or living with friends, temporary tenure (e.g. room, apartment, or house)'},
  {value: 327, displayText: 'Moved from one HOPWA funded project to HOPWA TH'},
  {value: 422, displayText: 'Staying or living with family, permanent tenure'},
  {value: 423, displayText: 'Staying or living with friends, permanent tenure'},
  {value: 426, displayText: 'Moved from one HOPWA funded project to HOPWA PH'},
  {value: 410, displayText: 'Rental by client, no ongoing housing subsidy'},
  {value: 435, displayText: 'Rental by client, with ongoing housing subsidy'},
  {value: 421, displayText: 'Owned by client, with ongoing housing subsidy'},
  {value: 411, displayText: 'Owned by client, no ongoing housing subsidy'},
  {value: 30, displayText: 'No exit interview completed'},
  {value: 17, displayText: 'Other'},
  {value: 24, displayText: 'Deceased'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const LIVING_SITUATION_PRIOR_3_12_1: ResponseOption[] = [
  {value: 101, displayText: 'Emergency shelter, including hotel or motel paid for with emergency shelter voucher, Host Home shelter'},
  {value: 116, displayText: 'Place not meant for habitation (e.g., a vehicle, an abandoned building, bus/train/subway station/airport or anywhere outside)'},
  {value: 118, displayText: 'Safe Haven'},
  {value: 215, displayText: 'Foster care home or foster care group home'},
  {value: 206, displayText: 'Hospital or other residential non-psychiatric medical facility'},
  {value: 207, displayText: 'Jail, prison, or juvenile detention facility'},
  {value: 225, displayText: 'Long-term care facility or nursing home'},
  {value: 204, displayText: 'Psychiatric hospital or other psychiatric facility'},
  {value: 205, displayText: 'Substance abuse treatment facility or detox center'},
  {value: 302, displayText: 'Transitional housing for homeless persons (including homeless youth)'},
  {value: 329, displayText: 'Residential project or halfway house with no homeless criteria'},
  {value: 314, displayText: 'Hotel or motel paid for without emergency shelter voucher'},
  {value: 332, displayText: 'Host Home (non-crisis)'},
  {value: 336, displayText: 'Staying or living in a friend\'s room, apartment, or house'},
  {value: 335, displayText: 'Staying or living in a family member\'s room, apartment, or house'},
  {value: 410, displayText: 'Rental by client, no ongoing housing subsidy'},
  {value: 435, displayText: 'Rental by client, with ongoing housing subsidy'},
  {value: 421, displayText: 'Owned by client, with ongoing housing subsidy'},
  {value: 411, displayText: 'Owned by client, no ongoing housing subsidy'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const RENTAL_SUBSIDY_TYPES_3_12_A: ResponseOption[] = [
  {value: 428, displayText: 'GPD TIP housing subsidy'},
  {value: 419, displayText: 'VASH housing subsidy'},
  {value: 431, displayText: 'RRH or equivalent subsidy'},
  {value: 433, displayText: 'HCV voucher (tenant or project based) (not dedicated)'},
  {value: 434, displayText: 'Public housing unit'},
  {value: 420, displayText: 'Rental by client, with other ongoing housing subsidy'},
  {value: 436, displayText: 'Housing Stability Voucher'},
  {value: 437, displayText: 'Family Unification Program Voucher (FUP)'},
  {value: 438, displayText: 'Foster Youth to Independence Initiative (FYI)'},
  {value: 439, displayText: 'Permanent Supportive Housing'},
  {value: 440, displayText: 'Other permanent housing dedicated for formerly homeless persons'},
]

export const RELATIONSHIP_TO_HOH_3_15_1: ResponseOption[] = [
  {value: 1, displayText: 'Self (Head of Household)'},
  {value: 2, displayText: 'Head of household\'s child'},
  {value: 3, displayText: 'Head of household\'s spouse or partner'},
  {value: 4, displayText: 'Head of household\'s other relation member'},
  {value: 5, displayText: 'Other: non-relation member'},
  {value: 99, displayText: 'Data not collected'},
]

export const LENGTH_OF_STAY_3_917_2: ResponseOption[] = [
  {value: 2, displayText: 'One week or more, but less than one month'},
  {value: 3, displayText: 'One month or more, but less than 90 days'},
  {value: 4, displayText: '90 days or more but less than one year'},
  {value: 5, displayText: 'One year or longer'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 10, displayText: 'One night or less'},
  {value: 11, displayText: 'Two to six nights'},
  {value: 99, displayText: 'Data not collected'},
]

export const TIMES_HOMELESS_PAST_THREE_YEARS_3_917_4: ResponseOption[] = [
  {value: 1, displayText: 'One time'},
  {value: 2, displayText: 'Two times'},
  {value: 3, displayText: 'Three times'},
  {value: 4, displayText: 'Four or more times'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const MONTHS_HOMELESS_PAST_THREE_YEARS_3_917_5: ResponseOption[] = [
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
  {value: 101, displayText: '1'},
  {value: 102, displayText: '2'},
  {value: 103, displayText: '3'},
  {value: 104, displayText: '4'},
  {value: 105, displayText: '5'},
  {value: 106, displayText: '6'},
  {value: 107, displayText: '7'},
  {value: 108, displayText: '8'},
  {value: 109, displayText: '9'},
  {value: 110, displayText: '10'},
  {value: 111, displayText: '11'},
  {value: 112, displayText: '12'},
  {value: 113, displayText: 'More than 12 months'},
]

export const SEX_4_21: ResponseOption[] = [
  {value: 0, displayText: 'Female'},
  {value: 1, displayText: 'Male'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const MILITARY_BRANCH_V_1_11: ResponseOption[] = [
  {value: 1, displayText: 'Army'},
  {value: 2, displayText: 'Air Force'},
  {value: 3, displayText: 'Navy'},
  {value: 4, displayText: 'Marines'},
  {value: 6, displayText: 'Coast Guard'},
  {value: 7, displayText: 'Space Force'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'},
]

export const DISCHARGE_STATUS_V_1_12: ResponseOption[] = [
  {value: 1, displayText: 'Honorable'},
  {value: 2, displayText: 'General under honorable conditions'},
  {value: 4, displayText: 'Bad conduct'},
  {value: 5, displayText: 'Dishonorable'},
  {value: 6, displayText: 'Under other than honorable conditions (OTH)'},
  {value: 7, displayText: 'Uncharacterized'},
  {value: 8, displayText: 'Client doesn\'t know'},
  {value: 9, displayText: 'Client prefers not to answer'},
  {value: 99, displayText: 'Data not collected'}
]