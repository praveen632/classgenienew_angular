import { Component } from '@angular/core';
import { ViewController, NavController ,AlertController } from 'ionic-angular';
import { StudentstoryService } from '../../services/studentStory.service';
import { EditStudentstoryPostPage  } from '../editstudentstoryPost/editstudentstoryPost';
import { StudentpendingStory } from '../studentpendingStory/studentpendingStory';

@Component({
  templateUrl: 'studentstoryupdatePopover.html',
  providers: [StudentstoryService]
   
})

export class StudentStoryupdatePopoverPage {
post_id:any = '';
member_no:any = '';
loggedInUser:any = {};
constructor(public viewCtrl: ViewController,private studentstoryService: StudentstoryService,public navCtrl: NavController,public alertCtrl: AlertController) {}


close() {
    this.viewCtrl.dismiss();
  }


editStudentstory(){
	this.navCtrl.push(EditStudentstoryPostPage);
}


deleteStudentstory(){
  
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
     this.studentstoryService.deleteStudentstoryPost(this.post_id).then((res) => {
       if(res['status'] == "Success"){
        console.log(res);
       }

     })
    }
}
]
});
alert.present();




}

}

