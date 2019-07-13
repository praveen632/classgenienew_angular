import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'; 
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class StudentstoryService
{
  constructor(private http: Http) { }


  getclassid(member_no)
  {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/classlist?token='+func.global_function.getToken()+'&member_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  }

  getlist(member_no)
  {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/student/studentlist?token='+func.global_function.getToken()+'&student_ac_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  }

  getStudent_ClassStory(classid,pagecount,member_no)
  {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+"&source=ac"+ "&class_id="+classid+"&page_number="+pagecount+"&member_no="+member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  }

  getStudent_pendingStory(student_no,classid,pagecount,member_no)
  {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/studentstory/postlist?token='+func.global_function.getToken()+ "&class_id="+classid+"&page_number="+pagecount+"&student_no=" + student_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

  }
  addStudentstoryPost(classid,data,studentcode,student_name,student_no)
  {
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/studentstory/msgpost', {token:func.global_function.getToken(),
        class_id:classid,
        message: data.message,
        student_no:studentcode,
        username:student_name,
        member_no:student_no,
        sender_ac_no:student_no,
        
      })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }
 
  deletestudentstoryPost()
  {
   
  }


  getpost(storyId,stored_memberNo){

    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/studentstory/commentdetail?token='+func.global_function.getToken()+"&story_id="+storyId+"&teacher_ac_no="+stored_memberNo)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }
  


  updatestudentstoryPost(story_id,item,student_no)
  {
    
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/studentstory/post_msgupdate', {token:func.global_function.getToken(),id:story_id,message:item,sender_ac_no:student_no})
       .map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });
 });
     
  }
  

  deleteStudentstoryPost(storyId)
{
  console.log(storyId);
   return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/studentstory/postdelete', {token:func.global_function.getToken(), id:storyId})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

}


getSchooldata(memberNo)
{ 
return new Promise((resolve, reject) => {
    this.http.get(config.data.api_url+':'+config.data.port+'/studentstory/schools/list?token='+func.global_function.getToken()+"&member_no="+memberNo)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
});
}

getallSchoolstory(school_id,pagecount)
{
  return new Promise((resolve, reject) => {
    this.http.get(config.data.api_url+':'+config.data.port+'/schoolstory/allpostschoolstory?token='+func.global_function.getToken()+"&school_id=" + school_id + "&page_number=" + pagecount)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
});


}

Likelist(classId,storyId)
{
  return new Promise((resolve, reject) => {
    this.http.get(config.data.api_url+':'+config.data.port+'/classstories/likesList?token='+func.global_function.getToken()+"&class_id="+classId+"&story_id="+storyId)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
});
}

loadComment(storyId,memberNo)
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

saveComment(story_id,member_no,class_id,data,student_no)
{

  return new Promise((resolve, reject) => {
    this.http.post(config.data.api_url+':'+config.data.port+'/classstories/comment', {token:func.global_function.getToken(), story_id:story_id,
      member_no:member_no,
      sender_ac_no:member_no,
      class_id:class_id,//stored_classId,
      comment:data.message,
      student_no:student_no})
     .map(res => res.json())
     .subscribe(res => {
       resolve(res);
     }, (err) => {
       reject(err);
     });
});

}

getStudent_ClassStory_studentno(memberNo,stud_parent_no,stud_no,pagecount)
{
  return new Promise((resolve, reject) => {
    this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+"&source=ac"+"&member_no="+memberNo+
    '&parent_ac_no='+stud_parent_no+'&student_no='+stud_no+ "&page_number="+pagecount)
      .map(res => res.json())
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
});

}
}
