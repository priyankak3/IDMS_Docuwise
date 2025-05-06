import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "COA Master";
let headers: any = [
    {
        header: "Account ID",
        key: "accNo",
        ...EXCEL_STYLE
    },
    {
        header: "Ledger Account",
        key: "ledgerAcc",
        ...EXCEL_STYLE
    },
    {
        header: "Account Type",
        key: "accType",
        ...EXCEL_STYLE
    },
    {
        header: "Primary A/c",
        key: "primaryAcc",
        ...EXCEL_STYLE
    },
    {
        header: "Account Group",
        key: "group",
        ...EXCEL_STYLE
    },
    {
        header: "Nature",
        key: "nature",
        ...EXCEL_STYLE
    },
    {
        header: "LFS",
        key: "linkedFinancialStatement",
        ...EXCEL_STYLE
    },
    {
        header: "Rev #",
        key: "revisionNo",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const COA_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COA_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
