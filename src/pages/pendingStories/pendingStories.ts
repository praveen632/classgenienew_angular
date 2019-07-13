import { Component } from '@angular/core';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service';
import { NavController } from 'ionic-angular';
import { PendingStoriesPostsPage } from '../pendingStoriesPosts/pendingStoriesPosts';


@Component({	
  templateUrl: 'pendingStories.html',
  providers: [TeacherClassStoryServices]
})
export class PendingStories { 

classid:any = '';
studentList: Array<any> = [];
parent_ac_no:any = '';
student_no:any = '';
classname:any ='';
pendingstoriesposts = PendingStoriesPostsPage;

  constructor(public navCtrl: NavController , private teacherclassstoryService: TeacherClassStoryServices) {

  }

ngOnInit()
  {

    this.classname = window.localStorage.getItem('classname');
    this.getStudentmessageList();
  	
  } 

  getStudentmessageList(){
this.classid = window.localStorage.getItem('classid');
    this.teacherclassstoryService.getStudentMessagelist(this.classid).then((res) => {
        this.studentList = res['user_list'] ;
  		console.log(this.studentList); 
  		

  	}, (err) => {
      console.log(err);
    });
}



openClassStory(parent_ac_no,student_no){

  this.navCtrl.push(this.pendingstoriesposts,{
    parent_ac_no: parent_ac_no,
    student_no: student_no
    })
  
}


allClassStory(){
  this.navCtrl.push(this.pendingstoriesposts);
  
 }


}
