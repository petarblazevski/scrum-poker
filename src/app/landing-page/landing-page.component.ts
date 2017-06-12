import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import io from 'socket.io-client';

import { environment } from '../../environments/environment';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  session: any;

  constructor(private service: SessionService, private router: Router) {
    this.session = service;
  }

  ngOnInit() {
    console.log(io);
    io(environment.websocket_url);
  }

  onJoinSession() {
    this.session.setSessionType = 'join';
    this.router.navigate(['session']);
  }

  onNewSession() {
    this.session.setSessionType = 'new';
    this.router.navigate(['session']);
  }

}
