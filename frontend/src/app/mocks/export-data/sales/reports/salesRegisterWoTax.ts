import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Sales Register";
let headers: any = [
    {
        header: "Doc. Date",
        key: "serviceInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "GSTIN",
        key: "GSTIN",
        ...EXCEL_STYLE
    },
    {
        header: "Doc. No.",
        key: "serviceInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Taxable Value",
        key: "taxableValue",
        ...EXCEL_STYLE
    },
    {
        header: "CGST- 9%",
        key: "cgstAmount",
        ...EXCEL_STYLE
    },
    {
        header: "SGST- 9%",
        key: "sgstAmount",
        ...EXCEL_STYLE
    },
    {
        header: "IGST - 18%",
        key: "igstAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Gr. Sales Value",
        key: "totalValueWithTax",
        ...EXCEL_STYLE
    }
];

export const SALES_REGISTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALES_REGISTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
