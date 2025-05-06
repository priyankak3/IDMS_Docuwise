import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'Goods Inwards Entry Detail Summary';
let headers: any = [
  // {
  //   header: '#',
  //   key: 'GINLineNumber',
  //   ...EXCEL_STYLE,
  // },
  {
    header: 'Date',
    key: 'GINDateS',
    ...EXCEL_STYLE,
  },
  {
    header: 'Supplier Name',
    key: 'supplierName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Currency',
    key: 'supplierCurrency',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Code',
    key: 'itemCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Item Description',
    key: 'itemDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Quantity',
    key: 'GINQty',
    ...EXCEL_STYLE,
  },
  {
    header: 'Unit Price',
    key: 'purchaseRate',
    ...EXCEL_STYLE,
  },
];

export const GOODS_INWARDS_ENTRY_DETAIL_SUMMARY_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const GOODS_INWARDS_ENTRY_DETAIL_SUMMARY_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
