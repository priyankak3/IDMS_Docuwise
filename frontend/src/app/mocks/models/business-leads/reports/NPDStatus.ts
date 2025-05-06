export interface NPDStatus {
    _id: string;
    NPDNo: string;
    name: string;
    projectCategory: string;
    projectName: string;
    status: string;
    isReportGenerated?: boolean;
    NPDDate: string;
    expectedDeliveryDate?: string;
}
