import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class GoodsReceiptNoteService {
  routes: any = {
    createPath: '/stores/grn/create',
    getAllPath: '/stores/grn/getAll',
    getAllGRNLocationWiseReportsPath:
      '/stores/grn/getAllGRNLocationWiseReports',
    getAllGRNForSupplementaryPOPath: '/stores/grn/getAllGRNForSupplementaryPO',
    getAllReportsPath: '/stores/grn/getAllReports',
    getAllSupplierWiseReportsPath: '/stores/grn/getAllSupplierWiseReports',
    getAllItemWiseReportsPath: '/stores/grn/getAllItemWiseReports',
    getGRNDetailReportsPath: '/stores/grn/getGRNDetailReports',
    getGRNSummeryReportsPath: '/stores/grn/getGRNSummeryReports',
    getGRNDiscrepancyReportsPath: '/stores/grn/getGRNDiscrepancyReports',
    getGRNTrendReportsPath: '/stores/grn/getGRNTrendReports',
    getAllMasterDataPath: '/stores/grn/getAllMasterData',
    excelDownloadPath: '/stores/grn/excelDownload',
    excelDownloadReportsPath: '/stores/grn/excelDownloadForReports',
    updatePath: (id: string) => `/stores/grn/update/${id}`,
    updateOnCancelPath: (id: string) => `/stores/grn/updateOnCancelGRN/${id}`,
    getByIdPath: (id: string) => `/stores/grn/getById/${id}`,
    getGRNDetailsByIdPath: (id: string) =>
      `/stores/grn/getGRNDetailsById/${id}`,
    deletePath: (id: string) => `/stores/grn/delete/${id}`,
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
  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllSupplierWiseReports(params: any) {
    return this.http
      .get(this.routes.getAllSupplierWiseReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllItemWiseReports(params: any) {
    return this.http
      .get(this.routes.getAllItemWiseReportsPath, params)
      .pipe(map((res: any) => res));
  }

  getGRNDetailReports(params: any) {
    return this.http
      .get(this.routes.getGRNDetailReportsPath, params)
      .pipe(map((res: any) => res));
  }

  getGRNSummeryReports(params: any) {
    return this.http
      .get(this.routes.getGRNSummeryReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getGRNDiscrepancyReports(params: any) {
    return this.http
      .get(this.routes.getGRNDiscrepancyReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getGRNTrendReports(params: any) {
    return this.http
      .get(this.routes.getGRNTrendReportsPath, params)
      .pipe(map((res: any) => res));
  }

  excelDownloadReports(params: any) {
    return this.http
      .getFile(this.routes.excelDownloadReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
      .pipe(map((res: any) => res));
  }
  excelDownload(params: any) {
    return this.http
      .getFile(this.routes.excelDownloadPath, params)
      .pipe(map((res: any) => res));
  }
  update(id: string, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  updateOnCancel(id: string, payload: any) {
    return this.http
      .put(this.routes.updateOnCancelPath(id), payload)
      .pipe(map((res: any) => res));
  }
  getById(id: string) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  getGRNDetailsById(id: string) {
    return this.http
      .get(this.routes.getGRNDetailsByIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
  getAllGRNForSupplementaryPO(params: any) {
    return this.http
      .get(this.routes.getAllGRNForSupplementaryPOPath, params)
      .pipe(map((res: any) => res));
  }
  getAllGRNLocationWiseReports(params: any) {
    return this.http
      .get(this.routes.getAllGRNLocationWiseReportsPath, params)
      .pipe(map((res: any) => res));
  }
}
