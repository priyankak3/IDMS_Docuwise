import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*"];
let title = "Lead Opportunity Flow";
let headers: any = [
    {
        header: "Lead Date",
        key: "leadDate",
        ...EXCEL_STYLE
    },
    {
        header: "Customer/Prospect Name",
        key: "name",
        ...EXCEL_STYLE
    },
    {
        header: "Last Interaction Date",
        key: "lastInteractionDate",
        ...EXCEL_STYLE
    },

    {
        header: "Proposal Date",
        key: "proposalDate",
        ...EXCEL_STYLE
    },
    {
        header: "Proposal Status",
        key: "proposalStatus",
        ...EXCEL_STYLE
    },
    {
        header: "Demo Date",
        key: "demoDate",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const LEAD_OPPORTUNITY_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const LEAD_OPPORTUNITY_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
