import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number-page',
  templateUrl: './phone-number-page.component.html',
  styleUrls: ['./phone-number-page.component.css']
})
export class PhoneNumberPageComponent implements OnInit {
  logo: string = '../../../assets/pwa-logo.png'
  constructor() { }

  ngOnInit() {
  }

}
