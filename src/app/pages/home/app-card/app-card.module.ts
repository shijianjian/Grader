import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppCardComponent } from './app-card.component';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppCardComponent],
  exports: [AppCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule]
})
export class AppCardModule {}
