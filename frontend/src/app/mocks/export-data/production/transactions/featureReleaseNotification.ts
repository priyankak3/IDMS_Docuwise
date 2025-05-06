import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Feature Release Notification";
let headers: any = [
    {
        header: "Feature Id",
        key: "featureId",
        ...EXCEL_STYLE
    },
    {
        header: "Release Date",
        key: "releaseDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customers",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "New Feature",
        key: "newFeature",
        ...EXCEL_STYLE
    },
    {
        header: "Bug Fixes",
        key: "bugFixes",
        ...EXCEL_STYLE
    },
    {
        header: "Training Plan",
        key: "trainingPlan",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Information",
        key: "contactInformation",
        ...EXCEL_STYLE
    }
];
export const FEATURE_RELEASE_NOTIFICATION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FEATURE_RELEASE_NOTIFICATION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
