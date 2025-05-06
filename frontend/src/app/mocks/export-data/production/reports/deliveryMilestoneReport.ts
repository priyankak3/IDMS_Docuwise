import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Delivery Milestone Report";
let headers: any = [
    {
        header: "Project #",
        key: "projectNumber",
        ...EXCEL_STYLE
    },
    {
        header: "Project Name",
        key: "projectName",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Delivery Milestone",
        key: "deliveryMilestone",
        ...EXCEL_STYLE
    },
    {
        header: "Delivery Milestone Date",
        key: "deliveryMilestoneDate",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone Status",
        key: "status",
        ...EXCEL_STYLE
    }
];

export const DELIVERY_MILESTONE_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const DELIVERY_MILESTONE_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
