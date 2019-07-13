import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StudentSignup } from '../studentSignup/studentSignup';
import { ParentSignupPage } from '../parentsignup/parentsignup';
import { TeacherSignupPage } from '../teachersignup/teachersignup';
import { SchoolLeaderSignupPage } from '../schoolleadersignup/schoolleadersignup';




@Component({ 
  templateUrl: 'signup.html'
})
export class SignupPage {

login = LoginPage;
studentsignup = StudentSignup;
parentsignup =  ParentSignupPage;
teachersignup = TeacherSignupPage;
schoolleadersignup = SchoolLeaderSignupPage;

 
  constructor(public navCtrl: NavController) {

  }

}
