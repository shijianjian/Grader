import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: [];

  constructor() {}

  loadImages(event: Event) {
    this.images = event['images'];
  }
}
