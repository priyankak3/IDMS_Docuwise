import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  routes: any = {
    createPath: '/maintenance/asset/create',
    getAllPath: '/maintenance/asset/getAll',
    getAllReportsPath: '/maintenance/asset/getAllReports',
    getAllDNSummaryReportsPath: '/maintenance/asset/getAllDNSummaryReports',
    getAllDNDetailsReportsPath: '/maintenance/asset/getAllDNDetailsReports',
    getAllMasterDataPath: '/maintenance/asset/getAllMasterData',
    excelDownloadPath: '/maintenance/asset/excelDownloadForReports',
    excelDownloadPPVpath: '/maintenance/asset/excelDownloadForPPVReports',
    updatePath: (id: string) => `/maintenance/asset/update/${id}`,
    getAllAssetBySupplierIdPath: (id: string) =>
      `/maintenance/asset/getAll assetBySupplierId/${id}`,
    getByIdPath: (id: string) => `/maintenance/asset/getById/${id}`,
    getDNDetailsByIdPath: (id: string) =>
      `/maintenance/asset/getDNDetailsById/${id}`,
    deletePath: (id: string) => `/maintenance/asset/delete/${id}`,
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
  getAllPPVExcel(params: any) {
    return this.http
      .get(this.routes.excelDownloadPPVpath, params)
      .pipe(map((res: any) => res));
  }
  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllDNSummaryReports(params: any) {
    return this.http
      .get(this.routes.getAllDNSummaryReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllDNDetailsReports(params: any) {
    return this.http
      .get(this.routes.getAllDNDetailsReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
      .pipe(map((res: any) => res));
  }
  excelDownload(params: any) {
    return this.http
      .getFile(this.routes.excelDownloadPPVpath, params)
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
  getDNDetailsById(id: string) {
    return this.http
      .get(this.routes.getDNDetailsByIdPath(id))
      .pipe(map((res: any) => res));
  }
  getAllDebitNoteBySupplierId(id: string) {
    return this.http
      .get(this.routes.getAllDebitNoteBySupplierIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
