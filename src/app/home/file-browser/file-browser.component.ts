import { Component, OnInit, HostBinding } from '@angular/core';
import { TreeModel, TreeModelSettings } from 'ng2-tree';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  @HostBinding('class')
  elementClass = 'app-splits';

  settings: TreeModelSettings = {
    isCollapsedOnInit: true
  };
  constructor() {}

  public tree: TreeModel = {
    value: 'STDR Fundus',
    settings: this.settings,
    children: [
      {
        value: 'STDR001',
        children: [{ value: '2018-07-15' }, { value: '2017-06-25' }, { value: '2016-05-18' }]
      },
      {
        value: 'STDR002',
        children: [{ value: '2018-07-15' }, { value: '2017-06-25' }, { value: '2016-05-18' }]
      }
    ]
  };

  ngOnInit() {}
}
