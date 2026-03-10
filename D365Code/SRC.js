"use strict";
// JavaScript source code
if (typeof (CAT) === "undefined") { CAT = {}; }
if (typeof (CAT.DSRM) === "undefined") { CAT.DSRM = {}; }

CAT.DSRM.ServiceRequestCommon = {
    /**
     * Constants
     */
    ACTIVE: "0",
    INACTIVE: "1",
    DEALER_ACCESS_NONE: "100000000",
    DEALER_ACCESS_EDIT: "100000001",
    DEALER_ACCESS_READ: "100000002",
    DEALER_ACCESS_TECHEDIT: "100000003",
    DEALER_ACCESS_TECHEDIT_STATUSTOOPEN: "100000008",
    DPPM_ACCESS_CREATE_EDIT: "100000004",
    DPPM_ACCESS_LIMITED_EDIT: "100000006",
    DPPM_ACCESS_READ_ONLY: "100000005",
    GOODWILL_WARRANTY_EDIT: "100000007",
    RESTRICTED_CONTACT_YES: { value: 1, text: "Yes" },
    KEEP_IN_REGION_YES: "1",
    KEEP_IN_REGION_NO: "0",
    OPTION_PRIORITY_PRODUCT_INQUIRY: { value: "100000000", text: "Product Inquiry/Informational" },
    OPTION_PRIORITY_MEDIUM: { value: "100000002", text: "Medium" },
    OPTION_PRIORITY_HIGH: { value: "100000003", text: "High" },
    OPTION_DEALER_URGENT_YES: { value: 1, text: "Yes" },
    OPTION_DEALER_URGENT_NO: { value: 0, text: "No" },
    OPTION_DEALER_SITUATION_TECH_IS_AT_UNIT: { value: 1, text: "Tech is at the unit:  Waiting for instructions" },
    OPTION_DEALER_SITUATION_UNIT_TECH_ARE_AVAILABLE_BUT_TECH_HAS_OTHER_WORK: { value: 2, text: "Unit / Tech are available but tech has other work until information is provided (Unit at shop or close proximity, etc)" },
    OPTION_DEALER_SITUATION_TECH_LEFT_THE_UNIT_AND_NEEDS_TO_BE_SCHEDULED: { value: 3, text: "Tech left the unit and needs to be scheduled to return" },
    OPTION_DEALER_SITUATION_PRODUCT_INFORMATIONAL: { value: 4, text: "Product Informational / Inquiry" },
    OPTION_DEALER_SITUATION_OTHER: { value: 5, text: "Other (Enter in explain situation field)" },
    NOTE_REQUIRED_ALERRT: "Please provide a SR Note describing why this resolution did not resolve the request.",
    SAVE_MODE_SAVE_AND_CLOSE: 2,
    SAVE_ON_DEALERURGENT: false,
    PREVENT_SAVE_FGWSERIALNUMBERPROVISIONCHECK_CONFIRM: false,
    SAVE_EVENT: 1,
    SAVE_EVENT_SAVE_AND_CLOSE: 2,
    SAVE_EVENT_SAVE_AND_NEW: 59,
    OLDTECHNICIAN: null,
    IS_FIRST_ONLOAD: false,
    IS_SAVE_CLICKED: false,
    ACTION_REASONDENYRESOLUTION: "REASONDENYRESOLUTION",
    ACTION_CHANGECONTACT_FORM: "CHANGECONTACTFORM",
    ACTION_CHANGECONTACT_RIBBON: "CHANGECONTACTRIBBON",
    ACTION_CHANGECONTACT_LIST_RIBBON: "CHANGECONTACTLISTRIBBON",
    ACTION_CHANGE_EVENT_TYPE: "CHANGEEVENTTYPE",
    ACTION_SIS_FEEDBACK: "SISFEEDBACK",
    ACTION_REVISION: "REVISION",
    ACTION_STATUS_CHANGE_PDA: "STATUSCHANGEPDA",
    CRM_FORM_TYPE_CREATE: "1",
    CRM_FORM_TYPE_UPDATE: "2",
    CRM_FORM_TYPE_DISABLED: 4,
    FORM_DEALER_FULL: "DEALER FULL",
    FORM_DEALER_SHORT: "DEALER SHORT",
    FORM_INTERNAL: "INTERNAL",
    INQUIRY_PARTSTECH_SISFEEDBACK: "SIS FEEDBACK",
    INQUIRY_PARTSTECH_REVISION_REQUEST: "REVISION REQUEST",
    INQUIRY_EMP_PARTSIDENTIFICATION: "EMP PARTS IDENTIFICATION/PARTS TECH",
    INQUIRY_EMP_CUSTOMERSERVICE: "EMP CUSTOMER SERVICE",
    INQUIRY_EMP_PARTSCONVERSION: "EMP PARTS CONVERSION",
    INQUIRY_EMP_DRAGLINEQUOTE: "EMP DRAGLINE QUOTE",
    INQUIRY_EMP_PARTSDIMENSIONAL_SPECIFICATION: "EMP PARTS DIMENSIONAL/SPECIFICATION",
    INQUIRY_DSN_INCIDENT: "INCIDENT",
    INQUIRY_DSN_DSNINCIDENT: "PRODUCT HEALTH-INCIDENT",
    INQUIRY_DSN_FGW_INCIDENT: "FGW INCIDENT",
    INQUIRY_DSN_FGW_DSNINCIDENT: "FGW DSN & INCIDENT",
    INQUIRY_DSN_PASSWORD: "PASSWORD",
    INQUIRY_DSN_AFA: "APPLIED FAILURE ANALYSIS (AFA)",
    INQUIRY_DSN_PRODUCTHEALTH: "PRODUCT HEALTH",
    INQUIRY_DSN_SIFEXPOSURE: "SIF EXPOSURE",
    INQUIRY_DSN_MWM_PRODUCT_HEALTH: "MWM PRODUCT HEALTH",
    INQUIRY_DSN_MWM_CG_PRODUCT_HEALTH: "MWM CG PRODUCT HEALTH",
    INQUIRY_SYSTEMTECH_PRODUCTTECHNOLOGY: "Product Technologies - Technical Issue",
    PREFACE_SISFEEDBACK: "A SIS Feedback request is created from ",
    PREFACE_REVISION: "A Revision request is created from ",
    LABEL_TAKEOWNERSHIP: "Please explain the reason you are taking ownership of this Service Request",
    LABEL_SISFEEDBACK: "Please explain the reason for SIS Feedback/ Revision",
    LABEL_PROMPTSRNOTE: "Please explain the reason for change (SR Note)",
    BRAND_CATERPILLAR: 1,
    BRAND_PERKINS: 2,
    BRAND_FGWILSON: 3,
    BRAND_MWM: 4,
    //DASHBOARD_DEFAULTVIEW: { id: '9f436791-28b4-ed11-83fe-00224808dbea', name: "My Non-Closed SRs" },
    DASHBOARD_DEFAULTVIEW: { id: '6eff04f2-be98-ee11-be37-00224808dc74', name: "My Non-Closed SRs (Excluding DPPM)" },
    SIS_FEEDBACK: { value: 100000000, text: "SIS Feedback" },
    REVISION: { value: 100000001, text: "Revision" },
    NONE: { value: 100000002, text: "None" },
    STATUS_UNSUBMITTED: { value: 1, text: "Unsubmitted" },
    STATUS_SUBMITTED: { value: 2, text: "Submitted" },
    STATUS_OPEN: { value: 3, text: "Open" },
    STATUS_PENDINGDEALERACTION: { value: 4, text: "Pending Dealer Action" },
    STATUS_CLOSED: { value: 5, text: "Closed" },
    STATUS_SUBMITTEDTOTCQUEUE: { value: 6, text: "Submitted to Dealer Queue" },
    STATUS_PENDINGTECHRESPONSE: { value: 8, text: "Pending Tech Response" },
    STATUS_DEALEROPEN: { value: 7, text: "Dealer Open" },
    STATUS_DEALERCLOSED: { value: 9, text: "Dealer Closed" },
    STATUS_DEALERPENDING: { value: 10, text: "Dealer Pending" },
    STATUS_ISSUEPENDING: { value: 11, text: "Issue Pending" },
    SUBSTATUS_WORKINPROGRESS: { value: 100000000, text: "Work In Progress" },
    SUBSTATUS_PENDINGENGINEERINGRESPONSE: { value: 100000001, text: "Pending Engineering Response" },
    SUBSTATUS_PENDINGMEDIA: { value: 100000002, text: "Pending Media / Record Center Revision" },
    SUBSTATUS_DEALERREQUESTTORESPOND: { value: 100000003, text: "Dealer Request to Respond" },
    SUBSTATUS_PENDINGVERIFICATION: { value: 100000004, text: "Pending Verification" },
    SUBSTATUS_DEALERPDATIME: { value: 100000005, text: "Dealer PDA Time" },
    SUBSTATUS_PENDINGCPIRESOLUTION: { value: 100000006, text: "Pending CPI Resolution" },
    SUBSTATUS_PENDINGGLOBALPROCESS: { value: 100000007, text: "Pending Other Global Process Resolution" },
    SUBSTATUS_POTENTIALLYCLOSED: { value: 100000008, text: "Potentially Closed" },
    SUBSTATUS_AWAITINGVERIFICATION: { value: 100000009, text: "Awaiting Verification" },
    SUBSTATUS_PDCREQUESTTORESPOND: { value: 100000010, text: "PDC Request to Respond" },
    SUBSTATUS_PDCIMPLEMENTATION: { value: 100000011, text: "PDC Implementing Recommended Action" },
    SUBSTATUS_RESOLVED: { value: 100000012, text: "Resolved" },
    SUBSTATUS_CPIISSUED: { value: 100000013, text: "CPI Issue Generated" },
    SUBSTATUS_NODEALERRESPONSE: { value: 100000014, text: "No Dealer Response" },
    SUBSTATUS_OTHERGLOBALPROCESS: { value: 100000015, text: "Other Global Process" },
    SUBSTATUS_DUPLICATE: { value: 100000016, text: "Duplicate" },
    SUBSTATUS_TOBEDELETED: { value: 100000017, text: "To be Deleted" },
    SUBSTATUS_PDATOTECH: { value: 100000018, text: "PDA to Tech" },
    SUBSTATUS_CONTAINMENTINPLACE: { value: 100000019, text: "Containment in Place" },
    SUBSTATUS_PENDINGPURCHASING: { value: 100000021, text: "Pending Purchasing Response" },
    SUBSTATUS_PDATOTC: { value: 100000020, text: "PDA to TC" },
    SUBSTATUS_PENDINGSIB: { value: 100000022, text: "Pending SIB" },
    SUBSTATUS_PROCESSED: { value: 100000023, text: "Processed" },
    SUBSTATUS_PENDINGDEBITCREDIT: { value: 100000024, text: "Pending Debit / Credit Creation" },
    SUBSTATUS_APPROVED: { value: 100000025, text: "Approved" },
    SUBSTATUS_DECLINED: { value: 100000026, text: "Declined" },
    SUBSTATUS_PENDINGAUTHORIZATIONNPR: { value: 100000040, text: "Pending Authorization / NPR" },
    SUBSTATUS_PENDINGBUSINESSPARTNERRESPONSE: { value: 100000052, text: "Pending Business Partner Response" },
    SUBSTATUS_NOBUSINESSPARTNERRESPONSE: { value: 100000053, text: "No Business Partner Response" },
    FORM_FACTOR_UNKNOWN: 0,
    FORM_FACTOR_DESKTOP: 1,
    FORM_FACTOR_TABLET: 2,
    FORM_FACTOR_PHONE: 3,
    ATTACHMENT_TYPE_SR: { value: 100000000, text: "SR Attachment" },
    ATTACHMENT_TYPE_INTERNAL: { value: 100000001, text: "Internal Attachment" },
    ATTACHMENT_TYPE_EXTERNAL: { value: 100000002, text: "External Attachment" },
    TAB_DISPLAY_STATE_EXPANDED: "expanded",
    TAB_DISPLAY_STATE_COLLAPSED: "collapsed",
    REVISION_ALERT_NOACCESS: "Assignee do not have access to Parts Tech",
    SISFEEDBACK_CONFIRMATION: "Are you sure you want to create a SIS Feedback related to this SR? (Yes to continue or Cancel)",
    REVISION_CONFIRMATION: "Are you sure you want to create a Revision related to this SR? (Yes to continue or Cancel)",
    MULTIPLE_EMAIL_VALIDATION_ERROR_MESSAGE: "Invalid characters identified - Please review for correct email address format and separate email addresses with a semi-colon.",
    SINGLE_EMAIL_VALIDATION_ERROR_MESSAGE: "Invalid characters identified - Please review for correct email address format and enter only one email address.",
    ALERT_CHANGED_TECHNICIAN_ACCESS: "The Technician does not have Edit access for {0} Event type. Please select another contact.",
    PRIORITY_PRODUCTINFO: { value: 100000000, text: "Product Inquiry/Informational" },
    PRIORITY_MEDIUM: { value: 100000002, text: "Medium" },
    PRIORITY_HIGH: { value: 100000003, text: "High" },
    EVENT_DSN: { value: 1, text: "DSN", logicalName: "cat_dsn" },
    EVENT_PARTSTECH: { value: 2, text: "Parts", logicalName: "cat_partstech" },
    EVENT_EMP: { value: 3, text: "EMP", logicalName: "cat_emp" },
    EVENT_SYSTEMTECH: { value: 4, text: "System Tech", logicalName: "cat_systemtech" },
    EVENT_GLOBALWARRANTY: { value: 5, text: "Global Warranty", logicalName: "cat_globalwarranty" },
    EVENT_PIQ: { value: 6, text: "PIQ", logicalName: "cat_piq" },
    EVENT_GOODWILL: { value: 7, text: "Goodwill", logicalName: "cat_goodwill" },
    EVENT_PDC: { value: 8, text: "PDC", logicalName: "cat_pdc" },
    EVENT_COMMONPSCRM: { value: 9, text: "Common PSCRM", logicalName: "cat_pic" },
    EVENT_DEALERPPM: { value: 10, text: "Dealer PPM", logicalName: "cat_dealercpi" },
    EVENT_PRICING: { value: 11, text: "Pricing", logicalName: "cat_pricing" },
    ALLOWED_ROLES: ["Goodwill - Supervisor", "Goodwill Service Eng Rep"],
    APPOINTMENT_REQUESTED_MESSAGE: "An Appointment Time has been requested on this SR.  Please respond to the appointment status to unlock this SR for editing.",
    CONFIRM_OWNERSHIP: "Are you sure that you want to take ownership of this sr?",
    MSG_NOT_SUPPLIED_GENSETSERIALNUMBER_OR_SALESORDER: "You have not supplied a Genset Serial number or a Sales Order / Item number.  Select OK to submit ticket, Cancel to enter details.",
    NOTE_FORMAT: "The Internal Note was created from a Direct Email \n Subject: 0 \n From: 1 \n To: 2 \n CC: 3 \n Body of Email: 4",
    NEW_RELATEDRECORD_UNSAVECHANGES: "Please save the changes before adding a SR Note.",
    RESTRICT_DELETE_ALERT: "Some Records were not deleted",
    //MSG_TRIPS_TO_MACHINE_CONFIRMATION: "Would you like to update the \"Trips To Machine\" field before Save and Closing of this SR Note. Clicking \"OK\" will display current trips below for you to adjust, \"Cancel\" will decline the opportunity to adjust the trips in this SR Note.",
    MSG_DEALER_URGENT_DEALER_CONFIRMATION: "This SR is currently showing Dealer Urgent as \"Yes\" Please confirm the current Dealer Situation selection is accurate at this time. Also, please make sure you have supplied a working phone number so we can contact you on this issue. Click \"OK\" to proceed with submitting to Cat or click \"cancel\" to adjust the Dealer Situation / Unit location field.",
    PRIORITY: 0,
    DEALER_URGENT: 0,
    DEALER_URGENT_YES: 1,
    DSN_EDITFORM_SECTIONS: ["tab_edit_sec_title", "tab_edit_sec_overview", "tab_edit_sec_resolution", "tab_edit_sec_parts", "tab_edit_sec_srattachments", "tab_edit_sec_srnotes", "tab_edit_sec_input", "tab_edit_sec_datefields"],
    IS_SAVE: false,
    SERVICEENGREPID: "",
    SERVICEENGREPNAME: "",
    INQUIRYTYPE: "",
    INQUIRYTYPEID: "",
    INQUIRYTYPENAME: "",
    RESOLUTIONACCESSIBLE: "",
    RESOLUTIONACCESSIBLEID: "",
    RESOLUTIONACCESSIBLENAME: "",
    WHERERESOLUTIONFOUNDID: "",
    WHERERESOLUTIONFOUNDNAME: "",
    WHERERESOLUTIONFOUND: "",
    ROOTCAUSEID: "",
    ROOTCAUSENAME: "",
    USERID: null,
    CONTACTID: null,
    CONTACTNAME: null,
    TECHNICIANID: null,
    TECHNICIANNAME: null,
    TECHID: null,
    SR_NOTE_QUERY_STRING: null,
    PART_QUERY_STRING: null,
    EXTERNAL_NOTE_QUERY_STRING: null,
    NOTE_PROMPT_ACTIONS: [],
    TEST_IRON_VALIDATION_QUERY_STRING: null,
    AFFECTED_UNIT_QUERY_STRING: null,
    ACTION_ITEM_QUERY_STRING: null,
    TWO_OPTION_SET_FALSE: { value: "0", text: "No" },
    TWO_OPTION_SET_TRUE: { value: "1", text: "Yes" },
    NOTREQUIRED_SRS: { text: "Not Required", value: 0 },
    REQUIRED_SRS: { text: "Required", value: 1 },
    PROCEED_SRS: { text: "Proceed", value: 2 },
    DONOTPROCEED_SRS: { text: "Do Not Proceed", value: 3 },
    PORTALVIEWTYPE_SYSTEM: { text: "System View", value: 1 },
    PORTALVIEWTYPE_PERSONAL: { text: "Personal View", value: 2 },
    PORTALVIEWTYPE_QUICKFIND: { text: "Quick Find View", value: 3 },
    NOTEREPORT: {},
    DEALERNOTEREPORT: {},
    PORTALVIEWSDEFINIIONS: [],
    USERDEFAULTVIEWNAME: "",
    SYSTEMDEFAULTVIEW: "",
    USERDEFAULTVIEWS: {},
    ISRESET: false,
    ISOWNERCONTACTNOTONFORM: true,
    ORGINAL_EVENTTYPE_VALUE: 0,
    SHOWN_TO_DEALER: { value: 695100000, text: "Shown to Dealer" },
    SHOWN_TO_INTERNAL: { value: 695100001, text: "Shown to Internal" },
    SHOWN_TO_ALL: { value: 695100002, text: "All" },
    SHARED_WITH_DEALERS_YES: { value: "100000001", text: "Yes" },
    DEALER_AUTHORIZED_NOTES_SHARE_YES: { value: "0", text: "Yes" },
    DEALER_AUTHORIZED_NOTES_SHARE_NO: { value: "1", text: "No" },
    SR_UPDATE_VALIDATION_ERROR: "SR Status has changed since opening this form.  Click \"OK\" to refresh the page with current SR information, but any changes will be lost.  Click \"Cancel\" to stay on the page, so you can copy/paste any unsaved work.",
    APPLICATION_USER_ID: "4700af49-80dc-ee11-904d-00224808dec6", // Cat Product Support Portal User Guid
    CONTACT_TIMEZONE_DETAILS: { timezone: "Etc/UTC", offset: 0 },
    IS_SAME_CURRENT_TIMEZONE: false,
    CreatedByRoles: {
        TC: { value: 0, text: "TC" },
        TECH: { value: 1, text: "Tech" },
        TIER1: { value: 2, text: "Tier1" },
        TIER2: { value: 3, text: "Tier2" },
        READ: { value: 4, text: "READ" }
    },
    MOMENT_TIMEZONE_MAP: [
        { label: "(GMT-12:00) International Date Line West _ Dateline Standard Time", timezone: "Etc/GMT+12" },
        { label: "(GMT-11:00) Coordinated Universal Time-11 _ UTC-11", timezone: "Etc/GMT+11" },
        { label: "(GMT-10:00) Hawaii _ Hawaiian Standard Time", timezone: "Pacific/Honolulu" },
        { label: "(GMT-10:00) Aleutian Islands _ Aleutian Standard Time", timezone: "America/Adak" },
        { label: "(GMT-09:30) Marquesas Islands _ Marquesas Standard Time", timezone: "Pacific/Marquesas" },
        { label: "(GMT-09:00) Alaska _ Alaskan Standard Time", timezone: "America/Anchorage" },
        { label: "(GMT-09:00) Coordinated Universal Time-09 _ UTC-09", timezone: "Etc/GMT+9" },
        { label: "(GMT-08:00) Pacific Time (US & Canada) _ Pacific Standard Time", timezone: "America/Los_Angeles" },
        { label: "(GMT-08:00) Baja California _ Pacific Standard Time (Mexico)", timezone: "America/Tijuana" },
        { label: "(GMT-08:00) Coordinated Universal Time-08 _ UTC-08", timezone: "Etc/GMT+8" },
        { label: "(GMT-07:00) Mountain Time (US & Canada) _ Mountain Standard Time", timezone: "America/Denver" },
        { label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan _ Mountain Standard Time (Mexico)", timezone: "America/Mazatlan" },
        { label: "(GMT-07:00) Arizona _ US Mountain Standard Time", timezone: "America/Phoenix" },
        { label: "(GMT-07:00) Yukon _ Yukon Standard Time", timezone: "America/Whitehorse" },
        { label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan - Old _ Mexico Standard Time 2", timezone: "America/Mazatlan" },
        { label: "(GMT-06:00) Central Time (US & Canada) _ Central Standard Time", timezone: "America/Chicago" },
        { label: "(GMT-06:00) Saskatchewan _ Canada Central Standard Time", timezone: "America/Regina" },
        { label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey _ Central Standard Time (Mexico)", timezone: "America/Mexico_City" },
        { label: "(GMT-06:00) Central America _ Central America Standard Time", timezone: "America/Guatemala" },
        { label: "(GMT-06:00) Easter Island _ Easter Island Standard Time", timezone: "Pacific/Easter" },
        { label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey - Old _ Mexico Standard Time", timezone: "America/Mexico_City" },
        { label: "(GMT-05:00) Eastern Time (US & Canada) _ Eastern Standard Time", timezone: "America/New_York" },
        { label: "(GMT-05:00) Indiana (East) _ US Eastern Standard Time", timezone: "America/Indiana/Indianapolis" },
        { label: "(GMT-05:00) Haiti _ Haiti Standard Time", timezone: "America/Port-au-Prince" },
        { label: "(GMT-05:00) Havana _ Cuba Standard Time", timezone: "America/Havana" },
        { label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco _ SA Pacific Standard Time", timezone: "America/Bogota" },
        { label: "(GMT-05:00) Turks and Caicos _ Turks And Caicos Standard Time", timezone: "America/Grand_Turk" },
        { label: "(GMT-05:00) Chetumal _ Eastern Standard Time (Mexico)", timezone: "America/Cancun" },
        { label: "(GMT-05:00) CDT (Central Daylight Time)", timezone: "Etc/GMT+5" },
        { label: "(GMT-04:00) Caracas _ Venezuela Standard Time", timezone: "America/Caracas" },
        { label: "(GMT-04:00) Atlantic Time (Canada) _ Atlantic Standard Time", timezone: "America/Halifax" },
        { label: "(GMT-04:00) Georgetown, La Paz, Manaus, San Juan _ SA Western Standard Time", timezone: "America/La_Paz" },
        { label: "(GMT-04:00) Santiago _ Pacific SA Standard Time", timezone: "America/Santiago" },
        { label: "(GMT-04:00) Cuiaba _ Central Brazilian Standard Time", timezone: "America/Cuiaba" },
        { label: "(GMT-04:00) Asuncion _ Paraguay Standard Time", timezone: "America/Asuncion" },
        { label: "(GMT-03:30) Newfoundland _ Newfoundland Standard Time", timezone: "America/St_Johns" },
        { label: "(GMT-03:00) Brasilia _ E. South America Standard Time", timezone: "America/Sao_Paulo" },
        { label: "(GMT-03:00) Buenos Aires _ Argentina Standard Time", timezone: "America/Argentina/Buenos_Aires" },
        { label: "(GMT-03:00) Cayenne, Fortaleza _ SA Eastern Standard Time", timezone: "America/Cayenne" },
        { label: "(GMT-03:00) Salvador _ Bahia Standard Time", timezone: "America/Bahia" },
        { label: "(GMT-03:00) Saint Pierre and Miquelon _ Saint Pierre Standard Time", timezone: "America/Miquelon" },
        { label: "(GMT-03:00) Montevideo _ Montevideo Standard Time", timezone: "America/Montevideo" },
        { label: "(GMT-03:00) Araguaina _ Tocantins Standard Time", timezone: "America/Araguaina" },
        { label: "(GMT-03:00) Punta Arenas _ Magallanes Standard Time", timezone: "America/Punta_Arenas" },
        { label: "(GMT-03:00) Greenland _ Greenland Standard Time", timezone: "America/Nuuk" },
        { label: "(GMT-02:00) Mid-Atlantic _ Mid-Atlantic Standard Time", timezone: "Atlantic/South_Georgia" },
        { label: "(GMT-02:00) Coordinated Universal Time-02 _ UTC-02", timezone: "Etc/GMT+2" },
        { label: "(GMT-01:00) Azores _ Azores Standard Time", timezone: "Atlantic/Azores" },
        { label: "(GMT-01:00) Cabo Verde Is. _ Cape Verde Standard Time", timezone: "Atlantic/Cape_Verde" },
        { label: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London _ GMT Standard Time", timezone: "Europe/London" },
        { label: "(GMT+00:00) Monrovia, Reykjavik _ Greenwich Standard Time", timezone: "Africa/Abidjan" },
        { label: "(GMT) Coordinated Universal Time _ UTC", timezone: "Etc/UTC" },
        { label: "(GMT+01:00) Casablanca _ Morocco Standard Time", timezone: "Africa/Casablanca" },
        { label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague _ Central Europe Standard Time", timezone: "Europe/Budapest" },
        { label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb _ Central European Standard Time", timezone: "Europe/Warsaw" },
        { label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris _ Romance Standard Time", timezone: "Europe/Paris" },
        { label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna _ W. Europe Standard Time", timezone: "Europe/Berlin" },
        { label: "(GMT+01:00) West Central Africa _ W. Central Africa Standard Time", timezone: "Africa/Lagos" },
        { label: "(GMT+02:00) Chisinau _ E. Europe Standard Time", timezone: "Europe/Chisinau" },
        { label: "(GMT+02:00) Cairo _ Egypt Standard Time", timezone: "Africa/Cairo" },
        { label: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius _ FLE Standard Time", timezone: "Europe/Kyiv" },
        { label: "(GMT+02:00) Athens, Bucharest _ GTB Standard Time", timezone: "Europe/Bucharest" },
        { label: "(GMT+02:00) Beirut _ Middle East Standard Time", timezone: "Asia/Beirut" },
        { label: "(GMT+02:00) Jerusalem _ Jerusalem Standard Time", timezone: "Asia/Jerusalem" },
        { label: "(GMT+02:00) Harare, Pretoria _ South Africa Standard Time", timezone: "Africa/Johannesburg" },
        { label: "(GMT+02:00) Windhoek _ Namibia Standard Time", timezone: "Africa/Windhoek" },
        { label: "(GMT+02:00) Gaza, Hebron _ West Bank Standard Time", timezone: "Asia/Hebron" },
        { label: "(GMT+02:00) Kaliningrad (RTZ 1) _ Kaliningrad Standard Time", timezone: "Europe/Kaliningrad" },
        { label: "(GMT+02:00) Khartoum _ Sudan Standard Time", timezone: "Africa/Khartoum" },
        { label: "(GMT+02:00) Amman _ Jordan Standard Time", timezone: "Asia/Amman" },
        { label: "(GMT+02:00) Damascus _ Syria Standard Time", timezone: "Asia/Damascus" },
        { label: "(GMT+03:00) Istanbul _ Turkey Standard Time", timezone: "Europe/Istanbul" },
        { label: "(GMT+03:00) Moscow, St. Petersburg  Volgograd (RTZ 2) _ Russian Standard Time", timezone: "Europe/Moscow" },
        { label: "(GMT+03:00) Kuwait, Riyadh _ Arab Standard Time", timezone: "Asia/Riyadh" },
        { label: "(GMT+03:00) Minsk _ Belarus Standard Time", timezone: "Europe/Minsk" },
        { label: "(GMT+03:00) Nairobi _ E. Africa Standard Time", timezone: "Africa/Nairobi" },
        { label: "(GMT+03:00) Baghdad _ Arabic Standard Time", timezone: "Asia/Baghdad" },
        { label: "(GMT+03:30) Tehran _ Iran Standard Time", timezone: "Asia/Tehran" },
        { label: "(GMT+04:00) Volgograd _ Volgograd Standard Time", timezone: "Europe/Volgograd" },
        { label: "(GMT+04:00) Abu Dhabi, Muscat _ Arabian Standard Time", timezone: "Asia/Dubai" },
        { label: "(GMT+04:00) Baku _ Azerbaijan Standard Time", timezone: "Asia/Baku" },
        { label: "(GMT+04:00) Yerevan _ Caucasus Standard Time", timezone: "Asia/Yerevan" },
        { label: "(GMT+04:00) Port Louis _ Mauritius Standard Time", timezone: "Indian/Mauritius" },
        { label: "(GMT+04:00) Tbilisi _ Georgian Standard Time", timezone: "Asia/Tbilisi" },
        { label: "(GMT+04:00) Izhevsk, Samara  (RTZ 3) _ Russia Time Zone 3", timezone: "Europe/Samara" },
        { label: "(GMT+04:00) Astrakhan, Ulyanovsk _ Astrakhan Standard Time", timezone: "Europe/Astrakhan" },
        { label: "(GMT+04:30) Kabul _ Afghanistan Standard Time", timezone: "Asia/Kabul" },
        { label: "(GMT+05:00) Ekaterinburg (RTZ 4) _ Ekaterinburg Standard Time", timezone: "Asia/Yekaterinburg" },
        { label: "(GMT+05:00) Islamabad, Karachi _ Pakistan Standard Time", timezone: "Asia/Karachi" },
        { label: "(GMT+05:00) Ashgabat, Tashkent _ West Asia Standard Time", timezone: "Asia/Tashkent" },
        { label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi _ India Standard Time", timezone: "Asia/Kolkata" },
        { label: "(GMT+05:30) Sri Jayawardenepura _ Sri Lanka Standard Time", timezone: "Asia/Colombo" },
        { label: "(GMT+05:45) Kathmandu _ Nepal Standard Time", timezone: "Asia/Kathmandu" },
        { label: "(GMT+06:00) Astana _ Central Asia Standard Time", timezone: "Asia/Almaty" },
        { label: "(GMT+06:00) Dhaka _ Bangladesh Standard Time", timezone: "Asia/Dhaka" },
        { label: "(GMT+06:00) Omsk _ Omsk Standard Time", timezone: "Asia/Omsk" },
        { label: "(GMT+06:30) Yangon (Rangoon) _ Myanmar Standard Time", timezone: "Asia/Yangon" },
        { label: "(GMT+07:00) Novosibirsk (RTZ 5) _ N. Central Asia Standard Time", timezone: "Asia/Novosibirsk" },
        { label: "(GMT+07:00) Bangkok, Hanoi, Jakarta _ SE Asia Standard Time", timezone: "Asia/Bangkok" },
        { label: "(GMT+07:00) Krasnoyarsk (RTZ 6) _ North Asia Standard Time", timezone: "Asia/Krasnoyarsk" },
        { label: "(GMT+07:00) Barnaul, Gorno-Altaysk - Altai Standard Time", timezone: "Asia/Barnaul" },
        { label: "(GMT+07:00) Hovd _ W. Mongolia Standard Time", timezone: "Asia/Hovd" },
        { label: "(GMT+07:00) Tomsk _ Tomsk Standard Time", timezone: "Asia/Tomsk" },
        { label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi _ China Standard Time", timezone: "Asia/Shanghai" },
        { label: "(GMT+08:00) Kuala Lumpur, Singapore _ Singapore Standard Time", timezone: "Asia/Singapore" },
        { label: "(GMT+08:00) Taipei _ Taipei Standard Time", timezone: "Asia/Taipei" },
        { label: "(GMT+08:00) Perth _ W. Australia Standard Time", timezone: "Australia/Perth" },
        { label: "(GMT+08:00) Irkutsk (RTZ 7) _ North Asia East Standard Time", timezone: "Asia/Irkutsk" },
        { label: "(GMT+08:00) Ulaanbaatar _ Ulaanbaatar Standard Time", timezone: "Asia/Ulaanbaatar" },
        { label: "(GMT+08:45) Eucla _ Aus Central W. Standard Time", timezone: "Australia/Eucla" },
        { label: "(GMT+09:00) Pyongyang _ North Korea Standard Time", timezone: "Asia/Pyongyang" },
        { label: "(GMT+09:00) Seoul _ Korea Standard Time", timezone: "Asia/Seoul" },
        { label: "(GMT+09:00) Osaka, Sapporo, Tokyo _ Tokyo Standard Time", timezone: "Asia/Tokyo" },
        { label: "(GMT+09:00) Yakutsk (RTZ 8) _ Yakutsk Standard Time", timezone: "Asia/Yakutsk" },
        { label: "(GMT+09:00) Chita _ Transbaikal Standard Time", timezone: "Asia/Chita" },
        { label: "(GMT+09:30) Darwin _ AUS Central Standard Time", timezone: "Australia/Darwin" },
        { label: "(GMT+09:30) Adelaide _ Cen. Australia Standard Time", timezone: "Australia/Adelaide" },
        { label: "(GMT+09:30) Adelaide (Commonwealth Games 2006) _ Adelaide (Commonwealth Games 2006)", timezone: "Australia/Adelaide" },
        { label: "(GMT+10:00) Canberra, Melbourne, Sydney _ AUS Eastern Standard Time", timezone: "Australia/Sydney" },
        { label: "(GMT+10:00) Canberra, Melbourne, Sydney (Commonwealth Games 2006) _ Canberra, Melbourne, Sydney (Commonwealth Games 2006)", timezone: "Australia/Sydney" },
        { label: "(GMT+10:00) Brisbane _ E. Australia Standard Time", timezone: "Australia/Brisbane" },
        { label: "(GMT+10:00) Hobart _ Tasmania Standard Time", timezone: "Australia/Hobart" },
        { label: "(GMT+10:00) Vladivostok  Magadan (RTZ 9) _ Vladivostok Standard Time", timezone: "Asia/Vladivostok" },
        { label: "(GMT+10:00) Guam, Port Moresby _ West Pacific Standard Time", timezone: "Pacific/Port_Moresby" },
        { label: "(GMT+10:00) Hobart (Commonwealth Games 2006) _ Hobart (Commonwealth Games 2006)", timezone: "Australia/Hobart" },
        { label: "(GMT+10:30) Lord Howe Island _ Lord Howe Standard Time", timezone: "Australia/Lord_Howe" },
        { label: "(GMT+11:00) Bougainville Island _ Bougainville Standard Time", timezone: "Pacific/Bougainville" },
        { label: "(GMT+11:00) Norfolk Island _ Norfolk Standard Time", timezone: "Pacific/Norfolk" },
        { label: "(GMT+11:00) Sakhalin _ Sakhalin Standard Time", timezone: "Asia/Sakhalin" },
        { label: "(GMT+11:00) Chokurdakh  (RTZ 10) _  Russia Time Zone 10", timezone: "Asia/Srednekolymsk" },
        { label: "(GMT+11:00) Solomon Is., New Caledonia _ Central Pacific Standard Time", timezone: "Pacific/Guadalcanal" },
        { label: "(GMT+11:00) Magadan _ Magadan Standard Time", timezone: "Asia/Magadan" },
        { label: "(GMT+12:00) Coordinated Universal Time+12 _ UTC+12", timezone: "Etc/GMT-12" },
        { label: "(GMT+12:00) Fiji _ Fiji Standard Time", timezone: "Pacific/Fiji" },
        { label: "(GMT+12:00) Auckland, Wellington _ New Zealand Standard Time", timezone: "Pacific/Auckland" },
        { label: "(GMT+12:00) Anadyr, Petropavlovsk-Kamchatsky  (RTZ 11) _ Russia Time Zone 11", timezone: "Asia/Kamchatka" },
        { label: "(GMT+12:45) Chatham Islands _ Chatham Islands Standard Time", timezone: "Pacific/Chatham" },
        { label: "(GMT+13:00) Samoa _ Samoa Standard Time", timezone: "Pacific/Apia" },
        { label: "(GMT+13:00) Nuku'alofa _ Tonga Standard Time", timezone: "Pacific/Tongatapu" },
    ],
    ERROR_CHANGECONTACT: [],
    NOT_ELIGIBLE_CHANGECONTACT: [],
    SUCCSESS_CHANGECONTACT: 0,
    OPTIONSETFIELDS: [],
    DEALERNOTES_INQUIRYTYPES: ["PRODUCT HEALTH", "PRODUCT HEALTH-INCIDENT", "PASSWORD", "SIF EXPOSURE", "MWM PRODUCT HEALTH", "MWM CG PRODUCT HEALTH", "PRODUCT TECHNOLOGIES - TECHNICAL ISSUE"],
    /**
     * Enable function for Request For Review ribbon button
     * @param {object} liquidContext
     */
    EnableRequestForReview: function (liquidContext) {
        if (!liquidContext) {
            return false;
        }
        CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_requestforreview", true);
        CAT.DSRM.ServiceRequestCommon.SetVisible("#page_ribbon_requestforreview_button", false);
        var STATUS_CLOSED = "5";
        var eventTypeValue = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        var status = $("#cat_status").length > 0 ? $("#cat_status").val() : null;
        var contactUser = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        var loggedinUserId = liquidContext.loggedinContactId;
        var formType = liquidContext.formType;
        if ($("#cat_requestforreviewflag").length > 0 && eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_PIQ.value) {
            var requestForReviewFlag = $("#cat_requestforreviewflag").val();
            if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE && status === STATUS_CLOSED && contactUser !== null && loggedinUserId === contactUser && requestForReviewFlag === CAT.DSRM.ServiceRequestCommon.TWO_OPTION_SET_FALSE.value) {
                var dateClosed = $("#cat_dateclosed") ? $("#cat_dateclosed").val() : null;
                var dateClosedValue = new Date(dateClosed);
                var currentDate = new Date();
                currentDate = Date.parse(currentDate);
                dateClosed = Date.parse(dateClosedValue);
                var dateDifference = currentDate - dateClosed;
                if (dateDifference <= 30 * 24 * 3600000) {
                    CAT.DSRM.ServiceRequestCommon.SetVisible("#page_ribbon_requestforreview_button", true);
                }
            }
        }
        //Click on Request For Review button
        $("#page_ribbon_requestforreview_button").click(function () {
            CAT.DSRM.ServiceRequestCommon.OnClickRequestforReview(liquidContext);
        });
    },
    /**
     * Request for Review on click function for PIQ event type
     * @param {object} liquidContext
     */
    OnClickRequestforReview: function (liquidContext) {
        if (!liquidContext)
            return;

        if ($('#cat_requestforreview').length > 0) {
            var reviewFlag = $("#cat_requestforreviewflag").length > 0 ? $("#cat_requestforreviewflag").val() : null;
            if (reviewFlag === CAT.DSRM.ServiceRequestCommon.TWO_OPTION_SET_FALSE.value) {
                var eventTypeValue = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
                if (eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_PIQ.value) {
                    CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_requestforreview", false);
                    CAT.DSRM.ServiceRequestCommon.ScrollAndFocus("cat_requestforreview");
                    CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("#cat_requestforreview", true);
                    if ($("#cat_requestforreviewflag").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_requestforreviewflag", false);
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_requestforreviewflag", CAT.DSRM.ServiceRequestCommon.TWO_OPTION_SET_TRUE.value);
                    }
                }
            }
        }
    },
    /**
     * Function to restrict creation of sr note and dealer note if parent sr's status is modified by other contact 
     */
    ValidateSrAndRestrictNoteCreation: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE)
            return true;
        var statusOnNote = liquidContext.status && liquidContext.status.length > 0 ? liquidContext.status : null;
        var srNumberOnNote = liquidContext.srNumber && liquidContext.srNumber.length > 0 ? liquidContext.srNumber : null;
        var eventTypeLookup = liquidContext.eventTypeLookup && liquidContext.eventTypeLookup.length > 0 ? liquidContext.eventTypeLookup : null;
        var dateLastUpdatedOnNote = liquidContext.srDateLastUpdated && liquidContext.srDateLastUpdated.length > 0 ? liquidContext.srDateLastUpdated : null;
        var latestDateLastUpdatedOnSr = null;
        var latestStatusOnSr = null;

        var refreshParenSrAlertId = "cat_alert_refresh_parent_sr_for_creating_srnote";
        if (liquidContext.relatedRecordLogicalName && liquidContext.relatedRecordLogicalName == "cat_dealernote") {
            refreshParenSrAlertId = "cat_alert_refresh_parent_sr_for_creating_dealernote";
        }
        eventTypeLookup = eventTypeLookup == 'cat_globalwarranty' ? 'cat_globalwarrantie' : eventTypeLookup;

        var selectQuery = eventTypeLookup + "s?$select=cat_status,cat_datelastupdated&$filter=cat_ticketnumber eq '" + srNumberOnNote + "'";
        CAT.DSRM.WebApi.RetrieveRecords(selectQuery,
            function (result) {
                if (result.length > 0) {
                    latestDateLastUpdatedOnSr = result[0].cat_datelastupdated;
                    latestStatusOnSr = result[0].cat_status ? result[0].cat_status.toString() : null;
                }
            },
            function (error) {
            }, false);
        if (statusOnNote && latestStatusOnSr && dateLastUpdatedOnNote && latestDateLastUpdatedOnSr && statusOnNote != latestStatusOnSr && dateLastUpdatedOnNote != latestDateLastUpdatedOnSr) {
            let refreshParenSrAlert = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById(refreshParenSrAlertId);
            alert(refreshParenSrAlert);
            CAT.DSRM.ServiceRequestCommon.StopSpinningLoader();
            return false;
        }
        return true;
    },
    /**
     * Function to hide Tab 
     * @param {string} tabName
     * @param {boolean} tabHideShow
     */
    SetVisibleTab: function (tabName, tabHideShow) {
        if (!tabName)
            return;
        if ($("div[data-name='" + tabName + "']").length > 0) {
            CAT.DSRM.ServiceRequestCommon.InternalSetVisibleTab(tabName, tabHideShow);

            //get tab title name
            var tabTitle = null;
            if (!tabTitle || tabTitle.length < 1)
                tabTitle = $("div[data-name='" + tabName + "']").prev().length > 0 && $("div[data-name='" + tabName + "']").prev().hasClass("tab-title") ? $("div[data-name='" + tabName + "']").prev().text() : null;
            // hide show tab title
            if (tabTitle) {
                if (tabHideShow)
                    $('h2:contains("' + tabTitle + '")').length > 0 ? $('h2:contains("' + tabTitle + '")').show() : null;
                else
                    $('h2:contains("' + tabTitle + '")').length > 0 ? $('h2:contains("' + tabTitle + '")').hide() : null;
            }
        }
    },
    /**
     * Hide show tab 
     * @param {string} tabName
     * @param {boolean} tabHideShow
     */
    InternalSetVisibleTab: function (tabName, tabHideShow) {
        if (!tabName || tabName.length < 1)
            return;
        if (($("div[data-name='" + tabName + "']").length > 0 && !($("div[data-name='" + tabName + "']").css('display') == 'none') && tabHideShow) || ($("div[data-name='" + tabName + "']").length > 0 && ($("div[data-name='" + tabName + "']").css('display') == 'none') && !tabHideShow))
            return;

        //hide show collapse and expand button
        var expandId = tabName.length > 0 ? "expand" + tabName.replace(/\s/g, '') : null;
        var collapseId = tabName.length > 0 ? "collapse" + tabName.replace(/\s/g, '') : null;
        if (expandId && $("#" + expandId).length > 0 && collapseId && $("#" + collapseId).length > 0) {
            if (tabHideShow) {
                $("#" + expandId).hide();
                $("#" + collapseId).show();
            }
            else {
                $("#" + expandId).show();
                $("#" + collapseId).hide();
            }
        }
        // hide show tab
        if (tabHideShow) {
            $("div[data-name='" + tabName + "']").show();
        }
        else {
            $("div[data-name='" + tabName + "']").hide();
        }
    },
    /**
     * Function to hide show Section 
     * @param {string} sectionName
     * @param {boolean} sectionHideShow
     */
    SetVisibleSection: function (sectionName, sectionHideShow) {
        if (!sectionName)
            return;
        if ($(".section[data-name='" + sectionName + "']").length > 0) {
            if (sectionHideShow)
                $(".section[data-name='" + sectionName + "']").closest("fieldset").show();
            else
                $(".section[data-name='" + sectionName + "']").closest("fieldset").hide();
        }
    },
    /**
     * Function to check is field read only
     * @param {string} controlName
     */
    IsFieldDisabled: function (controlName) {
        var controlSelector = controlName.startsWith('#') ? controlName : "#" + controlName;
        if ($(controlSelector).length > 0)
            if ($(controlSelector).is('[readonly]'))
                return true;
            else
                return false;
    },
    /**
     * Alert message for request for review
     * @param {object} liquidContext
     */
    RequestforReviewAlert: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($('#cat_requestforreview').length > 0 && $('#cat_requestforreview').val() && !CAT.DSRM.ServiceRequestCommon.IsFieldDisabled("cat_requestforreview")) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_request_review"));
        }
    },
    /**
     * Function to filter inquiry on load 
     * @param {object} liquidContext
     */
    OnLoadFilterInquiryType: function (liquidContext) {
        //check if liquid context is valid and form type is create
        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            //get query string
            var queryString = window.location.search;
            if (queryString) {
                // parse the query string
                var qStr = new URLSearchParams(queryString);
                if (qStr) {
                    // get inquirytype value from querystring
                    CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE = qStr.get('cat_inquirytypeid');
                    CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME = qStr.get("cat_inquirytypeidname");
                    console.log('found inquirytype: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE);
                    console.log('found inquirytypename: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME);
                }
            }
        }
        //check if liquid context is valid and form type is update
        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            //get inquirytype value from form
            if ($('#cat_inquirytypeid').length > 0 && $('#cat_inquirytypeid').val()) {
                CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE = $('#cat_inquirytypeid').val();
                CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME = $("#cat_inquirytypeid_name").val();
                console.log('found inquirytype: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE);
                console.log('found inquirytypename: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME);
            }
        }
        $('#cat_inquirytypeid').empty();
        var optionBlank = document.createElement('option');
        optionBlank.value = "";
        optionBlank.innerText = "";
        $('#cat_inquirytypeid').append(optionBlank);
        if (CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE) {
            var optionDefault = document.createElement('option');
            optionDefault.value = CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE;
            optionDefault.innerText = CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME;
            $('#cat_inquirytypeid').append(optionDefault);
            let inquiryTypeIdLookupValue = { guid: CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE, name: CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME, entityName: "cat_inquirytype" };
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_inquirytypeid", inquiryTypeIdLookupValue);
        }
        //get brand value
        var brand = $('#cat_brandaffiliation').length > 0 ? $('#cat_brandaffiliation').val() : null;
        //get event value
        var event = $('#cat_eventtype').length > 0 ? $('#cat_eventtype').val() : null;
        if (brand && event) {
            var query = "";
            //create query to retrieve inquiry type
            query = "cat_inquirytypes?$select=cat_inquirytypeid,cat_inquirytype,cat_pendingverificationdays&$filter=cat_brandaffiliation eq " + brand + " and cat_eventtype eq " + event + " and cat_showntodealer eq true";
            //retrieve the inquiry types
            CAT.DSRM.WebApi.RetrieveRecords(query, function (result) {
                if (result)
                    CAT.DSRM.ServiceRequestCommon.OnSuccessFilterInquiryType(result, liquidContext);
            }, function (e) {
                if (e)
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, false);
        }
    },
    /**
     * Function to filter inquiry on load 
     * @param {object} liquidContext
     */
    FilterInquiryType: function (liquidContext) {
        //check if liquid context is valid and form type is create
        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            //get query string
            var queryString = window.location.search;
            if (queryString) {
                // parse the query string
                var qStr = new URLSearchParams(queryString);
                if (qStr) {
                    // get inquirytype value from querystring
                    CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID = qStr.get('cat_inquirytypeid');
                    CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME = qStr.get("cat_inquirytypeidname");
                    console.log('found inquirytype: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID);
                    console.log('found inquirytypename: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME);
                }
            }
        }
        //check if liquid context is valid and form type is update
        else if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            //get inquirytype value from form
            if ($('#cat_inquirytypeid').length > 0 && $('#cat_inquirytypeid').val()) {
                CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID = $('#cat_inquirytypeid').val();
                CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME = $("#cat_inquirytypeid_name").val();
                console.log('found inquirytype: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID);
                console.log('found inquirytypename: ' + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME);
            }
        }

        if ($("#cat_inquirytypeid").length > 0
            && $("#cat_inquirytypeid_name").length > 0
            && ($("#cat_inquirytypeid_name").is('[disabled="disabled"]')
                || $("#cat_inquirytypeid_name").is('[readonly="readonly"]')))
            return;

        var brand = $('#cat_brandaffiliation').length > 0 ? $('#cat_brandaffiliation').val() : null;
        var event = $('#cat_eventtype').length > 0 ? $('#cat_eventtype').val() : null;
        var statecode = CAT.DSRM.ServiceRequestCommon.ACTIVE;
        if (brand && event) {
            var query = "";
            if (CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID) {
                query = "cat_inquirytypes?$select=cat_inquirytypeid,cat_inquirytype,cat_pendingverificationdays&$filter=(statecode eq " + statecode + " and cat_brandaffiliation eq " + brand + " and cat_eventtype eq " + event + " and cat_showntodealer eq true) or cat_inquirytypeid eq '" + CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID + "'";
            }
            else {
                query = "cat_inquirytypes?$select=cat_inquirytypeid,cat_inquirytype,cat_pendingverificationdays&$filter=statecode eq " + statecode + " and cat_brandaffiliation eq " + brand + " and cat_eventtype eq " + event + " and cat_showntodealer eq true";
            }
            CAT.DSRM.WebApi.RetrieveRecords(query, function (result) {
                if (result) {
                    CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, "cat_inquirytypeid", "cat_inquirytype", "cat_inquirytypeid", "cat_inquirytype", ["cat_inquirytype"], result);
                    if (CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID) {
                        let inquiryTypeObj = { guid: CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID, name: CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME, entityName: "cat_inquirytype" };
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_inquirytypeid", inquiryTypeObj, true);
                        CAT.DSRM.ServiceRequestCommon.SetInitialInquiryType();
                    }
                }
            }, function (e) {
                if (e)
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, false);
        }
    },
    /**
     * Function to execute on success of get inquiry types
     * @param {Array} result
     * @param {object} liquidContext
     */
    OnSuccessFilterInquiryType: function (result, liquidContext) {
        var filterInquireyType = [];
        filterInquireyType = result && result.length > 0 ? result.filter(x => x.cat_inquirytypeid != CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE) : [];
        // set inquiry type
        if (filterInquireyType && Array.isArray(filterInquireyType) && filterInquireyType.length > 0 && $('#cat_inquirytypeid').length > 0) {
            // create option for each returned entity
            filterInquireyType.forEach((element) => {
                var option = document.createElement('option');
                option.value = element.cat_inquirytypeid;
                option.innerText = element.cat_inquirytype;
                // add all valid options in inquiry type
                $('#cat_inquirytypeid').append(option);
                console.log("added the option: " + element.cat_inquirytype);
                if (element.cat_inquirytypeid == CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE) {
                    console.log("element.cat_inquirytypeid: " + element.cat_inquirytypeid);
                    console.log("element.cat_inquirytype: " + element.cat_inquirytype);
                    let inquiryTypeIdLookupValue = { guid: element.cat_inquirytypeid, name: element.cat_inquirytype, entityName: "cat_inquirytype" };
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_inquirytypeid", inquiryTypeIdLookupValue);
                    console.log('inquiry type set');
                }
            });
        }
        CAT.DSRM.ServiceRequestCommon.SetInitialInquiryType();
        CAT.DSRM.SurveyLink.SetPendingVerificationDays(liquidContext, result);
    },
    /**
     * Function retrieve source name for dealer & internal? field values
     * @param {object} liquidContext
     */
    FilterSourceName: function (liquidContext) {
        if (!liquidContext)
            return;
        //check if liquid context is valid and form type is update
        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            //get where resolution found from form
            if ($('#cat_whereresolutionfoundid').length > 0 && $('#cat_whereresolutionfoundid').val()) {
                CAT.DSRM.ServiceRequestCommon.WHERERESOLUTIONFOUNDID = $('#cat_whereresolutionfoundid').val();
                CAT.DSRM.ServiceRequestCommon.WHERERESOLUTIONFOUNDNAME = $('#cat_whereresolutionfoundid_name').val();
            }
        }
        let status = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : null;
        if (status && (status == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value)
            || (status == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value)
            || (status == CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value)
            || (status == CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value)
            && $("#cat_whereresolutionfoundid").length > 0
            && $("#cat_whereresolutionfoundid_name").length > 0
            && ($("#cat_whereresolutionfoundid_name").is('[disabled="disabled"]')
                || $("#cat_whereresolutionfoundid_name").is('[readonly="readonly"]')))
            return;

        var inquiryType = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid").val() : null;
        var query = "cat_sourcenameresources?$select=cat_sourcenameresourceid,cat_sourcenameresource&$filter=((statecode eq 0 and _cat_inquirytype_value eq '" + inquiryType + "') and ";
        query += "(cat_visibility eq " + CAT.DSRM.ServiceRequestCommon.SHOWN_TO_DEALER.value + " or cat_visibility eq " + CAT.DSRM.ServiceRequestCommon.SHOWN_TO_ALL.value + "))";
        //retrieve the source name/resources
        CAT.DSRM.WebApi.RetrieveRecords(query, function (result) {
            if (result) {
                CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, "cat_whereresolutionfoundid", "cat_sourcenameresource", "cat_sourcenameresourceid", "cat_sourcenameresource", ["cat_sourcenameresource"], result);
                if (CAT.DSRM.ServiceRequestCommon.WHERERESOLUTIONFOUNDID) {
                    let sourceNameObj = { guid: CAT.DSRM.ServiceRequestCommon.WHERERESOLUTIONFOUNDID, name: CAT.DSRM.ServiceRequestCommon.WHERERESOLUTIONFOUNDNAME, entityName: "cat_sourcenameresource" };
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_whereresolutionfoundid", sourceNameObj, true);
                }
            }
        }, function (e) {
            if (e)
                CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
        }, false);
    },
    /**
     * Function to execute when get inquiry types fails
     * @param {string} error
     */
    OnServiceError: function (error) {
        if (error) {
            alert("Error found:" + error);
            console.log("Error found:" + error);
        }
    },
    /**
     * Function to check if the logged in user is a dealer
     * @param {object} liquidContext
     */
    CheckUserIsDealer: function (liquidContext) {
        //check if user is internal
        var isInternal = liquidContext.isInternal;
        if (isInternal == "false") {
            return true;
        } else {
            return false;
        }
    },
    /**
     * Unlock Where Resolution Found to Dealer in Dealer Open status and Vacate it on submitted status
     *  @param {object} liquidContext
     */
    UnlockWhereResolutionFoundForDealer: function (liquidContext, isSave) {
        var status = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : null;
        var wasResolutionValue = $("#cat_whereresolutionfoundid").length > 0 ? $("#cat_whereresolutionfoundid").val() : null;
        var wasResolution = $("#cat_whereresolutionfoundid").length > 0 ? true : false;
        if (status && ((status == CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) || (status == CAT.DSRM.ServiceRequestCommon.STATUS_DEALERCLOSED.value)) && wasResolution) {
            CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_whereresolutionfoundid", false);
        }
        else
            CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_whereresolutionfoundid", true);
        if (status == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value && isSave && wasResolutionValue) {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_whereresolutionfoundid", {});
        }
    },
    /**
    * Function to set values for Preserving tabs and scroller position
    */
    PreserveScrollerPosition: function () {

        $('.tab').on('click', function () {
            $('div[data-name]').removeClass('active'); // Remove active class from all tabs
            $(this).next().addClass('active'); // Add active class to the clicked tab
        });

        $('div[data-name]').on('click', function () {
            $('div[data-name]').removeClass('active'); // Remove active class from all tabs
            $(this).addClass('active'); // Add active class to the clicked tab
        });

        $(window).on("beforeunload", function () {

            let openTab = $('.tab.active').attr('data-name');
            let openTabsArray = [];
            $('.tab').not('.active').hide();
            if (openTab) {
                openTabsArray.push(openTab);
                let qstr = window.location.search;
                let queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
                let id = queryString ? queryString.get("id") : null;
                if (id) {
                    let openTabsKey = "opentabs" + id;
                    let openTabsValue = openTabsArray.join();
                    window.sessionStorage.setItem(openTabsKey, openTabsValue);
                    let scrollPositionKey = "scrollPosition" + id;
                    let scrollPositionValue = $(window).scrollTop();
                    window.sessionStorage.setItem(scrollPositionKey, scrollPositionValue);
                }
            }
            //let openTabs = $("div[data-name]").not('[style*="display: none"]');
            //let openTabsArray = [];
            //if (openTabs && openTabs.length > 0) {
            //    openTabs.each(function (index) {
            //        console.log(index + ": " + $(this).attr('data-name'));
            //        openTabsArray.push($(this).attr('data-name'));
            //    });
            //    let qstr = window.location.search;
            //    let queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            //    let id = queryString ? queryString.get("id") : null;
            //    if (id) {
            //        let openTabsKey = "opentabs" + id;
            //        let openTabsValue = openTabsArray.join();
            //        window.sessionStorage.setItem(openTabsKey, openTabsValue);
            //        let scrollPositionKey = "scrollPosition" + id;
            //        let scrollPositionValue = $(window).scrollTop();
            //        window.sessionStorage.setItem(scrollPositionKey, scrollPositionValue);
            //    }
            //}
        });
    },

    /**
     * Function to Set User Preference fields of logged in user
     * @param {object} liquidContext
     */
    SetUserPreferenceFields: function (liquidContext) {
        if (!liquidContext)
            return;

        let honourUserPreference = true;
        var inquiryType = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid").val() ? $("#cat_inquirytypeid_name").val() : null;
        var eventType = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            if (liquidContext.keepInRegion === "true") {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_keepinregion", CAT.DSRM.ServiceRequestCommon.KEEP_IN_REGION_YES);
            }
            else {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_keepinregion", CAT.DSRM.ServiceRequestCommon.KEEP_IN_REGION_NO);
            }
            if (liquidContext.ccEmailList) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercarboncopyemail", liquidContext.ccEmailList);
            }
        }

        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            let qstr = window.location.search;
            let queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            let id = queryString ? queryString.get("id") : null;
            if (id) {
                let key = "opentabs" + id;
                let openTabsStorageValue = window.sessionStorage.getItem(key);
                let openTabsArray = openTabsStorageValue ? openTabsStorageValue.split(",") : [];
                if (openTabsArray.length > 0) {
                    honourUserPreference = false;
                    for (var i = 0; i < openTabsArray.length; i++) {
                        let tabName = openTabsArray[i];
                        if ($("div[data-name='" + tabName + "']").length > 0) {
                            CAT.DSRM.ServiceRequestCommon.ExpandCommand(tabName);
                        }
                    }
                }
                key = "scrollPosition" + id;
                let scrollPositionStorageValue = window.sessionStorage.getItem(key);
                scrollPositionStorageValue = scrollPositionStorageValue ? parseInt(scrollPositionStorageValue) : null;
                if (typeof (Page_IsValid) != "undefined" && !Page_IsValid) {
                    scrollPositionStorageValue = 0;
                }
                if (scrollPositionStorageValue) {
                    setTimeout(function () {
                        $(window).scrollTop(scrollPositionStorageValue);
                    }, 1000);
                }
            }
        }
        if (honourUserPreference) {
            if (liquidContext.openSRInputSection === "2" && inquiryType && (inquiryType.toUpperCase() != CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT.toUpperCase() && inquiryType.toUpperCase() != CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_DSNINCIDENT.toUpperCase())) {
                // other event types
                if ($(CAT.DSRM.PortalConstants.INPUT_CREATE_SEC).length > 0) {
                    $('html, body').animate({ scrollTop: $(CAT.DSRM.PortalConstants.INPUT_CREATE_SEC).offset().top - 200 }, 500);
                    $(CAT.DSRM.PortalConstants.INPUT_CREATE_SEC).focus();
                }
                else if ($(CAT.DSRM.PortalConstants.INPUT_EDIT_SEC).length > 0) {
                    $('html, body').animate({ scrollTop: $(CAT.DSRM.PortalConstants.INPUT_EDIT_SEC).offset().top - 200 }, 500);
                    $(CAT.DSRM.PortalConstants.INPUT_EDIT_SEC).focus();
                }//for collapsible tabs
                else
                    CAT.DSRM.ServiceRequestCommon.ScrollAndFocusTab(CAT.DSRM.PortalConstants.INPUT_TAB);
            }
            else if ((liquidContext.openSRInputSection === "1" || liquidContext.openSRInputSection === "") && inquiryType && (inquiryType.toUpperCase() != CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT.toUpperCase() && inquiryType.toUpperCase() != CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_DSNINCIDENT.toUpperCase())) {
                //other event types
                if ($(CAT.DSRM.PortalConstants.OVERVIEW_CREATE).length > 0) {
                    $('html, body').animate({ scrollTop: $(CAT.DSRM.PortalConstants.OVERVIEW_CREATE).offset().top - 200 }, 500);
                    $(CAT.DSRM.PortalConstants.OVERVIEW_CREATE).focus();
                }
                else if ($(CAT.DSRM.PortalConstants.OVERVIEW_UPDATE).length > 0) {
                    $('html, body').animate({ scrollTop: $(CAT.DSRM.PortalConstants.OVERVIEW_UPDATE).offset().top - 200 }, 500);
                    $(CAT.DSRM.PortalConstants.OVERVIEW_UPDATE).focus();
                }
                //for collapsible tabs
                else
                    CAT.DSRM.ServiceRequestCommon.ScrollAndFocusTab(CAT.DSRM.PortalConstants.OVERVIEW_TAB);
            }

            if (liquidContext.evenTypeDisplay && liquidContext.evenTypeDisplay.length > 0 &&
                liquidContext.evenTypeDisplay.toUpperCase() == CAT.DSRM.ServiceRequestCommon.EVENT_DEALERPPM.text.toUpperCase())
                CAT.DSRM.ServiceRequestCommon.ScrollAndFocusTab(CAT.DSRM.PortalConstants.OVERVIEW_TAB);
        }
    },
    /**
     * function to set Initial Inquiry Type Field According to the InquiryType Selected
     * @param {object} liquidContext
     */
    SetInitialInquiryType: function () {
        var initialInquiryType = $("#cat_initialinquirytype").length > 0 ? $("#cat_initialinquirytype").val() : null;
        if (!initialInquiryType) {
            var inquiryTypeText = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : null;
            if (inquiryTypeText) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_initialinquirytype", inquiryTypeText);
            }
        }
    },
    /**
     * Function to filter tech rep (Service Engineer) lookup
     * @param {any} liquidContext
     */
    FilterServiceEngRep: function (liquidContext) {
        if (!liquidContext)
            return;

        CAT.DSRM.ServiceRequestCommon.SERVICEENGREPID = $("#cat_serviceengrepid").length > 0 ? $("#cat_serviceengrepid").val() : null;
        CAT.DSRM.ServiceRequestCommon.SERVICEENGREPNAME = $("#cat_serviceengrepid").length > 0 ? $("#cat_serviceengrepid_name").val() : null;

        if ($("#cat_serviceengrepid").length > 0
            && $("#cat_serviceengrepid_name").length > 0
            && ($("#cat_serviceengrepid_name").is('[disabled="disabled"]')
                || $("#cat_serviceengrepid_name").is('[readonly="readonly"]')))
            return;

        var eventType = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        let parentDealer = $("#cat_parentaccountid").length > 0 ? $("#cat_parentaccountid").val().replace(/{|}/g, "") : null;
        let divisionCode = $("#cat_divisiontext").length > 0 ? $("#cat_divisiontext").val() : null;
        let selectQuery = "cat_escalationmatrixes?$select=cat_escalationmatrixid,cat_name,cat_industry&$filter=";
        let filterQuery = "";
        if (eventType) {
            filterQuery = "cat_eventtype eq " + eventType + " and statecode eq 0";
        }
        if (parentDealer) {
            filterQuery += " and _cat_parentaccountid_value eq " + parentDealer;
        }
        if (divisionCode && divisionCode !== "100000020") {
            filterQuery += " and cat_division eq " + divisionCode;
        } else if (divisionCode === "100000020") {
            filterQuery += " and Microsoft.Dynamics.CRM.In(PropertyName='cat_division',PropertyValues=['100000000','100000010','100000020'])";
        }
        selectQuery += "(" + filterQuery + ")";
        if (CAT.DSRM.ServiceRequestCommon.SERVICEENGREPID) {
            selectQuery += " or cat_escalationmatrixid eq '" + CAT.DSRM.ServiceRequestCommon.SERVICEENGREPID + "'";
        }
        CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (result) {
            if (result) {
                CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, "cat_serviceengrepid", "cat_escalationmatrix", "cat_escalationmatrixid", "cat_name", ["cat_name", "cat_industry"], result, "cat_industry");
                if (CAT.DSRM.ServiceRequestCommon.SERVICEENGREPID) {
                    let serviceEngRepObj = { guid: CAT.DSRM.ServiceRequestCommon.SERVICEENGREPID, name: CAT.DSRM.ServiceRequestCommon.SERVICEENGREPNAME, entityName: "cat_escalationmatrix" };
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_serviceengrepid", serviceEngRepObj, true);
                }
            }
        }, function (e) {
            if (e)
                CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
        }, true);
        var eventTypeLogicalName = liquidContext.eventTypeLogicalName;
        if (eventTypeLogicalName === "cat_dealercpi") {
            var isLimitedCreate = liquidContext.dealerAccess ? liquidContext.dealerAccess : 0;
            if (isLimitedCreate == CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_LIMITED_EDIT) {
                CAT.DSRM.ServiceRequestCommon.SetVisibleSection("tab_externalnotesattachments_sec_externalnotes", false);
                CAT.DSRM.ServiceRequestCommon.SetVisibleSection("viewExternalAttachmentFilterStorageContainer", false);
                $("cat_requestforcatactionstatus").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_requestforcatactionstatus", true) : null;
                var statusValue = $("#cat_status").length > 0 ? $("#cat_status").val() : null;
                if (statusValue == CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value || statusValue == CAT.DSRM.ServiceRequestCommon.STATUS_ISSUEPENDING.value) {
                    $("#cat_status_header"), length > 0 ? $("#cat_status_header option[value='9']").remove() : null;
                }
            }
        }
    },
    /**
     * Function to filter dealer contatct lookup
     * @param {object} liquidContext
     */
    FilterDealerContact: function (liquidContext) {
        if (!liquidContext)
            return;

        CAT.DSRM.ServiceRequestCommon.CONTACTID = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        CAT.DSRM.ServiceRequestCommon.CONTACTNAME = $("#cat_customerid_name").length > 0 ? $("#cat_customerid_name").val() : null;
        CAT.DSRM.ServiceRequestCommon.TECHNICIANID = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        CAT.DSRM.ServiceRequestCommon.TECHNICIANNAME = $("#cat_technicianid").length > 0 ? $("#cat_technicianid_name").val() : null;

        if ($("#cat_customerid").length > 0
            && $("#cat_customerid_name").length > 0
            && ($("#cat_customerid_name").is('[disabled="disabled"]')
                || $("#cat_customerid_name").is('[readonly="readonly"]')))
            return;

        var eventType = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        var brandAffiliation = $("#cat_brandaffiliation").length > 0 ? $("#cat_brandaffiliation").val() : null;
        var myDealership = liquidContext.myDealership;
        var accessFieldSchema = "";
        if (eventType && brandAffiliation && myDealership) {
            switch (parseInt(eventType)) {
                case CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value:
                    accessFieldSchema = "cat_accessdsn eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value:
                    accessFieldSchema = "cat_accessparts eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value:
                    accessFieldSchema = "cat_accessemp eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value:
                    accessFieldSchema = "cat_accesssystemtech eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value:
                    accessFieldSchema = "cat_accessglobalwarranty eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_PIQ.value:
                    accessFieldSchema = "cat_accesspiq eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_GOODWILL.value:
                    accessFieldSchema = "cat_accessgoodwill eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_PDC.value:
                    accessFieldSchema = "cat_accesspdc eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_COMMONPSCRM.value:
                    accessFieldSchema = "cat_accesspic eq 100000001";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_DEALERPPM.value:
                    accessFieldSchema = "Microsoft.Dynamics.CRM.In(PropertyName = 'cat_accessdealercpi', PropertyValues = ['100000004', '100000006'])";
                    break;
                case CAT.DSRM.ServiceRequestCommon.EVENT_PRICING.value:
                    accessFieldSchema = "cat_accesspricing eq 100000001";
                    break;
            }
            let contactQuery = "contacts?$select=cat_contactId,fullname&$orderby=fullname asc&$filter=(cat_brandaffiliation eq " + brandAffiliation + " and " + accessFieldSchema + " and statecode eq 0 and cat_mydealership eq '" + myDealership + "')";
            if (CAT.DSRM.ServiceRequestCommon.CONTACTID) {
                contactQuery += " or contactid eq '" + CAT.DSRM.ServiceRequestCommon.CONTACTID + "'";
            }
            CAT.DSRM.WebApi.RetrieveRecords(contactQuery, function (result) {
                if (result) {
                    CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, "cat_customerid", "contact", "contactid", "fullname", ["fullname"], result);
                    if (CAT.DSRM.ServiceRequestCommon.CONTACTID) {
                        let dealerContactObj = { guid: CAT.DSRM.ServiceRequestCommon.CONTACTID, name: CAT.DSRM.ServiceRequestCommon.CONTACTNAME, entityName: "contact" };
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_customerid", dealerContactObj, true);
                    }
                }
            }, function (e) {
                if (e)
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, true);
        }
    },
    /**
     * Function to Render Lookup Selectize
     * @param {object} liquidContext
     * @param {any} control
     * @param {string} entityLogicalName
     * @param {string} optionValueField
     * @param {string} optionLabelField
     * @param {Array} optionSearchArray
     * @param {Array} optionsArray
     * @param {string} captionField
     */
    RenderLookupSelectize: function (liquidContext, control, entityLogicalName, optionValueField, optionLabelField, optionSearchArray, optionsArray, captionField) {
        if (typeof control == "object" && control.length > 0) {
            let elementId = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalRenderLookupSelectize(liquidContext, elementId, entityLogicalName, optionValueField, optionLabelField, optionSearchArray, optionsArray, captionField);
        }
        else if (typeof control == "string") {
            let elementId = control.startsWith('#') ? control.substring(1, control.length) : control;
            let elementSelector = "#" + elementId;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalRenderLookupSelectize(liquidContext, elementId, entityLogicalName, optionValueField, optionLabelField, optionSearchArray, optionsArray, captionField);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to Render Lookup Selectize
     * @param {object} liquidContext
     * @param {string} fieldLogicalName
     * @param {string} entityLogicalName
     * @param {string} optionValueField
     * @param {string} optionLabelField
     * @param {Array} optionSearchArray
     * @param {Array} optionsArray
     * @param {string} captionField
     */
    InternalRenderLookupSelectize: function (liquidContext, fieldLogicalName, entityLogicalName, optionValueField, optionLabelField, optionSearchArray, optionsArray, captionField) {
        let selectizeId = fieldLogicalName + "_select";
        if ($("#" + selectizeId).length > 0) {
            let selectizeControl = $("#" + selectizeId).selectize();
            if (selectizeControl.length > 0) {
                selectizeControl[0].selectize.destroy();
            }
        }
        else {
            let selectizeControlHTML = String.raw`<div class="control"><select id="` + selectizeId + `" placeholder="--Select--" class="form-control picklist"></select></div>`;
            let lookupControlParent = $("#" + fieldLogicalName).closest(".control").parent();
            $(lookupControlParent).append(selectizeControlHTML);
        }

        $("#" + selectizeId).selectize({
            valueField: optionValueField,
            labelField: optionLabelField,
            searchField: optionSearchArray,
            options: optionsArray,
            render: {
                option: function (item, escape) {
                    let label = item[optionLabelField];
                    let caption = item[optionLabelField] ? item[captionField] : null;
                    return (
                        "<div class='option'>" + '<div>' + escape(label) + "</div>" + (caption ? '<div>' + escape(caption) + "</div>" : "") + "</div>"
                    );
                },
            },
            dataAttr: entityLogicalName,
            onChange: function (value) {
                let valueObj = {};
                if (value) {
                    let option = this.getOption(value);
                    let label = $(option).text();
                    valueObj = { guid: value, name: label, entityName: entityLogicalName };
                }
                CAT.DSRM.ServiceRequestCommon.SetValueModalLookup(fieldLogicalName, valueObj, false, true);
            },
        });
        if ($("#" + fieldLogicalName).length > 0
            && $("#" + fieldLogicalName + "_name").length > 0) {
            if ($("#" + fieldLogicalName + "_name").is('[readonly="readonly"]')
                || $("#" + fieldLogicalName + "_name").is('[disabled="disabled"]')) {
                $("#" + selectizeId).closest(".control").hide();
            }
            else {
                $("#" + fieldLogicalName).closest(".control").hide();
            }
        }
    },
    /**
     * Render AutoComplete Lookup Dropdown
     * @param {object} liquidContext
     * @param {any} lookupFieldLogicalName
     * @param {any} lookupEntityName
     * @param {any} lookupEntityPrimaryFieldName
     * @param {any} data
     */
    RenderAutoCompleteLookupDropdown: function (liquidContext, lookupFieldLogicalName, lookupEntityName, lookupEntityPrimaryFieldName, data) {
        if ($('#' + lookupFieldLogicalName).length > 0) {

            //creating select HTML element
            var lookupSelect = lookupFieldLogicalName + "_select";
            var lookupSelectComponent = String.raw`<div class="control"><select id="` + lookupSelect + `" class="form-control picklist"></select></div>`;
            var lookupSelectId = "#" + lookupSelect;

            //hide OOB lookup control
            var lookupControl = $('#' + lookupFieldLogicalName).parent().parent().parent();
            $(lookupControl).append(lookupSelectComponent);
            $('#' + lookupFieldLogicalName).parent().parent().hide();

            //creating blank option for removing selected value on field
            var blankOption = document.createElement('option');
            blankOption.innerText = "--Select--";
            blankOption.value = "";
            $(lookupSelectId).append(blankOption);

            if ($('#' + lookupFieldLogicalName).length > 0) {

                //check data and lookup field
                if (data && Array.isArray(data) && data.length) {

                    //Populate select element with options of data items 
                    data.forEach((element) => {
                        var option = document.createElement('option');
                        option.value = element[lookupEntityName + "id"];
                        option.innerText = element[lookupEntityPrimaryFieldName];
                        $(lookupSelectId).append(option);
                    });
                }

                //get exisitng value of the lookup and update the dropdown
                var exisitinglookupValue = $('#' + lookupFieldLogicalName).val();
                if (exisitinglookupValue) {
                    $(lookupSelectId).val(exisitinglookupValue);
                }
                //Adding AutoComplete feature on dropdown
                if ($.isFunction($.fn.selectize))
                    $(lookupSelectId).selectize();

                if ($('#' + lookupFieldLogicalName + '_name').hasClass("unselectable")) {
                    var selectize = $(lookupSelectId).selectize();
                    selectize ? selectize[0].selectize.disable() : null;
                }
                if ($('#' + lookupFieldLogicalName).parent().css('display') === 'none') {
                    $('#' + lookupFieldLogicalName).parent().parent().parent().hide();
                }
                if (!$('#' + lookupFieldLogicalName).parent().hasClass('input-group')) {
                    var selectize = $(lookupSelectId).selectize();
                    selectize ? selectize[0].selectize.disable() : null;
                }

            }

            //Adding onChange event on select element
            $(lookupSelectId).on("change", function (e) {
                if ($(this)) {
                    if ($(this).val() === blankOption.value || !$(this).val()) {
                        CAT.DSRM.ServiceRequestCommon.ChangeValue("lookup", lookupFieldLogicalName, "");
                    } else {
                        let fieldValue = { guid: $(this).val(), name: $(this).find("option:selected").text(), entityName: lookupEntityName };
                        CAT.DSRM.ServiceRequestCommon.ChangeValue("lookup", lookupFieldLogicalName, fieldValue);
                    }
                }
            });
        }
    },
    /**
    * Fucntion to Change value, trigger change event make the field dirty
    * @param {any} fieldDataType
    * @param {any} fieldId
    * @param {any} fieldValue
    */
    ChangeValue: function (fieldDataType, fieldId, fieldValue) {
        //set lookup value
        if (fieldDataType === "lookup") {
            if (typeof (fieldValue) === "object" && fieldValue) {
                $('#' + fieldId).val(fieldValue.guid);
                $('#' + fieldId + '_name').val(fieldValue.name);
                $('#' + fieldId + '_entityname').val(fieldValue.entityName);
            } else if (!fieldValue) {
                $('#' + fieldId).closest(".input-group")?.find(".btn.btn-default.clearlookupfield")?.click()
            }
        } else {
            $('#' + fieldId).val(fieldValue);
        }
        $('#' + fieldId).addClass("dirty");
        $('#' + fieldId).trigger("change");
    },
    /**
    * Fucntion to check if is there any field which is required and unpopulated
    * @param {any} liquidContext
    */
    CheckIsFormRequired: function (liquidContext) {
        var fieldRequired = false;
        // Find all div elements with the class 'required'
        var requiredDivs = $("#liquid_form").find(".required");

        // Create an array to hold unpopulated fields
        var unpopulatedFields = [];

        requiredDivs.each(function () {
            // Find the corresponding input/select element within the same parent container
            var parentTd = $(this).closest('td');
            if (parentTd.length) {
                var inputField = parentTd.find(".control").filter(function () { return $(this).find('.selectize-control').length === 0; }).find('input, select, textarea').not("#enter_note");

                // Check if the input/select element exists and if it's empty
                if (inputField.length > 0 && !inputField.val()) {
                    unpopulatedFields.push(inputField);
                }
            }
        });

        if (unpopulatedFields.length > 0)
            fieldRequired = true;

        return fieldRequired;
    },
    /**
     * Function to filter Technician lookup field
     * @param {object} liquidContext
     */
    FilterTechnician: function (liquidContext) {
        if (!liquidContext)
            return;

        CAT.DSRM.ServiceRequestCommon.TECHNICIANID = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        CAT.DSRM.ServiceRequestCommon.TECHNICIANNAME = $("#cat_technicianid").length > 0 ? $("#cat_technicianid_name").val() : null;

        if ($("#cat_technicianid").length > 0
            && $("#cat_technicianid_name").length > 0
            && ($("#cat_technicianid_name").is('[disabled="disabled"]')
                || $("#cat_technicianid_name").is('[readonly="readonly"]')))
            return;

        var eventType = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        var brandAffiliation = $("#cat_brandaffiliation").length > 0 ? $("#cat_brandaffiliation").val() : null;
        var myDealership = liquidContext.myDealership;
        var techAccess = "";
        if (parseInt(eventType) === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value) {
            techAccess = "cat_accessdsn";
        }
        else if (parseInt(eventType) === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
            techAccess = "cat_accesssystemtech";
        }
        else if (parseInt(eventType) === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value) {
            techAccess = "cat_accessparts";
        }
        if (eventType && brandAffiliation && myDealership) {
            var contactQuery = "";
            if (CAT.DSRM.ServiceRequestCommon.TECHNICIANID) {
                contactQuery = "contacts?$select=cat_contactId,fullname&$filter=(cat_brandaffiliation eq " + brandAffiliation + " and ( " + techAccess + " eq 100000003 or " + techAccess + " eq 100000008) and statecode eq 0 and cat_mydealership eq '" + myDealership + "') or contactid eq '" + CAT.DSRM.ServiceRequestCommon.TECHNICIANID + "'&$orderby=fullname asc";
            }
            else {
                contactQuery = "contacts?$select=cat_contactId,fullname&$filter=cat_brandaffiliation eq " + brandAffiliation + " and ( " + techAccess + " eq 100000003 or " + techAccess + " eq 100000008) and statecode eq 0 and cat_mydealership eq '" + myDealership + "'&$orderby=fullname asc";
            }

            CAT.DSRM.WebApi.RetrieveRecords(contactQuery, function (result) {
                if (result) {
                    CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, "cat_technicianid", "contact", "contactid", "fullname", ["fullname"], result);
                    if (CAT.DSRM.ServiceRequestCommon.TECHNICIANID) {
                        let technicianContactObj = { guid: CAT.DSRM.ServiceRequestCommon.TECHNICIANID, name: CAT.DSRM.ServiceRequestCommon.TECHNICIANNAME, entityName: "contact" };
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianid", technicianContactObj, true);
                    }
                }
            }, function (e) {
                if (e)
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, true);
        }
    },
    /**
     * Function to enable/disable a control
     * @param {any} control String/Control Either pass the id of the control or control itself.
     * @param {boolean} isSetDisabled Boolean value indicating whether to enable or disable the control
     */
    SetDisabled: function (control, isSetDisabled) {
        if (Array.isArray(control)) {
            $(control).each(function (index, element) {
                if (typeof element == "string") {
                    var elementSelector = element.startsWith('#') ? element : "#" + element;
                    if ($(elementSelector).length > 0)
                        CAT.DSRM.ServiceRequestCommon.InternalSetDisabled(elementSelector, isSetDisabled);
                }
                else if (typeof element == "object" && element.length > 0) {
                    var elementSelector = "#" + element.attr('id');
                    CAT.DSRM.ServiceRequestCommon.InternalSetDisabled(elementSelector, isSetDisabled);
                }
            });
        }
        else if (typeof control == "object" && control.length > 0) {
            var elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetDisabled(elementSelector, isSetDisabled);
        }
        else if (typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetDisabled(elementSelector, isSetDisabled);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set disabled of control.
     * @param {string} controlSelector
     * @param {boolean} isSetDisabled
     */
    InternalSetDisabled: function (controlSelector, isSetDisabled) {
        if (!controlSelector || $(controlSelector).length < 1)
            return;
        var lookupField = $(controlSelector).closest(".lookup");
        if (lookupField.length == 1) {
            var allButtons = $(controlSelector).parent().parent().find('button');
            if (allButtons.length > 0) {
                allButtons.each(function (index, element) {
                    //console.log(element)
                    if (!isSetDisabled) {
                        $(element).removeAttr("disabled");
                    }
                    else {
                        $(element).attr("disabled", "disabled");
                    }
                })
            }
            else if ($(controlSelector).length > 0) {
                $(controlSelector).attr('readonly', isSetDisabled);
                isSetDisabled ? $(controlSelector).addClass("unselectable") : $(controlSelector).removeClass("unselectable");
            }

            var prevInput = $(controlSelector).prev();
            if (prevInput.length > 0) {
                if (!isSetDisabled) {
                    $(prevInput).removeClass("unselectable");
                    $(prevInput).removeAttr("readonly");
                }
                else {
                    $(prevInput).addClass("unselectable");
                    $(prevInput).attr("readonly", "readonly");
                }
            }
            if ($(controlSelector + "_select").length > 0) {
                isSetDisabled ? $(controlSelector + "_select")[0].selectize.disable() : $(controlSelector + "_select")[0].selectize.enable();
            }
            if ($(controlSelector + "_select").length > 0) {
                if (isSetDisabled) {
                    $(controlSelector).closest(".control").show();
                    $(controlSelector + "_select").length > 0 ? $(controlSelector + "_select").closest(".control").hide() : null;
                }
                else {
                    $(controlSelector).closest(".control").hide();
                    $(controlSelector + "_select").length > 0 ? $(controlSelector + "_select").closest(".control").show() : null;
                }
            }
        } else {
            var isRadioButton = $(controlSelector).hasClass('boolean-radio');
            var isCheckBox = $(controlSelector).attr('type') === "checkbox";
            if (isRadioButton) {
                $(controlSelector + " input").each(function (i, element) {
                    if (element.type === "radio") {
                        $(element).attr('disabled', isSetDisabled);
                    }
                })
            } else if (isCheckBox) {
                $(controlSelector).attr('disabled', isSetDisabled);
            }
            else {
                $(controlSelector).attr('readonly', isSetDisabled);
                isSetDisabled ? $(controlSelector).addClass("unselectable") : $(controlSelector).removeClass("unselectable");
                if ($(controlSelector).hasClass('picklist')) {
                    isSetDisabled ? $(controlSelector).attr("style", "pointer-events: none;") : $(controlSelector).attr("style", "pointer-events: auto;");
                }
            }
        }
    },
    /**
     * Function to get radio button value in portal
     * @param {string} controlName
     */
    GetRadioButtonValue: function (controlName) {
        var controlSelector = controlName.startsWith('#') ? controlName : "#" + controlName;
        var controlValue = false;
        var isRadioButton = $(controlSelector).hasClass('boolean-radio');
        var isOptionset = $(controlSelector).hasClass('boolean-dropdown');
        if (isRadioButton) {
            $(controlSelector + " input").each(function (i, element) {
                if (element.type == "radio") {
                    if (element.checked && element.value == "1")
                        controlValue = true;
                }
            });
        }
        else if (isOptionset) {
            controlValue = $(controlSelector).val() == "1" || $(controlSelector).val() == 1 ? true : false;
        }
        return controlValue;
    },
    /**
     * Function to set radio button value in portal
     * @param {string} controlName
     * @param {boolean} value
     */
    SetRadioButtonValue: function (controlName, value) {
        var controlSelector = controlName.startsWith('#') ? controlName : "#" + controlName;
        if ($(controlSelector).length > 0) {
            var isRadioButton = $(controlSelector).hasClass('boolean-radio');
            var isOptionset = $(controlSelector).hasClass('boolean-dropdown');
            if (isRadioButton) {
                if (value) {
                    $(controlSelector + "_1").length > 0 ? $(controlSelector + "_1").prop("checked", true) : null;
                    $(controlSelector + "_0").length > 0 ? $(controlSelector + "_0").prop("checked", false) : null;
                }
                else {
                    $(controlSelector + "_1").length > 0 ? $(controlSelector + "_1").prop("checked", false) : null;
                    $(controlSelector + "_0").length > 0 ? $(controlSelector + "_0").prop("checked", true) : null;
                }
            }
            else if (isOptionset) {
                if (value) {
                    $(controlSelector).val(1);
                }
                else {
                    $(controlSelector).val(0);
                }
            }
        }
    },
    /**
     * Function to set a date field as readonly
     * @param {any} control
     * @param {boolean} isSetDisabled
     */
    SetDisabledDateField: function (control, isSetDisabled) {
        if (control.startsWith('#') && $(control).length > 0) {
            var $displayField = $(control).nextAll(".datetimepicker").children("input");
            $displayField.attr("readonly", isSetDisabled);
        } else if ($("#" + control).length > 0) {
            var $displayField = $("#" + control).nextAll(".datetimepicker").children("input");
            $displayField.attr("readonly", isSetDisabled);
        }
    },
    /**
     * Function to set Dealer Contact CWS Id and Dealer Code Technician  fields as readonly
     * @param {object} liquidContext
     */
    SetFieldsReadOnlyOnSR: function (liquidContext) {
        if (!liquidContext)
            return;
        var eventTypeValue = $("#cat_eventtype").length > 0 && $("#cat_eventtype").val() ? parseInt($("#cat_eventtype").val()) : null;
        if (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
            $("#cat_dealercodetechnician").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealercodetechnician", true) : null;
        }
        if (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value) {
            $("#cat_nondtccontactname").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_nondtccontactname", true) : null;
        }
        if (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
            $("#cat_corporateresolutiondetail").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_corporateresolutiondetail", true) : null;
        }
        $("#cat_accountid").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_accountid", true) : null;
        $("#cat_dealercode").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealercode", true) : null;
        $("#cat_originalpreferredemail").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_originalpreferredemail", true) : null;
        $("#cat_dealercontactcwsid").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealercontactcwsid", true) : null;
    },
    /**
     * Function to clear field
     * @param {HTMLCollection} controlColl Collection of fields to clear
     */
    ClearFields: function (controlColl) {
        if (!controlColl)
            return;

        controlColl.forEach(element => {
            var elementSelector = element.startsWith('#') ? element : "#" + element;
            var dataType = $(elementSelector).length > 0 ? $(elementSelector).attr("data-type") : null;
            if (dataType === "date" || dataType === "datetime") {
                CAT.DSRM.ServiceRequestCommon.SetValue(element, null);
            }
            else {
                CAT.DSRM.ServiceRequestCommon.SetValue(elementSelector, null);
            }
        });
    },
    /**
     * Function to store values of specific on load used to check is the field is dirty
     * @param {object} liquidContext
     */
    ValuesOnLoad: function (liquidContext) {
        //used in DealerUrgentOnSave function
        CAT.DSRM.ServiceRequestCommon.PRIORITY = $("#cat_prioritycode").length > 0 && $("#cat_prioritycode").val() ? $("#cat_prioritycode").val() : 0;
    },
    /**
     * Function to validate and alert users about Dealer Urgent on save
     * @param {object} liquidContext
     * @param {boolean} isSave //Event is save then true else false value
     * @param {string} fieldName// onChange event fieldname of changed field
     */
    DealerUrgentOnSave: function (liquidContext, isSave, fieldName) {
        if (!liquidContext)
            return;
        var isValid = false;
        var priority = $("#cat_prioritycode").length > 0 && $("#cat_prioritycode").val() ? parseInt($("#cat_prioritycode").val()) : 0;
        var dealerUrgent = $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() ? parseInt($("#cat_dealerurgent").val()) : 0;
        var statusValue = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        var eventTypeValue = $("#cat_eventtype").length > 0 && $("#cat_eventtype").val() ? parseInt($("#cat_eventtype").val()) : 0;
        var technicianId = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        var createdByUserId = $("#cat_createdbycontactid").length > 0 ? $("#cat_createdbycontactid").val() : null;
        if (isSave) {
            var inquiryType = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid").val() ? $("#cat_inquirytypeid_name").val() : null;
            if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.DEALER_URGENT_YES && parseInt(CAT.DSRM.ServiceRequestCommon.PRIORITY) !== priority && priority !== CAT.DSRM.ServiceRequestCommon.PRIORITY_HIGH.value && inquiryType !== CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT && inquiryType !== CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_AFA) {
                $("#cat_prioritycode").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_prioritycode", CAT.DSRM.ServiceRequestCommon.PRIORITY_HIGH.value) : null;
            }
            //if (priority === CAT.DSRM.ServiceRequestCommon.PRIORITY_HIGH.value && dealerUrgent !== 1 && (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value && inquiryType !== CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT) {
            //    $("#cat_dealerurgent").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerurgent", CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) : null;
            //    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
            //}
            if ((eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && parseInt(CAT.DSRM.ServiceRequestCommon.PRIORITY) !== priority) {
                $("#cat_dealerexpectation").length > 0 && $("#cat_dealerexpectation").val() ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerexpectation", priority) : null;
            }
            var currentbrand = $("#cat_brandaffiliation").length > 0 && $("#cat_brandaffiliation").val() ? parseInt($("#cat_brandaffiliation").val()) : null;
            if (dealerUrgent === 1 && eventTypeValue && statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value && currentbrand && currentbrand === CAT.DSRM.ServiceRequestCommon.BRAND_CATERPILLAR && (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && inquiryType.toUpperCase() !== CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_PASSWORD) {
                if (technicianId && technicianId == createdByUserId)
                    return;
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_dealer_urgent_message"));
            }
        }
        else if ((fieldName === "cat_prioritycode" || fieldName === "cat_status_header" || fieldName === "cat_dealerurgent") && statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value) {
            if (priority === CAT.DSRM.ServiceRequestCommon.PRIORITY_HIGH.value && dealerUrgent !== 1 && (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value)) {
                $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
            }
            if (priority !== CAT.DSRM.ServiceRequestCommon.PRIORITY_HIGH.value && dealerUrgent === 1 && (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value)) {
                $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
            }
        }
    },
    /**
     * Function to set Required Explain situation field on change of dealer urgent
     * @param {object} liquidContext
     */
    DealerUrgentOnchange: function (liquidContext) {
        if (!liquidContext)
            return;
        var dealerUrgent = $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() ? parseInt($("#cat_dealerurgent").val()) : 0;
        if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) {
            CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", false);
        }
    },
    /**
     * Pre-populate fields on Tier 1 created SR for Parts Tech Event type
     * @param {object} liquidContext
     * @param {string} accountId
     */
    SetContactTypeFieldAndOpenStatusFieldsForTier1: function (liquidContext, accountId) {
        if (!liquidContext)
            return;
        var statusValue = $("#cat_status").val();
        var dateDealerSubmitted = $("#cat_datedealersubmitted").length > 0 ? $("#cat_datedealersubmitted").val() : null;
        if (statusValue !== CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value && !dateDealerSubmitted) {
            if (($("#cat_typeofcall").length > 0 && $("#cat_typeofcall").val() === null)
                || ($("#cat_contacttype").length > 0 && $("#cat_contacttype").val() === null)) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_typeofcall", 100000000);
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_contacttype", 100000000);
            }
        }
    },
    /**
     * Function to disable or enable Follow up field for dealer full form.
     * @param {object} liquidContext
     */
    LockUnlockFollowUp: function (liquidContext) {
        if (!liquidContext)
            return;
        var dealerContact = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        if (liquidContext.loggedinContactId !== dealerContact.toLowerCase()) {
            if ($("#cat_followup").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_followup", true);
            }
        }
    },
    /**
     * This function will Add option to given field
     * @param {object} liquidContext
     * @param {string} attributeName
     * @param {object} optionValue
     */
    AddOption: function (liquidContext, attributeName, optionValue) {
        if (!attributeName || !optionValue)
            return;
        var statusPicklist = $("#" + attributeName).length > 0 ? $("#" + attributeName) : null;
        let option = document.createElement("option");
        option.value = optionValue.value;
        option.innerText = optionValue.text;
        //add all valid options in status
        statusPicklist.append(option);
    },
    /**
     * Function to set multiple fields required level and validate onSubmit
     * @param {any} control
     * @param {boolean} isRequired
     */
    SetRequiredLevelForFieldArray: function (requiredFields, isRequired) {
        for (var i = 0; i < requiredFields.length; i++) {
            CAT.DSRM.ServiceRequestCommon.SetRequiredLevel(requiredFields[i], isRequired);
        }
    },
    /**
     * Function to set field required level and validate onSubmit
     * @param {any} control
     * @param {boolean} isRequired
     */
    SetRequiredLevel: function (control, isRequired) {
        if (Array.isArray(control)) {
            $(control).each(function (index, element) {
                if (typeof element == "string") {
                    var elementSelector = element.startsWith('#') ? element : "#" + element;
                    if ($(elementSelector).length > 0)
                        CAT.DSRM.ServiceRequestCommon.InternalSetRequiredLevel(elementSelector, isRequired);
                }
                else if (typeof element == "object" && element.length > 0) {
                    var elementSelector = "#" + element.attr('id');
                    CAT.DSRM.ServiceRequestCommon.InternalSetRequiredLevel(elementSelector, isRequired);
                }
            });
        }
        else if (typeof control == "object" && control.length > 0) {
            var elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetRequiredLevel(elementSelector, isRequired);
        }
        else if (typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0)
                CAT.DSRM.ServiceRequestCommon.InternalSetRequiredLevel(elementSelector, isRequired);
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set required level of control.
     * @param {string} controlSelector
     * @param {boolean} isRequired
     */
    InternalSetRequiredLevel: function (controlSelector, isRequired) {
        if (!controlSelector || $(controlSelector).length < 1)
            return;

        var controlName = $(controlSelector).attr('id');
        var validatorName = "RequiredFieldValidator" + controlName;
        let isRequiredFieldMsg = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_required_field_msg");
        var message = $("#" + controlName + "_label").html() + (isRequiredFieldMsg ? isRequiredFieldMsg : " is a required field");
        if ($(controlSelector).length > 0) {
            if (isRequired) {
                $(controlSelector).prop('required', true);
                $(controlSelector).closest(".control").prev().addClass("required");
                CAT.DSRM.ServiceRequestCommon.PushValidator(validatorName, controlName, message, RequiredFieldValidatorEvaluateIsValid);
            }
            else {
                $(controlSelector).closest(".control").prev().removeClass("required");
                $(controlSelector).prop('required', false);
                CAT.DSRM.ServiceRequestCommon.PullValidator(validatorName);
            }
        }
    },
    /**
     * Function to Push Validator into Validation List
     * @param {string} validatorName
     * @param {string} controlName
     * @param {string} message
     * @param {function} evaluationFunction
     * @param {string} initalValue
     * @param {string} validationGroup
     * @param {function} scrollAndFocusFunction 
     */
    PushValidator: function (validatorName, controlName, message, evaluationFunction, initalValue, validationGroup, scrollAndFocusFunction) {
        if (!validatorName || Page_Validators.findIndex(e => e.id == validatorName) > -1 || !controlName || !message || !evaluationFunction || typeof evaluationFunction != "function")
            return;

        if (!scrollAndFocusFunction || typeof scrollAndFocusFunction !== "string") {
            scrollAndFocusFunction = "CAT.DSRM.ServiceRequestCommon.ScrollAndFocus(\"" + controlName + "\")";
        }

        // Create new validator
        var Requiredvalidator = document.createElement('span');
        Requiredvalidator.style.display = "none";
        Requiredvalidator.id = validatorName;
        Requiredvalidator.controltovalidate = controlName;
        Requiredvalidator.errormessage = "<a href='#" + controlName + "_label' onclick='javascript:" + scrollAndFocusFunction + ";return false;'>" + message + "</a>";
        Requiredvalidator.validationGroup = validationGroup ? validationGroup : null;
        Requiredvalidator.initialvalue = initalValue ? initialvalue : "";
        Requiredvalidator.evaluationfunction = evaluationFunction;
        // Add the new validator to the page validators array:
        Page_Validators.push(Requiredvalidator);
    },
    /**
     * Function to Pull out the validator from the Validation List
     * @param {string} validatorName
     */
    PullValidator: function (validatorName) {
        if (!validatorName || Page_Validators.findIndex(e => e.id == validatorName) < 0)
            return;

        var validatorIndex = Page_Validators.findIndex(e => e.id == validatorName);
        if (validatorIndex > -1) {
            Page_Validators.splice(validatorIndex, 1);
        }
    },
    /**
     * Populate Technician associated details on selection of Technician
     * @param {object} liquidContext
     */
    TechnicianOnChange: function (liquidContext) {
        if (!liquidContext)
            return;

        var technicianId = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        if (technicianId) {
            var selectQuery = "contacts(" + technicianId.replace(/[{}]/g, "") + ")?$select=cat_dealercode, telephone1, cat_contactonly, emailaddress1, _cat_userid_value, cat_techdepartment, cat_division &$orderby=fullname asc";
            //retrieve the inquiry types
            CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (results) {
                if (results) {
                    if (results.cat_dealercode && $("#cat_dealercodetechnician").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercodetechnician", results.cat_dealercode);
                    }
                    if (results.emailaddress1 && $("#cat_preferredtechemailaddress").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredtechemailaddress", results.emailaddress1);
                    }
                    if (results.telephone1 && $("#cat_technicianphonenumber").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianphonenumber", results.telephone1);
                    }
                    if (results.cat_techdepartment && $("#cat_department").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_department", results.cat_techdepartment);
                    }
                    if (results.cat_division && $("#cat_divisiontechnician").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_divisiontechnician", results.cat_division);
                    }
                    if ($("#cat_technicianuserid").length > 0) {
                        let technicianUserIdLookupValue = {};
                        if (results["_cat_userid_value"] && !results["cat_contactonly"]) {
                            let technicianUserId = "{" + results._cat_userid_value.toUpperCase() + "}";
                            technicianUserIdLookupValue = {
                                guid: technicianUserId,
                                name: results["_cat_userid_value@OData.Community.Display.V1.FormattedValue"],
                                entityName: results["_cat_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname"]
                            };
                        }
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianuserid", technicianUserIdLookupValue);
                    }
                }
            }, function (e) {
                CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, true);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredtechemailaddress", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercodetechnician", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianphonenumber", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_department", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianuserid", {});
        }
    },
    /**
     * Function to enable/disable the whole form based on the fieldset collection
     * @param {boolean} isDisabled Boolean to set enable/disable
     */
    EnableDisableForm: function (isDisabled) {
        var sections = $(".section");
        sections.each(function (index, section) {
            if (section && section.dataset && section.dataset.name) {
                var sectionName = section.dataset.name;
                $('table[data-name=' + sectionName + ']').closest('fieldset').find("input[type = text],[type = url],[type = checkbox],[type = email],textarea,select").attr("readonly", isDisabled);
                $('table[data-name=' + sectionName + ']').closest('fieldset').find("button,input[type = radio]").attr("disabled", isDisabled);
                (isDisabled) ? $('table[data-name=' + sectionName + ']').closest('fieldset').find("input[type = text],[type = url],[type = checkbox],[type = email],textarea").addClass("unselectable") : $('table[data-name=' + sectionName + ']').closest('fieldset').find("input[type = text],textarea").removeClass("unselectable");
            }
        });
    },
    /**
     * Populate Contact associated details on selection of a Contact
     * @param {object} liquidContext
     */
    ContactOnChange: function (liquidContext) {
        if (!liquidContext)
            return;
        var status = $("#cat_status").length > 0 ? $("#cat_status").val() : null;
        var statusVal = status ? parseInt(status) : null;
        var eventType = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        var contactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        var selectEntityName = (liquidContext.eventTypeLogicalName === "cat_globalwarranty") ? "cat_globalwarranties" : liquidContext.eventTypeLogicalName + "s";
        if (contactId) {
            var selectQuery = "contacts(" + contactId.replace(/[{}]/g, "") + ")?$select=_cat_dealerid_value, cat_dealercode, cat_contactonly, telephone1, emailaddress1, cat_cwsid,fullname, _cat_userid_value,_cat_parentaccountid_value, mobilephone,cat_childdealercodes,_cat_dealershipuserid_value &$orderby=fullname asc";
            CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (results) {
                if (results) {
                    if (results["_cat_dealerid_value"] && $('#cat_accountid').length > 0) {
                        var dealerId = "{" + results._cat_dealerid_value.toUpperCase() + "}";
                        let accountLookupValue = {
                            guid: dealerId,
                            name: results["_cat_dealerid_value@OData.Community.Display.V1.FormattedValue"],
                            entityName: results["_cat_dealerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"]
                        };
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_accountid", accountLookupValue);
                        CAT.DSRM.ServiceRequestCommon.SetParentDealerCode(liquidContext, results._cat_dealerid_value);
                    }
                    if (results.emailaddress1 && $("#cat_preferredemailaddress").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredemailaddress", results.emailaddress1);
                    }
                    if (results.emailaddress1 && $("#cat_originalpreferredemail").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_originalpreferredemail", results.emailaddress1);
                    }
                    if (results.telephone1 !== undefined && $("#cat_preferredphonenumber").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredphonenumber", results.telephone1);
                    }
                    if (results.mobilephone !== undefined && $("#cat_mobilephonenumber").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_mobilephonenumber", results.mobilephone);
                    }
                    if (results.cat_dealercode && $("#cat_dealercode").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercode", results.cat_dealercode);
                        if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_PRICING.value) {
                            CAT.DSRM.ServiceRequestCommon.SetValue("cat_pricinginquirydealercode", results.cat_dealercode);
                        }
                    }
                    if (results.cat_cwsid && $("#cat_dealercontactcwsid").length > 0) {
                        let cwsId = results.cat_cwsid;
                        if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value && results.cat_childdealercodes && $("#cat_cwsid").length > 0 && $("#cat_cwsid").val()) {
                            //if CWS ID field contains data then do not override the dealercontactcwsid field                            
                            cwsId = $("#cat_cwsid").val();
                        }
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercontactcwsid", cwsId);
                    }
                    if ($("#cat_contactuserid").length > 0) {
                        let contactUserIdLookupValue = {};
                        if (results["_cat_userid_value"] && !results["cat_contactonly"]) {
                            let contactUserId = "{" + results._cat_userid_value.toUpperCase() + "}";
                            contactUserIdLookupValue = {
                                guid: contactUserId,
                                name: results["_cat_userid_value@OData.Community.Display.V1.FormattedValue"],
                                entityName: results["_cat_userid_value@Microsoft.Dynamics.CRM.lookuplogicalname"]
                            };
                        }
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_contactuserid", contactUserIdLookupValue);
                    }
                    if (results["_cat_parentaccountid_value"] && $("#cat_parentaccountid").length > 0) {
                        let parentDealerId = "{" + results._cat_parentaccountid_value.toUpperCase() + "}";
                        let parentAccountIdLookupValue = {
                            guid: parentDealerId,
                            name: results["_cat_parentaccountid_value@OData.Community.Display.V1.FormattedValue"],
                            entityName: results["_cat_parentaccountid_value@Microsoft.Dynamics.CRM.lookuplogicalname"]
                        };
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_parentaccountid", parentAccountIdLookupValue);
                    }
                    if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value && results.fullname !== null && $("#cat_nondtccontactname").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_nondtccontactname", results.fullname);
                    }
                }
            }, function (e) {
                CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, true);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredemailaddress", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredphonenumber", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_mobilephonenumber", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_accountid", {});
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercontactcwsid", "");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_nondtccontactname", "");
            if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_nondtccontactname", "");
            }
        }
    },
    /**
     * Function to filter Event type lookup
     * @param {object} liquidContext
     * @param {string} formName
     */
    FilterEventType: function (liquidContext, formName) {
        if (!liquidContext)
            return;

        if ($("#cat_eventtype").length > 0 && $("#cat_eventtype").is('[disabled="disabled"]'))
            return;

        var entityName = liquidContext.eventTypeLogicalName;
        var loggedInContactAccess = liquidContext.loggedInContactAccess ? liquidContext.loggedInContactAccess : null;
        var brandaffiliation = $("#cat_brandaffiliation").length > 0 ? parseInt($("#cat_brandaffiliation").val()) : null;
        var eventtypeAttributeName = "cat_eventtype";
        var eventtypePicklist = $("#cat_eventtype");
        if (eventtypePicklist.length > 0) {
            CAT.DSRM.ServiceRequestCommon.ClearOptions(eventtypeAttributeName);
            if (entityName.toLowerCase() === "cat_dsn" && brandaffiliation === CAT.DSRM.ServiceRequestCommon.BRAND_CATERPILLAR) {
                if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
                    (loggedInContactAccess.dsnAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_DSN)) : null;
                    (loggedInContactAccess.partTechAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH)) : null;
                    (loggedInContactAccess.empAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_EMP)) : null;
                    (loggedInContactAccess.systemTechAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH)) : null;
                }
            }
            else if (entityName.toLowerCase() === "cat_dsn" && (brandaffiliation === CAT.DSRM.ServiceRequestCommon.BRAND_PERKINS || brandaffiliation === CAT.DSRM.ServiceRequestCommon.BRAND_FGWILSON)) {
                if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
                    (loggedInContactAccess.dsnAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_DSN)) : null;
                    (loggedInContactAccess.partTechAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH)) : null;
                }
            }
            else if (entityName.toLowerCase() === "cat_dsn" && brandaffiliation === CAT.DSRM.ServiceRequestCommon.BRAND_MWM) {
                if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
                    (loggedInContactAccess.dsnAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_DSN)) : null;
                }
            }
            else if (entityName.toLowerCase() === "cat_partstech" || entityName.toLowerCase() === "cat_emp") {
                if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
                    (loggedInContactAccess.dsnAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_DSN)) : null;
                    (loggedInContactAccess.partTechAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH)) : null;
                    (loggedInContactAccess.empAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_EMP)) : null;
                }
            }
            if (entityName.toLowerCase() === "cat_systemtech") {
                if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
                    (loggedInContactAccess.dsnAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_DSN)) : null;
                    (loggedInContactAccess.systemTechAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) ? CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH)) : null;
                }
            }
            if (entityName.toLowerCase() === "cat_globalwarranty") {
                CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH));
                CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY));
                CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_COMMONPSCRM));
            }
            if (entityName.toLowerCase() === "cat_pic") {
                CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY));
                CAT.DSRM.ServiceRequestCommon.AddOption(liquidContext, eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.GetOption(eventtypeAttributeName, CAT.DSRM.ServiceRequestCommon.EVENT_COMMONPSCRM));
            }
        }
        if (entityName.toLowerCase() === "cat_dsn") {
            CAT.DSRM.ServiceRequestCommon.SetValue(eventtypePicklist, CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value, true);
        }
        if (entityName.toLowerCase() === "cat_partstech") {
            CAT.DSRM.ServiceRequestCommon.SetValue(eventtypePicklist, CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value, true);
        }
        if (entityName.toLowerCase() === "cat_emp") {
            CAT.DSRM.ServiceRequestCommon.SetValue(eventtypePicklist, CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value, true);
        }
        if (entityName.toLowerCase() === "cat_systemtech") {
            CAT.DSRM.ServiceRequestCommon.SetValue(eventtypePicklist, CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value, true);
        }
        if (entityName.toLowerCase() === "cat_globalwarranty") {
            CAT.DSRM.ServiceRequestCommon.SetValue(eventtypePicklist, CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value, true);
        }
        if (entityName.toLowerCase() === "cat_pic") {
            CAT.DSRM.ServiceRequestCommon.SetValue(eventtypePicklist, CAT.DSRM.ServiceRequestCommon.EVENT_COMMONPSCRM.value, true);
        }
    },
    /**
     * Function to Clear option of the picklist
     * @param {any} control
     */
    ClearOptions: function (control) {
        if (control && typeof control == "object" && control.length > 0) {
            var elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalClearOptions(elementSelector);
        }
        else if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalClearOptions(elementSelector);
            }
        }
    },
    /**
     * Function to Clear option of the picklist
     * @param {any} control
     */
    InternalClearOptions: function (elementSelector) {
        let selectizeId = elementSelector + "_select";
        if ($(selectizeId).length > 0) {
            let selectizeControl = $(selectizeId).selectize();
            if (selectizeControl.length > 0) {
                selectizeControl[0].selectize.clearOptions();
            }
        }
        else {
            $(elementSelector).empty();
        }
    },
    /**
     * Clear the Event Type based fields on change of EventType
     * @param {object} liquidContext
     * @param {string} formName
     */
    ClearFieldsEventType: function (liquidContext, formName) {
        if (!liquidContext)
            return;
        var newEventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : 0;
        if (newEventType === CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE) {
            return;
        }
        var statusIsDirty = $("#cat_status_header").length > 0 ? CAT.DSRM.ServiceRequestCommon.FieldIsDirty(liquidContext, "cat_status_header") : null;
        if (statusIsDirty) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_save_sr_before_change_event_type"));
            var oldEventTypeValue = parseInt(CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE);
            if ($("#cat_eventtype").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_eventtype"), true);
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_eventtype", oldEventTypeValue);
            }
        }
        else {
            var isInvalid = false;
            // check dealer contact has access for new event type 
            // show alert if Dealer Contact does not have access to new event type
            isInvalid = CAT.DSRM.ServiceRequestCommon.CheckContactHasNewEventAccess(liquidContext);
            if (isInvalid) {
                //set old event type and lock eventtype field
                if (CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE && CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE != 0) {
                    var oldEventTypeValue = parseInt(CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE);
                    if ($("#cat_eventtype").length > 0) {
                        CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_eventtype"), true);
                        CAT.DSRM.ServiceRequestCommon.SetValue("cat_eventtype", oldEventTypeValue);
                    }
                }
            }
            else {
                CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_status_header"), true);
                if ($("#cat_rootcauseid").length > 0) {
                    var clearFields = new Array("cat_inquirytypeid", "cat_workgroupid", "cat_reasonforcallid", "cat_rootcauseid");
                    CAT.DSRM.ServiceRequestCommon.ClearLookupFields(liquidContext, clearFields);
                    CAT.DSRM.ServiceRequestCommon.INQUIRYTYPEID = "";
                    CAT.DSRM.ServiceRequestCommon.FilterInquiryType(liquidContext);
                    CAT.DSRM.ServiceRequestCommon.ScrollAndFocusTab(CAT.DSRM.PortalConstants.OVERVIEW_TAB);
                    $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid").focus() : null;
                }
                //show the note prompt
                if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
                    CAT.DSRM.ServiceRequestCommon.NotePrompt(liquidContext, CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_label_change_event_type"), false, "cat_issrnoteselected", false, null);
                }
                CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE = 0;
            }
        }
    },
    /**
     * Function to check if contact has edit access on the new event type after event type after event type has been changed
     * @param {object} liquidContext
     */
    CheckContactHasNewEventAccess: function (liquidContext) {
        if (!liquidContext)
            return;

        var isInValid = false;
        var entityName = liquidContext.eventTypeLogicalName.toUpperCase();
        var contactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        var eventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : null;
        var dsnAccess = parseInt(liquidContext.loggedInContactAccess.dsnAccess);
        var empAccess = parseInt(liquidContext.loggedInContactAccess.empAccess);
        var partsTechAccess = parseInt(liquidContext.loggedInContactAccess.partTechAccess);
        var systemTechAccess = parseInt(liquidContext.loggedInContactAccess.systemTechAccess);
        if (contactId && eventType && (
            (entityName === "CAT_DSN" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value)
            || (entityName === "CAT_DSN" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value)
            || (entityName === "CAT_DSN" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value)
            || (entityName === "CAT_PARTSTECH" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value)
            || (entityName === "CAT_PARTSTECH" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value)
            || (entityName === "CAT_PARTSTECH" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value)
            || (entityName === "CAT_EMP" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value)
            || (entityName === "CAT_EMP" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value)
            || (entityName === "CAT_SYSTEMTECH" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value))) {
            var message = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_changed_dealer_contact_access");
            var dealerContactCwsId = liquidContext.cwsId;
            if ((dsnAccess !== 100000001 || (dealerContactCwsId && dealerContactCwsId.toUpperCase().startsWith("CRM"))) && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value) {
                message = message?.replace("{0}", "DSN");
            }
            else if (partsTechAccess !== 100000001 && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value) {
                message = message?.replace("{0}", "Parts Tech");
            }
            else if (empAccess !== 100000001 && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value) {
                message = message?.replace("{0}", "EMP");
            }
            else if ((systemTechAccess !== 100000001 || (dealerContactCwsId && dealerContactCwsId.toUpperCase().startsWith("CRM"))) && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
                message = message?.replace("{0}", "System Tech");
            } else {
                message = null;
            }
            if (message) {
                isInValid = true;
                alert(message);
            }
        }
        return isInValid;
    },
    /**
  * Function to check if contact has edit access on the new event type after event type after event type has been changed
  * @param {object} liquidContext
  */
    CheckTechnicanHasNewEventAccess: function (liquidContext) {
        if (!liquidContext)
            return;

        var isInValid = false;
        var entityName = liquidContext.eventTypeLogicalName.toUpperCase();
        var technicianId = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        var eventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : null;
        var dsnAccess = parseInt(liquidContext.loggedInContactAccess.dsnAccess);
        var systemTechAccess = parseInt(liquidContext.loggedInContactAccess.systemTechAccess);
        if (technicianId && eventType && (
            (entityName === "CAT_DSN" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value)
            || (entityName === "CAT_SYSTEMTECH" && eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value))) {
            var selectQuery = "contacts(" + technicianId.replace(/[{}]/g, "") + ")?$select=cat_accessdsn, cat_accesssystemtech";
            CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (results) {
                if (results) {
                    var message = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_changed_technician_access");
                    if ((results.cat_accessdsn !== 100000003 || results.cat_accessdsn !== 100000008) && eventType === CAT.PSCRM.ServiceRequestCommon.EVENT_DSN.value) {
                        message = message.replace("{0}", "DSN");
                    }
                    else if ((results.cat_accesssystemtech !== 100000003 || results.cat_accesssystemtech !== 100000008) && eventType === CAT.PSCRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
                        message = message.replace("{0}", "System Tech");
                    } else {
                        message = null;
                    }
                    if (message) {
                        isInValid = true;
                        alert(message);
                    }
                }
            }, function (e) {
                alert(e);
            }, false);
        }
        return isInValid;
    },
    /**
     * Clear the InquiryType based fields on change of InquiryType
     * @param {object} liquidContext
     */
    ClearFieldsInquiryType: function (liquidContext) {
        if (!liquidContext)
            return;
        var clearFields = new Array("cat_workgroupid", "cat_reasonforcallid", "cat_rootcauseid", "cat_whereresolutionfoundid");
        CAT.DSRM.ServiceRequestCommon.ClearLookupFields(liquidContext, clearFields);
    },
    /**
   * Even Type Change Success
   * @param {object} liquidContext
   */
    EventTypeChangeSuccess: function (liquidContext) {
        if (!liquidContext || CAT.DSRM.ServiceRequestCommon.CheckIsFormRequired(liquidContext))
            return;
        var dealerAccess = liquidContext.dealerAccess;
        var formType = liquidContext.formType;
        var statusVal = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : 0;
        var status = parseInt(statusVal);
        var newEventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : 0;
        var eventTypeIsDirty = $("#cat_eventtype").length > 0 ? CAT.DSRM.ServiceRequestCommon.FieldIsDirty(liquidContext, "cat_eventtype") : null;

        if (formType != CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT
            && status === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value && eventTypeIsDirty && newEventType !== CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_eventtype_change_success"));
        }
    },
    /**
   * Redirect old SR to new event type SR after change event type
   * @param {object} liquidContext
   */
    EventTypeChangeSrRedirect: function (liquidContext) {
        if (!liquidContext)
            return;

        if (liquidContext.stateCode && liquidContext.stateCode !== CAT.DSRM.ServiceRequestCommon.INACTIVE)
            return;

        var oldEventTypeLogicalName = liquidContext.eventTypeLogicalName;
        var newEventTypeLogicalName = null;
        var newSRGuid = null;
        var loggedInContactAccess = liquidContext.loggedInContactAccess ? liquidContext.loggedInContactAccess : null;
        var newEventTypeAccess = null;
        var srNumber = $("#cat_ticketnumber").length > 0 ? $("#cat_ticketnumber").val() : null;
        var newEventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : 0;
        switch (newEventType) {
            case CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value:
                newEventTypeLogicalName = CAT.DSRM.ServiceRequestCommon.EVENT_DSN.logicalName;
                newEventTypeAccess = loggedInContactAccess.dsnAccess;
                break;
            case CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value:
                newEventTypeLogicalName = CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.logicalName;
                newEventTypeAccess = loggedInContactAccess.partTechAccess;
                break;
            case CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value:
                newEventTypeLogicalName = CAT.DSRM.ServiceRequestCommon.EVENT_EMP.logicalName;
                newEventTypeAccess = loggedInContactAccess.empAccess;
                break;
            case CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value:
                newEventTypeLogicalName = CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.logicalName;
                newEventTypeAccess = loggedInContactAccess.systemTechAccess;
                break;
            default:
                break;
        }
        if (oldEventTypeLogicalName && newEventTypeLogicalName && oldEventTypeLogicalName != newEventTypeLogicalName &&
            newEventTypeAccess && newEventTypeAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {

            var selectQuery = newEventTypeLogicalName + "s?$select=" + newEventTypeLogicalName + "id&$filter=cat_ticketnumber eq '" + srNumber + "' and statecode eq " + CAT.DSRM.ServiceRequestCommon.ACTIVE;
            //retrieve the new event type sr records
            CAT.DSRM.WebApi.RetrieveRecords(selectQuery,
                function (result) {
                    if (result.length > 0) {
                        var resultObjectValue = Object.values(result[0]);
                        newSRGuid = resultObjectValue[1];
                        var resultObjectKey = Object.keys(result[0])[1];
                        var newEventTypeLogicalName1 = resultObjectKey.split('id')[0];
                        var url = window.location.origin;
                        if (url && newEventTypeLogicalName1 && newSRGuid) {
                            url = url + "/" + newEventTypeLogicalName1 + "/" + newEventTypeLogicalName1 + "_edit/?id=" + newSRGuid;
                            window.location.replace(url);
                        }
                    }
                }, function (e) {
                    alert(e);
                }, true);
        }
    },
    /**
     * Function to clear multiple lookup fields
     * @param {object} liquidContext
     * @param {Array} lookupFields
     */
    ClearLookupFields: function (liquidContext, lookupFields) {
        if (!liquidContext)
            return;

        if (CAT.DSRM.ServiceRequestCommon.IsArray(liquidContext, lookupFields)) {
            for (let i = 0; i < lookupFields.length; i++) {
                if ($("#" + lookupFields[i]).length > 0) {
                    CAT.DSRM.ServiceRequestCommon.SetValue(lookupFields[i], {});
                }
            }
        }
    },
    /**
     * Check if Object is an Array
     * @param {object} liquidContext
     * @param {any} obj
     */
    IsArray: function (liquidContext, obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    },
    /**
     * Function to lock product related fields based on brand and event type
     * @param {object} liquidContext
     */
    DefaultBrand: function (liquidContext) {
        if (liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            var defaultbrand = $("#cat_brandaffiliation").length > 0 ? $("#cat_brandaffiliation").val() : 0;
            var eventTypeValue = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
            if ($("div[data-name='tab_create_productdetails']").length > 0)
                $("div[data-name='tab_create_productdetails']").hide();
            else
                CAT.DSRM.ServiceRequestCommon.SetVisibleTab("tab_productdetails", false);
        } else {
            CAT.DSRM.ServiceRequestCommon.DisableDateLastUpdatedField(liquidContext);
            if ($("div[data-name='tab_edit_productdetails']").length > 0)
                $("div[data-name='tab_edit_productdetails']").hide();
            else
                CAT.DSRM.ServiceRequestCommon.SetVisibleTab("tab_productdetails", true);
        }
    },
    /**
     * Disabling DateLastUpdated field on edit form
     * @param {object} liquidContext
     */
    DisableDateLastUpdatedField: function (liquidContext) {
        if (liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            $("#cat_datelastupdated_datepicker_description").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_datelastupdated_datepicker_description", true) : null;
        }
    },
    /**
     * Function to lock certain fields when status of the SR is in Pending dealer Action
     * @param {object} liquidContext
     */
    LockfieldsonPDA: function (liquidContext) {
        var status = $("#cat_status").length > 0 ? $("#cat_status").val() : null;
        var currentEventType = liquidContext && liquidContext.eventType ? liquidContext.eventType : null;
        if (status && status == CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value) {
            if (currentEventType && currentEventType != CAT.DSRM.ServiceRequestCommon.EVENT_PRICING.value) {
                var fieldsDisable = new Array("cat_inquirytypeid", "cat_workgroupid", "cat_dealerexpectation", "cat_prioritycode");
                CAT.DSRM.ServiceRequestCommon.SetDisabled(fieldsDisable, true);
            }
            if (currentEventType && currentEventType == CAT.DSRM.ServiceRequestCommon.EVENT_PRICING.value) {
                CAT.DSRM.ServiceRequestCommon.EnableDisableForm(true);
                var fieldsEnabled = new Array("cat_customerid", "cat_preferredemailaddress", "cat_preferredphonenumber", "cat_responseexpectation", "cat_describeresponseexpectation",
                    "cat_describeinquiry", "cat_dealercarboncopyemail");
                CAT.DSRM.ServiceRequestCommon.SetDisabled(fieldsEnabled, false);
                $("#cat_cancelledreplacedbycrb").length > 0 ? $("#cat_cancelledreplacedbycrb input:radio").attr('disabled', false) : null;
                $("#cat_miningfactorydirect").length > 0 ? $("#cat_miningfactorydirect input:radio").attr('disabled', false) : null;
            }
            else if (currentEventType && currentEventType == CAT.DSRM.ServiceRequestCommon.EVENT_GOODWILL.value) {
                var fieldsEnabled = new Array("cat_inquirytypeid");
                CAT.DSRM.ServiceRequestCommon.SetDisabled(fieldsDisable, true);
            }
            else if (currentEventType && currentEventType == CAT.DSRM.ServiceRequestCommon.EVENT_PIQ.value) {
                var fieldsEnabled = new Array("cat_inquirytypeid", "cat_prioritycode");
                CAT.DSRM.ServiceRequestCommon.SetDisabled(fieldsDisable, true);
            }
        }
    },
    /**
     * Function To set parent dealer Code
     * @param {object} liquidContext
     * @param {string} accountId
     */
    SetParentDealerCode: function (liquidContext, accountId) {
        if (!liquidContext || !accountId)
            return;

        var selectQuery = "accounts(" + accountId.replace(/[{}]/g, "") + ")?$select=cat_parentdealercode";
        CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (results) {
            if (results) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_parentdealercode", results.cat_parentdealercode);
            }
            else {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_parentdealercode", "");
            }
        }, function (e) {
            CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
        }, false);
    },
    /**
     * Function to set date time fields
     * @param {any} controlName Name of the control to set the value
     * @param {string} value Value to be set in the control
     */
    SetDateField(controlName, value) {
        if (!controlName)
            return;

        var $submitField = $("#" + controlName);
        var $displayField = $submitField.nextAll(".datetimepicker").children("input");
        if (value) {
            var dateFormat = $displayField.attr("data-date-format");
            $submitField.val(moment(value).format("YYYY-MM-DDTHH:mm:ss.SSSSSSS"));
            $displayField.val(moment(value).format(dateFormat));
        }
        else {
            $submitField.val(null);
            $displayField.val(null);
        }
    },
    /**
     * Function to get date time fields
     * @param {any} controlName Name of the control to set the value
     */
    GetDateField(controlName) {
        if (!controlName)
            return;

        var $submitField = $("#" + controlName);
        var $displayField = $submitField.nextAll(".datetimepicker").children("input");
        return $displayField.val();
    },
    /**
     * Function to get value of the field by using type of the field
     * @param {any} controlName Name of the controlName to get the value
     * @param {any} controlType states type of controlName e.g. decimal, integer, text
     */
    GetValueByType(controlName, controlType) {
        if (!controlName)
            return;
        var controlValue = null;
        var elementSelector = controlName.startsWith('#') ? controlName : "#" + controlName;

        if ($(elementSelector).length > 0 && $(elementSelector).val()) {
            if (!controlType)
                controlType = CAT.DSRM.ServiceRequestCommon.GetFormFieldType(elementSelector);

            switch (controlType) {
                case "decimal":
                    controlValue = parseFloat(CAT.DSRM.ServiceRequestCommon.GetValue(elementSelector).replace(/,/g, ''));
                    break;
                case "integer":
                    controlValue = parseInt(CAT.DSRM.ServiceRequestCommon.GetValue(elementSelector).replace(/,/g, ''));
                    break;
                case "text":
                default:
                    controlValue = CAT.DSRM.ServiceRequestCommon.GetValue(elementSelector);
                    break;
            }
        }
        return controlValue;
    },
    /**
     * Function to get type of the field
     * @param {any} fieldSchemaName Name of the field to get the field type
     */
    GetFormFieldType(fieldSchemaName) {
        var inputType = null;
        var inputElementClass = $(fieldSchemaName).attr("class");
        if (inputElementClass) {
            if (inputElementClass.contains("decimal")) {
                inputType = "decimal";
            }
            else if (inputElementClass.contains("integer")) {
                inputType = "integer";
            }
            else
                inputType = "text";
        }
        return inputType;
    },
    /**
     * Function to set visibility of control
     * @param {any} controlName
     * @param {boolean} isVisible
     */
    SetVisible: function (control, isVisible) {
        if (Array.isArray(control)) {
            $(control).each(function (index, element) {
                if (typeof element == "string") {
                    var elementSelector = element.startsWith('#') ? element : "#" + element;
                    if ($(elementSelector).length > 0) {
                        CAT.DSRM.ServiceRequestCommon.InternalSetVisible(elementSelector, isVisible);
                    }
                }
                else if (typeof element == "object" && element.length > 0) {
                    var elementSelector = "#" + element.attr('id');
                    CAT.DSRM.ServiceRequestCommon.InternalSetVisible(elementSelector, isVisible);
                }
            });
        }
        else if (typeof control == "object" && control.length > 0) {
            var elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetVisible(elementSelector, isVisible);
        }
        else if (typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetVisible(elementSelector, isVisible);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set visiblilty of control
     * @param {string} controlSelector
     * @param {boolean} isVisible
     */
    InternalSetVisible: function (controlSelector, isVisible) {
        if (!controlSelector || $(controlSelector).length < 1)
            return;
        let lookupField = $(controlSelector).closest(".lookup");
        let multiLineOfText = $(controlSelector).closest(".textarea");
        let ribbonBtn = $(controlSelector).closest("#visibleRibbon > .xrm-editable-html")
            && $(controlSelector).closest("#visibleRibbon > .xrm-editable-html").length === 1
            ? $(controlSelector).closest("#visibleRibbon > .xrm-editable-html")
            : $(controlSelector).closest("#page_ribbon_hr_option_list > .xrm-editable-html")
                && $(controlSelector).closest("#page_ribbon_hr_option_list > .xrm-editable-html").length === 1
                ? $(controlSelector).closest("#page_ribbon_hr_option_list > .xrm-editable-html")
                : null
        let overflowRibbonBtn = $(controlSelector).closest("#page_ribbon_hr_option_list > .xrm-editable-html");
        if (ribbonBtn) {
            if (isVisible) {
                ribbonBtn.show();
            }
            else {
                ribbonBtn.hide();
            }
        }
        if ((lookupField.length == 1) || (multiLineOfText.length == 1)) {
            if (isVisible) {
                $(controlSelector).closest(".control").show();
                $(controlSelector + "_label").length > 0 ? $(controlSelector + "_label").show() : null;
                $(controlSelector + "_select").length > 0 ? $(controlSelector + "_select").closest(".control").show() : null;
            }
            else {
                $(controlSelector).closest(".control").hide();
                $(controlSelector + "_label").length > 0 ? $(controlSelector + "_label").hide() : null;
                $(controlSelector + "_select").length > 0 ? $(controlSelector + "_select").closest(".control").hide() : null;
            }
        }
        else if (isVisible) {
            $(controlSelector).show();
            $(controlSelector + "_label").length > 0 ? $(controlSelector + "_label").show() : null;
            $(controlSelector + "_label").length > 0 ? ($(controlSelector + "_label").closest("td").length > 0 ? $(controlSelector + "_label").closest("td").show() : ($(controlSelector + "_label").closest("tr").length > 0 ? $(controlSelector + "_label").closest("tr").show() : null)) : null;
        }
        else {
            $(controlSelector).hide();
            $(controlSelector + "_label").length > 0 ? $(controlSelector + "_label").hide() : null;
            $(controlSelector + "_label").length > 0 ? ($(controlSelector + "_label").closest("td").length > 0 ? $(controlSelector + "_label").closest("td").hide() : ($(controlSelector + "_label").closest("tr").length > 0 ? $(controlSelector + "_label").closest("tr").hide() : null)) : null;
        }
    },/**
     * Function to Get value of controls
     * @param {any} control
     */
    GetValue: function (control) {
        if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                let languageCode = (typeof window !== undefined && window.location) ? window.location.pathname.split('/')[1] || '' : '';
                let controlValue = $(control).val();

                if (languageCode === "fr-FR" && typeof (controlValue) === "string") {
                    controlValue = controlValue?.replace(',', '.');
                }
                return controlValue;

            }
        }
    },
    /**
     * Function to set value of controls depending upon the type of control
     * @param {any} control
     * @param {any} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange 
     */
    SetValue: function (control, value, doNotDirty, triggerChange) {
        if (control && typeof control == "object" && control.length > 0) {
            var elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetValue(elementSelector, value, doNotDirty, triggerChange);
        }
        else if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetValue(elementSelector, value, doNotDirty, triggerChange);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set value of controls depending upon the type of control
     * @param {string} elementSelector
     * @param {any} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    InternalSetValue: function (elementSelector, value, doNotDirty, triggerChange) {
        let languageCode = (typeof (window) !== undefined && window.location) ? window.location.pathname.split('/')[1] || '' : '';
        if (elementSelector && $(elementSelector).length > 0) {

            if (triggerChange == undefined) {
                triggerChange = false;
            }

            if (doNotDirty == undefined) {
                doNotDirty = false;
            }
            //return if current value or new value are same
            if (!doNotDirty) {
                var elementValue = $(elementSelector).val() ? $(elementSelector).val() : null;
                var newValue = "";
                if (value && typeof (value) === "object" && !(value instanceof Date) && !(value instanceof Array)) {
                    newValue = value.guid ? value.guid.replace(/[{}]/g, "") : null;
                } else {
                    newValue = value;
                }
                newValue = newValue !== null && newValue !== undefined && newValue.toString() ? newValue.toString() : null;
                if (newValue === elementValue) {
                    return;
                }
            }
            // Lookups
            if (value && typeof (value) === "object" && !(value instanceof Date) && !(value instanceof Array)) {
                let guid = null;
                let name = null;
                let entityName = null;
                let selectizeElementSelector = elementSelector + "_select";
                if (value.hasOwnProperty("guid")
                    && value.hasOwnProperty("name")
                    && value.hasOwnProperty("entityName")) {
                    guid = value.guid;
                    name = value.name;
                    entityName = value.entityName;
                }
                if ($(elementSelector).hasClass("lookup") && $(elementSelector).is("select")) {
                    $(elementSelector).val(guid);
                    $(elementSelector + "_entityname").val(entityName);
                }
                else if ($(selectizeElementSelector).length > 0) {
                    CAT.DSRM.ServiceRequestCommon.SetValueSelectize(selectizeElementSelector, guid);
                    CAT.DSRM.ServiceRequestCommon.SetValueModalLookup(elementSelector, value, doNotDirty);
                }
                else if ($(elementSelector + "_name").hasClass("lookup") && $(elementSelector).is("input")) {
                    CAT.DSRM.ServiceRequestCommon.SetValueModalLookup(elementSelector, value, doNotDirty);
                }
            }
            // Radio button & Two Option set
            else if ($(elementSelector).hasClass('boolean-radio') || $(elementSelector).hasClass('boolean-dropdown')) {
                CAT.DSRM.ServiceRequestCommon.SetValueRadioButton(elementSelector, value, doNotDirty);
            }
            else if ($(elementSelector).hasClass('datetime')) {
                CAT.DSRM.ServiceRequestCommon.SetValueDatePicker(elementSelector, value, doNotDirty);
            }
            // If field is disabled
            else if ($(elementSelector).prop("disabled") && $(elementSelector).is("input")) {
                CAT.DSRM.ServiceRequestCommon.SetDisabled($(elementSelector), false);
                if (languageCode === "fr-FR") {

                    value = (!isNaN(value) && value?.toString().includes('.')) ||
                        (value?.toString().includes('%') && !isNaN(value?.toString().replace('%', ''))) ||
                        (value?.toString().includes('$') && !isNaN(value?.toString().replace('$', '')))
                        ? value.toString().replace('.', ',') : value;
                }
                $(elementSelector).val(value);
                CAT.DSRM.ServiceRequestCommon.SetDisabled($(elementSelector), true);
            }
            // Others
            else {
                if (languageCode === "fr-FR") {
                    value = (!isNaN(value) && value?.toString().includes('.')) ||
                        (value?.toString().includes('%') && !isNaN(value?.toString().replace('%', ''))) ||
                        (value?.toString().includes('$') && !isNaN(value?.toString().replace('$', '')))
                        ? value.toString().replace('.', ',') : value;
                }
                $(elementSelector).val(value);
            }
            if (!doNotDirty) {
                $(elementSelector).addClass("dirty");
            }
            if (triggerChange) {
                $(elementSelector).trigger("change");
            }
        }
    },
    /**
     * Function to set value of selectize control
     * @param {any} control
     * @param {string} value
     * @param {boolean} triggerChange
     */
    SetValueSelectize: function (control, value, triggerChange) {
        if (control && typeof control == "object" && control.length > 0) {
            let elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetValueSelectize(elementSelector, value, triggerChange);
        }
        else if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetValueSelectize(elementSelector, value, triggerChange);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set value of selectize control
     * @param {string} elementSelector
     * @param {string} value
     * @param {boolean} triggerChange
     */
    InternalSetValueSelectize: function (elementSelector, value, triggerChange) {
        if (!elementSelector || $(elementSelector).length < 1)
            return;

        if (triggerChange == undefined) {
            triggerChange = false;
        }
        let selectizeLookupControl = $(elementSelector)[0].selectize;
        selectizeLookupControl.setValue([value], !triggerChange);
    },
    /**
     * Function to set value of modal lookup control
     * @param {any} control
     * @param {object} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    SetValueModalLookup: function (control, value, doNotDirty, triggerChange) {
        if (control && typeof control == "object" && control.length > 0) {
            let elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetValueModalLookup(elementSelector, value, doNotDirty, triggerChange);
        }
        else if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetValueModalLookup(elementSelector, value, doNotDirty, triggerChange);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set value of modal lookup control
     * @param {string} elementSelector
     * @param {object} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    InternalSetValueModalLookup: function (elementSelector, value, doNotDirty, triggerChange) {
        if (!elementSelector || $(elementSelector).length < 1)
            return;

        if (triggerChange == undefined) {
            triggerChange = false;
        }

        if (doNotDirty == undefined) {
            doNotDirty = false;
        }

        if (value
            && value.hasOwnProperty("guid")
            && value.hasOwnProperty("name")
            && value.hasOwnProperty("entityName")) {
            $(elementSelector).val(value.guid);
            $(elementSelector + "_name").val(value.name);
            $(elementSelector + "_entityname").val(value.entityName);
        }
        else {
            $(elementSelector).closest(".input-group")?.find(".clearlookupfield")?.click();
        }
        if (!doNotDirty) {
            $(elementSelector).addClass("dirty");
        }
        if (triggerChange) {
            $(elementSelector).trigger("change");
        }
    },
    /**
     * Function to set radio button value in portal
     * @param {string} control
     * @param {boolean} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    SetValueRadioButton: function (control, value, doNotDirty, triggerChange) {
        if (control && typeof control == "object" && control.length > 0) {
            let elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetValueRadioButton(elementSelector, value, doNotDirty, triggerChange);
        }
        else if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetValueRadioButton(elementSelector, value, doNotDirty, triggerChange);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set radio button value in portal
     * @param {string} elementSelector
     * @param {boolean} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    InternalSetValueRadioButton: function (elementSelector, value, doNotDirty, triggerChange) {
        if (!elementSelector || $(elementSelector).length < 1)
            return;

        if (triggerChange == undefined) {
            triggerChange = false;
        }

        if (doNotDirty == undefined) {
            doNotDirty = false;
        }

        if (value === "1" || value === "true") {
            value = 1;
        }
        else if (value === "0" || value === "false") {
            value = 0;
        }

        let isRadioButton = $(elementSelector).hasClass('boolean-radio');
        let isOptionset = $(elementSelector).hasClass('boolean-dropdown');
        if (isRadioButton) {
            if (value) {
                $(elementSelector + "_1").length > 0 ? $(elementSelector + "_1").prop("checked", true) : null;
                $(elementSelector + "_0").length > 0 ? $(elementSelector + "_0").prop("checked", false) : null;
            }
            else {
                $(elementSelector + "_1").length > 0 ? $(elementSelector + "_1").prop("checked", false) : null;
                $(elementSelector + "_0").length > 0 ? $(elementSelector + "_0").prop("checked", true) : null;
            }
        }
        else if (isOptionset) {
            if (value) {
                $(elementSelector).val(1);
            }
            else {
                $(elementSelector).val(0);
            }
        }
        if (!doNotDirty) {
            $(elementSelector).addClass("dirty");
        }
        if (triggerChange) {
            $(elementSelector).trigger("change");
        }
    },
    /**
     * Function to set date picker value in portal
     * @param {string} control
     * @param {string} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    SetValueDatePicker(control, value, doNotDirty, triggerChange) {
        if (control && typeof control == "object" && control.length > 0) {
            let elementSelector = "#" + control.attr('id');
            CAT.DSRM.ServiceRequestCommon.InternalSetValueDatePicker(elementSelector, value, doNotDirty, triggerChange);
        }
        else if (control && typeof control == "string") {
            var elementSelector = control.startsWith('#') ? control : "#" + control;
            if ($(elementSelector).length > 0) {
                CAT.DSRM.ServiceRequestCommon.InternalSetValueDatePicker(elementSelector, value, doNotDirty, triggerChange);
            }
        }
    },
    /**
     * INTERNAL USE ONLY: Function to set date picker value in portal
     * @param {string} control
     * @param {string} value
     * @param {boolean} doNotDirty
     * @param {boolean} triggerChange
     */
    InternalSetValueDatePicker(elementSelector, value, doNotDirty, triggerChange) {
        if (!elementSelector || $(elementSelector).length < 1)
            return;

        if (triggerChange == undefined) {
            triggerChange = false;
        }

        if (doNotDirty == undefined) {
            doNotDirty = false;
        }

        let dateValue = null;
        let dateTimeControl = $(elementSelector);
        let dateTimeDisplayControl = dateTimeControl.nextAll(".datetimepicker").children("input");
        let controlValue = null;
        let displayValue = null;
        if (value) {
            dateValue = new Date(value);
        }
        if (dateValue && dateValue.toString() !== "Invalid Date") {
            let dateFormat = dateTimeDisplayControl.attr("data-date-format");
            controlValue = moment.utc(dateValue).format("YYYY-MM-DDTHH:mm:ss.SSSSSSS[Z]");
            displayValue = moment(dateValue).tz(CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone).format(dateFormat);
        }
        dateTimeControl.val(controlValue);
        dateTimeDisplayControl.val(displayValue);

        if (!doNotDirty) {
            $(elementSelector).addClass("dirty");
        }
        // Need to check change trigger for date picker
        //if (triggerChange) {
        //    $(elementSelector).trigger("change");
        //}
    },

    /**
     * Lock Dealer Urgent field for Dealers in GDSN event types after Dealer Open status
     * @param {object} liquidContext
     */
    LockUnlockDealerUrgent: function (liquidContext) {
        if (!liquidContext)
            return;
        var status = $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        if (status && (status !== CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value &&
            status !== CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value &&
            status !== CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value)) {
            $("#cat_dealerurgent").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerurgent", true) : null;
        }
    },
    /**enable CPI Number fields for all GDSN event type in all statuses */
    EnableCPINumber: function () {
        CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_cpinumber", false);
    },
    /**
     * Set Old Technician on Load of DSN & system Tech Dealer forms
     */
    GetTechnicianValue: function () {
        if ($("#cat_technicianid").length > 0) {
            CAT.DSRM.ServiceRequestCommon.OLDTECHNICIAN = $("#cat_technicianid").val();
        }
    },
    /**
     * Set Process Terminology label on the SR 
     * @param {object} liquidContext
     */
    GetProcessTerminology: function (liquidContext) {
        if (!liquidContext)
            return;

        var inquiryType = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid").val() : null;
        var processLabel = $("#cat_processlabel").length > 0 ? $("#cat_processlabel").val() : null;
        if (inquiryType && !processLabel) {
            var selectQuery = "cat_processterminologies?$select=cat_name&$filter=_cat_inquirytype_value eq " + inquiryType.replace(/[{}]/g, "");
            CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (result) {
                if (result && result.length > 0) {
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_processlabel", result[0].cat_name);
                }
            }, function (e) {
                if (e)
                    alert("Error updating Process label" + e);
            }, true);
        }
    },
    /**
     * Function to Hide CPI fields for FG Wilson
     * @param {object} liquidContext
     */
    hideCPIForFGWilson: function (liquidContext) {
        if (!liquidContext)
            return;

        var dealerAccess = liquidContext.dealerAccess;
        var brandAffiliation = $("#cat_brandaffiliation").length > 0 ? $("#cat_brandaffiliation").val() : 0;
        if (brandAffiliation == CAT.DSRM.ServiceRequestCommon.BRAND_FGWILSON) {
            $('#cat_followup').closest('tr').hide();
            $("#cat_cpinumber").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetVisible("cat_cpinumber", false) : null;

            if (dealerAccess != CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT || dealerAccess != CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN) {
                $("#new_answerpartnumber").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetVisible("new_answerpartnumber", false) : null;
            }
        }
    },
    /**
     * Function to hide product details field for FG Wilson brand
     */
    HideFieldsForFGWilson: function () {
        var brandAffiliation = $("#cat_brandaffiliation").length > 0 ? $("#cat_brandaffiliation").val() : 0;
        if (brandAffiliation == CAT.DSRM.ServiceRequestCommon.BRAND_FGWILSON) {
            var eventTypeValue = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : 0;
            if (eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value) {
                $("#cat_vinnumber").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetVisible("cat_vinnumber", false) : null;
            }
            else if (eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value) {
                $("#cat_systemdetailid").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetVisible("cat_systemdetailid", false) : null;
            }
        }
    },
    /**
     * Populate Contact associated details on load
     * @param {object} liquidContext
     */
    AutopopulateContactDetails: function (liquidContext) {
        if (!liquidContext)
            return;
        var eventType = $("#cat_eventtype").length ? $("#cat_eventtype").val() : null;
        var formType = liquidContext.formType;
        var contactId = $("#cat_customerid").length ? $("#cat_customerid").val() : null;
        var technicianId = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        var technicianName = $("#cat_technicianid").length > 0 ? $("#cat_technicianid_name").val() : null;
        if (contactId && formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            if (liquidContext.accountId && $('#cat_accountid').length > 0) {
                let dealerIdLookupValue = {};
                let dealerId = "{" + liquidContext.accountId.toUpperCase() + "}";
                dealerIdLookupValue = {
                    guid: dealerId,
                    name: liquidContext.accountName,
                    entityName: "account"
                }
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_accountid", dealerIdLookupValue);
                CAT.DSRM.ServiceRequestCommon.SetParentDealerCode(liquidContext, dealerId);
            }
            if (liquidContext.email && $("#cat_preferredemailaddress").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredemailaddress", liquidContext.email);
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_originalpreferredemail", liquidContext.email);
            }
            if (liquidContext.phoneNumber && $("#cat_preferredphonenumber").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredphonenumber", liquidContext.phoneNumber);
            }
            if (liquidContext.mobilePhone && $("#cat_mobilephonenumber").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_mobilephonenumber", liquidContext.mobilePhone);
            }
            if (liquidContext.dealerCode && $("#cat_dealercode").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercode", liquidContext.dealerCode);
                if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_PRICING.value) {
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_pricinginquirydealercode", liquidContext.dealerCode);
                }
                if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_GOODWILL.value) {
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_goodwilldealercode", liquidContext.dealerCode);
                }
            }
            if (liquidContext.cwsId && $("#cat_dealercontactcwsid").length > 0) {
                let cwsId = liquidContext.cwsId;
                if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value && liquidContext.childDealerCodes && $("#cat_cwsid").length > 0 && $("#cat_cwsid").val()) {
                    //if CWS ID field contains data then do not override the dealercontactcwsid field
                    cwsId = $("#cat_cwsid").val();
                }
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercontactcwsid", cwsId);
            }
            if ($("#cat_contactuserid").length > 0) {
                let contactUserIdLookupValue = {};
                if (liquidContext.userId && liquidContext.contactOnly === 'false') {
                    let contactUserId = "{" + liquidContext.userId.toUpperCase() + "}";
                    contactUserIdLookupValue = {
                        guid: contactUserId,
                        name: liquidContext.userName,
                        entityName: "systemuser"
                    };
                }
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_contactuserid", contactUserIdLookupValue);
            }
            if (liquidContext.parentDealerId && $("#cat_parentaccountid").length > 0) {
                let parentDealerId = "{" + liquidContext.parentDealerId.toUpperCase() + "}";
                let parentAccountIdLookupValue = {
                    guid: parentDealerId,
                    name: liquidContext.parentDealerName,
                    entityName: "account"
                };
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_parentaccountid", parentAccountIdLookupValue);
            }
            if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value && liquidContext.fullName !== null && $("#cat_nondtccontactname").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_nondtccontactname", liquidContext.fullName);
            }
            if ($("#cat_technicianuserid").length > 0) {
                let technicianUserIdLookupValue = {};
                if (technicianId !== null && liquidContext.contactOnly === 'false' && technicianId !== undefined && technicianId !== "" && liquidContext.userId) {
                    var contactUserId = "{" + liquidContext.userId.toUpperCase() + "}";
                    technicianUserIdLookupValue = {
                        guid: contactUserId,
                        name: liquidContext.userName,
                        entityName: "systemuser"
                    };
                }
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianuserid", technicianUserIdLookupValue);
            }
        }
        if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && liquidContext.relatedRecordLogicalName == "cat_affectedunit" && liquidContext.parentDealerId && $("#cat_parentaccountid").length > 0) {
            let parentDealerId = "{" + liquidContext.parentDealerId.toUpperCase() + "}";
            let parentAccountIdLookupValue = {
                guid: parentDealerId,
                name: liquidContext.parentDealerName,
                entityName: "account"
            };
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_parentaccountid", parentAccountIdLookupValue);
        }
    },
    /**
     * Populate Contact associated details on load
     * @param {object} liquidContext
     */
    AutopopulateTechnicianDetails: function (liquidContext) {
        if (!liquidContext)
            return;
        var eventType = $("#cat_eventtype").length ? $("#cat_eventtype").val() : null;
        var formType = liquidContext.formType;
        var contactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        var technicianId = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        var technicianName = $("#cat_technicianid").length > 0 ? $("#cat_technicianid_name").val() : null;
        if (technicianId && formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            if (liquidContext.dealerCode && $("#cat_dealercodetechnician").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealercodetechnician", liquidContext.dealerCode);
            }
            if (liquidContext.email && $("#cat_preferredtechemailaddress").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_preferredtechemailaddress", liquidContext.email);
            }
            if (liquidContext.phoneNumber && $("#cat_technicianphonenumber").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianphonenumber", liquidContext.phoneNumber);
            }
            if (liquidContext.techDepartment && $("#cat_department").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_department", liquidContext.techDepartment);
            }
            if (liquidContext.division && $("#cat_divisiontechnician").length > 0) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_divisiontechnician", liquidContext.division);
            }
            if ($("#cat_technicianuserid").length > 0) {
                let technicianUserIdLookupValue = {};
                if (liquidContext.contactOnly === 'false' && liquidContext.userId) {
                    let technicianUserId = "{" + liquidContext.userId.toUpperCase() + "}";
                    technicianUserIdLookupValue = {
                        guid: technicianUserId,
                        name: liquidContext.userName,
                        entityName: "systemuser"
                    };
                }
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_technicianuserid", technicianUserIdLookupValue);
            }
        }
    },
    /**
     * Function to show pop Up buttons of related entity
     * @param {object} liquidContext
     */
    ShowPopUpButton: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        if (formType == CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            $(CAT.DSRM.PortalConstants.ASSOCIATED_VIEW_BTN).length > 0 ? $(CAT.DSRM.PortalConstants.ASSOCIATED_VIEW_BTN).hide() : null;
        }
        if (formType == CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            //Activities
            CAT.DSRM.ServiceRequestCommon.ShowActivitiesView(liquidContext);
            //Email Messages
            CAT.DSRM.ServiceRequestCommon.ShowEmailMessagesView(liquidContext);
            //Subscription
            CAT.DSRM.ServiceRequestCommon.ShowSubscriptionAssociatedView(liquidContext);
            //Associated View Part 
            CAT.DSRM.ServiceRequestCommon.ShowPartAssociatedView(liquidContext);
            //Associated View Affected Unit 
            CAT.DSRM.ServiceRequestCommon.ShowAffectedUnitAssociatedView(liquidContext);
            //Associated SR
            CAT.DSRM.ServiceRequestCommon.ShowAssociatedSRAssociatedView(liquidContext);
            //Associated View Action Item 
            CAT.DSRM.ServiceRequestCommon.ShowActionItemAssociatedView(liquidContext);
            //Associated View Test Iron Validation
            CAT.DSRM.ServiceRequestCommon.ShowTestIronValidationAssociatedView(liquidContext);
            //Associated View SR Attachment
            CAT.DSRM.ServiceRequestCommon.ShowSRAttachmentAssociatedView(liquidContext);
            //SR Note
            CAT.DSRM.ServiceRequestCommon.ShowSRNoteAssociatedView(liquidContext);
            //Dealer Note
            CAT.DSRM.ServiceRequestCommon.ShowDealerNoteAssociatedView(liquidContext);
            //External Attachment
            CAT.DSRM.ServiceRequestCommon.ShowExternalAttachmentAssociatedView(liquidContext);
            // Add External Note
            CAT.DSRM.ServiceRequestCommon.ShowExternalNoteAssociatedView(liquidContext);
            //Witness of incident
            CAT.DSRM.ServiceRequestCommon.ShowWitnessOfIncidentAssociatedView(liquidContext);
            // Serialized Component
            CAT.DSRM.ServiceRequestCommon.ShowSerializedComponentAssociatedView(liquidContext);
            // Audit History
            CAT.DSRM.ServiceRequestCommon.ShowAuditHistoryAssociatedView(liquidContext);
        }
    },
    /**
    * Dealership Check of logged in user with SR
    * @param {object} liquidContext
    */
    DealershipCheck: function (liquidContext) {
        var inDealership = false;
        var parentAccountId = liquidContext.parentDealerId && liquidContext.parentDealerId.length > 0 ? liquidContext.parentDealerId : null;
        var eventTypeRecordParentDealerId = liquidContext.eventTypeRecordParentDealerId && liquidContext.eventTypeRecordParentDealerId.length > 0 ? liquidContext.eventTypeRecordParentDealerId : null;
        if (parentAccountId && eventTypeRecordParentDealerId && parentAccountId == eventTypeRecordParentDealerId) {
            inDealership = true;
        }
        return inDealership;
    },
    /**
    * Event Type Read Access Check
    * @param {string} entityName
    * @param {object} liquidContext
    */
    EventTypeAccessCheck: function (entityName, liquidContext) {
        var readAccess = false;
        switch (entityName) {
            case "cat_dsn":
                if (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_emp":
                if (liquidContext?.loggedInContactAccess?.empAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_globalwarranty":
                if (liquidContext?.loggedInContactAccess?.globalWarrantyAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_systemtech":
                if (liquidContext?.loggedInContactAccess?.systemTechAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_partstech":
                if (liquidContext?.loggedInContactAccess?.partTechAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_pic":
                if (liquidContext?.loggedInContactAccess?.commonPSCRMAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_pricing":
                if (liquidContext?.loggedInContactAccess?.pricingAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_piq":
                if (liquidContext?.loggedInContactAccess?.piqAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_goodwill":
                if (liquidContext?.loggedInContactAccess?.goodwillAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ) {
                    readAccess = true;
                }
                break;
            case "cat_dealercpi":
            case "cat_dealerppm":
                if ((liquidContext?.loggedInContactAccess?.dealerPPMAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ)
                    || (liquidContext?.relatedRecordLogicalName !== "cat_servicerequestnote" ? (liquidContext?.loggedInContactAccess?.dealerPPMAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_READ_ONLY) : false)) {
                    readAccess = true;
                }
                break;
            default:
                break;
        }
        return readAccess;
    },
    /**
    * Event Type Edit Access Check
    * @param {string} entityName
    * @param {object} liquidContext
    */
    EventTypeEditAccessCheck: function (entityName, liquidContext) {
        var isEditAccess = false;
        switch (entityName) {
            case "cat_dsn":
                if ((liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) || (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT) || (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)) {
                    isEditAccess = true;
                }
                break;
            case "cat_emp":
                if (liquidContext?.loggedInContactAccess?.empAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                    isEditAccess = true;
                }
                break;
            case "cat_globalwarranty":
                if (liquidContext?.loggedInContactAccess?.globalWarrantyAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                    isEditAccess = true;
                }
                break;
            case "cat_systemtech":
                if ((liquidContext?.loggedInContactAccess?.systemTechAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) || (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT) || (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)) {
                    isEditAccess = true;
                }
                break;
            case "cat_partstech":
                if ((liquidContext?.loggedInContactAccess?.partTechAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) || (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT) || (liquidContext?.loggedInContactAccess?.dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)) {
                    isEditAccess = true;
                }
                break;
            case "cat_pic":
                if (liquidContext?.loggedInContactAccess?.commonPSCRMAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                    isEditAccess = true;
                }
                break;
            case "cat_pricing":
                if (liquidContext?.loggedInContactAccess?.pricingAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                    isEditAccess = true;
                }
                break;
            case "cat_piq":
                if (liquidContext?.loggedInContactAccess?.piqAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                    isEditAccess = true;
                }
                break;
            case "cat_goodwill":
                if (liquidContext?.loggedInContactAccess?.goodwillAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                    isEditAccess = true;
                }
                break;
            case "cat_dealercpi":
            case "cat_dealerppm":
                if ((liquidContext?.loggedInContactAccess?.dealerPPMAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_CREATE_EDIT) || (liquidContext?.loggedInContactAccess?.dealerPPMAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_LIMITED_EDIT)) {
                    isEditAccess = true;
                }
                break;
            default:
                break;
        }
        return isEditAccess;
    },
    /**
    * Function to show Activity view 
    * @param {object} liquidContext
    */
    ShowActivitiesView: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.eventTypeLogicalName != "cat_dealercpi")
            return;
        var urlToOpenActivityView = null;
        var qstr = window.location.search;
        var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
        var id = queryString ? queryString.get("id") : null;
        if (liquidContext.eventTypeLogicalName && id)
            urlToOpenActivityView = "/cat_activities?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=cat_dealercpi_activities_dealercpiid" + "&isAssociatedView=true";
        CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_Activity_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_Activity_VIEW_BTN_TITLE);
        CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_Activity_VIEW_BTN, urlToOpenActivityView);
    },
    /**
    * Function to show EmailMessages view 
    * @param {object} liquidContext
    */
    ShowEmailMessagesView: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.eventTypeLogicalName != "cat_dealercpi")
            return;
        var urlToOpenActivityView = null;
        var qstr = window.location.search;
        var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
        var id = queryString ? queryString.get("id") : null;
        if (liquidContext.eventTypeLogicalName && id)
            urlToOpenActivityView = "/cat_emailmessages?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=cat_dealercpi_email" + "&isAssociatedView=true";
        CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_EMAIL_MESSAGES_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_EMAIL_MESSAGES_VIEW_BTN_TITLE);
        CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_EMAIL_MESSAGES_VIEW_BTN, urlToOpenActivityView);
    },
    /**
     * Function to show Associated view of Subscription
     * @param {object} liquidContext
     */
    ShowSubscriptionAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.eventTypeLogicalName != "cat_dealercpi")
            return;
        var urlToOpenSubscriptionView = null;
        var qstr = window.location.search;
        var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
        var id = queryString ? queryString.get("id") : null;
        if (liquidContext.eventTypeLogicalName && id)
            urlToOpenSubscriptionView = "/cat_subscription?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=cat_dealercpi_subscription_dealercpiid" + "&isAssociatedView=true";
        CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_SUBSCRIPTION_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_SUBSCRIPTION_ASSOCIATED_VIEW_BTN_TITLE);
        CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_SUBSCRIPTION_ASSOCIATED_VIEW_BTN, urlToOpenSubscriptionView);
    },
    /**
     * Function to show Associated view of SR Note
     * @param {object} liquidContext
     */
    ShowSRNoteAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.SR_NOTE_CUSTOM_SUBGRID)) {
            var urlToOpenSRNoteView = null;
            var refrel = liquidContext.eventTypeLogicalName ? liquidContext.eventTypeLogicalName + "_servicerequestnote" : null;
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenSRNoteView = "/cat_servicerequestnote?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_SR_NOTE_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_SR_NOTE_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_SR_NOTE_ASSOCIATED_VIEW_BTN, urlToOpenSRNoteView);
        }
    },
    /**
     * Function to show Associated view of Dealer Note
     * @param {object} liquidContext
     */
    ShowDealerNoteAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.DEALER_NOTE_CUSTOM_SUBGRID) && $('[data-name="tab_dealernote"]').is(':visible')) {
            var urlToOpenDealerNoteView = null;
            var refrel = liquidContext.eventTypeLogicalName ? liquidContext.eventTypeLogicalName + "_dealernote" : null;
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenDealerNoteView = "/cat_dealernote?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_DEALER_NOTE_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_DEALER_NOTE_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_DEALER_NOTE_ASSOCIATED_VIEW_BTN, urlToOpenDealerNoteView);
        }
    },
    /**
     * Function to show Associated view of SR Attachment
     * @param {object} liquidContext
     */
    ShowSRAttachmentAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.SR_ATTACHMENT_SUBGRID)) {
            var urlToOpenSRAttachmentView = null;
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id)
                urlToOpenSRAttachmentView = "/cat_attachment?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_SR_ATTACHMENT_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_SR_ATTACHMENT_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_SR_ATTACHMENT_ASSOCIATED_VIEW_BTN, urlToOpenSRAttachmentView);
        }
    },
    /** Function to show Associated view of Audit Hisory
     * @param {object} liquidContext
     */
    ShowAuditHistoryAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.eventTypeLogicalName != "cat_dealercpi" && liquidContext.contactLogicalName != "contact")
            return;
        var urlToOpenAudithistoryAssociatedView = null;
        var qstr = window.location.search;
        var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
        var id = queryString ? queryString.get("id") : null;
        var contactId = null;
        var entityLogicalName = null;
        var dealership = null;
        if (liquidContext.dealerContact) {
            contactId = liquidContext.dealerContact;
            entityLogicalName = liquidContext.eventTypeLogicalName
            dealership = liquidContext.myDealership;
        }
        else if (liquidContext.contactId) {
            contactId = liquidContext.contactId;
            entityLogicalName = liquidContext.contactLogicalName;
            dealership = liquidContext.dealerCode;
        }
        var fetchContact = "contacts?$select=cat_mydealership,contactid&$filter=contactid eq " + contactId;
        ////success callback function of API call
        var successCallback = function (result, liquidContext) {
            if (result && result.length > 0 && liquidContext) {
                var recordDealership = result[0].cat_mydealership;
                if (entityLogicalName && id && recordDealership) {
                    if (entityLogicalName == CAT.DSRM.ServiceRequestCommon.EVENT_DEALERPPM.logicalName) {
                        urlToOpenAudithistoryAssociatedView = "/cat_audithistory?refentity=" + entityLogicalName + "&refid=" + id + "&srdealership=" + recordDealership + "&isAssociatedView=true";
                    } else {
                        urlToOpenAudithistoryAssociatedView = "/cat_audithistory?refentity=" + entityLogicalName + "&refid=" + id + "&contactdealership=" + recordDealership + "&isAssociatedView=true";
                    }
                }
                if (dealership === recordDealership) {
                    CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_AUDIT_HISTORY_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_AUDIT_HISTORY_ASSOCIATED_VIEW_BTN_TITLE);
                    CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_AUDIT_HISTORY_ASSOCIATED_VIEW_BTN, urlToOpenAudithistoryAssociatedView);
                }
            }
        };

        //error callback function of API call
        var errorCallback = function (e) {
            console.log("Error: " + e);
        };

        //retrieve contact
        CAT.DSRM.WebApi.RetrieveRecords(fetchContact, function (result) {
            successCallback(result, liquidContext);
        }, errorCallback, true);

    },
    /** Function to show Associated view of Serialized Component
    * @param {object} liquidContext
    */
    ShowSerializedComponentAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
        var isSrGloballyShared = CAT.DSRM.ServiceRequestCommon.IsSrGloballyShared(liquidContext);
        if (inDealership || isSrGloballyShared) {
            if (liquidContext.eventTypeLogicalName != "cat_goodwill" && liquidContext.eventTypeLogicalName != "cat_partstech" && liquidContext.eventTypeLogicalName != "cat_dsn" && liquidContext.eventTypeLogicalName != "cat_emp" && liquidContext.eventTypeLogicalName != "cat_globalwarranty" && liquidContext.eventTypeLogicalName != "cat_systemtech" && liquidContext.eventTypeLogicalName != "cat_piq" && liquidContext.eventTypeLogicalName != "cat_pic")
                return;
            var urlToOpenSerializedComponentAssociatedView = null;
            var qstr = window.location.search;
            var refrel = liquidContext.eventTypeLogicalName ? liquidContext.eventTypeLogicalName + "_serializedcomponent" : null;
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;

            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenSerializedComponentAssociatedView = "/cat_serializedcomponent?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            //Global sharing is yes or delaer is not equal to owner
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_SERIALIZED_COMPONENT_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_SERIALIZED_COMPONENT_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_SERIALIZED_COMPONENT_ASSOCIATED_VIEW_BTN, urlToOpenSerializedComponentAssociatedView);
        }
    },
    /**
     * Function to show Part Associated view of Part
     * @param {object} liquidContext
     */
    ShowPartAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.PART_CUSTOM_SUBGRID)) {
            var urlToOpenPartView = null;
            var refrel = null;
            if (liquidContext.eventTypeLogicalName && liquidContext.eventTypeLogicalName == "cat_dealercpi") {
                refrel = liquidContext.eventTypeLogicalName + "_cat_part_dealercpiid";
            }
            else {
                refrel = liquidContext.eventTypeLogicalName ? liquidContext.eventTypeLogicalName + "_part" : null;
            }
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenPartView = "/cat_part?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_PART_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_PART_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_PART_ASSOCIATED_VIEW_BTN, urlToOpenPartView);
        }
    },
    /**
     * Function to show Associated view of Action Item
     * @param {object} liquidContext
     */
    ShowActionItemAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.ACTION_ITEM_CUSTOM_SUBGRID)) {
            var urlToOpenActionItemView = null;
            var refrel = null;
            if (liquidContext.eventTypeLogicalName && liquidContext.eventTypeLogicalName == "cat_dealercpi") {
                refrel = liquidContext.eventTypeLogicalName + "_cat_actionitem_dealercpiid";
            }
            else {
                refrel = liquidContext.eventTypeLogicalName ? liquidContext.eventTypeLogicalName + "_cat_actionitem_pic" : null;
            }
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenActionItemView = "/cat_actionitem?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_ACTION_ITEM_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_ACTION_ITEM_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_ACTION_ITEM_ASSOCIATED_VIEW_BTN, urlToOpenActionItemView);
        }
    },
    /**
     * Function to show Associated view of Test Iron Validation
     * @param {object} liquidContext
     */
    ShowTestIronValidationAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.TEST_IRON_VALIDATION_CUSTOM_SUBGRID) && inDealership) {
            var urlToOpenTestIronValidationView = null;
            var refrel = liquidContext.eventTypeLogicalName + "_cat_testironvalidation_dealerppmid";
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenTestIronValidationView = "/cat_testironvalidation?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_TEST_IRON_VALIDATION_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_TEST_IRON_VALIDATION_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_TEST_IRON_VALIDATION_ASSOCIATED_VIEW_BTN, urlToOpenTestIronValidationView);
        }
    },
    /**
     * Function to show  Associated view of Affected Unit
     * @param {object} liquidContext
     */
    ShowAffectedUnitAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.AFFECTED_UNIT_CUSTOM_SUBGRID)) {
            var urlToOpenAffectedUnitView = null;
            var refrel = liquidContext.eventTypeLogicalName + "_cat_affectedunit_dealercpiid";
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenAffectedUnitView = "/cat_affectedunit?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_AFFECTED_UNIT_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_AFFECTED_UNIT_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_AFFECTED_UNIT_ASSOCIATED_VIEW_BTN, urlToOpenAffectedUnitView);
        }
    },
    /**
     * Function to show Associated SRs Associated view
     * @param {object} liquidContext
     */
    ShowAssociatedSRAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        var associatedSRButton = liquidContext.associatedSRButton;
        if ($(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).length > 0) {
            $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_ADD_EXISTING_BTN).ready(function () {
                $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_ADD_EXISTING_BTN).after(associatedSRButton);
                $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_ADD_EXISTING_BTN).hide();
            });
            var urlToOpenassociatedSrView = null;
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var refrel = liquidContext.eventTypeLogicalName + "_cat_associatedsrs_" + liquidContext.eventTypeLogicalName + "id";
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id && refrel)
                urlToOpenassociatedSrView = "/cat_associatedsrs?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
            //Associated SR's associated view
            $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_DOWNLOAD_BTN).ready(function () {
                $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_DOWNLOAD_BTN).replaceWith(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID_ASSOCIATED_VIEW);
                $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID_ASSOCIATED_VIEW_BTN).length > 0 && urlToOpenassociatedSrView ? $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID_ASSOCIATED_VIEW_BTN).click(function () { window.open(urlToOpenassociatedSrView, "_blank", "height=550,width=1100") }) : null;
            });
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_ASSOCIATED_SR_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_ASSOCIATED_SR_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_ASSOCIATED_SR_ASSOCIATED_VIEW_BTN, urlToOpenassociatedSrView);
        }
    },
    /**
     * Function to show Associated view of External Note
     * @param {object} liquidContext
     */
    ShowExternalNoteAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        var externalNote = liquidContext.externalNote;
        if ($(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).length > 0) {
            $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_CREATE_BTN).ready(function () {
                var urlToOpenExternalNote = $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_CREATE_BTN).length > 0 ? $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_CREATE_BTN)[0].href : null;
                if (urlToOpenExternalNote) {
                    var queryString = urlToOpenExternalNote.split("?");
                    CAT.DSRM.ServiceRequestCommon.EXTERNAL_NOTE_QUERY_STRING = queryString.length > 0 ? queryString[1] : null;
                }
                $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_CREATE_BTN).replaceWith(externalNote);
                $(CAT.DSRM.PortalConstants.ADD_EXTERNAL_NOTE_BTN).click(function () { window.open(urlToOpenExternalNote, "_blank", "height=550,width=1100") });
            });
            // Associated View Externl Note
            $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_DOWNLOAD_BTN).ready(function () {
                var urlToOpenexternalNoteView = null;
                if (CAT.DSRM.ServiceRequestCommon.EXTERNAL_NOTE_QUERY_STRING)
                    urlToOpenexternalNoteView = "/cat_externalnote?" + CAT.DSRM.ServiceRequestCommon.EXTERNAL_NOTE_QUERY_STRING + "&isAssociatedView=true";
                else {
                    var qstr = window.location.search;
                    var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
                    var id = queryString ? queryString.get("id") : null;
                    var refrel = liquidContext.eventTypeLogicalName + "_cat_externalnote";
                    if (liquidContext.eventTypeLogicalName && id)
                        urlToOpenexternalNoteView = "/cat_externalnote?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
                }
                $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_CUSTOM_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_DOWNLOAD_BTN).replaceWith(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_SUBGRID_ASSOCIATED_VIEW);
                $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_ASSOCIATED_VIEW_BTN).length > 0 && urlToOpenexternalNoteView ? $(CAT.DSRM.PortalConstants.EXTERNAL_NOTE_ASSOCIATED_VIEW_BTN).click(function () { window.open(urlToOpenexternalNoteView, "_blank", "height=550,width=1100") }) : null;
                if (liquidContext.eventTypeLogicalName && liquidContext.eventTypeLogicalName === "cat_dealercpi") {
                    CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_EXTERNAL_NOTE_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_EXTERNAL_NOTE_ASSOCIATED_VIEW_BTN_TITLE);
                    CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_EXTERNAL_NOTE_ASSOCIATED_VIEW_BTN, urlToOpenexternalNoteView);
                }
            });
        }
    },
    /**
     * Function to show Associated view of External Attachment
     * @param {object} liquidContext
     */
    ShowExternalAttachmentAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($.fn.DataTable.isDataTable(CAT.DSRM.PortalConstants.EXTERNAL_ATTACHMENT_SUBGRID)) {
            //Associated View External Attachment
            var urlToOpenExternalAttachmentView = null;
            var qstr = window.location.search;
            var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
            var id = queryString ? queryString.get("id") : null;
            if (liquidContext.eventTypeLogicalName && id)
                urlToOpenExternalAttachmentView = "/cat_externalattachment?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&isAssociatedView=true";
            CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_EXTERNAL_ATTACHMENT_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_EXTERNAL_ATTACHMENT_ASSOCIATED_VIEW_BTN_TITLE);
            CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_EXTERNAL_ATTACHMENT_ASSOCIATED_VIEW_BTN, urlToOpenExternalAttachmentView);
        }
    },
    /**
     * Function to show Associated view of Witness of incident 
     * @param {object} liquidContext
     */
    ShowWitnessOfIncidentAssociatedView: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.eventTypeLogicalName != "cat_dsn")
            return;
        var urlToOpenSRNoteView = null;
        var refrel = liquidContext.eventTypeLogicalName ? "cat_witnessoftheincident_dsn" : null;
        var qstr = window.location.search;
        var queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
        var id = queryString ? queryString.get("id") : null;
        if (liquidContext.eventTypeLogicalName && id && refrel)
            urlToOpenSRNoteView = "/cat_witnessoftheincident?refentity=" + liquidContext.eventTypeLogicalName + "&refid=" + id + "&refrel=" + refrel + "&isAssociatedView=true";
        CAT.DSRM.ServiceRequestCommon.AppendLinkButton(CAT.DSRM.PortalConstants.RIBBON_WITNESS_OF_THE_INCIDENT_ASSOCIATED_VIEW_BTN, CAT.DSRM.PortalConstants.RIBBON_WITNESS_OF_THE_INCIDENT_ASSOCIATED_VIEW_BTN_TITLE);
        CAT.DSRM.ServiceRequestCommon.AppendOnClickFunction(liquidContext, CAT.DSRM.PortalConstants.RIBBON_WITNESS_OF_THE_INCIDENT_ASSOCIATED_VIEW_BTN, urlToOpenSRNoteView);
    },
    /**
    * function to update Portal Current Login Field in database
    * @param {object} liquidContext
    * @param {boolean} isUpdateNull
    */
    PopulatePortalCurrentLogin: function (liquidContext, isUpdateNull) {
        var formType = liquidContext.formType;
        var eventType = liquidContext.eventTypeLogicalName;
        var selectEntityName = eventType + "s";
        if (eventType == "cat_dealercpi" && formType == CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            var recordData = {};
            if (liquidContext.loggedinContactId != null && liquidContext.loggedinContactId != "") {
                if (!isUpdateNull) {
                    recordData["cat_portalcurrentlogin@odata.bind"] = "/contacts(" + liquidContext.loggedinContactId.replace(/[{}]/g, "") + ")";
                }
                else {
                    recordData["cat_portalcurrentlogin@odata.bind"] = null;
                }
            }
            var successCallback = function () {
                console.log("Record update Successfully");
                $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find("button[data-dismiss='modal']").attr("disabled", false);
                $(CAT.DSRM.PortalConstants.ASSOCIATED_SR_SUBGRID).find(CAT.DSRM.PortalConstants.ACTION_SUBGRID_ADD_EXISTING_BTN).click();
            };
            //error callback function of API call
            var errorCallback = function (e) {
                console.log("Record update Error: " + e);
            };
            CAT.DSRM.WebApi.UpdateRecord(selectEntityName, liquidContext.eventTypeRecordId, recordData, successCallback, errorCallback, false, null);
        }
    },
    /**
     * function to attach system link button the click function
     * @param {any} buttonId
     */
    AppendOnClickFunction: function (liquidContext, button, url) {
        if (!liquidContext || !button || !url)
            return;
        let buttonId = button.startsWith("#") ? button : "#" + button;
        if ($(buttonId).length > 0) {
            $(buttonId).unbind();
            $(buttonId).click(function () {
                window.open(url, "_blank", "height=550,width=1100");
            });
        }
    },
    /**
     * function to append to link button to sytem link dropdown button
     * @param {any} buttonId
     * @param {any} buttonLabel
     * @param {any} buttonTitle
     */
    AppendLinkButton: function (buttonId, buttonTitle) {
        if (buttonId, buttonTitle) {
            var buttonTag = "<li><a id='" + buttonId + "'role='menuitem' class='dropdown-item system-links' title='" + buttonTitle + "'><span class='margin-right-5 bi bi-list-ul'></span><span class='margin-left-5'>" + buttonTitle + "</span></a></li>";
            var dropDown = $(CAT.DSRM.PortalConstants.ASSOCIATED_VIEW_BTN).find(CAT.DSRM.PortalConstants.ACTION_DROPDOWN_MENUE);
            if (buttonTitle === CAT.DSRM.PortalConstants.RIBBON_AUDIT_HISTORY_ASSOCIATED_VIEW_BTN_TITLE && dropDown.find(" li:eq(1)").length > 0) {
                dropDown.find(" li:eq(1)")?.before(buttonTag);
            } else {
                dropDown.append(buttonTag);
            }
        }
    },
    /**
     * Hide Priority field for Submitted status on Dealer short form 
     * @param {object} liquidContext
     */
    PriorityHideForUnsubmitted: function (liquidContext) {
        if (!liquidContext)
            return;
        var statusValue = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : 0;
        if (parseInt(statusValue) === CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value) {
            $("#cat_prioritycode").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetVisible("cat_prioritycode", false) : null;
        }
        else {
            $("#cat_prioritycode").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetVisible("cat_prioritycode", true) : null;
        }
    },
    /**
     * Function to Validate Dealer CC Email Address
     * @param {object} liquidContext
     */
    CheckIncorrectDelimeterDealerCC: function (liquidContext) {
        var notValid = CAT.DSRM.ServiceRequestCommon.CheckIncorrectDelimeterEmail("cat_dealercarboncopyemail");
        var dealerCCFormatValidatorName = "FormatValidatorcat_dealercarboncopyemail";
        if (!notValid) {
            var multiErrorMessage = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_multiple_email_validation_error_message");
            var message = "Dealer CC: " + multiErrorMessage;
            CAT.DSRM.ServiceRequestCommon.SetNotification("cat_dealercarboncopyemail", multiErrorMessage);
            CAT.DSRM.ServiceRequestCommon.PushValidator(dealerCCFormatValidatorName, "cat_dealercarboncopyemail", message, CAT.DSRM.ServiceRequestCommon.CheckIncorrectDelimeterEmail);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.ClearNotification("cat_dealercarboncopyemail");
            CAT.DSRM.ServiceRequestCommon.PullValidator(dealerCCFormatValidatorName);
        }
    },
    /**
     * Function to Validate Preferred Dealer Address
     * @param {object} liquidContext
     */
    CheckIncorrectDelimeterPreferredDealer: function (liquidContext) {
        var notValid = CAT.DSRM.ServiceRequestCommon.CheckIncorrectDelimeterEmail("cat_preferredemailaddress");
        var preferredEmailFormatValidatorName = "FormatValidatorcat_preferredemailaddress";
        if (!notValid) {
            var singleErrorMessage = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_single_email_validation_error_message");
            var message = "Preferred Email Address: " + singleErrorMessage;
            CAT.DSRM.ServiceRequestCommon.SetNotification("cat_preferredemailaddress", singleErrorMessage);
            CAT.DSRM.ServiceRequestCommon.PushValidator(preferredEmailFormatValidatorName, "cat_preferredemailaddress", message, CAT.DSRM.ServiceRequestCommon.CheckIncorrectDelimeterEmail);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.ClearNotification("cat_preferredemailaddress");
            CAT.DSRM.ServiceRequestCommon.PullValidator(preferredEmailFormatValidatorName);
        }
    },
    /**
     * Function to Validate Email Addresses on Save event.
     * @param {string} attributeName
     */
    CheckIncorrectDelimeterEmail: function (attributeName) {
        if (!attributeName || typeof attributeName != "string")
            return;

        var attributeSelector = attributeName.startsWith('#') ? attributeName : "#" + attributeName;
        if ($(attributeSelector).length < 1)
            return true;

        attributeName = $(attributeSelector).attr("id");
        var isValid = true;
        var pattern = /^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i;
        var emailid = $(attributeSelector).length > 0 ? $(attributeSelector).val() : null;
        var emailIds = emailid ? emailid.replace(/,/g, ';') : null;
        CAT.DSRM.ServiceRequestCommon.SetValue(attributeSelector, emailIds);
        if (emailIds && (attributeName === "cat_dealercarboncopyemail" || attributeName === "cat_techrepcarboncopyemail" || attributeName === "cat_externaldealercc" || attributeName === "cat_requiredattendees")) {
            var emailId = emailIds.split(";");
            for (var i = 0; i < emailId.length; i++) {
                var email = emailId[i];
                email = email.replace(/[\s+;]/g, '');
                if (pattern && email && !pattern.test(email)) {
                    isValid = false;
                    break;
                }
            }
        }
        if (emailIds && (attributeName === "cat_preferredtechemailaddress" || attributeName === "cat_preferredemailaddress")) {
            var emailId = emailIds;
            email = emailId.replace(/\s+/g, '');
            if (pattern && email && !pattern.test(email)) {
                isValid = false;
            }
        }
        else if (emailIds && /^[\s;]+$/.test(emailIds)) {
            isValid = false;
        }
        return isValid;
    },
    /**
     * 'Close' and 'Save & Close' button function for SR forms
     * Trigger Point : Form on load
     * @param {object} liquidContext
     */
    CloseButtonOnCLick: function (liquidContext) {
        if (!liquidContext)
            return;
        var is_True = "1";
        var is_False = "0";
        var formType = liquidContext.formType;
        var eventTypeRecordPermissions_Can_Write = liquidContext.eventTypeRecordPermissions.can_Write;
        if ($("#page_close_button").length > 0) {
            $("#page_close_button").prop('disabled', false);
            $("#page_close_button").click(function () {
                window.close();
            });
        }
        if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_save_and_close_button"), false);
        }
        if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_close_button"), false);
        }
        if ($("#page_save_and_close_button").length > 0 && eventTypeRecordPermissions_Can_Write == is_True) {
            $("#page_save_and_close_button").prop('disabled', false);
            if (window.location && (window.location.href.contains("&isSaveAndCloseClicked=true"))) {
                window.close();
            }
        }
    },
    /**
     * Function to enable Event Type Change button for Dealer
     * @param {object} liquidContext           
     */
    EnableEventTypeChange: function (liquidContext, formName) {
        if (!liquidContext) {
            return false;
        }
        if (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL) {
            var status = $("#cat_status").length > 0 ? parseInt($("#cat_status").val()) : null;
            var eventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : null;
            var entityName = liquidContext.eventTypeLogicalName ? liquidContext.eventTypeLogicalName : null;
            var dealerContactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
            if (dealerContactId && liquidContext.loggedinContactId && liquidContext.loggedinContactId.toUpperCase() === dealerContactId.toUpperCase() && status === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) {
                if (eventType && eventType == CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value || CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value || CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
                    var dealerEditAccess = CAT.DSRM.ServiceRequestCommon.EventTypeEditAccessCheck(entityName, liquidContext);
                    if (dealerEditAccess) {
                        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_change_event_type"), true);
                        $("#page_ribbon_change_event_type").prop('disabled', false);
                    }
                }
                $("#page_ribbon_change_event_type").length > 0 ? $("#page_ribbon_change_event_type").click(function () {
                    CAT.DSRM.ServiceRequestCommon.EventTypeChangeClick(liquidContext);
                }) : null;
            }
        }
    },
    /**
     * // Event Type Change functionality
     * @param {Object} liquidContext
     */
    EventTypeChangeClick: function (liquidContext) {
        if (!liquidContext) {
            return;
        }
        var statusIsDirty = $("#cat_status_header").length > 0 ? CAT.DSRM.ServiceRequestCommon.FieldIsDirty(liquidContext, "cat_status_header") : null;
        if (statusIsDirty) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_save_sr_before_change_event_type"));
        }
        else {
            if (CAT.DSRM.ServiceRequestCommon.NOTE_PROMPT_ACTIONS.length > 0) {
                CAT.DSRM.ServiceRequestCommon.ShowNoteAlertMessage(liquidContext, CAT.DSRM.ServiceRequestCommon.NOTE_PROMPT_ACTIONS[0].Message);
                return;
            }
            var eventTypePickList = $("#cat_eventtype").length > 0;
            if (eventTypePickList) {
                $("#cat_eventtype").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_eventtype"), false) : null;
            }
            var inquiryTypePicklist = $("#cat_inquirytypeid").length > 0;
            if (inquiryTypePicklist) {
                $("#cat_inquirytypeid").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_inquirytypeid"), false) : null;
            }
            CAT.DSRM.ServiceRequestCommon.ORGINAL_EVENTTYPE_VALUE = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : 0;
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_change_event_type"));
            CAT.DSRM.ServiceRequestCommon.ScrollAndFocusTab(CAT.DSRM.PortalConstants.OVERVIEW_TAB);
            $("#cat_eventtype").length > 0 ? $("#cat_eventtype").focus() : null;
        }
    },
    /**
     * Show alert message for multiple actions for note prompt
     * @param {object} liquidContext
     * @param {string} actionMessage
     */
    ShowNoteAlertMessage: function (liquidContext, actionMessage) {
        if (!liquidContext)
            return;
        var alertMessage = "Please put note for an already performed action first.";
        alertMessage = alertMessage.replace("0", actionMessage);
        if (confirm(alertMessage)) {
            $("#cat_note").length > 0 ? $("#cat_note").focus() : null;
        }
    },
    /**
     * Function to demand SR Note on change of Dealer Contact 
     * @param {object} liquidContext
     */
    ContactChangeReason: function (liquidContext) {
        if (!liquidContext)
            return;

        var formType = liquidContext.formType;
        var dealerAccess = liquidContext.dealerAccess;
        var dealerContact = liquidContext.dealerContact;
        if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && (dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN))
            return;

        if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && $("#cat_customerid").length > 0 && $("#cat_customerid").val() && $("#cat_customerid").val() !== dealerContact) {
            var statusVal = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : 0;
            var status = parseInt(statusVal);
            if (status !== CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value && status !== CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value && status !== CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value) {
                if (liquidContext.userId && $("#ownerid").length > 0) {
                    let contactUserId = "{" + liquidContext.userId.toUpperCase() + "}";
                    let ownerIdLookupValue = { guid: contactUserId, name: liquidContext.userName, entityName: "systemuser" };
                    CAT.DSRM.ServiceRequestCommon.SetValue("ownerid", ownerIdLookupValue);
                }
            }
            CAT.DSRM.ServiceRequestCommon.NotePrompt(liquidContext, CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_label_change_contact"), false, "cat_issrnoteselected", true, null);
        }
    },
    /**
     * Function to demand SR Note on change of Technician 
     * @param {object} liquidContext
     */
    TechnicianChangeReason: function (liquidContext) {
        if (!liquidContext)
            return;

        var formType = liquidContext.formType;
        var technicianId = liquidContext.techContact;
        if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && CAT.DSRM.ServiceRequestCommon.OLDTECHNICIAN !== null && CAT.DSRM.ServiceRequestCommon.OLDTECHNICIAN !== "" && $("#cat_technicianid").length > 0 && $("#cat_technicianid").val() && ($("#cat_technicianid").val() != technicianId)) {
            var statusVal = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : 0;
            var status = parseInt(statusVal);
            var entityName = liquidContext.evenTypeDisplay;
            if ((status === CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGTECHRESPONSE.value
                || status === CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) && (entityName === "DSN" || entityName === "System Tech" || entityName === "Parts Tech")) {
                CAT.DSRM.ServiceRequestCommon.NotePrompt(liquidContext, CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_label_change_technician"), false, "cat_issrnoteselected", true, null);
            }
        }
    },
    /**
     * Enable/disable rule for change contact button
     * @param {object} liquidContext
     */
    EnableContactChange: function (liquidContext) {
        if (!liquidContext)
            return;
        var dealerContactOnSR = liquidContext.dealerContact;
        var loggedInContact = liquidContext.loggedinContactId;
        var dealerAccess = liquidContext.dealerAccess;
        var formType = liquidContext.formType;
        var dealerAdmin = liquidContext.dealerAdmin;
        var statusVal = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : 0;
        var status = parseInt(statusVal);
        if (formType != CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && dealerContactOnSR !== loggedInContact
            && status !== CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value && status !== CAT.DSRM.ServiceRequestCommon.STATUS_DEALERCLOSED.value && status !== CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value
            && (dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_CREATE_EDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_LIMITED_EDIT)) {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_change_contact_button"), true);
            $("#page_ribbon_change_contact_button").prop('disabled', false);
            if (dealerAdmin === "true" && (status === CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value)) {
                CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_change_contact_button"), false);
                $("#page_ribbon_change_contact_button").prop('disabled', true);
            }
        }
        else {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_change_contact_button"), false);
        }
        //Click Change Contact button
        $("#page_ribbon_change_contact_button").click(function () {
            CAT.DSRM.ServiceRequestCommon.RibbonNotePrompt(liquidContext, CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_label_change_contact"), "cat_issrnoteselected", true);
        });

    },
    /**
     * Function for making Note Prompt Visible for Ribbon Buttons
     * @param {object} liquidContext
     * @param {string} sectionLabel
     * @param {string} noteSelectionDefaultFieldSchemaName
     * @param {boolean} noteFocusSet
     */
    RibbonNotePrompt: function (liquidContext, sectionLabel, noteSelectionDefaultFieldSchemaName, noteFocusSet) {
        if (!liquidContext)
            return;
        var actionName = null;
        var loggedInContactId = liquidContext.loggedinContactId;
        var formType = liquidContext.formType;
        var noteSelected = noteSelectionDefaultFieldSchemaName || "cat_issrnoteselected";
        $("#note_prompt").length > 0 ? $("#note_prompt").show() : null;
        noteFocusSet && $("#enter_note").length > 0 ? $("#enter_note").focus() : null;
        $("#note_title").length > 0 ? $("#note_title").text(sectionLabel) : null;
        //Click Add Note Button
        $("#add_note_button").click(function () {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
            var note = $("#enter_note").length > 0 ? $("#enter_note").val() : null;
            if (note != null && note != "") {
                //Contact Change
                if (!actionName && formType != CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && $("#cat_customerid").val() && ($("#cat_customerid").val() !== loggedInContactId)) {
                    actionName = CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_RIBBON;
                    CAT.DSRM.ServiceRequestCommon.UpdateDealerContact(liquidContext, actionName, note, null);
                }
            } else {
                alert("Please enter Note");
            }
        });
    },
    /**
     * Function to demand Note in various business scenarios
     * @param {object} liquidContext
     * @param {string} sectionLabel
     * @param {boolean} noteSelectionVisibile
     * @param {string} noteSelectionDefaultFieldSchemaName
     * @param {boolean} noteFocusSet
     * @param {string} notePrefaceText
     */
    NotePrompt: function (liquidContext, sectionLabel, noteSelectionVisibile, noteSelectionDefaultFieldSchemaName, noteFocusSet, notePrefaceText) {
        if (!liquidContext)
            return;
        var noteSelected = noteSelectionDefaultFieldSchemaName || "cat_issrnoteselected";
        var isNoteFocusSet = noteFocusSet;
        if (noteSelected === "cat_issrnoteselected") {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_issrnoteselected", true);
        }
        $("#cat_issrnoteselected").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_issrnoteselected", true) : null;
        if ($("div[data-name='tab_noteprompt']").length > 0) {
            $("div[data-name='tab_noteprompt']").show();
            $(".section[data-name='tab_noteprompt_section_note']").closest("fieldset").show();
            $(".section[data-name='tab_noteprompt_section_noteselection']").closest("fieldset").hide();
            noteSelectionVisibile && $(".section[data-name='tab_noteprompt_section_noteselection']").length > 0 ? $(".section[data-name='tab_noteprompt_section_noteselection']").closest("fieldset").show() : null;
        }
        $("#cat_note") ? CAT.DSRM.ServiceRequestCommon.SetDisabled("#cat_note", false) : null;
        isNoteFocusSet ? $("#cat_note").focus() : null;
        $("#cat_note").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_note", "") : null;
        CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_note", true);
        if (notePrefaceText) {
            $("#cat_note").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_note", notePrefaceText) : null;
        }
        $("#cat_note").length > 0 ? $("#cat_note_label").text(sectionLabel) : null;
    },
    /**
     * Function to Create Note in case it is required in any case on save of forms.
     * @param {object} liquidContext
     */
    NoteRequired: function (liquidContext) {
        if (!liquidContext)
            return;
        var actionName = null;
        var noteRequiredLevel = false;
        var customerId = liquidContext.dealerContact;
        var formType = liquidContext.formType;
        noteRequiredLevel = $("#cat_note").length > 0 ? $("#cat_note").prop('required') : null;

        if (noteRequiredLevel) {
            if (!CAT.DSRM.ServiceRequestCommon.RestrictSaveOnNote() || CAT.DSRM.ServiceRequestCommon.CheckIsFormRequired(liquidContext)) {
                return false;
            }
            var note = $("#cat_note").length > 0 ? $("#cat_note").val() : null;
            var isSrNoteSelected = $("#cat_issrnoteselected").length > 0 ? $("#cat_issrnoteselected").val() : null;
            var isInternalNoteSelected = $("#cat_isinternalnoteselected").length > 0 ? $("#cat_isinternalnoteselected").val() : null;
            //ReasonDenyResolution
            if ($("#cat_didtheresolutionresolvetherequest").length > 0) {
                var requestResolved = $("#cat_didtheresolutionresolvetherequest").length > 0 && $("#cat_didtheresolutionresolvetherequest").val() ? parseInt($("#cat_didtheresolutionresolvetherequest").val()) : null;
                //var isRequestResolvedDirty = formContext.getAttribute("cat_didtheresolutionresolvetherequest") ? formContext.getAttribute("cat_didtheresolutionresolvetherequest").getIsDirty() : false;
                if ((requestResolved === 0 || requestResolved === 2)) {
                    actionName = CAT.DSRM.ServiceRequestCommon.ACTION_REASONDENYRESOLUTION;
                }
            }
            //Contact Change
            if (!actionName && formType != CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && $("#cat_customerid").val() && ($("#cat_customerid").val() !== customerId)) {
                actionName = CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_FORM;
            }
            //Event type Change
            //if (!actionName && formContext.ui.getFormType() !== 1 && formContext.getAttribute("cat_eventtype").getValue() && formContext.getAttribute("cat_eventtype").getIsDirty()) {
            //    actionName = CAT.DSRM.ServiceRequestCommon.ACTION_CHANGE_EVENT_TYPE;
            //}
            //SIS Feedback
            //if (!actionName && formContext.getAttribute("cat_siscorrectionrequired") && (formContext.getAttribute("cat_siscorrectionrequired").getIsDirty() || formContext.getAttribute("cat_status").getIsDirty()) && (formContext.getAttribute("cat_siscorrectionrequired").getValue() === CAT.DSRM.ServiceRequestCommon.SIS_FEEDBACK.value || formContext.getAttribute("cat_siscorrectionrequired").getValue() === CAT.DSRM.ServiceRequestCommon.REVISION.value) && ((formName === CAT.DSRM.ServiceRequestCommon.FORM_INTERNAL && formContext.getAttribute("cat_status").getValue() === CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value) /*|| (formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL && formContext.getAttribute("cat_status").getValue() === CAT.DSRM.ServiceRequestCommon.STATUS_DEALERCLOSED.value)*/)) {
            //    if (formContext.getAttribute("cat_siscorrectionrequired").getValue() === CAT.DSRM.ServiceRequestCommon.SIS_FEEDBACK.value)
            //        actionName = CAT.DSRM.ServiceRequestCommon.ACTION_SIS_FEEDBACK;
            //    if (formContext.getAttribute("cat_siscorrectionrequired").getValue() === CAT.DSRM.ServiceRequestCommon.REVISION.value)
            //        actionName = CAT.DSRM.ServiceRequestCommon.ACTION_REVISION;
            //}
            //Status Change to PDA
            //if (!actionName && formName === CAT.DSRM.ServiceRequestCommon.FORM_INTERNAL && formContext.ui.getFormType() !== 1 && !formContext.getAttribute("cat_isstatuschangedfromsrnote").getValue() && formContext.getAttribute("cat_eventtype").getValue() && formContext.getAttribute("cat_eventtype").getValue() !== CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value && formContext.getAttribute("cat_eventtype").getValue() !== CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value && formContext.getAttribute("cat_eventtype").getValue() !== CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value && formContext.getAttribute("cat_eventtype").getValue() !== CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value && formContext.getAttribute("cat_status").getIsDirty() && formContext.getAttribute("cat_status").getValue() && formContext.getAttribute("cat_status").getValue() === CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value) {
            //    actionName = CAT.DSRM.ServiceRequestCommon.ACTION_STATUS_CHANGE_PDA;
            //}
            //if (isInternalNoteSelected)
            //    CAT.DSRM.ServiceRequestCommon.CreateSRNote(executionContext, note, "cat_caterpillarnoteid", actionName);
            //else
            CAT.DSRM.ServiceRequestCommon.CreateSRNote(liquidContext, note, "cat_servicerequestnote", actionName);
            CAT.DSRM.ServiceRequestCommon.ResetNotePrompt(liquidContext);
        }
    },
    /**
    * Function to show message if note not provided
    */
    RestrictSaveOnNote: function () {
        var srNote = $("#cat_note").length > 0 && $("#cat_note").val() ? $("#cat_note").val() : null;
        var srNoteLabel = $("#cat_note").length > 0 && $("#cat_note_label").length > 0 && $("#cat_note_label").text() ? $("#cat_note_label").text() : null;
        var noteFormatValidatorName = "FormatValidatorcat_note";
        if ((srNote === "" || srNote === null)) {
            CAT.DSRM.ServiceRequestCommon.SetNotification("#cat_note", srNoteLabel);
            //CAT.DSRM.ServiceRequestCommon.PushValidator(noteFormatValidatorName, "cat_note", CAT.DSRM.ServiceRequestCommon.NOTE_REQUIRED_ALERRT, CAT.DSRM.ServiceRequestCommon.RestrictSaveOnNote);
            return false;
        }
        else {
            CAT.DSRM.ServiceRequestCommon.ClearNotification("#cat_note");
            //CAT.DSRM.ServiceRequestCommon.PullValidator(noteFormatValidatorName);
        }
        return true;
    },
    /**
     * Function to Reset capture Notes section on SR forms.
     * @param {object} liquidContext
     */
    ResetNotePrompt: function (liquidContext) {
        if (!liquidContext)
            return;
        $("#cat_note").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_note", false) : null;
        $("#cat_note").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_note", "") : null;
        $("#cat_issrnoteselected").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_issrnoteselected", false) : null;
        if ($("div[data-name='tab_noteprompt']").length > 0) {
            $("div[data-name='tab_noteprompt']").length > 0 ? $("div[data-name='tab_noteprompt']").hide() : null;
            $(".section[data-name='tab_noteprompt_section_noteselection']").length > 0 ? $(".section[data-name='tab_noteprompt_section_noteselection']").closest("fieldset").hide() : null;
        }
    },
    /**
     * Function to Create SR/Internal notes
     * @param {object} liquidContext
     * @param {string} reason
     * @param {string} noteEntityName
     * @param {string} actionName
     */
    CreateSRNote: function (liquidContext, reason, noteEntityName, actionName) {
        if (!liquidContext || !reason)
            return;

        var entityName = liquidContext.evenTypeDisplay;
        var recordId = liquidContext.eventTypeRecordId;
        var srNumber = $("#cat_ticketnumber").length > 0 ? $("#cat_ticketnumber").val() : null;
        var assigneeId = $("#cat_assigneeid").length > 0 ? $("#cat_assigneeid").val() : null;
        var contactId = liquidContext.loggedinContactId;
        var reassignmentCreated = false;
        var MSCRMCallerID = null;
        var isAsync = true;
        var srnote = {
        };
        if (srNumber !== null) {
            srnote.cat_srnumber = srNumber;
        }
        switch (actionName) {
            case CAT.DSRM.ServiceRequestCommon.ACTION_REASONDENYRESOLUTION: {
                if (noteEntityName === "cat_servicerequestnote") {
                    var requestResolved = $("#cat_didtheresolutionresolvetherequest").length > 0 && $("#cat_didtheresolutionresolvetherequest").val() ? parseInt($("#cat_didtheresolutionresolvetherequest").val()) : null;
                    if (requestResolved === 0) {
                        srnote.cat_isresponsetoresolveresolution = 1;
                    }
                }
                reassignmentCreated = false;
                break;
            }
            case CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_FORM: {
                if (noteEntityName === "cat_servicerequestnote") {
                    srnote.cat_noteintendedto = 100000001;
                }
                reassignmentCreated = false;
                break;
            }
            case CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_RIBBON: {
                if (noteEntityName === "cat_servicerequestnote") {
                    srnote.cat_noteintendedto = 100000001;
                }
                reassignmentCreated = false;
                break;
            }
            case CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_LIST_RIBBON: {
                if (noteEntityName === "cat_servicerequestnote") {
                    srnote.cat_noteintendedto = 100000001;
                }
                reassignmentCreated = false;
                break;
            }
            //if event type change is triggered
            //create note synchronously
            //case CAT.DSRM.ServiceRequestCommon.ACTION_CHANGE_EVENT_TYPE: {
            //    isAsync = false;
            //    break;
            //}
            //case CAT.DSRM.ServiceRequestCommon.ACTION_SIS_FEEDBACK: {
            //    reason = CAT.DSRM.ServiceRequestCommon.PREFACE_SISFEEDBACK + srNumber + ". " + reason;
            //    break;
            //}
            //case CAT.DSRM.ServiceRequestCommon.ACTION_REVISION: {
            //    reason = CAT.DSRM.ServiceRequestCommon.PREFACE_REVISION + srNumber + ". " + reason;
            //    break;
            //}
            //case CAT.DSRM.ServiceRequestCommon.ACTION_STATUS_CHANGE_PDA: {
            //    if (noteEntityName === "cat_servicerequestnote") {
            //        srnote.cat_isstatuschangetopda = true;
            //    }
            //    break;
            //}
            default:
                break;
        }

        switch (entityName) {
            case "DSN":
                srnote["cat_dsnid@odata.bind"] = "/cat_dsns(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "EMP":
                srnote["cat_empid@odata.bind"] = "/cat_emps(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "Global Warranty":
                srnote["cat_globalwarrantyid@odata.bind"] = "/cat_globalwarranties(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "System Tech":
                srnote["cat_systemtechid@odata.bind"] = "/cat_systemtechs(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "Parts Tech":
                srnote["cat_partsid@odata.bind"] = "/cat_partstechs(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "Common PSCRM":
                srnote["cat_picid@odata.bind"] = "/cat_pics(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "Pricing":
                srnote["cat_pricingid@odata.bind"] = "/cat_pricings(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "PIQ":
                srnote["cat_piqid@odata.bind"] = "/cat_piqs(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            case "Goodwill":
                srnote["cat_goodwillid@odata.bind"] = "/cat_goodwills(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            //case "CAT_PDC":
            //    srnote["cat_pdcid@odata.bind"] = "/cat_pdcs(" + recordId.replace(/[{}]/g, "") + ")";
            //    break;
            case "Dealer PPM":
                srnote["cat_dealercpiid@odata.bind"] = "/cat_dealercpis(" + recordId.replace(/[{}]/g, "") + ")";
                break;
            default:
                break;
        }
        if (noteEntityName === "cat_caterpillarnoteid") {
            srnote.cat_isreassignmentcreateddoc = reassignmentCreated;
        }
        else {
            srnote.cat_isreassignmentcreated = reassignmentCreated;
            if (liquidContext.jobTitle != null && liquidContext.jobTitle != "") {
                srnote.cat_contactjobtitle = liquidContext.jobTitle;
            }
            var srStatus = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : null;
            var srSubStatus = $("#cat_substatus_header").length > 0 ? $("#cat_substatus").val() : null;
            if (srStatus) {
                srnote.cat_srstatus = srStatus;
            }
            if (srSubStatus) {
                srnote.cat_srsubstatus = srSubStatus;
            }
            if (assigneeId)
                srnote["cat_srassigneeid@odata.bind"] = "/systemusers(" + assigneeId.replace(/[{}]/g, "") + ")";
            if (contactId)
                srnote["cat_contactid@odata.bind"] = "/contacts(" + contactId.replace(/[{}]/g, "") + ")";
            var ownerId = $("#ownerid").length > 0 ? $("#ownerid").val() : null;
            if (ownerId) {
                srnote["cat_srownerid@odata.bind"] = "/systemusers(" + ownerId.replace(/[{}]/g, "") + ")";
            }
            var createdByRoleValue = CAT.DSRM.ServiceRequestCommon.CheckCreatedByrole(liquidContext);
            srnote.cat_createdbyrole = createdByRoleValue;
            //CAT.DSRM.ServiceRequestCommon.SetValue("cat_createdbyrole", createdByRole) = createdByRoleValue;
        }
        srnote.cat_note = reason;

        //webapi.safeAjax({
        //    type: "POST",
        //    url: "/_api/" + noteEntityName + "s",
        //    contentType: "application/json",
        //    data: JSON.stringify(srnote),
        //    async: true,
        //    success: function (res) {
        //        console.log("Note creation Success");
        //        $("#note_prompt").length > 0 ? $("#note_prompt").hide() : null;
        //        alert("Note Created Successfully.");
        //        if (actionName === CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_RIBBON) {
        //            $("#page_close_button").trigger("click");
        //        }
        //    },
        //    error: function (xhr, status, error) {
        //        console.log("Note create Error: " + error);
        //    }
        //});

        //success callback function of API call
        var successCallback = function (d) {
            console.log("Note creation Success");
            $("#note_prompt").length > 0 ? $("#note_prompt").hide() : null;
            if (actionName === CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_LIST_RIBBON) {
                CAT.DSRM.ServiceRequestCommon.CompletedChangeContactRecords += 1;
                if ((CAT.DSRM.ServiceRequestCommon.CompletedChangeContactRecords + CAT.DSRM.ServiceRequestCommon.ERROR_CHANGECONTACT.length) === CAT.DSRM.ServiceRequestCommon.TotalChangeContactRecords) {
                    CAT.DSRM.ServiceRequestCommon.ChnageContactFinalAlert(liquidContext);
                    window.location.reload();
                }
            } else {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_note_created"));
            }
            if (actionName === CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_RIBBON) {
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                $("#page_close_button").trigger("click");
            }
        };

        //error callback function of API call
        var errorCallback = function (e) {
            console.log("Note create Error: " + e);
        };
        CAT.DSRM.WebApi.CreateRecord(noteEntityName + "s", srnote, successCallback, errorCallback, isAsync, null);
    },
    /**
     * Attach Event Handler to Export to Excel Button.
     * @param {object} liquidContext
     */
    RibbonExportToExcelEventHandler: function (liquidContext) {
        if ($("#list_ribbon_export_to_excel_button").length > 0) {
            $("#list_ribbon_export_to_excel_button").click({ liquidContext: liquidContext }, function () {
                var table = liquidContext && liquidContext.entityListId && $('#' + liquidContext.entityListId) && $('#' + liquidContext.entityListId).length > 0 ? $('#' + liquidContext.entityListId).DataTable() : null;
                if (table && table.button('excel:name') && table.button('excel:name').length > 0) {
                    table.button('excel:name').trigger();
                }
                else if ($(CAT.DSRM.PortalConstants.ACTION_ENTITYLIST_EXPORTTOEXCEL) && $(CAT.DSRM.PortalConstants.ACTION_ENTITYLIST_EXPORTTOEXCEL).length > 0) {
                    $(CAT.DSRM.PortalConstants.ACTION_ENTITYLIST_EXPORTTOEXCEL).trigger("click");
                }
            });
        }
    },
    /**
    * Attach Event Handler to Refresh All Button.
    * @param {object} liquidContext
    */
    RibbonRefreshAllEventHandler: function (liquidContext) {
        if ($("#page_ribbon_refresh_all_button").length > 0) {
            $("#page_ribbon_refresh_all_button").click({ liquidContext: liquidContext }, function () {
                var table = liquidContext && liquidContext.entityListId && $('#' + liquidContext.entityListId) && $('#' + liquidContext.entityListId).length > 0 ? $('#' + liquidContext.entityListId).DataTable() : null;
                if (table && table.button('refresh:name') && table.button('refresh:name').length > 0) {
                    table.button('refresh:name').trigger();
                }
            });
        }
    },
    /**
     * Attach Event Handler on load of entity list.
     * @param {object} liquidContext
     */
    EntityListOnLoadEventHandler: function (liquidContext) {
        if ($(CAT.DSRM.PortalConstants.EVENTTYPE_ENTITYLIST_PRIMARY).length != 0) {
            $(CAT.DSRM.PortalConstants.EVENTTYPE_ENTITYLIST_PRIMARY).on("loaded", function () {
                if ($("#list_view_header_text").length == 0) {
                    $(CAT.DSRM.PortalConstants.ENTITYLIST_VIEW_DROPDOWN).append(CAT.DSRM.PortalConstants.ENTITYLIST_HEADER_TITLE);
                }
            })
        }
        else if ($("#list_view_header_text").length == 0 && $(CAT.DSRM.PortalConstants.SUMMARY_ENTITYLIST).length != 0) {
            $(CAT.DSRM.PortalConstants.SUMMARY_ENTITYLIST).append(CAT.DSRM.PortalConstants.ENTITYLIST_HEADER_TITLE_SUMMARY);
        }
    },

    /**
     * On click of "Download Report" dropdown options
     * @param {object} e
     */
    OnClickOfDownloadReport: function (e) {
        if (e && e.target) {
            var rptId = $(e.target).attr("data-reportId");
            var rptName = $(e.target).attr("data-reportName");
            var rptRdlName = $(e.target).attr("data-rdlName");
            var liquidContextObjJSON = $(e.target).attr("data-liquidContext");
            var liquidContextObj = JSON.parse(liquidContextObjJSON);
            var reportFormat = $(e.target).attr("data-reportFormat");
            $("#page_ribbon_download_report_spinner").show();
            $("#page_ribbon_download_report_glyphicon").hide();

            CAT.DSRM.ServiceRequestCommon.DownloadReport(rptId, rptName, rptRdlName, liquidContextObj, reportFormat);
        }
    },
    /**
     * Retrieve Reports aagainst event type entity and append those to "Ribbon (Download Reports)"
     * @param {object} liquidContext
     */
    GetEntityReports: function (liquidContext) {
        if (!liquidContext)
            return;

        var eventTypeLogicalName = liquidContext.eventTypeLogicalName;
        var fetchQuery = "reportid,filename,name&$expand=report_reportcategories($select=categorycode;$filter=(categorycode eq 809060000)),report_reportentities($filter=(objecttypecode eq '" + eventTypeLogicalName + "'))&$filter=(not contains(name, 'incident')) and (report_reportcategories/any(o1:(o1/categorycode eq 809060000))) and (report_reportentities/any(o2:(o2/objecttypecode eq '" + eventTypeLogicalName + "')))";
        var inquiryTypeName = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : null;
        if (inquiryTypeName && liquidContext.eventTypeLogicalName === "cat_dsn" && inquiryTypeName.contains("Incident")) {
            fetchQuery = "reportid,filename,name&$expand=report_reportcategories($select=categorycode;$filter=(categorycode eq 809060000)),report_reportentities($filter=(objecttypecode eq '" + eventTypeLogicalName + "'))&$filter=(report_reportcategories/any(o1:(o1/categorycode eq 809060000))) and (report_reportentities/any(o2:(o2/objecttypecode eq '" + eventTypeLogicalName + "')))";
        }
        if (liquidContext.refrel) {
            fetchQuery = "reportid,filename,name&$expand=report_reportcategories($select=categorycode;$filter=(categorycode eq 809060000)),report_reportentities($filter=(objecttypecode eq '" + liquidContext.eventTypeLookup + "'))&$filter=(not contains(name, 'incident')) and (report_reportcategories/any(o1:(o1/categorycode eq 809060000))) and (report_reportentities/any(o2:(o2/objecttypecode eq '" + liquidContext.eventTypeLookup + "')))";
        }

        var loacalLiquidContext = {};

        if (liquidContext.entityListId) {
            loacalLiquidContext.entityListId = liquidContext.entityListId;
        }
        if (liquidContext.eventTypeLogicalName) {
            loacalLiquidContext.eventTypeLogicalName = liquidContext.eventTypeLogicalName;
        }
        if (liquidContext.relatedEntityId) {
            loacalLiquidContext.relatedEntityId = liquidContext.relatedEntityId;
        }
        if (liquidContext.relatedEntityName) {
            loacalLiquidContext.relatedEntityName = liquidContext.relatedEntityName;
        }
        if (liquidContext.eventTypeRecordId) {
            loacalLiquidContext.eventTypeRecordId = liquidContext.eventTypeRecordId;
        }
        if (liquidContext.eventTypeLookup) {
            loacalLiquidContext.eventTypeLookup = liquidContext.eventTypeLookup;
        }

        var fetchReport = "reports?$select=" + fetchQuery;
        ////success callback function of API call
        var successCallback = function (result, liquidContext) {
            if (result && result.length > 0 && liquidContext) {
                var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
                for (var i = 0; i < result.length; i++) {
                    var reportId = result[i].reportid;
                    var reportName = result[i].name;
                    var reportRdlFileName = result[i].filename;
                    if (reportName && reportName.contains("SR Notes Report")) {
                        var reportFormat = "PDF";
                        if (reportName && (reportName.contains("Customer 1") || reportName.contains("DPPM PowerPoint"))) {
                            reportFormat = "PPTX";
                        }
                        CAT.DSRM.ServiceRequestCommon.NOTEREPORT = { reportId: reportId, reportName: reportName, reportRdlFileName: reportRdlFileName, reportFormat: reportFormat };
                    }
                    if (reportName && reportName.contains("Dealer Notes Report")) {
                        let reportFormat = "PDF";
                        CAT.DSRM.ServiceRequestCommon.DEALERNOTEREPORT = { reportId: reportId, reportName: reportName, reportRdlFileName: reportRdlFileName, reportFormat: reportFormat };
                        if (!(inquiryTypeName && (inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_PRODUCTHEALTH
                            || inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_DSNINCIDENT
                            || inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_PASSWORD
                            || inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_SIFEXPOSURE
                            || inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_SYSTEMTECH_PRODUCTTECHNOLOGY.toUpperCase()))) {
                            continue;
                        }
                    }
                    if (reportName && reportName.contains("Dealer SR Notes Shared Report")) {
                        var isSharedWithDealers = $("#cat_sharedwithdealers").length > 0 ? $("#cat_sharedwithdealers").val() : null;
                        var dealerAuthorizedNotesShare = $("#cat_dealerauthorizednotesshare").length > 0 ? $("#cat_dealerauthorizednotesshare").val() : null;
                        //if it is shared with all dealers AND dealer authorized notes share is yes then show the report or else dont
                        if (!(isSharedWithDealers === CAT.DSRM.ServiceRequestCommon.SHARED_WITH_DEALERS_YES.value && dealerAuthorizedNotesShare === CAT.DSRM.ServiceRequestCommon.DEALER_AUTHORIZED_NOTES_SHARE_YES.value)) {
                            continue;
                        }
                    }
                    //var buttonTag = "<li><a id='" + reportId + "'role='menuitem' data-rdlName='" + reportRdlFileName + "' data-liquidContext='" + JSON.stringify(loacalLiquidContext) + "' onclick='CAT.DSRM.ServiceRequestCommon.OnClickOfDownloadReport(event)' class='system-links' title='" + reportName + "'><span class='margin-left-5'>" + reportName + "</span></a></li>";
                    var buttonTag = `<li class="panel">
                                        <div title="`+ reportName + `" class="card-header btn btn-custom collapsed d-block w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapse` + reportId + `" aria-expanded="false" aria-controls="collapseOne" id="heading` + reportId + `">
                                            <span class="margin-left-5">`+ reportName + `</span>
                                        </div>
                                        <div id="collapse` + reportId + `" data-bs-parent="#page_ribbon_download_report_button" class="collapse" aria-labelledby="heading` + reportId + `">
                                            <div class="card-body">
                                                <div class="btn-group d-flex w-100" role="group">
                                                    <div class="btn-group flex-fill"" role="group">
                                                        <button data-reportName="` + reportName + `" data-reportId="` + reportId + `" data-rdlName="` + reportRdlFileName + `" data-liquidContext='` + JSON.stringify(loacalLiquidContext) + `' data-reportFormat="PDF" onclick='CAT.DSRM.ServiceRequestCommon.OnClickOfDownloadReport(event)' type="button" class="btn btn-custom">PDF</button>
                                                    </div>
                                                    <div class="btn-group flex-fill"" role="group">
                                                        <button data-reportName="` + reportName + `" data-reportId="` + reportId + `" data-rdlName="` + reportRdlFileName + `" data-liquidContext='` + JSON.stringify(loacalLiquidContext) + `' data-reportFormat="PPTX" onclick='CAT.DSRM.ServiceRequestCommon.OnClickOfDownloadReport(event)' type="button" class="btn btn-custom">PPT</button>
                                                    </div>
                                                    <div class="btn-group flex-fill"" role="group">
                                                        <button data-reportName="` + reportName + `" data-reportId="` + reportId + `" data-rdlName="` + reportRdlFileName + `" data-liquidContext='` + JSON.stringify(loacalLiquidContext) + `' data-reportFormat="WORDOPENXML" onclick='CAT.DSRM.ServiceRequestCommon.OnClickOfDownloadReport(event)' type="button" class="btn btn-custom">Word</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>`
                    $("#div_reports").find("ul#page_ribbon_download_report_button").append(buttonTag);
                }
            }
        };

        //error callback function of API call
        var errorCallback = function (e) {
            console.log("Error: " + e);
        };

        //retrieve report
        CAT.DSRM.WebApi.RetrieveRecords(fetchReport, function (result) {
            successCallback(result, liquidContext);
        }, errorCallback, true);
    },
    /**
     * Download report in pdf format
     * @param {string} reportId
     * @param {string} reportName
     * @param {string} reportRdlFileName
     * @param {object} liquidContext
     */
    DownloadReport(reportId, reportName, reportRdlFileName, liquidContext, reportFormat) {
        if (!reportId || !reportName || !reportRdlFileName || !liquidContext)
            return;
        //success callback function of API call
        var successCallback = function (base64String) {
            if (base64String) {
                var link = document.createElement('a');
                var dt = liquidContext && liquidContext.entityListId && $('#' + liquidContext.entityListId) && $('#' + liquidContext.entityListId).length > 0 ? $('#' + liquidContext.entityListId).DataTable() : null;
                link.innerHTML = 'Download file';
                switch (reportFormat) {
                    case "WORDOPENXML":
                        reportFormat = "docx";
                    default:
                        reportFormat = reportFormat.toLowerCase();
                }
                link.download = reportName + '.' + reportFormat;
                link.href = 'data:application/octet-stream;base64,' + base64String;
                link.click();
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_report_downloaded"));
                if (dt) {
                    dt.processing(false);
                }
                $("#page_ribbon_download_report_spinner").hide();
                $("#page_ribbon_download_report_glyphicon").show();
            }
        };
        //error callback function of API call
        var errorCallback = function (e) {
            console.log("see below error");
            console.log(e);
        };

        var recordIds = [];
        var eventTypeLogicalName = liquidContext.eventTypeLogicalName;
        if (liquidContext.entityListId && eventTypeLogicalName && eventTypeLogicalName !== "cat_servicerequestnote" && eventTypeLogicalName !== "cat_dealernote") {
            var selectedRecords = CAT.DSRM.DataTableLoad.GetSelectedRows(liquidContext);
            //if (selectedRecords && selectedRecords.length > 10) {
            //    alert("Please select only 10 SR's to download reports.");
            //    return;
            //}
            for (var i = 0; i < selectedRecords.length; i++) {
                var recordId = selectedRecords[i]["cat_dealercpiid"];
                recordIds.push(recordId);
            }
        }
        else {
            if ((eventTypeLogicalName === "cat_servicerequestnote" || eventTypeLogicalName === "cat_dealernote") && liquidContext.relatedEntityName) {
                recordIds.push(liquidContext.relatedEntityId);
                eventTypeLogicalName = liquidContext.relatedEntityName;
            }
            else if ((eventTypeLogicalName === "cat_servicerequestnote" || eventTypeLogicalName === "cat_dealernote") && liquidContext.eventTypeLookup) {
                recordIds.push(liquidContext.eventTypeRecordId);
                eventTypeLogicalName = liquidContext.eventTypeLookup;
            }
            else {
                recordIds.push(liquidContext.eventTypeRecordId);
            }
        }
        var data = { "eventTypeLogicalName": eventTypeLogicalName, "eventTypeRecordIds": recordIds, "reportId": reportId, "reportRdlFileName": reportRdlFileName, "reportFormat": reportFormat }
        //call web api
        CAT.DSRM.WebApi.CallExternalService("DownloadReport", data, successCallback, errorCallback);
    },
    /**
     * create dropdown options and append it to ribbon(Download Reports)
     * @param {object} liquidContext
     */
    RibbonDownloadReport: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.SetVisible("div_reports", false);
        var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
        if (liquidContext.formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE
            && (inDealership || (liquidContext.evenTypeDisplay !== CAT.DSRM.ServiceRequestCommon.EVENT_DSN.text && liquidContext.evenTypeDisplay !== CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.text))) {
            CAT.DSRM.ServiceRequestCommon.SetVisible("div_reports", true);
            CAT.DSRM.ServiceRequestCommon.GetEntityReports(liquidContext);
        }
    },
    /**
     * Show Hide Summary Serial Number List
     * @param {object} liquidContext
     */
    ShowHideSummaryRecentSerialNumberList: function (liquidContext) {
        let inquiryTypeName = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid_name").val() ? $("#cat_inquirytypeid_name").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME;
        let brand = $('#cat_brandaffiliation').length > 0 ? $('#cat_brandaffiliation').val() : 0;
        let brandValue = parseInt(brand);
        let isMWM = inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_MWM_CG_PRODUCT_HEALTH || brandValue === CAT.DSRM.ServiceRequestCommon.BRAND_MWM;
        if ($("#cat_productserialnumber").length > 0 && $("#cat_productserialnumber").val() && !isMWM) {

            var localLiquidContext = {};
            localLiquidContext.entityListId = "divRecentSrGrid";
            localLiquidContext.entityListViewFilterStorageId = "viewRecentSrFilterStorageContainer";
            localLiquidContext.loggedinContactId = liquidContext.loggedinContactId;
            localLiquidContext.refrel = liquidContext.eventTypeLogicalName + "_summaryrecentsr";
            localLiquidContext.relatedEntityName = liquidContext.eventTypeLogicalName;
            localLiquidContext.websiteLanguage = liquidContext.websiteLanguage;
            localLiquidContext.dealerAdmin = liquidContext?.dealerAdmin;
            localLiquidContext.myDealershipView = liquidContext?.myDealershipView;


            var recordId = liquidContext.eventTypeRecordId;
            var filterFieldName = "cat_productserialnumber";
            var srNo = $("#cat_productserialnumber").val();

            var eventTypeAccessCondition = "";
            let accessibleEventTypes = [];
            let contact = typeof (liquidContext.loggedInContactAccess) !== "undefined" ? liquidContext.loggedInContactAccess : null;
            if (contact) {
                if (contact.dsnAccess && contact.dsnAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value);
                }
                if (contact.partTechAccess && contact.partTechAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value);
                }
                if (contact.piqAccess && contact.piqAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_PIQ.value);
                }
                if (contact.systemTechAccess && contact.systemTechAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value);
                }
                if (contact.empAccess && contact.empAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value);
                }
                if (contact.dppmAccess && contact.dppmAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_DEALERPPM.value);
                }
                if (contact.goodwillAccess && contact.goodwillAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_GOODWILL.value);
                }
                if (contact.globalWarrantyAccess && contact.globalWarrantyAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_GLOBALWARRANTY.value);
                }
                if (contact.commonPSCRMAccess && contact.commonPSCRMAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_COMMONPSCRM.value);
                }
                if (contact.pricingAccess && contact.pricingAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE) {
                    accessibleEventTypes.push(CAT.DSRM.ServiceRequestCommon.EVENT_PRICING.value);
                }
            }

            var mainFilter = filterFieldName + " eq '" + srNo + "'";

            // Filter by Brand (Caterpillar / Perkins / FG Wilson)
            if (brandValue && brandValue > 0) {
                mainFilter += " and cat_brandaffiliation eq " + brandValue;
            }

            if ($("#cat_ticketnumber").length > 0 && $("#cat_ticketnumber").val()) {
                var ticketNo = $("#cat_ticketnumber").val();
                mainFilter += " and ticketnumber ne '" + ticketNo + "'";
            }
            accessibleEventTypes.forEach(function (eventType, index) {
                if (accessibleEventTypes.length - 1 === index) {
                    //last value of array
                    eventTypeAccessCondition += " cat_eventtype eq " + eventType;
                }
                else {
                    eventTypeAccessCondition += " cat_eventtype eq " + eventType + " or ";
                }

            });
            if (mainFilter && eventTypeAccessCondition) {
                mainFilter += " and ( " + eventTypeAccessCondition + " )";
            }

            localLiquidContext.relatedEntityId = recordId;
            localLiquidContext.metaMainFilter = mainFilter;
            localLiquidContext.metaParentDealershipFilter = liquidContext.metaParentDealershipFilter;
            localLiquidContext.metaGlobalDealershipFilter = liquidContext.metaGlobalDealershipFilter;
            localLiquidContext.metaRestrictedUserFilter = liquidContext.metaRestrictedUserFilter;
            localLiquidContext.topXRecords = "5";
            localLiquidContext.eventTypeLogicalName = "incident";
            localLiquidContext.accessDSN = liquidContext.loggedInContactAccess.dsnAccess;
            localLiquidContext.accessPartsTech = liquidContext.loggedInContactAccess.partTechAccess;
            localLiquidContext.accessSystemTech = liquidContext.loggedInContactAccess.systemTechAccess;
            $("#summaryRecentSRRow").hide();
            var recentSrListDOM = `<tr id="summaryRecentSRRow"><td colspan="3" rowspan="1" class="clearfix cell text form-control-cell"><div id="divRecentSrContainer" class="container-fluid row"><legend class="section-title">Other PSCRM SRs with this Serial Number (most recent 5 only)</legend><input class="d-none" readonly id="` + localLiquidContext.entityListViewFilterStorageId + `" type="text" name="View Filter" value="" />
                        <table id="`+ localLiquidContext.entityListId + `" class="table table-hover entitylist-overflow" style="width:100%"></table><div></td></tr>`;


            $("#cat_productserialnumber").closest("tr").after(recentSrListDOM);
            var dataTableDefinitions = {
                searchingDefinitions: false,
                pageLengthDefinitions: 5,
                rowSelectDefinitions: { style: 'single', selector: 'td:first-child' },
                scrollYDefinitions: "70vh",
            };
            var viewMetaDataDefinitions = [
                {
                    text: "Other PSCRM SRs with this Serial Number (most recent 5 only)", className: "btn btn-custom form-action-container-left align-left", default: true,
                    columns: ["ticketnumber", "cat_recordurl", "cat_eventtype", "cat_productserialnumber", "incidentid", "_cat_inquirytypeid_value", "cat_status", "cat_title", "description", "_cat_accountid_value", "cat_dateopened", "modifiedon"],
                    order: [["modifiedon", "desc"]]
                }
            ];
            var columnMetaDataDefinitions = {
                incidentid: { query: true, visible: false, title: "Summary Id", data: "incidentid", defaultContent: "" },
                ticketnumber: { query: true, orderable: false, searchable: false, hyperlink: true, hyperlinkTarget: "_blank", hyperlinkEntityName: "cat_eventtype", hyperlinkEntityId: "cat_recordurl", title: "SR Number", data: "ticketnumber", defaultContent: "" },
                cat_recordurl: { query: true, visible: false, title: "Click To Open", data: "cat_recordurl", defaultContent: "" },
                cat_eventtype: { query: true, visible: false, title: "Event Type", data: "cat_eventtype@OData\\.Community\\.Display\\.V1\\.FormattedValue", defaultContent: "" },
                _cat_inquirytypeid_value: { type: "lookup", query: true, visible: false, title: "Inquiry Type Id", data: "_cat_inquirytypeid_value", defaultContent: "" },
                _cat_inquirytypeid_value_type: { query: false, visible: false, title: "Inquiry Type Logical Name", data: "_cat_inquirytypeid_value@Microsoft\\.Dynamics\\.CRM\\.lookuplogicalname", defaultContent: "" },
                _cat_inquirytypeid_value_name: { query: false, visible: true, orderable: false, title: "Inquiry Type", data: "_cat_inquirytypeid_value@OData\\.Community\\.Display\\.V1\\.FormattedValue", defaultContent: "" },
                cat_status: { query: true, searchable: false, orderable: false, title: "Status", data: "cat_status@OData\\.Community\\.Display\\.V1\\.FormattedValue", defaultContent: "" },
                cat_productserialnumber: { query: true, visible: false, title: "SR Number", data: "cat_productserialnumber", defaultContent: "" },
                cat_title: { query: true, visible: true, orderable: false, title: "Title", data: "cat_title", defaultContent: "" },
                description: { query: true, visible: true, orderable: false, title: "Description", data: "description", defaultContent: "" },
                _cat_accountid_value: { type: "lookup", query: true, visible: false, title: "Dealer Id", data: "_cat_accountid_value", defaultContent: "" },
                _cat_accountid_value_type: { query: false, visible: false, title: "Dealer Logical Name", data: "_cat_accountid_value@Microsoft\\.Dynamics\\.CRM\\.lookuplogicalname", defaultContent: "" },
                _cat_accountid_value_name: { query: false, visible: true, orderable: false, title: "Dealer", data: "_cat_accountid_value@OData\\.Community\\.Display\\.V1\\.FormattedValue", defaultContent: "" },
                cat_dateopened: { type: "date", query: true, title: "Date Opened", searchable: false, orderable: false, data: "cat_dateopened@OData\\.Community\\.Display\\.V1\\.FormattedValue", defaultContent: "" },
                modifiedon: { type: "date", query: true, visible: false, title: "Modified On", searchable: false, orderable: true, data: "modifiedon@OData\\.Community\\.Display\\.V1\\.FormattedValue", defaultContent: "" },
            };
            CAT.DSRM.DataTableLoad.InitializeDataTable(localLiquidContext, columnMetaDataDefinitions, viewMetaDataDefinitions, dataTableDefinitions);


        } else {
            $('#summaryRecentSRRow').length > 0 ? $('#summaryRecentSRRow').remove() : null;
        }
    },
    //END - Show Hide Summary Serial Number List
    /**
     * populate the prioritycode field for DSN and SystemTech entity
     * @param {object} liquidContext
     */
    PopulatePriority: function (liquidContext) {
        if (!liquidContext)
            return;

        var dealerUrgent = $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() ? parseInt($("#cat_dealerurgent").val()) : null;
        var currentpriorityValue = $("#cat_prioritycode").length > 0 && $("#cat_prioritycode").val() ? $("#cat_prioritycode").val() : "";
        var dealerSituationValue = $("#cat_dealersituation").length > 0 && $("#cat_dealersituation").val() ? parseInt($("#cat_dealersituation").val()) : null;
        var inquiryTypeValue = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid").val() ? $("#cat_inquirytypeid").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE;
        var inquiryTypeName = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid_name").val() ? $("#cat_inquirytypeid_name").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME;

        if (dealerSituationValue === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_TECH_IS_AT_UNIT.value) {
            let priorityValue = "";
            if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) {
                priorityValue = CAT.DSRM.ServiceRequestCommon.OPTION_PRIORITY_HIGH.value;
            }
            currentpriorityValue !== priorityValue ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_prioritycode", priorityValue) : null;
        }
        else if (dealerSituationValue === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_OTHER.value) {
            let priorityValue = "";
            if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) {
                priorityValue = CAT.DSRM.ServiceRequestCommon.OPTION_PRIORITY_HIGH.value;
            }
            currentpriorityValue !== priorityValue ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_prioritycode", priorityValue) : null;
        }
        else if (dealerSituationValue === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_TECH_LEFT_THE_UNIT_AND_NEEDS_TO_BE_SCHEDULED.value
            || dealerSituationValue === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_UNIT_TECH_ARE_AVAILABLE_BUT_TECH_HAS_OTHER_WORK.value) {
            let priorityValue = CAT.DSRM.ServiceRequestCommon.OPTION_PRIORITY_MEDIUM.value;
            if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value || dealerUrgent == null) {
                priorityValue = "";
            }
            currentpriorityValue !== priorityValue ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_prioritycode", priorityValue) : null;
        }
        else if (dealerSituationValue === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_PRODUCT_INFORMATIONAL.value) {
            let priorityValue = CAT.DSRM.ServiceRequestCommon.OPTION_PRIORITY_PRODUCT_INQUIRY.value;
            if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value || dealerUrgent == null) {
                priorityValue = "";
            }
            currentpriorityValue !== priorityValue ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_prioritycode", priorityValue) : null;
        }
        if (inquiryTypeValue && inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_AFA) {
            currentpriorityValue !== CAT.DSRM.ServiceRequestCommon.OPTION_PRIORITY_PRODUCT_INQUIRY.value ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_prioritycode", CAT.DSRM.ServiceRequestCommon.OPTION_PRIORITY_PRODUCT_INQUIRY.value) : null;
        }
    },
    /**
     * Function onChange of Dealer Situation
     * @param {object} liquidContext
     * @param {boolean} isOnchange
     */
    DealerSituationOnChange: function (liquidContext, isOnchange) {
        if (!liquidContext)
            return;
        var status = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        var dealerSituationValue = $("#cat_dealersituation").length > 0 && $("#cat_dealersituation").val() ? $("#cat_dealersituation").val() : "";
        var inquiryTypeValue = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid").val() ? $("#cat_inquirytypeid").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE;
        var inquiryTypeName = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid_name").val() ? $("#cat_inquirytypeid_name").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME;
        let brand = $('#cat_brandaffiliation').length > 0 ? $('#cat_brandaffiliation').val() : 0;
        let brandValue = parseInt(brand);
        let isMWM = inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_MWM_CG_PRODUCT_HEALTH || brandValue === CAT.DSRM.ServiceRequestCommon.BRAND_MWM;

        if (dealerSituationValue == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_TECH_IS_AT_UNIT.value) {
            $("#cat_dealerurgent").length > 0 && isOnchange && !isMWM ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerurgent", CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) : null;
            $("#cat_dealerurgent").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerurgent", true) : null;
            $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", false) : null;
            if ((status === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value) && $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) {
                $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
            }
        }
        else if (dealerSituationValue == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_OTHER.value) {
            $("#cat_dealerurgent").length > 0 && isOnchange ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerurgent", CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_NO.value) : null;
            $("#cat_dealerurgent").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerurgent", false) : null;
            $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
        }
        else {
            $("#cat_dealerurgent").length > 0 && isOnchange ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerurgent", CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_NO.value) : null;
            $("#cat_dealerurgent").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerurgent", true) : null;
            $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", false) : null;
        }
        if (inquiryTypeValue && inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_AFA) {
            $("#cat_dealerurgent").length > 0 && isOnchange ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerurgent", CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_NO.value) : null;
            CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_dealerurgent"), true)
        }
    },
    /**
     * Function to disable fields for Dealer 
     * @param {any} executionContext
     */
    EnableDisableDealerUrgentDealer: function (liquidContext) {
        if (!liquidContext)
            return;
        var inquiryTypeValue = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid").val() ? $("#cat_inquirytypeid").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPE;
        var inquiryTypeName = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid_name").val() ? $("#cat_inquirytypeid_name").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME;
        var inquiryTypeName = inquiryTypeName ? inquiryTypeName.toUpperCase().replace(/\s/g, " ") : null;
        var fieldDisableArray = ["cat_problemdescription", "cat_whatisyourquestion", "cat_whatisyourquestions", "cat_expectationjustification", "cat_dealerurgent", "cat_dealersituation", "cat_estimateroundtriptraveltimetotheunit", "cat_tripstothemachine"];
        var status = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        if (status === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value || status === CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value) {
            CAT.DSRM.ServiceRequestCommon.SetDisabled(fieldDisableArray, true);
        }
    },
    /**
     * function to set explain situation required
     * @param {object} liquidContext
     */
    OnChangeDealerUrgent: function (liquidContext) {
        if (!liquidContext)
            return;
        var statusValue = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        var eventType = $("#cat_eventtype").length > 0 && $("#cat_eventtype").val() ? parseInt($("#cat_eventtype").val()) : 0;
        switch (eventType) {
            case CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value:
                if ((statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) && $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) {
                    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
                }
                else if ((statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) && $("#cat_dealersituation").length > 0 && $("#cat_dealersituation").val() == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_OTHER.value) {
                    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
                }
                else
                    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", false) : null;
                break;
            case CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value:
                if ((statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) && $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value) {
                    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
                }
                else if ((statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value) && $("#cat_dealersituation").length > 0 && $("#cat_dealersituation").val() == CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_SITUATION_OTHER.value) {
                    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", true) : null;
                }
                else
                    $("#cat_expectationjustification").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_expectationjustification", false) : null;
                break;
        }
    },
    /**
     * Function to show alert to Techician if Dealer Urgent is "Yes"
     *  @param {object} liquidContext
     */
    TechnicianAlertOnDealerUrgent: function (liquidContext) {
        if (!liquidContext)
            return;
        var status = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        var dealerUrgent = $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() ? parseInt($("#cat_dealerurgent").val()) : null;
        var currentbrand = $("#cat_brandaffiliation").length > 0 && $("#cat_brandaffiliation").val() ? parseInt($("#cat_brandaffiliation").val()) : null;

        if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value && status && status === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value
            && currentbrand && currentbrand === CAT.DSRM.ServiceRequestCommon.BRAND_CATERPILLAR) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_technician_dealer_urgent"));
        }
    },
    /**
     * Function to ask confirmation to dealer on Urgent Service Request
     *  @param {object} liquidContext
     */
    DealerConfirmationOnDealerUrgent: function (liquidContext) {
        if (!liquidContext)
            return;
        var status = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        var dealerUrgent = $("#cat_dealerurgent").length > 0 && $("#cat_dealerurgent").val() ? parseInt($("#cat_dealerurgent").val()) : null;
        var technicianId = $("#cat_technicianid").length > 0 ? $("#cat_technicianid").val() : null;
        var createdByUserId = $("#cat_createdbycontactid").length > 0 ? $("#cat_createdbycontactid").val() : null;
        var isValid = true;
        var currentbrand = $("#cat_brandaffiliation").length > 0 && $("#cat_brandaffiliation").val() ? parseInt($("#cat_brandaffiliation").val()) : null;

        if (dealerUrgent === CAT.DSRM.ServiceRequestCommon.OPTION_DEALER_URGENT_YES.value && status && status === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value
            && technicianId && technicianId == createdByUserId && currentbrand && currentbrand === CAT.DSRM.ServiceRequestCommon.BRAND_CATERPILLAR) {
            var confirmation = window.confirm(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_dealer_urgent_confirmation"));
            if (confirmation === false) {
                $("#cat_dealersituation").length > 0 ? $("#cat_dealersituation").focus() : null;
                isValid = false;
            }
        }
        return isValid;
    },
    /**
        * Function to set notification on the field.
        * @param {string} attributeName
        */
    ClearNotification: function (attributeName) {
        if (!attributeName || typeof attributeName != "string")
            return;

        var attributeSelector = attributeName.startsWith('#') ? attributeName : "#" + attributeName;
        var notificationName = "Notification" + $(attributeSelector).attr("id");
        if ($(attributeSelector).length > 0) {
            var isCheckbox = $(attributeSelector).attr('type') == 'checkbox';
            var parentDiv = $(attributeSelector).parent();
            if (isCheckbox) {
                parentDiv = parentDiv.parent().parent();
            }
            var msgElement = $(parentDiv).find("#" + notificationName);
            if (msgElement)
                $(msgElement).remove();
        }
    },
    /**
     * Function to set notification on the field.
     * @param {string} attributeName
     * @param {string} message
     */
    SetNotification: function (attributeName, message, duration) {
        if (!attributeName || typeof attributeName != "string" || !message)
            return;

        var attributeSelector = attributeName.startsWith('#') ? attributeName : "#" + attributeName;
        var notificationName = "Notification" + $(attributeSelector).attr("id");
        if ($(attributeSelector).length > 0) {
            CAT.DSRM.ServiceRequestCommon.ClearNotification(attributeName);
            var isCheckbox = $(attributeSelector).attr('type') == 'checkbox';
            var parentDiv = $(attributeSelector).parent();
            if (isCheckbox) {
                parentDiv = parentDiv.parent().parent();
            }
            //escaping meta-characters
            message = message
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            var alertControl = `<div id="` + notificationName + `" class="alert alert-danger alert-dismissible" style="padding: 5px 25px 5px 5px !important;border-radius: 5px !important;margin-bottom: 0px !important; position:static;" role="alert">
            <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close" style="float:right !important"><span aria-hidden="true">&times;</span></button>`+ message + `</div>`;
            $(parentDiv).append(alertControl);
            if (duration) {
                duration = typeof duration === "boolean" ? 20000 : duration;
                $("#" + notificationName).fadeIn('slow', function () {
                    $("#" + notificationName).delay(duration).fadeOut();
                });
            }
        }
    },
    /**
     * Function to scroll and focus
     * @param {string} attributeName
     */
    ScrollAndFocus: function (attributeName) {
        if (!attributeName || typeof attributeName != "string")
            return;
        var labelSelector = attributeName.startsWith('#') ? attributeName + "_label" : "#" + attributeName + "_label";
        var attributeSelector = attributeName.startsWith('#') ? attributeName : "#" + attributeName;
        //focus on field with delay if inside collapsed tab 
        if ($(attributeSelector).length > 0 && $(attributeSelector).closest('div[data-name]').length && ($(attributeSelector).closest('div[data-name]').css('display') == 'none')) {
            var tabTitle = $(attributeSelector).closest('div[data-name]').prev().length > 0 && $(attributeSelector).closest('div[data-name]').prev().hasClass("tab-title") ? $(attributeSelector).closest('div[data-name]').prev() : null;
            var tabName = tabTitle.length > 0 ? tabTitle.next().attr("data-name").replace(/\s/g, '') : null;
            CAT.DSRM.ServiceRequestCommon.ExpandCommand(tabName);
            setTimeout(function () {
                if ($(labelSelector).length > 0)
                    $('html, body').animate({ scrollTop: $(labelSelector).offset().top - 200 }, 500);
                else if ($(attributeSelector).length > 0)
                    $('html, body').animate({ scrollTop: $(attributeSelector).offset().top - 200 }, 500);

                if ($(attributeSelector).length > 0)
                    $("#" + attributeName).focus();
            }, 300);
        }//no delay for focus 
        else {
            if ($(labelSelector).length > 0)
                $('html, body').animate({ scrollTop: $(labelSelector).offset().top - 200 }, 500);
            else if ($(attributeSelector).length > 0)
                $('html, body').animate({ scrollTop: $(attributeSelector).offset().top - 200 }, 500);

            if ($(attributeSelector).length > 0)
                $("#" + attributeName).focus();
        }

    },
    /**
     * Function to scroll and focus tab
     * @param {string} tabName
     */
    ScrollAndFocusTab: function (tabName) {
        if (!tabName)
            return;
        //get tab title name
        var tabTitle = null;
        if (!tabTitle || tabTitle.length < 1)
            tabTitle = $("div[data-name='" + tabName + "']").length > 0 && $("div[data-name='" + tabName + "']").prev().length > 0 && $("div[data-name='" + tabName + "']").prev().hasClass("tab-title") ? $("div[data-name='" + tabName + "']").prev().text() : null;
        // expand tab if collapsed
        if ($("div[data-name='" + tabName + "']").length > 0) {
            CAT.DSRM.ServiceRequestCommon.ExpandCommand(tabName);
        }
        //focus on tab title
        if (tabTitle && typeof tabTitle == "string") {
            var tabTitleSelector = tabTitle.length > 0 ? "h2:contains('" + tabTitle + "')" : null;
            if ($(tabTitleSelector).length > 0) {
                $('html, body').animate({ scrollTop: $(tabTitleSelector).offset().top - 200 }, 500);
                $(tabTitleSelector).focus();
            }
        }//Scroll and focus on tab
        else if (tabName && typeof tabName == "string") {
            var tabSelector = tabName.length > 0 ? "div[data-name='" + tabName + "']" : null;
            if ($(tabSelector).length > 0) {
                $('html, body').animate({ scrollTop: $(tabSelector).offset().top - 200 }, 500);
                $(tabSelector).focus();
            }
        }
    },
    /**
     * Function to make trips fields lock and unclock based on conditions
     * @param {object} liquidContext
     */
    TripsFieldLockUnlock: function (liquidContext) {
        if (!liquidContext)
            return;
        var dealerAccess = liquidContext.dealerAccess;

        var statusValue = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        var dealerSituation = $("#cat_dealersituation").length > 0 ? $("#cat_dealersituation").val() : null;
        var estimateRoundTripTravelTimeToTheUnit = $("#cat_estimateroundtriptraveltimetotheunit").length > 0 ? $("#cat_dealersituation").val() : null;

        if (dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
            if (statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_DEALERCLOSED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value
                || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGTECHRESPONSE.value) {
                $("#cat_tripstothemachine").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstothemachine", false) : null;
                $("#cat_dealersituation").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealersituation", false) : null;
                $("#cat_estimateroundtriptraveltimetotheunit").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_estimateroundtriptraveltimetotheunit", false) : null;
            }
            else {
                $("#cat_tripstothemachine").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstothemachine", true) : null;
                if (dealerSituation && statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value) {
                    $("#cat_dealersituation").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealersituation", true) : null;
                }
                if (estimateRoundTripTravelTimeToTheUnit && statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value) {
                    $("#cat_estimateroundtriptraveltimetotheunit").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_estimateroundtriptraveltimetotheunit", true) : null;
                }
            }
        }

        if (statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_DEALERCLOSED.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value
            || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGTECHRESPONSE.value || statusValue === CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value) {
            $("#cat_tripstomachinetechandtc").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstomachinetechandtc", false) : null;
            $("#cat_tripstomachinesincesubmittingsr").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstomachinesincesubmittingsr", true) : null;

        }
        else {
            $("#cat_tripstomachinetechandtc").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstomachinetechandtc", true) : null;
            $("#cat_tripstomachinesincesubmittingsr").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstomachinesincesubmittingsr", false) : null;
        }
        if ((dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN) && (statusValue == CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value || (statusValue == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value && liquidContext.formType == CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE))) {
            $("#cat_tripstothemachine").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstothemachine", false) : null;
        }
        else if (dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)
            $("#cat_tripstothemachine").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstothemachine", true) : null;
    },
    /**
    * Function to skip specific fields from alerting when form is dirty
    * @param {object} liquidContext
    * @returns {boolean} - true if the alert should be skipped, false otherwise
    */
    SkipFieldsFromDirtyCheck: function (liquidContext) {
        if (!liquidContext)
            return;
        let showSaveAlert = true;
        let SkipFieldsFromDirtyCheck = ["cat_otherindustries", "cat_initialinquirytype", "cat_majorpartclass"];
        let dirtyElements = $("#liquid_form").find(".dirty");
        if (dirtyElements && dirtyElements.length <= 2 && dirtyElements.length > 0) {
            for (var i = 0; i < dirtyElements.length; i++) {
                let dirtyElement = dirtyElements[i];
                let dirtyElementTab = $(dirtyElement).closest('[data-name="tab_additionalinfo"]');
                let dirtyFieldId = $(dirtyElement).next()?.attr("id");
                showSaveAlert = true;
                if (SkipFieldsFromDirtyCheck.indexOf(dirtyFieldId) > -1) {
                    showSaveAlert = false;
                } else if (dirtyElementTab.length > 0) {
                    showSaveAlert = false;
                }
            }
        }
        return showSaveAlert; // Return the final decision

    },

    /**
    * Function to give alert if form is dirty
    * @param {object} liquidContext
    * @param {any} urlToOpenSRNote
    */
    AlertOnUnsaveChanges: function (url, liquidContext) {
        if (!liquidContext)
            return;
        // Check if form is dirty
        var isFormDirty = CAT.DSRM.ServiceRequestCommon.CheckIsFormDirty(liquidContext);
        if (isFormDirty) {
            // Using SkipFieldsFromDirtyCheck function to check if alert should be skipped
            let showSaveAlert = CAT.DSRM.ServiceRequestCommon.SkipFieldsFromDirtyCheck(liquidContext);
            if (showSaveAlert) {
                let saverecordalert = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_save_record");
                alert(saverecordalert);
            } else {
                window.location.replace(url);
            }
        } else {
            window.location.replace(url);
        }

        return false;
    },

    /**
     * Function to check if form is dirty
     * @param {object} liquidContext
     */
    CheckIsFormDirty: function (liquidContext) {
        if (!liquidContext)
            return;
        if ($("#liquid_form").length > 0 && $("#liquid_form").find(".dirty") && $("#liquid_form").find(".dirty").length > 0)
            return true;
        else
            return false;
    },
    /**
     * Function to populate Attachment Count field in header
     * @param {object} liquidContext
     */
    PopulateAttachmentCount: function (liquidContext) {
        if (!liquidContext)
            return;

        var lookupFilterName = liquidContext.eventTypeLogicalName === "cat_partstech" ? "cat_partsid" : liquidContext.eventTypeLogicalName + "id";
        var lookupFilterId = liquidContext.eventTypeRecordId;
        var selectQuery = `cat_attachments?fetchXml=<fetch no-lock="true" aggregate="true">
                              <entity name="cat_attachment">
                                <attribute name="cat_attachmentid" alias="attachmentcount" aggregate="count" distinct="true" />
                                <filter>
                                  <condition attribute="cat_attachmentname" operator="not-null" />
                                  <condition attribute="statecode" operator="eq" value="0" />
                                  <condition attribute="`+ lookupFilterName + `" operator="eq" value="` + lookupFilterId + `" />
                                </filter>
                              </entity>
                            </fetch>`;
        CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (result) {
            if (result && result.length > 0) {
                var attachmentCount = result[0].attachmentcount;
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_attachmentcount", attachmentCount, true);
            }
        }, function (e) {
            alert(e);
        }, false);
    },
    /**
     * Function to get Contact for the parameter contact ID or logged in contact.
     * @param {object} liquidContext
     * @param {string} contactId
     */
    GetContactDetails: function (liquidContext, contactId) {
        if (!liquidContext)
            return;

        if (!contactId) {
            var contactId = liquidContext.loggedinContactId;
            if (!contactId) {
                return;
            }
        }
        var contact = null;
        var selectQuery = "contacts(" + contactId + ")?$select=_cat_dealerid_value,cat_dealercode,telephone1,emailaddress1,_cat_nextlevelapprovercontactid_value,cat_claimsauthorizationlimit,cat_toplevelrecommendationapprover,mobilephone,cat_contacttimezone,contactid,cat_isinternal,cat_accessdealercpi,cat_accessdsn,cat_accessemp,cat_accessglobalwarranty,cat_accessgoodwill,cat_accessparts,cat_accesspdc,cat_accesspic,cat_accesspiq,cat_accesssystemtech,cat_dsn,cat_systemtech,cat_mydealership,_cat_parentaccountid_value,cat_sanctionedcontact&$filter=statecode eq 0";
        CAT.DSRM.WebApi.RetrieveRecords(selectQuery,
            function (results) {
                if (results) {
                    contact = results;
                }
            }, function (e) {
                alert(e);
            }, false);
        return contact;
    },
    /**
     * Function to validate the CPI Number
     * @param {object} liquidContext
     */
    CPINumberOnChange: function (liquidContext) {
        if (!liquidContext)
            return;
        var cpiNumber = $("#cat_cpinumber").length > 0 && $("#cat_cpinumber").val() ? $("#cat_cpinumber").val().split(";")[0] : null;
        if (cpiNumber) {
            var teamLeadURL = "";
            //for production, take the prod url
            if (window.location.href.indexOf("dev") > -1 || window.location.href.indexOf("uat") > -1) {
                teamLeadURL = "https://dvapiq.rd.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json";
            }
            else {
                teamLeadURL = "https://dvapi.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json";
            }
            var fetchCPITeamLeadEmailObject =
            {
                //cpiurl: "https://dvapi.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json",
                //cpiurl: "https://dvapiq.rd.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json",
                cpiurl: teamLeadURL,
            };
            CAT.DSRM.WebApi.CallAction('cat_fetchcpiteamleademail',
                fetchCPITeamLeadEmailObject,
                function (result) {
                    CAT.DSRM.ServiceRequestCommon.VerifyCPIResponse(result);
                },
                function (e) {
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
                    let alertcpinumberinvalid = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_cpi_number_invalid");
                    alert(alertcpinumberinvalid);
                }, false);
        }
    },
    /**
     * Function to validate the CPI Number
     * @param {object} liquidContext
     */
    CPINumberOnChange1: function (liquidContext) {
        if (!liquidContext)
            return;
        var cpiNumber = $("#cat_cpinumber").length > 0 && $("#cat_cpinumber").val() ? $("#cat_cpinumber").val().split(";")[0] : null;
        if (cpiNumber) {
            var teamLeadURL = "";
            //for production, take the prod url
            if (window.location.href.indexOf("dev") > -1 || window.location.href.indexOf("uat") > -1) {
                teamLeadURL = "https://dvapiq.rd.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json";
            }
            else {
                teamLeadURL = "https://dvapi.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json";
            }
            var fetchCPITeamLeadEmailObject =
            {
                //cpiurl: "https://dvapi.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json",
                //cpiurl: "https://dvapiq.rd.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json",
                cpiurl: teamLeadURL,
            };
            CAT.DSRM.WebApi.CallAction('cat_fetchcpiteamleademail',
                fetchCPITeamLeadEmailObject,
                function (result) {
                    CAT.DSRM.ServiceRequestCommon.VerifyCPIResponse(result);
                },
                function (e) {
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
                    let alertcpinumberinvalid = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_cpi_number_invalid");
                    alert(alertcpinumberinvalid);
                }, false);
        }
    },
    /**
     * Function to verify the CPI service response and show alerts based on the response
     * @param {any} cpiServiceResponse
     */
    VerifyCPIResponse: function (cpiServiceResponse) {
        //cpiteamleademailaddress is empty but other values are present then allow using this but show alert
        //Issue case DI should be allowed (no warning) since it was generated from dealer
        //Secondary status = cancelled should display ERROR:   This CPI has been cancelled with no fix, please enter a different CPI , clear the CPI Number
        //Issue case = RP should display a WARNING:   This is a BIQ QA type and not dealer visible, please enter a different CPI , allow the number
        let alertCpiNumberInvalid = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_cpi_number_invalid");
        if (!cpiServiceResponse) {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
            alert(alertCpiNumberInvalid);

        }
        //if nothing is received from sims clear the number
        if (!cpiServiceResponse.cpiteamleademailaddress && !cpiServiceResponse.secondarystatus && !cpiServiceResponse.issuecase) {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
            alert(alertCpiNumberInvalid);

        }
        if (cpiServiceResponse.secondarystatus && cpiServiceResponse.secondarystatus.toLowerCase() == "cancelled") {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
            let msgCancelledCPI = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_msg_cancelled_cpi");
            alert(msgCancelledCPI);
        }
        //Issue case = RP should display a WARNING:   This is a BIQ QA type and not dealer visible, please enter a different CPI , allow the number
        if (cpiServiceResponse.issuecase && cpiServiceResponse.issuecase.toLowerCase().startsWith('r')) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_msg_rp_issuecase_cpi"));
        }
        //Issue case = DI should display a WARNING
        if (cpiServiceResponse.issuecase && cpiServiceResponse.issuecase.toLowerCase().startsWith('d')) {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
            alert(alertCpiNumberInvalid);
        }

    },
    /**
     * Function to disable Submit Button after click
     * @param {object} liquidContext
     */
    DisableSubmitButton: function (liquidContext) {
        if (!liquidContext)
            return;
        if (Page_IsValid) {
            $("#page_ribbon_save_button").length > 0 ? $("#page_ribbon_save_button").prop('disabled', true) : null;
        }
    },
    /**
     * function to open cpi project URL from the CPI Subscription web resource
     */
    CPISubscription: function () {
        var cpiNumber = $("#cat_cpinumber").length > 0 ? $("#cat_cpinumber").val() : null;
        var cpilink = $("#cpilink").length > 0 ? $("#cpilink") : null;
        if (cpilink) {
            let url = "";
            if (cpiNumber) {
                url = "https://sims.cat.com/sims/servlet/cat.dcs.ssd.simsi.cpi.CpiServlet?cpiNumber=" + encodeURIComponent(cpiNumber) + "&search=";
            }
            else {
                url = "https://sims.cat.com/sims/servlet/cat.dcs.ssd.simsi.cpi.CpiServlet";
            }
            cpilink.attr("href", url);
        }
    },
    /**
     * if Cpi Number Contains Data show subscribe url
     * @param {object} liquidContext
     */
    CpiNumberContainsDataShowSubscribeUrl: function (liquidContext) {
        if (!liquidContext)
            return;
        var CPINumber = $("#cat_cpinumber").length > 0 ? $("#cat_cpinumber").val() : null;
        if (!CPINumber) {
            $("#cpilink").length > 0 ? $("#cpilink").hide() : null;
        }
        else {
            $("#cpilink").length > 0 ? $("#cpilink").show() : null;
        }
    },
    /**
     * CPI number validation
     * @param {object} liquidContext
     */
    CPINumberValidation: function (liquidContext) {
        if (!liquidContext)
            return;
        var CPINumber = $("#cat_cpinumber").length > 0 ? $("#cat_cpinumber").val() : null;
        if (CPINumber && !(/^[0-9]{1,7}$/.test(+CPINumber))) {
            let cpinumberlength = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_cpi_number_lenght");
            alert(cpinumberlength);
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.CPINumberOnChange(liquidContext);
        }
    },
    /**
     * Function to pull time picker to side on date fields
     * @param {object} liquidContext
     * @param {string} entityName
     */
    PullTimePicker: function (liquidContext, entityName) {
        // Setting the format for Date time Picker and Time selector on side by side location.
        var dtp = $('input.datetime.form-control[data-type="datetime"]');
        dtp.filter(function () {
            return this.classList[2] == null;
        }).each(function (i) {
            var dateTimePicker = $(this).next().data("DateTimePicker");
            dateTimePicker.options({
                sideBySide: true,
                format: "M/D/YYYY h:mm:ss A",
            });
        });
        // Adding step value of 30 mins to only Incident Date Time field
        var eventTypeValue = $("#cat_eventtype").length > 0 && $("#cat_eventtype").val() ? parseInt($("#cat_eventtype").val()) : null;
        var inquiryTypeValue = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : null;
        if (eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value) {
            if (inquiryTypeValue.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT) {
                var dateTimePicker = $('input#cat_incidentdate.datetime.form-control').length > 0 ? $('input#cat_incidentdate.datetime.form-control').next().data("DateTimePicker") : null;
                if (dateTimePicker) {
                    dateTimePicker.options({
                        sideBySide: true,
                        format: "M/D/YYYY h:mm:ss A",
                        stepping: 30,
                    });
                }
            }
        }
        //Adding step value of 30 mins to Out of office Date Time fields
        if (entityName === "cat_outofoffice") {
            var oooDtp = ['input#cat_startdate.datetime.form-control', 'input#cat_returndate.datetime.form-control'];
            for (let i = 0; i < oooDtp.length; i++) {
                let oooDatetime = $(oooDtp[i]).length > 0 ? $(oooDtp[i]).next().data("DateTimePicker") : null;
                if (oooDatetime) {
                    oooDatetime.options({
                        sideBySide: true,
                        format: "M/D/YYYY h:mm:ss A",
                        stepping: 30,
                    });
                }
            }
        }

        //Setting date time fields based on contact timezone
        CAT.DSRM.ServiceRequestCommon.SetContactTimezoneBasedDateTimeFields(liquidContext);

        // Onchange of DateTime Picker Description field add dirty class to it's corresponding input field.
        $(".datetimepicker").on("dp.change", function () {
            let element = $(this);
            console.log(element.children().attr("id"));
            console.log(element.prev().attr("id"));
            if (element.children().attr("id").startsWith(element.prev().attr("id")) && element.children().attr("id").endsWith("_datepicker_description")) {
                $(element.prev()).addClass("dirty");
            }
        })
    },
    /**
     * Function to render expand and collapse buttons on tab
     * @param {object} liquidContext
     */
    RenderCollapsibleTab: function (liquidContext) {
        var tabTitles = $("h2.tab-title") && $("h2.tab-title").length > 0 ? $("h2.tab-title") : [];
        for (var i = 0; i < tabTitles.length; i++) {
            var tabTitle = $(tabTitles[i]).text();
            var tabDataName = $(tabTitles[i]).next().attr("data-name");
            var expandId = "expand" + tabDataName.replace(/\s/g, '');
            var collapseId = "collapse" + tabDataName.replace(/\s/g, '');
            CAT.DSRM.ServiceRequestCommon.RenderExpandCollapseButton(expandId, collapseId, tabTitle, liquidContext);
        }
    },
    /**
     * Function to render expand and collapse buttons on tab and their onclick functions
     * @param {string} expandId
     * @param {string} collapseId
     * @param {string} tabTitle
     * @param {object} liquidContext
     */
    RenderExpandCollapseButton: function (expandId, collapseId, tabTitle, liquidContext) {
        if (!expandId || !collapseId || !tabTitle)
            return;
        //escaping meta-characters
        tabTitle = CAT.DSRM.ServiceRequestCommon.EscapeHtmlAttr(tabTitle);
        expandId = CAT.DSRM.ServiceRequestCommon.EscapeHtmlAttr(expandId);
        collapseId = CAT.DSRM.ServiceRequestCommon.EscapeHtmlAttr(collapseId);

        $('h2:contains("' + tabTitle + '")').html("<span id='" + collapseId + "' style='display: block;' class='bg-overflow-ellipsis' title='" + tabTitle + "'><span class='bi bi-caret-down-fill'></span><span>" + tabTitle + "</span></span><span id='" + expandId + "' style='display: block;' class='bg-overflow-ellipsis' title='" + tabTitle + "'><span class='bi bi-caret-right-fill'></span><span>" + tabTitle + "</span></span>");

        CAT.DSRM.ServiceRequestCommon.ExpandOnClick(expandId, liquidContext);
        CAT.DSRM.ServiceRequestCommon.CollapseOnClick(collapseId, liquidContext);
        //Collapse tab on load
        $('#' + collapseId).length > 0 ? $('#' + collapseId).click() : null;
    },
    /**
     * escaping meta-characters
     * @param {string} str
     */
    EscapeHtmlAttr: function (str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    },
    /**
     * Function to register on click of expand button
     * @param {string} expandId
     * @param {object} liquidContext
     */
    ExpandOnClick: function (expandId, liquidContext) {
        if (!expandId || $('#' + expandId).length < 0)
            return;
        // Show collapse icon, hide expand icon and show respective tab on click of expand icon
        $('#' + expandId).click(function (e) {
            var tabDataName = e.currentTarget.parentElement.nextElementSibling.attributes["data-name"].nodeValue;
            CAT.DSRM.ServiceRequestCommon.OnClickExpandCollapse(tabDataName, false, liquidContext);
        });
    },
    /**
     * Function to register on click of colapse button
     * @param {string} collapseId
     * @param {object} liquidContext
     */
    CollapseOnClick: function (collapseId, liquidContext) {
        if (!collapseId || $('#' + collapseId).length < 0)
            return;
        // Show expand icon, hide collapse icon and show respective tab on click of collapse icon
        $('#' + collapseId).click(function (e) {
            var tabDataName = e.currentTarget.parentElement.nextElementSibling.attributes["data-name"].nodeValue;
            CAT.DSRM.ServiceRequestCommon.OnClickExpandCollapse(tabDataName, true, liquidContext);
        });
    },
    /**
     * Click function to set expand or collapse of tab
     * @param {string} tabDataName
     * @param {boolean} setCollapse
     * @param {object} liquidContext
     */
    OnClickExpandCollapse: function (tabDataName, setCollapse, liquidContext) {
        if (!tabDataName)
            return;
        var expandId = "expand" + tabDataName.replace(/\s/g, '');
        var collapseId = "collapse" + tabDataName.replace(/\s/g, '');
        if ($("div[data-name='" + tabDataName + "']").length > 0 && setCollapse) {
            $('#' + expandId).length > 0 ? $('#' + expandId).show() : null;
            $('#' + collapseId).length > 0 ? $('#' + collapseId).hide() : null;
            $("div[data-name='" + tabDataName + "']").hide('fast');
        }
        else if ($("div[data-name='" + tabDataName + "']").length > 0 && !setCollapse) {
            $('#' + collapseId).length > 0 ? $('#' + collapseId).show() : null;
            $('#' + expandId).length > 0 ? $('#' + expandId).hide() : null;
            $("div[data-name='" + tabDataName + "']").show('fast', function () { CAT.DSRM.ServiceRequestCommon.HideShowCallBack(tabDataName, liquidContext) });
        }
    },
    /**
     * @param {string} tabDataName
     * @param {object} liquidContext
     */
    HideShowCallBack: function (tabDataName, liquidContext) {
        if (!tabDataName)
            return;
        if ($("div[data-name='" + tabDataName + "']").find('iframe').length > 0) {
            var iframes = $("div[data-name='" + tabDataName + "']").find('iframe');
            for (var i = 0; i < iframes.length; i++) {
                var iframeId = iframes[i].id.length > 0 ? iframes[i].id : null;
                //Excluding Quick View Form IFrames.
                if (iframeId) {
                    CAT.DSRM.ServiceRequestCommon.SetHeightOfInlineFrames(iframeId);
                }
            }
        }
        if (!(liquidContext && liquidContext?.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && liquidContext?.eventTypeLogicalName === "cat_dealercpi")) {
            $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
        }
    },
    /**
     * Function to Set height of inline frames
     * @param {any} iframeId
     */
    SetHeightOfInlineFrames: function (iframeId) {
        $("#" + iframeId).ready(function () {
            $("#" + iframeId).height($("#" + iframeId).contents().find("body").height());
        });
    },
    /**
     * Function to call expand command by code
     * @param {string} tabName
     */
    ExpandCommand: function (tabName) {
        if (!tabName)
            return;
        var expandId = tabName.length > 0 ? "expand" + tabName.replace(/\s/g, '') : null;
        $("#" + expandId).length > 0 ? $("#" + expandId).click() : null;
    },
    /**
     * Function to call collapse command by code
     * @param {string} tabName
     */
    CollapseCommand: function (tabName) {
        if (!tabName)
            return;
        var collapseId = tabName.length > 0 ? "collapse" + tabName.replace(/\s/g, '') : null;
        $("#" + collapseId).length > 0 ? $("#" + collapseId).click() : null;
    },
    /**
     * HideShow ribbon Button CreateDppm
     * @param {object} liquidContext
     */
    HideShowCreateDppm: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var dealerAccess = liquidContext.dealerAccess;
        var dealerPPMAccess = liquidContext.dealerPPMAccess;
        var restrictedContact = liquidContext.restrictedContact;

        CAT.DSRM.ServiceRequestCommon.SetVisible($("#cat_ribbon_create_dppm_button"), false);
        $("#cat_ribbon_create_dppm_button").prop('disabled', true);

        if (restrictedContact != CAT.DSRM.ServiceRequestCommon.RESTRICTED_CONTACT_YES.value) {
            if (dealerPPMAccess == CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_CREATE_EDIT || dealerPPMAccess == CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_LIMITED_EDIT) {
                if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
                    CAT.DSRM.ServiceRequestCommon.SetVisible($("#cat_ribbon_create_dppm_button"), true);
                    $("#cat_ribbon_create_dppm_button").prop('disabled', false);
                }
            }
        }
    },
    /**
     * Create Delaer PPM SR on click function
     * @param {object} liquidContext
     */
    CreateDPPMSROnClick: function (liquidContext) {
        $("#cat_ribbon_create_dppm_button").length > 0 ? $("#cat_ribbon_create_dppm_button").click(function () {
            CAT.DSRM.ServiceRequestCommon.CreateDealerPPMSR(liquidContext);
        }) : null;
    },
    /**
     * Create Dealer PPM functionality
     * @param {object} liquidContext
     */
    CreateDealerPPMSR: function (liquidContext) {
        if (!liquidContext)
            return;
        var contactId = liquidContext.loggedinContactId;
        var recordId = liquidContext.eventTypeRecordId;
        var isPortalLogin = true;
        //Reterive the entity name 
        var entityName = liquidContext.eventTypeLogicalName;
        var createDppm = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_create_dealerppm");
        if (confirm(createDppm) == true) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
            var copySRobject = { eventType: entityName, recordId: recordId, contactId: contactId, portalLogin: isPortalLogin };
            CAT.DSRM.WebApi.CallAction('cat_createdealerppm',
                copySRobject,
                function (result) {
                    var srID = result.createdRecordId;
                    var srNumber = result.srNumber;
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();

                    var CreateDppmSR = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_open_created_dealerppm_sr")?.replace(/[0]/, srNumber + "\n");
                    if (confirm(CreateDppmSR) == true) {
                        window.open('/cat_dealercpi/cat_dealercpi_edit/?id=' + srID, '_blank');
                    }
                }, function (e) {
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                    alert(e.message)
                }, true);
        }
    },
    /**
     * HideShow ribbon Button CopySR
     * @param {object} liquidContext
     */
    HideShowCopySR: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var restrictedContact = liquidContext.restrictedContact;
        var loggedDealerCode = liquidContext.dealerCode;
        var myDealershipView = liquidContext.myDealershipView;
        var eventType = parseInt(liquidContext.eventType);
        var dealerCode = $("#cat_dealercode").length > 0 ? $("#cat_dealercode").val() : null;
        var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
        var lookuptextvalue = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : null;
        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_sr_button"), false);
        $("#page_ribbon_copy_sr_button").length > 0 ? $("#page_ribbon_copy_sr_button").prop('disabled', true) : null;

        if (liquidContext.stateCode && liquidContext.stateCode === CAT.DSRM.ServiceRequestCommon.INACTIVE)
            return;

        if (restrictedContact != CAT.DSRM.ServiceRequestCommon.RESTRICTED_CONTACT_YES.value) {
            if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
                if (eventType == CAT.DSRM.ServiceRequestCommon.EVENT_DEALERPPM.value) {
                    CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_sr_button"), true);
                    $("#page_ribbon_copy_sr_button").prop('disabled', false);
                } else if ((myDealershipView == "true" && inDealership) || (myDealershipView == "false" && loggedDealerCode === dealerCode)) {
                    if (eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value && (lookuptextvalue.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT || lookuptextvalue.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_DSNINCIDENT)) {
                        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_sr_button"), false);
                        $("#page_ribbon_copy_sr_button").prop('disabled', true);
                    } else {
                        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_sr_button"), true);
                        $("#page_ribbon_copy_sr_button").prop('disabled', false);
                    }
                }
            }
        }
    },
    /**
     * Create Copy SR on click function
     * @param {object} liquidContext
     */
    CopySROnClick: function (liquidContext) {
        $("#page_ribbon_copy_sr_button").length > 0 ? $("#page_ribbon_copy_sr_button").click(function () {
            CAT.DSRM.ServiceRequestCommon.CreateCopySR(liquidContext);
        }) : null;
    },
    /**
     * Create Copy SR functionality
     * @param {object} liquidContext
     */
    CreateCopySR: function (liquidContext) {
        if (!liquidContext)
            return;
        var contactId = liquidContext.loggedinContactId;
        var recordId = liquidContext.eventTypeRecordId;
        var isPortalLogin = true;
        //Reterive the entity name 
        var entityName = liquidContext.eventTypeLogicalName;
        var createCopySR = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_copy_sr");
        if (confirm(createCopySR) == true) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
            var copySRobject = { eventType: entityName, recordId: recordId, contactId: contactId, portalLogin: isPortalLogin };
            CAT.DSRM.WebApi.CallAction('cat_copysr',
                copySRobject,
                function (result) {
                    var srID = result.createdRecordId;
                    var srNumber = result.srNumber;
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                    var CopySR = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_open_copied_sr")?.replace(/[0]/, srNumber + "\n");
                    if (confirm(CopySR) == true) {
                        window.open('?id=' + srID, '_blank');
                    }
                }, function (e) {
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                    alert(e.message)
                }, true);
        }
    },
    /**
* HideShow ribbon Button Copy To DSN
* @param {object} liquidContext
*/
    HideShowCopyToDSNButton: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var dsnAccess = liquidContext.loggedInContactAccess && liquidContext.loggedInContactAccess.dsnAccess ? liquidContext.loggedInContactAccess.dsnAccess : "";
        // By default disable and hide
        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_to_dsn_button"), false);
        $("#page_ribbon_copy_to_dsn_button").prop('disabled', true);

        if ((dsnAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT || liquidContext.dealerAdmin === "true") && formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_to_dsn_button"), true);
            $("#page_ribbon_copy_to_dsn_button").prop('disabled', false);
        }
    },
    /**
    * Create Copy DSN on click function for Portal
    * @param {object} liquidContext
    */
    CopyDSNOnClick: function (liquidContext) {
        $("#page_ribbon_copy_to_dsn_button").length > 0 ? $("#page_ribbon_copy_to_dsn_button").click(function () {
            var loggedInContactAccess = liquidContext.loggedInContactAccess ? liquidContext.loggedInContactAccess : null;
            if (loggedInContactAccess && loggedInContactAccess.dsnAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
                CAT.DSRM.ServiceRequestCommon.CreateCopyDSN(liquidContext);
            } else {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_dealer_contact_dsn_access"));
            }
        }) : null;
    },

    /**
     * Create Copy DSN functionality for Portal
     * @param {object} liquidContext
     */
    CreateCopyDSN: function (liquidContext) {
        if (!liquidContext)
            return;
        var contactId = liquidContext.loggedinContactId;
        var recordId = liquidContext.eventTypeRecordId;
        var isPortalLogin = true;
        var entityName = liquidContext.eventTypeLogicalName;
        var confirmationText = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_copy_dsn_sr"); // Add this snippet
        if (confirm(confirmationText) === true) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
            var copyDSNObject = {
                eventType: entityName,
                recordId: recordId,
                contactId: contactId,
                portalLogin: isPortalLogin,
                actionName: "copyDSN",
            };

            CAT.DSRM.WebApi.CallAction('cat_createsrrecord',
                copyDSNObject,
                function (result) {
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                    var srID = result.createdRecordId;
                    var srNumber = result.srNumber;
                    var openPrompt = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_open_created_dsn_sr")?.replace(/[0]/, srNumber + "\n");
                    if (confirm(openPrompt) === true) {
                        window.open('/cat_dsn/cat_dsn_edit/?id=' + srID, '_blank');
                    }
                },
                function (e) {
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                    alert(e.message);
                },
                true
            );
        }
    },
    /**
     * HideShow ribbon Button Copy To PIQ
     * @param {object} liquidContext
     */
    HideShowCopyToPIQButton: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
        var piqAccess = liquidContext.loggedInContactAccess && liquidContext.loggedInContactAccess.piqAccess ? liquidContext.loggedInContactAccess.piqAccess : "";
        // By default disable and hide
        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_to_piq_button"), false);
        $("#page_ribbon_copy_to_piq_button").prop('disabled', true);

        if (piqAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT && formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && inDealership) {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_copy_to_piq_button"), true);
            $("#page_ribbon_copy_to_piq_button").prop('disabled', false);
        }
    },
    /**
     * Create Copy PIQ on click function for Portal
     * @param {object} liquidContext
     */
    CopyPIQOnClick: async function (liquidContext) {
        $("#page_ribbon_copy_to_piq_button").length > 0 ? $("#page_ribbon_copy_to_piq_button").click(function () {
            var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
            var serviceMeterReading = $("#cat_servicemeterreading").length > 0 ? $("#cat_servicemeterreading").val() : null;
            var serialNumber = $("#cat_productserialnumber").length > 0 ? $("#cat_productserialnumber").val() : null;
            var problemDescription = $("#cat_problemdescription").length > 0 ? $("#cat_problemdescription").val() : null;
            var parentDealerCode = $("#cat_parentdealercode").length > 0 ? $("#cat_parentdealercode").val() : null;
            var dealerContactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
            var dealerContactAccess = liquidContext.dealerContactAccess ? liquidContext.dealerContactAccess : null;;
            var loggedInContact = liquidContext.loggedinContactId;
            var dealerCode = liquidContext.dealerCode ? liquidContext.dealerCode : null;
            var isValidPIQSNP = CAT.DSRM.SRValidation.IsValidPiqSnp(liquidContext, serialNumber.substring(0, 3), dealerCode, parentDealerCode);
            var maxHours = 500;
            var minLength = 3;
            if (CAT.DSRM.ServiceRequestCommon.CheckIsFormDirty(liquidContext)) {
                // Use SkipFieldsFromDirtyCheck to decide whether to show the alert or not
                let showSaveAlert = CAT.DSRM.ServiceRequestCommon.SkipFieldsFromDirtyCheck(liquidContext);
                // If the form is dirty and the alert is needed, show the alert and return
                if (showSaveAlert) {
                    alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_save_record"));
                    return;
                }
            }
            if (!inDealership) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_different_bu_contact"));
                return;
            }
            if (dealerContactId !== loggedInContact && (dealerContactAccess && dealerContactAccess != CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT)) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_dealer_contact_piq_access"));
                return;
            }
            if (!serviceMeterReading) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_servicemeterreading_required"));
                return;
            }
            else if (serviceMeterReading && serviceMeterReading > maxHours) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_greater_than_max_hours_copy_piq"));
                return;
            }
            if (!serialNumber) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_serial_number_required"));
                return;
            }
            else if (serialNumber && serialNumber.length <= minLength) {
                let serialNumberAtleast4Char = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_serial_number_atleast_4_char");
                serialNumberAtleast4Char ? alert(serialNumberAtleast4Char.replace(/[0]/, serialNumber)) : null;
                return;
            }
            if (!problemDescription) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_problemdescription_required"));
                return;
            }
            if (!isValidPIQSNP) {
                alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_serial_number_prefix_not_match"));
                return;
            }
            // All validations passed, create the copy PIQ
            CAT.DSRM.ServiceRequestCommon.CreateCopyPIQ(liquidContext)
        }) : null;
    },
    /**
     * Create Copy PIQ functionality for Portal
     * @param {object} liquidContext
     */
    CreateCopyPIQ: async function (liquidContext) {
        if (!liquidContext)
            return;
        var contactId = liquidContext.loggedinContactId;
        var recordId = liquidContext.eventTypeRecordId;
        var isPortalLogin = true;
        var entityName = liquidContext.eventTypeLogicalName;
        var confirmationText = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_copy_piq_sr"); // Add this snippet
        if (confirm(confirmationText) === true) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
            var copyDSNObject = {
                eventType: entityName,
                recordId: recordId,
                contactId: contactId,
                portalLogin: isPortalLogin,
                actionName: "copyPIQ",
            };
            let result = await new Promise((resolve, reject) => {
                CAT.DSRM.WebApi.CallAction('cat_createsrrecord',
                    copyDSNObject,
                    function (result) {
                        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                        resolve(result);
                    },
                    function (e) {
                        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                        reject(e);
                    },
                    true
                );
            });
            if (result && result.createdRecordId && result.srNumber) {
                var srID = result.createdRecordId;
                var srNumber = result.srNumber;
                var openPrompt = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_open_created_piq_sr")?.replace(/[0]/, srNumber + "\n");
                if (confirm(openPrompt) === true) {
                    window.open('/cat_piq/cat_piq_edit/?id=' + srID, '_blank');
                }
            }
        }
    },
    /**
     * Function for sanctioned users in accessing SRs from client side. 
     * @param {object} liquidContext
     */
    SanctionedContactRedirect: function (liquidContext) {
        if (!liquidContext)
            return;
        var IsSanctionReviewStatusFeatureEnabled = true;
        if (!IsSanctionReviewStatusFeatureEnabled)
            return;
        var isAccess = true;
        var restrictedContact = liquidContext.restrictedContact ? parseInt(liquidContext.restrictedContact) : null;
        if (restrictedContact && restrictedContact == CAT.DSRM.ServiceRequestCommon.RESTRICTED_CONTACT_YES.value) {
            isAccess = CAT.DSRM.ServiceRequestCommon.SanctionedContactRequirement(liquidContext);
        }
        if (!isAccess)
            window.location.href = "/";
        //window.top.close();
    },
    /**
     * Implementation Sanctioned Contact Business rule
     * @param {object} contact
     */
    SanctionedContactRequirement: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE)
            return true;
        var eventType = $("#cat_eventtype").length > 0 && $("#cat_eventtype").val() ? parseInt($("#cat_eventtype").val()) : 0;
        return CAT.DSRM.ServiceRequestCommon.AccessCheckForDealerTechnician(liquidContext, eventType);
    },
    /**
     * Sanctioned contact access check rule for Dealer and Technician users
     * @param {object} contact
     * @param {int} eventType
     */
    AccessCheckForDealerTechnician: function (liquidContext, eventType) {
        if (!liquidContext)
            return;
        var sanctionReviewStatus = $("#cat_sanctionreviewstatus").length > 0 && $("#cat_sanctionreviewstatus").val() ? parseInt($("#cat_sanctionreviewstatus").val()) : 0;
        var status = $("#cat_status").length > 0 && $("#cat_status").val() ? parseInt($("#cat_status").val()) : 0;
        if ((eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventType === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value || eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && (liquidContext.dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT || liquidContext.dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN))
            return false;
        else {
            if (status === CAT.DSRM.ServiceRequestCommon.STATUS_UNSUBMITTED.value)
                return true;
            else {
                if (sanctionReviewStatus === CAT.DSRM.ServiceRequestCommon.PROCEED_SRS.value)
                    return true;
                else
                    return false;
            }
        }
    },
    /**
     * Function on click of delete button on Subgrid
     * @param {object} liquidContext
     * @param {boolean} isSubgrid
     */
    DeleteCommand: function (liquidContext, isSubgrid) {
        if (!liquidContext)
            return;
        var successCount = 0;
        var errorCount = 0;
        var alertMessage = null;
        var isDelete = false;
        var selectedRecords = CAT.DSRM.DataTableLoad.GetSelectedRows(liquidContext);
        var deleteAlertMessage = liquidContext.deleteAlertMessage ? liquidContext.deleteAlertMessage : CAT.DSRM.ServiceRequestCommon.DeleteAlertMessage(liquidContext, selectedRecords);
        if (selectedRecords && selectedRecords.length > 0) {
            var isFormDirty = isSubgrid ? CAT.DSRM.ServiceRequestCommon.CheckIsFormDirty(liquidContext) : false;
            try {
                if (confirm(deleteAlertMessage) == true) {
                    if (isFormDirty) {
                        let saverecordalert = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_save_record");
                        alert(saverecordalert);
                        return;
                    }
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
                    for (var i = 0; i < selectedRecords.length; i++) {
                        var eventTypeLogicalName = liquidContext.eventTypeLogicalName;
                        var eventTypeId = eventTypeLogicalName + "id";
                        var deleteActionName = liquidContext.deleteActionName;
                        var entityTargetObject = {};
                        entityTargetObject[eventTypeId] = selectedRecords[i][eventTypeId];
                        entityTargetObject["@odata.type"] = "Microsoft.Dynamics.CRM." + eventTypeLogicalName;

                        var callingUserRecordObject = {};
                        callingUserRecordObject["contactid"] = liquidContext.loggedinContactId;
                        callingUserRecordObject["@odata.type"] = "Microsoft.Dynamics.CRM.contact";

                        var portalDeletionObject = {
                            EntityTarget: entityTargetObject,
                            CallingUserRecord: callingUserRecordObject
                        };

                        CAT.DSRM.WebApi.CallAction(deleteActionName,
                            portalDeletionObject,
                            function (result) {
                                successCount++;
                                if (result.IsRestrictDelete) {
                                    alertMessage = result.MessageRestrictDelete;
                                }
                                else {
                                    isDelete = true;
                                }
                                if ((successCount + errorCount) == selectedRecords.length) {
                                    if (isDelete && alertMessage == null) {
                                        if (window.location.href.contains("isAssociatedView")) {
                                            CAT.DSRM.ServiceRequestCommon.AssociatedViewRefresh(liquidContext);
                                        }
                                        else if (window.location.href.contains("cat_advancedfindlite")) {
                                            let table = $('#divAdvancedFindLiteResultGrid') && $('#divAdvancedFindLiteResultGrid').length > 0 ? $('#divAdvancedFindLiteResultGrid').DataTable() : null;
                                            if (table && table.button('refresh:name') && table.button('refresh:name').length > 0) {
                                                table.button('refresh:name').trigger();
                                            }
                                        }
                                        else
                                            window.location.reload(true);
                                    }
                                    else if (isDelete && alertMessage != null) {
                                        alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_restrict_delete"));
                                        if (window.location.href.contains("isAssociatedView")) {
                                            CAT.DSRM.ServiceRequestCommon.AssociatedViewRefresh(liquidContext);
                                        }
                                        else if (window.location.href.contains("cat_advancedfindlite")) {
                                            let table = $('#divAdvancedFindLiteResultGrid') && $('#divAdvancedFindLiteResultGrid').length > 0 ? $('#divAdvancedFindLiteResultGrid').DataTable() : null;
                                            if (table && table.button('refresh:name') && table.button('refresh:name').length > 0) {
                                                table.button('refresh:name').trigger();
                                            }
                                        }
                                        else
                                            window.location.reload(true);
                                    }
                                    else {
                                        alert(alertMessage);
                                    }
                                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                                }
                            },
                            function (e) {
                                errorCount++;
                                if ((successCount + errorCount) == selectedRecords.length)
                                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                                console.log(e);
                            }, true);
                    }
                }
            }
            catch (e) {
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
            }
        } else {
            let selectrecordalert = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_select_record");
            alert(selectrecordalert);
            return;
        }
    },
    /**
    * onclick handler for change contact button on list view
    * @param {any} liquidContext
    */
    ListChangeContactCommand: async function (liquidContext) {
        if (!liquidContext)
            return;
        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
        var loggedInContact = liquidContext.loggedinContactId;
        var dealerAccess = liquidContext.dealerAccess;
        var dealerAdmin = liquidContext.dealerAdmin;
        var eligibleRecordsForChangeContact = [];
        try {
            var selectedRecords = CAT.DSRM.DataTableLoad.GetSelectedRows(liquidContext);
            if (selectedRecords && selectedRecords.length > 0) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    var selectedRecord = selectedRecords[i];
                    var dealerContactOnSR = "";
                    var statusVal = "";
                    var fetchDealerCwsId = false;
                    //for parts tech check for SR dealer contact cwsid or else fetch
                    if (selectedRecord.cat_eventtype === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value && liquidContext.childDealerCodes) {
                        if (!selectedRecord.cat_dealercontactcwsid)
                            fetchDealerCwsId = true;

                    }
                    if (selectedRecord._cat_customerid_value && selectedRecord.cat_status && selectedRecord.cat_eventtype && !fetchDealerCwsId) {
                        dealerContactOnSR = selectedRecord._cat_customerid_value;
                        statusVal = selectedRecord.cat_status;
                    } else {
                        let resultEntityObj = await CAT.DSRM.ServiceRequestCommon.GetSRDetails(liquidContext, selectedRecord);
                        if (resultEntityObj) {
                            dealerContactOnSR = resultEntityObj._cat_customerid_value ? resultEntityObj._cat_customerid_value : "";
                            statusVal = resultEntityObj.cat_status ? resultEntityObj.cat_status : "";
                            selectedRecord.cat_eventtype = resultEntityObj.cat_eventtype ? resultEntityObj.cat_eventtype : "";
                            selectedRecord.cat_dealercontactcwsid = resultEntityObj.cat_dealercontactcwsid ? resultEntityObj.cat_dealercontactcwsid : "";
                        }
                    }
                    if (dealerContactOnSR && statusVal) {
                        var isEligible = false;
                        var status = parseInt(statusVal);
                        //checking for Eligibility
                        if (dealerContactOnSR !== loggedInContact
                            && status !== CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value && status !== CAT.DSRM.ServiceRequestCommon.STATUS_DEALERCLOSED.value && status !== CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value
                            && (dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_CREATE_EDIT || dealerAccess === CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_LIMITED_EDIT)) {
                            isEligible = true;
                        }
                        else {
                            isEligible = false;
                        }
                        if (isEligible) {
                            eligibleRecordsForChangeContact.push(selectedRecord);
                        } else {
                            CAT.DSRM.ServiceRequestCommon.NOT_ELIGIBLE_CHANGECONTACT.push(selectedRecord.cat_ticketnumber);
                        }
                    }
                }

                if (eligibleRecordsForChangeContact.length > 0) {
                    CAT.DSRM.ServiceRequestCommon.ListRibbonNotePrompt(liquidContext, eligibleRecordsForChangeContact)
                } else {
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                    alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_not_eligible_for_changecontact_action"));
                }
            } else {
                let selectrecordalert = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_select_record");
                alert(selectrecordalert);
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                return;
            }
        } catch (e) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
        }
    },
    /**
     * Function for making Note Prompt Visible for List view Ribbon Buttons
     * @param {object} liquidContext
     * @param {Array} recordsArr
     */
    ListRibbonNotePrompt: function (liquidContext, recordsArr) {
        if (!liquidContext)
            return;
        try {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
            $("#cat-modal-changecontactdialog").length > 0 ? $("#cat-modal-changecontactdialog").modal() : null;
            var actionName = CAT.DSRM.ServiceRequestCommon.ACTION_CHANGECONTACT_LIST_RIBBON;
            //Click Add Note Button
            $("#modal_inline_savenote_button").click(async function () {
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
                var note = $("#txtChangecontact").length > 0 ? $("#txtChangecontact").val() : null;
                if (note != null && note != "") {
                    $("#cat-modal-changecontactdialog").length > 0 ? $("#cat-modal-changecontactdialog").modal('hide') : null;
                    CAT.DSRM.ServiceRequestCommon.TotalChangeContactRecords = recordsArr.length;
                    console.log("recordsArr.length: " + recordsArr.length);
                    CAT.DSRM.ServiceRequestCommon.CompletedChangeContactRecords = 0;
                    CAT.DSRM.ServiceRequestCommon.ChangeContactRecords = recordsArr;
                    for (var i = 0; i < recordsArr.length; i++) {
                        var record = recordsArr[i];
                        CAT.DSRM.ServiceRequestCommon.ChangeContactRecordCurrentIndex = i;
                        await CAT.DSRM.ServiceRequestCommon.UpdateDealerContact(liquidContext, actionName, note, record).then(responce => { }).catch(
                            responce => {
                                //SR no to log the error
                                record && record.cat_ticketnumber ? CAT.DSRM.ServiceRequestCommon.ERROR_CHANGECONTACT.push(record.cat_ticketnumber) : null;
                                //if we got error on last record
                                if ((CAT.DSRM.ServiceRequestCommon.CompletedChangeContactRecords + CAT.DSRM.ServiceRequestCommon.ERROR_CHANGECONTACT.length) === CAT.DSRM.ServiceRequestCommon.TotalChangeContactRecords) {
                                    CAT.DSRM.ServiceRequestCommon.ChnageContactFinalAlert(liquidContext);
                                    window.location.reload();
                                }
                            });
                    }
                } else {
                    alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_enter_note"));
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                }
            });
        } catch (e) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
        }
    },
    /**
    * Function to update dealer contact
    * @param {object} liquidContext
    * @param {string} actionName
    * @param {string} note
    * @param {object} srRecordObj
    */
    UpdateDealerContact: function (liquidContext, actionName, note, srRecordObj) {
        var recordId = null;
        var statusVal = null;
        var srEventType = null;
        var srCwsId = null;
        var selectEntityName = (liquidContext.eventTypeLogicalName === "cat_globalwarranty") ? "cat_globalwarranties" : liquidContext.eventTypeLogicalName + "s";
        if (srRecordObj) {
            recordId = srRecordObj[liquidContext.eventTypeLogicalName + "id"];
            statusVal = srRecordObj.cat_status ? parseInt(srRecordObj.cat_status) : null;
            recordId ? liquidContext.eventTypeRecordId = recordId : null;
            srEventType = srRecordObj.cat_eventtype ? srRecordObj.cat_eventtype : null;
            srCwsId = srRecordObj.cat_dealercontactcwsid ? srRecordObj.cat_dealercontactcwsid : null;
        } else {
            var status = $("#cat_status").length > 0 ? $("#cat_status").val() : null;
            statusVal = status ? parseInt(status) : null;
        }
        //populate related information
        var recordData = {};
        if (liquidContext.loggedinContactId) {
            recordData["cat_customerid@odata.bind"] = "/contacts(" + liquidContext.loggedinContactId.replace(/[{}]/g, "") + ")";
            recordData["cat_modifiedbycontactid@odata.bind"] = "/contacts(" + liquidContext.loggedinContactId.replace(/[{}]/g, "") + ")";
        }
        var setOwner = false;
        if (statusVal != CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value && statusVal != CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value && statusVal != CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value) {
            setOwner = true;
        }
        if (liquidContext.userId) {
            if (setOwner) {
                recordData["ownerid@odata.bind"] = "/systemusers(" + liquidContext.userId.replace(/[{}]/g, "") + ")";
                recordData["cat_ownercontactid@odata.bind"] = "/contacts(" + liquidContext.loggedinContactId.replace(/[{}]/g, "") + ")";
            }
            recordData["cat_contactuserid@odata.bind"] = "/systemusers(" + liquidContext.userId.replace(/[{}]/g, "") + ")";
        } else {
            if (setOwner) {
                recordData["ownerid@odata.bind"] = "/systemusers(" + CAT.DSRM.ServiceRequestCommon.APPLICATION_USER_ID + ")";
                recordData["cat_ownercontactid@odata.bind"] = "/contacts(" + liquidContext.loggedinContactId.replace(/[{}]/g, "") + ")";
            }
            recordData["cat_contactuserid@odata.bind"] = null;
        }
        if (liquidContext.accountId) {
            recordData["cat_accountid@odata.bind"] = "/accounts(" + liquidContext.accountId.replace(/[{}]/g, "") + ")";
        }
        if (liquidContext.cwsId) {
            var eventType = null;
            var cwsId = null;
            //if CWS ID field contains data then do not override the dealercontactcwsid field for parts tech
            if (liquidContext.eventType) {
                eventType = liquidContext.eventType;
            } else if (srEventType) {
                eventType = srEventType;
            }
            if (eventType === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value && liquidContext.childDealerCodes) {
                cwsId = $("#cat_cwsid").length > 0 ? $("#cat_cwsid").val() : srCwsId ? srCwsId : null;
            }
            // if cwsid is null then assign it from liquidContext cwsid from loggedincontact
            recordData.cat_dealercontactcwsid = cwsId ? cwsId : liquidContext.cwsId;
        }
        recordData.cat_preferredemailaddress = liquidContext.email ? liquidContext.email : null;
        recordData.cat_preferredphonenumber = liquidContext.phoneNumber ? liquidContext.phoneNumber : null;
        recordData.cat_mobilephonenumber = liquidContext.mobilePhone ? liquidContext.mobilePhone : null;
        recordData.cat_dealercode = liquidContext.dealerCode ? liquidContext.dealerCode : null;
        if (liquidContext.parentDealerId) {
            recordData["cat_parentaccountid@odata.bind"] = "/accounts(" + liquidContext.parentDealerId.replace(/[{}]/g, "") + ")";
        }
        // ISO 8601 Date time Format to support Dataverse API
        let currentMoment = moment();
        recordData.cat_modifiedonportal = currentMoment.toISOString();
        //wraping it in promise so we can get exact SR no where we got the error
        return new Promise((resolve, reject) => {
            //success callback function of API call
            var successCallback = function (result) {
                if (typeof (result) === "string" && result.toLowerCase().contains("error")) {
                    reject(result, recordData);
                    console.log("Record update Error: " + result);
                } else {
                    console.log("Record update Successfully" + result);
                    resolve(result, recordData);
                    CAT.DSRM.ServiceRequestCommon.SUCCSESS_CHANGECONTACT += 1;
                    liquidContext.eventTypeRecordId = result;
                    //create SR note for change contact
                    CAT.DSRM.ServiceRequestCommon.CreateSRNote(liquidContext, note, "cat_servicerequestnote", actionName);
                }
            };
            //error callback function of API call
            var errorCallback = function (e) {
                reject(e, recordData);
                console.log("Record update Error: " + e);
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
            };
            CAT.DSRM.WebApi.UpdateRecord(selectEntityName, liquidContext.eventTypeRecordId, recordData, successCallback, errorCallback, true, null);

        });
    },
    /**
    * Function to Alert about failed records for change contact
    * @param {object} liquidContext
    */
    ChnageContactFinalAlert: function (liquidContext) {
        var finalAlertMessage = "";
        var allCompleted = true;
        if (CAT.DSRM.ServiceRequestCommon.ERROR_CHANGECONTACT.length > 0) {
            finalAlertMessage += CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_encountered_error") + `\n` + CAT.DSRM.ServiceRequestCommon.ERROR_CHANGECONTACT.join("\n") + `\n`;
            allCompleted = false;
        }
        if (CAT.DSRM.ServiceRequestCommon.NOT_ELIGIBLE_CHANGECONTACT.length > 0) {
            finalAlertMessage += CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_srs_not_eligible") + `\n` + CAT.DSRM.ServiceRequestCommon.NOT_ELIGIBLE_CHANGECONTACT.join("\n") + `\n`;
            allCompleted = false;
        }
        if (CAT.DSRM.ServiceRequestCommon.SUCCSESS_CHANGECONTACT > 0) {
            if (allCompleted) {
                finalAlertMessage += CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_successfully_changed") + ` SRs\n`;
            } else if (!allCompleted) {
                finalAlertMessage += CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_successfully_changed") + ` other SRs\n`;
            }
        } else {
            finalAlertMessage += CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_change_contact") + `\n`;
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
        }
        finalAlertMessage ? alert(finalAlertMessage) : null;
    },
    /**
    * Function to retrive SR details
    * @param {object} liquidContext
    * @param {object} recordObj
    */
    GetSRDetails: async function (liquidContext, recordObj) {
        if (!recordObj && !liquidContext)
            return;
        let resultEntityObj = null;
        if (liquidContext.eventTypeLogicalName) {
            let entityLogicalName = liquidContext.eventTypeLogicalName === "cat_globalwarranty" ? "cat_globalwarranties" : liquidContext.eventTypeLogicalName + "s";
            let entityRecordId = recordObj[liquidContext.eventTypeLogicalName + "id"];
            if (entityRecordId) {
                let selectEntityQuery = entityLogicalName + "(" + entityRecordId.replace(/[{}]/g, "") + ")?$select=_cat_customerid_value,cat_status,cat_eventtype,cat_dealercontactcwsid";
                resultEntityObj = await CAT.DSRM.WebApi.RetrieveRecords(selectEntityQuery);
            }
        }
        return resultEntityObj;
    },
    /**
    * Function to associate Change Contact Command on views
    * @param {object} liquidContext
    */
    AssociateChangeContactCommand: function (liquidContext) {
        if (!liquidContext)
            return;

        if ($("#page_ribbon_list_change_contact_button").length > 0 && liquidContext.loggedinContactId) {
            if (liquidContext.dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT || liquidContext.dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN) {
                $("#page_ribbon_list_change_contact_button").hide();
                return;
            }
            $("#page_ribbon_list_change_contact_button").prop('disabled', false);
            $("#page_ribbon_list_change_contact_button").click(async function () {
                await CAT.DSRM.ServiceRequestCommon.ListChangeContactCommand(liquidContext);
            });
        }
    },
    /**
     * Associted view refresh on delete
     * @param {object} liquidContext
     */
    AssociatedViewRefresh: function (liquidContext) {
        if (!liquidContext)
            return;
        var entityName = liquidContext.eventTypeDisplayName ? liquidContext.eventTypeDisplayName.replace(/\s/g, '') : null;
        if (entityName) {
            var queryString = "&is" + entityName + "Updated=true"
            var url = window.location.href + queryString;
            window.location.replace(url);
        }
    },
    /**
     * Function on click of delete button from form
     * @param {object} liquidContext
     */
    DeleteButtonOnClick: function (liquidContext) {
        if (!liquidContext)
            return;

        try {
            var deleteAlertMessage = liquidContext.deleteAlertMessage ? liquidContext.deleteAlertMessage : CAT.DSRM.ServiceRequestCommon.DeleteAlertMessage(liquidContext, 1);
            if (window.confirm(deleteAlertMessage)) {
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
                var eventTypeLogicalName = liquidContext.eventTypeLogicalName;
                var eventTypeId = eventTypeLogicalName + "id";
                var deleteActionName = liquidContext.deleteActionName;
                var entityTargetObject = {};
                entityTargetObject[eventTypeId] = liquidContext.relatedRecordId ? liquidContext.relatedRecordId : liquidContext.eventTypeRecordId ? liquidContext.eventTypeRecordId : null;
                entityTargetObject["@odata.type"] = "Microsoft.Dynamics.CRM." + eventTypeLogicalName;

                var callingUserRecordObject = {};
                callingUserRecordObject["contactid"] = liquidContext.loggedinContactId;
                callingUserRecordObject["@odata.type"] = "Microsoft.Dynamics.CRM.contact";
                var portalDeletionObject = {
                    EntityTarget: entityTargetObject,
                    CallingUserRecord: callingUserRecordObject
                };

                CAT.DSRM.WebApi.CallAction(deleteActionName,
                    portalDeletionObject,
                    function (result) {
                        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                        if (result.IsRestrictDelete) {
                            alert(result.MessageRestrictDelete);
                        }
                        else {
                            $("#page_close_button").click();
                        }
                    },
                    function (e) {
                        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                        console.log(e);
                    }, true);
            }
        } catch (e) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
        }
    },
    /**
     * Function returning Delete alert message 
     * @param {object} liquidContext
     * @param {int} selectedRecords
     */
    DeleteAlertMessage: function (liquidContext, selectedRecords) {
        if (!liquidContext)
            return;
        var entityDisplayName = liquidContext.eventTypeDisplayName ? selectedRecords.length > 1 ? liquidContext.eventTypeDisplayName + "s" : liquidContext.eventTypeDisplayName : liquidContext.evenTypeDisplay ? selectedRecords.length > 1 ? liquidContext.evenTypeDisplay + "s" : liquidContext.evenTypeDisplay : null;
        let deleteMessage = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_delete_message");
        return deleteMessage ? deleteMessage.replace(/[0]/, entityDisplayName) : "";
    },
    /**
     * Function to retrive conttent snippet stored in snippetContainer div 
     * @param {string} snippetName
     */
    GetGlobalSnippetValueById: function (snippetName) {
        if (!snippetName)
            return;
        snippetName = "data-" + snippetName;
        let snippetContainer = parent.document.getElementById("snippetContainer") ? parent.document.getElementById("snippetContainer") : document.getElementById("snippetContainer");
        let snippetValue = snippetContainer ? snippetContainer.getAttribute(snippetName) : null;
        return snippetValue ? snippetValue.includes("\\n") ? snippetValue.replaceAll("\\n", "\n") : snippetValue : "";
    },
    /**
     * Function to associate delete commond on associated views
     * @param {object} liquidContext
     */
    AssociatedViewDeleteCommand: function (liquidContext) {
        if (!liquidContext)
            return;
        var loggedinContactId = typeof liquidContext.loggedinContactId !== "undefined" ? liquidContext.loggedinContactId : null;
        var deleteActionName = typeof liquidContext.deleteActionName !== "undefined" ? liquidContext.deleteActionName : null;
        if (deleteActionName && loggedinContactId) {
            if ($("#page_ribbon_delete_button").length > 0) {
                $("#page_ribbon_delete_button").off('click').on('click', function () {
                    CAT.DSRM.ServiceRequestCommon.DeleteCommand(liquidContext, false);
                });
            }
        }
    },
    /**
     * Function use to show/hide upload attachment ribbon button
     * @param {object} liquidContext
     */
    ShowHideUploadAttachmentRibbon: function (liquidContext) {
        if (!liquidContext)
            return;

        var isReadAccess = CAT.DSRM.ServiceRequestCommon.EventTypeAccessCheck(liquidContext.eventTypeLogicalName, liquidContext);
        if ($("#uploadAttachment").length > 0 && !isReadAccess) {
            $("#uploadAttachment").show();
        } else {
            $("#uploadAttachment").hide();
        }
        if ($("#uploadExternalAttachment").length > 0 && !isReadAccess) {
            $("#uploadExternalAttachment").show();
        } else {
            $("#uploadExternalAttachment").hide();
        }
    },
    /**
     * function hides scroller and right side vertical line from quick view form 
     * @param {object} liquidContext
     */
    HideScrollbarQuickViewForm: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext && liquidContext.formType && liquidContext.formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE) {
            if ($('iframe[data-lookup-element="cat_ownercontactid"]').length > 0) {
                $('iframe[data-lookup-element="cat_ownercontactid"]').on("load", function () {
                    if ($('iframe[data-lookup-element="cat_ownercontactid"]').contents().find('body').length > 0) {
                        $('iframe[data-lookup-element="cat_ownercontactid"]').contents().find('body').css("overflow", "d-none");
                        $('iframe[data-lookup-element="cat_ownercontactid"]').css("max-height", "70px");
                        //Removed placeholder from owner phone number if respective owner contact has null in regional phone number
                        if ($('iframe[data-lookup-element="cat_ownercontactid"]').contents().find('#address1_telephone2').length > 0
                            && $('iframe[data-lookup-element="cat_ownercontactid"]').contents().find('#address1_telephone2').val() == '') {
                            $('iframe[data-lookup-element="cat_ownercontactid"]').contents().find('#address1_telephone2').val('-');
                        }
                    }
                });
            }
            if ($('iframe[data-lookup-element="cat_assigneeid"]').length > 0) {
                $('iframe[data-lookup-element="cat_assigneeid"]').on("load", function () {
                    if ($('iframe[data-lookup-element="cat_assigneeid"]').contents().find('body').length > 0) {
                        $('iframe[data-lookup-element="cat_assigneeid"]').contents().find('body').css("overflow", "d-none");
                        //$('iframe[data-lookup-element="cat_assigneeid"]').css("max-height", "70px");
                    }
                });
            }
            //Removed right side vertical line fron quick view form
            $(".crmquickform-cell") ? $(".crmquickform-cell").css("border-end", "none") : null;
        }
    },
    /**
     * Function Create Duplicate FieldHtml
     * @param {object} liquidContext
     * @param {string} fieldLogicalNameToBeDuplicate
     * @param {string} fieldType
     * @param {string} placeHolderFieldLogicalName
     * @param {string} count
     * @param {string} stringfield
     * @returns
     */
    CreateDuplicateFieldHtml: function (liquidContext, fieldLogicalNameToBeDuplicate, fieldType, placeHolderFieldLogicalName, count, stringfield, displayNameOfDuplicateField) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE && liquidContext.dealerAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT && liquidContext.dealerAccess !== CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN) {
            var tdHtml = '<td colspan="1" rowspan="1" class="clearfix cell text form-control-cell"></td>';
            var labelDivHtml = '<div class="info"></div>';
            var labelHtml = '<label for="' + fieldLogicalNameToBeDuplicate + '" id="' + fieldLogicalNameToBeDuplicate + '_label' + count + '" class="field-label"></label>';
            var controlDivHtml = '<div class="control"></div>';
            var controlHtml = '<input name="' + fieldLogicalNameToBeDuplicate + '" id="' + fieldLogicalNameToBeDuplicate + count + '" value="" readonly="readonly" class="text form-control unselectable">';

            var label = $("#" + fieldLogicalNameToBeDuplicate + "_label").text();

            if (fieldType == "lookup") {
                var value = $("#" + fieldLogicalNameToBeDuplicate + "_name").val();
            }
            else if (fieldType == "dateTime") {
                var value = $("#" + fieldLogicalNameToBeDuplicate + "_datepicker_description").val();
            }
            else if (fieldType == "optionSet") {
                var value = $("#" + fieldLogicalNameToBeDuplicate + " option:selected").text();
            }
            else {
                var value = $("#" + fieldLogicalNameToBeDuplicate).val();
            }
            // Additional Display 
            if (displayNameOfDuplicateField) {
                label += " " + displayNameOfDuplicateField;
            }

            labelHtml = $(labelHtml).text(label);
            labelDivHtml = $(labelDivHtml).append(labelHtml);
            controlHtml = $(controlHtml).val(value);
            controlDivHtml = $(controlDivHtml).append(controlHtml);
            tdHtml = $(tdHtml).append(labelDivHtml).append(controlDivHtml);

            if (stringfield === "after") {
                var td = $("#" + placeHolderFieldLogicalName).closest("td").next();
                $("#" + placeHolderFieldLogicalName).closest("td").after(tdHtml);
                $(td).remove();
            }
            else if (stringfield === "before") {
                var td = $("#" + placeHolderFieldLogicalName).closest("td").prev();
                $("#" + placeHolderFieldLogicalName).closest("td").before(tdHtml);
                $(td).remove();
            }
            else if (stringfield === "above") {
                var placeHolderTd = $("#" + placeHolderFieldLogicalName).closest("td");
                var indexOfPlaceHolderTd = placeHolderTd.index();
                var prevRow = $("#" + placeHolderFieldLogicalName).closest("tr").prev();
                var TD = prevRow.find("td:eq(" + indexOfPlaceHolderTd + ")");
                var prevTd = $($(prevRow).children()[indexOfPlaceHolderTd]);
                $(prevTd).after(tdHtml);
                $(TD).remove();
            }
            else if (stringfield === "below") {
                var placeHolderTd = $("#" + placeHolderFieldLogicalName).closest("td");
                var indexOfPlaceHolderTd = placeHolderTd.index();
                var nextRow = $("#" + placeHolderFieldLogicalName).closest("tr").next();
                var TD = nextRow.find("td:eq(" + indexOfPlaceHolderTd + ")");
                var prevTd = $($(nextRow).children()[indexOfPlaceHolderTd]);
                $(prevTd).after(tdHtml);
                $(TD).remove();
            }
        }
    },
    /**
     * Function to Call Create Duplicate Fields
     */
    CreateDuplicateField: function (liquidContext) {
        if (!liquidContext)
            return;
        let inquiryTypeName = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : "";
        let brand = $('#cat_brandaffiliation').length > 0 ? $('#cat_brandaffiliation').val() : 0;
        let brandValue = parseInt(brand);
        let isMWM = inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_MWM_CG_PRODUCT_HEALTH || brandValue === CAT.DSRM.ServiceRequestCommon.BRAND_MWM;
        //Section name: Communication/Resolution
        // Workgroup/Subsytem field
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateWorkgroupSubsytemField(liquidContext);
        //Group number field
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateGroupNumberField(liquidContext);

        //Section name: Product Information/ Details Section
        //Serial Number
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateSerialNumberField(liquidContext);
        //Product Model
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateProductModelField(liquidContext);
        //Product Family
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateProductFamilyField(liquidContext);
        //Bulid Date
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateBulidDateField(liquidContext);
        //Service Meter Reading
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateServiceMeterReadingField(liquidContext);

        //Section name: Dealer Contact
        //Dealership
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateDealershipField(liquidContext);
        //Preffered Phone Number
        CAT.DSRM.ServiceRequestCommon.CreateDuplicatePrefferedPhoneNumberField(liquidContext);
        //Dealer Contact Name
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateDealerContactNameField(liquidContext);
        //Preffered Email Address
        CAT.DSRM.ServiceRequestCommon.CreateDuplicatePrefferedEmailAddressField(liquidContext);
        //Dealer CC
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateDealerCCField(liquidContext);
        //Trips to Machine Before SR was Submitted 
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateTripsToMachineBeforeSRWasSubmittedField(liquidContext);
        //Estimated Round Trip Travel Time To The Unit
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateEstimatedRoundTripTravelTimeToTheUnitField(liquidContext);
        //SIS Advanced Troubleshooting URL
        if (!isMWM) {
            CAT.DSRM.ServiceRequestCommon.CreateDuplicateSISAdvancedTroubleshootingURLField(liquidContext);
        }
    },
    /**
     * Create Duplicate Group Number field
     * @param {object} liquidContext
     */
    CreateDuplicateGroupNumberField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_groupnumber", "", "cat_partsreturnrequestnumbersib", 1, "above");
    },
    /**
     * Create Duplicate Workgroup/Subsytem field
     * @param {object} liquidContext
     */
    CreateDuplicateWorkgroupSubsytemField: function (liquidContext) {
        var displayNameOfTheField = "";
        if (liquidContext.eventType && (liquidContext.eventTypeLogicalName === "cat_dsn" || liquidContext.eventTypeLogicalName === "cat_systemtech")) {
            displayNameOfTheField = "(Editable on Input section)";
        }
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_workgroupid", "lookup", "cat_reasonforcallid", 1, "above", displayNameOfTheField);
    },
    /**Create Duplicate Serial Number field
     * @param {object} liquidContext
     */
    CreateDuplicateSerialNumberField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_productserialnumber", "", "cat_primeproductapplicationcategoryname", 1, "above");
    },
    /**Create Duplicate Product Model field
    * @param {object} liquidContext
    */
    CreateDuplicateProductModelField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_primeproductmodel", "", "cat_customer", 1, "above");
    },
    /**Create Duplicate Product Family field
     * @param {object} liquidContext
     */
    CreateDuplicateProductFamilyField: function (liquidContext) {
        if ($("#cat_brandaffiliation").length > 0 && $("#cat_brandaffiliation").val() != CAT.DSRM.ServiceRequestCommon.BRAND_FGWILSON)
            CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_primeproductfamily", "", "cat_primeproductgeneralarrangementnumber", 1, "below");
    },
    /**Create Duplicate Bulid Date field
     * @param {object} liquidContext
     */
    CreateDuplicateBulidDateField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_builddate", "dateTime", "cat_deliverydate", 1, "after");
    },

    /**Create Duplicate Service Meter Reading field
     * @param {object} liquidContext
     */
    CreateDuplicateServiceMeterReadingField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_servicemeterreading", "", "cat_servicemeterunit", 1, "above");
    },
    /**Create Duplicate Dealership field
     * @param {object} liquidContext
     */
    CreateDuplicateDealershipField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_accountid", "lookup", "cat_dealercode", 1, "above");
    },
    /**Create Duplicate Preffered Phone Number field
     * @param {object} liquidContext
     */
    CreateDuplicatePrefferedPhoneNumberField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_preferredphonenumber", "", "cat_mobilephonenumber", 1, "above");
    },
    /**Create Duplicate Dealer Contact Name field
     * @param {object} liquidContext
     */
    CreateDuplicateDealerContactNameField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_customerid", "lookup", "cat_dealercode", 1, "below");
    },
    /**Create Duplicate Preffered Email Address field
     * @param {object} liquidContext
     */
    CreateDuplicatePrefferedEmailAddressField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_preferredemailaddress", "", "cat_originalpreferredemail", 1, "before");
    },
    /**Create Duplicate Dealer CC field
     * @param {object} liquidContext
     */
    CreateDuplicateDealerCCField: function (liquidContext) {
        var displayNameOfTheField = "";
        if (liquidContext.eventType && (liquidContext.eventTypeLogicalName === "cat_dsn" || liquidContext.eventTypeLogicalName === "cat_systemtech")) {
            displayNameOfTheField = "(from Input section)";
        }
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_dealercarboncopyemail", "", "cat_corporatecarboncopyemail", 1, "below", displayNameOfTheField);
    },
    /**Create Duplicate Trips to Machine Before SR was Submitted field
     * @param {object} liquidContext
     */
    CreateDuplicateTripsToMachineBeforeSRWasSubmittedField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_tripstothemachine", "", "cat_whenistechreturningtotheunit", 1, "above"); //CHANGED FROM DEALER SITUATION
    },
    /**
     * Create Duplicate Estimated Round Trip Travel Time To The Unit field
     * @param {object} liquidContext
     */
    CreateDuplicateEstimatedRoundTripTravelTimeToTheUnitField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_estimateroundtriptraveltimetotheunit", "", "cat_tripstomachinetechandtc", 1, "below");
    },
    /**
    * Create Duplicate Trips to the Machine : Since SR Submitted to GDSN field
    * @param { object } liquidContext
    */
    CreateDuplicateTTTMachineSinceSRSubmittedtoGDSNField: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_tripstomachinesincesubmittingsr", "", "cat_didtheresolutionresolvetherequest", 1, "after");
        $("#cat_tripstomachinesincesubmittingsr1").length > 0 ? $("#cat_tripstomachinesincesubmittingsr1").change(function () {
            var TTTMachineSinceSRSubmittedtoGDSN = $("#cat_tripstomachinesincesubmittingsr1").val();
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_tripstomachinesincesubmittingsr", TTTMachineSinceSRSubmittedtoGDSN);
        }) : null;
    },
    /**
     * Create Duplicate SIS Advanced Troubleshooting URL field
     * @param {object} liquidContext
     */
    CreateDuplicateSISAdvancedTroubleshootingURLField: function (liquidContext) {
        if ($("#cat_sisadvancedtroubleshootingurl").length > 0) {
            CAT.DSRM.ServiceRequestCommon.CreateDuplicateFieldHtml(liquidContext, "cat_sisadvancedtroubleshootingurl", "", "cat_datelaststatuschange", 1, "after", ""); //CHANGED FROM DEALER SITUATION
        }
    },
    /**
     * Create URL field similar to PSCRM app
     * @param {object} liquidContext
     */
    CreateURLField: function (liquidContext) {
        let urlFields = $("#liquid_form").find('input[type="url"].form-control:not(.cloned-urlinput):not(:hidden)');
        urlFields.each(function () {
            var originalInput = $(this);
            var controlDiv = originalInput.closest('.control');
            var isOriginalInputReadOnly = "";
            if (originalInput.attr('readonly')) {
                isOriginalInputReadOnly = ` readonly="readonly"`;
            }
            // Hide the original input
            originalInput.hide();
            let newInputId = originalInput[0].id + `_urlComponent`;
            let newInputBtnId = originalInput[0].id + `_urlBtnComponent`;
            let newInputValue = originalInput.val();
            // Create new input element
            var newInputComponent = `<div style="position:relative;width:100%;">
            <input type="url" id="`+ newInputId + `" class="text form-control cloned-urlinput" style="text-decoration:underline;" value="` + newInputValue + `"` + isOriginalInputReadOnly + `>
            <button type="button" id="`+ newInputBtnId + `" onmouseover="this.style.backgroundColor='#e0e0e0';" onmouseout="this.style.backgroundColor='transparent';" style="position: absolute; right: 0px; width: 40px; cursor: pointer; align-items: center; justify-content: center; border: none; font-size: 14px; height: 35px; padding: 6px 12px; margin: 0px; display: flex; top: 0px; background-color: transparent;">
            🌐
            </button>
            </div>`;

            // Append the new input to the same parent
            controlDiv.append(newInputComponent);

            // Flag to prevent infinite loop
            let syncing = false;

            // Sync from new -> original input
            $("#" + newInputId).on('change', function () {
                if (syncing) return;
                syncing = true;

                let val = $(this).val();

                // Prepend https:// if not already present in new input
                if (val && !/^https?:\/\//i.test(val)) {
                    val = 'https://' + val;
                    CAT.DSRM.ServiceRequestCommon.SetValue($(this), val);  // Update the new input with the prepended value
                    //$(this).val(val);  // Update the new input with the prepended value
                }

                // Sync the value to the original input
                CAT.DSRM.ServiceRequestCommon.SetValue(originalInput, val, false, true);
                //originalInput.val(val).trigger('change'); // Trigger input event for original
                syncing = false;
            });
            // Sync from original -> new input (if original input is updated externally)
            originalInput.on('change', function () {
                if (syncing) return;
                syncing = true;

                let val = $(this).val();

                // Sync the value to the new input
                CAT.DSRM.ServiceRequestCommon.SetValue($("#" + newInputId), val);
                //$("#" + newInputId).val(val);
                syncing = false;
            });

            $("#" + newInputBtnId).on('click', function () {
                let url = $("#" + newInputId).length > 0 ? $("#" + newInputId).val() : "";
                url ? window.open(url, '_blank') : null;
            });
        });
    },
    /**
     * Function to set the TTTMachineSinceSRSubmittedtoGDSN field as editable
     * @param {object} liquidContext
     */
    UnlockTTTMachineSinceSRSubmittedtoGDSN: function (liquidContext) {
        if (!liquidContext)
            return;
        var eventType = $("#cat_eventtype").length > 0 && $("#cat_eventtype").val() ? parseInt($("#cat_eventtype").val()) : 0;
        var status = $("#cat_status_header").length > 0 && $("#cat_status_header").val() ? parseInt($("#cat_status_header").val()) : 0;
        if ((eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && status === CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value)
            //set the field as editable
            CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_tripstomachinesincesubmittingsr", true);
        $("#cat_tripstomachinesincesubmittingsr1").removeAttr("readonly");
        $("#cat_tripstomachinesincesubmittingsr1").removeClass("unselectable");

        return;
    },
    /**
     * Function to Replace Default Required Fields Validator
     * @param {Array} requiredFields
     */
    ReplaceDefaultRequiredFieldsValidator: function (requiredFields) {
        requiredFields.forEach(fieldLogicalName => {
            $("#" + fieldLogicalName).length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel(fieldLogicalName, false) : null;
            $("#" + fieldLogicalName).length > 0 ? CAT.DSRM.ServiceRequestCommon.SetRequiredLevel(fieldLogicalName, true) : null;
        });
    },
    /**
     * Function to Demand SR note for SIS Feedback required on closed status 
     * for DSN and System Tech based on few inquiry types
     * @param {object} liquidContext
     */
    SetSISCorrectionForSISFeedbackRequiredField: function (liquidContext) {
        if (!liquidContext)
            return;
        var eventTypeVal = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        var eventTypeValue = parseInt(eventTypeVal);
        var lookuptextvalue = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : null;
        var inquiryType = lookuptextvalue.toUpperCase();
        if ((eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value && (inquiryType === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_PRODUCTHEALTH || inquiryType === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_PASSWORD || inquiryType === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_DSNINCIDENT || inquiryType === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_INCIDENT)) || eventTypeValue === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) {
            CAT.DSRM.ServiceRequestCommon.SetVisible("cat_siscorrectionrequired", false);
            CAT.DSRM.ServiceRequestCommon.SetVisible("cat_sisfeedbackrequired", true);
        }
        else {
            CAT.DSRM.ServiceRequestCommon.SetVisible("cat_siscorrectionrequired", true);
            CAT.DSRM.ServiceRequestCommon.SetVisible("cat_sisfeedbackrequired", false);
        }
    },
    /**
     * Function to lock the sis feedback field.
     * @param {object} liquidContext
     */
    LockSISFeedbackRequired: function (liquidContext) {
        if (!liquidContext)
            return;
        //lock the field
        CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_siscorrectionrequired", true);
        CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_sisfeedbackrequired", true);
        return;
    },
    /**
     * function on load of all entity lists to retrieve portal system and personal views and show it in dropdown list.
     * @param {object} liquidContext
     * @param {string} entityLogicalName
     * @param {object} dataTableDefinitions
     */
    RetrievePortalViews: function (liquidContext, entityLogicalName, dataTableDefinitions) {
        if (!liquidContext)
            return;
        // if datatable meta data is not supplied, setting default datatable meta data
        if (!dataTableDefinitions) {
            dataTableDefinitions = {
                buttonDefinitions: [
                    {
                        extend: 'excel',
                        exportOptions: {
                            columns: ':visible'
                        },
                        init: function (api, node, config) {
                            node.removeClass('dt-button');
                        },
                        name: 'excel',
                        className: 'btn btn-custom form-action-container-left d-none',
                        text: '<span class="vertical-align-middle bi bi-file-earmark-arrow-down-fill" aria-hidden="true"></span><span class="vertical-align-middle margin-left-5">Export to Excel</span>',
                    },
                    {
                        init: function (api, node, config) {
                            node.removeClass('dt-button');
                        },
                        name: 'refresh',
                        className: 'btn btn-custom form-action-container-left d-none',
                        text: '<span class="vertical-align-middle bi bi-arrow-clockwise" aria-hidden="true"></span><span class="vertical-align-middle margin-left-5">Refresh All</span>',
                    },
                ],
                rowSelectDefinitions: { style: 'multi', selector: 'td:first-child' },
                languageDefinitions: {
                    emptyTable: "No Records Available",
                    processing: `<div class= "on-load overlay"><div class="spinner size-100"></div></div>`,
                    infoEmpty: "No Records Available",
                    lengthMenu: "Records per Page _MENU_",
                },
                domStructureDefinitions: '<"toolbar-wrapper"<"selector-wrapper dataTables_length">Bfl>r<"overflow-wrapper"t>ip',
                lengthChangeDefinitions: true,
                scrollYDefinitions: "70vh",
            };
        }

        // fetch entity system views and logged in users personal views
        var selectQuery = `cat_portalviews?$select=cat_viewtype,cat_viewname,cat_layoutobject,cat_columnmetadataobject&$filter=cat_entitylogicalname eq '` + entityLogicalName + `' and 
                               (cat_viewtype eq ` + CAT.DSRM.ServiceRequestCommon.PORTALVIEWTYPE_SYSTEM.value + ` or
                               cat_viewtype eq ` + CAT.DSRM.ServiceRequestCommon.PORTALVIEWTYPE_QUICKFIND.value + ` or
                               (cat_viewtype eq ` + CAT.DSRM.ServiceRequestCommon.PORTALVIEWTYPE_PERSONAL.value + ` and 
                               _cat_ownercontactid_value eq '` + liquidContext.loggedinContactId + `')) and
                               statecode eq 0
                               &$orderby=cat_viewtype asc,cat_viewname asc`;
        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
        CAT.DSRM.WebApi.RetrieveRecords(selectQuery,
            function (results) {
                if (results && results.length > 0) {
                    try {
                        //$.each(results, function (index, obj) {
                        //    if (obj.cat_translatedviewnames && liquidContext.websiteLanguage && liquidContext.websiteLanguage !== 'en-US') {
                        //        let translatedViewNamesJson = JSON.parse(obj.cat_translatedviewnames);
                        //        let websiteLanguageViewName = translatedViewNamesJson[liquidContext.websiteLanguage];
                        //        obj.cat_viewname = websiteLanguageViewName;
                        //    }
                        //});
                        // assign result to global varialble, create select drop down of views and load entity list.
                        CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS = results;
                        let selectedEntityListViewId = null;
                        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                        CAT.DSRM.ServiceRequestCommon.SetQuickFindViewFilterInput(liquidContext);
                        CAT.DSRM.ServiceRequestCommon.LoadEntityListViewGrid(liquidContext, entityLogicalName, selectedEntityListViewId, dataTableDefinitions);
                    } catch (e) {
                        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                        console.log(e);
                    }
                }
                else {
                    $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                }
            },
            function (e) {
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
                alert(e);
            }, true);
    },
    /**
     * function to set value in quick find filter field after retreiving Portal Views 
     * @param {object} liquidContext
     */
    SetQuickFindViewFilterInput: function (liquidContext) {
        var quickFindViewIndex = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_viewtype === CAT.DSRM.ServiceRequestCommon.PORTALVIEWTYPE_QUICKFIND.value);
        var quickFindViewObject = quickFindViewIndex !== -1 ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.splice(quickFindViewIndex, 1) : null;
        if ($("#" + liquidContext.entityListQuickSearchFilterStorageId).length > 0) {
            if (quickFindViewObject && quickFindViewObject.length > 0 && quickFindViewObject.first().cat_columnmetadataobject) {
                try {
                    JSON.parse(quickFindViewObject.first().cat_columnmetadataobject);
                    $("#" + liquidContext.entityListQuickSearchFilterStorageId).val(quickFindViewObject.first().cat_columnmetadataobject);
                } catch (e) {
                    $("#" + liquidContext.entityListQuickSearchFilterStorageId).val(null);
                    console.log(e);
                }
            }
            else {
                $("#" + liquidContext.entityListQuickSearchFilterStorageId).val(null);
            }
        }
    },
    /**
     * function onchange and success callback of portal views fetch to load entity list with selected view
     * @param liquidContext
     * @param dataTableDefinitions
     * @param entityLogicalName
     * @param selectedEntityListViewId
     */
    LoadEntityListViewGrid: function (liquidContext, entityLogicalName, selectedEntityListViewId, dataTableDefinitions) {
        if (!liquidContext)
            return;

        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
        // search for select view in query string and find index of the the view to load
        let urlSearchParams = new URLSearchParams(window.location.search);
        let queryStringSelectView = urlSearchParams.get("selectView");
        let requestedViewIndex = 0;
        let systemDefaultViewIndex = !liquidContext?.isDashboard ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => (JSON.parse(o.cat_layoutobject))?.default === true) !== -1
            ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => (JSON.parse(o.cat_layoutobject)).default)
            : -1 : -1;
        // get localDefaultPortalViews from Session Storage
        let localDefaultPortalViews = sessionStorage.getItem("localDefaultPortalViews");
        //if localDefaultPortalViews is null then assign liquidContext.defaultPortalViews to it
        if (!localDefaultPortalViews) {
            //get user default view json string and convert it to object
            if (liquidContext.defaultPortalViews) {
                sessionStorage.setItem("localDefaultPortalViews", liquidContext.defaultPortalViews);
                localDefaultPortalViews = sessionStorage.getItem("localDefaultPortalViews");
            }
        }

        if (localDefaultPortalViews) {
            CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS = JSON.parse(localDefaultPortalViews.replace(/'/g, '"'));
            if (liquidContext?.isDashboard) {
                CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext?.isDashboard];
            } else {
                CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext.eventTypeLogicalName];

            }
        }
        if (!CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME && systemDefaultViewIndex !== -1) {
            //if it is a system default view then
            CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[systemDefaultViewIndex].cat_viewname;
        }

        if (queryStringSelectView) {
            try {
                requestedViewIndex = queryStringSelectView && CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_viewname === queryStringSelectView) !== -1
                    ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_viewname === queryStringSelectView)
                    : 0;

                //check if SYSTEMDEFAULTVIEW needs to be updated
                CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW);

                //check if USERDEFAULTVIEWNAME needs to be updated
                CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME);

                // once query parameter is used from the url, clean the url to reset query string on re-load of the form
                var urlClean = location.protocol + "//" + location.host + location.pathname;
                window.history.replaceState({}, document.title, urlClean);
            }
            catch (e) {
                requestedViewIndex = 0;
                console.log(e);
            }
        }
        // else if a id of selected view from select drop down of the view is supplied, find index of the view to load
        else if (selectedEntityListViewId) {
            try {
                requestedViewIndex = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid == selectedEntityListViewId) !== -1
                    ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid == selectedEntityListViewId)
                    : 0;
                //check if SYSTEMDEFAULTVIEW needs to be updated
                CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW);

                //check if USERDEFAULTVIEWNAME needs to be updated
                CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME);

            }
            catch (e) {
                requestedViewIndex = 0;
                console.log(e);
            }
        }
        // else select the default choosen view by current loggedin user from the result, find index of the view and splice it to 0th position to load
        else if (CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME) {
            try {
                requestedViewIndex = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_viewname.replace(/'/g, '') === CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME) !== -1
                    ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_viewname.replace(/'/g, '') === CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME)
                    : 0;

                //check if SYSTEMDEFAULTVIEW needs to be updated
                CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW);

            }
            catch (e) {
                requestedViewIndex = 0;
                console.log(e);
            }
        }
        // else select the default choosen view from the result, find index of the view and splice it to 0th position to load
        else if (liquidContext?.isDashboard) {
            try {
                let dashboardDefaultViewIndex = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid === CAT.DSRM.ServiceRequestCommon.DASHBOARD_DEFAULTVIEW.id) !== -1
                    ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid === CAT.DSRM.ServiceRequestCommon.DASHBOARD_DEFAULTVIEW.id)
                    : -1;
                requestedViewIndex = dashboardDefaultViewIndex === -1 ? systemDefaultViewIndex === -1 ? 0 : systemDefaultViewIndex : dashboardDefaultViewIndex;
                //check if USERDEFAULTVIEWNAME needs to be updated
                CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME);
                CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW = "";
            }
            catch (e) {
                requestedViewIndex = 0;
                console.log(e);
            }
        }
        else {
            try {
                //check if there is no system default view
                if (systemDefaultViewIndex === -1) {
                    requestedViewIndex = 0;
                } else {
                    requestedViewIndex = systemDefaultViewIndex;
                }

                //check if USERDEFAULTVIEWNAME needs to be updated
                CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.CheckIfViewIsDefault(requestedViewIndex, CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME);

            }
            catch (e) {
                requestedViewIndex = 0;
                console.log(e);
            }
        }

        // retrieving selected layout and column objects from result array. 
        let selectedViewMetaDataDefinitions = [{}];
        let selectedColumnMetaDataDefinitions = {};
        selectedEntityListViewId = null;
        try {
            selectedViewMetaDataDefinitions = Object.hasOwn(CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex], "cat_layoutobject")
                && CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex].cat_layoutobject
                ? [JSON.parse(CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex].cat_layoutobject)]
                : [{}];
            selectedColumnMetaDataDefinitions = Object.hasOwn(CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex], "cat_columnmetadataobject")
                && CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex].cat_columnmetadataobject
                ? JSON.parse(CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex].cat_columnmetadataobject)
                : {};
            selectedEntityListViewId = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex].cat_portalviewid;
        } catch (e) {
            selectedViewMetaDataDefinitions = [{}];
            selectedColumnMetaDataDefinitions = {};
            selectedEntityListViewId = null;
        }
        // if datatable exits, destroy and create a new one
        if ($.fn.DataTable.isDataTable("#" + liquidContext.entityListId)) {
            let table = $("#" + liquidContext.entityListId).DataTable();
            table.destroy(true);
            let entityListGridDOM = `<table id="` + liquidContext.entityListId + `" class="table table-hover entitylist-overflow" style="width:100%"></table>`;
            $(entityListGridDOM).appendTo("#" + liquidContext.entityListId + "Body");
        }

        var viewName = selectedViewMetaDataDefinitions[0] ? selectedViewMetaDataDefinitions[0]?.text : "";
        //store metaGlobalDealershipFilter in diffrent variable so when we change to any other view other than "DPPM Financial/Scoring View", we can apply it
        if (liquidContext.metaGlobalDealershipFilter && !CAT.DSRM.ServiceRequestCommon.metaGlobalDealershipFilter) {
            CAT.DSRM.ServiceRequestCommon.metaGlobalDealershipFilter = liquidContext.metaGlobalDealershipFilter;
        }
        //skip metaGlobalDealershipFilter for Dealer CPI view "DPPM Financial/Scoring View"
        if ((viewName === CAT.DSRM.PortalConstants.DPPM_FINANCIAL_SCORING_VIEW_NAME || selectedEntityListViewId === CAT.DSRM.PortalConstants.DPPM_FINANCIAL_SCORING_VIEW_ID) && entityLogicalName === "cat_dealercpi") {
            liquidContext.metaGlobalDealershipFilter = "";
        } else if (!liquidContext.metaGlobalDealershipFilter && CAT.DSRM.ServiceRequestCommon.metaGlobalDealershipFilter) {
            liquidContext.metaGlobalDealershipFilter = CAT.DSRM.ServiceRequestCommon.metaGlobalDealershipFilter;
        }

        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();

        CAT.DSRM.DataTableLoad.InitializeDataTable(liquidContext, selectedColumnMetaDataDefinitions, selectedViewMetaDataDefinitions, dataTableDefinitions);

        // ribbon event handler for dealer ppm entity
        if (entityLogicalName === "cat_dealercpi") {
            CAT.DSRM.DealerCPI.ShowHideListRibbonButton(liquidContext);
        }

        // ribbon event handler for queueitem entity
        if (entityLogicalName === "queueitem") {
            CAT.DSRM.QueueItem.TakeOwnershipClick(liquidContext);
        }

        // create select drop down of view inside designated wrapper in datatable DOM.
        //var selectorWrapper = $(".toolbar-wrapper > .selector-wrapper");
        var selectorWrapper = $("#customViewSelector");
        if (selectorWrapper && selectorWrapper.length) {
            selectorWrapper.append(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT);
            selectorWrapper.append(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON);
            var dataTableLengthSelectorClass = $("select[name=" + liquidContext.entityListId + "_length]").attr('class');
            if (dataTableLengthSelectorClass) {
                $("#entityListViewSelect").addClass(dataTableLengthSelectorClass);
            }

            var optGroupDefinition = "";
            var optGroup = 0;
            for (var i = 0; i < CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.length; i++) {
                // if previous option group is different than current, create new option group and then insert option in new group  
                if (optGroup != CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i].cat_viewtype) {
                    optGroupDefinition ? $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).append(optGroupDefinition) : null;
                    optGroup = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i].cat_viewtype;
                    optGroupDefinition = $("<optgroup label='" + CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i]["cat_viewtype@OData.Community.Display.V1.FormattedValue"] + "'>");
                    optGroupDefinition.append($("<option>", {
                        value: CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i].cat_portalviewid,
                        text: CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i].cat_viewname
                    }));
                }
                // else insert option in old group
                else {
                    optGroupDefinition.append($("<option>", {
                        value: CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i].cat_portalviewid,
                        text: CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[i].cat_viewname
                    }));
                }
            }
            optGroupDefinition ? $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).append(optGroupDefinition) : null;

            // set select value for drop down and on change event handler for drop down.
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).val(selectedEntityListViewId);
            let previousValueEntityListViewSelector;
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).on("click", function (e) {
                previousValueEntityListViewSelector = $(this).val();
            }).on("change", function (e) {
                if (CAT.DSRM.DataTableLoad.EditedDataObj && CAT.DSRM.DataTableLoad.EditedDataObj.length > 0) {
                    if (!window.confirm(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_editedrecords_discarded"))) {
                        $(this).val(previousValueEntityListViewSelector);
                        CAT.DSRM.ServiceRequestCommon.StopSpinningLoader();
                        return;
                    }
                    CAT.DSRM.DataTableLoad.EditedDataObj = [];
                    if (CAT.DSRM.DataTableLoad.EditedDataObj.length < 1)
                        $(CAT.DSRM.DataTableLoad.SAVE_REFRESH_BUTTON_ID).hide();
                }
                CAT.DSRM.ServiceRequestCommon.LoadEntityListViewGrid(liquidContext, entityLogicalName, $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).val(), dataTableDefinitions);
            });

            //change button image to pin/unpin and check what action we want to perform
            CAT.DSRM.ServiceRequestCommon.UpdatePinButton();

            //Adding pin/unpin onclick event
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).on("click", function () {
                $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
                var recordData = {};
                //if we want to reset then remove the default view value for the current entity from current user contact
                if (CAT.DSRM.ServiceRequestCommon.ISRESET) {
                    if (liquidContext?.isDashboard) {
                        CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext.isDashboard] = '';
                    } else {
                        CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext.eventTypeLogicalName] = '';
                    }
                    //if reset defauilt view from system default view
                    if (systemDefaultViewIndex !== -1 && CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[systemDefaultViewIndex].cat_portalviewid === $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).val()) {
                        //if it is a system default view then
                        CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[systemDefaultViewIndex].cat_viewname;
                    }
                }
                //else set current view as default view for the current entity for current user contact
                else {
                    if (liquidContext?.isDashboard) {
                        CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext?.isDashboard] = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid === $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).val()) !== -1
                            ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid == selectedEntityListViewId)].cat_viewname.replace(/'/g, '')
                            : '';
                    } else {
                        CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext.eventTypeLogicalName] = CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid === $(CAT.DSRM.PortalConstants.ENTITY_LIST_VIEW_SELECT_ID).val()) !== -1
                            ? CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS.findIndex(o => o.cat_portalviewid == selectedEntityListViewId)].cat_viewname.replace(/'/g, '')
                            : '';
                    }

                }
                if (liquidContext?.isDashboard) {
                    CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext?.isDashboard];
                } else {
                    CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME = CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS[liquidContext.eventTypeLogicalName];
                }
                //update final json to contact
                recordData["cat_defaultportalviews"] = JSON.stringify(CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS).replace(/"/g, "'");

                //update user contact with default view
                CAT.DSRM.WebApi.UpdateRecord('contacts', liquidContext.loggedinContactId, recordData, CAT.DSRM.ServiceRequestCommon.SuccessCallbackDefaultViewInContactUpdate, CAT.DSRM.ServiceRequestCommon.ErrorCallbackDefaultViewInContactUpdate, true, null);
            });
        }
    },
    /**
    * clear defaultView value to change pin button action and img as per selected view
    */
    CheckIfViewIsDefault: function (requestedViewIndex, defaultView) {
        //clear defaultView value to change pin button action and img as per selected view
        if (defaultView !== "") {
            if (CAT.DSRM.ServiceRequestCommon.PORTALVIEWSDEFINIIONS[requestedViewIndex].cat_viewname.replace(/'/g, '') !== defaultView) {
                defaultView = "";
            }
        }
        return defaultView;
    },
    //Success Callback for updating default view in contact table
    SuccessCallbackDefaultViewInContactUpdate: function () {
        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
        console.log("Record update Successfully");
        //change button image to pin/unpin
        CAT.DSRM.ServiceRequestCommon.UpdatePinButton();

        //update sessionStorage localDefaultPortalViews value with updated default views
        sessionStorage.setItem("localDefaultPortalViews", JSON.stringify(CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWS).replace(/"/g, "'"));

    },
    //Error Callback for updating default view in contact table
    ErrorCallbackDefaultViewInContactUpdate: function (e) {
        console.log("Record update Error: " + e);
    },
    /**
    * change button image to pin/unpin
    */
    UpdatePinButton: function () {
        //if default view is available for entity then change button image to unpin
        if (CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME && CAT.DSRM.ServiceRequestCommon.USERDEFAULTVIEWNAME !== "") {
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).html(CAT.DSRM.PortalConstants.ENTITY_LIST_UNPIN_BUTTON_IMG);
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).prop('disabled', false);
            CAT.DSRM.ServiceRequestCommon.ISRESET = true;
        }
        else if (CAT.DSRM.ServiceRequestCommon.SYSTEMDEFAULTVIEW) {
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).html(CAT.DSRM.PortalConstants.ENTITY_LIST_UNPIN_BUTTON_IMG);
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).prop('disabled', true);
            CAT.DSRM.ServiceRequestCommon.ISRESET = false;
        }
        //else no default view is available for entity then change button image to pin
        else {
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).html(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_IMG);
            $(CAT.DSRM.PortalConstants.ENTITY_LIST_PIN_BUTTON_ID).prop('disabled', false);
            CAT.DSRM.ServiceRequestCommon.ISRESET = false;
        }
    },
    /**
     * set pre filter lookup Root Cause
     * @param {object} liquidContext
     */
    FilterRootCause: function (liquidContext) {
        if (!liquidContext)
            return;

        let elementId = "cat_rootcauseid";
        if ($("#cat_rootcausedppm").length > 0)
            elementId = "cat_rootcausedppm";

        CAT.DSRM.ServiceRequestCommon.ROOTCAUSEID = $("#" + elementId).length > 0 ? $("#" + elementId).val() : null;
        CAT.DSRM.ServiceRequestCommon.ROOTCAUSENAME = $("#" + elementId).length > 0 ? $("#" + elementId + "_name").val() : null;

        let status = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : null;
        if (status && (status == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTEDTOTCQUEUE.value)
            || (status == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value)
            || (status == CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value)
            || (status == CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value)
            && $("#" + elementId).length > 0
            && $("#" + elementId + "_name").length > 0
            && ($("#" + elementId + "_name").is('[disabled="disabled"]')
                || $("#" + elementId + "_name").is('[readonly="readonly"]')))
            return;

        let reasonforcall = $("#cat_reasonforcallid").length > 0 ? $("#cat_reasonforcallid").val() : null;
        if (reasonforcall !== null && reasonforcall !== "") {
            let rootCauseQuery = "";
            if (CAT.DSRM.ServiceRequestCommon.ROOTCAUSEID) {
                rootCauseQuery = "cat_rootcauses?$select=cat_reasonforcallid,cat_rootcause&$filter=(statecode eq 0 and _cat_reasonforcallid_value eq '" + reasonforcall + "') or cat_rootcauseid eq '" + CAT.DSRM.ServiceRequestCommon.ROOTCAUSEID + "'";
            }
            else {
                rootCauseQuery = "cat_rootcauses?$select=cat_reasonforcallid,cat_rootcause&$filter=statecode eq 0 and _cat_reasonforcallid_value eq '" + reasonforcall + "'";
            }
            CAT.DSRM.WebApi.RetrieveRecords(rootCauseQuery, function (result) {
                if (result) {
                    CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, elementId, "cat_rootcause", "cat_rootcauseid", "cat_rootcause", ["cat_rootcause"], result);
                    if (CAT.DSRM.ServiceRequestCommon.ROOTCAUSEID) {
                        let rootCauseObj = { guid: CAT.DSRM.ServiceRequestCommon.ROOTCAUSEID, name: CAT.DSRM.ServiceRequestCommon.ROOTCAUSENAME, entityName: "cat_rootcause" };
                        CAT.DSRM.ServiceRequestCommon.SetValue(elementId, rootCauseObj, true);
                    }
                }
            }, function (e) {
                if (e)
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
            }, true);
        }
        else {
            let optionArray = [];
            CAT.DSRM.ServiceRequestCommon.RenderLookupSelectize(liquidContext, elementId, "cat_rootcause", "cat_rootcauseid", "cat_rootcause", ["cat_rootcause"], optionArray);
        }
    },
    /**
     * Add Caterpillar Channel 1 
     * @param {object} liquidContext
     * @param {string} buttonname
     * @param {string} placeHolderFieldLogicalName
     * @param {string} stringfield
     * @returns
     */
    CaterpillarChannelHtml: function (liquidContext, buttonname, placeHolderFieldLogicalName, stringfield) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        if (formType === CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
            var tdHtml = '<td colspan="1" rowspan="1" class="clearfix cell text form-control-cell"></td>';
            var controlDivHtml = '<div class="control"></div>';
            var controlHtml = '<div style="margin-top: 25px;"></div><button id="' + buttonname + '" class="btn btn-light btn-outline-dark"><span style="color: gray; font-weight: bold; font-size: small;">Caterpillar</span><span style="color: #ffd800; font-weight: bold; font-size: small;">Channel 1</span></button>';
            var labelDivHtml = '<div class="info"></div>';
            controlDivHtml = $(controlDivHtml).append(controlHtml);
            tdHtml = $(tdHtml).append(labelDivHtml).append(controlDivHtml);
            if (stringfield == "after") {
                var td = $("#" + placeHolderFieldLogicalName).closest("td").next();
                $("#" + placeHolderFieldLogicalName).closest("td").after(tdHtml);
                $(td).remove();


            }
        }
        $('#' + buttonname).click(function (event) {
            event.preventDefault();
            var buttonId = $(this).attr("id");
            var buttonname = buttonId;
            CAT.DSRM.ServiceRequestCommon.OpenChannelUrl(buttonname);
        });


    },
    /**
     * Function to Call Create Duplicate Fields
     * @param {object} liquidContext
     */
    AddingCaterpillarChannel1: function (liquidContext) {
        if (!liquidContext)
            return;
        CAT.DSRM.ServiceRequestCommon.Channel1DealerSituation(liquidContext);
        CAT.DSRM.ServiceRequestCommon.Channel1TravelTimeToMachine(liquidContext);
        CAT.DSRM.ServiceRequestCommon.Channel1MachineTrip(liquidContext);
    },
    /**
     * Add button after dealer situation field
     * @param {object} liquidContext
     */
    Channel1DealerSituation: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CaterpillarChannelHtml(liquidContext, "channel1dealersituation", "cat_dealersituation", "after");
    },
    /**
     * Add button after estimateroundtrip field
     * @param {object} liquidContext
     */
    Channel1TravelTimeToMachine: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CaterpillarChannelHtml(liquidContext, "channel1traveltimetomachine", "cat_estimateroundtriptraveltimetotheunit", "after");
    },
    /**
     * Add button after tripstomachine field
     * @param {object} liquidContext
     */
    Channel1MachineTrip: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.CaterpillarChannelHtml(liquidContext, "channel1machinetrip", "cat_tripstothemachine", "after");
    },
    /**
     * Function open hyperlink to channel 1 urls
     * @param {string} id
     */
    OpenChannelUrl: function (id) {
        if (!id)
            return;
        var url = "";
        if (id == "channel1dealersituation")
            url = "https://channel1.mediaspace.kaltura.com/media/Dealer%20Situation%20Field/1_blfwgav4";
        else if (id == "channel1traveltimetomachine")
            url = "https://channel1.mediaspace.kaltura.com/media/+Round+Trip+Travel+Time+Field/1_c9pcp3sy";
        else if (id == "channel1machinetrip")
            url = "https://channel1.mediaspace.kaltura.com/media/+Tech+Trips+to+the+Machine+before+Submitting/1_5i5cudz9";
        if (url)
            window.open(url, '_blank').focus();

    },
    /**
     * Rendering a text field
     * @param {string} placeHolderFieldLogicalName
     * @param {string} fieldId
     * @param {string} label
     * @param {string} position
     */
    RenderTextField: function (placeHolderFieldLogicalName, fieldId, label, position) {
        var tdHtml = '<td colspan="1" rowspan="1" class="clearfix cell text form-control-cell"><div class="info"><label for="' + fieldId + '" id="' + fieldId + '_label' + '" class="field-label">' + label + ' </label></div><div class="control"></div><input name="' + fieldId + '" id="' + fieldId + '" value="" readonly="readonly" disabled="disabled" class="text form-control unselectable"></td>';
        if (position == "after") {
            var td = $("#" + placeHolderFieldLogicalName).closest("td").next();
            $("#" + placeHolderFieldLogicalName).closest("td").after(tdHtml);
            $(td).remove();
        }
        if (position === "below") {
            var placeHolderTd = $("#" + placeHolderFieldLogicalName).closest("td");
            var indexOfPlaceHolderTd = placeHolderTd.index();
            var nextRow = $("#" + placeHolderFieldLogicalName).closest("tr").next();
            var TD = nextRow.find("td:eq(" + indexOfPlaceHolderTd + ")");
            var prevTd = $($(nextRow).children()[indexOfPlaceHolderTd]);
            $(prevTd).after(tdHtml);
            $(TD).remove();
        }
    },
    /**
     * Set owner phone number
     * @param {object} liquidContext
     */
    SetOwnerPhoneNumber: function (liquidContext) {
        if (!liquidContext)
            return;
        var phoneNumber = liquidContext.ownerPhoneNumber ? liquidContext.ownerPhoneNumber : null;
        if (!phoneNumber) {
            if (!liquidContext.ownerContact) {
                return;
                console.log("Owner contact not found");
            }
            var query = "contacts(" + liquidContext.ownerContact.replace(/[{}]/g, "") + ")?$select=address1_telephone2";
            CAT.DSRM.WebApi.RetrieveRecords(query, function (results) {
                if (results) {
                    phoneNumber = results.address1_telephone2 ? results.address1_telephone2 : null;
                }
            }, function (e) { console.log(e) }, false);
        }
        if (phoneNumber) {
            CAT.DSRM.ServiceRequestCommon.RenderTextField("cat_ownercontactid", "cat_ownerphonenumber", "Owner Phone Number", "below");
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_ownerphonenumber", phoneNumber, true);
        }
    },
    /**
     * function to stop the loading sign
     * @param {object} liquidContext
     */
    StopSpinningLoader: function (liquidContext) {
        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).hide();
    },
    /**
     * function to show the loading sign
     * @param {object} liquidContext
     */
    ShowSpinningLoader: function (liquidContext) {
        $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
    },
    /**
     * Custom validation and default page validation check
     * @param {object} liquidContext
     * @param {boolean} isValid
     * @param {string} action
     */
    CheckPageValidation: function (liquidContext, isValid, action) {
        let oldUserModifiedOnDate = CAT.DSRM.ServiceRequestCommon.GetDateField("cat_usermodifiedon");
        try {
            if (!liquidContext && !action)
                return;
            if (isValid) {
                switch (action) {
                    case "Insert":
                        $("#InsertButton").click();
                        break;
                    case "Update":
                        if (CAT.DSRM.ServiceRequestCommon.CheckIsFormDirty(liquidContext) || CAT.DSRM.ServiceRequestCommon.CheckIsFormRequired(liquidContext)) {
                            if ($("#cat_dealerauthorizednotesshare").hasClass("dirty") && liquidContext.status == CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value) {
                                CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("#cat_didtheresolutionresolvetherequest", false);
                                $("#UpdateButton").click();
                            }
                            else {
                                $("#UpdateButton").click();
                            }
                        }
                        else if (window && window.location && window.location.href.contains("refrel")) { //Added this line to work on related entities to close the related entity record.
                            let url = window.location.href + "&success=true";
                            window.location.replace(url);
                        }
                        else {
                            window.location.reload();
                        }
                        break;
                    case "SaveAndClose":
                        if (document) {
                            if (CAT.DSRM.ServiceRequestCommon.CheckIsFormDirty(liquidContext) || CAT.DSRM.ServiceRequestCommon.CheckIsFormRequired(liquidContext)) {
                                document.getElementById('liquid_form').action = document.getElementById('liquid_form').action + '&isSaveAndCloseClicked=true';
                                $("#UpdateButton").click();
                            } else {
                                let url = window.location.href + '&isSaveAndCloseClicked=true';
                                window.location.replace(url);
                            }
                        }
                        break;
                }
                if (!Page_IsValid) {
                    CAT.DSRM.ServiceRequestCommon.StopSpinningLoader(liquidContext);
                } else {
                    //let openTabs = $("div[data-name]").not('[style*="display: none"]');
                    //let openTabsArray = [];
                    //if (openTabs && openTabs.length > 0) {
                    //    openTabs.each(function (index) {
                    //        console.log(index + ": " + $(this).attr('data-name'));
                    //        openTabsArray.push($(this).attr('data-name'));
                    //    });
                    //    let qstr = window.location.search;
                    //    let queryString = qstr.length > 0 ? new URLSearchParams(qstr) : null;
                    //    let id = queryString ? queryString.get("id") : null;
                    //    if (id) {
                    //        let openTabsKey = "opentabs" + id;
                    //        let openTabsValue = openTabsArray.join();
                    //        window.sessionStorage.setItem(openTabsKey, openTabsValue);
                    //        let scrollPositionKey = "scrollPosition" + id;
                    //        let scrollPositionValue = $(window).scrollTop();
                    //        window.sessionStorage.setItem(scrollPositionKey, scrollPositionValue);
                    //    }
                    //}
                    CAT.DSRM.ServiceRequestCommon.DisableSubmitButton(liquidContext);
                }
            }
            else {
                CAT.DSRM.ServiceRequestCommon.StopSpinningLoader(liquidContext);
            }
        }
        catch (e) {
            CAT.DSRM.ServiceRequestCommon.StopSpinningLoader(liquidContext);
        }
    },
    /**
     * Validate Data update on SR
     * @param {object} liquidContext
     * @param {any} currentEntityLogicalName
     */
    ValidatePortalRecord: async function (liquidContext, currentEntityLogicalName) {
        return await CAT.DSRM.ServiceRequestCommon.ValidateRecordChange(liquidContext);
    },
    /**
     * Function to Validate Record Change before saving current data.
     * @param {object} liquidContext
     * @returns
     */
    ValidateRecordChange: async function (liquidContext) {
        if (liquidContext.formType != CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE)
            return true;

        let isValid = true;
        let entityLogicalName = liquidContext.eventTypeLogicalName === "cat_globalwarranty" ? "cat_globalwarranties" : liquidContext.eventTypeLogicalName + "s";
        let entityRecordId = liquidContext.eventTypeRecordId;
        if (liquidContext.refEntity && liquidContext.refId) {
            entityLogicalName = liquidContext.refEntity === "cat_globalwarranty" ? "cat_globalwarranties" : liquidContext.refEntity + "s";
            entityRecordId = liquidContext.refId;
        }
        let selectEntityQuery = entityLogicalName + "(" + entityRecordId.replace(/[{}]/g, "") + ")?$select=cat_usermodifiedon,cat_datelastupdated";
        let resultEntityObject = await CAT.DSRM.WebApi.RetrieveRecords(selectEntityQuery);
        //let formUserModifiedOnDate = $("#cat_usermodifiedon").val() ? new Date(CAT.DSRM.ServiceRequestCommon.GetDateField("cat_usermodifiedon")).getTime() : null;
        //let dataverseUserModifiedOnDate = resultEntityObject.cat_usermodifiedon ? new Date(resultEntityObject.cat_usermodifiedon).getTime() : null;
        let formUserModifiedOnDate = $("#cat_datelastupdated").val() ? new Date($("#cat_datelastupdated").val()).getTime() : null;
        let dataverseUserModifiedOnDate = resultEntityObject.cat_datelastupdated ? new Date(resultEntityObject.cat_datelastupdated).getTime() : null;
        //console.log("DB: " + resultEntityObject.cat_usermodifiedon);
        //console.log("DB: " + new Date(resultEntityObject.cat_usermodifiedon));
        //console.log("Form: " + formUserModifiedOnDate);
        //console.log("Form: " + new Date(formUserModifiedOnDate));
        console.log("DB: " + resultEntityObject.cat_datelastupdated);
        console.log("DB: " + new Date(resultEntityObject.cat_datelastupdated));
        console.log("Form: " + formUserModifiedOnDate);
        console.log("Form: " + new Date(formUserModifiedOnDate));
        if (dataverseUserModifiedOnDate && dataverseUserModifiedOnDate !== formUserModifiedOnDate) {
            let selectColumnArray = [];
            let dirtyColumnArray = [];
            let deltaColumnArray = [];
            //let skipedColumnArray = ["cat_summaryid", "cat_parentaccountid", "cat_createdbycontactid", "cat_contacttype"];
            let skipedColumnArray = ["cat_financialsummary",
                "cat_quantitysummary",
                "cat_commercialsummary",
                "cat_costperunit",
                "cat_totalfailures",
                "cat_totalcostofproblem",
                "cat_totalinusd",
                "cat_dealerrepair",
                "cat_customerrepairquantity",
                "cat_emergingissuecomments",
                "cat_emergingissue",
                "cat_lossinrevenuecomments",
                "cat_lossinrevenue",
                "cat_loanerexpensecomments",
                "cat_loanerexpense",
                "cat_impactonfleetcomments",
                "cat_impactonfleet",
                "cat_downtimeothercomments",
                "cat_downtimeother",
                "cat_performancecomments",
                "cat_performance",
                "cat_nusiancecomments",
                "cat_nusiance",
                "cat_customerrepaircommericalcomments",
                "cat_customerrepaircommerical",
                "cat_partsavailabilitycomments",
                "cat_partsavailability",
                "cat_significantrepairscostscomments",
                "cat_significantrepairscosts",
                "cat_knownlostsalecomments",
                "cat_knownlostsale",
                "cat_futurepotentiallostsalecomments",
                "cat_futurepotentiallostsale",
                "cat_totalweightedvalue",
                "cat_currencyexchange",
                "cat_currencycode"];

            $(`input.text.form-control, input.datetime.form-control, select.picklist.form-control,
                select.boolean-dropdown.form-control, textarea.textarea.form-control`).not(`.selectized, .cloned-urlinput, .lookup, 
                .aspNetDisabled, .readonly, [id*='1'], [id^='txt_'], [id$='_name'], [id$='_header'],
                [id='cat_ownerphonenumber'], [id='internalemailaddress'], [id='address1_telephone2'], 
                [id='cat_attachmentcount'], [id='cat_usermodifiedon'], [id='cat_datelastupdated'], [id='cat_modifiedonportal'], [id='cat_contacttype'], 
                [id='enter_note'], [id='cat_note']`).each(function () {
                selectColumnArray.push(this.id);
            });
            $(`span.boolean-radio`).not(`[id='cat_issrnoteselected'], [id='cat_isinternalnoteselected'], [id='cat_isstatuschangedfromsrnote']`).each(function () {
                selectColumnArray.push(this.id);
            })
            $("select.lookup.form-control").not(`.aspNetDisabled, .readonly, [id*='1'], 
            [id$='_name'], [id$='_header'], [id^='txt_'], [id='cat_ownerphonenumber'], [id='internalemailaddress'], 
            [id='address1_telephone2'], [id='cat_attachmentcount'], [id='cat_usermodifiedon'], [id='cat_datelastupdated'],
            [id='cat_modifiedonportal'], [id='enter_note'], [id='cat_note']`).each(function () {
                selectColumnArray.push("_" + this.id + "_value");
            });
            $("input.lookup.form-control").not(`.readonly, [id*='1'], 
            [id='cat_ownercontactid_name'], [id='cat_modifiedbycontactid_name'], [id='cat_createdbycontactid_name'], [id='cat_parentaccountid_name'], [id='cat_summaryid_name']`).next().each(function (index) {
                if ($(this).is("input"))
                    selectColumnArray.push("_" + $(this).attr("id") + "_value");
                else if ($(this).next().is("input"))
                    selectColumnArray.push("_" + $(this).next().attr("id") + "_value");
            })
            $(".dirty").not(`[id$='_datepicker_description']`).each(function () {
                dirtyColumnArray.push(this.id);
            });
            console.log("Select Columns: " + selectColumnArray.join());
            console.log("Dirty Columns: " + dirtyColumnArray.join());
            let selectColumns = selectColumnArray.join();
            selectEntityQuery = entityLogicalName + "(" + entityRecordId + ")/?$select=" + selectColumns;
            resultEntityObject = await CAT.DSRM.WebApi.RetrieveRecords(selectEntityQuery);
            if (resultEntityObject.length < 1) {
                isValid = false;
                return isValid;
            }
            for (var i = 0; i < selectColumnArray.length; i++) {
                let dataVerseColumnName = selectColumnArray[i];
                let formColumnName = dataVerseColumnName.startsWith("_") && dataVerseColumnName.endsWith("_value") ? dataVerseColumnName.substring(dataVerseColumnName.length - 6, 1) : dataVerseColumnName;
                let dataVerseColumnValue = resultEntityObject[dataVerseColumnName];
                let formColumnValue = $("#" + formColumnName).val();
                if ($("#" + formColumnName).hasClass("datetime")) {
                    dataVerseColumnValue = dataVerseColumnValue ? new Date(dataVerseColumnValue).getTime() : null;
                    formColumnValue = formColumnValue ? new Date(formColumnValue).getTime() : null;
                }
                else if ($("#" + formColumnName).hasClass("boolean-dropdown")) {
                    dataVerseColumnValue = dataVerseColumnValue === 1 || dataVerseColumnValue === true || dataVerseColumnValue === "1" || dataVerseColumnValue === "true" ? true : false;
                    formColumnValue = formColumnValue === 1 || formColumnValue === true || formColumnValue === "1" || formColumnValue === "true" ? true : false;
                }
                else if ($("#" + formColumnName).hasClass("boolean-radio")) {
                    dataVerseColumnValue = resultEntityObject[dataVerseColumnName];
                    formColumnValue = CAT.DSRM.ServiceRequestCommon.GetRadioButtonValue(formColumnName);
                }
                else if ($("#" + formColumnName).hasClass("picklist")) {
                    dataVerseColumnValue = dataVerseColumnValue ? parseInt(dataVerseColumnValue) : null;
                    formColumnValue = formColumnValue ? parseInt(formColumnValue) : null;
                }
                if ((formColumnValue && dataVerseColumnValue && formColumnValue != dataVerseColumnValue) || (!formColumnValue && dataVerseColumnValue) || (formColumnValue && !dataVerseColumnValue)) {
                    console.log(dataVerseColumnName + " - old: " + formColumnValue + "; new: " + dataVerseColumnValue);
                    if (dirtyColumnArray.includes(formColumnName)) {
                        //let columnAuditData = {};
                        //columnAuditData.columnName = formColumnName;
                        //columnAuditData.formColumnValue = formColumnValue;
                        //columnAuditData.dataVerseColumnValue = dataVerseColumnValue;
                        //deltaColumnArray.push(columnAuditData);
                        console.log(formColumnName + " - dirty skipped");
                    }
                    else if (skipedColumnArray.includes(formColumnName)) {
                        //skiped some columns which is not required to update
                        console.log(formColumnName + " - array skipped");
                    }
                    else if ($("#" + formColumnName).is("input") && $("#" + formColumnName).next().is("input#" + formColumnName + "_entityname")) {
                        let dataVerseColumnValueObj = {};
                        if (dataVerseColumnValue) {
                            dataVerseColumnValueObj = { guid: dataVerseColumnValue, name: resultEntityObject[dataVerseColumnName + "@OData.Community.Display.V1.FormattedValue"], entityName: resultEntityObject[dataVerseColumnName + "@Microsoft.Dynamics.CRM.lookuplogicalname"] }
                        }
                        CAT.DSRM.ServiceRequestCommon.SetValue(formColumnName, dataVerseColumnValueObj);
                    }
                    else if ($("#" + formColumnName).is("select") && ($("#" + formColumnName).hasClass("lookup") || $("#" + formColumnName).hasClass("picklist"))) {
                        if ($("#" + formColumnName + " option[value='" + dataVerseColumnValue + "']").length > 0 || !dataVerseColumnValue) {
                            $("#" + formColumnName).val(dataVerseColumnValue);
                        }
                        else {
                            let option = document.createElement("option");
                            option.value = dataVerseColumnValue;
                            option.innerText = resultEntityObject[dataVerseColumnName + "@OData.Community.Display.V1.FormattedValue"];
                            $("#" + formColumnName).append(option);
                            $("#" + formColumnName).val(dataVerseColumnValue);
                        }
                        if (formColumnName === "cat_status" || formColumnName === "cat_substatus") {
                            $("#" + formColumnName + "_header").val(dataVerseColumnValue);
                        }
                    }
                    else {
                        CAT.DSRM.ServiceRequestCommon.SetValue(formColumnName, dataVerseColumnValue);
                    }
                }
            }
        }

        return isValid;
    },
    /**
     * HideShow ribbon Delete button
     * @param {object} liquidContext
     */
    HideShowDeleteButton: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var restrictedContact = liquidContext.restrictedContact;
        var eventType = liquidContext.refEntity ? liquidContext.refEntity : liquidContext.eventTypeLogicalName;
        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_delete_button"), false);
        $("#page_ribbon_delete_button").prop('disabled', true);
        let isValidAccessToDelete = false;
        isValidAccessToDelete = CAT.DSRM.ServiceRequestCommon.EventTypeEditAccessCheck(eventType, liquidContext);
        if (restrictedContact != CAT.DSRM.ServiceRequestCommon.RESTRICTED_CONTACT_YES.value && isValidAccessToDelete) {
            if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE) {
                CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_delete_button"), true);
                $("#page_ribbon_delete_button").prop('disabled', false);
            }
        }
    },
    /**
     * HideShow ribbon Delete button based on dealeraccess
     * @param {object} liquidContext
     */
    ShowHideDeleteButtonBasedOnAccess: function (liquidContext) {
        if (!liquidContext)
            return;
        var isValidAccessToDelete = false;
        var dealerAccess = liquidContext.dealerAccess;
        if (dealerAccess != CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_NONE
            && dealerAccess != CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_READ
            && dealerAccess != CAT.DSRM.ServiceRequestCommon.DPPM_ACCESS_READ_ONLY
            && dealerAccess != "") {
            isValidAccessToDelete = true;
        }
        return isValidAccessToDelete;
    },
    /**
     * delete button 
     * @param {object} liquidContext
     */
    DeleteButtonOnClickOnFormOnload: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.HideShowDeleteButton(liquidContext);
        $("#page_ribbon_delete_button").length > 0 ? $("#page_ribbon_delete_button").click(function () {
            CAT.DSRM.ServiceRequestCommon.DeleteButtonOnClick(liquidContext);
        }) : null;
    },
    /**
     * Onclick of SimsRefresh Button
     * @param {object} liquidContext
     */
    SIMSRefreshButtonOnClickOnFormOnload: function (liquidContext) {
        CAT.DSRM.ServiceRequestCommon.HideShowSIMSRefreshButton(liquidContext);
        $("#page_ribbon_sims_refresh_button").length > 0 ? $("#page_ribbon_sims_refresh_button").click(function () {
            CAT.DSRM.ServiceRequestCommon.SIMSRefreshButtonOnClick(liquidContext);
        }) : null;
    },
    /**
     * HideShow ribbon SIMS Refresh button
     * @param {object} liquidContext
     */
    HideShowSIMSRefreshButton: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var hasEditAccess = liquidContext.hasEditAccess;
        CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_sims_refresh_button"), false);
        $("#page_ribbon_sims_refresh_button").prop('disabled', true);
        if (formType !== CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && hasEditAccess !== "false") {
            CAT.DSRM.ServiceRequestCommon.SetVisible($("#page_ribbon_sims_refresh_button"), true);
            $("#page_ribbon_sims_refresh_button").prop('disabled', false);
        }
    },
    /**
    * SimsRefresh Button
    * @param {object} liquidContext
    */
    SIMSRefreshButtonOnClick: function (liquidContext) {
        if (!liquidContext)
            return;
        var serialNumber = $("#cat_productserialnumber").length > 0 ? $("#cat_productserialnumber").val() : null;
        if (serialNumber) {
            $(CAT.DSRM.PortalConstants.FORM_ACTION_LOADING_SPINNER).show();
            CAT.DSRM.CallToServices.CallToService("BUTTON", true);
        }
    },
    /**
     * Function on click of Get Record Count button
     * @param {object} liquidContext
     */
    GetRecordCountButtonOnClick: function (liquidContext) {
        $("#page_ribbon_get_record_count_button").length > 0 ? $("#page_ribbon_get_record_count_button").click(function () {
            $("#page_ribbon_get_record_count_spinner").show();
            $("#page_ribbon_get_record_count_glyphicon").hide();
            let oDataQueryForSelectedView = $("#txtODataQueryForSelectedView").val();
            let selectMatch = oDataQueryForSelectedView.match(/[?&]?\$select=([^&]+)(&|$)/);
            let selectValue = "";
            let selectedColumns = "";
            if (selectMatch && selectMatch.length > 0) {
                selectValue = selectMatch[1];
                selectedColumns = selectValue.split(',');
                if (selectedColumns.length > 1) {
                    oDataQueryForSelectedView = oDataQueryForSelectedView.replace(selectValue, selectedColumns[0]);
                }
            }
            let skipTokenMatch = oDataQueryForSelectedView.match(/[?&]?\$skiptoken=([^&]+)(&|$)/);
            let skipTokenValue = "";
            if (skipTokenMatch && skipTokenMatch.length > 0) {
                skipTokenValue = skipTokenMatch[0];
                oDataQueryForSelectedView = oDataQueryForSelectedView.replace(skipTokenValue, "");
            }
            let oDataQuery = { "query": oDataQueryForSelectedView, "length": "all" };
            CAT.DSRM.WebApi.RetrieveRecords(oDataQuery, function (result) {
                if (result && result.length > 0 && result != "Not Found") {
                    alert("Records count is " + result.length);
                }
                $("#page_ribbon_get_record_count_spinner").hide();
                $("#page_ribbon_get_record_count_glyphicon").show();
            }, function (e) {
                if (e) {
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
                    $("#page_ribbon_get_record_count_spinner").hide();
                    $("#page_ribbon_get_record_count_glyphicon").show();
                }
            }, true);
        }) : null;
    },
    /**
    * Function on click of + New button
    * @param {string} entityName
    * @param {boolean} isNewTab
    */
    RibbonNewEventHandler: function (entityName, isNewTab) {
        $("#page_ribbon_new_button").length > 0 ? $("#page_ribbon_new_button").click(function () {
            entityName.startsWith("cat_") ? null : entityName = "cat_" + entityName;
            var url = "/" + entityName + "/" + entityName + "_create";
            if (isNewTab) {
                window.open(url, '_blank');
            } else {
                location.href = "/" + entityName + "/" + entityName + "_create";
            }
        }) : null;
    },
    /**
     * Function to check SR is globally shared or not
     * @param {object} liquidContext
     */
    IsSrGloballyShared: function (liquidContext) {
        if (!liquidContext)
            return;
        if (liquidContext.globalAccountId && liquidContext.globalAccountId != null) {
            return true;
        }
        return false;
    },
    /**
     * Function to check logged in user contact and sr dealer contact is in same dealership or not
     * @param {object} liquidContext
     */
    IsUserIsInSameDealership: function (liquidContext) {
        if (!liquidContext)
            return;

        var inDealership = false;
        var srDealerContactRecord;
        var currentLoggedInContactId = liquidContext.loggedinContactId && liquidContext.loggedinContactId.length > 0 ? liquidContext.loggedinContactId : null;
        var currentLoggedInContactDealership = liquidContext.myDealership && liquidContext.myDealership.length > 0 ? liquidContext.myDealership : null;
        var currentLoggedInContactParentAccountId = liquidContext.parentDealerId && liquidContext.parentDealerId.length > 0 ? liquidContext.parentDealerId : null;
        var srDealerContactId = $("#cat_customerid").length > 0 && $("#cat_customerid").val() ? $("#cat_customerid").val().replace(/[{}]/g, "").toLowerCase() : liquidContext.srDealerContactId ? liquidContext.srDealerContactId : null;
        var srParentDealerCode = $("#cat_parentdealercode").length > 0 ? $("#cat_parentdealercode").val() : liquidContext.srParentDealerCode ? liquidContext.srParentDealerCode : null;
        var srParentAccountId = $("#cat_parentaccountid").length > 0 && $("#cat_parentaccountid").val() ? $("#cat_parentaccountid").val().replace(/[{}]/g, "").toLowerCase() : liquidContext.eventTypeRecordParentDealerId ? liquidContext.eventTypeRecordParentDealerId : null;

        if (currentLoggedInContactId && srDealerContactId && currentLoggedInContactId == srDealerContactId) {
            inDealership = true;
        }
        else if (currentLoggedInContactDealership && srParentDealerCode && currentLoggedInContactDealership == srParentDealerCode) {
            inDealership = true;
        }
        else if (currentLoggedInContactParentAccountId && srParentAccountId && currentLoggedInContactParentAccountId == srParentAccountId) {
            inDealership = true;
        }
        else if (!srParentAccountId && srDealerContactId) {
            srDealerContactRecord = CAT.DSRM.ServiceRequestCommon.GetContactDetails(liquidContext, srDealerContactId);
            if (currentLoggedInContactDealership && srDealerContactRecord.cat_mydealership && currentLoggedInContactDealership == srDealerContactRecord.cat_mydealership) {
                inDealership = true;
            }
        }

        return inDealership;
    },
    /**
     * Function to check Status and TTTMachineSinceSRSubmittedtoGDSN is Dirty
     * @param {object} liquidContext
     * @param {string} fieldId 
     */
    FieldIsDirty: function (liquidContext, fieldId) {
        if (!liquidContext)
            return;

        var fieldIsDirty = $("#" + fieldId).length > 0 ? $("#" + fieldId).hasClass("dirty") : null;
        if (fieldIsDirty)
            return true;
        else
            return false;
    },
    /**
     * Function to show confirmation for filling Trips to Machine - Product health and Product Technology Inquiry Type
     * @param {object} liquidContext
     * @param {string} formName 
     * @param {boolean} confirmation
     */
    PopUpForTripsToMachine: function (liquidContext, formName, confirmation) {
        if (!liquidContext)
            return;

        var status = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : null;
        var inquiryType = $("#cat_inquirytypeid").length > 0 ? $("#cat_inquirytypeid_name").val() : null;
        var TTTMachineSinceSRSubmittedtoGDSN = $("#cat_tripstomachinesincesubmittingsr").length > 0 ? $("#cat_tripstomachinesincesubmittingsr").val() : null;
        var tripsMachineIsDirty = CAT.DSRM.ServiceRequestCommon.FieldIsDirty(liquidContext, "cat_tripstomachinesincesubmittingsr");
        var StatusisDirty = CAT.DSRM.ServiceRequestCommon.FieldIsDirty(liquidContext, "cat_status_header");
        var isValid = true;

        if (!tripsMachineIsDirty && formName === CAT.DSRM.ServiceRequestCommon.FORM_DEALER_FULL && StatusisDirty && parseInt(status) === CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value && (inquiryType.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_PRODUCTHEALTH || inquiryType === CAT.DSRM.ServiceRequestCommon.INQUIRY_SYSTEMTECH_PRODUCTTECHNOLOGY)) {
            var confirmation = window.confirm(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_sr_trips_to_machine_confirmation"));
            if (confirmation) {
                if (!TTTMachineSinceSRSubmittedtoGDSN) {
                    isValid = false;
                    window.setTimeout(function () {
                        if ($("#cat_tripstomachinesincesubmittingsr").length > 0) {
                            $("#cat_tripstomachinesincesubmittingsr") ? CAT.DSRM.ServiceRequestCommon.SetVisible("cat_tripstomachinesincesubmittingsr", true) : null;
                            CAT.DSRM.ServiceRequestCommon.ScrollAndFocus("cat_tripstomachinesincesubmittingsr");
                            return isValid;
                        }
                    }, 500);
                }
            }
        }
        return isValid;
    },
    /**
     * Function to set owner if the dealer contact is changed on save
     * @param {object} liquidContext
     */
    SetOwnerOnSave: function (liquidContext) {
        if (!liquidContext)
            return;
        var formType = liquidContext.formType;
        var customerId = liquidContext.dealerContact;
        var contactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        var contactName = $("#cat_customerid").length > 0 ? $("#cat_customerid_name").val() : null;
        var status = $("#cat_status").length > 0 ? $("#cat_status").val() : null;
        var statusVal = status ? parseInt(status) : null;
        var selectEntityName = (liquidContext.eventTypeLogicalName === "cat_globalwarranty") ? "cat_globalwarranties" : liquidContext.eventTypeLogicalName + "s";
        var recordData = {};
        if (formType != CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_CREATE && contactId && (contactId !== customerId)) {
            if (statusVal != CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value && statusVal != CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value && statusVal != CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value) {
                //Owner Contact
                let isOwnerContactDisabled = $("#cat_ownercontactid").length > 0 ? $("#cat_ownercontactid_name").is(":disabled") : CAT.DSRM.ServiceRequestCommon.ISOWNERCONTACTNOTONFORM;
                if (!isOwnerContactDisabled) {
                    let ownerContactLookupValue = { guid: contactId, name: contactName, entityName: "contact" };
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_ownercontactid", ownerContactLookupValue);
                }
                else {
                    recordData["cat_ownercontactid@odata.bind"] = "/contacts(" + contactId.replace(/[{}]/g, "") + ")";
                }

                var selectQuery = "contacts(" + contactId.replace(/[{}]/g, "") + ")?$select=_cat_userid_value";
                CAT.DSRM.WebApi.RetrieveRecords(selectQuery, function (results) {
                    if (results) {
                        //Owner
                        if (results._cat_userid_value) {
                            recordData["ownerid@odata.bind"] = "/systemusers(" + results._cat_userid_value.replace(/[{}]/g, "") + ")";
                        } else {
                            recordData["ownerid@odata.bind"] = "/systemusers(" + CAT.DSRM.ServiceRequestCommon.APPLICATION_USER_ID + ")";
                        }

                        // ISO 8601 Date time Format to support Dataverse API
                        let currentMoment = moment();
                        recordData.cat_modifiedonportal = currentMoment.toISOString();

                        var successCallbackUpdate = function () {
                            console.log("Record update Successfully");
                        };
                        var errorCallbackUpdate = function (e) {
                            console.log("Record update Error: " + e);
                        };
                        CAT.DSRM.WebApi.UpdateRecord(selectEntityName, liquidContext.eventTypeRecordId, recordData, successCallbackUpdate, errorCallbackUpdate, false, null);
                    }
                }, function (e) {
                    CAT.DSRM.ServiceRequestCommon.OnServiceError(e);
                }, false);
            }
        }
    },
    /**
     * Function to convert date time fields timezone based on contact timezone on load
     * @param {object} liquidContext
     */
    SetContactTimezoneBasedDateTimeFields: async function (liquidContext) {
        if (!liquidContext)
            return;

        //Getting logged in contact timezone
        await CAT.DSRM.ServiceRequestCommon.GetContactTimeZone(liquidContext);

        //Setting Contact Timezone based datetime in footer
        let footerDate = $(".footer-date").length > 0 ? $(".footer-date").text() : null;
        let contactTimeZonefooterDate = null;
        if (footerDate) {
            switch (liquidContext.websiteLanguage) {
                case "en-US":
                    contactTimeZonefooterDate = moment.utc(footerDate, "dddd, MMMM DD, YYYY hh:mm A").tz(CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone).format("dddd, MMMM DD, YYYY hh:mm A");
                    break;
                case "fr-FR":
                    contactTimeZonefooterDate = moment.utc(footerDate, "dddd DD MMMM YYYY HH: mm").tz(CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone).format("dddd DD MMMM YYYY HH:mm");
            }
            $(".footer-date").text(contactTimeZonefooterDate);
        }

        //Return if local & contact timezone are same
        if (CAT.DSRM.ServiceRequestCommon.IS_SAME_CURRENT_TIMEZONE)
            return;

        //Setting Contact Timezone based datetime for all datetime fields
        let dtp = $('input.datetime.form-control[data-type="datetime"][data-behavior="UserLocal"], input.datetime.form-control[data-type="date"][data-behavior="UserLocal"]');
        if (dtp.length > 0) {
            //Editable Fields
            dtp.filter(function () {
                return this.classList[2] == null && !this.readOnly && !this.nextElementSibling.children[0].readOnly;
            }).each(function (i) {
                let dateTimePicker = $(this).next().data("DateTimePicker");
                dateTimePicker.timeZone(CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone);
                let dateTimeFieldId = $(this).attr("id");
                let dateTimeFieldValue = $("#" + dateTimeFieldId).val();
                if (!dateTimeFieldValue) {
                    dateTimePicker.date(moment());
                    dateTimePicker.date(null);
                }
                else {
                    dateTimePicker.date(moment(dateTimeFieldValue));
                }
                $(this).removeClass("dirty");
            });
            //Non-Editable Fields
            dtp.filter(function () {
                return this.classList[2] != null || this.readOnly || this.nextElementSibling.children[0].readOnly;
            }).each(function (i) {
                let dateTimePicker = $(this).next().data("DateTimePicker");
                dateTimePicker ? dateTimePicker.timeZone(CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone) : null;
                let dateTimeFieldId = $(this).attr("id");
                let dateTimeFieldValue = $("#" + dateTimeFieldId).val();
                if (dateTimeFieldValue) {
                    CAT.DSRM.ServiceRequestCommon.SetValue(dateTimeFieldId, dateTimeFieldValue, true);
                }
            });
        }

        //Setting Contact Timezone based datetime fields in the Quick View Form
        let iframes = $('iframe');
        if (iframes.length > 0) {
            iframes.each(function () {
                $(this).on('load', function () {
                    if (this.classList[0] === 'quickform') {
                        let quickViewFormId = $(this).attr('id');
                        let quickViewFormContent = $('#' + quickViewFormId).contents();
                        if (quickViewFormContent.length > 0) {
                            quickViewFormContent.find('[data-type="datetime"][data-behavior="UserLocal"], [data-type="date"][data-behavior="UserLocal"]').each(function () {
                                let dateTimeDisplayControl = $(this).nextAll(".datetimepicker").children("input");
                                let dateFormat = dateTimeDisplayControl.attr("data-date-format");
                                let dateTimeFieldValue = $(this).attr("value");
                                if (dateTimeFieldValue) {
                                    let displayValue = moment(dateTimeFieldValue).tz(CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone).format(dateFormat);
                                    quickViewFormContent.find(dateTimeDisplayControl).val(displayValue);
                                }
                                $(this).removeClass("dirty");
                            });
                        }
                    }
                });
            });
        }
    },
    /**
     * Funciton to get the contact timezone name
     * @param {object} liquidContext
     */
    GetContactTimeZone: async function (liquidContext) {
        if (!liquidContext)
            return;
        let contactTimeZone = null;
        let websiteLanguage = liquidContext.websiteLanguage;
        if (websiteLanguage === "en-US") {
            contactTimeZone = liquidContext.contactTimeZone;
        }
        else {
            //Get the logged in contact timezone in English
            let loggedinContactId = liquidContext.loggedinContactId;
            if (loggedinContactId) {
                let selectQuery = "contacts?$select=cat_contacttimezone&$filter=contactid eq " + loggedinContactId;
                let result = await CAT.DSRM.WebApi.RetrieveRecords(selectQuery);
                contactTimeZone = result[0]["cat_contacttimezone@OData.Community.Display.V1.FormattedValue"];
            }
        }
        let contactTimeZoneOffset = 0;
        let currentTimeZoneOffset = (new Date().getTimezoneOffset()) * -1;
        let momentTimeZoneMatch = CAT.DSRM.ServiceRequestCommon.MOMENT_TIMEZONE_MAP.find(timeZone => timeZone.label === contactTimeZone);
        let momentTimeZone = momentTimeZoneMatch ? momentTimeZoneMatch.timezone : null;
        if (momentTimeZone) {
            contactTimeZoneOffset = moment.tz(momentTimeZone).utcOffset();
            CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.timezone = momentTimeZone;
            CAT.DSRM.ServiceRequestCommon.CONTACT_TIMEZONE_DETAILS.offset = contactTimeZoneOffset;
        }

        //Set true if local and contact timezone are same
        if (contactTimeZoneOffset === currentTimeZoneOffset) {
            CAT.DSRM.ServiceRequestCommon.IS_SAME_CURRENT_TIMEZONE = true;
        }
    },
    /**
     * Function to get all optionset fields available on form
     * @param {object} liquidContext
     */
    GetOptionsetsOnLoad: function (liquidContext) {
        $('select.picklist').each(function () {
            let fieldName = $(this).attr('id');
            if ($(this).find('option').length > 0) {
                let fieldOptions = {
                    fieldName: fieldName,
                    options: []
                };
                $(this).find('option').each(function () {
                    fieldOptions.options.push({
                        value: $(this).val(),
                        text: $(this).text()
                    });
                });
                CAT.DSRM.ServiceRequestCommon.OPTIONSETFIELDS.push(fieldOptions);
            }
        });
    },
    /**
     * Function to get options from constant
     * @param {string} fieldName
     * @param {object} defaultOption
     * @returns
     */
    GetOption: function (fieldName, defaultOption) {
        let field = CAT.DSRM.ServiceRequestCommon.OPTIONSETFIELDS.find(field => field.fieldName === fieldName);
        if (field) {
            let option = field.options.find(option => parseInt(option.value) === defaultOption.value);
            if (option) {
                return option;
            }
        }
        return defaultOption;
    },
    /**
     * Function to populate the translated labels for the header html fields
     * @param {object} liquidContext
     */
    SetTranslatedLabelForHeaderFields: function (liquidContext) {
        if (!liquidContext && liquidContext.websiteLanguage && liquidContext.websiteLanguage === "en-US")
            return;
        let fieldMappings = [
            { source: "cat_eventtype", target: ".h2-heading" },
            { source: "cat_status", target: "cat_status_header" },
            { source: "cat_substatus", target: "cat_substatus_header" },
            { source: "cat_srstatus", target: "cat_status_header" }
        ];

        $.each(fieldMappings, function (index, field) {
            let sourceLabel = $(field.source.contains("cat_eventtype") ? "#" + field.source + " option:selected" : "label[for='" + field.source + "']");
            let targetLabel = $(field.target.contains(".h2-heading") ? field.target : "label[for='" + field.target + "']");
            if (sourceLabel.length && targetLabel.length) {
                if (sourceLabel.text()) {
                    targetLabel.text(sourceLabel.text());
                    !field.target.contains(".h2-heading") ? targetLabel.attr("title", sourceLabel.text()) : null;
                    if (liquidContext.eventTypeLogicalName === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.logicalName) {
                        if (field.source.contains("cat_eventtype")) {
                            sourceLabel = CAT.DSRM.ServiceRequestCommon.SetCustomTranslatedLabelForFields(liquidContext, liquidContext.eventTypeLogicalName, field.source);
                            sourceLabel ? targetLabel.text(sourceLabel) : null;
                        }
                    }
                    if (liquidContext.eventTypeLogicalName === CAT.DSRM.ServiceRequestCommon.EVENT_DEALERPPM.logicalName) {
                        if (field.source.contains("cat_substatus")) {
                            sourceLabel = CAT.DSRM.ServiceRequestCommon.SetCustomTranslatedLabelForFields(liquidContext, "cat_commonentity", field.source);
                            sourceLabel ? targetLabel.text(sourceLabel) : null;
                        }
                    }
                    if (liquidContext.relatedRecordLogicalName === "cat_servicerequestnote") {
                        if (field.source.contains("cat_srstatus")) {
                            sourceLabel = CAT.DSRM.ServiceRequestCommon.SetCustomTranslatedLabelForFields(liquidContext, liquidContext.relatedRecordLogicalName, field.source);
                            sourceLabel ? targetLabel.text(sourceLabel) : null;
                        }
                    }
                }
            }
        });
    },
    /**
     * Function to populate the translated labels for the header html fields
     * @param {object} liquidContext
     * @returns
     */
    SetCustomTranslatedLabelForFields: function (liquidContext, entityLogicalName, fieldLogicalName) {
        if (!liquidContext)
            return;
        let htmlTextsJsonString = liquidContext.htmlTexts;
        let htmlTextsJson = htmlTextsJsonString ? JSON.parse(htmlTextsJsonString) : null;
        let htmlText = htmlTextsJson ? htmlTextsJson[entityLogicalName][fieldLogicalName] : "";
        return htmlText;
    },
    /**
     * Function to retrive button html by id
     * @param {string} buttonId
     */
    GetButtonContentById: function (buttonId) {
        if (!buttonId)
            return;
        let buttonContent = "";
        if ($("#storedHtml").length > 0 && $("#storedHtml").find("#" + buttonId).length > 0) {
            buttonContent = $("#storedHtml").find("#" + buttonId).html().trim();
        }
        return buttonContent;
    },
    /**
     * Function to run before on load
     * @param {object} liquidContext
     */
    PreLoad: function (liquidContext) {
        //hide spinner when the page loads completely
        window.addEventListener('load', function () {
            CAT.DSRM.ServiceRequestCommon.StopSpinningLoader(liquidContext);
        });
        //show spinner on reload
        window.addEventListener('beforeunload', function () {
            CAT.DSRM.ServiceRequestCommon.ShowSpinningLoader(liquidContext);
        });
    },

    /**
    * * Enable function for Dealer Authorized Notes Share field
    * @param {object} liquidContext
    */
    EnableDealerAuthorizedNotesShareField: function (liquidContext) {
        if (!liquidContext) {
            return;
        }
        var eventType = $("#cat_eventtype").length > 0 ? parseInt($("#cat_eventtype").val()) : null;
        var dealerContactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        var inDealership = CAT.DSRM.ServiceRequestCommon.IsUserIsInSameDealership(liquidContext);
        let inquiryTypeName = $("#cat_inquirytypeid").length > 0 && $("#cat_inquirytypeid_name").val() ? $("#cat_inquirytypeid_name").val() : CAT.DSRM.ServiceRequestCommon.INQUIRYTYPENAME;
        if ((eventType === CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventType === CAT.DSRM.ServiceRequestCommon.EVENT_EMP.value || eventType === CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value || eventType === CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && $('#cat_dealerauthorizednotesshare').length > 0) {
            // If user is in Diff BU, disable the field regardless
            if (inDealership === false) {
                CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerauthorizednotesshare", true);
            }
            // Else check for contact match or admin
            else if (
                (dealerContactId && liquidContext.loggedinContactId && liquidContext.loggedinContactId.toUpperCase() === dealerContactId.toUpperCase()) || liquidContext.dealerAdmin === "true") {
                CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerauthorizednotesshare", false);
            } else {
                CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_dealerauthorizednotesshare", true);
            }
        }
        if (inquiryTypeName.toUpperCase() === CAT.DSRM.ServiceRequestCommon.INQUIRY_DSN_SIFEXPOSURE) {
            CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerauthorizednotesshare", CAT.DSRM.ServiceRequestCommon.DEALER_AUTHORIZED_NOTES_SHARE_NO.value);
            $("#cat_dealerauthorizednotesshare").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetDisabled($("#cat_dealerauthorizednotesshare"), true) : null;
        }
    },
    /**
     * * Alert for Dealer Authorized Notes Share field when option set is Yes
     * @param {any} liquidContext
     */
    AlertForDealerAuthorizationNoteShare: function (liquidContext) {
        if (!liquidContext) {
            return;
        }
        var dealerContactId = $("#cat_customerid").length > 0 ? $("#cat_customerid").val() : null;
        if ((dealerContactId && liquidContext.loggedinContactId && liquidContext.loggedinContactId.toUpperCase() === dealerContactId.toUpperCase()) || liquidContext.dealerAdmin === "true") {
            var notesShared = $("#cat_dealerauthorizednotesshare").length > 0 ? $("#cat_dealerauthorizednotesshare").val() : null;
            if (notesShared === "0") {
                var confirmMessage = window.confirm(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_msg_dealer_authorized_notes_shared"));
                if (confirmMessage === false) {
                    $("#cat_dealerauthorizednotesshare").length > 0 ? CAT.DSRM.ServiceRequestCommon.SetValue("cat_dealerauthorizednotesshare", CAT.DSRM.ServiceRequestCommon.DEALER_AUTHORIZED_NOTES_SHARE_NO.value) : null;
                }
            }
        }
    },
    CheckCreatedByrole: function (liquidContext) {
        if (!liquidContext)
            return;
        var contactDetails = CAT.DSRM.ServiceRequestCommon.GetContactDetails(liquidContext, liquidContext.loggedinContactId);
        var isDealerEdit = (liquidContext.eventType == CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value && contactDetails.cat_accessdsn == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) || (liquidContext.eventType == CAT.DSRM.SRNote.EVENT_PARTSTECH.value && contactDetails.cat_accessparts == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) || (liquidContext.eventType == CAT.DSRM.SRNote.EVENT_SYSTEMTECH.value && contactDetails.cat_accesssystemtech == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) || (liquidContext.eventType == CAT.DSRM.SRNote.EVENT_EMP.value && contactDetails.cat_accessemp == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT);
        var isTechEdit = (liquidContext.eventType == CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value && (contactDetails.cat_accessdsn == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT || contactDetails.cat_accessdsn == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)) || (liquidContext.eventType == CAT.DSRM.SRNote.EVENT_PARTSTECH.value && (contactDetails.cat_accessparts == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT || contactDetails.cat_accessparts == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)) || (liquidContext.eventType == CAT.DSRM.SRNote.EVENT_SYSTEMTECH.value && (contactDetails.cat_accesssystemtech == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT || contactDetails.cat_accesssystemtech == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN)) || (liquidContext.eventType == CAT.DSRM.SRNote.EVENT_EMP.value && contactDetails.cat_accessemp == CAT.DSRM.SRNote.DEALER_ACCESS_TECHEDIT);
        var createdByRole = null;
        if (isDealerEdit) {
            createdByRole = CAT.DSRM.ServiceRequestCommon.CreatedByRoles.TC.value;
        } else if (isTechEdit) {
            createdByRole = CAT.DSRM.ServiceRequestCommon.CreatedByRoles.TECH.value;
        }
        return createdByRole;
    },
    /**
    * * Function to enable status PDA on select of TECH EDIT STATUS TO OPEN Dealer Access 
    * @param {any} liquidContext
    */
    AllowTechToChangeStatusInForm: function (liquidContext) {
        if (!liquidContext)
            return;
        var dealerAccess = liquidContext?.dealerAccess;
        var status = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : null;
        var formType = liquidContext?.formType;
        var loggedInUserContact = liquidContext?.loggedinContactId;
        var technicianId = liquidContext?.techContact;
        var eventTypeValue = $("#cat_eventtype").length > 0 ? $("#cat_eventtype").val() : null;
        //var accessDsnTechToChangeStatus = liquidContext.accessDsnTechToChangeStatus;
        //  Enable or disable 'cat_status_header' based on all conditions
        if (formType == CAT.DSRM.ServiceRequestCommon.CRM_FORM_TYPE_UPDATE && loggedInUserContact == technicianId && (eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_DSN.value || eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_PARTSTECH.value || eventTypeValue == CAT.DSRM.ServiceRequestCommon.EVENT_SYSTEMTECH.value) && dealerAccess == CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_TECHEDIT_STATUSTOOPEN && status == CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value) {
            // Enable the field
            CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_status_header", false);
        }
    },

    CPINumberOnChange: function (liquidContext) {
        if (!liquidContext)
            return;
        var cpiNumber = $("#cat_cpinumber").length > 0 && $("#cat_cpinumber").val() ? $("#cat_cpinumber").val().split(";")[0] : null;
        if (cpiNumber) {
            var teamLeadURL = "";
            //for production, take the prod url
            if (window.location.href.indexOf("dev") > -1 || window.location.href.indexOf("uat") > -1) {
                teamLeadURL = "https://dvapiq.rd.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json";
            }
            else {
                teamLeadURL = "https://dvapi.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json";
            }
            var fetchCPITeamLeadEmailObject =
            {
                //cpiurl: "https://dvapi.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json",
                //cpiurl: "https://dvapiq.rd.cat.com/icc2/getcpiteamlead/views/getcpiteamlead?cpi_number=" + cpiNumber + "&$format=json",
                cpiurl: teamLeadURL,
            };
            CAT.DSRM.WebApi.CallAction('cat_fetchcpiteamleademail',
                fetchCPITeamLeadEmailObject,
                function (result) {
                    CAT.DSRM.ServiceRequestCommon.VerifyCPIResponse(result);
                },
                function (e) {
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpinumber", null);
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber", null);
                    CAT.DSRM.ServiceRequestCommon.SetValue("cat_cpiprimarynumber_header", null, true);
                    let alertcpinumberinvalid = CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_cpi_number_invalid");
                    alert(alertcpinumberinvalid);
                }, false);
        }
    },

    /**
    * Function to enable When is tech returning to the unit field
    * @param {any} liquidContext
    * @returns
    */
    WhenisTechReturningToTheUnitFieldBehaviour: function (liquidContext) {
        if (!liquidContext) {
            return;
        }
        var statusVal = $("#cat_status_header").length > 0 ? $("#cat_status_header").val() : 0;
        var status = parseInt(statusVal);
        var dealerContactOnSR = liquidContext.dealerContact;
        var loggedInContact = liquidContext.loggedinContactId;
        var dealerAccess = liquidContext.dealerAccess;
        var dealerAdmin = liquidContext.dealerAdmin;

        CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_whenistechreturningtotheunit", true);
        CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_whenistechreturningtotheunit", false);

        if (status && dealerAccess && dealerAccess === CAT.DSRM.ServiceRequestCommon.DEALER_ACCESS_EDIT) {
            if ((dealerAdmin && dealerAdmin === "true" && (status == CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || status == CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value))
                || (dealerContactOnSR && loggedInContact && dealerContactOnSR === loggedInContact && (status == CAT.DSRM.ServiceRequestCommon.STATUS_DEALEROPEN.value || status == CAT.DSRM.ServiceRequestCommon.STATUS_SUBMITTED.value || status == CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value || status == CAT.DSRM.ServiceRequestCommon.STATUS_PENDINGDEALERACTION.value || status == CAT.DSRM.ServiceRequestCommon.STATUS_CLOSED.value))) {
                CAT.DSRM.ServiceRequestCommon.SetDisabled("cat_whenistechreturningtotheunit", false);

                if (status == CAT.DSRM.ServiceRequestCommon.STATUS_OPEN.value) {
                    CAT.DSRM.ServiceRequestCommon.SetRequiredLevel("cat_whenistechreturningtotheunit", true);
                }
            }
        }
    },
    /**
     * Function to validate Associated URL field
     * @param {any} liquidContext
     * @returns
     */
    AssociatedURLValidation: function (liquidContext, isOnSave) {
        if (!liquidContext)
            return;
        let associatedURL = $("#cat_associatedurl_urlComponent").length > 0 ? $("#cat_associatedurl_urlComponent").val() : null;
        let validUrlRegex = /^(?=.{11,})(?!.*@)(?!.*\s)(?=.*\.)https:\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}(.*)?$/;
        if (associatedURL && !validUrlRegex.test(associatedURL) && !isOnSave) {
            let confirmtion = window.confirm(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_associated_url_invalid"))
            if (confirmtion === true) {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_associatedurl_urlComponent", associatedURL);
            } else {
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_associatedurl_urlComponent", null);
                CAT.DSRM.ServiceRequestCommon.SetValue("cat_associatedurl", null);
            }
        }
        else if (associatedURL && !validUrlRegex.test(associatedURL) && isOnSave) {
            alert(CAT.DSRM.ServiceRequestCommon.GetGlobalSnippetValueById("cat_alert_associated_url_invalid"));
            return false;
        }
        return true;
    },
};

///**
//* Web API Wrapper Function
//*/
//(function (webapi, $) {
//    function safeAjax(ajaxOptions) {
//        var deferredAjax = $.Deferred();

//        shell.getTokenDeferred().done(function (token) {
//            // add headers for ajax
//            if (!ajaxOptions.headers) {
//                $.extend(ajaxOptions, {
//                    headers: {
//                        "__RequestVerificationToken": token
//                    }
//                });
//            } else {
//                ajaxOptions.headers["__RequestVerificationToken"] = token;
//            }
//            $.ajax(ajaxOptions)
//                .done(function (data, textStatus, jqXHR) {
//                    validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
//                }).fail(deferredAjax.reject); //ajax
//        }).fail(function () {
//            deferredAjax.rejectWith(this, arguments); // on token failure, pass the token ajax and args
//        });

//        return deferredAjax.promise();
//    }
//    webapi.safeAjax = safeAjax;
//})(window.webapi = window.webapi || {}, jQuery)
