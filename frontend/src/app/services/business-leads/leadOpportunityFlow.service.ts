import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class LeadOpportunityFlowService {
    routes: any = {
        createPath: "/businessLeads/leadOpportunityFlow/create",
        getAllPath: "/businessLeads/leadOpportunityFlow/getAll",
        // getAllNPDStatusReportPath: '/businessLeads/leadOpportunityFlow/getAllNPDStatusReport',
        getAllReportsPath: `/businessLeads/leadOpportunityFlow/getAllReports`,
        getAllMasterDataPath: "/businessLeads/leadOpportunityFlow/getAllMasterData",
        updatePath: (id: string) => `/businessLeads/leadOpportunityFlow/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/leadOpportunityFlow/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/leadOpportunityFlow/delete/${id}`
    };

    constructor(private http: ApiService) {}
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    // getAllNPDStatusReport(params: any) {
    //   return this.http
    //     .get(this.routes.getAllNPDStatusReportPath, params)
    //     .pipe(map((res: any) => res));
    // }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
