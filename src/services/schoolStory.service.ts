import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import { FileTransfer } from '@ionic-native/file-transfer';
import * as func from '../app/function';

@Injectable()
export class SchoolStoryService {

  constructor(private http: Http, private fileTransfer: FileTransfer) { } 

getSchoolstory(school_id,pagecount) {
    
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/schoolstory/allpostschoolstory?token='+func.global_function.getToken()+ "&school_id=" + school_id + "&page_number=" + pagecount)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


addschoolstoryPost(item,member_no,school_id){

  return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/schoolstory/savemsgpost', {token:func.global_function.getToken(),
      school_id:school_id,
      message: item.message,
      teacher_ac_no:member_no,
      sender_ac_no:member_no})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
}




getSchoolstory_id(story_id,member_no) {
    
    return new Promise((resolve, reject) => { 
        this.http.get(config.data.api_url+':'+config.data.port+'/schoolstory/allcommentDetail?token='+func.global_function.getToken()+ "&story_id=" + story_id + "&teacher_ac_no=" + member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


updateSchoolstoryPost(story_id,item,member_no)
{
  
   return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/schoolstory/update', {token:func.global_function.getToken(),id:story_id,message:item,sender_ac_no:member_no})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
}


deleteSchoolstoryPost(storyId,member_no)
{
  console.log(storyId);
   return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/schoolstory/delete', {token:func.global_function.getToken(), id:storyId,teacher_ac_no:member_no})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

}

likePost(storyId,classId,liked_status,memberNo){
  return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/schoolstory/like', {
         token:func.global_function.getToken(),    
            story_id:storyId,
            school_id: classId,
            member_no:memberNo,
            status: liked_status,
            sender_ac_no:memberNo
           })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

   }
 

loadComment(story_id,member_no)
{
console.log(story_id,member_no);
  return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/schoolstory/allcommentDetail?token='+func.global_function.getToken()+ "&story_id=" + story_id + "&teacher_ac_no=" + member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
}


saveComment(story_id,member_no,data,school_id)
{
    return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/schoolstory/comment', {token:func.global_function.getToken(),story_id:story_id,member_no:member_no,school_id:school_id,comment:data.message,sender_ac_no:member_no})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

}

Likelist(school_id,story_id)
{

  return new Promise((resolve, reject) => {
    this.http.get(config.data.api_url+':'+config.data.port+'/schoolstory/likesList?token='+func.global_function.getToken()+ "&story_id=" + story_id + "&school_id=" + school_id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

}

}

