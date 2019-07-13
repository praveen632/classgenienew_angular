import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController} from 'ionic-angular';
import * as func from '../../app/function';
import { GiveGroupfeedback } from '../giveGroupfeedback/giveGroupfeedback';
import * as config  from '../../assets/json/config';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';



@Component({
 
  templateUrl: 'awardMultiStudent.html',
  providers: [TeacherClassroomService]
})
export class   AwardMultiStudent  {
 
  givefeedback = GiveGroupfeedback;
  item:any = {};
  loading:any;
  imageBasePath:any = '';
  class_studentlist:any = [];
  selectedStudent = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private teacherClassroomService: TeacherClassroomService,public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
    
  }
  
  ngOnInit()
  {
    this.item.class_id = window.localStorage.getItem('classid');
    this.item.selectAll = false;
    this.imageBasePath = config.data.image_url
    this.studentlisting();
    this.item.noOfSelectedStu =  this.selectedStudent.length;
   
    
  }
  initLOader()
  {
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }
  studentlisting() 
  {
    this.initLOader();
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
  selectStudent(student_no)
  { 
   
  	if(this.selectedStudent.indexOf(student_no) !== -1)
  	{
      let ax = this.selectedStudent.indexOf(student_no);
  		this.selectedStudent.splice(ax,1)
  	}
  	else
  	{
  		this.selectedStudent.push(student_no);
    }
    this.item.noOfSelectedStu =  this.selectedStudent.length;
  	
  }
  
  selectAll()
  {
    this.selectedStudent = [];
    this.item.selectAll = !this.item.selectAll;
    if(this.item.selectAll)
    {
      for(let i=0; i<(this.class_studentlist).length; i++)
      {        
        this.selectedStudent.push(this.class_studentlist[i].id);;
      }
    }
    this.item.noOfSelectedStu =  this.selectedStudent.length;    
  }

  awardMultiplestudents()
  {     
    this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,selectedStudent:this.selectedStudent,awardMultiStudent:1});
  }
  
}
