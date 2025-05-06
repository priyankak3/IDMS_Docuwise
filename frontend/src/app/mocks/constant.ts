import {ChartType} from "chart.js";

export const SUB_MODULES_TYPES = {
    MASTER: "MASTER",
    TRANSACTION: "TRANSACTION",
    REPORT: "REPORT"
};
export const FG_CORRECTION_CATEGORY = ["Rename Batch", "Batch Transfer", "Quantity Correction"];
export const SUPPLIER_GST_ClASSIFICATION = [
    "Regular B2B",
    "Composition Dealer",
    "SEZ Supplier",
    "E-Com Operator",
    "Unregistered Dealer"
];
export const TOOLTIPS_DATA = [
    "• Total sales in March 2024",
    "• Monthly sales trend in 2023 ",
    "• Top 5 customers by sales ",
    "• Compare sales for Feb and March",
    "• How many invoices were unpaid last month?",
    "• What is the total SOW amount for all projects?",
    "• Customer-wise total paid amount.",
    "• Top 5 customers by outstanding amount.",
    "• List total outstanding for 'In Progress' projects.",
    "• How much has WATERPROOF CORPORATION PVT. LTD. paid till now?",
    "• Show status-wise project cost.",
    "• Total paid vs total outstanding comparison."
];
export const CHART_OPTIONS: {type: ChartType; label: string}[] = [
    {type: "bar", label: "Bar"},
    {type: "line", label: "Line"},
    {type: "pie", label: "Pie"},
    {type: "doughnut", label: "Doughnut"},
    {type: "polarArea", label: "Polar Area"},
    {type: "radar", label: "Radar"},
    {type: "scatter", label: "Scatter"},
    {type: "bubble", label: "Bubble"}
];
export const SUPPLIER_MSME_ClASSIFICATION = ["Micro", "Small", "Medium", "Large"];
export const SAC_CODE = "996511";
export const CHILD_ITEM_SOURCE_OF_MFG = ["Inhouse", "Outsourced"];
export const CHILD_ITEM_CATEGORY_NAME = ["L20/Child Item", "L30/Grand Child"];

// export const FORM_DEFAULT_STATUS = {
//   create: 'Created',
//   edit: 'Created',
//   approve: 'Approved',
//   cancel: 'Cancelled',
//   // getAllSalesOrderStatusArr: {},
// };
export const FORM_DEFAULT_ACTIONS = {
    create: "create",
    edit: "edit",
    view: "view",
    approve: "approve",
    reject: "reject",
    cancel: "cancel"
};
export const LIST_DEFAULT_PERMISSION_ACTIONS = {
    createAction: "createAction",
    viewAction: "viewAction",
    editAction: "editAction",
    deleteAction: "deleteAction",
    approveAction: "approveAction",
    downloadAction: "downloadAction",
    generateReportAction: "generateReportAction",
    rejectAction: "rejectAction",
    cancelledAction: "cancelledAction"
};
export const SUPPORT_ISSUE_STATUS = [
    "Open",
    "In Progress",
    "Fixed",
    "Deployed on Production",
    "Verified",
    "Closed",
    "Reopened",
    "On Hold",
    "Need Additional Info"
];
export const SKU_MASTER_DIMENSIONS_UNITS = {
    mm: "mm",
    cm: "cm",
    m: "m",
    ft: "ft",
    inch: "inch",
    getAllSKUMasterDimensionsUnit: function () {
        return [
            SKU_MASTER_DIMENSIONS_UNITS.mm,
            SKU_MASTER_DIMENSIONS_UNITS.cm,
            SKU_MASTER_DIMENSIONS_UNITS.m,
            SKU_MASTER_DIMENSIONS_UNITS.ft,
            SKU_MASTER_DIMENSIONS_UNITS.inch
        ];
    }
};
export const PURCHASE_ORDER_TYPE = {
    STANDARD_PO: "Standard PO",
    PLANNED_PO: "Planned PO",
    BLANKET_PO: "Blanket PO",
    getAllPurchasePOType: function () {
        return [PURCHASE_ORDER_TYPE.STANDARD_PO, PURCHASE_ORDER_TYPE.PLANNED_PO, PURCHASE_ORDER_TYPE.BLANKET_PO];
    }
};

export const SKU_STAGE_OPTIONS = {
    prototype: "Prototype",
    pilot: "Pilot",
    production: "Production",
    getAllSKUStage: function () {
        return [SKU_STAGE_OPTIONS.pilot, SKU_STAGE_OPTIONS.production];
    }
};
export const COST_SHEET_COMPONENTS = {
    direct: "Direct",
    indirect: "Indirect",
    getAllComponentType: function () {
        return [COST_SHEET_COMPONENTS.direct, COST_SHEET_COMPONENTS.indirect];
    }
};

