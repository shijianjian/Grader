import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-main-grader',
  templateUrl: './main-grader.component.html',
  styleUrls: ['./main-grader.component.scss']
})
export class MainGraderComponent implements OnInit {
  @HostBinding('class')
  elementClass = 'app-splits';

  @Input() images: [];
  image_info: {};

  constructor() {}

  ngOnInit() {}

  getImageInfo(event: Event) {
    setTimeout(() => {
      this.image_info = event['image_info'];
    }, 0);
  }

  onSchemaChange(event: Event) {
    console.log(event);
  }
}
