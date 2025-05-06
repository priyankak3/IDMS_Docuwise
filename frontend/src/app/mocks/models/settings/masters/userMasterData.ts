import {ICommonData} from "@mocks/models/business-leads/masters";

export interface IUserMasterData {
    autoIncrementNo: string;
    departmentOptions: IDepartmentOptions[];
    rolesOptions: ICommonData[];
}
export interface IDepartmentOptions {
    departmentName: string;
    _id: string;
}
