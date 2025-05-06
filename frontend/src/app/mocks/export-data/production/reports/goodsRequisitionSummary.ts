import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*'];
let title = 'Goods Requisition Summary Report';
let headers: any = [
  {
    header: 'Requisition Date',
    key: 'GRDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Department/Team',
    key: 'department',
    ...EXCEL_STYLE,
  },
  {
    header: 'Requested Quantity',
    key: 'GRQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Status',
    key: 'GRStatus',
    ...EXCEL_STYLE,
  },
];

export const GOODS_REQUISITION_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_REQUISITION_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
