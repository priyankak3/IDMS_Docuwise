import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*'];
let title = 'Inwarded Quantity Analysis';
let headers: any = [
  {
    header: 'Item Code',
    key: 'itemCode',
    ...EXCEL_STYLE,
  },
  {
    header: ' Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Inwarded Quantity',
    key: 'totalInwardQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Inwarded Value',
    key: 'totalInwardValue',
    ...EXCEL_STYLE,
  },
];

export const INWARDED_QUANTITY_ANALYSIS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const INWARDED_QUANTITY_ANALYSIS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
