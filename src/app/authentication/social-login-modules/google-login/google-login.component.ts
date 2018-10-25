import { Component, OnInit, EventEmitter, Input, Output, NgZone } from '@angular/core';
import { SocialUser } from '../../models';
import { AuthLogoutService } from '../auth-logout.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { config } from '../social.config';

declare const gapi: any;

@Component({
  selector: 'google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  readonly PROVIDER_ID = 'GOOGLE';
  @Input() isGoogle: boolean;
  @Output() googleSignIn: EventEmitter<any> = new EventEmitter<any>();
  auth2: Subscription;
  user: Subscription;

  constructor(
    private zone: NgZone,
    private router: Router,
    private _authLogout: AuthLogoutService,
  ) { }

  ngOnInit() {
    this._authLogout.logout
      .subscribe(provider => {
        if (provider === 'GOOGLE')
          this.logout();
      }, err => console.log('Error', err));
  }

  ngAfterViewInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init(config.googleConfig).then((success) => {
        if (success.isSignedIn.get()) {
          // let profile = success.currentUser.get().getBasicProfile();
          // let authResponseObj = success.currentUser.get().getAuthResponse(true);
          // this.googleSignIn.emit(this.drawUser(profile, authResponseObj));
        }
      }).catch((error) => {
        console.log(error)
      });
    });


  }

  signInWithGoogle() {

    let googleAuth = gapi.auth2.getAuthInstance();
    googleAuth.signIn().then(googleUser => {
      let profile = googleUser.getBasicProfile();
      let authResponseObj = googleUser.getAuthResponse();
      this.zone.run(() => {
        this.googleSignIn.emit(this.drawUser(profile, authResponseObj));
      })
    }).catch(error => {
      console.log(error)
    })
  }



  logout() {
    gapi.auth2
      .getAuthInstance()
      .signOut()
      .then((err: any) => {
        if (err) {
          console.log(err);
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  drawUser(profile, authResponseObj): SocialUser {
    let user: SocialUser = new SocialUser();
    user.id = profile.getId();
    user.name = profile.getName();
    user.email = profile.getEmail();
    user.image = profile.getImageUrl();
    user.token = authResponseObj.access_token;
    user.idToken = authResponseObj.id_token;
    user.provider = this.PROVIDER_ID
    return user;
  }
}
