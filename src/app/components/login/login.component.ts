import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  title: string = 'login';
  loginData = {
    email: '',
    password: ''
  };
  @Output() onLogin = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const formData = {
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value
    }
    this.onLogin.emit(formData);
  }

}
