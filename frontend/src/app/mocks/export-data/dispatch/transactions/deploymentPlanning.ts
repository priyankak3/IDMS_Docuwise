import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "Deployment Planning";
let headers: any = [
    {
        header: "Deployment Code",
        key: "deploymentCode",
        ...EXCEL_STYLE
    },
    {
        header: "Deployment Date",
        key: "deploymentDate",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "deploymentDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const DEPLOYMENT_PLANNING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEPLOYMENT_PLANNING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
