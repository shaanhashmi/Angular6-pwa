import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthLogoutService } from '../auth-logout.service';
import { SocialUser } from '../../models/user';

import { config } from '../social.config';

declare const FB: any;


@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent implements OnInit {

  readonly PROVIDER_ID = 'FACEBOOK';
  @Input() isFacebook: boolean;
  @Output() fbSignIn: EventEmitter<any> = new EventEmitter<any>();

  auth2: Subscription;
  user: Subscription;

  constructor(
    private _authLogout: AuthLogoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._authLogout.logout
      .subscribe(provider => {
        if (provider === 'FACEBOOK')
          this.logout();
      }, err => console.log('Error', err));
  }

  ngAfterViewInit(): void {
    FB.init(config.facebookConfig);
    FB.getLoginStatus((response) => {
      this.statusChangeCallback(response);
    });
  }


  statusChangeCallback(response: any): any {
    if (response.status === 'connected') {
      console.log('connected');
    } else {
      console.log('loginnn required');
    }
  }

  facebookApi() {
    FB.api('/me?fields=id,email,name,picture', (res) => {
      this.fbSignIn.emit(this.drawUser(res));
    });
  }

  signInWithFB() {
    FB.login((result) => {
      console.log(result)
      if (result.status === 'connected') {
        this.facebookApi();
      }
    }, { scope: 'email, public_profile' });
  }

  logout() {
    FB.logout((result) => {
      console.log(result)
      this.router.navigate(['/']);
    })
  }

  drawUser(profile): SocialUser {
    let user: SocialUser = new SocialUser();
    user.id = profile.id;
    user.name = profile.name;
    user.email = profile.email
    user.image = profile.picture.data.url;
    user.token = profile.access_token;
    user.idToken = profile.id_token;
    user.provider = this.PROVIDER_ID
    return user;
  }
}


