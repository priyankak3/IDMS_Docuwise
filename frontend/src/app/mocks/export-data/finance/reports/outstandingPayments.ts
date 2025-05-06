import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Outstanding Payments Report";
let headers: any = [
    {
        header: "#",
        key: "projectNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "GST #",
        key: "GSTAmount",
        ...EXCEL_STYLE
    },
    {
        header: "SOW Amount (₹)",
        key: "projectCost",
        ...EXCEL_STYLE
    },
    {
        header: "Total (₹)",
        key: "totalPaid",
        ...EXCEL_STYLE
    },
    {
        header: "Outstanding (₹)",
        key: "balanceAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Paid %",
        key: "paidPercent",
        ...EXCEL_STYLE
    },
    {
        header: "Balance %",
        key: "balancePercent",
        ...EXCEL_STYLE
    }
];

export const OUTSTANDING_PAYMENTS_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const OUTSTANDING_PAYMENTS_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
