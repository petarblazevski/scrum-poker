import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

const state = [
  'Message content maintainable for SRS admin',
  'Maintenance mode and information page',
  'Enable sorting on column headings in Transaction list',
  'Rewrite of old web Order pages',
  'Rewrite of old web Pickup order pages',
  'Location maintenance major changes',
];

@Injectable()
export class QuestionsService {
  private questions: Array<string> = [];
  private subject = new BehaviorSubject<Array<string>>(state);
  store = this.subject.asObservable();

  constructor() { }

  getAllQuestions(): Observable<any> {
    return this.subject;
  }

  addQuestion(question) {
    const value = this.subject.value;
    this.subject.next([ ...value, question]);

    // this.questions.push(question);
    // console.log(this.questions);
  }

}
