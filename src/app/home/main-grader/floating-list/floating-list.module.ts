import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FloatingListComponent } from './floating-list.component';

@NgModule({
  declarations: [FloatingListComponent],
  exports: [FloatingListComponent],
  imports: [CommonModule, MatListModule, MatIconModule, ReactiveFormsModule, FormsModule]
})
export class FloatingListModule {}
