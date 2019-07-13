import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { StudentService } from '../../services/student.service';
import * as config  from '../../assets/json/config';

@Component({	
  templateUrl: 'addStudent.html',
  providers: [StudentService]
})
export class AddStudent { 

  item:any = {};
  class_studentlist:any = [];
  imageBasePath = '';
  constructor(public navCtrl: NavController, private studentService: StudentService, public alertCtrl: AlertController, private toastCtrl: ToastController) {

  

  }

  ngOnInit()
  {
  	this.item.class_id = window.localStorage.getItem('classid');
    this.imageBasePath = config.data.image_url;
    this.studentlisting();
  }

  addStudent()
  {
  
    this.studentService.addStudent(this.item).then((resp) => {

      if(resp['status'] == "Success"){

        var responseJson =resp['user_list'];
        var jsonObj = JSON.stringify(responseJson);    
        window.localStorage.setItem('studentdata',jsonObj); 

        this.item.name = '';        
        //load again the student list after adding to reflect it in listing      
        this.studentlisting(); 

        let toast = this.toastCtrl.create({
          message: 'Student has been added successfully',
          duration: 3000,
          position: 'top'
        });
        toast.present();    
        

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

  studentlisting()
  {
    this.studentService.studentlisting(this.item.class_id).then((resp) => {
      
        if(resp['status'] == "Success")
        {
          this.class_studentlist =resp['class_details']['student_list']; 
        }

    }, (err) => {
        console.log(err);
    });
     
  }

}
