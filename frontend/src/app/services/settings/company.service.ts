import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  public $titleChange = new Subject<string>();
  routes: any = {
    createPath: '/settings/company/create',

    getAllPath: '/settings/company/getAll',
    // getAllMasterDataPath: '/settings/company/create',

    SOSignPDFPath: (id: string) => `/settings/company/SOSignPDF/${id}`,
    updatePath: (id: string) => `/settings/company/update/${id}`,
    getByIdPath: (id: string) => `/settings/company/getById/${id}`,
    deletePath: (id: string) => `/settings/company/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }

  getAll(params: any) {
    return this.http
      .get(this.routes.getAllPath, params)
      .pipe(map((res: any) => res));
  }

  SOSignPDF(id: string, payload: any) {
    return this.http
      .put(this.routes.SOSignPDFPath(id), payload)
      .pipe(map((res: any) => res));
  }
  update(id: string, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  getById(id: string) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
