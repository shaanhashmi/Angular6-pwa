import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  logo: string = 'assets/pwa-logo.png';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(ev: any) {
    console.log('Emitted Event ', ev);
  }

}
