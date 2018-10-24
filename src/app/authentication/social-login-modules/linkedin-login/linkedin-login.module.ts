import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedinLoginComponent } from './linkedin-login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LinkedinLoginComponent],
  exports: [LinkedinLoginComponent]
})
export class LinkedinLoginModule { }
