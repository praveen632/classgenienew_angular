import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class ChangePasswordService {
 constructor(private http: Http) {

  }


  updatepassword(item,member_no)
  {

    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/changepassword/update', {
        token:func.global_function.getToken(),    
        password: item.currpass,
        newpassword: item.newpass,
        confirmpassword: item.confirmpass,
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
 
 