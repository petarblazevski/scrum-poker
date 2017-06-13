import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

import { environment } from '../../environments/environment';

import { SessionService } from '../services/session.service';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent implements OnInit, OnDestroy {
  session: any;
  message: any;
  socket;

  constructor(private service: SessionService, private route: ActivatedRoute, private questions: QuestionsService) {
    this.session = service;
    this.socket = io.connect(environment.websocket_url);

    route.params.subscribe(params => service.setSessionId = params.id);

    console.log(questions.getAllQuestions())

    questions.getAllQuestions().subscribe(data => console.log('NEW DATA: ', data));
  }

  ngOnInit() {
    const self = this;

    this.socket.on('connect', function() {
      self.socket.emit('room', self.service.sessionId);
    });

    this.socket.on('message', function(data) {
      self.questions.addQuestion(data);
    });


  }

  ngOnDestroy() {
    this.socket.emit('leaveRoom', this.service.sessionId);
  }

  sendMessage() {
    this.socket.emit('message', this.service.sessionId, this.message);
  }

}
