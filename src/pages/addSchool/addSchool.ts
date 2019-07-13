import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ModalController } from 'ionic-angular';
import { SchoolService } from '../../services/school.service';
import * as config  from '../../assets/json/config';
import { Dashboard } from '../dashboard/dashboard';
import { ShareSchoolInfo } from '../shareSchoolInfo/shareSchoolInfo';

@Component({	
  templateUrl: 'addSchool.html',
  providers: [SchoolService]
})
export class AddSchool {  

  item:any = {};
  school:any = {};
  user_data:any = {};
  data:any = {};
  constructor(public navCtrl: NavController, private schoolService: SchoolService, public alertCtrl: AlertController, private toastCtrl: ToastController, public modalCtrl: ModalController) {

      var user_data = window.localStorage.getItem('loggedInUser');
       var datas = JSON.parse(user_data);
      this.user_data = datas;

  }

  ngOnInit()
  {
  	 this.school.schoolname =  window.localStorage.getItem('joinschool');
     this.school.member_no =  window.localStorage.getItem('das_member_no');
  }



  saveschool()
  {
    this.schoolService.saveschool(this.school).then((resp) => {
      if(resp['status'] == "Success"){    
        this.user_data[0]['school_id'] = resp['teacher_list'][0]['school_id'];        
        let schoolData = [{'school_name':resp['teacher_list'][0]['school_name']}];
        window.localStorage.setItem('loggedInUser', JSON.stringify(this.user_data));
        window.localStorage.setItem('school', JSON.stringify(schoolData));
        this.approveSchool(resp['teacher_list']);
        this.shareSchool(resp['teacher_list']);        
      }
      else if(resp['error_code']==1)
      {
        let alert = this.alertCtrl.create({
          message: resp['error_msg'],
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

  shareSchool(data){ 
     let schoolTeacherlistModal = this.modalCtrl.create(ShareSchoolInfo,data);
     schoolTeacherlistModal.present();
    return false;
  }

  approveSchool(data){
  console.log(11);
     console.log(data[0]['school_name']);
     console.log(this.user_data[0]['name']);
     this.schoolService.approveSchool(data[0]['school_name'], this.user_data[0]['name']).then((res) => {        
     if(res['status'] == 'Success')
     {             
        return true; 
    }
    }, (err) =>{
      console.log(err);
    });
  }

  
}
