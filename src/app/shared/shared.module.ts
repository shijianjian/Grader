import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MatFormFieldModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { LoaderComponent } from './loader/loader.component';
import { DynamicJsonFormComponent } from './dynamic-json-form/dynamic-json-form.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
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
