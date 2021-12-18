import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch:'full'
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: HomeComponent,
      },

      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
