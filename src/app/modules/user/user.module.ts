import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ContentUserComponent } from './content-user/content-user.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    ContentUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
