import { Component } from '@angular/core';
import { TeacherMessagePage } from '../teacherMessage/teacherMessage';
import { TeacherClassroomPage } from '../teacherClassroom/teacherClassroom';
import { TeacherClassstoryPage } from '../teacherClassstory/teacherClassstory';
import { NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'teacherClasstab.html'
})
export class TeacherClasstab {

  public classid;
  public classname;
  public currentTab;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TeacherClassroomPage;
  tab2Root: any = TeacherMessagePage;
  tab3Root: any = TeacherClassstoryPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.classid = navParams.get("classid");
    this.classname = navParams.get("classname");
    this.currentTab = navParams.get("currentTab");
    window.localStorage.setItem('classid',this.classid);
    window.localStorage.setItem('classname',this.classname);
    if(this.currentTab)
    {
      window.localStorage.setItem('currentTab',this.currentTab);
    }   

  }

}
