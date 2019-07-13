import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import * as func from '../../app/function';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgotPassword/forgotPassword';
import { LoginService } from '../../services/login.service';
import { ToastController, AlertController } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';
import { ClassStory } from '../classStory/classStory';
import { StudentTab } from '../studentTab/studentTab';
import { TutorialSlide } from '../tutorialSlide/tutorialSlide';

@Component({ 
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {

  item = {};
  signup = SignupPage;
  forgotPassword = ForgotPasswordPage;
  dashboard = Dashboard;
  classStory = ClassStory;
  tutorialSlide = TutorialSlide;
  loggedInUser:any = null;
  loading:any;

  constructor(public navCtrl: NavController, private loginService: LoginService, private toastCtrl: ToastController, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  this.checkAlreadyLoggedIn();

  }

  checkAlreadyLoggedIn()
  {
    //check if user is already login then redirect to respective dashboard
   this.loggedInUser = window.localStorage.getItem('loggedInUser');
    if(this.loggedInUser)
    {
      this.loggedInUser = JSON.parse(this.loggedInUser);
      var userType = this.loggedInUser[0].type;   
      if(userType == 1 || userType == 2 || userType == 5)
      {
        this.navCtrl.setRoot(this.dashboard);
        this.navCtrl.push(this.dashboard);
      }
      else if(userType == 3)
      {
        this.navCtrl.setRoot(this.classStory);
        this.navCtrl.push(this.classStory);
      }
      else if(userType == 4)
      {
        this.navCtrl.setRoot(StudentTab);
        this.navCtrl.push(StudentTab);
      }
    }
  }

  doLogin() {
    this.loading = this.loadingCtrl.create({
		content:func.global_function.getLoader()
	});
  	this.loading.present();
    this.loginService.doLogin(this.item).then((res) => {
	  this.loading.dismiss();
      if (res['status'] == 'Success')
      { 
        var jsonSchool = res['school'];
        var jsonresponse = res['user_list'];        
        var deviceId  =  window.localStorage.getItem('das_device_id');       
        var skipdata =  window.localStorage.getItem('skipdta');       
        var token =  window.localStorage.getItem('app_token');

        window.localStorage.clear();
      
        window.localStorage.setItem('das_device_id', deviceId);       
        window.localStorage.setItem('skipdta',skipdata);
        window.localStorage.setItem('app_token',token);               
        window.localStorage.setItem('loggedInUser', JSON.stringify(jsonresponse));
        window.localStorage.setItem('schoolInfo', JSON.stringify(jsonSchool));

        //For Principal, vice principal and teacher
        if (jsonresponse[0].type == '2' || jsonresponse[0].type == '1' || jsonresponse[0].type == '5') {
            //if user has not skipped tutorial then show it
            if (skipdata == "" || skipdata == null) {
                this.navCtrl.push(this.tutorialSlide);

            } else {
              //load Principal, vice principal and teacher dashboard 
              this.navCtrl.setRoot(this.dashboard);              
              //this.navCtrl.push(this.dashboard);
            }

        } else if (jsonresponse[0].type == '3') { // For parent

            //if user has not skipped tutorial then show it
            if (skipdata == "" || skipdata == null) {
              this.navCtrl.push(this.tutorialSlide);

            } else {
              //load parent dashboard
              this.navCtrl.setRoot(this.classStory);               
              //this.navCtrl.push(this.classStory);
            }
        } else if (jsonresponse[0].type == '4') { //for student
          
            //if user has not skipped tutorial then show it
            if (skipdata == "" || skipdata == null) {
              this.navCtrl.push(this.tutorialSlide);

            } else {
                
                this.navCtrl.setRoot(StudentTab);
                //this.navCtrl.push(StudentTab); 
            }
            if (jsonresponse[0].status == '0') {
                
              let toast = this.toastCtrl.create({
                message: 'Account not verified',
                duration: 3000,
                position: 'center'
              });
              toast.present();

            }
        }

      }
      else
      {       
        let alert = this.alertCtrl.create({
          message: 'Please check username or password',
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
