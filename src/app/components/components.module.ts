import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2TelInputModule } from 'ng2-tel-input';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { InputMaskModule } from 'primeng/inputmask';
import { CameraComponent } from './camera/camera.component';
import { FacebookLoginModule } from '../authentication/social-login-modules/facebook-login/facebook-login.module';
import { GoogleLoginModule } from '../authentication/social-login-modules/google-login/google-login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Ng2TelInputModule,
    InputMaskModule,
    FacebookLoginModule,
    GoogleLoginModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, PhoneNumberComponent, CameraComponent],
  exports: [LoginComponent, RegisterComponent, ForgotPasswordComponent, PhoneNumberComponent, CameraComponent]
})
export class ComponentsModule { }
