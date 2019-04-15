import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '@app/types/Image';
import { TreeModel, TreeModelSettings } from 'ng2-tree';

import { folderTreeToTreeModel, folderTreeToImage } from '@app/types/FolderTree';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class FolderTreeService {
  constructor(private httpClient: HttpClient) {}

  private settings: TreeModelSettings = {
    isCollapsedOnInit: true
  };

  private ensemble_tree(project_title: string, folders: TreeModel[]): TreeModel {
    return {
      value: project_title,
      settings: this.settings,
      children: folders
    };
  }

  getTree(project_title: string): Observable<TreeModel> {
    return this.httpClient.get(`${BASE_URL}/studies/directory/${project_title}`).pipe(
      map((body: any) => {
        console.log(body);
        let tree = folderTreeToTreeModel(body, 'directory');
        return this.ensemble_tree(project_title, tree.children);
      })
    );
  }

  loadFolder(path: string): Observable<Image[]> {
    return this.httpClient.get(`${BASE_URL}/studies/directory${path}`).pipe(
      map((body: any) => {
        console.log(body);
        return folderTreeToImage(body);
      })
    );
  }

  getImage(path: string) {
    return this.httpClient.get(`${BASE_URL}/studies/image/path${path}`);
  }
}
