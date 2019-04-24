import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { GraderModule } from '@app/applications/grader/grader.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AppCardModule } from './app-card/app-card.module';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, HomeRoutingModule, GraderModule, AppCardModule],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
