import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartUploadRoutingModule } from './smart-upload-routing.module';
import { SmartUploadComponent } from './smart-upload.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SmartUploadComponent
  ],
  imports: [
    CommonModule,
    SmartUploadRoutingModule, SharedModule
  ]
})
export class SmartUploadModule { }
