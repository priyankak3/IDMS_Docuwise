import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Change Request";
let headers: any = [
    {
        header: "CR No.",
        key: "CRNo",
        ...EXCEL_STYLE
    },
    {
        header: "CR Date",
        key: "createdAt",

        ...EXCEL_STYLE
    },
    {
        header: "Customer",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Start Date",
        key: "plannedStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "End Date",
        key: "plannedEndDate",
        ...EXCEL_STYLE
    },
    {
        header: "CR Amount",
        key: "CRAmount",
        ...EXCEL_STYLE
    },
    {
        header: "CR Status",
        key: "CRStatus",
        ...EXCEL_STYLE
    }
];
export const CHANGE_REQUEST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const CHANGE_REQUEST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
