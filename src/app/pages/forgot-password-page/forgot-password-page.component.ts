import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  logo: string = 'assets/pwa-logo.png';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(ev: any) {
    console.log('Event Emitted ', ev);
  }

}
