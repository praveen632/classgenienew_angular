import { Component } from '@angular/core';
import { NavController,ModalController, NavParams,ToastController, AlertController } from 'ionic-angular';
import { DashboardService } from '../../services/dashboard.service';
import * as config  from '../../assets/json/config';
import { EventManagement } from '../eventManagement/eventManagement';
import { ReferTeacher } from '../referTeacher/referTeacher';
import { JoinSchool } from '../joinSchool/joinSchool';
import { AddNewClass } from '../addNewClass/addNewClass';
import { SchoolStory } from '../schoolStory/schoolStory';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';
import { Profile } from '../profile/profile';
import { TeacherClassroomPage } from '../teacherClassroom/teacherClassroom';
import * as func from '../../app/function';

@Component({ 
  templateUrl: 'dashboard.html',
  providers: [DashboardService]
})
export class Dashboard {
  eventManagement = EventManagement;
  referTeacher = ReferTeacher;
  joinSchool = JoinSchool;
  addNewClass = AddNewClass;
  schoolStory = SchoolStory;
  profile = Profile;

  item:any = {};
  loggedInUser:any = {};
  classList:any = [];
  school:any = {};
  school_name:any = '';
  subTitle:any = '';
  deviceId:any = '';
  imagePath:any = '';
  hideshow:any = '';
  res1:any = {};
  classlength:any = '';
  classid:any = '';
  classname:any = '';
  imgURI:any;
  schoolinfos:any = {};
 
  constructor(public navCtrl: NavController, private dashboardService: DashboardService, public modalCtrl: ModalController, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  	
  	this.imagePath = config.data.image_url;
  	
  }

  ngOnInit()
  {
    this.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.loggedInUser = JSON.parse(this.loggedInUser);
    this.schoolinfos = window.localStorage.getItem('schoolInfo');      
  	this.deviceId = window.localStorage.getItem('das_device_id');
    this.imgURI = this.loggedInUser[0]['image']+"?"+func.global_function.randomNumber();
    window.localStorage.setItem('school_id', JSON.stringify(this.loggedInUser['school_id']));
    window.localStorage.setItem('school', JSON.stringify(this.schoolinfos));
    // if (this.loggedInUser.hasOwnProperty("school") == true) { 
    //   alert(11);
    //      window.localStorage.setItem('school', JSON.stringify(this.schoolinfos));
    //      this.school = JSON.stringify(this.schoolinfos);
    //   }       
    if(this.schoolinfos && this.schoolinfos.length>0)
    {
        this.school = JSON.parse(this.schoolinfos);
        this.school = this.school[0];
    }    

  	this.loggedInUser = this.loggedInUser[0];
  	

 	  //If no school associate
  	if(this.loggedInUser.school_id == 0 || this.loggedInUser.school_id == undefined) 
    { 
       this.school = {};
       this.school.school_name   = 'Join Your School';
       this.subTitle = 'Connect with teachers at your school';
    }
    this.getClassList();
  	
  } 

  getClassList()
  {
  	this.dashboardService.getClassList(this.loggedInUser.member_no).then((res) => {
      if(typeof res != 'undefined'){
  		    this.classList = res['user_list'] ;
          this.classlength = res['user_list'].length;
  		    console.log(this.classList); 
      }
  	}, (err) => {
      console.log(err);
    });
  }

  schoolinfo()
  {    
    if (this.loggedInUser.school_id == 0) {
    if (this.loggedInUser.user_type == 5 || this.loggedInUser.user_type == 1) {
        this.hideshow = false;
    } else {
        this.hideshow = true;
    }

    let schoolModal = this.modalCtrl.create(JoinSchool);
   schoolModal.present();

    } else {
        this.schoolvarify();
    }
  }

  schoolvarify()
  { 
     this.dashboardService.schoolvarify(this.loggedInUser.member_no).then((res) => {

       this.res1 = res;
       if (this.res1.status == "Success") {
           if (this.res1.user_list[0].status == '1' && this.loggedInUser.school_id != 0) {
              window.localStorage.setItem('school_id',this.loggedInUser.school_id);
              this.navCtrl.push(SchoolStory);
           } 
           else if (this.res1.user_list[0].status == '0' && this.loggedInUser.school_id != 0){
              
                let toast = this.toastCtrl.create({
                  message: 'Your account is under verification',
                  duration: 3000,
                  position: 'center'
                });
                toast.present();
           }
       } 
       else if (this.res1.error_code == 1)
       {           
          let alert = this.alertCtrl.create({
            message: this.res1.error_msg,
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

  openClassDetail(classid,classname,classimage,classgrade,classpoint)
  {
    window.localStorage.setItem('classid',classid);
    window.localStorage.setItem('classname',classname);
    window.localStorage.setItem('classimage',classimage);
    window.localStorage.setItem('classgrade',classgrade);
    window.localStorage.setItem('classpoint',classpoint);

    
    this.navCtrl.push(TeacherClasstab,{
      classid: classid,
      classname: classname
      })
  }

  doRefresh(refresher) 
  {
    this.getClassList();
    setTimeout(() => {
         refresher.complete();
    }, 2000);

  }


}
