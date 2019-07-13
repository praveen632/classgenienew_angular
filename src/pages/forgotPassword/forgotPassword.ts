import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotPasswordService } from '../../services/forgotpassword.service';
import { ToastController } from 'ionic-angular';

@Component({ 
  
  templateUrl: 'forgotPassword.html',
  providers: [ForgotPasswordService]
})
export class ForgotPasswordPage  {  
 
 item = {};
 
  constructor(public navCtrl: NavController, private forgotpasswordService: ForgotPasswordService, private toastCtrl: ToastController){
  
  }
 


  forgotPassword (){      
    this.forgotpasswordService.forgotPassword(this.item).then((result) => {
      if(result['status'] == "Success"){
              
       let toast = this.toastCtrl.create({
                message: 'Password reset link has been sent to your email id',
                duration: 2000,
                position: 'Show Middle'
              });
              toast.present(); 
      }
      else
      {
      let toast = this.toastCtrl.create({
                message: 'Username or Email address not registered',
                duration: 2000,
                position: 'Show Middle'
              });
              toast.present();
        
      }
    }, (err) => {
      
    });
  }

}