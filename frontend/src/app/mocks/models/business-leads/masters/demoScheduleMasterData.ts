import {IParameterCommonData} from "./leadGenerationMasterData";

export interface IDemoSchedule {
    autoIncrementNo: "";
    leadsOptions: ILeadsOptions[];
    leadOwnerOptions: IParameterCommonData[];
}
export interface ILeadsOptions {
    _id: string;
    leadNo: string;
    leadDate?: string;
    prospect?: string;
    prospectName?: string;
    demoType?: string;
    leadOwner?: string;
}
