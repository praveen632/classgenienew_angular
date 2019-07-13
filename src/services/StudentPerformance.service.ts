import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class StudentPerformanceServices {

  constructor(private http: Http) { }   

  getStudentList(member_no) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/studentlist?token='+func.global_function.getToken()+'&student_ac_no='+member_no)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  classreportlist(dataParam){
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/report/student/classreportlist?token='+func.global_function.getToken()+'&student_ac_no='+dataParam.member_no+'&datetoken='+dataParam.datetoken+'&startdate='+dataParam.startdate+'&enddate='+dataParam.enddate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentPerformReport(dataParam){
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/report/student?token='+func.global_function.getToken()+'&class_id='+dataParam.class_id+"&student_info_no="+dataParam.student_no+'&datetoken='+dataParam.datetoken+'&startdate='+dataParam.startdate+'&enddate='+dataParam.enddate)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  }
}