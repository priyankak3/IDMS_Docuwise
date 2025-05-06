import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27];
let title = "Feature Management Tracking Reports";
let headers: any = [
    {
        header: "Feature #",
        key: "featureCode",
        ...EXCEL_STYLE
    },
    {
        header: "Functionality",
        key: "featureDescription",
        ...EXCEL_STYLE
    },
    {
        header: "BIZ Function",
        key: "bizFunction",
        ...EXCEL_STYLE
    },
    {
        header: "Start Date",
        key: "startDate",
        ...EXCEL_STYLE
    },
    {
        header: "Feasibility",
        key: "feasibility",
        ...EXCEL_STYLE
    },
    {
        header: "Design",
        key: "design",
        ...EXCEL_STYLE
    },
    {
        header: "Development",
        key: "development",
        ...EXCEL_STYLE
    },
    {
        header: "Deployment",
        key: "deployment",
        ...EXCEL_STYLE
    },
    {
        header: "Release Mgt.",
        key: "releaseMgt",
        ...EXCEL_STYLE
    },
    {
        header: "INT/Training",
        key: "INTPerTraining",
        ...EXCEL_STYLE
    },
    {
        header: "QC Testing",
        key: "QCTesting",
        ...EXCEL_STYLE
    },
    {
        header: "EXT/Training",
        key: "EXTPerTraining",
        ...EXCEL_STYLE
    },
    {
        header: "Data Creation",
        key: "dataCreation",
        ...EXCEL_STYLE
    },
    {
        header: "Data Validation",
        key: "dataValidation",
        ...EXCEL_STYLE
    },
    {
        header: "UAT",
        key: "UAT",
        ...EXCEL_STYLE
    },
    {
        header: "End Date",
        key: "endDate",
        ...EXCEL_STYLE
    },
    {
        header: "Remarks",
        key: "remark",
        ...EXCEL_STYLE
    }
];
export const FEATURE_MGMT_TRACKING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FEATURE_MGMT_TRACKING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
