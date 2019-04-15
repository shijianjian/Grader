import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'ng2-tree';

import { FileBrowserComponent } from './file-browser.component';
import { FolderTreeService } from '../folder-tree.service';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [FileBrowserComponent],
  exports: [FileBrowserComponent],
  imports: [CommonModule, TreeModule, SharedModule],
  providers: [FolderTreeService]
})
export class FileBrowserModule {}
