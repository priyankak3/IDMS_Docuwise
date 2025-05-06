import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class EmployeeTimesheetService {
    routes: any = {
        createPath: "/production/employeeTimesheet/create",
        getAllPath: "/production/employeeTimesheet/getAll",
        getAllReportsPath: "/production/employeeTimesheet/getAllReports",
        getAllMasterDataPath: "/production/employeeTimesheet/getAllMasterData",
        updatePath: (id: string) => `/production/employeeTimesheet/update/${id}`,
        getByIdPath: (id: string) => `/production/employeeTimesheet/getById/${id}`,
        getByEmployeeIdPath: (id: string) => `/production/employeeTimesheet/getByEmployeeId/${id}`,
        deletePath: (id: string) => `/production/employeeTimesheet/delete/${id}`,
        getPdfDataPath: "/production/employeeTimesheet/getPdfData",
        getProjectsAgainstEmployeeNamePath: (employeeName: string) => `/production/employeeTimesheet/getProjectsAgainstEmployeeName/${employeeName}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getPdfData(params: any) {
        return this.http.get(this.routes.getPdfDataPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getProjectsAgainstEmployeeName(employeeName: string) {
        return this.http.get(this.routes.getProjectsAgainstEmployeeNamePath(employeeName)).pipe(map((res: any) => res));
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
