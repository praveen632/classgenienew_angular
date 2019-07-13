import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParentsignupService } from '../../services/parentSignup.service';
import { ClassStory } from '../classStory/classStory';
import { YourkidsPage } from '../yourkids/yourkids';
import { ToastController } from 'ionic-angular';



@Component({ 
  templateUrl: 'parentcodecheck.html',
  providers: [ParentsignupService]
 
})

export class ParentcodecheckPage {  

 item = {};
 classstory = ClassStory;
 yourkids = YourkidsPage;
 loggedInUser:any = {};

  constructor(public navCtrl: NavController , private parentsignupService: ParentsignupService, private toastCtrl: ToastController) {

  }

ngOnInit()
  {
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];

   }

  checkparentcode() 

 { 
   this.parentsignupService.checkParentcodecheck(this.item,this.loggedInUser.member_no).then((result) => {
     if(result['status'] == "Success")
        {  if(result['student_list'].length<2){
            this.navCtrl.push(this.classstory); 
        }
       else {
            this.navCtrl.push(this.yourkids);
               let toast = this.toastCtrl.create({
                message: 'student successfully added..',
                duration: 2000,
                position: 'Show Middle'
              });
              toast.present(); 
            }
            
        }
       
       
    }, (err) => {
      console.log(err);
    });
    
  }

}
