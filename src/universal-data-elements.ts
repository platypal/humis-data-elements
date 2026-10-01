import {
  DOB_DATA_QUALITY_3_03_2,
  NAME_DATA_QUALITY_3_01_5,
  NO_YES_1_10,
  NO_YES_REASONS_FOR_MISSING_DATA_1_8,
  RACE_ETHNICITY_CHOICE_3_04_1,
  RACE_GENDER_NONE_1_6,
  SSN_DATA_QUALITY_3_02_2 } from "./response-options";
import { type DataElement } from "./types";

/**
 * Universal Data Element containg a client's name
 *
 * Funder:Component               All Programs:All Components
 * Project Type                   All Project Types
 * Data Collected About           All Clients
 * Collection Point               Record Creation
 * Relationship to EnrollmentID   N/A
 * Relationship to PersonalID     One name per client
 *
 * System Logic & Notes:
 *  • HMIS end user must be able to edit data to correct errors or reflect changes in client responses
 *  • Extra field(s) for alias or notes on name changes may be implemented by a system (not necessary for reporting)
 */
export const udeName: DataElement = {
    deNumber: "3.01",
    key: "udeName",
    name: "Name",
    fields: {
        "firstName": {
            id: "1",
            name: "FirstName",
            displayName: "FirstName",
            type: "text",
            maxLength: 50,
            placeholder: "First name, alias, or description",
            altText: "Enter first name, alias, or descripton",
        },
        "middleName": {
            id: "2",
            name: "MiddleName",
            displayName: "Middle Name",
            type: "text",
            maxLength: 50,
            placeholder: "Middle name, or extended description",
            altText: "Enter middle name, or extended description",
        },
        "lastName": {
            id: "3",
            name: "LastName",
            displayName: "Last Name",
            type: "text",
            maxLength: 50,
            placeholder: "Last name, or extended description",
            altText: "Enter last name, or extended description",
        },
        "nameSuffix": {
            id: "4",
            name: "NameSuffix",
            displayName: "Name Suffix",
            type: "text",
            maxLength: 50,
            placeholder: "Name Suffix (e.g., Jr.)",
            altText: "Enter name suffix",
        },
        "nameDataQuality": {
            id: "5",
            name: "NameDataQuality",
            displayName: "Name Data Quality",
            type: "options",
            responseOptions: NAME_DATA_QUALITY_3_01_5,
            defaultValue: 99,
            placeholder: "Select an option for name data quality",
            altText: "Choose an option for the name data quality",
        },
    },
};

/**
 * Universal Data Element containg a client's Social Security Number
 *
 * Funder:Component               All Programs:All Components
 * Project Type                   All Project Types
 * Data Collected About           All Clients
 * Collection Point               Record Creation
 * Relationship to EnrollmentID   N/A
 * Relationship to PersonalID     One Social Security Number per client
 *
 * System Logic & Notes:
 *  • HMIS end user must be able to edit data to correct errors or reflect changes in client responses
 *  • Systems may display hyphens or other punctuation for legibility but they must export a (max) 9-digit string
 *  • Systems may implement a way to use placeholders for missing data (such as an 'x' to indicate missing digits).
 *    However, it is critical the system have a mechanism in place to correctly track the position of missing digits
 *    since a placehold can appear in any of the 9 positions. Any non-numeric character must be interpreted as a
 *    placeholder
 *  • HMIS software may reject clearly invalid SSNs at the point of entry
 */
export const udeSSN: DataElement = {
    deNumber: "3.02",
    key: "udeSsn",
    name: "SSN",
    displayName: "Social Security Number",
    fields: {
        "ssn": {
            id: "1",
            name: "SSN",
            type: "text",
            maxLength: 9,
            pattern: "[0-9]{9}",
            placeholder: "Enter full, or partial SSN",
            altText: "Enter full, or partial SSN",
        },
        "ssnDataQuality": {
            id: "2",
            name: "SSNDataQuality",
            displayName: "SSN Data Quality",
            type: "options",
            responseOptions: SSN_DATA_QUALITY_3_02_2,
            defaultValue: 99,
            placeholder: "Select an option for SSN data quality",
            altText: "Select an option for SSN data quality",
        },
    },
};

/**
 * Universal Data Element containg a client's Date of Birth
 *
 * Funder:Component               All Programs:All Components
 * Project Type                   All Project Types
 * Data Collected About           All Clients
 * Collection Point               Record Creation
 * Relationship to EnrollmentID   N/A
 * Relationship to PersonalID     One Date of Birth per client
 *
 * System Logic & Notes:
 *  • HMIS end user must be able to edit data to correct errors or reflect changes in client responses
 *  • Data Quality options 8, 9, and 99 are only possible if DOB field is null
 *  • DOB must be exportable in date-field format [yyyy-mm-dd]
 */
