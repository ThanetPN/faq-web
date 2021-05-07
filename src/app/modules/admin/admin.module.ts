import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FaqCreateComponent } from './faq-create/faq-create.component';
import { ContentAdminComponent } from './content-admin/content-admin.component';


@NgModule({
  declarations: [
    FaqCreateComponent,
    ContentAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
