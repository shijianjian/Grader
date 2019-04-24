import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/pages/shell/shell.service';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'error', component: ErrorComponent, data: { title: extract('Error') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ErrorRoutingModule {}
