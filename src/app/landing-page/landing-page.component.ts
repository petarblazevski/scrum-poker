import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit() { }

}
