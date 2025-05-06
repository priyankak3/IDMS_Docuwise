import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Proforma Invoice";
let headers: any = [
    {
        header: "Proforma Invoice #",
        key: "performaInvoiceNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Proforma Invoice Date",
        key: "serviceInvoiceDate",
        ...EXCEL_STYLE
    },
    {
        header: "Invoice Value",
        key: "invoiceAmount",
        ...EXCEL_STYLE
    },
    {
        header: "GST Amount",
        key: "totalTaxAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Total Invoice Value",
        key: "totalAmountWithTax",
        ...EXCEL_STYLE
    },
    {
        header: "PO No.",
        key: "PONo",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Currency",
        key: "currency",
        ...EXCEL_STYLE
    }
];

export const PERFORMA_INVOICE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PERFORMA_INVOICE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
