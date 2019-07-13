import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service';
import { AlertController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';

@Component({
  
  templateUrl: 'inviteparents.html',
  providers: [TeacherClassStoryServices]

})
export class InviteparentsPage {
class_studentlist: Array<any> = [];
classid:any = '';
totalstudent:any = '';
items: Array<any> = [];
connect :any = '';
username:any = '';
useremail:any = '';
memberno:any = '';
dashboard = Dashboard;


 constructor(public navCtrl: NavController , private teacherclassstoryService: TeacherClassStoryServices , public alertCtrl: AlertController) {

     var data =  window.localStorage.getItem('loggedInUser');
      var student_list = JSON.parse(data);
      this.username = student_list[0]['username'];
      this.useremail = student_list[0]['email'];
      this.memberno = student_list[0]['member_no'];
      
  }


ngOnInit()
  {
  	
    this.getClassStudentList();
  	
  }


  getClassStudentList(){
  this.classid = window.localStorage.getItem('classid');
    this.teacherclassstoryService.getclassStudentlist(this.classid).then((res) => {
    this.totalstudent = res['class_details']['student_list'].length;
    this.class_studentlist = res['class_details']['student_list'];
    this.items = this.class_studentlist;
      	 		

  	}, (err) => {
      console.log(err);
    });
}
 

 inviteParent(id,student_no,parent_no,name){

 let alert = this.alertCtrl.create({
      title: 'Classgenie',
      subTitle: '<h4>Enter '+name+"'s "+'Parent Email address<h4>',
      inputs: [
        {
          name: 'email',
          placeholder: 'parent email address',
          type:'email'
        }
       ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Invite',
          handler: inviteData => {
          if(inviteData.email != ''){ 
                     
         this.teacherclassstoryService.inviteTeacherParent(inviteData.email, name, student_no, parent_no ).then((result) => {         
          if(result['status'] == "Failure"){    
             let alert = this.alertCtrl.create({
                message: result['comments'],
                buttons: [{
                  text: 'ok',
                  handler: () => {
                    alert.dismiss();
                    return false;
                  }
                }]
              });
              alert.present();             
          }else if(result['mail_flage'] == "teacher"){
                   let alert = this.alertCtrl.create({
                message: 'This email id already exists as a teacher id',
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
                message: 'invitation sent successfully  to '+name+"'s"+' parent',
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
          }else{
             let alert = this.alertCtrl.create({
                message: 'Email Should not empty!!',
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
          }
        }
      ]
    });

alert.present();  
console.log(parent_no,name);



 }


 generateInvitationPdf()

 {
 this.classid = window.localStorage.getItem('classid');
    this.teacherclassstoryService.pdfgenerate(this.memberno,this.classid).then((res) => {

      if(res['status'] == "Success"){

      let alert = this.alertCtrl.create({
       title: 'Class Genie',
       subTitle: 'Great We just emailed the parent invites for class'+name+ " to " + this.useremail +' .',
        buttons: ['OK']
      });
     
       alert.present();
      this.inviteAllParents();
      

    }
    


    }, (err) => {
      console.log(err);
    });
  }



inviteAllParents()

 {
     this.classid = window.localStorage.getItem('classid');
    this.teacherclassstoryService.inviteAllParents(this.memberno,this.classid).then((res) => {


      if(res['status'] == "Success"){
        this.navCtrl.popToRoot();

        this.navCtrl.push(this.dashboard).then(() => {
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
});
      

    }

    }, (err) => {
      console.log(err);
    });
  }

}
