import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class StudentSignupService 
{


  constructor(private http: Http) {
  
    }

 saveStudents(data) {  
   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/add?token='+func.global_function.getToken()+'&student_no='+data.student_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   }

   signupSave(data, stu_data){
       return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port + '/student', {
           username:data.username,
           age:data.age,
           password:data.password,
           id: stu_data[0].id,
           student_no: stu_data[0].student_no,
           token:func.global_function.getToken(),
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
   }

   getStudentList(data){
     return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/studentlist?token='+func.global_function.getToken()+'&student_ac_no='+data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   }

   getStudentSearch(data){
     return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/teacher/search?token='+func.global_function.getToken()+'&member_no='+data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   }

   inviteParent(data, student_name, student_no, parent_no){   
      return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/sendmail?token='+func.global_function.getToken()+'&email='+data+'&id=4'+'&student_name='
                     +student_name+'&student_no='+student_no+'&parent_no='+parent_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   }  

   addStudent(data, member_no){
      return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/addstudentcode?token='+func.global_function.getToken()+'&student_ac_no='+member_no+'&student_no='+data.student_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   }

   removeStudent(data){
      return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/disconnect?token='+func.global_function.getToken()+'&student_no='+data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   } 
  }
