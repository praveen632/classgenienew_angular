import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentSignupService } from '../../services/studentSignup.service';
import { StudentTab } from '../studentTab/studentTab';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-studentSignupPage',
  templateUrl: 'studentSignupPage.html',
   providers: [StudentSignupService] 
})
export class StudentSignupPage implements OnInit{
 item = {};
 login = LoginPage;
  constructor(public navCtrl: NavController, public altCtrl: AlertController, private studentService: StudentSignupService) {

  }
  
  ngOnInit() {
  }

  saveStudent() {    
   let student_data = window.localStorage.getItem('student_list');
   let stu_data = JSON.parse(student_data);
     this.studentService.signupSave(this.item, stu_data).then((result) => {    
    if(result['status'] == "Failure"){    
        let alert = this.altCtrl.create({
              message: result['comments'],
              buttons: [{
                text: 'ok',
                handler: () => {
                  alert.dismiss();
                  return false;
                }
              }]

            });
            alert.present();            
    }else if(result['status'] == "Success"){     
       if(result['user_list'][0]['type']==4)
         { 
             window.localStorage.setItem('loggedInUser', JSON.stringify(result['user_list']));
             this.navCtrl.push(StudentTab);            
         }
    }else if(result['error_code'] == 1){
         let alert = this.altCtrl.create({
              message: result['error_msg'],
              buttons: [{
                text: 'ok',
                handler: () => {
                  alert.dismiss();
                  return false;
                }
              }]

            });
            alert.present();
    }else{
       let alert = this.altCtrl.create({
              message: 'Server issue while saving,Please try after some time',
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
