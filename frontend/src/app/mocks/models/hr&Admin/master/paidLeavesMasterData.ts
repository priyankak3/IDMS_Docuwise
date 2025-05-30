
export interface IPaidLeavesMasterData {
    autoIncrementNo: string;
    maxPaidLeaves: number;
    employeesOptions: IEmployeesOptions[];
}
export interface IEmployeesOptions {
    value: string;
    label: string;
    empJoiningDate: String;
}
