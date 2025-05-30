import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SubModulesService {
    routes: any = {
        createPath: "/settings/subModuleManagement/create",
        getAllPath: "/settings/subModuleManagement/getAll",
        getAllForCardsPath: "/settings/subModuleManagement/getAllForCards",
        getAllMasterDataPath: "/settings/subModuleManagement/getAllMasterData",
        getAllFilterDataPath: "/settings/subModuleManagement/getAllFilterData",
        updatePath: `/settings/subModuleManagement/update`,
        getByIdPath: (id: string) => `/settings/subModuleManagement/getById/${id}`,
        deletePath: (id: string) => `/settings/subModuleManagement/delete/${id}`
    };
    $titleChange: any;
    constructor(private http: ApiService) {}
    getAllForCards(params: any) {
        return this.http.get(this.routes.getAllForCardsPath, params);
    }
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    update(payload: any) {
        return this.http.put(this.routes.updatePath, payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    getAllFilterData(params: any) {
        return this.http.get(this.routes.getAllFilterDataPath, params).pipe(map((res: any) => res));
    }
}
