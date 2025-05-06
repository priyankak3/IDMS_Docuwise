import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class DeliveryMilestoneService {
    routes: any = {
        getAllDeliveryMilestoneReportsPath: "/sales/project/getAllDeliveryMilestoneReports",
        getAllFinancialMilestoneReportsPath: "/sales/project/getAllFinancialMilestoneReports"
    };
    constructor(private http: ApiService) {}

    getAllDeliveryMilestoneReports(params: any) {
        return this.http.get(this.routes.getAllDeliveryMilestoneReportsPath, params).pipe(map((res: any) => res));
    }
    getAllFinancialMilestoneReports(params: any) {
        return this.http.get(this.routes.getAllFinancialMilestoneReportsPath, params).pipe(map((res: any) => res));
    }
}