export const SO_ORDER_TYPE = {
    Regular: "Regular",
    Planned: "Planned",
    // blanketSO: 'Blanket SO',
    getAllSOType: function () {
        return [
            {label: "Regular", value: SO_ORDER_TYPE.Regular},
            {label: "Planned", value: SO_ORDER_TYPE.Planned}
            // { label: 'Blanket SO', value: SO_ORDER_TYPE.blanketSO },
        ];
    }
};
export const PDIR_ENTRY_TEMPLATE = {
    IDMS: "IDMS",
    getAllPDIRTemplate: function () {
        return [{label: "IDMS", value: PDIR_ENTRY_TEMPLATE.IDMS}];
    }
};
export const MINUTES_OF_MEETING_TYPE = [
    {label: "Internal", value: "Internal"},
    {label: "External", value: "External"}
];
export const MINUTES_OF_MEETING_STATUS = [
    {label: "Open", value: "Open"},
    {label: "In Progress", value: "In Progress"},
    {label: "On Hold", value: "On Hold"},
    {label: "Closed", value: "Closed"}
];
export const PDI_ENTRY_RELEASE_STATUS = {
    approved: "Approved",
    rejected: "Rejected",
    needReValidation: "Need Re-Validation",
    deviation: "Deviation",
    getAllPDIEntryReleaseStatus: function () {
        return [
            {label: "Approved", value: "Approved"},
            {label: "Rejected", value: "Rejected"},
            {label: "Need Re-Validation", value: "Need Re-Validation"},
            {label: "Deviation", value: "Deviation"}
            // PDI_ENTRY_RELEASE_STATUS.approved,
            // PDI_ENTRY_RELEASE_STATUS.rejected,
            // PDI_ENTRY_RELEASE_STATUS.needReValidation,
        ];
    }
};
export const PARENT_ID = "000000000000000000000000";
export const QC_LEVEL_STATUS = [
    {
        QCLNo: "L1",
        QCLDescription: "Visual Inspection/Verification",
        QCLevels: "L1",
        select: false
    },
    {
        QCLNo: "L2",
        QCLDescription: "Verification of COA/Test Certificate",
        QCLevels: "L2",
        select: false
    },
    {
        QCLNo: "L3",
        QCLDescription: "Inspection Of Incoming Material",
        QCLevels: "L3",
        select: false
    },
    {
        QCLNo: "L4",
        QCLDescription: "Validation as per Quality Plan",
        QCLevels: "L4",
        select: false
    }
];

export const PRODUCT_MASTER_SOURCE_OF_MFG = {
    inhouse: "Inhouse",
    outsourced: "Outsourced",
    getAllProductSourceOfMFG: function () {
        return [
            {label: "Inhouse", value: "Inhouse"},
            {label: "Outsourced", value: "Outsourced"}
        ];
    }
};

export const PURCHASE_REGISTER_REPORT_NAME = {
    taxInvoiceByDate: "Tax Invoice, by Date",
    taxInvoiceBySupplier: "Tax Invoice, by Supplier",
    getAllReportName: function () {
        return [
            {label: "Tax Invoice, by Date", value: "Tax Invoice, by Date"},
            {
                label: "Tax Invoice, by Supplier",
                value: "Tax Invoice, by Supplier"
            }
        ];
    }
};

export const SALES_FORECAST_REPORT_NAME = {
    aodBalanceForecast: "AOD Balance Forecast",
    aodForecastByCustomer: "AOD Forecast by Customer",
    aodForecastBySKUName: "AOD Forecast by SKU Name",
    getAllReportName: function () {
        return [
            {label: "AOD Balance Forecast", value: "AOD Balance Forecast"},
            {label: "AOD Forecast by Customer", value: "AOD Forecast by Customer"},
            {label: "AOD Forecast by SKU Name", value: "AOD Forecast by SKU Name"}
        ];
    }
};
export const SALES_ORDER_REPORT_NAME = {
    aodBalanceSalesOrder: "AOD Balance Sales Order",
    aodSalesOrderByCustomer: "AOD Sales Order by Customer",
    aodSalesOrderBySKUName: "AOD Sales Order by SKU Name",
    getAllReportName: function () {
        return [
            {label: "AOD Balance Sales Order", value: "AOD Balance Sales Order"},
            {
                label: "AOD Sales Order by Customer",
                value: "AOD Sales Order by Customer"
            },
            {
                label: "AOD Sales Order by SKU Name",
                value: "AOD Sales Order by SKU Name"
            }
        ];
    }
};
export const PDIR_ENTRY_TEMPLATE_NAME = {
    genericPDIReport: "Generic PDI Report",
    customerPDIRMapping: "Customer PDIR Mapping",
    getAllTemplateName: function () {
        return [
            {label: "Generic PDI Report", value: "Generic PDI Report"},
            {label: "Customer PDIR Mapping", value: "Customer PDIR Mapping"}
        ];
    }
};

