import { Component, OnInit, Input } from '@angular/core';
import * as libphonenumber from 'google-libphonenumber';

@Component({
  selector: 'phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  @Input() logo: string;
  title: string = 'Phone Number'
  phoneMask: any;
  countryCode = 'IN';
  phoneNumber = '';
  maskPlacholder: any;
  constructor() { }

  ngOnInit() {
    this.phoneMask = this.getPhoneNumberMask(this.countryCode);
    console.log(this.phoneMask)
  }

  getPhoneNumberMask(countryCode) {
    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance()
    const exampleNumber = phoneUtil.getExampleNumber(countryCode);
    console.log(exampleNumber);

    const code = exampleNumber.values_['1'];
    const formattedNumber = phoneUtil.format(exampleNumber, 2);
    this.maskPlacholder = formattedNumber.toString().replace(/\d/g, "0");
    return formattedNumber.toString().replace(/\d/g, "9");
    // return '+\\' + code.toString().split('').join('\\') + ' ' + formattedNumber.toString().replace(/\d/g, "9");
  }

  hasError(ev: any) {
    console.log('Event ', ev);
  }

  getNumber(ev: any) {
    console.log('Event ', ev);
  }

  telInputObject(ev: any) {
    console.log('Event ', ev);
  }

  onCountryChange(ev: any) {
    console.log('onCountryChange Event ', ev);
    this.phoneMask = this.getPhoneNumberMask(ev.iso2.toUpperCase());
    console.log(this.phoneMask)
  }

}
