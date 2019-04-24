import { Component, Input } from '@angular/core';
import { AppInfo } from '@app/types/AppInfo';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent {
  @Input() app_info: AppInfo;
  font_size = 5;

  constructor() {}
}