export const MRN_MFG_DATE_PERCENTAGE_SHELF_LIFE = 0.85;

export const INVENTORY_REPORT_NAME = {
    aodInventory: "AOD Inventory",
    aodInventoryBySupplier: "AOD Inventory by Supplier",
    aodInventoryByLocation: "AOD Inventory by Location",
    aodInventoryByItem: "AOD Inventory by Item",
    getAllInventoryReportName: function () {
        return [
            {label: "AOD Inventory", value: "AOD Inventory"},
            {
                label: "AOD Inventory by Supplier",
                value: "AOD Inventory by Supplier"
            },
            {
                label: "AOD Inventory by Location",
                value: "AOD Inventory by Location"
            },
            {
                label: "AOD Inventory by Item",
                value: "AOD Inventory by Item"
            }
        ];
    }
};

export const ASSET_CLASS_TYPE = {
    tangible: "Tangible",
    intangible: "Intangible",
    getAllClassType: function () {
        return [
            {label: "Tangible", value: "Tangible"},
            {label: "Intangible", value: "Intangible"}
        ];
    }
};

export const ASSET_CLASS_DEPRECIATION_AND_ENERGY_SPEC = [
    {label: "Yes", value: true},
    {label: "No", value: false}
];
export const PROJECT_STATUS = ["Created", "In Progress", "Closed", "On Hold"];
export const AUTO_RENEWAL = [
    {label: "Yes", value: "Yes"},
    {label: "No", value: "No"}
];
export const LEAD_OPPORTUNITY_STATUS = [
    {label: "In Progress", value: "In Progress"},
    {label: "On Hold", value: "On Hold"},
    {label: "Won", value: "Won"},
    {label: "Lost", value: "Lost"}
];
export const PROPOSAL_STATUS = [
    {label: "Sent", value: "Sent"},
    {label: "Accepted", value: "Accepted"},
    {label: "Rejected", value: "Rejected"},
    {label: "On Hold", value: "On Hold"}
];
export const TEMPLATE_DOCUMENT_TYPE = [
    {label: "SOW", value: "SOW"},
    {label: "NDA", value: "NDA"},
    {label: "Proposal", value: "Proposal"},
    {label: "Payment Follow-up Email", value: "Payment Follow-up Email"},
    {label: "Onboarding", value: "Onboarding"}
];

export const DEPLOYMENT_STATUS = [
    {label: "Planned", value: "Planned"},
    {label: "In Progress", value: "In Progress"},
    {label: "Partial", value: "Partial"},
    {label: "Deployed", value: "Deployed"},
    {label: "Rolled Back", value: "Rolled Back"},
    {label: "On Hold", value: "On Hold"}
];
export const DEPLOYMENT_FEATURE_TYPES = [
    {label: "Defect", value: "Defect"},
    {label: "Improvement", value: "Improvement"},
    {label: "Data Migration", value: "Data Migration"},
    {label: "Configuration", value: "Configuration"}
];
export const TRAINING_PLANNER_STATUS = [
    {label: "Planned", value: "Planned"},
    {label: "In Progress", value: "In Progress"},
    {label: "Partial", value: "Partial"},
    {label: "On Hold", value: "On Hold"},
    {label: "Completed", value: "Completed"}
];
export const TRAINING_MEDIUM = [
    {label: "G-Meet", value: "G-Meet"},
    {label: "In Person", value: "In Person"},
    {label: "On Call", value: "On Call"},
    {label: "Meeting", value: "Meeting"}
];
export const PROJECT_PRIORITY = [
    {label: "High", value: "High"},
    {label: "Medium", value: "Medium"},
    {label: "Low", value: "Low"}
];
export const CUSTOMER_ENGAGEMENT_TYPE = [
    {label: "Smart ERP", value: "Smart ERP"},
    {label: "Staff Augmentation", value: "Staff Augmentation"},
    {label: "Multiple", value: "Multiple"},
    {label: "Consulting", value: "Consulting"},
    {label: "Custom Development", value: "Custom Development"},
    {label: "Support", value: "Support"},
    {label: "Training", value: "Training"},
    {label: "Innovation", value: "Innovation"}
];

