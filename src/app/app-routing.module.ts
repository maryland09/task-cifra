import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
