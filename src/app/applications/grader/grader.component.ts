import { Component } from '@angular/core';

@Component({
  selector: 'app-grader',
  templateUrl: './grader.component.html',
  styleUrls: ['./grader.component.scss']
})
export class GraderComponent {
  images: [];

  constructor() {}

  loadImages(event: Event) {
    this.images = event['images'];
  }
}
