import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "Deployment Master Report";
let headers: any = [
    {
        header: "Environment",
        key: "environments",
        ...EXCEL_STYLE
    },
    {
        header: "Application URL",
        key: "applicationURL",
        ...EXCEL_STYLE
    },
    {
        header: "Order",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const DEPLOYMENT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEPLOYMENT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
