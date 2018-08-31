import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PublicApiCallerService {
  constructor(public http: HttpClient) {
  }

  get<T>(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    return this.http.get(endpoint, generateRequestOptions(reqOpts, params)).pipe(this.processApiResponse());
  }

  post<T>(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    console.log(endpoint)
    return this.http.post(endpoint, body, generateRequestOptions(reqOpts)).pipe(this.processApiResponse());
  }

  put<T>(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.put(endpoint, body, generateRequestOptions(reqOpts)).pipe(this.processApiResponse());
  }

  delete<T>(endpoint: string, reqOpts?: any): Observable<any> {
    return this.http.delete(endpoint, generateRequestOptions(reqOpts)).pipe(this.processApiResponse());
  }

  patch<T>(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.http.patch(endpoint, body, generateRequestOptions(reqOpts)).pipe(this.processApiResponse());
  }

  processApiResponse<T>() {
    return (httpResponse$: Observable<any>) => httpResponse$.pipe(
      map(response => response as T),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}

export function generateRequestOptions(reqOpts: any = { responseType: 'json', observe: 'body' }, params?: any) {
  if (params) {
    reqOpts.params = new HttpParams();
    for (let k in params) {
      reqOpts.params = reqOpts.params.set(k, params[k]);
    }
  }

  return reqOpts;
}
