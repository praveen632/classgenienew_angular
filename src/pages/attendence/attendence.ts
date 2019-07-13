import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, PopoverController, ModalController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import { TeacherClassroomPage } from '../teacherClassroom/teacherClassroom';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';
import { DatePipe } from '@angular/common';
import { AttendancePopoverMenu } from '../attendancePopoverMenu/attendancePopoverMenu';
import { AttendanceDateRange } from '../attendanceDateRange/attendanceDateRange';

@Component({  
  templateUrl: 'attendence.html',
  providers: [TeacherClassroomService,DatePipe]
})
export class  Attendence{

  class_studentlist:any = [];
  item:any = {};
  loading:any ;
  imageBasePath = '';
  selectedStudent = [];
 
  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, private alertCtrl: AlertController, public navParams: NavParams, public loadingCtrl: LoadingController, public datePipe: DatePipe,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
    
  }

  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
    this.item.classname = window.localStorage.getItem('classname');    
    this.imageBasePath = config.data.image_url;
    this.item.displayResetBtn = 0;
    this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
   
    
    this.item.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.item.currentDate = this.item.today;
    this.studentAttendance();     
  }
 
  initLoading()
  {
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  studentAttendance()
  {    
    if(!this.item.currentDate)
    {
      this.item.currentDate = this.item.today;
    }
    if(this.item.currentDate > this.item.today)
    {
      this.item.currentDate = this.item.today;
      let alert = this.alertCtrl.create({
        message: 'You can\'t mark attendance for upcoming dates.',
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
    this.teacherClassroomService.studentAttendance(this.item.class_id,this.item.currentDate).then((resp) => {
      
        if(resp['status'] == "Success")
        {
          this.class_studentlist =resp['user_list'];          
          this.setAttendance();
        }

    }, (err) => {
        console.log(err);
    });
     
  }

  saveAttendance()
  {    
    if(!this.item.currentDate)
    {
      this.item.currentDate = this.item.today;
    }
    var objSend = {class_id:0,student_list:[]};
    objSend.class_id = this.item.class_id;
    objSend.student_list = []; 
   
    for(let i=0; i<(this.class_studentlist).length; i++)
    {
      let key = this.class_studentlist[i].student_no[0].student_no;
      objSend.student_list.push({student_no:key, attendance:this.selectedStudent[key]});     
    } 
    let lists_value = btoa(JSON.stringify(objSend));
    this.initLoading();
    this.loading.present();

    this.teacherClassroomService.saveAttendance(lists_value,this.item.currentDate).then((resp) => {
        this.loading.dismiss();
        if(resp['status'] == "Success")
        {
          this.item.displayResetBtn = 1;
          let alert = this.alertCtrl.create({
            message: 'Attendance updated',
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
        else{
          let alert = this.alertCtrl.create({
            message: 'Unable to update Attendance',
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

  setAttendance()
  {
    for(let i=0; i<(this.class_studentlist).length; i++)
    {
      let key = this.class_studentlist[i].student_no[0].student_no;
      if((this.class_studentlist[i]).hasOwnProperty('id'))
      { 
        this.item.displayResetBtn = 1;        
      }
      else{
        this.item.displayResetBtn = 0;
      }     
      if(this.class_studentlist[i].student_no[0].attendance=='' || this.class_studentlist[i].student_no[0].attendance=='NA')
      {
        this.selectedStudent[key] = 'H';
      }
      else{
        this.selectedStudent[key] = this.class_studentlist[i].student_no[0].attendance;
      }
           
    }    
  }
 
  changeAttendance(student_no)
  { 
    if(this.selectedStudent[student_no]=='' || this.selectedStudent[student_no]=='NA' || this.selectedStudent[student_no]=='H'|| this.selectedStudent[student_no]=='L')
    {
      this.selectedStudent[student_no]='P';
    }
    else if(this.selectedStudent[student_no]=='P')
    {
      this.selectedStudent[student_no]='A';
    } 
    else if(this.selectedStudent[student_no]=='A')
    {
      this.selectedStudent[student_no]='L';
    }    
  	
  }

  changeAttendanceForAll(attendanceVal: any)
  {
    for(let i=0; i<(this.class_studentlist).length; i++)
    {
      let key = this.class_studentlist[i].student_no[0].student_no;     
      this.selectedStudent[key] = attendanceVal; 
    } 
  	
  }
  resetAttendence()
  {
    this.initLoading();
    this.loading.present();

    this.teacherClassroomService.resetAttendence(this.item.class_id,this.item.currentDate).then((resp) => {
        this.loading.dismiss();
        if(resp['status'] == "Success")
        {
          this.studentAttendance();
          let alert = this.alertCtrl.create({
            message: 'Attendance reset successfully.',
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
        else{
          let alert = this.alertCtrl.create({
            message: 'Unable to reset Attendance',
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

  openPopover(myEvent)
  {
    let dataParam = {
      class_id:this.item.class_id 
    }
    let popover = this.popoverCtrl.create(AttendancePopoverMenu,dataParam);    

    //callback function after close the popover
    popover.onDidDismiss(data => {
     
     //if datarange selected then call model pop for date range
     if(data['dateRange'] == 1)
     {
        this.openDateRangePop();
     }    

    });

    popover.present({
      ev: myEvent
    });
  }

  openDateRangePop()
  {

    let popupDateRange = this.modalCtrl.create(AttendanceDateRange);
    popupDateRange.onDidDismiss(data => {
      if(data && (data.datetoken == 'daterange'))
      {
        this.getAttendanceMailForRange(data);

      }
      
    });
    popupDateRange.present();
  }

  getAttendanceMailForRange(data)
  {
   
    this.initLoading();
    this.loading.present();
    let startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
    let endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
    let daterange = {"date1":startDate.toString(),"date2":endDate.toString()}
    let dataParam = {
      datetoken:  'daterange',
      class_id: (this.item.class_id).toString(),
      teacher_name:this.item.loggedInUser[0].name,
      member_no:(this.item.loggedInUser[0].member_no).toString(),
      email:this.item.loggedInUser[0].email,
      daterange:JSON.stringify(daterange),
      token:func.global_function.getToken()
    }   
   
    this.teacherClassroomService.getAttendanceMail(dataParam).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {
        let message = 'Attendence record for selected date range has been successfully mailed on your id '+this.item.loggedInUser[0].email;
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
