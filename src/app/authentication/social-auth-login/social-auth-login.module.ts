import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthLoginComponent } from './social-auth-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialAuthLoginComponent],
  exports: [SocialAuthLoginComponent],
})
export class SocialAuthLoginModule { }
