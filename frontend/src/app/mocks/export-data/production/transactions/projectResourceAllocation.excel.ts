import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "Project Resource Allocation";
let headers: any = [
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Project Start Date",
        key: "projectStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "Project End Date",
        key: "projectEndDate",
        ...EXCEL_STYLE
    }
];
export const PROJECT_RESOURCE_ALLOCATION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROJECT_RESOURCE_ALLOCATION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
