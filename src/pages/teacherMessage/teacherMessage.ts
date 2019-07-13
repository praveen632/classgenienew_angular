import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TeacherMassageServices } from '../../services/teacherMassage.service';
import { Chat } from '../chat/chat';
import { InviteparentsPage } from '../inviteparents/inviteparents';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  templateUrl: 'teacherMessage.html',
  providers: [TeacherMassageServices]
})
export class TeacherMessagePage  {
  class_id:any = '';
  user_list:any = {};
  no_of_users:any = '0';
  user_data = {};
  content = {};
  member_no:any ={};
  userList:any;
  details:any = [];
  online_user:any = [];
  offline_user:any = [];
  pending_user:any = [];
  notification_sender_ac_no:any = '';
  chat_notification:any = [];
  responseData:any = [];
parent_details:any = [];
parentDetails= [];
inviteParent = {};
classname = '';
  constructor(public navCtrl: NavController, private tescherMessage: TeacherMassageServices,  public altCtrl: AlertController) {
        var data =  window.localStorage.getItem('classid');
        this.class_id = data;
        var user_data = window.localStorage.getItem('loggedInUser');
        var datas = JSON.parse(user_data);
        this.member_no = datas[0]['member_no'];
       this.classname =  window.localStorage.getItem('classname');;
  }

  ngOnInit() {
       this.getStudentMessgList();    
  }

  getStudentMessgList(){
       this.tescherMessage.getStudentMessgList(this.class_id).then((result) => {    
		    if(result['status'] == "Failure"){		        
		       let alert = this.altCtrl.create({
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
		    }else{
              this.user_list = result['user_list'];
		      if(result['user_list'].length > 0){
                    this.chat_notifications(result['user_list']);
                     if(this.no_of_users < '2')
                     {
                        //$('div.massage-list #lnk_all_parents').hide();
                     }
                 }
                 else
                 {

                     //$('div.massage-list #no_of_users').html(0);
                     //$('div.massage-list #lnk_all_parents').show();
                 }              
		    }  
	    }, (err) => {
	      console.log(err);
	    });
  }

  chat_notifications(datas){    
     
    for(var i=0;i<datas.length;i++){
     if(typeof datas[i].parent_detail != 'undefined'){
		  this.notification_sender_ac_no += ','+datas[i].parent_ac_no;  
	 }
	 }
	 if(this.notification_sender_ac_no != ''){
        this.notification_sender_ac_no = this.notification_sender_ac_no.substring(1);
     }     
	 console.log(this.notification_sender_ac_no);
	 var chat_notification = {};
	 this.tescherMessage.teacherChat_notification(this.notification_sender_ac_no, this.member_no).then((result) => {     
     this.responseData = result;      
          
         for(var i=0;i<(this.responseData).length;i++){
            if(typeof  chat_notification[result[i].sender_ac_no] == 'undefined'){
                   this.chat_notification[result[i].sender_ac_no] = [];
              }
              if(typeof chat_notification[result[i].sender_ac_no][result[i].receiver_class_id]  == 'undefined'){
                  this.chat_notification[result[i].sender_ac_no][result[i].receiver_class_id] = [];
              }
               this.chat_notification[result[i].sender_ac_no][result[i].receiver_class_id].push(result[i]);
         }             
		   
	    }, (err) => {
	      console.log(err);
	    });


   this.parentDetails = datas;   
   console.log(this.parentDetails);
   for(var i=0; i<datas.length; i++){
    if(typeof datas[i].parent_detail != 'undefined'){            
            this.no_of_users++;           
         }                     
   }   

}

setParentDetail(name,parent_ac_no){
    window.localStorage.setItem('message_account_name', JSON.stringify(name));
    window.localStorage.removeItem('class_id_chat');
    window.localStorage.setItem('member_no_chat', JSON.stringify(parent_ac_no));
    this.navCtrl.push(Chat);
}

inviteParents(){
  this.navCtrl.push(InviteparentsPage);
}


setParentDetailAll(){
  console.log(this.no_of_users);
  if(this.no_of_users == '0'){
       let alert = this.altCtrl.create({
                title: "<b>Classgenie</b>",
                message: "Sorry, No parent is connected!",
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
    window.localStorage.removeItem('member_no_chat');
    window.localStorage.setItem('class_id_chat', this.class_id);
    this.navCtrl.push(Chat);
  }
}

back()
  {
    this.navCtrl.push(Dashboard);
    window.localStorage.removeItem('classid');
    window.localStorage.removeItem('classname');
  }
  

}
