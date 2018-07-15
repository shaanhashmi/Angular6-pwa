import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { LoginPageComponent } from './login-page.component';
import { ComponentsModule } from '../../components/components.module';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([{path:'', component: LoginPageComponent}]),
    ComponentsModule
  ],
  declarations: [LoginPageComponent],
  exports:[LoginPageComponent],
  entryComponents:[LoginPageComponent]
})
export class LoginPageModule { }
