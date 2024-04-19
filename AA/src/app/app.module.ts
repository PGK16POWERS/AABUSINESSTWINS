import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SecurityComponent } from './security/security.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SecurityComponent,
    UserInterfaceComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
