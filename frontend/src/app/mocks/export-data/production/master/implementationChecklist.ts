import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*"];
let title = "Implementation Checklist";
let headers: any = [
    {
        header: "SN.",
        key: "SN",
        ...EXCEL_STYLE
    },
    {
        header: "Stage",
        key: "stage",
        ...EXCEL_STYLE
    },
    {
        header: "Activity",
        key: "activity",
        ...EXCEL_STYLE
    },
    {
        header: "Responsible",
        key: "responsible",
        ...EXCEL_STYLE
    },
    {
        header: "Details",
        key: "details",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const IMPLEMENTATION_CHECKLIST_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const IMPLEMENTATION_CHECKLIST_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
