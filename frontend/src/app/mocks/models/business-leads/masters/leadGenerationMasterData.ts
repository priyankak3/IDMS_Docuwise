export interface ILeadGeneration {
    autoIncrementNo: "";
    leadSourceOptions: IParameterCommonData[];
    leadCategoryOptions: ICommonData[];
    MSMECategoryOptions: ICommonData[];
    interestAreaOptions: IParameterCommonData[];
    interestLevelOptions: ICommonData[];
    leadOwnerOptions: ICommonData[];
}

export interface ICommonData {
    value: string;
    label: string;
}
export interface IParameterCommonData {
    parameterName: string;
    parameterLabel: string;
    _id?: string;
}
// export interface IProspectsOptions {
//     prospectName: string;
//     _id: string;
// }
