import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'social-auth-login',
  templateUrl: './social-auth-login.component.html',
  styleUrls: ['./social-auth-login.component.scss']
})
export class SocialAuthLoginComponent implements OnInit {

  @Input() isGoogle: boolean;
  @Input() isFacebook: boolean;
  @Input() isLinkedin: boolean;

  @Output() fbSignIn: EventEmitter<any> = new EventEmitter<any>();
  @Output() googleSignIn: EventEmitter<any> = new EventEmitter<any>();
  @Output() linkedinSignIn: EventEmitter<any> = new EventEmitter<any>();



  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(response => this.googleSignIn.emit(response))
      .catch(err => console.log(err));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(response => this.fbSignIn.emit(response))
      .catch(err => console.log(err));
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID)
      .then(response => this.linkedinSignIn.emit(response))
      .catch(err => console.log(err));
  }

  signOut(): void {
    this.authService.signOut();
  }

}
