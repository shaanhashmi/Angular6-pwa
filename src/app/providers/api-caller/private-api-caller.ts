import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generateRequestOptions } from './public-api-caller';

import {
  filter,
  first,
  map,
  switchMap,
  catchError
} from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PrivateApiCallerService {
  accessTokenName: string = 'token';
  apiUrl: string;

  constructor(public http: HttpClient) {
  }

  getAuthHeaders() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(this.accessTokenName)}`
      }
    }
  }

  doPrivateApiRequest(requestFunc) {
    return of(localStorage.getItem(this.accessTokenName)).pipe(
      first(),
      filter(u => !!u),
      map(this.getAuthHeaders.bind(this)),
      switchMap(requestFunc),
      this.processApiResponse()
    )
  }

  get<T>(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    return this.doPrivateApiRequest(options => this.http.get(this.apiUrl + endpoint, { ...generateRequestOptions(reqOpts, params), ...options }));
  }

  post<T>(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.doPrivateApiRequest(options => this.http.post(this.apiUrl + endpoint, body, { ...generateRequestOptions(reqOpts), ...options }));
  }

  put<T>(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.doPrivateApiRequest(options => this.http.put(this.apiUrl + endpoint, body, { ...generateRequestOptions(reqOpts), ...options }));
  }

  delete<T>(endpoint: string, reqOpts?: any): Observable<any> {
    return this.doPrivateApiRequest(options => this.http.delete(this.apiUrl + endpoint, { ...generateRequestOptions(reqOpts), ...options }));
  }

  patch<T>(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.doPrivateApiRequest(options => this.http.patch(this.apiUrl + endpoint, body, { ...generateRequestOptions(reqOpts), ...options }));
  }

  processApiResponse<T>() {
    return (httpResponse$: Observable<any>) => httpResponse$.pipe(
      map(response => response as T),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          localStorage.removeItem(this.accessTokenName);
          location.reload(true);
        }

        return throwError(err);
      })
    );
  }
}
