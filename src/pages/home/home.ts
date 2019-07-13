import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage } from '../login/login';

import { StudentSignup } from '../studentSignup/studentSignup';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab2Root = StudentSignup;
  login = LoginPage;
  constructor(public navCtrl: NavController) {

  }

}
