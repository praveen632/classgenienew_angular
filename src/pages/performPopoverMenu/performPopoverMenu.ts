import { Component } from '@angular/core';
import { NavController,PopoverController,ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';

@Component({
 templateUrl:'performPopoverMenu.html',
 providers: [TeacherClassroomService]
})
export class PerformPopoverMenu {

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
  
}
