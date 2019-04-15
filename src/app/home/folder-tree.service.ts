import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TreeModel, TreeModelSettings } from 'ng2-tree';

export interface Image {
  name: string;
  status?: string;
  updated?: Date;
  path?: string;
  src?: string;
}

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class FolderTreeService {
  constructor(private httpClient: HttpClient) {}

  settings: TreeModelSettings = {
    isCollapsedOnInit: true
  };

  tree: TreeModel[] =
    // value: 'STDR Fundus',
    [
      {
        value: 'STDR001',
        children: [
          { value: '2018-07-15', children: [{ value: 'LE' }, { value: 'RE' }] },
          { value: '2017-06-25', children: [{ value: 'LE' }, { value: 'RE' }] },
          { value: '2016-05-18', children: [{ value: 'LE' }, { value: 'RE' }] }
        ]
      },
      {
        value: 'STDR002',
        children: [
          { value: '2018-07-15', children: [{ value: 'LE' }, { value: 'RE' }] },
          { value: '2017-06-25', children: [{ value: 'LE' }, { value: 'RE' }] },
          { value: '2016-05-18', children: [{ value: 'LE' }, { value: 'RE' }] }
        ]
      }
    ];

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
    return new Observable(observer => {
      setTimeout(() => {
        let tree = this.ensemble_tree(project_title, this.tree);
        observer.next(tree);
      }, 500);
    });
    //   return this.httpClient
    //     .cache()
    //     .get(routes.quote(context))
    //     .pipe(
    //       map((body: any) => body.value),
    //       catchError(() => of('Error, could not load joke :-('))
    //     );
  }

  loadFolder(pathArr: string[]): Observable<Image[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.get_images());
      }, 500);
    });
  }

  // loadContent(pathArr: string[]): Observable<string> {
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(pathArr[0]);
  //     }, 500);
  //   });
  // }

  getImage(path: string) {
    return this.httpClient.get(`${BASE_URL}/studies/image/path${path}`);
  }
}
