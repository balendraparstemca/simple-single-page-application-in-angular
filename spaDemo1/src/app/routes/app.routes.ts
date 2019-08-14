import { Routes } from "@angular/router";
import { PageoneComponent } from '../components/pageone.component';
import { PagetwoComponent } from '../components/pagetwo.component';
import { PagethreeComponent } from '../components/pagethree.component';
import { ChildoneComponent } from '../components/childone.component';
import { ChildtwoComponent } from '../components/childtwo.component';
import { ChildthreeComponent } from '../components/childthree.component';
import { AuthService } from '../auth/auth.service';
export const appRoutes:Routes = [
    {path:"page_one/:p_id/:p_name/:p_cost",
     component:PageoneComponent,
    children:[{path:"child_one",
               component:ChildoneComponent}],
    canActivate:[AuthService]},
    
    {path:"page_two/:p_id/:p_name/:p_cost",component:PagetwoComponent,
    children:[{path:"child_two",component:ChildtwoComponent}],
    canDeactivate:[AuthService]},
    
    {path:"page_three/:obj",component:PagethreeComponent,
    children:[{path:"child_three/:p_id/:p_name/:p_cost",component:ChildthreeComponent}],
    canActivateChild:[AuthService]}
];