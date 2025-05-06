import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class CompanyInsightService {
    routes: any = {
        searchCompanyDataPath: "/businessLeads/companyInsight/getSearchCompanyData",
        getCompanyInformation: "/businessLeads/companyInsight/getCompanyData"
    };

    constructor(private http: HttpClient) {}
    // getSearchCompanyData(payload: any) {
    //     return this.http.post(this.routes.searchCompanyDataPath, payload).pipe(map((res: any) => res));
    // }
    getSearchCompanyData(companyName: string) {
        return this.http.post(this.routes.searchCompanyDataPath, {query: companyName}).pipe(map((res: any) => res));
    }

    getCompanyData(payload: any) {
        return this.http.post(this.routes.getCompanyInformation, payload).pipe(map((res: any) => res));
    }
}
