import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FaqCreateComponent } from './faq-create/faq-create.component';
import { ContentAdminComponent } from './content-admin/content-admin.component';
//import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FaqCreateComponent,
    ContentAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
    //NgxEditorModule,
    // ReactiveFormsModule,
    // FormsModule
  ]
})
export class AdminModule { }
