import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';


@Injectable()
export class ProfileService {
 constructor(private http: Http) { }
 


 editProfile(data,memberno){
 
        return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/student/update',{
         token:func.global_function.getToken(),         
          member_no:memberno,
          name:data.name
          
         })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

   }
      
    deleteAccount(type,memberno){
        return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/'+type+'/delete',
        {
         token:func.global_function.getToken(),         
          member_no:memberno
         })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

   }

     deleteStudent(memberno){
     return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/student/delete',
        {
         token:func.global_function.getToken(),         
          member_no:memberno
         })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
     }  


   loadteacher_notication(member_no,device_id)
   {
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/save_deviceid/getdata?token='+func.global_function.getToken()+'&member_no='+member_no+'&device_id='+device_id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
     });
   }
   


  notification_save(member_no,status)
  {
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/getnotification',
      {
        token : func.global_function.getToken(),
        status:status,
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