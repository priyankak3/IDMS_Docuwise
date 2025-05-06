import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "Infra Management Master";
let headers: any = [
    {
        header: "Infra Code",
        key: "infraCode",
        ...EXCEL_STYLE
    },
    {
        header: "Infra Type",
        key: "infraType",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Plan Description",
        key: "description",
        ...EXCEL_STYLE
    },
    {
        header: "Service Provider",
        key: "serviceProvider",
        ...EXCEL_STYLE
    },
    {
        header: "Registration Date",
        key: "registrationDate",
        ...EXCEL_STYLE
    },
    {
        header: "Expiry Date",
        key: "expiryDate",
        ...EXCEL_STYLE
    },
    {
        header: "Auto Renewal",
        key: "autoRenewal",
        ...EXCEL_STYLE
    },
    {
        header: "Plan",
        key: "plan",
        ...EXCEL_STYLE
    },
    {
        header: "Plan Cost",
        key: "planCost",
        ...EXCEL_STYLE
    },
    {
        header: "Additional Notes",
        key: "additionalNotes",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const INFRA_MANAGEMENT_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const INFRA_MANAGEMENT_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
