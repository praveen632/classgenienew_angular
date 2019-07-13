import { Component } from '@angular/core';
import { NavController,PopoverController,ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';

@Component({
 templateUrl:'attendancePopoverMenu.html',
 providers: [TeacherClassroomService]
})
export class AttendancePopoverMenu {

  item:any = {};
  loading:any ;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private teacherClassroomService: TeacherClassroomService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.loading = loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  ngOnInit()
  {
    this.item.class_id = this.navParams.get("class_id");
    this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
  
  }
  close(returnData)
  {
    this.viewCtrl.dismiss(returnData);
  } 
  
  getAttendanceMail(datetoken, label)
  {
    this.viewCtrl.dismiss({});
    this.loading.present();
    let dataParam = {
      datetoken:	datetoken,
      class_id:	this.item.class_id,
      teacher_name:this.item.loggedInUser[0].name,
      member_no:this.item.loggedInUser[0].member_no,
      email:this.item.loggedInUser[0].email,
      daterange:'',
      token:func.global_function.getToken()
    }
   
   
      this.teacherClassroomService.getAttendanceMail(dataParam).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {
        let message = 'Attendence record for '+label+' has been successfully mailed on your id '+this.item.loggedInUser[0].email;
        let alert = this.alertCtrl.create({
          message: message,
          buttons: [{
            text: 'ok',
            handler: () => {
              alert.dismiss();
              return false;
            }
          }]

        }); 
        alert.present();
      }

    }, (err) => {
    console.log(err);
    }); 
  }
  
 
}
