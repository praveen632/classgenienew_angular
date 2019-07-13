import { Component } from '@angular/core';
import { NavController,AlertController, PopoverController, ViewController } from 'ionic-angular';
import { TeacherClassroomService } from '../../services/teacherClassroom.service';
import * as config  from '../../assets/json/config';

@Component({
  templateUrl: 'skillIcon.html',
  providers: [TeacherClassroomService]
})
export class SkillIcon { 
  iconList:any = [];
  iconImageBase = '';

  constructor(public navCtrl: NavController, private teacherClassroomService: TeacherClassroomService, public viewCtrl: ViewController) {

  }

ngOnInit()
{
	this.iconImageBase = config.data.image_url+"assets/"+"skill/";
	this.skillIconPopup();
}
  /*Find the list of icon to choose for skill */ 
  skillIconPopup()
  {  	
  	this.teacherClassroomService.skillIconPopup().then((res) => {
		
		this.iconList = res['user_list'];

  	}, (err) => {
      console.log(err);
    });
  }

  setImage(imageName)
  { 
    this.viewCtrl.dismiss({'selectedIcon':imageName});
  }
}
