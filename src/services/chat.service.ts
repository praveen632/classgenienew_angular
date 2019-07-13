import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';


@Injectable()
export class ChatService {

  constructor(private http: Http) { }

  parentSearch(member_no) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/parent/search?token='+func.global_function.getToken()+'&member_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  studentMsgList(member_no){
      return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/studentmessagelist?token='+func.global_function.getToken()+'&class_id='+member_no+'&source=chat&sort_by=A')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  chatList(teacher_id,parent_id,class_id,page_no){
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/chats?token='+func.global_function.getToken()+'&teacher_id='+teacher_id+'&parent_id='+parent_id+'&class_id='+class_id+'&page_size='+page_no)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }

  updateDB(data){
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/chats',    
        data
     )
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }

  removeChat(id, receiver_ac_no,message){
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/chats/remove_chat',
      {
      token : func.global_function.getToken(),
      id: id,
      receiver_ac_no: receiver_ac_no,
      message: message,              
      })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }

  showEmotionList(){
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/classlist/chaticon?token='+func.global_function.getToken())
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }

  updateChat(sender_ac_no,member_no,class_id){
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/chats/update_chat',
      {
      token : func.global_function.getToken(),
      sender_ac_no: sender_ac_no,
      member_no: member_no,
      class_id: class_id,              
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