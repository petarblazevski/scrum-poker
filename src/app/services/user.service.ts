import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  _name = '';

  constructor() {
    const existingUser = localStorage.getItem('user.name');

    this.name = existingUser ? existingUser : '';
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    localStorage.setItem('user.name', name);
    this._name = name;
  }

}
