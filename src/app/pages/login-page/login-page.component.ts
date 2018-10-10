import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth/auth.service';

import { defaultErrorMsg } from '../../models/app-consts';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loader: boolean;
    logo: string;
    constructor(private authService: AuthService, private router: Router) {
        this.logo = 'assets/pwa-logo.png';
    }

    ngOnInit() {
    }

    onSubmit(formData) {
        console.log('Emitted Event ', formData);
        this.loader = true;

        this.authService.login(formData).subscribe((result) => {
            this.loader = false;
            console.log(result);
            // this.router.navigate(['/']);
        }, err => {
            console.log({ message: err.message || defaultErrorMsg });
            this.loader = false;
        });
    }

    signWithFb(e) {
        console.log(e);
    }

    signWithGoogle(e) {
        console.log(e);
    }
}
