import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './admin/home/home.component';

const routes: Routes = [
  {path: 'homes', component: HomeComponent} // canActive, RouteGuarService
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
