import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*","*", "*","*"];
let title = "Support Customer";
let headers: any = [
    {
        header: "Customer Code #",
        key: "customerCode",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name Description",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Category. Function",
        key: "customerCategory",
        ...EXCEL_STYLE
    },
    {
        header: "Country Type",
        key: "country",
        ...EXCEL_STYLE
    },
    {
        header: "Support Start Date Date",
        key: "supportStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "Support Amount (PM)",
        key: "supportAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const SUPPORT_CUSTOMER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SUPPORT_CUSTOMER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
