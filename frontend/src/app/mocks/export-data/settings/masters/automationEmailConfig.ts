import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*"];
let title = "Automation Email Configuration";
let headers: any = [
    {
        header: "Automation Code",
        key: "automationCode",
        ...EXCEL_STYLE
    },
    {
        header: "Automation Description",
        key: "automationDescription",
        ...EXCEL_STYLE
    },
    {
        header: "Mail (to)",
        key: "emailTo",
        ...EXCEL_STYLE
    },
    {
        header: "Mail (cc)",
        key: "emailCC",
        ...EXCEL_STYLE
    },
    {
        header: "Mail (bcc)",
        key: "emailBCC",
        ...EXCEL_STYLE
    },
    {
        header: "WhatsApp Number",
        key: "whatsappNumber",
        ...EXCEL_STYLE
    }
];
export const AUTOMATION_EMAIL_CONFIG_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const AUTOMATION_EMAIL_CONFIG_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
