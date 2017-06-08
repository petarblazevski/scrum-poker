import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.component.html',
  styleUrls: ['./session-setup.component.scss']
})
export class SessionSetupComponent implements OnInit {
  @Input()
  type: string;

  @Input()
  id: string;

  constructor() { }

  ngOnInit() {
  }

}
