import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-floating-list',
  templateUrl: './floating-list.component.html',
  styleUrls: ['./floating-list.component.scss']
})
export class FloatingListComponent implements OnInit {
  notes = [
    {
      name: 'STDR001_23556_131.img',
      updated: new Date('2/20/16')
    },
    {
      name: 'STDR001_23556_132.img',
      updated: new Date('1/18/16')
    }
  ];

  constructor() {}

  ngOnInit() {}
}
