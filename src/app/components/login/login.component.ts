import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Input() logo: string;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;
    @Output() signWithFb: EventEmitter<any> = new EventEmitter<any>();
    @Output() signWithGoogle: EventEmitter<any> = new EventEmitter<any>();
    title = 'login';
    loginData = {
        email: '',
        password: ''
    };
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onLogin = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        const formData = {
            email: this.email.nativeElement.value,
            password: this.password.nativeElement.value
        };
        this.onLogin.emit(formData);
    }

    facebookLogin() {
        this.signWithFb.emit('Facebook');
    }

    googleLogin() {
        this.signWithGoogle.emit('Google');
    }
}
