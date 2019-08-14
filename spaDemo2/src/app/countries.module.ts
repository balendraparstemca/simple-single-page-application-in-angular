//create the module
//NgModule used to create the Module
import { NgModule } from "@angular/core";
//import CommonModule
//CommonModule used to receive the common benfits from Framework
import { CommonModule } from "@angular/common";
//import CountriesComponent
import { CountriesComponent } from "./countries.component";
//import CountriesService
import { CountriesService } from "./countries.service";
//import HttpClientModule
import { HttpClientModule } from "@angular/common/http";
//import Routes,RouterModule
import { Routes,RouterModule } from "@angular/router";
//create the const
export const appRoutes:Routes = [{
  path:"",component:CountriesComponent
}];
@NgModule({
  declarations:[CountriesComponent],
  imports:[CommonModule,HttpClientModule,RouterModule.forChild(appRoutes)],
  providers:[CountriesService],
  exports:[CountriesComponent]
})
export class CountriesModule{}







