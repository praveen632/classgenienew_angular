import { Component } from '@angular/core';
import { NavController,NavParams ,ViewController } from 'ionic-angular';
import { ParentClassstoryService } from '../../services/parentClassstory.service';
import * as config  from '../../assets/json/config';
import { ParentDashboard } from '../parentdashboard/parentdashboard';


@Component({ 
  templateUrl: 'parentkidList.html',
  providers: [ParentClassstoryService]
})
export class ParentkidListPage {
  member_no ='';
  items = [];
  kidstory ='';

  constructor(public navCtrl: NavController , params: NavParams,private parentclassstoryService: ParentClassstoryService,private view: ViewController) {
     this.member_no = params.get('member_no');
     this.kidstory = params.get('kidstory');
  }

 ngOnInit()

 {
  this.kidlist();
}


kidlist(){

this.parentclassstoryService.parent_kidlist(this.member_no).then((res) => {
      this.items = res['student_list'];
  
}, (err) => {
console.log(err);
});
}

showkidStory(student_no){
  this.view.dismiss(
    {student_no:student_no}
)

}


}
