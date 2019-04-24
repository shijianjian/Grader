import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGraderComponent } from './main-grader.component';

import { FloatingListModule } from './floating-list/floating-list.module';
import { ImageFormModule } from './image-form/image-form.module';
import { FormSelectionService } from './form-selection.service';

@NgModule({
  declarations: [MainGraderComponent],
  exports: [MainGraderComponent],
  imports: [CommonModule, FloatingListModule, ImageFormModule],
  providers: [FormSelectionService]
})
export class MainGraderModule {}
