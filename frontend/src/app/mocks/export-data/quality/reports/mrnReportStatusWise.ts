import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*', '*'];
let title = 'MRN Report - Status Wise';
let headers: any = [
  {
    header: 'MRN No.',
    key: 'MRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: ' MRN Dt.',
    key: 'MRNDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN No.',
    key: 'GRNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'GRN Dt.',
    key: 'GRNDate',
    ...EXCEL_STYLE,
  },

  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Inv. #',
    key: 'supplierInvoice',
    ...EXCEL_STYLE,
  },
  {
    header: 'Invoice Dt.',
    key: 'supplierDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'MRN Status',
    key: 'MRNStatus',
    ...EXCEL_STYLE,
  },
];

export const MRN_REPORT_STATUS_WISE_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const MRN_REPORT_STATUS_WISE_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
