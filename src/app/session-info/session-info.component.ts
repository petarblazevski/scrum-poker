import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.scss']
})
export class SessionInfoComponent implements OnInit {
  @Input() user;
  @Input() session;

  constructor() { }

  ngOnInit() {
  }

}
