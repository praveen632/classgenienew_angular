import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';
@Injectable()
 export class ChangeSchoolService {
 constructor(private http: Http) { }

 
 changeSchool(member_no)
 {

   return new Promise((resolve, reject) => {
       this.http.post(config.data.api_url+':'+config.data.port+'/schools/change', {
       token:func.global_function.getToken(),    
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


 

}
 
 