import { IParameterICommonData } from "@mocks/models/planning/transactions";

export interface IMouldMasterData {
    autoIncrementNo: string;
    suppliersOptions: ISuppliers[];
    mouldTypeOptions: IParameterICommonData[];
}
export interface ISuppliers {
    supplierName: string;
    _id: string;
}
