import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { WorkComponent } from './work/work.component';
import {GuardService} from './guard.service'
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: "work", component: WorkComponent,canActivate:[GuardService]
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"orders",component:OrdersComponent,canActivate:[GuardService]
  },
  {
    path:"home",component:HomeComponent,canActivate:[GuardService]
  },
  {
    path:"**",redirectTo:"/login",pathMatch:"full"
  },
  {
    path:"",redirectTo:"/login",pathMatch:"full"
  }
];

export const routecomp = [WorkComponent]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
