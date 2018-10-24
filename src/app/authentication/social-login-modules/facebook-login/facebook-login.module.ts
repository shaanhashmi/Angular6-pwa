import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookLoginComponent } from './facebook-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacebookLoginComponent],
  exports: [FacebookLoginComponent]
})
export class FacebookLoginModule { }
