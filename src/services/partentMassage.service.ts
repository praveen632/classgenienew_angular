import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class ParentMassageServices {

  constructor(private http: Http) { } 

  getTeacherMessgList(datas) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/teacherchatlist?token='+func.global_function.getToken()+'&parent_ac_no='+datas+'&sort_by=A')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  teacherChat_notification(data, member_no){
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/teacher/chat_notification?token='+func.global_function.getToken()+'&notification_sender_ac_no='+data+'&receiver_ac_no='+member_no)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}