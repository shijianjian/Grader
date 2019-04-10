import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatRadioModule, MatCheckboxModule } from '@angular/material';

import { ImageFormComponent } from './image-form.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [ImageFormComponent],
  exports: [ImageFormComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatRadioModule, SharedModule]
})
export class ImageFormModule {}
