import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Deployment Notification";
let headers: any = [
    {
        header: "DN No.",
        key: "DNNo",
        ...EXCEL_STYLE
    },
    {
        header: "Date of Deployment",
        key: "dateOfDeployment",
        ...EXCEL_STYLE
    },
    {
        header: "New Features",
        key: "newFeatures",
        ...EXCEL_STYLE
    },
    {
        header: "Bug Fixes",
        key: "bugFixes",
        ...EXCEL_STYLE
    },
    {
        header: "Next Steps",
        key: "nextSteps",
        ...EXCEL_STYLE
    },
    {
        header: "Contact Information",
        key: "contactInformation",
        ...EXCEL_STYLE
    }
];
export const DEPLOYMENT_NOTIFICATION_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEPLOYMENT_NOTIFICATION_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
