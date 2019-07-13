import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class TeacherClassStoryServices {

  constructor(private http: Http) { }


  getStudentMessagelist(classid) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/studentmessagelist?token='+func.global_function.getToken()+'&class_id='+classid+'&sort_by=A')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  getclassStudentlist(classid)
  {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classinfo/studentlist?token='+func.global_function.getToken()+'&class_id='+classid)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  inviteTeacherParent(data, student_name, student_no, parent_no){   
      return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/sendmail?token='+func.global_function.getToken()+'&email='+data+'&id=3'+'&student_name='
                     +student_name+'&student_no='+student_no+'&parent_no='+parent_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });
   }  



pdfgenerate(member_no,classId){
  
   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/pdfgenerate?token='+func.global_function.getToken()+'&member_no='+member_no+'&class_id='+classId)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });

}



inviteAllParents(member_no,classId){
     return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/sendmail?token='+func.global_function.getToken()+"&member_no="+member_no+"&id=1"+"&class_id="
                    +classId)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
          }, (err) => {
            reject(err);
          });
    });

}



 getAllclassPosts(classid,member_no,pagecount)
  {
    
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+"&source=ac&class_id="+classid+"&member_no="+member_no+"&page_number="+pagecount+"&name=")
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }



getAllclasssearchPosts(classid,member_no,pagecount,val)
{
    
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+"&source=ac&class_id="+classid+"&member_no="+member_no+"&page_number="+pagecount+"&name="+val)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


   getAllclassPosts_student(classid,parent_ac_no,member_no,student_no)
  {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/allPost?token='+func.global_function.getToken()+"&class_id="+classid+"&parent_ac_no="+parent_ac_no+"&member_no="+member_no+"&student_no="+student_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }



  addClassstoryPost(memberno,classid,username,data){
   return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/classstories', {token:func.global_function.getToken(),
                  class_id:classid,
                  message: data.message,
                  teacher_ac_no:memberno,
                  teacher_name:username,
                  sender_ac_no:memberno})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });


  }


  addClassstory_studentPost(memberno,classid,username,data,parentNo,studentNo){
    return new Promise((resolve, reject) => {
      this.http.post(config.data.api_url+':'+config.data.port+'/classstories', {token:func.global_function.getToken(),
        class_id:classid,
        message: data.message,
        teacher_ac_no:memberno,
         parent_ac_no:parentNo,
         student_no:studentNo,
         teacher_name:username,
         sender_ac_no:memberno
      })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });

   }


  loadComment(story_id,member_no){

   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/commentDetail?token='+func.global_function.getToken()+"&story_id="+story_id+"&teacher_ac_no="+member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


 saveComment(story_id,member_no,class_id,data){
   return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/classstories/comment', {token:func.global_function.getToken(),story_id:story_id,member_no:member_no,class_id:class_id,comment:data.comment,sender_ac_no:member_no,student_no:''})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


deleteComment(id){
    return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/classstories/comment/delete', {token:func.global_function.getToken(),id:id})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
 
}

loadPost(storyId,stored_memberNo){


   return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classstories/commentDetail?token='+func.global_function.getToken()+"&story_id="+storyId+"&teacher_ac_no="+stored_memberNo+"&sender_ac_no="+stored_memberNo)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  

}

updateClassstoryPost(storyId,textmessage,memberNo)
{
  
    return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/classstories/update', {token:func.global_function.getToken(),id:storyId,
      message: textmessage,
      sender_ac_no: memberNo})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

}

deletePost(storyId,stored_classId)
{
  console.log(storyId);
   return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/classstories/delete', {token:func.global_function.getToken(), id:storyId,class_id:stored_classId})
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

Likelist(classId,storyId){
  
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


getAllclassPendingPosts(classid,pagecount)
{
  
  return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/studentstory/class/postlist?token='+func.global_function.getToken()+"&source=ac&class_id="+classid+"&page_number="+pagecount)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}



getAllclassPendingPosts_Student(classid,student_no,pagecount)
{
  
  return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/studentstory/postlist?token='+func.global_function.getToken()+"&source=ac&class_id="+classid+"&page_number="+pagecount+"&student_no="+student_no)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}
   

approvePost(story_id,memberNo){
  return new Promise((resolve, reject) => {
         this.http.post(config.data.api_url+':'+config.data.port+'/studentstory/approveteacher', {
         token:func.global_function.getToken(),    
         id: story_id,
         status:"1",
         sender_ac_no: memberNo
           })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });

   }


   disapprovePost(story_id,memberNo){
    return new Promise((resolve, reject) => {
           this.http.post(config.data.api_url+':'+config.data.port+'/studentstory/approveteacher', {
           token:func.global_function.getToken(),    
           id: story_id,
           status:"-1",
           sender_ac_no: memberNo
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
