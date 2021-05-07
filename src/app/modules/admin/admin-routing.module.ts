import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentAdminComponent } from './content-admin/content-admin.component';
import { FaqCreateComponent } from './faq-create/faq-create.component';


const routes: Routes = [
  { path: '', component: ContentAdminComponent },
  { path: 'faq-create', component: FaqCreateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
