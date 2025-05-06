import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "Statement of NDA Generator";
let headers: any = [
    {
        header: "NDA #",
        key: "NDACode",
        ...EXCEL_STYLE
    },
    {
        header: "NDA Date",
        key: "NDACreationDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer/Prospect",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "NDA Year",
        key: "NDAYear",
        ...EXCEL_STYLE
    }
];
export const NDA_GENERATOR_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const NDA_GENERATOR_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
