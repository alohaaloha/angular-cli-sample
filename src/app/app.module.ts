import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ROUTER //
import { routers } from './app.router';

// COMPONENTS //
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent} from './city/city.detail.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HomeComponent } from './home-component/home.component';
import { SamplesComponent } from './samples-component/samples.component';

// SERVICES //
import {CityService} from './city/city.service'


@NgModule({
  declarations: [
    AppComponent,
    //ADD COMPOMENTS HERE
    CityComponent,
    CityDetailComponent,
    NavbarComponent,
    HomeComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //ADD IMPORTS HERE
    routers
  ],
  providers: [
    //ADD SERVICES HERE
    CityService
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
