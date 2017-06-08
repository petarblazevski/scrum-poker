import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.css']
})
export class SessionPageComponent implements OnInit {
  session: any;

  constructor(private service: SessionService) {
    this.session = service;
  }

  ngOnInit() {
    if (this.session.sessionType === 'new') {
      this.session.generateSessionId();
    }

    console.log(this.session.sessionId);
    console.log(this.session.sessionType);
  }

}
