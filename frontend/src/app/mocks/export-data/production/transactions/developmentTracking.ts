import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Development Tracking";
let headers: any = [
    {
        header: "Feature #",
        key: "featureCode",
        ...EXCEL_STYLE
    },
    {
        header: "Feature Description",
        key: "featureDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Biz. Function",
        key: "bizFunction",
        ...EXCEL_STYLE
    },
    {
        header: "Feature Type",
        key: "featureType",
        ...EXCEL_STYLE
    },
    {
        header: "Customer",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Planned Completion Date",
        key: "startDate",
        ...EXCEL_STYLE
    }
    // {
    //     header: "Mockup",
    //     key: "mockupProvider",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Additional Info.",
    //     key: "additionalInfo",
    //     ...EXCEL_STYLE
    // },
    // {
    //     header: "Status",
    //     key: "status",
    //     ...EXCEL_STYLE
    // }
];
export const TRACKING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TRACKING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
