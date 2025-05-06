import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Investment Declaration";
let headers: any = [
    {
        header: "Employee Code",
        key: "empCode",
        ...EXCEL_STYLE
    },
    {
        header: "Employee Name",
        key: "empFullName",
        ...EXCEL_STYLE
    },
    {
        header: "Date of Joining",
        key: "empJoiningDate",
        ...EXCEL_STYLE
    },
    {
        header: "PAN Card No.",
        key: "empPANNo",
        ...EXCEL_STYLE
    },
    {
        header: "Aadhar Card No.",
        key: "empAadharNo",
        ...EXCEL_STYLE
    },
    {
        header: "Financial Year",
        key: "financialYear",
        ...EXCEL_STYLE
    }
];
export const INVESTMENT_DECLARATION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INVESTMENT_DECLARATION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
