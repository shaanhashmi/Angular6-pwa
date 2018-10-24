import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterLoginComponent } from './twitter-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwitterLoginComponent],
  exports: [TwitterLoginComponent],

})
export class TwitterLoginModule { }
