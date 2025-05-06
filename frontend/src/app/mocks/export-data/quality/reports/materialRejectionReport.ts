import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*','*', '*'];
let title = 'Material Rejection Report';
let headers: any =[
        {
          header: 'Supplier Name',
          key: 'supplierName',
          ...EXCEL_STYLE,
        },
        {
          header: 'GRN No.',
          key: 'GRNNumber',
          ...EXCEL_STYLE,
        },
        {
          header: 'GRN Quantity',
          key: 'GRNQty',
          ...EXCEL_STYLE,
        },
        {
          header: 'MRN No.',
          key: 'MRNNumber',
          ...EXCEL_STYLE,
        },
        {
          header: 'MRN Quantity',
          key: 'releasedQty',
          ...EXCEL_STYLE,
        },
        {
          header: 'GRN Date',
          key: 'GRNDateS',
          ...EXCEL_STYLE,
        },
        {
          header: 'Rejection Quantity',
          key: 'rejectedQty',
          ...EXCEL_STYLE,
        },
      ];

export const MATERIAL_REJECTION_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const MATERIAL_REJECTION_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
