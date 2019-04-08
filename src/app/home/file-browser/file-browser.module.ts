import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'ng2-tree';

import { FileBrowserComponent } from './file-browser.component';

@NgModule({
  declarations: [FileBrowserComponent],
  exports: [FileBrowserComponent],
  imports: [CommonModule, TreeModule]
})
export class FileBrowserModule {}
