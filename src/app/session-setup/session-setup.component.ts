import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-session-setup',
  templateUrl: './session-setup.component.html',
  styleUrls: ['./session-setup.component.scss']
})
export class SessionSetupComponent implements OnInit {
  newSessionId: string;
  session: FormGroup;

  constructor(private service: SessionService, private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.newSessionId = this.service.generateSessionId();

    this.session = this.fb.group({
      name: [this.userService.name, [Validators.required]], // TODO: Remove test data
      sessionId: ['', [Validators.required]]
    });
  }

  onCreateNewSession() {

    // If the name is valid create new session
    if (this.session.get('name').valid) {
      this.service.setSessionId = this.newSessionId;
      this.userService.name = this.session.get('name').value;
      this.router.navigate(['session', this.service.sessionId]);
    }

    this.session.get('name').markAsTouched();
  }

  onJoinSession() {
    const controls = this.session.controls;

    // If the form is valid join the session
    if ( this.session.valid) {
      this.service.setSessionId = this.session.get('sessionId').value;
      this.userService.name = this.session.get('name').value;
      this.router.navigate(['session', this.service.sessionId]);
    }

    // Loop over all controls, and set them to be touched
    Object.keys(controls).forEach(key => {
      controls[key].markAsTouched();
    });
  }

}
