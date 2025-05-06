import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*','*','*','*','*'];
let title = 'Sales Order Status';
let headers: any = [
        {
          header: 'Sales Order #',
          key: 'SONumber',
          ...EXCEL_STYLE,
        },
        {
          header: 'Customer Name',
          key: 'customerName',
          ...EXCEL_STYLE,
        },
        {
          header: 'Order Date',
          key: 'SODateS',
          ...EXCEL_STYLE,
        },
        {
          header: 'Total Amount ',
          key: 'SOTotalAmount',
          ...EXCEL_STYLE,
        },
        {
          header: 'Status',
          key: 'SOStatus',
          ...EXCEL_STYLE,
        },
      ];

export const SALES_ORDER_STATUS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_ORDER_STATUS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};

