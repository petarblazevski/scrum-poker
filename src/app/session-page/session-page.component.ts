import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

import { environment } from '../../environments/environment';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.css']
})
export class SessionPageComponent implements OnInit {
  session: any;
  message: any;
  socket;

  constructor(private service: SessionService, private route: ActivatedRoute) {
    this.session = service;
    this.socket = io.connect(environment.websocket_url);

    route.params.subscribe(params => service.setSessionId = params.id);
  }

  ngOnInit() {
    const self = this;

    this.socket.on('connect', function() {
      self.socket.emit('room', self.service.sessionId);
    });

    this.socket.on('message', function(data) {
      console.log('Incoming message: ', data);
    });
  }

  sendMessage() {
    this.socket.emit('message', this.service.sessionId, this.message);
  }

}
