import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { TeacherListService } from '../../services/teacherList.service';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';

@Component({	
  templateUrl: 'teacherList.html',
  providers: [TeacherListService]
})
export class TeacherList { 

  items:any = [];
  school_id:any = 0;
  leader_member_no:any = 0;  
  imageBasePath = '';
  total_count:any = 0;  
  listsize:any = 5;
  pagecount:any = 1;
  loadMore:any = 1;
  loggedInUser:any = {};

  constructor(public navCtrl: NavController, private teacherListService: TeacherListService, public alertCtrl: AlertController, private toastCtrl: ToastController,public navParams: NavParams) {

  

  }

  ngOnInit()
  {  	
    this.imageBasePath = config.data.image_url;     
    this.loggedInUser = window.localStorage.getItem('loggedInUser');
    if(this.loggedInUser)
    {
      this.loggedInUser = JSON.parse(this.loggedInUser);
      this.school_id = this.loggedInUser[0].school_id;
      this.leader_member_no = this.loggedInUser[0].member_no;
    }

    this.getTeacherlist();
  }

  approoveTeacherCnf(member_no)
  {
    let alert = this.alertCtrl.create({
      title:'Approove teacher',
      message: 'Are you sure want to change status?',
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
          this.approoveTeacher(member_no);         
        }
      }]

    });
    alert.present();  
  }
  approoveTeacher(member_no)
  {
    let param = {
      member_no:member_no,
      school_id: (this.school_id).toString(),
      sender_ac_no: this.leader_member_no,
      token: func.global_function.getToken()
    }

    this.teacherListService.approoveTeacher(param).then((resp) => {

      if (resp['status'] == "Success")
      {
         this.getTeacherlist();                              
      }      
      else
      {
          let alert = this.alertCtrl.create({
            message: 'We are unable to Approve this teacher',
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
  removeTeacherCnf(member_no)
  {   
    let alert = this.alertCtrl.create({
      title:'Delete teacher',
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
          this.removeTeacher(member_no);          
        }
      }]

    });
    alert.present();    
  }

  removeTeacher(member_no)
  {
    let param = {
      member_no:member_no,
      school_id: this.school_id,
      sender_ac_no: this.leader_member_no,
      token: func.global_function.getToken()
    }
    this.teacherListService.removeTeacher(param).then((resp) => {

      if (resp['status'] == "Success")
      {
         this.getTeacherlist();                              
      }      
      else
      {
          let alert = this.alertCtrl.create({
            message: 'We are unable to delete this teacher',
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

  getTeacherlist()
  {
    
    this.teacherListService.getTeacherlist(this.school_id, this.pagecount).then((resp) => {
      
        if(resp['status'] == "Success")
        {
          this.items = resp['Teacher_list'];
          this.total_count = resp['count_list'][0]['count'];
          //this.listsize = (this.items).length;          
          if(this.total_count > (this.listsize*this.pagecount))
          {
            this.loadMore = 1;
          }
          else
          {
            this.loadMore = 0;
          }
        }
        else
        {
          this.loadMore = 0;
          let alert = this.alertCtrl.create({
            message: 'There is No More teacher..',
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

  pagging() 
  {
    this.pagecount = this.pagecount + 1;           
    this.getTeacherlist();
  }

}
