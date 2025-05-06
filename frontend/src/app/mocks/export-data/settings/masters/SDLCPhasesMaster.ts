import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*"];
let title = "SDLC Phases Master";
let headers: any = [
    {
        header: "Sequence #",
        key: "order",
        ...EXCEL_STYLE
    },
    {
        header: "SDLC Phase",
        key: "SDLCPhase",
        ...EXCEL_STYLE
    },
    {
        header: "Primary Owner",
        key: "primaryOwner",
        ...EXCEL_STYLE
    },
    {
        header: "Secondary Owner",
        key: "secondaryOwner",
        ...EXCEL_STYLE
    },
    // {
    //     header: "Status",
    //     key: "status",
    //     ...EXCEL_STYLE
    // }
];
export const SDLC_PHASES_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SDLC_PHASES_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
