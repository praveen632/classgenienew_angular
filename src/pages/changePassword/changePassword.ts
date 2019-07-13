import { Component } from '@angular/core';
import { ChangePasswordService } from '../../services/changePassword.service';
import { NavController,AlertController } from 'ionic-angular';



@Component({
  templateUrl: 'changePassword.html',
  providers: [ChangePasswordService]
})
export class ChangePassword{ 

  item = {};
  memberno:any = '';

	        constructor(public navCtrl: NavController,
          public changePasswordService: ChangePasswordService,public alertCtrl: AlertController) {

            var data =  window.localStorage.getItem('loggedInUser');
            var teacher_list = JSON.parse(data);
            this.memberno = teacher_list[0]['member_no'];

          }
         
         
         
          savepassword(){
            this.changePasswordService.updatepassword(this.item,this.memberno).then((res) => {
            if(res['status'] == "Success"){
              let alert = this.alertCtrl.create({
                  title: 'Password Updated Sucessfully',
                  buttons: ['Ok']
                });
                alert.present();
                  this.navCtrl.pop();
                  
               }

    }, (err) => {
      console.log(err);
    });

   
          }
 } 

 