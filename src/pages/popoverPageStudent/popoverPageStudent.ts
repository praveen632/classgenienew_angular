import { Component, OnInit } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { StudentAccountSetting } from '../studentAccountSetting/studentAccountSetting';
import { StudentSchoolStory } from '../studentschoolStory/studentschoolStory';

@Component({ 
  templateUrl: 'popoverPageStudent.html',  
})

export class PopoverPageStudent {
    constructor(public navCtrl: NavController,  public viewCtrl: ViewController) {
      
  }


  
  accountSetting(){   
   
   this.navCtrl.push(StudentAccountSetting);
   this.viewCtrl.dismiss();
  } 

  close()
  {
    this.viewCtrl.dismiss();
  }

  schoolstory()
  
  {
    this.navCtrl.push(StudentSchoolStory);
    
  }

}
