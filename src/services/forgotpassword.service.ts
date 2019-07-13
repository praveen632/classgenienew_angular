import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';


@Injectable()
export class ForgotPasswordService {

  item = {};
 
  constructor(private http: Http) { }

  forgotPassword (data) {

  {       var id    = '';
          var param = '';
       if(data.email.indexOf('@') != '-1' )
         {   
         param = 'email';
         id    = '10';
         } else {
         param = 'username';
         id    = '17';
            }


   

    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/sendmail?token=' +func.global_function.getToken()+'&'+param+'=' + data.email + '&id=' +id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
}