import { Component, OnInit, Output, EventEmitter, Input, NgZone } from '@angular/core';
import { config } from '../social.config';

declare let IN: any;
export class LinkedInResponse {
  emailAddress: string;
  firstName: string;
  id: string;
  lastName: string;
  pictureUrl: string;
}

export class SocialUser {
  provider: string;
  id: string;
  email: string;
  name: string;
  image: string;
  token?: string;
  idToken?: string;
}

@Component({
  selector: 'linkedin-login',
  templateUrl: './linkedin-login.component.html',
  styleUrls: ['./linkedin-login.component.scss']
})
export class LinkedinLoginComponent implements OnInit {

  @Input() isLinkedin: boolean;
  @Output() linkedinSignIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private zone: NgZone) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.initialize(config.linkedinConfig);
  }

  initialize(config) {
    IN.init({
      authorize: config.authorize,
      onLoad: this.onLinkedInLoad()
    })

    IN.Event.on(IN, 'auth', () => {
      if (IN.User.isAuthorized()) {
        IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)')
          .result((res: LinkedInResponse) => {
            this.zone.run(() => {
              this.linkedinSignIn.emit(this.drawUser(res))
            })
          }, err => console.log(err));
      }
    });
  }

  signInWithLinkedin() {
    IN.User.authorize(() => {
      IN.API.Raw('/people/~:(id,first-name,last-name,email-address,picture-url)')
        .result((res: LinkedInResponse) => {
          this.zone.run(() => {
            this.linkedinSignIn.emit(this.drawUser(res))
          })
        }, err => console.log(err));
    });
  }

  drawUser(response: LinkedInResponse): SocialUser {
    let user: SocialUser = new SocialUser();
    user.id = response.id;
    user.name = response.firstName + ' ' + response.lastName;
    user.email = response.emailAddress;
    user.image = response.pictureUrl;
    user.token = IN.ENV.auth.oauth_token;
    return user;
  }

  onLinkedInLoad() {
    IN.Event.on(IN, 'systemReady', () => {
      IN.User.refresh();
    });
  }


}
