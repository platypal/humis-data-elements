import type { DataElement } from "./types"
import {
  DISCHARGE_STATUS_V_1_12,
  MILITARY_BRANCH_V_1_11,
  NO_YES_REASONS_FOR_MISSING_DATA_1_8
} from "./response-options"

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
  fields: [
    {
      id: '1',
      csvHeader: 'YearEnteredService',
      key: 'yearenteredservice',
      displayName: 'Year Entered Military Service',
      type: 'text',
      maxLength: 4,
      placeholder: '',
      altText: '',
      pattern: '[0-9]{4}'
    },
    {
      id: '2',
      csvHeader: 'YearSeparated',
      key: 'yearseparated',
      displayName: 'Year Separated from Military Service',
      type: 'text',
      maxLength: 4,
      placeholder: '',
      altText: '',
      pattern: '[0-9]{4}'
    },
    {
      id: '3',
      csvHeader: 'WorldWarII',
      key: 'worldwarii',
      displayName: 'Theater of Operations: World War II',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '4',
      csvHeader: 'KoreanWar',
      key: 'koreanwar',
      displayName: 'Theater of Operations: Korean War',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '5',
      csvHeader: 'VietnamWar',
      key: 'vietnamwar',
      displayName: 'Theater of Operations: Vietnam War',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '6',
      csvHeader: 'DesertStorm',
      key: 'desertstorm',
      displayName: 'Theater of Operations: Persian Gulf War (Operation Desert Storm)',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '7',
      csvHeader: 'AfghanistanOEF',
      key: 'afghanistanoef',
      displayName: 'Theater of Operations: Afghanistan (Operation Enduring Freedom)',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '8',
      csvHeader: 'IraqOIF',
      key: 'iraqoif',
      displayName: 'Theater of Operations: Iraq (Operation Iraqi Freedom)',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '9',
      csvHeader: 'IraqOND',
      key: 'iraqond',
      displayName: 'Theater of Operations: Iraq (Operation New Dawn)',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '10',
      csvHeader: 'OtherTheater',
      key: 'othertheater',
      displayName: 'Theater of Operations: Other Peace-keeping Operations or Military Interventions (such as Lebanon, Panama, Somalia, Bosnia, Kosovo)',
      type: 'options',
      responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '11',
      csvHeader: 'MilitaryBranch',
      key: 'militarybranch',
      displayName: 'Branch of the Military',
      type: 'options',
      responseOptions: MILITARY_BRANCH_V_1_11,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    },
    {
      id: '12',
      csvHeader: 'DischargeStatus',
      key: 'dischargestatus',
      displayName: 'Discharge Status',
      type: 'options',
      responseOptions: DISCHARGE_STATUS_V_1_12,
      defaultValue: 99,
      placeholder: '',
      altText: ''
    }
  ]
}
