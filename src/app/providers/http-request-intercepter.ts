import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    console.log(req)
    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err && (err.status === 0 || err.status === 504 || err.status === 502 || err.status === 503 || err.status === 520)) {
          if (err.error) {
            err.error.message = 'Unable to connect to the network';
          } else {
            err = { error: { message: 'Unable to connect to the network' } }
          }
        }
        return throwError(err.error);
      })
    );
  }
}
