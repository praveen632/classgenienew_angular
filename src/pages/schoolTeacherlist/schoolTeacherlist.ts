import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import {  Platform, NavParams, NavController,AlertController } from 'ionic-angular';
import { JoinSchoolService } from '../../services/joinSchool.service';


@Component({
  templateUrl: 'schoolTeacherlist.html',
  providers: [JoinSchoolService]
 })  


export class SchoolTeacherlist { 
 school_names:any = '';
 address:any = '';
 idList:any = {};
 SchoolTeacherlist = {}; 
 schoolTeacher = [];    
 school_Teacherlist =[]; 
 school_id:any = ''; 
 dashboard:any = {}; 
 teacher_len = '';
 member_no = {};
 user_data:any = {};
 school_data:any = [];
  type = {};
   join : any = {}
	 constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public joinschoolService:JoinSchoolService,private alertCtrl: AlertController){ 
     this.school_id = params.data.school_id;     
     this.school_names = params.data.school_name;
     this.address = params.data.address;
      var user_data = window.localStorage.getItem('loggedInUser');
       var datas = JSON.parse(user_data);
      this.user_data = datas;
      this.member_no = datas[0]['member_no'];
      this.type = datas[0]['type']; 

  } 

  ngOnInit()
    {  
      this.teacherList();          	
    }   

      
teacherList(){
      this.joinschoolService.teacherList(this.school_id).then((res) => {    		
     if(res['status'] == 'Success'){
     this.schoolTeacher = res['Teacher_list']; 
     this.teacher_len = res['Teacher_list'].length;

  }else{
      alert(22);
    }
  	}, (err) =>{
      console.log(err);
    });
}
   
 
 chooseSchool(school_id){
   this.join = window.localStorage.getItem('join');
   let alert = this.alertCtrl.create({
   title: '<img src="/assets/imgs/alert.png" class="alert"/><b></b>',
    message: 'Are you Sure want to join this School',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: (school_names) => {
          this.joinyourSchool();
        }
      }
    ]
 });
  alert.present();
 }


 schoolnotSelect(){
 this.navCtrl.setRoot(Dashboard);
 }

 joinyourSchool(){
   this.joinschoolService.joinyourSchool(this.school_id, this.member_no, this.type).then((res) => {    		
     if(res['status'] == 'Success')
     { 
        this.user_data[0]['school_id'] = res['user_list'][0]['school_id'];        
        let schoolData = [{'school_name':this.school_names}];
        window.localStorage.setItem('loggedInUser', JSON.stringify(this.user_data));
        window.localStorage.setItem('school', JSON.stringify(schoolData));
         this.sendrequest()
         let alert = this.alertCtrl.create({
          message: "You Joined the school",
          buttons: [{
            text: 'ok',
            handler: (event) => {
                this.navCtrl.push(Dashboard);
            }
          }]
        });
        alert.present();
    }else if(res['status'] == 'Failure'){
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
    }else if(res['error_code'] == 1){
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
  	}, (err) =>{
      console.log(err);
    });
 }


sendrequest(){
  for(var i=0;i<this.schoolTeacher.length;i++){
  this.idList +=this.schoolTeacher[i].email+',';  
 }
    this.joinschoolService.joinSchoolMailSend(this.idList, this.member_no).then((res) => {        
     if(res['status'] == 'Success')
     {             
        return true; 
    }
    }, (err) =>{
      console.log(err);
    });
}

}

  
  
  
