import {Injectable} from "@angular/core";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class COAService {
    routes: any = {
        createPath: "/accounts/COA/create",
        getAllPath: "/accounts/COA/getAll",
        getAllReports: "/accounts/COA/getAllReports",
        getAllMasterDataPath: "/accounts/COA/getAllMasterData",
        updatePath: (id: string) => `/accounts/COA/update/${id}`,
        getByIdPath: (id: string) => `/accounts/COA/getById/${id}`,
        deletePath: (id: string) => `/accounts/COA/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload);
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params);
    }

    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReports, params);
    }
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params);
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params);
    }

    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload);
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id));
    }
}
