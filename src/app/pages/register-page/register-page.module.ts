import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ComponentsModule } from '../../components/components.module';
import { RegisterPageComponent } from './register-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: RegisterPageComponent}]),
    ComponentsModule
  ],
  declarations: [RegisterPageComponent],
  exports:[RegisterPageComponent],
  entryComponents:[RegisterPageComponent]
})
export class RegisterPageModule { }
