import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { PendingStories } from '../pendingStories/pendingStories';
import { EditClass } from '../editClass/editClass';
import { EditSkills } from '../editSkills/editSkills';
import { InviteparentsPage } from '../inviteparents/inviteparents';
import { EditStudent  } from '../editStudent/editStudent';




@Component({
  templateUrl: 'teacherClassroomPopovermenu.html'
})

export class ClassroomPopovermenuPage {

pendingstories = PendingStories;
editskills = EditSkills;
inviteparent = InviteparentsPage;
editstudent = EditStudent;

editclass = EditClass;
constructor(public viewCtrl: ViewController,public navCtrl: NavController ) {}


close() {
    this.viewCtrl.dismiss();
  }


editSkills(){
 this.viewCtrl.dismiss({'editSkill':1});
}

editClass(){
   
   this.navCtrl.push(this.editclass);
   this.viewCtrl.dismiss();

}

editStudent(){

  this.navCtrl.push(this.editstudent);

}

inviteParents(){

  this.navCtrl.push(this.inviteparent);
 
}

pendingStories(){
  this.navCtrl.push(this.pendingstories);
}

}

