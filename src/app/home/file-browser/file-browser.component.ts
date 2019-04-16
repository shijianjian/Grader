import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { TreeModel, TreeModelSettings, NodeSelectedEvent } from 'ng2-tree';
import { FolderTreeService } from '../folder-tree.service';
import { take } from 'rxjs/operators';
import { Image } from '@app/types/Image';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  @HostBinding('class')
  elementClass = 'app-splits';
  isLoading: boolean;

  @Output() loadImages = new EventEmitter();

  settings: TreeModelSettings = {
    isCollapsedOnInit: true
  };
  public tree: TreeModel;
  constructor(private folderTreeService: FolderTreeService) {}

  ngOnInit() {}

  handleSelected(event: NodeSelectedEvent) {
    if (event.node.children.length == 0) {
      this.loadFolder(event.node.node['path']);
    }
  }

  loadFolder(folder_path: string) {
    console.log(folder_path);
    this.folderTreeService
      .loadFolder(folder_path)
      .pipe(take(1))
      .subscribe((images: Image[]) => {
        this.loadImages.emit({ images: images });
      });
  }

  onStudyChange(event: any) {
    this.isLoading = true;
    this.folderTreeService.getTree(event['study']).subscribe((tree: TreeModel) => {
      this.tree = tree;
      this.isLoading = false;
    });
  }
}
