import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { DashboardService } from '../../services/dashboard.service';
import * as config  from '../../assets/json/config';
import { ClassIcon } from '../classIcon/classIcon';
import { AddStudent } from '../addStudent/addStudent';

@Component({ 
 
  templateUrl: 'addNewClass.html',
  providers: [DashboardService]
})
export class AddNewClass {

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

  createNewClass()
  {

    this.item.schoolId = (this.loggedInUser.school_id).toString();
    this.item.member_no = this.loggedInUser.member_no;

    this.dashboardService.createNewClass(this.item).then((res) => {

    //if class added successfully then send it to add student page
    if(res['status'] == "Success")
    {
      let class_id = res['user_list'][0]['class_id'];
      window.localStorage.setItem('classid',class_id);
      this.navCtrl.push(AddStudent);
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
    //this.navCtrl.setRoot(ClassIcon);
    //this.navCtrl.push(ClassIcon);
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

}
