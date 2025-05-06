export interface ILeadTrackingMasterData {
    autoIncrementNo: string;
    leadsList: ILeadsList[];
}

export interface ILeadsList {
    _id: string;
    leadNo: string;
    leadCategory: string;
    prospect: string;
    prospectName: string;
    leadOwner: string;
    demoSchedule: IDemoSchedule[];
    commercialProposal: ICommercialProposal[];
    leadDate: string;
    interestLevel: number;
    reqDemoDate: string;
}

export interface ICommercialProposal {
    _id: string;
    CProposalNo: string;
    CProposalDate: string;
    developPeriod: string;
    developCharges: number;
    supportCharges: number;
}

export interface IDemoSchedule {
    _id: string;
    demoType: string;
    demoNo: string;
    demoDate: string;
    demoStartTime: string;
    demoEndTime: string;
    demonstrator: string;
    demoResponseInfo: IDemoResponseInfo[];
    status: string;
    remarks?: string;
    totalParticipants?: number;
}

export interface IDemoResponseInfo {
    srNo: number;
    checkListParticulars: string;
    checkBox: boolean;
    _id: string;
}
