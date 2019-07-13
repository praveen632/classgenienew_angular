import { Component } from '@angular/core';
import { ViewController, NavController ,AlertController } from 'ionic-angular';
import { EditclassstoryPostPage  } from '../editclassstoryPost/editclassstoryPost';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service'; 
import { TeacherClassstoryPostsPage } from '../teacherClassStoryPosts/teacherClassStoryPosts';
@Component({
  templateUrl: 'teacherClassstoryPopovermenu.html',
   providers: [TeacherClassStoryServices]
})

export class ClassStoryPopovermenuPage {
class_id:any = '';
post_id:any = '';
editclassstorypost = EditclassstoryPostPage;
classstoryposts = TeacherClassstoryPostsPage;
constructor(public viewCtrl: ViewController,public navCtrl: NavController,public alertCtrl: AlertController,private teacherclassstoryService: TeacherClassStoryServices ) {}


close() {
    this.viewCtrl.dismiss();
  }


editPost(){
	
    this.navCtrl.push(this.editclassstorypost);
	
}


deletePost(){


this.post_id = window.localStorage.getItem('postid');
this.class_id = window.localStorage.getItem('classid');

this.post_id = this.post_id.toLocaleString();

let alert = this.alertCtrl.create({
        title: 'Please Confirm!',
        message: 'Are you sure you want to delete this post?',
        buttons: [
          {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
            this.viewCtrl.dismiss();
          }
        },
        {
          text: 'Ok',
           handler: () => {
           this.teacherclassstoryService.deletePost(this.post_id,this.class_id).then((res) => {
             if(res['status'] == "Success"){
              
             }

           })
          }
      }
    ]
  });
  alert.present();
 this.navCtrl.push(this.classstoryposts);
}



}

