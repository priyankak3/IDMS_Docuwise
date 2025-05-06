import {Injectable} from "@angular/core";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PrimaryAccSetupService {
    routes: any = {
        createPath: "/settings/primaryAccTypes/create",
        getAllPath: "/settings/primaryAccTypes/getAll",
        getAllMasterDataPath: "/settings/primaryAccTypes/getAllMasterData",
        updatePath: (id: string) => `/settings/primaryAccTypes/update/${id}`,
        getByIdPath: (id: string) => `/settings/primaryAccTypes/getById/${id}`,
        deletePath: (id: string) => `/settings/primaryAccTypes/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload);
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params);
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params);
    }
    getMonthlySupplierEvaluation(params: any) {
        return this.http.get(this.routes.getMonthlySupplierEvaluationPath, params);
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
