import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { TreeModel, TreeModelSettings } from 'ng2-tree';
import { FolderTreeService, Image } from '../folder-tree.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  @HostBinding('class')
  elementClass = 'app-splits';

  @Output() loadImages = new EventEmitter();

  settings: TreeModelSettings = {
    isCollapsedOnInit: true
  };
  public tree: TreeModel;
  constructor(private folderTreeService: FolderTreeService) {}

  ngOnInit() {
    this.folderTreeService.getTree('STDR Fundus').subscribe((tree: TreeModel) => {
      this.tree = tree;
    });
  }

  handleSelected(event: Event) {
    if (event['node'].children == null) {
      var node = event['node'];
      let nodes: string[] = [];
      nodes.push(node['value']);
      while (node.parent != null) {
        node = node.parent;
        nodes.push(node['value']);
      }
      this.loadFolder(nodes.reverse());
    }
  }

  loadFolder(folder_arr: string[]) {
    this.folderTreeService
      .loadFolder(folder_arr)
      .pipe(take(1))
      .subscribe((images: Image[]) => {
        this.loadImages.emit({ images: images });
      });
  }
}
