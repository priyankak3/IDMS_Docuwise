import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class AutomationEmailConfigService {
    public $titleChange = new Subject<string>();
    routes: any = {
        createPath: "/settings/automationEmailConfiguration/create",
        getAllPath: "/settings/automationEmailConfiguration/getAll",
        getAllMasterDataPath: "/settings/automationEmailConfiguration/getAllMasterData",
        excelDownloadPath: "/settings/automationEmailConfiguration/excelDownload",
        updatePath: (id: string) => `/settings/automationEmailConfiguration/update/${id}`,
        getByIdPath: (id: string) => `/settings/automationEmailConfiguration/getById/${id}`,
        deletePath: (id: string) => `/settings/automationEmailConfiguration/delete/${id}`
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
    excelDownload(params: any) {
        return this.http.getFile(this.routes.excelDownloadPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: any) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
