import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: '../app/pages/login-page/login-page.module#LoginPageModule' },
    { path: 'register', loadChildren: '../app/pages/register-page/register-page.module#RegisterPageModule' },
    { path: 'forgot-password', loadChildren: '../app/pages/forgot-password-page/forgot-password-page.module#ForgotPasswordPageModule' },
    { path: 'phone-number-format', loadChildren: '../app/pages/phone-number-page/phone-number-page.module#PhoneNumberPageModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }