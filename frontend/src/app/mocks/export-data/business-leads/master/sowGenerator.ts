import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "Statement of Work Generator";
let headers: any = [
    {
        header: "SOW #",
        key: "SOWCode",
        ...EXCEL_STYLE
    },
    {
        header: "SOW Date",
        key: "SOWCreationDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer/Prospect",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Contract Value",
        key: "fixedSOWPrice",
        ...EXCEL_STYLE
    },
    {
        header: "Support Value",
        key: "monthlySupportRate",
        ...EXCEL_STYLE
    }
];
export const SOW_GENERATOR_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SOW_GENERATOR_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
