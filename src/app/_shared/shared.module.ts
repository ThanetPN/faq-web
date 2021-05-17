import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './component/text-editor/text-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './component/pagination/pagination.component';



@NgModule({
  declarations: [
    TextEditorComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgxEditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TextEditorComponent,
    PaginationComponent
  ],
  bootstrap: [TextEditorComponent]
})
export class SharedModule { }
