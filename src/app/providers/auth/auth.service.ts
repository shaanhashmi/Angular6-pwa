import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { PublicApiCallerService } from '../api-caller/public-api-caller';
import { ApiUrl } from '../api.urls';
import { defaultErrorMsg } from "../../models/app-consts";
import { AppConfigService } from '../app-config.service';
import { environment } from '../../../environments/environment';

export class User {
  name: string;
  token?: string;

  constructor(name: string, token: string) {
    this.name = name;
    this.token = token;
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string;
  redirectUrl: string;
  runningAction: boolean;
  private _authStateChangeSubject: Subject<User> = new Subject<User>();

  url: string = 'http://localhost:8080';
  constructor(public apiCaller: PublicApiCallerService, private appConfigService: AppConfigService) {
    // this.apiUrl = appConfigService.appConfig.apiUrl;
  }

  get token() {
    return localStorage.getItem("access_token")
  }

  get currentUser(): any {
    let user = localStorage.getItem('logged_user');
    if (user)
      return JSON.parse(user);
    else
      return null;
  }

  set currentUser(data: any) {
    localStorage.setItem('logged_user', JSON.stringify(data));
  }

  authState(): Observable<User> {
    return this._authStateChangeSubject.asObservable();
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    this.clearTokens();
    console.log('aadfsdfsdf')
    if (credentials.email === null || credentials.password === null) {
      return throwError({ message: "Please insert credentials" });
    } else {
      console.log(`${this.url}/api/${ApiUrl.auth.login}`);
      return this.apiCaller.post(`${this.url}/api/${ApiUrl.auth.login}`, credentials).pipe(
        map((res: any) => {
          if (res && res.token) {
            this.authenticateUser(res)
          }
          return res;
        }))
    }
  }

  register(credentials: any): Observable<any> {
    this.clearTokens();

    if (credentials.email === null || credentials.password === null) {
      return throwError({ message: "Please insert credentials" });
    } else {
      return this.apiCaller.post(this.apiUrl + ApiUrl.auth.register, credentials).pipe(map(res => {
        if (res && res.token) {
          this.authenticateUser(res)
        }
        return res;
      }));
    }
  }

  logout(): Observable<boolean> {
    return Observable.create(observer => {
      this.clearTokens();
      this._authStateChangeSubject.next(this.currentUser);
      observer.next(true);
      observer.complete();
    });
  }

  forgotPassword(credentials): Observable<any> {
    if (!credentials || !credentials.email) {
      return throwError({ message: "Please enter the Email" });
    } else {
      return this.apiCaller.post(this.apiUrl + ApiUrl.auth.forgot, credentials)
    }
  }

  resetPassword(credentials): Observable<any> {
    if (!credentials || !credentials.password || !credentials.resetToken) {
      return throwError({ message: "Please enter new password" });
    } else {
      return this.apiCaller.post(this.apiUrl + ApiUrl.auth.resetPassword, credentials)
    }
  }

  changePassword(credentials): Observable<any> {
    if (!credentials || !credentials.password || !credentials.oldPassword) {
      return throwError({ message: "Please fill form" });
    } else {
      return this.apiCaller.post(this.apiUrl + ApiUrl.auth.resetPassword, credentials)
    }
  }

  verify(data): Observable<any> {
    return this.apiCaller.post(this.apiUrl + ApiUrl.auth.userVerfication, data).pipe(map(res => {
      if (res && res.status == 200) {
      }
      return res;
    }));
  }

  emailVerification(token): Observable<any> {
    return this.apiCaller.post(this.apiUrl + ApiUrl.auth.emailVerfication, { token: token }).pipe(map(res => {
      if (res && res.status == 200) {
        this.currentUser = res.result;
      }
      return res;
    }));
  }

  codeVerification(data): Observable<any> {
    return this.apiCaller.post(this.apiUrl + ApiUrl.auth.codeVerfication, data).pipe(map(res => {
      if (res && res.status == 200) {
        this.currentUser = res.result;
      }
      return res;
    }));
  }

  private authenticateUser(data) {
    localStorage.setItem("access_token", data.token);
    this.currentUser = data.result;
    this._authStateChangeSubject.next(this.currentUser);
  }

  private clearTokens() {
    localStorage.removeItem('logged_user');
    localStorage.removeItem('access_token');
  }
}
