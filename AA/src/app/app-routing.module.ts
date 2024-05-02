import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SecurityComponent } from './security/security.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent
  },
  {
    path:'security',
    component: SecurityComponent
  },
  {
    path: 'security/login',
    component: LoginComponent
  },
  {
    path: 'security/register',
    component: RegisterComponent
  }, 
  {
    path: 'user-dashboard',
    component: UserInterfaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
