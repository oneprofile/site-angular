import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // no DI ny constructor : there is an issue with it. Else, or test ko or ng serve ko.
  private fb = new FormBuilder();

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
  }

  signin() {
    console.warn(this.loginForm.value);
  }

  defaultEmail() {
    this.loginForm.patchValue({
      email: 'newlight77@gmail.com',
      password: 'password'
    });
  }
}
