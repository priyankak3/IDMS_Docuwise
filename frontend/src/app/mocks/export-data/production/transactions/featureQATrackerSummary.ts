import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Feature QA Tracker";
let headers: any = [
    {
        header: "Feature",
        key: "featureDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Tested By",
        key: "testedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Priority",
        key: "priority",
        ...EXCEL_STYLE
    },
    {
        header: "Root cause",
        key: "rootCauseOfDefect",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    },
    {
        header: "Reported Date",
        key: "createdAt",
        ...EXCEL_STYLE
    },
    {
        header: "Expected Resolution Date",
        key: "expectedResolutionDate",
        ...EXCEL_STYLE
    }
];
export const FEATURE_QA_TRACKER_SUMMERY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FEATURE_QA_TRACKER_SUMMERY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
