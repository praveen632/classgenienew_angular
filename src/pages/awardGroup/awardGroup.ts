import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController,Events } from 'ionic-angular';
import { GiveGroupfeedback } from '../giveGroupfeedback/giveGroupfeedback';
import * as config  from '../../assets/json/config';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import { GroupPopoverMenu } from '../groupPopoverMenu/groupPopoverMenu';



@Component({
 
  templateUrl: 'awardGroup.html',
  providers: [TeacherClassroomService]
})
export class   AwardGroup  {
 
  givefeedback = GiveGroupfeedback;
  item:any = {};
  imageBasePath:any = '';
  studentListing:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private teacherClassroomService: TeacherClassroomService,public popoverCtrl: PopoverController,public events: Events) {

  }
  
  ngOnInit()
  {
  	this.item.class_id = this.navParams.get("class_id");
  	this.item.groupId = this.navParams.get("groupId");
    this.item.groupName = this.navParams.get("groupName");
    this.imageBasePath = config.data.image_url
    this.getGroupDetail();
   
    
  }
  getGroupDetail()
  {	
  	this.teacherClassroomService.getGroupDetail(this.item.class_id, this.item.groupId).then((resp) => {

  	if(resp['status'] == "Success")
  	{
  	  this.studentListing = resp['student_info']; 
  	}

  	}, (err) => {
  	console.log(err);
  	});	
	
  }
  
  openFeedBackOption()
  {
    this.navCtrl.push(GiveGroupfeedback,{'class_id':this.item.class_id,'groupId':this.item.groupId,'groupName':this.item.groupName});
  }

  openPopover(myEvent)
  {
    let dataParam = {
      class_id:this.item.class_id,
      groupId:this.item.groupId,
      groupName:this.item.groupName
    }
    let popover = this.popoverCtrl.create(GroupPopoverMenu,dataParam);
    popover.present({
      ev: myEvent
    });

    this.events.subscribe('reloadDetails',() => {
      //call methods to refresh content
    });
  }

  

}
