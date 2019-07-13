import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { StudentService } from '../../services/student.service';
import * as config  from '../../assets/json/config';
import { StudentIcon } from '../studentIcon/studentIcon';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';

@Component({	
  templateUrl: 'editStudent.html',
  providers: [StudentService]
})
export class EditStudent { 

  item:any = {};
  class_studentlist:any = []; 
  iconImageBase = '';
  imageName = '';

  constructor(public navCtrl: NavController, private studentService: StudentService, public alertCtrl: AlertController, private toastCtrl: ToastController,public navParams: NavParams, public modalCtrl: ModalController) {

  

  }

  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
    this.item.classname = window.localStorage.getItem('classname');

    this.iconImageBase = config.data.image_url+"assets/"+"student/";
   
    this.item.id = this.navParams.get("id");
    this.item.name = this.navParams.get("name");
    this.item.imageName = this.navParams.get("imageName");

    if(this.item.imageName)
    {     
      this.item.imagePath = this.iconImageBase + this.item.imageName;
    }
    else
    {
      this.item.imageName = '15_6_c_6.png';
      this.item.imagePath = this.iconImageBase + this.item.imageName;
      
    }
  }

  updateStudent()
  {
  
    this.studentService.updateStudent(this.item).then((resp) => {

      if(resp['status'] == "Success"){

        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
        this.navCtrl.push(TeacherClasstab,{currentTab:'',classid: this.item.class_id, classname: this.item.classname});       

        let alert = this.alertCtrl.create({
          message: 'Student has been updated successfully',
          buttons: [{
              text: 'ok',
              handler: () => {
                alert.dismiss();
                return false;
              }
          }]
        });
        alert.present();    
        

      } else if(resp['error_code']==1){

        let alert = this.alertCtrl.create({
            message: resp['error_msg'],
            buttons: [{
              text: 'ok',
              handler: () => {
                alert.dismiss();
                return false;
              }
            }]
          });
          alert.present();

         
      }else{
      
        let alert = this.alertCtrl.create({
          message: 'Name already exist.',
          buttons: [{
            text: 'ok',
            handler: () => {
              alert.dismiss();
              return false;
            }
          }]
        });
        alert.present();
      }

    }, (err) => {
        console.log(err);
    });

  }

  /*Find the list of icon to choose for student */ 
  classIconPopup()
  {   
    let studentIcon = this.modalCtrl.create(StudentIcon);
    studentIcon.onDidDismiss(data => {

      if(data && data['selectedIcon'])
      {
        this.item.imageName = data.selectedIcon;
        this.item.imagePath = this.iconImageBase + this.item.imageName;
      }
    
    });
    studentIcon.present();
  }
  
}
