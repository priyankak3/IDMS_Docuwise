import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Smart Proposal Generator";
let headers: any = [
    {
        header: "Proposal #",
        key: "smartProposalCode",
        ...EXCEL_STYLE
    },
    {
        header: "Proposal Date",
        key: "proposalDate",
        ...EXCEL_STYLE
    },
    {
        header: "Prepared By",
        key: "preparedBy",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Industry Type",
        key: "industryType",
        ...EXCEL_STYLE
    },
    {
        header: "Business Nature",
        key: "businessNature",
        ...EXCEL_STYLE
    },
    {
        header: "Requirement Summary",
        key: "requirementSummary",
        ...EXCEL_STYLE
    },
    {
        header: "Application Type",
        key: "applicationType",
        ...EXCEL_STYLE
    },
    {
        header: "User Count",
        key: "userCount",
        ...EXCEL_STYLE
    },
    {
        header: "Deployment",
        key: "deployment",
        ...EXCEL_STYLE
    },
    {
        header: "Integration",
        key: "integration",
        ...EXCEL_STYLE
    },
    {
        header: "Timeline",
        key: "timeline",
        ...EXCEL_STYLE
    },
    {
        header: "Go Live Date",
        key: "goLiveDate",
        ...EXCEL_STYLE
    },
    {
        header: "Tech Stack",
        key: "techStack",
        ...EXCEL_STYLE
    },
    {
        header: "Fixed Price",
        key: "fixedPrice",
        ...EXCEL_STYLE
    },
    {
        header: "Monthly Rate",
        key: "monthlyRate",
        ...EXCEL_STYLE
    },
    {
        header: "Annual Increase",
        key: "annualIncrease",
        ...EXCEL_STYLE
    },
    {
        header: "Reporting Required",
        key: "reportingRequired",
        ...EXCEL_STYLE
    },
    {
        header: "Notes",
        key: "notes",
        ...EXCEL_STYLE
    }
];
export const SMART_PROPOSAL_GENERATOR_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const SMART_PROPOSAL_GENERATOR_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
