import { AuthResponse } from './../../../interfaces/authResponse';
import { AuthRequest } from './../../../interfaces/authRequest';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  @Input() authRequest: AuthRequest = {} as AuthRequest;
  authResponse: AuthResponse = {} as AuthResponse;
  authenticateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.authenticateForm = this.formBuilder.group({
      username: ['luisa', Validators.required],
      password: ['$teste_123', Validators.required]
    });

  }

  buildAuthRequest(authRequest: AuthRequest): AuthRequest {
    authRequest.username = this.authenticateForm.value.username;
    authRequest.password = this.authenticateForm.value.password;
    return authRequest;
  }

  authenticate() {
    this.authRequest = this.buildAuthRequest(this.authRequest);
    this.authenticationService.authenticate(this.authRequest)
      .subscribe(response => {
        this.authResponse = response;
      });
  }

}
