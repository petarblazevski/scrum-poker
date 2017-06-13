import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {
  private questions: Array<string> = [];

  constructor() { }

  getAllQuestions() {
    return Observable.from(this.questions);
  }

  addQuestion(question) {
    this.questions.push(question);
    console.log(this.questions);
  }

}
