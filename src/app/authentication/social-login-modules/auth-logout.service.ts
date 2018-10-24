import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLogoutService {

  logout: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor() { }

  logoutByProvider(provider) {
    this.logout.next(provider)
  }
}
