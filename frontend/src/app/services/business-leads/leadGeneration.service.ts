import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class LeadGenerationService {
    routes: any = {
        createPath: "/businessLeads/leadGeneration/create",
        getAllPath: "/businessLeads/leadGeneration/getAll",
        getAllMasterDataPath: "/businessLeads/leadGeneration/getAllMasterData",
        getAllLeadWonReportsPath: "/businessLeads/leadGeneration/getAllLeadWonReports",
        getAllLeadLostReportsPath: "/businessLeads/leadGeneration/getAllLeadLostReports",
        getAllLeadTrackMasterDataPath: "/businessLeads/leadGeneration/getAllLeadTrackMasterData",
        getProspectListByCategoryPath: (category: string) =>
            `/businessLeads/leadGeneration/getProspectListByCategory/${category}`,
        updatePath: (id: string) => `/businessLeads/leadGeneration/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/leadGeneration/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/leadGeneration/delete/${id}`
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
    getAllLeadWonReports(params: any) {
        return this.http.get(this.routes.getAllLeadWonReportsPath, params).pipe(map((res: any) => res));
    }
    getAllLeadLostReports(params: any) {
        return this.http.get(this.routes.getAllLeadLostReportsPath, params).pipe(map((res: any) => res));
    }
    getAllLeadTrackMasterData(params: any) {
        return this.http.get(this.routes.getAllLeadTrackMasterDataPath, params).pipe(map((res: any) => res));
    }
    getProspectListByCategory(category: string, payload: any) {
        return this.http.get(this.routes.getProspectListByCategoryPath(category), payload).pipe(map((res: any) => res));
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
