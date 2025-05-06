import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class CommercialProposalService {
    routes: any = {
        createPath: "/businessLeads/commercialProposal/create",
        getAllPath: "/businessLeads/commercialProposal/getAll",
        getAllMasterDataPath: "/businessLeads/commercialProposal/getAllMasterData",
        getAllReportPath: "/businessLeads/commercialProposal/getAllReports",
        getProspectListByCategoryPath: (category: string) =>
            `/businessLeads/commercialProposal/getProspectListByCategory/${category}`,
        updatePath: (id: string) => `/businessLeads/commercialProposal/update/${id}`,
        updateAndCreateProposalPath: (id: string) => `/businessLeads/commercialProposal/updateAndCreateProposal/${id}`,
        getByIdPath: (id: string) => `/businessLeads/commercialProposal/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/commercialProposal/delete/${id}`
    };

    constructor(private http: ApiService) {}
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getProspectListByCategory(category: string, payload: any) {
        return this.http.get(this.routes.getProspectListByCategoryPath(category), payload).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    updateAndCreateProposal(id: string, payload: any) {
        return this.http.put(this.routes.updateAndCreateProposalPath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
