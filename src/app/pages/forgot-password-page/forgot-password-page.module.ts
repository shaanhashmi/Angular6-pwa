import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([{path:'', component: ForgotPasswordPageComponent}]),
    ComponentsModule
  ],
  declarations: [ForgotPasswordPageComponent],  
  exports:[ForgotPasswordPageComponent],
  entryComponents:[ForgotPasswordPageComponent]
})
export class ForgotPasswordPageModule { }
