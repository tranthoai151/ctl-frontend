import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/admin/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomesComponent } from './components/homes/homes.component';
import { SearchComponent } from './components/search/search.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomesComponent,
    SearchComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
