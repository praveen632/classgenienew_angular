import { Component } from '@angular/core';
import { NavController,PopoverController,ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import { DatePipe } from '@angular/common';

@Component({
 templateUrl:'attendanceDateRange.html',
 providers: [TeacherClassroomService,DatePipe]
})
export class AttendanceDateRange {

  item:any = {};
  loading:any ;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private teacherClassroomService: TeacherClassroomService, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public datePipe: DatePipe) {
    this.loading = loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  ngOnInit()
  {
    this.item.class_id =  window.localStorage.getItem('classid');
    this.item.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.item.endDate = this.item.startDate;
    this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
  
  }
  close()
  {
    this.viewCtrl.dismiss({});
  }

  submitOk()
  {
    if(this.item.startDate > this.item.endDate)
    {     
      let alert = this.alertCtrl.create({
        message: 'End date should be greater than start date',
        buttons: [{
          text: 'ok',
          handler: () => {
            alert.dismiss();
            return false;
          }
        }]

      });
      alert.present();
      return false;
    }

    this.viewCtrl.dismiss({startDate:this.item.startDate,endDate:this.item.endDate,datetoken:'daterange'});
  }

  onDateChange()
  {
    if(!this.item.startDate)
    {
      this.item.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    if(!this.item.endDate)
    {
      this.item.endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
  }
  
 
}
