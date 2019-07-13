import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController  } from 'ionic-angular';
import { StudentSignupService } from '../../services/studentSignup.service';
import { AlertController } from 'ionic-angular';
import { StudentStory } from '../studentStory/studentStory';
import { StudentInvite } from '../studentInvite/studentInvite';

@Component({ 
  templateUrl: 'studentTab.html', 
  
})

export class StudentTab  { 
      tab1Root = StudentInvite;
      tab2Root = StudentStory;        
	     
	  constructor(public navCtrl: NavController) {
		         
  }
  }