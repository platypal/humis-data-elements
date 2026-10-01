import type { DataElement, ResponseOption } from "./types";

const yesNoOptions: ResponseOption[] = [
  { value: 0, displayText: 'No' },
  { value: 1, displayText: 'Yes' },
  { value: 8, displayText: "Client doesn't know" },
  { value: 9, displayText: 'Client prefers not to answer' },
  { value: 99, displayText: 'Data not collected' }
]

/**
 * Federal Partner (VA) Data Element containg a Veteran's information
 *
 * Funder: Component              HUD: HUD-VASH -- Collection required for all components
 *                                VA: SSVF -- Collection required for RRH and Homelessness Prevention
 *                                VA: GPD -- Collection required for all components
 *                                VA: Community Contract Safe Haven
 *                                VA: CRS Contract Residential Services
 * Project Type                   0: Emergency Shelter -- Entry Exit
 *                                2: Transitional Housing
 *                                3: PH -- Permanent Supportive Housing (disability required for entry)
 *                                6: Supportive Services Only
 *                                8: Safe Haven
 *                                9: PH -- Housing Only
 *                                12: Homelessness Prevention
 *                                13: PH -- Rapid Re-Housing
 * Data Collected About           All Veterans
 * Collection Point               Record Creation
 * Relationship to EnrollmentID   N/A
 * Relationship to PersonalID     One Veteran's info per client
 *
 * System Logic & Notes:
 *  • None
 */
export const vdeVeteransInformation: DataElement = {
  deNumber: 'V1',
    key: 'vdeVeteransInfo',
    name: 'Veterans Information',
    fields: {
      'yearEnteredService': {
        id: '1',
        name: 'YearEnteredService',
        displayName: 'Year Entered Military Service',
        type: 'text',
        maxLength: 4,
        placeholder: '',
        altText: '',
        pattern: '[0-9]{4}'
      },
      'yearSeparatedService': {
        id: '2',
        name: 'YearSeparated',
        displayName: 'Year Separated from Military Service',
        type: 'text',
        maxLength: 4,
        placeholder: '',
        altText: '',
        pattern: '[0-9]{4}'
      },
      'opWWII': {
        id: '3',
        name: 'WorldWarII',
        displayName: 'Theater of Operations: World War II',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opKoreanWar': {
        id: '4',
        name: 'KoreanWar',
        displayName: 'Theater of Operations: Korean War',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opVietnamWar': {
        id: '5',
        name: 'VietnamWar',
        displayName: 'Theater of Operations: Vietnam War',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opDesertStorm': {
        id: '6',
        name: 'DesertStorm',
        displayName: 'Theater of Operations: Persian Gulf War (Operation Desert Storm)',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opEnduringFreedom': {
        id: '7',
        name: 'AfghanistanOEF',
        displayName: 'Theater of Operations: Afghanistan (Operation Enduring Freedom)',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opIraqiFreedom': {
        id: '8',
        name: 'IraqOIF',
        displayName: 'Theater of Operations: Iraq (Operation Iraqi Freedom)',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opNewDawn': {
        id: '9',
        name: 'IraqOND',
        displayName: 'Theater of Operations: Iraq (Operation New Dawn)',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'opOther': {
        id: '10',
        name: 'OtherTheater',
        displayName: 'Theater of Operations: Other Peace-keeping Operations or Military Interventions (such as Lebanon, Panama, Somalia, Bosnia, Kosovo)',
        type: 'options',
        responseOptions: yesNoOptions,
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'branch': {
        id: '11',
        name: 'MilitaryBranch',
        displayName: 'Branch of the Military',
        type: 'options',
        responseOptions: [
          { value: 1, displayText: 'Army' },
          { value: 2, displayText: 'Air Force' },
          { value: 3, displayText: 'Navy' },
          { value: 4, displayText: 'Marines' },
          { value: 6, displayText: 'Coast Guard' },
          { value: 7, displayText: 'Space Force' },
          { value: 8, displayText: "Client doesn't know" },
          { value: 9, displayText: 'Client prefers not to answer' },
          { value: 99, displayText: 'Data not collected' }
        ],
        defaultValue: 99,
        placeholder: '',
        altText: ''
      },
      'dischargeStatus': {
        id: '12',
        name: 'DischargeStatus',
        displayName: 'Discharge Status',
        type: 'options',
        responseOptions: [
          { value: 1, displayText: 'Honorable' },
          { value: 2, displayText: 'General under honorable conditions' },
          { value: 6, displayText: 'Under other than honorable conditions (OTH)' },
          { value: 4, displayText: 'Bad conduct' },
          { value: 5, displayText: 'Dishonorable' },
          { value: 7, displayText: 'Uncharacterized' },
          { value: 8, displayText: "Client doesn't know" },
          { value: 9, displayText: 'Client prefers not to answer' },
          { value: 99, displayText: 'Data not collected' }
        ],
        defaultValue: 99,
        placeholder: '',
        altText: ''
      }
    }
}
