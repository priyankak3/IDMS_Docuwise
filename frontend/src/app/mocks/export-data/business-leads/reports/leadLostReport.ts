import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Lead Lost Report";
let headers: any = [
    {
        header: "Lead No",
        key: "leadNo",
        ...EXCEL_STYLE
    },
    {
        header: "Lead Date",
        key: "leadDate",
        ...EXCEL_STYLE
    },
    {
        header: "Lead Category",
        key: "leadCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Prospect Name",
        key: "prospectName",
        ...EXCEL_STYLE
    },
    {
        header: "Interest Area",
        key: "interestArea",
        ...EXCEL_STYLE
    },
    {
        header: "Interest Level",
        key: "interestLevel",
        ...EXCEL_STYLE
    },
    {
        header: "RDD",
        key: "reqDemoDate",
        ...EXCEL_STYLE
    },
    {
        header: "Lead Owner",
        key: "leadOwner",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "result",
        ...EXCEL_STYLE
    },
    {
        header: "Lead Closure date",
        key: "updatedAt",
        ...EXCEL_STYLE
    }
];
export const LEAD_LOST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const LEAD_LOST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
