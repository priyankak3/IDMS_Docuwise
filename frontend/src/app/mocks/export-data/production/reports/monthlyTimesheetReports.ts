import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["auto", "auto", "*", "*", "*", "*", "*", "auto"];
let title = "Monthly Timesheet Report";
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
        header: "Week 1",
        key: "week1",
        ...EXCEL_STYLE
    },
    {
        header: "Week 2",
        key: "week2",
        ...EXCEL_STYLE
    },
    {
        header: "Week 3",
        key: "week3",
        ...EXCEL_STYLE
    },
    {
        header: "Week 4",
        key: "week4",
        ...EXCEL_STYLE
    },
    {
        header: "Week 5",
        key: "week5",
        ...EXCEL_STYLE
    },
    {
        header: "Total Hours",
        key: "totalGrandTotal",
        ...EXCEL_STYLE
    }
];
export const MONTHLY_TIMESHEET_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MONTHLY_TIMESHEET_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
