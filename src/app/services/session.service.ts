import { Injectable } from '@angular/core';
import shortid from 'shortid';

import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {
  private _sessionType = environment.default_session_type;
  private _sessionId = environment.default_session_id;

  constructor() { }

  generateSessionId(): string {
    const id = shortid.generate();
    this._sessionId = id;
    return id;
  }

  set setSessionType(type) {
    this._sessionType = type;
  }

  get sessionType() {
    return this._sessionType;
  }

  get sessionId() {
    return this._sessionId;
  }

}
