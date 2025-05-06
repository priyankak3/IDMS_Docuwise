import {EXCEL_STYLE} from "../../excelStyle";
let title = "Invalid Account Group Records";
let headers: any = [
    {
        header: "Group Name",
        key: "accGroupName",
        ...EXCEL_STYLE
    },
    {
        header: "Message",
        key: "message",
        ...EXCEL_STYLE
    }
];
export const UPLOAD_DATA_FOR_ACC_GROUP = (data: any) => {
    return {
        title: title,
        csvData: data,
        headers: headers
    };
};
