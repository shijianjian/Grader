import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraderComponent } from './grader.component';

import { CoreModule } from '@app/core';
import { FileBrowserModule } from './file-browser/file-browser.module';
import { MainGraderModule } from './main-grader/main-grader.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, FileBrowserModule, MainGraderModule],
  declarations: [GraderComponent],
  exports: [GraderComponent],
  providers: []
})
export class GraderModule {}
