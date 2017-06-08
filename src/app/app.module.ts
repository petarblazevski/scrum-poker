import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SessionSetupComponent } from './session-setup/session-setup.component';

import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SessionSetupComponent,
    LandingPageComponent,
    SessionPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
