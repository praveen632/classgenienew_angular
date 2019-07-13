import { Component } from '@angular/core';
import { NavController,PopoverController,ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';

@Component({
 templateUrl:'classListpopover.html',
 providers: [TeacherClassroomService]
})
export class ClassListpopover {

  item:any = {};
  loading:any ;
  stu_data:any = [];
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, private teacherClassroomService: TeacherClassroomService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.loading = loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  ngOnInit()
  {                  
    this.stu_data = this.navParams.get("stu_data");     
  }
  close(returnData)
  {
    this.viewCtrl.dismiss(returnData);
  }  
  
}
