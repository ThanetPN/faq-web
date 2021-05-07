import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentUserComponent } from './content-user/content-user.component';

const routes: Routes = [
  { path: '', component: ContentUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
