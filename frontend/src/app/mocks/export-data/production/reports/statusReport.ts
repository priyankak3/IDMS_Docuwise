import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto",
    "auto"
];
let title = "Status Report";
let headers: any = [
    {
        header: "Starting Week Date ",
        key: "startingWeekDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer",
        key: "customer",
        ...EXCEL_STYLE
    },

    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Current Status Of This Week",
        key: "currentStatus",
        ...EXCEL_STYLE
    },
    {
        header: "Planned Work for Next Week",
        key: "plannedWorkForNextWeek",
        ...EXCEL_STYLE
    },
    {
        header: "Trainings Given",
        key: "trainingsGiven",
        ...EXCEL_STYLE
    },
    {
        header: "Any Blockers",
        key: "anyBlockers",
        ...EXCEL_STYLE
    },

    {
        header: "Client Feedback",
        key: "clientFeedback",
        ...EXCEL_STYLE
    },
    {
        header: "Quality of Data Feeds",
        key: "qualityDataFeeds",
        ...EXCEL_STYLE
    },
    {
        header: "Modules of IDMS They Are Using",
        key: "modulesOfIDMS",
        ...EXCEL_STYLE
    },
    {
        header: "Payment Status",
        key: "paymentStatus",
        ...EXCEL_STYLE
    },
    {
        header: "Any Invoices Triggered",
        key: "anyInvoicesTriggered",
        ...EXCEL_STYLE
    },
    {
        header: "Any Planned Invoices",
        key: "anyPlannedInvoices",
        ...EXCEL_STYLE
    },
    {
        header: "Any Pending Work",
        key: "anyPendingWork",
        ...EXCEL_STYLE
    }
];
export const STATUS_REPORT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const STATUS_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
