import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { DashboardService } from '../../services/dashboard.service';
import * as config  from '../../assets/json/config';
import { ClassIcon } from '../classIcon/classIcon';
import { AddStudent } from '../addStudent/addStudent';
import { Dashboard } from '../dashboard/dashboard';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';

@Component({ 
 
  templateUrl: 'editClass.html',
  providers: [DashboardService]
})
export class EditClass {

  selectGrades:any = [];
  loggedInUser:any = {};
  item:any = {};
  iconImageBase = '';
  imageName = '6_6_c_6.png';
 
  constructor(public navCtrl: NavController, private dashboardService: DashboardService, public alertCtrl: AlertController,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {

  }

  ngOnInit()
  {
    this.iconImageBase = config.data.image_url+"assets/"+"class/";
  	this.loggedInUser = window.localStorage.getItem('loggedInUser');
  	this.loggedInUser = JSON.parse(this.loggedInUser);
  	this.loggedInUser = this.loggedInUser[0];
    this.item.imageName = window.localStorage.getItem('classIcon');

    this.item.class_id = window.localStorage.getItem('classid');
  	this.item.classname = window.localStorage.getItem('classname');
    this.item.imageName = window.localStorage.getItem('classimage');
    this.item.selectGrade = window.localStorage.getItem('classgrade');
    this.item.classpoint = window.localStorage.getItem('classpoint');

    if(this.item.imageName)
    {
      window.localStorage.setItem('classIcon','');
      this.item.imagePath = this.iconImageBase + this.item.imageName;
    }
    else
    {
        this.item.imagePath = 'assets/imgs/addimg.png';
        this.item.imageName = '6_6_c_6.png';
    }
  	this.dashboardService.getGradeList(this.loggedInUser.member_no).then((res) => {

  		this.selectGrades = res;

  	}, (err) => {
      console.log(err);
    });
  }

  updateClass()
  {

    this.item.schoolId = (this.loggedInUser.school_id).toString();
    this.item.member_no = this.loggedInUser.member_no;

    this.dashboardService.updateClass(this.item).then((res) => {

    //if class added successfully then send it to add student page
    if(res['status'] == "Success")
    {
      
		//the class has been update so we need to store the updated data for class

		window.localStorage.setItem('classname',this.item.classname);
		window.localStorage.setItem('classimage',this.item.imageName);
		window.localStorage.setItem('classgrade',this.item.selectGrade);

		this.navCtrl.push(TeacherClasstab,{currentTab:'',classid: this.item.class_id, classname: this.item.classname});
		let alert = this.alertCtrl.create({
        message: 'Class Updated successfully.',
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
    else if(res['error_code']==1)
    {
      let alert = this.alertCtrl.create({
        message: res['error_msg'],
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
        message: res['comments'],
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

  /*Find the list of icon to choose for class */ 
  classIconPopup()
  {    
    let classIcon = this.modalCtrl.create(ClassIcon);
    classIcon.onDidDismiss(data => {

    if(data && data['selectedIcon'])
    {
      this.item.imageName = data.selectedIcon;
      this.item.imagePath = this.iconImageBase + this.item.imageName;
    }
    
  });
    classIcon.present();
  }

  removeClassCnf()
  {
    let alert = this.alertCtrl.create({
      title:'Classgenie',
      message: 'Are you sure you want to delete class '+this.item.classname+' ?',
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
          this.removeClass();         
        }
      }]

    });
    alert.present();  
  }
  removeClass()
  {    

    this.dashboardService.removeClass(this.item.class_id).then((res) => {

    //if class added successfully then send it to add student page
    if(res['status'] == "Success")
    {
		//this.navCtrl.pop();
		this.navCtrl.setRoot(Dashboard);
		let alert = this.alertCtrl.create({
        message: 'Class Removed successfully.',
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
    else if(res['error_code']==1)
    {
      let alert = this.alertCtrl.create({
        message: res['error_msg'],
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
        message: res['comments'],
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

}
