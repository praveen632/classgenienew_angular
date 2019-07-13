import { Component } from '@angular/core';
import { ViewController, NavController ,AlertController } from 'ionic-angular';
import { SchoolStoryService } from '../../services/schoolStory.service';
import { EditSchoolstoryPostPage  } from '../editschoolstoryPost/editschoolstoryPost';
import { SchoolStory  } from '../schoolStory/schoolStory'
@Component({
  templateUrl: 'teacherSchoolstoryupdatePopover.html',
  providers: [SchoolStoryService]
   
})

export class SchoolStoryupdatePopoverPage {
post_id:any = '';
member_no:any = '';
loggedInUser:any = {};
constructor(public viewCtrl: ViewController,private schoolStoryService: SchoolStoryService,public navCtrl: NavController,public alertCtrl: AlertController) {}


close() {
    this.viewCtrl.dismiss();
  }


editSchoolstory(){
	this.navCtrl.push(EditSchoolstoryPostPage);
}


deleteSchoolstory(){
  
this.post_id = window.localStorage.getItem('postid');
this.post_id = this.post_id.toLocaleString();
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];
this.member_no = this.loggedInUser.member_no;



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
           this.schoolStoryService.deleteSchoolstoryPost(this.post_id,this.member_no).then((res) => {
             if(res['status'] == "Success"){
              this.navCtrl.push(SchoolStory);
             }

           })
          }
      }
    ]
  });
  alert.present();
 
}

}

