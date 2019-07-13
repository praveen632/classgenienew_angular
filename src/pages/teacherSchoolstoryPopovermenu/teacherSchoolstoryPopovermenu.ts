import { Component } from '@angular/core';
import { ViewController, NavController ,AlertController } from 'ionic-angular';
import { TeacherList  } from '../teacherList/teacherList';
import { ChangeSchoolService  }from '../../services/changeSchool.service';

@Component({
  templateUrl: 'teacherSchoolstoryPopovermenu.html',
  providers: [ChangeSchoolService]
})

export class SchoolStoryPopovermenuPage {

teacherList =TeacherList;
userlist:any;
memberno:any;
constructor(public viewCtrl: ViewController,
  public navCtrl: NavController,
  public alertCtrl: AlertController,
  public changeSchoolService: ChangeSchoolService, 
   private altCtrl: AlertController) {

    var data =  window.localStorage.getItem('loggedInUser');
    var teacher_list = JSON.parse(data);
    this.userlist = teacher_list;
    this.memberno = teacher_list[0]['member_no'];
  }


close() {
    this.viewCtrl.dismiss();
  }


changeSchool(){
  let alert = this.altCtrl.create({
	    title: '<img src="/assets/imgs/alert.png" class="alert"/><b>Classgenie</b>',
	    message: 'your Account will deactivated from the School while Press on OK  please Signup first to reuse your ID ',	  	   
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Ok',
	        handler: data => {		                         
	            this.changeSchoolService.changeSchool(this.memberno).then((result) => {         
			        console.log(result);
		    }, (err) => {
		      console.log(err);
		    });         
	      
	        }
	      }
	    ]
	  });
	  alert.present();
}


teacherlist(){
  
  this.navCtrl.push(TeacherList);
}



}

