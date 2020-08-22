import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/UserHome/home/home.component';
import { ProfileListComponent } from './component/UserHome/profile-list/profile-list.component';
import { MatchesComponent } from './component/UserHome/matches/matches.component';
import { ManageProfileComponent } from './component/UserHome/manage-profile/manage-profile.component';
import { ViewProfileComponent } from './component/UserHome/view-profile/view-profile.component';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component: LoginComponent },
  {path:'home',component: HomeComponent},
    {
      path:'profile',component: ProfileListComponent
     },
     {
       path:'Matches',component: MatchesComponent
     },
     {
       path:'ManageProfile',component: ManageProfileComponent
     },
     {
      path:'ViewProfile',component: ViewProfileComponent
    },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
