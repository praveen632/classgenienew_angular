import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeacherSignupService } from '../../services/teachersSignup.service';
import { Dashboard } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';

@Component({ 
   selector: 'page-teachersignup',
   templateUrl: 'teachersignup.html',
   providers: [TeacherSignupService]
})
export class TeacherSignupPage {  
 item = {};
 dashboard = Dashboard;
  login = LoginPage;
  constructor(public navCtrl: NavController , private teacherService: TeacherSignupService) {

  }

   
 ngOnInit() {
  }

   doTeachersignup() 

   {      
    this.teacherService.saveTeacher(this.item).then((result) => {
      if (result['status'] == "Success")
       { 
       window.localStorage.setItem('loggedInUser',JSON.stringify(result['user_list']));
             var jsonresponse = result['user_list'];
              for(var i=0;i<jsonresponse.length;i++){
             

             if(jsonresponse[0].type==2 )
            {

           this.navCtrl.push(this.dashboard);

            }
          }
       }

      else if(result['comments'] == "already exists!")
           {
             alert('Email id already exists');

           }
    }, (err) => {
      console.log(err);
    });
  }




  


}
