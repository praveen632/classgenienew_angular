import { Component } from '@angular/core';
import { NavController,NavParams ,ViewController } from 'ionic-angular';
import { StudentstoryService } from '../../services/studentStory.service';
import * as config  from '../../assets/json/config';
import { ParentDashboard } from '../parentdashboard/parentdashboard';


@Component({ 
  templateUrl: 'studentclassList.html',
  providers: [StudentstoryService]
})
export class StudentClassListPage {
  member_no:any ='';
  items:any = [];
  kidstory:any ='';

  constructor(public navCtrl: NavController , params: NavParams,private studentstoryService: StudentstoryService,private view: ViewController) {
     this.member_no = params.get('member_no');
     this.kidstory = params.get('kidstory');
  }

 ngOnInit()

 {
  this.classlist();
}


classlist(){
   this.studentstoryService.getlist(this.member_no).then((res) => {
   this.items = res['student_list'];
    }, (err) => {
console.log(err);
    });
   }

showclassList_student(student_no,parent_no){
  this.view.dismiss({student_no:student_no,parent_no:parent_no});
}


}
