import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*','*','*','*','*','*'];
let title = 'Sales Order Summary Report';
let headers: any = [
        {
          header: 'Customer',
          key: 'customerName',
          ...EXCEL_STYLE,
        },
        {
          header: 'Date Range',
          key: 'dateRange',
          ...EXCEL_STYLE,
        },
        {
          header: 'Product Category',
          key: 'salesCategory',
          ...EXCEL_STYLE,
        },
        {
          header: 'Total Orders',
          key: 'totalOrders',
          ...EXCEL_STYLE,
        },
        {
          header: 'Total Amount',
          key: 'totalAmount',
          ...EXCEL_STYLE,
        },
        {
          header: 'Average Order Value',
          key: 'avgOrderValue',
          ...EXCEL_STYLE,
        },
      ];

export const SALES_ORDER_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_ORDER_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};

