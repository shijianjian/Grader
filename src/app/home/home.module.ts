import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FileBrowserModule } from './file-browser/file-browser.module';
import { MainGraderModule } from './main-grader/main-grader.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, HomeRoutingModule, FileBrowserModule, MainGraderModule],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
