import {Injectable} from "@angular/core";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class AccTypesService {
    routes: any = {
        createPath: "/settings/accTypes/create",
        getAllPath: "/settings/accTypes/getAll",
        getAllMasterDataPath: "/settings/accTypes/getAllMasterData",
        updatePath: (id: string) => `/settings/accTypes/update/${id}`,
        getByIdPath: (id: string) => `/settings/accTypes/getById/${id}`,
        deletePath: (id: string) => `/settings/accTypes/delete/${id}`
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
