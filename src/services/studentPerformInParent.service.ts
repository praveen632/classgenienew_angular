import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class StudentPerformInParentService {

  constructor(private http: Http) { } 

 

  getStudentClassList(parent_ac_no,name) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/assignment/classlist?token='+func.global_function.getToken()+'&parent_ac_no='+parent_ac_no+'&name='+name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentPerformReport(dataApiUrl) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+dataApiUrl)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentAttendance(student_no,date1,date2) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/attendance_report?token='+func.global_function.getToken()+'&student_no='+student_no+'&date1='+date1+'&date2='+date2)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
}

