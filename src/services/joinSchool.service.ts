import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import { Base64 } from 'js-base64';
import * as func from '../app/function';

@Injectable()
export class JoinSchoolService{
	
join = {};
constructor(private http: Http) { }
 
listSchool(member_no){	
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/schools/list?token='+func.global_function.getToken()+'&member_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
}

teacherList(school_id){
  return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/schools/teacherlist?token='+func.global_function.getToken()+'&school_id='+school_id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
}
 
 joinyourSchool(school_id, member_no, type){
   return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/schools/joinschools',
        {
        token : func.global_function.getToken(),
        school_id: school_id.toString(),
        member_no: member_no,
        type: type               
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
 }

 joinSchoolMailSend(Toemail, member_no){
    var email = Base64.encode(Toemail);
      return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/sendmail?id='+5,
        {
        token : func.global_function.getToken(),
        emaildata: email,
        member_no: member_no                     
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
 }


 filterSchoolItems(data){
   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/schools/search?token='+func.global_function.getToken()+'&school_name='+data)
         .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
 }

}

