import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SecurityComponent } from './security/security.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { HomeComponent } from './user-interface/home/home.component';
import { VideoContentComponent } from './user-interface/video-content/video-content.component';
import { EventsComponent } from './user-interface/events/events.component';

const routes: Routes = [
  {
    path:'',
    component: LandingpageComponent
  },
  {
    path:'security',
    component: SecurityComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserInterfaceComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch:'full'
      },
      {
        path: 'video-content',
        component: VideoContentComponent
      },
      {
        path: 'events',
        component: EventsComponent
      }
    ]
  },

  // Default route
  {
    path: '**',
    redirectTo: '' // Redirect to landing page if URL doesn't match any route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
