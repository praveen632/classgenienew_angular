import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentProfile  } from '../studentProfile/studentProfile';
import { StudentSchoolStory  } from '../studentschoolStory/studentschoolStory';

@Component({ 
  templateUrl: 'studentAccountSetting.html',  
})

export class StudentAccountSetting { 

    constructor(public navCtrl: NavController) {
      
  }
 parentProfile()
{
 
  this.navCtrl.push(StudentProfile);
}
  

  
  schoolStory()
  {
  this.navCtrl.push(StudentSchoolStory);

  }
}
