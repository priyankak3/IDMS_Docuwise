import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25];
let title = "Feature QA Tracker Reports";
let headers: any = [
    {
        header: "Feature",
        key: "featureCode",
        ...EXCEL_STYLE
    },
    {
        header: "Feature Description",
        key: "featureDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Tested By",
        key: "testedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Test Environment",
        key: "testEnvironment",
        ...EXCEL_STYLE
    },
    {
        header: "Test Date",
        key: "testData",
        ...EXCEL_STYLE
    },
    {
        header: "Date Of Test",
        key: "dateOfTest",
        ...EXCEL_STYLE
    },
    {
        header: "Result",
        key: "result",
        ...EXCEL_STYLE
    },
    {
        header: "Bug/Improvement Details",
        key: "bugImprovementDetails",
        ...EXCEL_STYLE
    },
    {
        header: "Priority",
        key: "priority",
        ...EXCEL_STYLE
    },
    {
        header: "Additional Comments",
        key: "additionalComments",
        ...EXCEL_STYLE
    },
    {
        header: "Assigned Developer",
        key: "assignedDeveloper",
        ...EXCEL_STYLE
    },
    {
        header: "Root Cause Of Defect",
        key: "rootCauseOfDefect",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    },
    {
        header: "Expected Resolution Date",
        key: "expectedResolutionDate",
        ...EXCEL_STYLE
    },
    {
        header: "Development Comments",
        key: "developmentComments",
        ...EXCEL_STYLE
    },
    {
        header: "Attachment",
        key: "attachment",
        ...EXCEL_STYLE
    },
    {
        header: "Developer Attachment",
        key: "developerAttachment",
        ...EXCEL_STYLE
    }
];
export const FEATURE_QA_TRACKER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FEATURE_QA_TRACKER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
