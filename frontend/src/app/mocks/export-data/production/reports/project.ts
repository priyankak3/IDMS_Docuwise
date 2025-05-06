import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Project Report";
let headers: any = [
    {
        header: "Project #",
        key: "projectNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone Name",
        key: "mileStoneName",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone Amount",
        key: "mileStoneAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone Trigger Date",
        key: "mileStoneTriggerDate",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const PROJECT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROJECT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
