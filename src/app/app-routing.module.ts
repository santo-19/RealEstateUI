import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/AddProperty/AddProperty.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { LoginComponent } from './user/user-login/login/login.component';
import { RegisterComponent } from './user/user-register/register/register.component';

const routes: Routes = [{path:'', component:PropertyListComponent},
{path:"rent-property", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"property-detail/:id", component:PropertyDetailComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"user/login",component:LoginComponent},
  {path:"**", component:PropertyListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
