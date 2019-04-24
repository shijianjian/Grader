import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HomeComponent } from './home.component';
import { Shell } from '@app/pages/shell/shell.service';
import { GraderComponent } from '@app/applications/grader/grader.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: extract('Home') } },
    { path: 'grader', component: GraderComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
