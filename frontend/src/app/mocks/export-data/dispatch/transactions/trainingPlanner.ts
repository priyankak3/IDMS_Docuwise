import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Training Planner";
let headers: any = [
    {
        header: "Training Code",
        key: "trainingCode",
        ...EXCEL_STYLE
    },
    {
        header: "Deployment Description",
        key: "deploymentDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Training Status",
        key: "trainingStatus",
        ...EXCEL_STYLE
    }
];
export const TRAINING_PLANNER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TRAINING_PLANNER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
