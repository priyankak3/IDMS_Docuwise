import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SmartProposalGeneratorService {
    routes: any = {
        createPath: "/businessLeads/smartProposalGenerator/create",
        getAllPath: "/businessLeads/smartProposalGenerator/getAll",
        getAllMasterDataPath: "/businessLeads/smartProposalGenerator/getAllMasterData",
        updatePath: (id: string) => `/businessLeads/smartProposalGenerator/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/smartProposalGenerator/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/smartProposalGenerator/delete/${id}`,
        getBySmartProposalIdPath: (id: string) => `/businessLeads/smartProposalGenerator/getBySmartProposalId/${id}`
    };

    constructor(private http: ApiService, private https: HttpClient) {}
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
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
    getBySmartProposalId(id: string): Observable<Blob> {
        return this.https
            .get(this.routes.getBySmartProposalIdPath(id), {responseType: "blob"})
            .pipe(map((res: any) => res));
    }
}
