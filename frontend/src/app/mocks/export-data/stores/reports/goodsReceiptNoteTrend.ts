import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*'];
let title = 'Goods Receipt Note Trend';
let headers: any = [
  {
    header: 'Month',
    key: 'month',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total GRNs',
    key: 'totalGRN',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Value (INR)',
    key: 'totalValue',
    ...EXCEL_STYLE,
  },
];

export const GOODS_RECEIPT_NOTE_TREND_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_RECEIPT_NOTE_TREND_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
