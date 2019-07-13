import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class ParentsignupService
{
  constructor(private http: Http) { }

 saveParentsignup(data) {
   return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/parent', {token:func.global_function.getToken(),name:data.username,phone:data.number,email:data.email,password:data.password})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  checkParentcodecheck(data,member_no){
 

  return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/parentcode', {token:func.global_function.getToken(),parent_no:data.parent_no,parent_ac_no:member_no})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  }

  }
