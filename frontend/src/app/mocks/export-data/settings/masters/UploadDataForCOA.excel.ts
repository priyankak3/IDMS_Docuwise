import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid COA Records";
let headers: any = [
    {
        header: "Ledger Account",
        key: "ledgerAcc",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_COA = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
