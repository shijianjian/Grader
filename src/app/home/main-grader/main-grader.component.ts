import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main-grader',
  templateUrl: './main-grader.component.html',
  styleUrls: ['./main-grader.component.scss']
})
export class MainGraderComponent implements OnInit {
  @HostBinding('class')
  elementClass = 'app-splits';

  constructor() {}

  ngOnInit() {}
}
