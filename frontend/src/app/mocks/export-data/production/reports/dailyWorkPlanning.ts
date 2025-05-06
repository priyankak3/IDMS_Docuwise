import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "Daily Work Planning Report";
let headers: any = [
    {
        header: "Released ID",
        key: "releaseId",
        ...EXCEL_STYLE
    },
    {
        header: "Released Date",
        key: "releaseDate",
        ...EXCEL_STYLE
    },
    {
        header: "Prepared By",
        key: "preparedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Approved By",
        key: "approvedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const DAILY_WORK_PLANNING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DAILY_WORK_PLANNING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
