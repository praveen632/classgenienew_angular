import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParentsignupService } from '../../services/parentSignup.service';
import { ParentcodecheckPage } from '../parentcodecheck/parentcodecheck';
import { LoginPage } from '../login/login';
@Component({ 
  templateUrl: 'parentsignup.html',
  providers: [ParentsignupService]
})

export class ParentSignupPage implements OnInit {  

 item = {};
 parentcodecheck = ParentcodecheckPage;
 login = LoginPage;
  constructor(public navCtrl: NavController , private parentsignupService: ParentsignupService) {

  }

  ngOnInit() {
  }




parentrsignup() 

 { 
   this.parentsignupService.saveParentsignup(this.item).then((result) => {
     if (result['status'] == "Success")
       { 
       window.localStorage.setItem('loggedInUser',JSON.stringify(result['user_list']));
           var jsonresponse = result['user_list'];
              for(var i=0;i<jsonresponse.length;i++){
          if(jsonresponse[0].type ==3){
          this.navCtrl.push(this.parentcodecheck);
           }
          }
       }
        else if(result['status'] == "failure")
           {
             alert('Email id already exists');

           }



    }, (err) => {
      console.log(err);
    });
    
  }

}
