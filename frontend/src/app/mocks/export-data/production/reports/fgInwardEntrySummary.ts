import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*'];
let title = 'FG Inward Entry Summary Report';
let headers: any = [
  {
    header: 'SKU Code',
    key: 'SKUNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'SKU Name',
    key: 'SKUName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Entries',
    key: 'totalEntries',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Quantity',
    key: 'totalQty',
    ...EXCEL_STYLE,
  },
];

export const FG_INWARD_ENTRY_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const FG_INWARD_ENTRY_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
