import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AddStudent } from '../addStudent/addStudent';
import { EditStudent } from '../editStudent/editStudent';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import { TeacherClassroomPage } from '../teacherClassroom/teacherClassroom';

@Component({
  templateUrl: 'group.html',
  providers: [TeacherClassroomService]
})
export class Group {

  addStudent = AddStudent;
  teacherClassroomPage = TeacherClassroomPage;
  item:any = {};
  groupList:any = [];
  imageBasePath = ''; 

  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, public alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
  	this.item.classname = window.localStorage.getItem('classname');
    this.imageBasePath = config.data.image_url;
    this.grouplisting();
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
  editStudentPage(id, name, imageName)
  {
  	alert(name);
  	this.navCtrl.push(EditStudent,{id:id,name:name,imageName:imageName});
  }
	back()
	{
	  window.localStorage.removeItem('classid');
	  window.localStorage.removeItem('classname');
	}

}
