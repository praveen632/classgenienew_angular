import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { KidsListServices } from '../../services/kidsList.service';
import { ParentcodecheckPage } from '../parentcodecheck/parentcodecheck';
import { StudentPerformInParent } from '../studentPerformInParent/studentPerformInParent';
import { ParentSetting } from '../parentSetting/parentSetting';

@Component({
  
  templateUrl: 'yourkids.html',
  providers: [KidsListServices]
})
export class YourkidsPage {
check_parent_code = ParentcodecheckPage;
kidsList: Array<any> = [];
loggedInUser:any = {};

  constructor(public navCtrl: NavController, private kidslistService: KidsListServices, public popoverCtrl: PopoverController) {}

ngOnInit()
  {
  	this.loggedInUser = window.localStorage.getItem('loggedInUser');
  	this.loggedInUser = JSON.parse(this.loggedInUser);
  	this.loggedInUser = this.loggedInUser[0];
    this.getKids();
  	
  } 
 
getKids(){
    this.kidslistService.getKidsList(this.loggedInUser.member_no).then((res) => {

  		this.kidsList = res['student_list'] ;
  		console.log(this.kidsList); 

  	}, (err) => {
      console.log(err);
    });
}

openPopover(myEvent) {
    let popover = this.popoverCtrl.create(ParentSetting);
    popover.present({
      ev: myEvent
    });
}

openPerform(stu_no, stu_name)
{
  this.navCtrl.push(StudentPerformInParent,{stu_no:stu_no,stu_name:stu_name});

}




}
