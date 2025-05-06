import {EXCEL_STYLE} from "../../excelStyle";
import {GET_PDF_EXPORT_DATA} from "../../exportPdfData";
let widths = ["*", "*", "*", "*", "*", "*"];
let title = "Training Calender Report";
let headers: any = [
    {
        header: "Date",
        key: "trainingDate",
        ...EXCEL_STYLE
    },
    {
        header: "Training Time",
        key: "trainingTime",
        ...EXCEL_STYLE
    },
    {
        header: "Customer Name",
        key: "customerName",
        ...EXCEL_STYLE
    },
    {
        header: "Trainer Name",
        key: "implementorName",
        ...EXCEL_STYLE
    },
    {
        header: "Training Topics",
        key: "features",
        ...EXCEL_STYLE
    },
    {
        header: "Status",
        key: "status",
        ...EXCEL_STYLE
    }
];
export const TRAINING_CALENDAR_REPORT_REPORT_DATA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
export const TRAINING_CALENDAR_REPORT_PDF_DATA = (data: any) => {
    return GET_PDF_EXPORT_DATA({data, headers, widths, title});
};
