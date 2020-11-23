import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent 
  },
  {
    path: 'detail/:id',
    component: DetailsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: "**", 
    redirectTo: 'home' 
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
