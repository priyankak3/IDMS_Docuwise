import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Debit Note Details';
let headers: any = [
  {
    header: ' DN No.',
    key: 'DNNumber',
    ...EXCEL_STYLE,
  },
  {
    header: ' DN Date',
    key: 'DNDateS',
    ...EXCEL_STYLE,
  },
  {
    header: ' Purchase Category',
    key: 'purchaseCategory',
    ...EXCEL_STYLE,
  },
  {
    header: ' Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'DN Net Value',
    key: 'lineValue',
    ...EXCEL_STYLE,
  },
];

export const DEBIT_NOTE_DETAILS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const DEBIT_NOTE_DETAILS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
