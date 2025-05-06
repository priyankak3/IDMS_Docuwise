import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21];
let title = "Project";
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
        header: "Planed Start Date",
        key: "plannedStartDate",
        ...EXCEL_STYLE
    },
    {
        header: "Planed End Date",
        key: "plannedEndDate",

        ...EXCEL_STYLE
    },
    {
        header: "SOW Amount",
        key: "projectCost",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    },
    {
        header: "Outstanding Amount",
        key: "projectCost",
        ...EXCEL_STYLE
    },
    {
        header: "Total Paid",
        key: "balanceAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone",
        key: "mileStoneName",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone Amount",
        key: "mileStoneAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Milestone Trigger date",
        key: "mileStoneTriggerDate",
        ...EXCEL_STYLE
    },
    {
        header: "Remarks",
        key: "remarks",
        ...EXCEL_STYLE
    },
    {
        header: "Budget Allocation",
        key: "budgetAllocation",
        ...EXCEL_STYLE
    },
    {
        header: "Allocated Amount",
        key: "allocatedAmount",
        ...EXCEL_STYLE
    },
    {
        header: "Outstanding Budget",
        key: "balanceBudget",
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
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const PROJECT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const PROJECT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
