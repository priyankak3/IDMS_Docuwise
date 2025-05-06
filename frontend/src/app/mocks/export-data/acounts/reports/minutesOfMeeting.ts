import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Minutes of Meeting Report";
let headers: any = [
    {
        header: "MoM Title",
        key: "MOMTitle",
        ...EXCEL_STYLE
    },
    {
        header: "Meeting Type",
        key: "meetingType",
        ...EXCEL_STYLE
    },
    {
        header: "Action Point",
        key: "actionPoint",
        ...EXCEL_STYLE
    },
    {
        header: "Owner",
        key: "owner",
        ...EXCEL_STYLE
    },
    {
        header: "Target Date",
        key: "targetDate",
        ...EXCEL_STYLE
    },
    {
        header: "Review Date",
        key: "reviewDate",
        ...EXCEL_STYLE
    },
    {
        header: "Remarks",
        key: "remarks",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const MINUTES_OF_MEETING_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const MINUTES_OF_MEETING_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
