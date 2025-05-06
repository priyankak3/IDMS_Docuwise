import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Commercial Proposal";
let headers: any = [
    {
        header: "C/Proposal No.",
        key: "CProposalNo",
        ...EXCEL_STYLE
    },
    {
        header: "C/Proposal Date",
        key: "CProposalDate",
        ...EXCEL_STYLE
    },
    {
        header: "Prospect Name",
        key: "prospectName",
        ...EXCEL_STYLE
    },
    {
        header: "Dev. Period (Mo)",
        key: "developPeriod",
        ...EXCEL_STYLE
    },
    {
        header: "Dev. Charges",
        key: "developCharges",
        ...EXCEL_STYLE
    },
    {
        header: "Support Charges (Mo)",
        key: "supportCharges",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const COMMERCIAL_PROPOSAL_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const COMMERCIAL_PROPOSAL_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
