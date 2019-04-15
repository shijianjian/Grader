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

  settings: TreeModelSettings = {
    isCollapsedOnInit: true
  };

  get_images(): Image[] {
    return [
      {
        name: 'STDR001_23556_131.img',
        status: 'completed',
        updated: new Date('2/20/16'),
        path: '/media/hdd2/Carol/datasets/CNTG_Fundus/CNTG001/LE/A8950825_20161102_173327_Color_L_001.tif'
      },
      {
        name: 'STDR001_23556_132.img',
        status: 'reviewing',
        updated: new Date('1/18/16'),
        path: '/media/hdd2/Carol/datasets/CNTG_Fundus/CNTG001/RE/A8950825_20161102_173739_Color_R_001.tif'
      },
      {
        name: 'STDR001_23556_132.img',
        status: 'not_applicable',
        updated: new Date('1/18/16'),
        path: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }
    ];
  }

  ensemble_tree(project_title: string, folders: TreeModel[]): TreeModel {
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
        return folderTreeToTreeModel(body, 'directory');
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
