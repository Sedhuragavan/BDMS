import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Aboutus/Aboutus.component';
import { BloodfactsComponent } from './bloodfacts/bloodfacts.component';
import { ContactusComponent } from './Contactus/Contactus.component';
import { DonorComponent } from './donor/donor.component';
import { ForgotComponent } from './Forgot/Forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { RequestbloodComponent } from './requestblood/requestblood.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"bloodfacts",
    component:BloodfactsComponent
  },
  {
    path:"request",
    component:RequestbloodComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"forgot",
    component:ForgotComponent
  },
  {
    path:"donor",
    component:DonorComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
