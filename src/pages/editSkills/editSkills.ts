import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, PopoverController, NavParams } from 'ionic-angular';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';
import { SkillIcon } from '../skillIcon/skillIcon';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';
import { GiveGroupfeedback } from '../giveGroupfeedback/giveGroupfeedback';

@Component({ 
 
  templateUrl: 'editSkills.html',
  providers: [TeacherClassroomService]
})
export class EditSkills {

  selectPointList:any = [];
  loggedInUser:any = {};
  item:any = {};
  iconImageBase = '';
  imageName = '6_6_c_6.png';
 
  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, public alertCtrl: AlertController,public popoverCtrl: PopoverController, public modalCtrl: ModalController, public navParams: NavParams) {

  }

  ngOnInit()
  {
    this.iconImageBase = config.data.image_url+"assets/"+"skill/";
  	this.loggedInUser = window.localStorage.getItem('loggedInUser');
  	this.loggedInUser = JSON.parse(this.loggedInUser);
  	this.loggedInUser = this.loggedInUser[0];

  	this.item.class_id = window.localStorage.getItem('classid');

  	this.item.imageName = this.navParams.get('skill_image');    
  	this.item.skill_id = this.navParams.get('skill_id');
    this.item.skill_name = this.navParams.get('skill_name');
    this.item.skill_weight = this.navParams.get('skill_weight');
    this.item.skill_type = this.navParams.get('skill_type');
   

    if(this.item.imageName)
    {     
      this.item.imagePath = this.iconImageBase + this.item.imageName;
    }
    else
    {
        this.item.imagePath = 'assets/imgs/20_icon_2.png';
        this.item.imageName = '20_icon_2.png';
    }
    if(this.item.skill_type=='positive')
    {
    	var pointListApiUrl = '/classlist/positivepointweight';
    }
    else
    {
    	var pointListApiUrl = '/classlist/negativepointweight';
    }
  	this.teacherClassroomService.pointWeightList(pointListApiUrl).then((res) => {

  		this.selectPointList = res;

  	}, (err) => {
      console.log(err);
    });
  }

  /*Find the list of icon to choose for skills */ 
  skillIconPopup()
  {    
    let skillIcon = this.modalCtrl.create(SkillIcon);
    skillIcon.onDidDismiss(data => {

    if(data && data['selectedIcon'])
    {
      this.item.imageName = data.selectedIcon;
      this.item.imagePath = this.iconImageBase + this.item.imageName;
    }
    
  });
    skillIcon.present();
  }

  updateSkill()
  {    

    this.teacherClassroomService.updateSkill(this.item).then((res) => {

    //if skill updated successfully then send it to edit skills listing
    if(res['status'] == "Success")
    {
      
  		//the class has been update so we need to store the updated data for class		
  		this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  		this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,'editSkill':1});

  		let alert = this.alertCtrl.create({
        message: 'Skill Updated successfully.',
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

  removeSkillCnf()
  {
    let alert = this.alertCtrl.create({
      title:'Classgenie',
      message: 'Are you sure you want to delete this skill?',
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
          this.removeSkill();         
        }
      }]

    });
    alert.present();  
  }
  removeSkill()
  {    

    this.teacherClassroomService.removeSkill(this.item.skill_id).then((res) => {

    //if skill removed successfully then send it to edit skills listing
    if(res['status'] == "Success")
    {		
  		this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  		this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,'editSkill':1});

  		let alert = this.alertCtrl.create({
        message: 'Skill Removed successfully.',
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
