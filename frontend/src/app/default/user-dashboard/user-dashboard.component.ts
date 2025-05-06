import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../../core/services/api.service';
import { SortEvent } from '@shared/directives';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit,OnDestroy {
    uploads: any[] = [];
    showUploadModal = false;
    file: File | null = null;
    docType = 'invoice';
    extractedData: any = null;
    showExtractModal = false;
    uploading = false;
    loadingUploads = true;
    searchTerm = '';
    currentPage = 1;
    itemsPerPage = 5;
    private intervalId: any;
    headers: any;
  column: any;
  direction: number =-1;
  
    constructor(
        private modalService: NgbModal,
      private apiService: AdminApiService,
      private router: Router,
      private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        this.fetchUploads();
        this.intervalId = setInterval(() => this.fetchUploads(), 30000); // every 30 seconds
      }
    
      ngOnDestroy(): void {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }

      fetchUploads(): void {
        const tenantId = localStorage.getItem('docuwise_tenantId')||'680f483b0c5acfa0db3e539b';
        if (!tenantId) {
          this.toastr.error('Tenant ID not found');
          return;
        }
    
        this.apiService.getUploads(tenantId).subscribe({
          next: (response) => {
            this.uploads = response;
            this.loadingUploads = false;
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Failed to load uploads');
            this.loadingUploads = false;
          }
        });
      }

      handleUpload(): void {
        if (!this.file) {
          this.toastr.error('Please select a file');
          return;
        }
    
        const tenantId = localStorage.getItem('docuwise_tenantId')||'680f483b0c5acfa0db3e539b';
        if (!tenantId) {
          this.toastr.error('Tenant ID not found');
          return;
        }
    
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('tenantId', tenantId);
        formData.append('docType', this.docType);
    
        this.uploading = true;
    
        this.apiService.uploadDocument(formData).subscribe({
          next: () => {
            this.toastr.success('File uploaded successfully!');
            this.showUploadModal = false;
            this.file = null;
            this.uploading = false;
            this.fetchUploads();
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Upload failed');
            this.uploading = false;
          }
        });
      }
    
      handleLogout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    
      viewExtraction(uploadId: string): void {
        this.apiService.getExtractedResults(uploadId).subscribe({
          next: (response) => {
            this.extractedData = response.extractedData;
            this.showExtractModal = true;
          },
          error: (err) => {
            console.error(err);
            this.toastr.error('Failed to fetch extracted data');
          }
        });
      }
    
      downloadJSON(): void {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.extractedData, null, 2));
        const link = document.createElement('a');
        link.href = dataStr;
        link.download = "extracted_result.json";
        link.click();
      }
    
      downloadExcel(): void {
        const worksheet = XLSX.utils.json_to_sheet([this.extractedData]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "ExtractedData");
        XLSX.writeFile(workbook, "extracted_result.xlsx");
      }
    
      onFileSelect(event: any): void {
        if (event.target.files.length > 0) {
          this.file = event.target.files[0];
        }
      }

      onSort({column, direction}: SortEvent) {
          this.headers.forEach((header: any) => {
              if (header.sortable !== column) {
                  header.direction = "";
              }
          });
          this.column = column;
          this.direction = direction == "asc" ? 1 : -1;
          this.fetchUploads();
      }
    
      openModal(): void {
        this.showUploadModal = true;
      }
    
      closeModal(): void {
        this.showUploadModal = false;
      }

      closeExtractModal(): void {
        this.showExtractModal = false;
      }
    
      trackByFn(index: number, item: any): any {
        return item._id || index;
      }
}