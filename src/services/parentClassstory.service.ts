import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class ParentClassstoryService
{
  constructor(private http: Http) { }

 getparentStories(data) {
   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/parentstories?token='+func.global_function.getToken()+'&parent_ac_no=' +data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  getAllpostClassstories(data)

  {
   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+'&parent_ac_no=' +data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  
  loaddata(classid,pagecount,parent_ac_no,nameofsearch)

  {
   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+'&source=ac'+'&class_id='+classid+"&page_number="+pagecount+"&member_no="+parent_ac_no+"&name="+nameofsearch)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  parent_kidlist(parent_ac_no)
  {
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/parent/kidslist?token='+func.global_function.getToken()+'&parent_ac_no='+parent_ac_no)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });

  }

  load_student_story(parent_ac_no,stud_no,nameofsearch,pagecount)
  {
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+'&member_no='+parent_ac_no+'&parent_ac_no='+parent_ac_no+'&student_no='+stud_no+"&name="+nameofsearch+"&page_number="+pagecount)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });

  }

  loadcomment(storyId,memberNo)
  {
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/classstories/commentDetail?token='+func.global_function.getToken()+"&story_id="+storyId+"&teacher_ac_no="+memberNo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }

  saveComment(story_id,member_no,class_id,data)
  {
   return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/classstories/comment', {token:func.global_function.getToken(),story_id:story_id,member_no:member_no,class_id:class_id,comment:data.comment,sender_ac_no:member_no,student_no:""})
       .map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });
 });

  }

  Likelist(storyId)
  {
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/classstories/likesList?token='+func.global_function.getToken()+"&story_id="+storyId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });

   }

   getStudentList(member_no){
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/parent/kidslist?token='+func.global_function.getToken()+"&parent_ac_no="+member_no)
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
           this.http.post(config.data.api_url+':'+config.data.port+'/classstories/likes', {
           token:func.global_function.getToken(),    
              story_id:storyId,
              class_id: classId,
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
   


   removeStudent(student_no){
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/parent/kidremove',
      {
      token : func.global_function.getToken(),
      student_no: student_no                    
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
