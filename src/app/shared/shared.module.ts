import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DynamicJsonFormComponent } from './dynamic-json-form/dynamic-json-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatFormFieldModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [LoaderComponent, DynamicJsonFormComponent],
  exports: [LoaderComponent, DynamicJsonFormComponent]
})
export class SharedModule {}
