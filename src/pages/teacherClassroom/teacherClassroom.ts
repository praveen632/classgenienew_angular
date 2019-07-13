import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, PopoverController, NavParams } from 'ionic-angular';
import { AddStudent } from '../addStudent/addStudent';
import { EditStudent } from '../editStudent/editStudent';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import { AddGroup } from '../addGroup/addGroup';
import { TeacherClassstoryPage } from '../teacherClassstory/teacherClassstory';
import { StudentPopoverMenu } from '../studentPopoverMenu/studentPopoverMenu';
import { AwardGroup } from '../awardGroup/awardGroup'; 
import { Dashboard } from '../dashboard/dashboard';
import { ClassroomPopovermenuPage  } from '../teacherClassroomPopovermenu/teacherClassroomPopovermenu';
import { Attendence } from '../attendence/attendence';
import { AwardMultiStudent } from '../awardMultiStudent/awardMultiStudent';
import { ViewReport } from '../viewReport/viewReport';
import { GiveGroupfeedback } from '../giveGroupfeedback/giveGroupfeedback';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';

@Component({
  templateUrl: 'teacherClassroom.html',
  providers: [TeacherClassroomService]
})
export class TeacherClassroomPage {

  addStudent = AddStudent;
  addGroup = AddGroup;
  attendence = Attendence;
  awardMultiStudent = AwardMultiStudent;
  viewReport = ViewReport;

  item:any = {};
  class_studentlist:any = [];
  groupList:any = [];
  imageBasePath = '';
  student = {};
  currentTab = 'student';
  tab3Root: any = TeacherClassstoryPage;

  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, public alertCtrl: AlertController, private toastCtrl: ToastController,public popoverCtrl: PopoverController,public navParams: NavParams) {

  }

  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
  	this.item.classname = window.localStorage.getItem('classname');
    this.item.classimage = window.localStorage.getItem('classimage');
    this.item.classgrade = window.localStorage.getItem('classgrade');
    this.item.classpoint = window.localStorage.getItem('classpoint');


    this.imageBasePath = config.data.image_url;
    this.studentlisting(); 
    this.grouplisting();   
    if(this.navParams.get("currentTab"))
    {
      this.currentTab = this.navParams.get("currentTab");      
    }
    else if(window.localStorage.getItem('currentTab'))
    {
       this.currentTab = window.localStorage.getItem('currentTab');
       window.localStorage.removeItem('currentTab');      
    }
    else
    {
      this.currentTab = 'student';
    }
    
  }

  studentlisting()
  {
    this.teacherClassroomService.studentlisting(this.item.class_id).then((resp) => {
      
        if(resp['status'] == "Success")
        {
          this.class_studentlist =resp['class_details']['student_list']; 
        }

    }, (err) => {
        console.log(err);
    });
     
  }
  editStudentPage(id, name, imageName)
  {
  	alert(name);
  	this.navCtrl.push(EditStudent,{id:id,name:name,imageName:imageName});
  }

  openGroupTab()
  {
    this.currentTab = 'group';
    this.grouplisting();
  }
  openStudentTab()
  {
    this.currentTab = 'student';
    this.studentlisting();
  }

  grouplisting()
  {
    this.teacherClassroomService.grouplisting(this.item.class_id).then((resp) => {
      
        if(resp['status'] == "Success")
        {
          this.groupList =resp['group_list']; 
        }

    }, (err) => {
        console.log(err);
    });
     
  }

  openPopover(myEvent,id,student_no, name, imageName)
  {
    let popover = this.popoverCtrl.create(StudentPopoverMenu);

    //callback function after close the popover
    popover.onDidDismiss(data => {
     
     //if edit is 1 then send it edit students page
     if(data && data['edit'] == 1)
     {
        this.navCtrl.push(EditStudent,{'id':id,'name':name,'imageName':imageName})
     }
     else if(data && data['delete'] == 1)
     {        
        let alert = this.alertCtrl.create({
        title:'Classgenie',
        message: 'Are you sure you want to delete this student?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
            return false;
          }
        },
        {
          text: 'ok',
          handler: () => {
            this.removeStudent(id);         
          }
        }]

      });
      alert.present();
     }
     else if(data && data['feedback'] == 1)
     {
        this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,'studentId':id,'student_no':student_no,'studentName':name,'awardSingleStudent':1});
     }    

    });

    popover.present({
      ev: myEvent
    });
  }

  addClassFeedback()
  {
     this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,'awardWholeClass':1});
  }

  removeStudent(student_id)
  {
    this.teacherClassroomService.removeStudent(student_id).then((res) => {
     
      if(res['status'] == "Success")
      {
     
        this.studentlisting(); 
        let alert = this.alertCtrl.create({
          message: 'Student deleted successfully.',
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
      else
      {
        let alert = this.alertCtrl.create({
          message: 'Unable to delete student',
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

    return false;
  }

  openGroupDetail(groupId,groupName)
  {
    this.navCtrl.push(AwardGroup,{'class_id':this.item.class_id,'groupId':groupId,'groupName':groupName});
  }



openheaderMenu(myEvent){

     
      let popover = this.popoverCtrl.create(ClassroomPopovermenuPage);

    //callback function after close the popover
    popover.onDidDismiss(data => {
     
     //if editSkill is 1 then send it edit skill page
     if(data && data['editSkill'] == 1)
     {
        this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,'editSkill':1});
     }    

    });

      popover.present({
          ev: myEvent
      });
          
}

back()
{
 
  window.localStorage.removeItem('classid');
  window.localStorage.removeItem('classname');
  window.localStorage.removeItem('currentTab');
  this.navCtrl.push(Dashboard);
}




}
