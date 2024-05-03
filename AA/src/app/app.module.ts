import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SecurityComponent } from './security/security.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { HomeComponent } from './user-interface/home/home.component';
import { VideoContentComponent } from './user-interface/video-content/video-content.component';
import { EventsComponent } from './user-interface/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SecurityComponent,
    UserInterfaceComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VideoContentComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
