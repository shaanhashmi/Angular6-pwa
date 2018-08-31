import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  appConfig: any;

  constructor(public http: HttpClient) { }

  load(): Promise<any> {
    return this.http.get("app.config.json").toPromise().
      then(configs => {
        console.log("configs", configs)
        this.appConfig = configs;
      }).catch(err => {
        console.log(err);
      });
  }
}
