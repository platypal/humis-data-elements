export type ExportCsvHeader =
    'ExportID' |
    'SourceType' |
    'SourceID' |
    'SourceName' |
    'SourceContactFirst' |
    'SourceContactLast' |
    'SourceContactPhone' |
    'SourceContactExtension' |
    'SourceContactEmail' |
    'ExportDate' |
    'ExportStartDate' |
    'ExportEndDate' |
    'SoftwareName' |
    'SoftwareVersion' |
    'CSVVersion' |
    'ExportPeriodType' |
    'ExportDirective' |
    'HashStatus' |
    'ImplementationID'

export type OrganizationCsvHeader =
    'OrganizationID' |
    'OrganizationName' |
    'VictimServiceProvider' |
    'OrganizationCommonName' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type UserCsvHeader =
    'UserID' |
    'UserFirstName' |
    'UserLastName' |
    'UserPhone' |
    'UserExtension' |
    'UserEmail' |
    'DateCreated' |
    'DateUpdated' |
    'DateDeleted' |
    'ExportID'

export type ProjectCsvHeader =
    'ProjectID' |
    'OrganizationID' |
    'ProjectName' |
    'ProjectCommonName' |
    'OperatingStartDate' |
    'OperatingEndDate' |
    'ContnuumProject' |
    'ProjectType' |
    'HousingType' |
    'RRHSubType' |
    'ResidentialAffiliation' |
    'TargetPopulation' |
    'HOPWAMedAssistedLivingFac' |
    'PITCount' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type FunderCsvHeader =
    'FunderID' |
    'ProjectID' |
    'Funder' |
    'OtherFunder' |
    'GrantID' |
    'StartDate' |
    'EndDate' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type ProjectCoCCsvHeader =
    'ProjectCoCID' |
    'ProjectID' |
    'CoCCode' |
    'Geocode' |
    'Address1' |
    'Address2' |
    'City' |
    'State' |
    'ZIP' |
    'GeographyType' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type InventoryCsvHeader =
    'InventoryID' |
    'ProjectID' |
    'CoCCode' |
    'HouseholdType' |
    'Availability' |
    'UnitInventory' |
    'BedInventory' |
    'CHVetBedInventory' |
    'YouthVetBedInventory' |
    'VetBedInventory' |
    'CHYouthBedInventory' |
    'YouthBedInventory' |
    'CHBedInventory' |
    'OtherBedInventory' |
    'ESBedType' |
    'InventoryStartDate' |
    'InventoryEndDate' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type AffiliationCsvHeader =
    'AffiliationID' |
    'ProjectID' |
    'ResProjectID' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type HMISParticipationCsvHeader =
    'HMISParticipationID' |
    'ProjectID' |
    'HMISParticipationType' |
    'HMISParticipationStatusStartDate' |
    'HMISParticipationStatusEndDate' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type CEParticipationCsvHeader =
    'CEParticipationID' |
    'ProjectID' |
    'AccessPoint' |
    'PreventioinAssessment' |
    'CrisisAssessment' |
    'HousingAssessment' |
    'DirectServices' |
    'ReceivesReferrals' |
    'CEParticipationStatusStartDate' |
    'CEParticipationStatusEndDate' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type ClientCsvHeader =
    'PersonalID' |
    'FirstName' |
    'MiddleName' |
    'LastName' |
    'NameSuffix' |
    'NameDataQuality' |
    'SSN' |
    'SSNDataQuality' |
    'DOB' |
    'DOBDataQuality' |
    'Sex' |
    'RaceEthnicity' | // Not used in CSV spec
    'AmIndAKNative' |
    'Asian' |
    'BlackAfAmerican' |
    'HispanicLatinao' |
    'MidEastNAfrican' |
    'NativeHIPacific' |
    'White' |
    'RaceNone' |
    'AdditionalRaceEthnicity' |
    'VeteranStatus' |
    'YearEnteredService' |
    'YearSeparated' |
    'WorldWarII' |
    'KoreanWar' |
    'VietnamWar' |
    'DesertStorm' |
    'AfghanistanOEF' |
    'IraqOIF' |
    'IraqOND' |
    'OtherTheater' |
    'MilitaryBranch' |
    'DischargeStatus' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type EnrollmentCsvHeader =
    'EnrollmentID' |
    'PersonalID' |
    'ProjectID' |
    'EntryDate' |
    'HouseholdID' |
    'RelationshipToHoH' |
    'EnrollmentCoC' |
    'LivingSituation' |
    'RentalSubsidyType' |
    'LengthOfStay' |
    'LOSUnderThreshold' |
    'PreviousStreetESSH' |
    'DateToStreetESSH' |
    'TimesHomelessPastThreeYears' |
    'MonthsHomelessPastThreeYears' |
    'DisablingCondition' |
    'DateOfEngagement' |
    'MoveInDate' |
    'DateOfPATHStatus' |
    'ClientEnrolledInPATH' |
    'ReasonNotEnrolled' |
    'PercentAMI' |
    'ReferralSource' |
    'CountOutreachReferralApproaches' |
    'DateOfBCPStatus' |
    'EligibleForRHY' |
    'ReasonNoServices' |
    'RunawayYouth' |
    'FormerWardChildWelfare' |
    'ChildWelfareYears' |
    'ChildWelfareMonths' |
    'FormerWardJuvenileJustice' |
    'JuvenileJusticeYears' |
    'JuvenileJusticeMonths' |
    'UnemploymentFam' |
    'MentalHealthDisorderFam' |
    'PhysicalDisabilityFam' |
    'AlcoholDrugUseDisorderFam' |
    'InsufficientIncome' |
    'IncarceratedParent' |
    'VAMCStation' |
    'TargetScreenReqd' |
    'TimeToHousingLoss' |
    'AnnualPercentAMI' |
    'LiteralHomelessHistory' |
    'ClientLeaseholder' |
    'HOHLeaseholder' |
    'SubsidyAtRisk' |
    'EvictionHistory' |
    'CriminalRecord' |
    'IncarceratedAdult' |
    'PrisonDischarge' |
    'SexOffender' |
    'DisabledHoH' |
    'CurrentPregnant' |
    'SingleParent' |
    'DependentUnder6' |
    'HH5Plus' |
    'CoCPrioritized' |
    'HPScreeningScore' |
    'ThresholdScore' |
    'MentalHealthConsultation' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type ExitCsvHeader =
    'ExitID' |
    'EnrollmentID' |
    'PersonalID' |
    'ExitDate' |
    'Destination' |
    'DestinationSubsidyType' |
    'OtherDestination' |
    'HousingAssessment' |
    'SubsidyInformation' |
    'ProjectCompletionStatus' |
    'EarlyExitReason' |
    'ExchangeForSex' |
    'ExchangeForSexPastThreeMonths' |
    'CountOfExchangeForSex' |
    'CountOfExchangeForSexPastThreeMonths' |
    'AskedOrForcedToExchangeForSex' |
    'AskedOrForcedToExchangeForSexPastThreeMonths' |
    'WorkplaceViolenceThreats' |
    'WorkplacePromiseDifference' |
    'CoercedToContinueWork' |
    'LaborExploitPastThreeMonths' |
    'CounselingReceived' |
    'IndividualCounseling' |
    'FamilyCounseling' |
    'GroupCounseling' |
    'SessionCountAtExit' |
    'PostExitCounselingPlan' |
    'SessionsInPlan' |
    'DestinationSafeClient' |
    'DestinationSafeWorker' |
    'PosAdultConnections' |
    'PosPeerConnections' |
    'AftercareDate' |
    'AftercareProvided' |
    'EmailSocialMedia' |
    'Telephone' |
    'InPersonIndividual' |
    'InPersonGroup' |
    'CMExitReason' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type IncomeBenefitsCsvHeader =
    'IncomeBenefitsID' |
    'EnrollmentID' |
    'PersonalID' |
    'InformationDate' |
    'IncomeFromAnySource' |
    'TotalMonthlyIncome' |
    'Earned' |
    'EarnedAmount' |
    'Unemployment' |
    'UnemploymentAmount' |
    'SSI' |
    'SSIAmount' |
    'SSDI' |
    'SSDIAmount' |
    'VADisabilityService' |
    'VADisabilityServiceAmount' |
    'VADisabilityNonService' |
    'VADisabilityNonServiceAmount' |
    'PrivateDisability' |
    'PrivateDisabilityAmount' |
    'WorkersComp' |
    'WorkersCompAmount' |
    'TANF' |
    'TANFAmount' |
    'GA' |
    'GAAmount' |
    'SocSecRetirement' |
    'SocSecRetirementAmount' |
    'Pension' |
    'PensionAmount' |
    'ChildSupport' |
    'ChildSupportAmount' |
    'Alimony' |
    'AlimonyAmount' |
    'OtherIncomeSource' |
    'OtherIncomeAmount' |
    'OtherIncomeSourceIdentify' |
    'BenefitsFromAnySource' |
    'SNAP' |
    'WIC' |
    'TANFChildCare' |
    'TANFTransportation' |
    'OtherTANF' |
    'OtherBenefitsSource' |
    'OtherBenefitsSourceIdentify' |
    'InsuranceFromAnySource' |
    'Medicaid' |
    'NoMedicaidReason' |
    'Medicare' |
    'NoMedicareReason' |
    'SCHIP' |
    'NoSCHIPReason' |
    'VHAServices' |
    'NoVHAReason' |
    'EmployerProvided' |
    'NoEmployerProvidedReason' |
    'COBRA' |
    'NoCOBRAReason' |
    'PrivatePay' |
    'NoPrivatePayReason' |
    'StateHealthIns' |
    'NoStateHealthInsReason' |
    'IndianHealthServices' |
    'NoIndianHealthServicesReason' |
    'OtherInsurance' |
    'OtherInsuranceIdentify' |
    'ADAP' |
    'NoADAPReason' |
    'RyanWhiteMedDent' |
    'NoRyanWhiteReason' |
    'ConnectionWithSOAR' |
    'DataCollectionStage' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type HealthAndDVCsvHeader =
    'HealthAndDVID' |
    'EnrollmentID' |
    'PersonalID' |
    'InformationDate' |
    'DomesticViolenceSurvivor' |
    'WhenOccurred' |
    'CurrentlyFleeing' |
    'GeneralHealthStatus' |
    'DentalHealthStatus' |
    'MentalHealthStatus' |
    'PregnancyStatus' |
    'DueDate' |
    'DataCollectionStage' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type EmploymentEducationCsvHeader =
    'EmploymentEducationID' |
    'EnrollmentID' |
    'PersonalID' |
    'InformationDate' |
    'LastGradeCompleted' |
    'SchoolStatus' |
    'Employed' |
    'EmploymentType' |
    'NotEmployedReason' |
    'DataCollectionStage' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type DisabilitiesCsvHeader =
    'DisabilitiesID' |
    'EnrollmentID' |
    'PersonalID' |
    'InformationDate' |
    'DisabilityType' |
    'DisabilityResponse' |
    'IndefiniteAndImpairs' |
    'TCellCountAvailable' |
    'TCellCount' |
    'TCellSource' |
    'ViralLoadAvailable' |
    'ViralLoad' |
    'ViralLoadSource' |
    'AntiRetroviral' |
    'DataCollectionStage' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type ServicesCsvHeader =
    'ServicesID' |
    'EnrollmentID' |
    'PersonalID' |
    'DateProvided' |
    'RecordType' |
    'TypeProvided' |
    'OtherTypeProvided' |
    'MovingOnOtherType' |
    'SubTypeProvided' |
    'FAAmount' |
    'FAStartDate' |
    'FAEndDate' |
    'ReferralOutcome' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type CurrentLivingSituationCsvHeader =
    'CurrentLivingSitID' |
    'EnrollmentID' |
    'PersonalID' |
    'InformationDate' |
    'CurrentLivingSituation' |
    'CLSSubsidyType' |
    'VerifiedBy' |
    'LeaveSituation14Days' |
    'SubsequentResidence' |
    'ResourcesToObtain' |
    'LeaseOwn60Day' |
    'MovedTwoOrMore' |
    'LocationDetails' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type AssessmentCsvHeader =
    'AssessmentID' |
    'EnrollmentID' |
    'PersonalID' |
    'AssessmentDate' |
    'AssessmentLocation' |
    'AssessmentType' |
    'AssessmentLevel' |
    'PrioritizationStatus' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type AssessmentQuestionsCsvHeader =
    'AssessmentQuestionID' |
    'AssessmentID' |
    'EnrollmentID' |
    'PersonalID' |
    'AssessmentQuestionGroup' |
    'AssessmentQuestionOrder' |
    'AssessmentQuestion' |
    'AssessmentAnswer' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type AssessmentResultsCsvHeader =
    'AssessmentResultID' |
    'AssessmentID' |
    'EnrollmentID' |
    'PersonalID' |
    'AssessmentResultType' |
    'AssessmentResult' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type EventCsvHeader =
    'EventID' |
    'EnrollmentID' |
    'PersonalID' |
    'EventDate' |
    'Event' |
    'ProbSolDivRRResult' |
    'ReferralCaseManageAfter' |
    'LocationCrisisOrPHHousing' |
    'ReferralResult' |
    'ResultDate' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type YouthEducationStatusCsvHeader =
    'YouthEducationStatusID' |
    'EnrollmentID' |
    'PersonalID' |
    'InformationDate' |
    'CurrentSchoolAttend' |
    'MostRecentEdStatus' |
    'CurrentEdStatus' |
    'DataCollectionStage' |
    'DateCreated' |
    'DateUpdated' |
    'UserID' |
    'DateDeleted' |
    'ExportID'

export type AllCsvHeaders = 
    ExportCsvHeader |
    OrganizationCsvHeader |
    UserCsvHeader | 
    ProjectCsvHeader |
    FunderCsvHeader |
    ProjectCoCCsvHeader |
    InventoryCsvHeader |
    AffiliationCsvHeader |
    HMISParticipationCsvHeader |
    CEParticipationCsvHeader |
    ClientCsvHeader |
    EnrollmentCsvHeader |
    ExitCsvHeader |
    IncomeBenefitsCsvHeader |
    HealthAndDVCsvHeader |
    EmploymentEducationCsvHeader |
    DisabilitiesCsvHeader |
    ServicesCsvHeader |
    CurrentLivingSituationCsvHeader |
    AssessmentCsvHeader |
    AssessmentQuestionsCsvHeader |
    AssessmentResultsCsvHeader |
    EventCsvHeader |
    YouthEducationStatusCsvHeader
