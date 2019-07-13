import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, Events, LoadingController } from 'ionic-angular';
import * as func from '../../app/function';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import { TeacherClassroomPage } from '../teacherClassroom/teacherClassroom';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';

@Component({  
  templateUrl: 'addGroup.html',
  providers: [TeacherClassroomService]
})
export class  AddGroup{

  class_studentlist:any = [];
  item:any = {};
  loading:any ;
  imageBasePath = '';
  selectedStudent = [];
  groupStudentListing = [];
  groupdata = [];
  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, private alertCtrl: AlertController, public navParams: NavParams,public events: Events, public loadingCtrl: LoadingController) {
    this.loading = loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
    this.item.classname = window.localStorage.getItem('classname');
    this.item.groupId = this.navParams.get("groupId");
    this.item.groupname = this.navParams.get("groupName");
    this.imageBasePath = config.data.image_url;
    this.item.student_list = '';
    this.studentlisting();
    //if there is group id it means it is edit case so fetch the group detail
    if(this.item.groupId)
    {
      this.getGroupDetail();
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

 
  selectStudent(student_no)
  { 
    this.item.student_list = '';   
  	if(this.selectedStudent.indexOf(student_no) !== -1)
  	{
      let ax = this.selectedStudent.indexOf(student_no);
  		this.selectedStudent.splice(ax,1)
  	}
  	else
  	{
  		this.selectedStudent.push(student_no);
  	}

    for(let i=0; i<(this.class_studentlist).length; i++)
    {
      if(this.selectedStudent.indexOf(this.class_studentlist[i].student_no) !== -1)
      {
        this.item.student_list += ", "+this.class_studentlist[i].name;
      }
    }
  	
  }

  createGroup() 
  {
    if((this.selectedStudent).length<2)
    {
      let alert = this.alertCtrl.create({
        message: 'Add more than one students to the group',
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

    this.groupdata = [];
    //if there is group id then need to update else create the group
    if(this.item.groupId)
    {
      var groupApiUrl = '/groupinfo/update';
      var successMessage = 'Group Updated Successfully!';    
    }
    else
    {
      var groupApiUrl = '/groupinfo/addgroup';
      var successMessage = 'Group Created Successfully!';
    }
    for(let i=0; i<(this.selectedStudent).length; i++)
    {      
      if(this.item.groupId)
      {
        this.groupdata.push({'class_id':this.item.class_id,'student_no':this.selectedStudent[i],'group_name':this.item.groupname,'group_id':this.item.groupId});     
      }
      else
      {
        this.groupdata.push({'class_id':this.item.class_id,'student_no':this.selectedStudent[i],'group_name':this.item.groupname});
      }
    }
    let lists_value = btoa(JSON.stringify(this.groupdata));
    this.teacherClassroomService.createGroup(lists_value,groupApiUrl).then((resp) => {
      
        if(resp['message'] == "Failure")
        {
          let alert = this.alertCtrl.create({
            message: 'Group Name already exists!',
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
        else if(resp['status'] == "Success")
        {
          let alert = this.alertCtrl.create({
            message: successMessage,
            buttons: [{
              text: 'ok',
              handler: () => {
                alert.dismiss();
                return false;
              }
            }]

          });          
          //this.navCtrl.setRoot(TeacherClasstab);
          this.navCtrl.push(TeacherClasstab,{currentTab:'group',classid: this.item.class_id,
          classname: this.item.classname});
          alert.present();
          //this.events.publish('reloadDetails');
          return false;         
        }

    }, (err) => {
        console.log(err);
    });
  }

  getGroupDetail()
  {	
  	this.teacherClassroomService.getGroupDetail(this.item.class_id, this.item.groupId).then((resp) => {

  	if(resp['status'] == "Success")
  	{
      this.groupStudentListing = resp['student_info']; 
      for(let i=0; i<(this.groupStudentListing).length; i++)
      {        
        this.selectStudent(this.groupStudentListing[i].student_no);
      }
  	}

  	}, (err) => {
  	console.log(err);
  	});	
	
  }

}
