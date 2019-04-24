import { Component, OnInit } from '@angular/core';

import { AppInfo } from '@app/types/AppInfo';

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

  app_infos: AppInfo[] = [
    {
      title: 'Medical Image Grading Platform',
      background_colour: '#f0904e',
      text_colour: '#eff4f7',
      description: 'Medical Image Grading Platform',
      router_link: '/grader'
    }
  ];
}
