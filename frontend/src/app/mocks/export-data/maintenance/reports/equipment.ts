import { EXCEL_STYLE } from '../../excelStyle';
import { GET_PDF_EXPORT_DATA } from '../../exportPdfData';
let widths = ['*', '*', '*', '*', '*'];
let title = 'Equipment Reports';
let headers: any = [
  {
    header: 'Equipment Code',
    key: 'equipmentCode',
    ...EXCEL_STYLE,
  },
  {
    header: 'Equipment Name',
    key: 'equipmentName',
    ...EXCEL_STYLE,
  },
  {
    header: 'Equipment Type',
    key: 'equipmentType',
    ...EXCEL_STYLE,
  },
  {
    header: 'Equipment Description',
    key: 'equipmentDescription',
    ...EXCEL_STYLE,
  },
  {
    header: 'Manufacturer',
    key: 'manufacturer',
    ...EXCEL_STYLE,
  },
];

export const EQUIPMENT_REPORT_DATA = (data: any) => {
  return {
    title: title,
    csvData: data,
    headers: headers,
  };
};
export const EQUIPMENT_PDF_DATA = (data: any) => {
  return GET_PDF_EXPORT_DATA({ data, headers, widths, title });
};
