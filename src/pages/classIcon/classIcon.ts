import { Component } from '@angular/core';
import { NavController,AlertController, PopoverController, ViewController } from 'ionic-angular';
import { DashboardService } from '../../services/dashboard.service';
import * as config  from '../../assets/json/config';
import { AddNewClass } from '../addNewClass/addNewClass';

@Component({
  templateUrl: 'classIcon.html',
  providers: [DashboardService]
})
export class ClassIcon { 
  iconList:any = [];
  iconImageBase = '';

  constructor(public navCtrl: NavController, private dashboardService: DashboardService, public viewCtrl: ViewController) {

  }

ngOnInit()
{
	this.iconImageBase = config.data.image_url+"assets/"+"class/";
	this.classIconPopup();
}
  /*Find the list of icon to choose for class */ 
  classIconPopup()
  {  	
  	this.dashboardService.classIconPopup().then((res) => {
		
		this.iconList = res['user_list'];

  	}, (err) => {
      console.log(err);
    });
  }

  setImage(imageName)
  { 
    this.viewCtrl.dismiss({'selectedIcon':imageName}); 	
  	window.localStorage.setItem('classIcon',imageName);  	
    //this.navCtrl.push(AddNewClass);
    //this.navCtrl.setRoot(AddNewClass);
  }
}
