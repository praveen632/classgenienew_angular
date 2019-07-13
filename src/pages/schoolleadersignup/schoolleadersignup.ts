import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchoolleaderService } from '../../services/schoolLeaderSignup.service';
import { Dashboard } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';
@Component({ 
  templateUrl: 'schoolleadersignup.html',
  providers: [SchoolleaderService]
})
export class SchoolLeaderSignupPage {  
 item = {};
 login = LoginPage;
 dashboard = Dashboard;
  constructor(public navCtrl: NavController , private schooleaderService: SchoolleaderService) {

  }


ngOnInit() {
  }


   doSchoolleadersignup() 

   { 
   this.schooleaderService.saveSchoolleader(this.item).then((result) => {
     if (result['status'] == "Success")
       { 
       window.localStorage.setItem('loggedInUser',JSON.stringify(result['user_list']));
             var jsonresponse = result['user_list'];
              for(var i=0;i<jsonresponse.length;i++){
             

             if(jsonresponse[0].type==1 || jsonresponse[0].type==5)
            {

            this.navCtrl.push(this.dashboard);

            }
          }
       }
    }, (err) => {
      console.log(err);
    });
    
  }


}
