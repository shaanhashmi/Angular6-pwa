import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberPageComponent } from './phone-number-page.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PhoneNumberPageComponent }]),
    ComponentsModule
  ],
  declarations: [PhoneNumberPageComponent],
  exports: [PhoneNumberPageComponent],
  entryComponents: [PhoneNumberPageComponent]
})
export class PhoneNumberPageModule { }
