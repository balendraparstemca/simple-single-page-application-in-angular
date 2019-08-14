import { Routes, RouterModule } from "@angular/router";
import { PageoneComponent } from './pageone.component';
import { AuthService } from './auth.service';
import { ModuleWithProviders } from "@angular/core";
export const appRoutes:Routes = [
    {path:"page_one",component:PageoneComponent},
    {path:"lazy",
     loadChildren:"./countries.module#CountriesModule",
     canLoad:[AuthService]}
];
export const lazyRoutes:ModuleWithProviders = 
                        RouterModule.forRoot(appRoutes); 