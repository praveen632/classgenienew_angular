import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }


  doLogin(data) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/login?token='+func.global_function.getToken()+'&email=' +data.username + '&password=' + data.password)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
