import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'Proforma Invoice Report';
let headers: any =  [
    {
      header: 'Proforma Invoice #',
      key: 'performaInvoiceNumber',
      ...EXCEL_STYLE,
    },
    {
      header: 'Proforma Invoice Date',
      key: 'serviceInvoiceDate',
      ...EXCEL_STYLE,
    },
    {
      header: 'Customer Category',
      key: 'customerCategory',
      ...EXCEL_STYLE,
    },
    {
      header: 'Customer Name',
      key: 'customerName',
      ...EXCEL_STYLE,
    },
    {
      header: 'PO No.',
      key: 'PONo',
      ...EXCEL_STYLE,
    },
    {
      header: 'PO Date',
      key: 'PODate',
      ...EXCEL_STYLE,
    },
    {
      header: 'Currency',
      key: 'currency',
      ...EXCEL_STYLE,
    },
    {
      header: 'Bill From Location',
      key: 'billFromLocation',
      ...EXCEL_STYLE,
    },
    {
      header: 'Total Value',
      key: 'totalValue',
      ...EXCEL_STYLE,
    },
    {
      header: 'Remarks',
      key: 'remarks',
      ...EXCEL_STYLE,
    },
    {
      header: 'Status',
      key: 'status',
      ...EXCEL_STYLE,
    },
  ];
export const PERFORMA_INVOICE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PERFORMA_INVOICE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
