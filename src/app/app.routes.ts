import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SessionPageComponent } from './session-page/session-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'session/:id',
    component: SessionPageComponent
  }
];
