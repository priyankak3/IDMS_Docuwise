import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Upload Document Template Master";
let headers: any = [
    {
        header: "Document Name",
        key: "documentName",
        ...EXCEL_STYLE
    },
    {
        header: "Document Type",
        key: "documentType",
        ...EXCEL_STYLE
    },
    {
        header: "Upload Template",
        key: "uploadTemplateDocUrl",
        ...EXCEL_STYLE
    }
];

export const UPLOAD_DOC_TEMPLATE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const UPLOAD_DOC_TEMPLATE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