export const udeDOB: DataElement = {
    deNumber: "3.03",
    key: "udeDob",
    name: "Date of Birth",
    fields: {
        "dob": {
            id: "1",
            name: "DOB",
            displayName: "DOB",
            type: "date",
            placeholder: "yyyy-mm-dd",
            altText: "Enter client date of birth",
        },
        "dobDataQuality": {
            id: "2",
            name: "DOBDataQuality",
            displayName: "DOB Data Quality",
            type: "options",
            responseOptions: DOB_DATA_QUALITY_3_03_2,
            defaultValue: 99,
            placeholder: "Select an option...",
            altText: "Select an option for date of birth data quality",
        },
    },
};

/**
 * Universal Data Element containg a client's Race and Ethnicity information
 *
 * Funder:Component               All Programs:All Components
 * Project Type                   All Project Types
 * Data Collected About           All Clients
 * Collection Point               Record Creation
 * Relationship to EnrollmentID   N/A
 * Relationship to PersonalID     One Race per client (multiple selections are exported as a single field)
 *
 * System Logic & Notes:
 *  • HMIS end user must be able to edit data to correct errors or reflect changes in client responses
 *  • HMIS software must accommodate up to seven race/ethnicity categories per client
 *  • Field 2 (Additional Race and Ethnicity Detail) has a 100 character limit
 *  • Field 1 options 8, 9, and 99 are single-select, all other options are multi-select
 *  • Field 2 must be null if response is 8, 9, or 99
 */
export const udeRaceEthnicity: DataElement = {
    deNumber: "3.04",
    key: "udeRaceEthnicity",
    name: "Race and Ethnicity",
    fields: {
        "raceEthnicity": {
            id: "1",
            name: "RaceEthnicity",
            displayName: "Race and Ethnicity (as many as are applicable)",
            type: "multi-select",
            responseOptions: RACE_ETHNICITY_CHOICE_3_04_1,
            defaultValue: [] as number[],
            placeholder: "",
            altText: "",
        },
        "amIndAKNative": {
          id: "1",
          name: "AmIndAKNative",
          displayName: "American Indian, Alaska Native, or Indigenous",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "asian": {
          id: "1",
          name: "Asian",
          displayName: "Asian or Asian American",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "blackAfAmerican": {
          id: "1",
          name: "BlackAfAmerican",
          displayName: "Black, African American, or African",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "hispanicLatinao": {
          id: "1",
          name: "HispanicLatinao",
          displayName: "Hispanic/Lantina/o",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "midEastNAfrican": {
          id: "1",
          name: "MidEastNAfrican",
          displayName: "Middle Eastern or North African",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "nativeHIPacific": {
          id: "1",
          name: "NativeHIPacific",
          displayName: "Native Hawaiian or Pacific Islander",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "white": {
          id: "1",
          name: "White",
          displayName: "White",
          type: "checkbox",
          responseOptions: NO_YES_1_10,
          defaultValue: 0,
          placeholder: "",
          altText: ""
        },
        "raceNone": {
            id: "1.a",
            name: "RaceNone",
            displayName: "Race none, choose one only if no race/ethnicity selected",
            type: "options",
            responseOptions: RACE_GENDER_NONE_1_6,
            defaultValue: 0 as number | null,
            placeholder: "",
            altText: "",
        },
        "additionalRaceEthnicity": {
            id: "2",
            name: "AdditionalRaceEthnicity",
            displayName: "Additional Race and Ethnicity Detail",
            type: "text",
            maxLength: 100,
            placeholder: "Additional Race/Ethnicity info",
            altText: "Enter additional race and ethnicity information",
        },
    },
};

/**
 * Universal Data Element containg a client's Veteran Status
 *
 * Funder:Component               All Programs:All Components
 * Project Type                   All Project Types
 * Data Collected About           All Adults (18+)
 * Collection Point               Record Creation
 * Relationship to EnrollmentID   N/A
 * Relationship to PersonalID     One status per client
 *
 * System Logic & Notes:
 *  • HMIS end user must be able to edit data to correct errors, to reflect changes in client responses or status, or to
 *    enter a response for a client who has turned 18.
 *  • HMIS end users are not required to ask clients under 18 about veteran status but HMIS software need not hide this
 *    field in any data entry forms.
 *  • HMIS end users may select 0 for clients under 18
 *  • HMIS system may automatically update response for clients who turn 18 while enrolled - auto response should be 0.
 */
export const udeVeteranStatus: DataElement = {
    deNumber: "3.07",
    key: "udeVeteranStatus",
    name: "Veteran Status",
    fields: {
        "veteranStatus": {
            id: "1",
            name: "VeteranStatus",
            displayName: "Veteran Status",
            type: "options",
            responseOptions: NO_YES_REASONS_FOR_MISSING_DATA_1_8,
            defaultValue: 99,
            placeholder: "Veteran Status",
            altText: "Select an option for veteran status",
        },
    },
};