export const ROOT_CAUSE = [
    {label: "Code", value: "Code"},
    {label: "Data Issue", value: "Data Issue"}
];
export const RESULT = [
    {label: "Pass", value: "Pass"},
    {label: "Fail", value: "Fail"}
];
export const TOTAL_WEEKLY_WORKING_DAYS = [
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4},
    {label: 5, value: 5},
    {label: 6, value: 6},
    {label: 7, value: 7}
];

export const DEMO_TYPE = [
    {label: "Online", value: "Online"},
    {label: "Offline", value: "Offline"}
];
export const superAdminId = "64a687b4e9143bffd820fb3d";
export const DEMO_SCHEDULE_RESPONSE = [
    {
        srNo: 1,
        checkListParticulars: "Was the environment conducive for  a Demo?",
        checkBox: false
    },
    {
        srNo: 2,
        checkListParticulars: "Was the Demo attended by the authority?",
        checkBox: false
    },
    {
        srNo: 3,
        checkListParticulars: "Was the overall response to the demo favourable?",
        checkBox: false
    }
];

export const TRACKING_STATUS = [
    "Assigned",
    "Not Assigned",
    "In Progress",
    "Released to QA",
    "Released to Production",
    "Training Given",
    "Closed",
    "On Hold"
];
export const FEATURE_MANAGEMENT_STATUS = ["Not Started", "In Progress", "On Hold"];
export const FEATURE_TRACKING_STATUS = ["In Progress", "On Hold", "Complete"];
export const SUPPORT_CUSTOMER_STATUS = ["Active", "Inactive"];
export const FEATURE_QA_TRACKER_STATUS = ["In Progress", "Resolved"];
export const QA_STATUS = ["In Progress", "QA Passed", "QA Failed"];
export const DEPLOYMENT_NOTIFICATION_STATUS = ["In Progress", "Closed"];
export const FEATURE_NOTIFICATION_STATUS = ["In Progress", "Closed"];
export const MOCKUP_PROVIDER = ["SVG", "PDF File", "NA"];
// export const FEATURE_TYPE = [
//     {label: "Bug", value: "Bug"},
//     {label: "Improvement", value: "Improvement"},
//     {label: "Change Request", value: "Change Request"},
//     {label: "New Module", value: "New Module"}
// ];
export const STATUS_REPORT = ["In Progress", "Closed"];
export const EMPLOYEE_TIMESHEET_STATUS = ["Not Submitted", "Approved", "Submitted"];
export const TIMESHEET_TYPE = ["Billable", "Non-billable", "Holiday", "Leave"];

export const FEATURE_BIZ_FUNCTION = [
    {label: "Business Leads", value: "Business Leads"},
    {label: "Sales", value: "Sales"},
    {label: "Planning", value: "Planning"},
    {label: "Purchase", value: "Purchase"},
    {label: "Maintenance", value: "Maintenance"},
    {label: "Stores", value: "Stores"},
    {label: "Production", value: "Production"},
    {label: "Quality", value: "Quality"},
    {label: "Dispatch", value: "Dispatch"},
    {label: "HR & Admin", value: "HR & Admin"},
    {label: "Accounts", value: "Accounts"},
    {label: "Finance", value: "Finance"},
    {label: "Settings", value: "Settings"},
    {label: "Support", value: "Support"}
];

export const TRACK_FEATURE = ["Yes", "No"];
export const TYPO_CORRECTIONS: Record<string, string> = {
    fab: "february",
    jan: "january",
    mar: "march",
    apr: "april",
    jun: "june",
    jul: "july",
    aug: "august",
    sep: "september",
    oct: "october",
    nov: "november",
    dec: "december"
};
export const KNOWN_KEYWORDS = [
    "compare",
    "sales",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "2023",
    "2024",
    "2025",
    "customer",
    "region",
    "trend",
    "total",
    "paid",
    "unpaid",
    "invoices",
    "top",
    "count",
    "summary",
    "q1",
    "q2",
    "q3",
    "q4",
    "invoice",
    "payment",
    "outstanding",
    "amount",
    "scope",
    "cost",
    "balance",
    "due",
    "in progress",
    "completed",
    "pending",
    "delayed",
    "on hold",
    "week",
    "month",
    "quarter",
    "year",
    "last",
    "next",
    "today",
    "yesterday",
    "client",
    "company",
    "corporation"
];

