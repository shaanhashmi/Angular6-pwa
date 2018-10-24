import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'twitter-login',
  templateUrl: './twitter-login.component.html',
  styleUrls: ['./twitter-login.component.scss']
})
export class TwitterLoginComponent implements OnInit, AfterViewInit {

  @Input() isTwitter: boolean;
  @Output() linkedinSignIn: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
    const url = 'https://platform.twitter.com/widgets.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // render tweet button
    window['twttr'] && window['twttr'].widgets.load();
  }

  signInWithTwitter() {

  }

}
