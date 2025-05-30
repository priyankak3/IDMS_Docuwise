import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'MRN Report';
let headers: any = [
  {
    header: 'MRN #',
    key: 'MRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN Date',
    key: 'MRNDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN #',
    key: 'GRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Invoice #',
    key: 'supplierInvoice',
    ...EXCEL_STYLE,
  },
];

export const MRN_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const MRN_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
