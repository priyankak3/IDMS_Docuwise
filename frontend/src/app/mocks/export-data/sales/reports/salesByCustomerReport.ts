import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*','*','*','*'];
let title = 'Sales Report by Customer';
let headers: any =  [
        {
          header: 'Customer Name',
          key: 'customerName',
         ...EXCEL_STYLE,
        },
        {
          header: 'Total SO Value',
          key: 'totalSOValue',
         ...EXCEL_STYLE,
        },
        {
          header: 'No. of Transactions',
          key: 'totalTransaction',
         ...EXCEL_STYLE,
        },
        {
          header: 'Average SO Value',
          key: 'avgSOValue',
         ...EXCEL_STYLE,
        },
      ];

export const SALES_REPORT_BY_CUSTOMER_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_REPORT_BY_CUSTOMER_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};

