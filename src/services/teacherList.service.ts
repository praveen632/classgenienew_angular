import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class TeacherListService {

  constructor(private http: Http) { } 

  getTeacherlist(school_id, pageCount) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/schools/teacherlistlimit?token='+func.global_function.getToken()+'&school_id='+school_id+'&page_number='+pageCount)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  approoveTeacher(param) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/schools/teacherapprove',param)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  removeTeacher(param) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/teacher/delete',param)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

