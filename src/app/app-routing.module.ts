import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/admin/homes/home.component';
import { HomesComponent } from './components/homes/homes.component';
import { HomeDetailComponent } from './components/admin/homes/home-detail/home-detail.component';

const routes: Routes = [
  {path: 'admin/homes', component: HomeComponent}, // canActive, RouteGuarService
  {path: 'admin/homes/:id', component: HomeDetailComponent},
  {path: 'home', component: HomesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
