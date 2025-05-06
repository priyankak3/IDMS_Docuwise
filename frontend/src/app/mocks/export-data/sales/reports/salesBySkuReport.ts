import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Sales Report by SKU ';
let headers: any = [
  {
    header: 'SKU',
    key: 'SKUNo',
    ...EXCEL_STYLE,
  },

  {
    header: 'UoM',
    key: 'unit',
    ...EXCEL_STYLE,
  },
  {
    header: 'Total Sales Quantity',
    key: 'totalSalesQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Revenue Generated',
    key: 'revenueGenerated',
    ...EXCEL_STYLE,
  },
  {
    header: 'No. of Transactions',
    key: 'totalTransaction',
    ...EXCEL_STYLE,
  },
];

export const SALES_REPORT_BY_SKU_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const SALES_REPORT_BY_SKU_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
