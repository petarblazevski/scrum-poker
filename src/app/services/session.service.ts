import { Injectable } from '@angular/core';
import shortid from 'shortid';

import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {
  private _sessionType = environment.default_session_type;
  private _sessionId;

  constructor() { }

  generateSessionId(): string {
    const id = shortid.generate();
    return id;
  }

  get sessionType() {
    return this._sessionType;
  }

  set setSessionType(type) {
    this._sessionType = type;
  }

  get sessionId() {
    return this._sessionId;
  }

  set setSessionId(id) {
    this._sessionId = id;
  }

}
