import { Component } from '@angular/core';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service';
import { NavController } from 'ionic-angular';
import { InviteparentsPage } from '../inviteparents/inviteparents';
import { TeacherClassstoryPostsPage } from '../teacherClassStoryPosts/teacherClassStoryPosts';
import { Dashboard } from '../dashboard/dashboard';



@Component({

  templateUrl: 'teacherClassstory.html',
  providers: [TeacherClassStoryServices]
})
export class TeacherClassstoryPage {

classid:any = '';
studentList: Array<any> = [];
classstoryposts = TeacherClassstoryPostsPage;
inviteparents = InviteparentsPage;
parent_ac_no:any = '';
student_no:any = '';
 dashboard = Dashboard;
 classname:any ='';

  constructor(public navCtrl: NavController , private teacherclassstoryService: TeacherClassStoryServices) {


  }


ngOnInit()
  {

    this.classname = window.localStorage.getItem('classname');
    this.getStudentmessageList();
  	
  } 

openInviteparents(){
	
  //this.navCtrl.setRoot(this.inviteparents);
	this.navCtrl.push(this.inviteparents);
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
  
  this.navCtrl.push(this.classstoryposts,{
      parent_ac_no: parent_ac_no,
      student_no: student_no
      })
}


allClassStory(){
  
 this.navCtrl.push(this.classstoryposts);
}

  back()
  {
  this.navCtrl.push(this.dashboard);
    window.localStorage.removeItem('classid');
    window.localStorage.removeItem('classname');
  }


}
