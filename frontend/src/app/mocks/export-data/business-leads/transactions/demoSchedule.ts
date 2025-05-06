import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Demo Schedule";
let headers: any = [
    {
        header: "Prospect Name",
        key: "prospectName",
        ...EXCEL_STYLE
    },
    {
        header: "Demo Date",
        key: "demoDate",
        ...EXCEL_STYLE
    },
    {
        header: "Demo Type",
        key: "demoType",
        ...EXCEL_STYLE
    },
    {
        header: "Demo No",
        key: "demoNo",
        ...EXCEL_STYLE
    },
    {
        header: "Demo Start Time",
        key: "demoStartTime",
        ...EXCEL_STYLE
    },
    {
        header: "Demo End Time",
        key: "demoEndTime",
        ...EXCEL_STYLE
    },
    {
        header: "Demonstrator",
        key: "demonstrator",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const DEMO_SCHEDULE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DEMO_SCHEDULE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
