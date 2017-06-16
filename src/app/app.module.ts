import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SessionPageComponent } from './session-page/session-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SessionSetupComponent } from './session-setup/session-setup.component';
import { SessionInfoComponent } from './session-info/session-info.component';

import { SessionService } from './services/session.service';
import { QuestionsService } from './services/questions.service';
import { DeckService } from './services/deck.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SessionSetupComponent,
    LandingPageComponent,
    SessionPageComponent,
    SessionInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [SessionService, QuestionsService, DeckService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
