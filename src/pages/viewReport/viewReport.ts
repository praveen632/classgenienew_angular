import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, PopoverController, ModalController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import {  PerformanceReport } from '../performanceReport/performanceReport';


@Component({  
  templateUrl: 'viewReport.html',
  providers: [TeacherClassroomService]
})
export class    ViewReport  {  
	
	item:any = {};
	loading:any ;
	imageBasePath = '';
	class_studentlist:any = [];

  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, private alertCtrl: AlertController, public navParams: NavParams, public loadingCtrl: LoadingController,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
   
  }
  
  initLoading()
  {
  	this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }
  ngOnInit()
  {
    this.item.class_id = window.localStorage.getItem('classid');
    this.item.classname = window.localStorage.getItem('classname');
	this.item.classimage = window.localStorage.getItem('classimage');	
    this.imageBasePath = config.data.image_url;
	
	//load the student list for current class
	this.studentlisting();
  }
  
  studentlisting()
  {
	this.initLoading();
    this.loading.present();
    this.teacherClassroomService.studentlisting(this.item.class_id).then((resp) => {
		this.loading.dismiss();
        if(resp['status'] == "Success")
        {
          this.class_studentlist =resp['class_details']['student_list']; 
        }

    }, (err) => {
        console.log(err);
    });
     
  }
  
  openPerformanceReport(student_no:any,student_name:any)
  {
	  let dataParam = {
			student_no:student_no,
			student_name:student_name
	  }
	  console.log(dataParam);
	  this.navCtrl.push(PerformanceReport,dataParam);
  }


}
