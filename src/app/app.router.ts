import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// COMPONENTS //
import {AppComponent} from './app.component';
import {CityComponent} from './city/city.component';
import {CityDetailComponent} from './city/city.detail.component';
import {NavbarComponent} from './navbar-component/navbar.component';
import {HomeComponent} from './home-component/home.component';
import {SamplesComponent} from './samples-component/samples.component';

export const router: Routes = [

// YOUR ROUTES HERE //
{
    path:'', 
    redirectTo:'home', 
    pathMatch:'full'
},


{
    path:'city', 
    component: CityComponent
},
{
    path:'city/:id', 
    component: CityDetailComponent
},
{
    path:'home', 
    component: HomeComponent
},
{
    path:'samples', 
    component: SamplesComponent
},



// CATCH ANY OTHER ROUTE //
{
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full' 
}
];

export const routers: ModuleWithProviders = RouterModule.forRoot(router);