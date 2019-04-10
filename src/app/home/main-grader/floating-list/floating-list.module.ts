import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FloatingListComponent } from './floating-list.component';

@NgModule({
  declarations: [FloatingListComponent],
  exports: [FloatingListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FloatingListModule {}
