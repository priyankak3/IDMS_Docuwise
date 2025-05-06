import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*', '*', '*'];
let title = 'FG Inward Entry Details Report';
let headers: any = [
  {
    header: 'FG Inward Date',
    key: 'FGINDate',
    ...EXCEL_STYLE,
  },
  {
    header: 'SKU Code',
    key: 'SKUNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'SKU Name',
    key: 'SKUName',
    ...EXCEL_STYLE,
  },

  {
    header: 'Batch/Lot Number',
    key: 'batchNo',
    ...EXCEL_STYLE,
  },
  {
    header: 'Batch Date/MFG Date',
    key: 'manufacturingDate',
    ...EXCEL_STYLE,
  },
  {
    header: ' Inward Quantity',
    key: 'FGINQuantity',
    ...EXCEL_STYLE,
  },
  {
    header: 'UoM',
    key: 'UOM',
    ...EXCEL_STYLE,
  },
];

export const FG_INWARD_ENTRY_DETAILS_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const FG_INWARD_ENTRY_DETAILS_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
