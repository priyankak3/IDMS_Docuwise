import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Account Type Records";
let headers: any = [
    {
        header: "TypeName",
        key: "accTypeName",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_ACC_TYPES = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
