import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Salary Slip Report";
let headers: any = [
    {
        header: "MonthYear",
        key: "payrollForMonthYear",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Code",
        key: "employeeCode",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Name",
        key: "employeeName",
        ...EXCEL_STYLE
    },
    {
        header: "Designation",
        key: "empDesignation",
        ...EXCEL_STYLE
    },
    {
        header: "Gross",
        key: "gross",
        ...EXCEL_STYLE
    },
    {
        header: "Deduction",
        key: "deduction",
        ...EXCEL_STYLE
    },
    {
        header: "Net Payable",
        key: "netPayable",
        ...EXCEL_STYLE
    }
];

export const SALARY_SLIP_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SALARY_SLIP_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
