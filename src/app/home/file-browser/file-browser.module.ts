import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'ng2-tree';
import { MatExpansionModule, MatSelectModule, MatFormFieldModule } from '@angular/material';

import { FileBrowserComponent } from './file-browser.component';
import { FolderTreeService } from '../folder-tree.service';
import { SharedModule } from '@app/shared/shared.module';
import { ProjectPanelComponent } from './project-panel/project-panel.component';

@NgModule({
  declarations: [FileBrowserComponent, ProjectPanelComponent],
  exports: [FileBrowserComponent],
  imports: [CommonModule, TreeModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, SharedModule],
  providers: [FolderTreeService]
})
export class FileBrowserModule {}
