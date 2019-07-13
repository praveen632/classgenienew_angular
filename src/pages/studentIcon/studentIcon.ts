import { Component } from '@angular/core';
import { NavController,AlertController, PopoverController, ViewController } from 'ionic-angular';
import { StudentService } from '../../services/student.service';
import * as config  from '../../assets/json/config';

@Component({
  templateUrl: 'studentIcon.html',
  providers: [StudentService]
})
export class StudentIcon { 
  iconList:any = [];
  iconImageBase = '';

  constructor(public navCtrl: NavController, private studentService: StudentService, public viewCtrl: ViewController) {

  }

ngOnInit()
{
	this.iconImageBase = config.data.image_url+"assets/"+"student/";
	this.studentIconPopup();
}
  /*Find the list of icon to choose for student */ 
  studentIconPopup()
  {  	
  	this.studentService.studentIconPopup().then((res) => {
		
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