export const DEVELOPMENT_TRACKING_REPORT_NAME = {
    developmentStatusReport: "Development Status Report",
    featureReleaseTimelineReport: "Feature Release Timeline Report",
    pendingReleaseReport: "Pending Release Report",
    customerSpecificDevelopmentReport: "Customer-Specific Development Report",
    TimeToReleaseAnalysisReport: "Time-to-Release Analysis Report",
    closedVSOpenFeaturesReport: "Closed vs. Open Features Report",
    getAllDevelopmentTrackingReportName: function () {
        return [
            {label: "Development Status Report", value: "Development Status Report"},
            {
                label: "Feature Release Timeline Report",
                value: "Feature Release Timeline Report"
            },
            {
                label: "Pending Release Report",
                value: "Pending Release Report"
            },
            {
                label: "Customer-Specific Development Report",
                value: "Customer-Specific Development Report"
            },
            {
                label: "Time-to-Release Analysis Report",
                value: "Time-to-Release Analysis Report"
            },
            {
                label: "Closed vs. Open Features Report",
                value: "Closed vs. Open Features Report"
            }
        ];
    }
};
export const FEATURE_MANAGEMENT_REPORT_NAME = {
    featureSummaryReport: "Feature Summary Report",
    featureBenefitsReport: "Feature Benefits Report",
    featureTimelineReport: "Feature Timeline Report",
    getAllFeatureManagementReportName: function () {
        return [
            {label: "Feature Summary Report", value: "Feature Summary Report"},
            {
                label: "Feature Benefits Report",
                value: "Feature Benefits Report"
            },
            {
                label: "Feature Timeline Report",
                value: "Feature Timeline Report"
            }
        ];
    }
};

export const PROJECT_MANAGEMENT_REPORT_NAME = {
    projectSummaryReport: "Project Summary Report",
    projectOverviewReport: "Project Overview Report",
    milestoneTrackingReport: "Milestone Tracking Report",
    financialSummaryReport: "Financial Summary Report",
    projectCostAllocationReport: "Project Cost Allocation Report",
    highPriorityProjectReport: "High Priority Project Report",
    projectFinancialMilestonesReport: "Project Financial Milestones Report",
    projectDeliveryMilestonesReport: "Project Delivery Milestones Report",
    getAllProjectReportName: function () {
        return [
            {label: "Project Summary Report", value: "Project Summary Report"},
            {label: "Project Overview Report", value: "Project Overview Report"},
            {
                label: "Milestone Tracking Report",
                value: "Milestone Tracking Report"
            },
            {
                label: "Financial Summary Report",
                value: "Financial Summary Report"
            },
            {
                label: "Project Cost Allocation Report",
                value: "Project Cost Allocation Report"
            },
            {
                label: "High Priority Project Report",
                value: "High Priority Project Report"
            },
            {
                label: "Project Financial Milestones Report",
                value: "Project Financial Milestones Report"
            },
            {
                label: "Project Delivery Milestones Report",
                value: "Project Delivery Milestones Report"
            }
        ];
    }
};
export const FEATURE_QA_TRACKER_REPORT_NAME = {
    defectSummaryReport: "Defect Summary Report",
    testResultsSummaryReport: "Test Results Summary Report",
    developerAssignmentReport: "Developer Assignment Report",
    priorityBasedDefectReport: "Priority-based Defect Report",
    rootCauseAnalysisReport: "Root Cause Analysis Report",
    QAProgressReport: "QA Progress Report",
    featureTestingHistoryReport: "Feature Testing History Report",
    resolutionTimeAnalysisReport: "Resolution Time Analysis Report",
    testerPerformanceReport: "Tester Performance Report",
    attachmentReport: "Attachment Report",
    getAllFeatureQATrackerReportName: function () {
        return [
            {label: "Defect Summary Report", value: "Defect Summary Report"},
            {
                label: "Test Results Summary Report",
                value: "Test Results Summary Report"
            },
            {
                label: "Developer Assignment Report",
                value: "Developer Assignment Report"
            },
            {
                label: "Priority-based Defect Report",
                value: "Priority-based Defect Report"
            },
            {
                label: "Root Cause Analysis Report",
                value: "Root Cause Analysis Report"
            },
            {
                label: "QA Progress Report",
                value: "QA Progress Report"
            },
            {
                label: "Feature Testing History Report",
                value: "Feature Testing History Report"
            },
            {
                label: "Resolution Time Analysis Report",
                value: "Resolution Time Analysis Report"
            },
            {
                label: "Tester Performance Report",
                value: "Tester Performance Report"
            },
            {
                label: "Attachment Report",
                value: "Attachment Report"
            }
        ];
    }
};
