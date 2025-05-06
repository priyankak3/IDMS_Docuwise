import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [38, 38, 40, 40, 38, 38, 38, 38, 38, 38, 38, 38];
let title = "Development Tracking Reports";
let headers: any = [
    {
        header: "ID",
        key: "trackingId",
        ...EXCEL_STYLE
    },
    {
        header: "Feature #",
        key: "featureCode",
        ...EXCEL_STYLE
    },
    {
        header: "Description",
        key: "featureDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Customer",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Date Sent to Dev",
        key: "dateSentToDev",
        ...EXCEL_STYLE
    },
    {
        header: "Date Released to Test",
        key: "dateReleasedToTest",
        ...EXCEL_STYLE
    },
    {
        header: "Date Released to Prod",
        key: "dateReleasedToProd",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Mockup",
    //     key: "mockupProvider",
    //     ...EXCEL_STYLE
    // },
    {
        header: "Additional Info.",
        key: "additionalInfo",
        ...EXCEL_STYLE
    },
    {
        header: "Time Taken (days)",
        key: "timeTaken",
        ...EXCEL_STYLE
    },
    {
        header: "Dev-to-Test Duration",
        key: "devToTestDuration",
        ...EXCEL_STYLE
    },
    {
        header: "Test-to-Prod Duration",
        key: "testToProdDuration",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const DEVELOPMENT_TRACKING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEVELOPMENT_TRACKING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
