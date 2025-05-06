import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*'];
let title = 'Purchase Order Status';
let headers: any = [
  {
    header: 'Order #',
    key: 'PONumber',
    ...EXCEL_STYLE,
  },
  {
    header: 'Order Date',
    key: 'PODateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Amount ',
    key: 'netPOValue',
    ...EXCEL_STYLE,
  },
  {
    header: 'Order Status',
    key: 'POStatus',
    ...EXCEL_STYLE,
  },
];

export const PURCHASE_ORDER_STATUS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PURCHASE_ORDER_STATUS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
