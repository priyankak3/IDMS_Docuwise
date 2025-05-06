import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Template Master";
let headers: any = [
    {
        header: "Document Type",
        key: "documentType",
        ...EXCEL_STYLE
    },
    {
        header: "Document Ref.",
        key: "documentRef",
        ...EXCEL_STYLE
    },
    {
        header: "Document Description",
        key: "documentDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Template DocumentFile",
        key: "templateDocumentFileUrl",
        ...EXCEL_STYLE
    }
];

export const TEMPLATE_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TEMPLATE_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
