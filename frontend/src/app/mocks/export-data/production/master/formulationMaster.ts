import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];
let title = "FormulationMaster Report";
let headers: any = [
    {
        header: "HSN Code",
        key: "HSNCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Code",
        key: "itemCode",
        ...EXCEL_STYLE
    },
    {
        header: "Item Name",
        key: "itemName",
        ...EXCEL_STYLE
    },
    {
        header: "Item Description",
        key: "itemDescription",
        ...EXCEL_STYLE
    },
    {
        header: "UoM",
        key: "UoM",
        ...EXCEL_STYLE
    },
    {
        header: "Total Qty",
        key: "totalQty",
        ...EXCEL_STYLE
    },
    {
        header: "Total Cost",
        key: "totalCost",
        ...EXCEL_STYLE
    },
    {
        header: "Cost/Kg",
        key: "inkCostPerKg",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const FORMULATION_MASTER_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const FORMULATION_MASTER_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
