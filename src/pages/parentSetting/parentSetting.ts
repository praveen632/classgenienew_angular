import { Component } from '@angular/core';
import { ParentProfile  } from '../parentProfile/parentProfile';
import { ViewController, NavController ,AlertController ,PopoverController} from 'ionic-angular';



@Component({ 
  templateUrl: 'parentSetting.html',
  
})
  
export class ParentSetting {
constructor(public viewCtrl: ViewController,
  public navCtrl: NavController,
  public alertCtrl: AlertController,
  public popoverCtrl: PopoverController) { }

  parentProfile(){
      this.navCtrl.push(ParentProfile);
}
  

}



