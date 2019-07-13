import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import * as func from '../../app/function';
import * as config  from '../../assets/json/config';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import { TeacherClassroomPage } from '../teacherClassroom/teacherClassroom';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';
import { AwardGroup } from '../awardGroup/awardGroup';
import { EditSkills } from '../editSkills/editSkills';
import { AddSkills } from '../addSkills/addSkills';

@Component({
 
  templateUrl: 'giveGroupfeedback.html',
  providers: [TeacherClassroomService]
})
export class   GiveGroupfeedback  {

  item:any = {};
  loading:any ;
  currentTab:any = 'positive';
  imageBasePath:any = '';
  optionPositive:any = [];
  optionNegative:any = [];
  selectedStudent:any = [];
   
  constructor(public navCtrl: NavController, public navParams: NavParams, private teacherClassroomService: TeacherClassroomService, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }
  
  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
    this.item.class_name = window.localStorage.getItem('classname');
  	this.item.groupId = this.navParams.get("groupId");
    this.item.groupName = this.navParams.get("groupName"); 

    this.item.awardMultiStudent = this.navParams.get("awardMultiStudent");
    this.item.awardSingleStudent = this.navParams.get("awardSingleStudent");
    this.item.awardWholeClass = this.navParams.get("awardWholeClass");
    this.item.editSkill = this.navParams.get("editSkill");

    if(this.item.groupId)
    {
      this.item.headerTitlePart = 'Give feedback to '+this.item.groupName;
    }
    else if(this.item.awardMultiStudent)
    {
      this.item.headerTitlePart = 'Give feedback to '+'selected students';
    }
    else if(this.item.awardSingleStudent)
    {
      this.item.studentName = this.navParams.get("studentName");
      this.item.studentId = this.navParams.get("studentId");
      this.item.student_no = this.navParams.get("student_no");

      this.item.headerTitlePart = 'Give feedback to '+this.item.studentName;
    }
    else if(this.item.awardWholeClass)
    {
      this.item.headerTitlePart = 'Give feedback to '+'Whole Class';
    }
    else if(this.item.editSkill)
    {
      this.item.headerTitlePart = 'Skills List';
    }

    this.selectedStudent = this.navParams.get("selectedStudent")
    this.imageBasePath = config.data.image_url;
    this.getFeedbackOption();   
    
  }

  initLOader()
  {
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  getFeedbackOption()
  {	
    this.initLOader();
    this.loading.present();
  	this.teacherClassroomService.getFeedbackOption(this.item.class_id).then((resp) => {
      this.loading.dismiss();
    	if(resp['status'] == "Success")
    	{
    	  this.optionPositive = resp['user_list']; 
    	  this.optionNegative = resp['needwork']; 
    	}

  	}, (err) => {
  	console.log(err);
  	});	
	
  }

  giveReward(pointweight,skills_id,name,image,skill_type)
  {
    //if this page called by group reward then call feedback for group
    if(this.item.groupId)
    {
      this. giveRewardToGroup(pointweight,skills_id);
    }
    else if(this.item.awardMultiStudent)
    {
      this.giveRewardToMultiStudent(pointweight,skills_id);
    }
    else if(this.item.editSkill)
    {
       this.navCtrl.push(EditSkills,{'skill_weight':pointweight,'skill_id':skills_id,'skill_name':name,'skill_image':image,'skill_type':skill_type}); 
    }
    else if(this.item.awardSingleStudent)
    {
        this.giveRewardToSingleStudent(pointweight,skills_id);
    }
    else if(this.item.awardWholeClass)
    {
       this.giveRewardToClass(pointweight,skills_id);
    }
  }
  giveRewardToGroup(pointweight,skills_id)
  {
    this.initLOader();
    this.loading.present();
    let dataParam = {
      group_name:(this.item.groupName).toString(),
      pointweight:(pointweight).toString(),
      class_id:(this.item.class_id).toString(),
      group_id:(this.item.groupId).toString(),
      customize_skills_id:(skills_id).toString(),
      token:func.global_function.getToken()
    }
    this.teacherClassroomService.giveReward(dataParam).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {
        //this.navCtrl.pop(AwardGroup);
        //this.navCtrl.pop();     
        //this.navCtrl.setRoot(TeacherClasstab,{currentTab:'group',classid: this.item.class_id, classname: this.item.class_name});   
        this.navCtrl.push(TeacherClasstab,{currentTab:'group',classid: this.item.class_id, classname: this.item.class_name});
        //this.navCtrl.setRoot(TeacherClasstab);
      }

    }, (err) => {
    console.log(err);
    }); 
  }

  giveRewardToMultiStudent(pointweight,skills_id)
  {
    this.initLOader();
    this.loading.present();
    let dataParam = {
      id:this.selectedStudent,
      pointweight:(pointweight).toString(),
      class_id:(this.item.class_id).toString(),     
      customize_skills_id:(skills_id).toString()
    }
    let finalParam = {
      data:JSON.stringify(dataParam),
      token:func.global_function.getToken()
    }

    this.teacherClassroomService.giveRewardToMultiStudent(finalParam).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {       
        this.navCtrl.push(TeacherClasstab,{classid: this.item.class_id, classname: this.item.class_name});
        //this.navCtrl.setRoot(TeacherClasstab);
      }

    }, (err) => {
    console.log(err);
    }); 
  }
  giveRewardToSingleStudent(pointweight,skills_id)
  {
    this.initLOader();
    this.loading.present();
    let dataParam = {
      id:(this.item.studentId).toString(),
      pointweight:(pointweight).toString(),      
      customize_skills_id:(skills_id).toString(),
      class_id:(this.item.class_id).toString(),     
      student_no:(this.item.student_no).toString(),
      token:func.global_function.getToken()
    }    

    this.teacherClassroomService.giveRewardToSingleStudent(dataParam).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {       
       this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
        this.navCtrl.push(TeacherClasstab,{currentTab:'',classid: this.item.class_id, classname: this.item.class_name});
        let alert = this.alertCtrl.create({
          message: 'Feedback has been added successfully.',
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
          message: 'We are unable to add feedback.',
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
  giveRewardToClass(pointweight,skills_id)
  {
    this.initLOader();
    this.loading.present();
    let dataParam = {      
      pointweight:(pointweight).toString(),      
      customize_skills_id:(skills_id).toString(),
      class_id:(this.item.class_id).toString(), 
      token:func.global_function.getToken()
    }    

    this.teacherClassroomService.giveRewardToClass(dataParam).then((resp) => {
      this.loading.dismiss();
      if(resp['status'] == "Success")
      {       
          
        // set the updated feedback point for class in storage
        let classpoint = resp['user_list'][0].pointweight;
        window.localStorage.setItem('classpoint',classpoint);

        this.navCtrl.setRoot(TeacherClassroomPage,{currentTab:'',classid: this.item.class_id, classname: this.item.class_name});

        let alert = this.alertCtrl.create({
          message: 'Feedback has been added successfully.',
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
          message: 'We are unable to add feedback.',
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

  changeTab(tabName)
  {
    this.currentTab = tabName;
  }

  addSkill(skill_type)
  {
    this.navCtrl.push(AddSkills,{'skill_type':skill_type}); 
  }

}
