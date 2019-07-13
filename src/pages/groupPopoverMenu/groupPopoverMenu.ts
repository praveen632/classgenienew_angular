import { Component } from '@angular/core';
import { NavController,PopoverController,ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as func from '../../app/function';
import { AddGroup } from '../addGroup/addGroup';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';

@Component({
 templateUrl:'groupPopoverMenu.html',
 providers: [TeacherClassroomService]
})
export class GroupPopoverMenu {

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
    this.item.classname = window.localStorage.getItem('classname');
  	this.item.groupId = this.navParams.get("groupId");
    this.item.groupName = this.navParams.get("groupName");
  }

  close()
  {
    this.viewCtrl.dismiss();
  }
  editGroup()
  {      
    this.navCtrl.push(AddGroup,{'class_id':this.item.class_id,'groupId':this.item.groupId,'groupName':this.item.groupName});
    this.viewCtrl.dismiss();
  }

  deleteGroupCnf()
  {   
    let alert = this.alertCtrl.create({
      title:'Delete group',
      message: 'Are you sure want to delete?',
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
          this.deleteGroup();          
        }
      }]

    });
    alert.present();    
  }
  
  deleteGroup()
  {
    
    this.loading.present();
   
    this.teacherClassroomService.deleteGroup(this.item.class_id,this.item.groupId).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {          
        //this.navCtrl.setRoot(TeacherClasstab);   
        this.navCtrl.push(TeacherClasstab,{currentTab:'group',classid: this.item.class_id,
      classname: this.item.classname});

        let alert = this.alertCtrl.create({
          message: 'Group deleted Successfully!',
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
