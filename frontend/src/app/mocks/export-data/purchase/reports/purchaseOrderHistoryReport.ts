import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'Purchase Order History';
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
    header: 'Supplier',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'currency',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Amount (INR)',
    key: 'netPOValue',
    ...EXCEL_STYLE,
  },
  {
    header: 'Delivery Date',
    key: 'deliveryDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Order Status',
    key: 'POStatus',
    ...EXCEL_STYLE,
  },
];

export const PURCHASE_ORDER_HISTORY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const PURCHASE_ORDER_HISTORY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
