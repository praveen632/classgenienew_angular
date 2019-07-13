import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class SchoolleaderService
{
  constructor(private http: Http) { }

 saveSchoolleader(data) {
   return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/teacher', {token:func.global_function.getToken(),name:data.username,phone:data.number,email:data.email,usertype:data.selectGrade,password:data.password})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  }
