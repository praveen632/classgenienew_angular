import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { ParentMassageServices } from '../../services/partentMassage.service';
import { Chat } from '../chat/chat';
import { ParentSetting } from '../parentSetting/parentSetting';

@Component({
  templateUrl: 'parentMessage.html',
  providers: [ParentMassageServices]
})
export class ParentMessagePage {class_id:any = '';
user_list:any = {};
member_no:any ={};
classname = '';
notification_sender_ac_no:any = '';
data:any;
responseData:any = [];
chat_notification:any = [];
no_of_users:any = '0';
count_teacher_info:any = '0';
parentDetails:any = [];
constructor(public navCtrl: NavController, private parentMessage: ParentMassageServices, public altCtrl: AlertController, public popoverCtrl: PopoverController) {
      var data =  window.localStorage.getItem('classid');
      this.class_id = data;
      var user_data = window.localStorage.getItem('loggedInUser');
      var datas = JSON.parse(user_data);
      this.member_no = datas[0]['member_no'];
     this.classname =  window.localStorage.getItem('classname');;
}

ngOnInit() {
     this.getTeacherchatlist();    
}

getTeacherchatlist(){
  this.parentMessage.getTeacherMessgList(this.member_no).then((result) => {  
    this.data = result;
     if((this.data).length > 0){
               this.fillParentMessageHtml(result);
               
            }
            else
            {

              // $('div#chat_list').show();
              // $('div#chat_list').html('<center>No teacher is connected!</center>');
            }         

 }, (err) => {
   console.log(err);
 });
}



fillParentMessageHtml(datas){
  this.parentDetails = datas;
  // console.log(888888);

    //console.log(this.parentDetails[0]['teacher_info']['name']); 
    

   for(var i=0;i<datas.length;i++){
    if(typeof datas[i].teacher_info != 'undefined'){
     this.notification_sender_ac_no += ','+datas[i].class_info.teacher_ac_no;  
  }
  }
  if(this.notification_sender_ac_no != ''){
       this.notification_sender_ac_no = this.notification_sender_ac_no.substring(1);
    }
    console.log(this.notification_sender_ac_no); 
    var chat_notification = {};
    this.parentMessage.teacherChat_notification(this.notification_sender_ac_no, this.member_no).then((result) => {     
      this.responseData = result;      
           
          for(var i=0;i<(this.responseData).length;i++){
             if(typeof  chat_notification[result[i].sender_ac_no] == 'undefined'){
                    this.chat_notification[result[i].sender_ac_no] = [];
               }              
               if(typeof chat_notification[result[i].receiver_class_id]  == 'undefined'){
                   this.chat_notification[result[i].receiver_class_id] = [];
               }
              
                  this.chat_notification[result[i].sender_ac_no].push(result[i]);
          }
          console.log(result);        
       }, (err) => {
         console.log(err);
       });

       for(var i=0; i<datas.length; i++){
        if(typeof datas[i].teacher_info != 'undefined'){            
                this.no_of_users++; 
                this.count_teacher_info++;
                if(typeof this.chat_notification[datas[i].class_info.teacher_ac_no] == 'undefined' || typeof this.chat_notification[datas[i].class_info.teacher_ac_no][datas[i].class_id] == 'undefined'){
                  datas[i].teacher_info.read_messages = 0;
                }
                else
                {
                  datas[i].teacher_info.read_messages = this.chat_notification[datas[i].class_info.teacher_ac_no][datas[i].class_id].length;
                }                           
             }                                 
       }          
}

setTeacherDetail(name,teacher_ac_no,class_id){
  window.localStorage.removeItem('classid');
  window.localStorage.setItem('classid', class_id);
  window.localStorage.setItem('message_account_name', JSON.stringify(name));
  window.localStorage.removeItem('class_id_chat');
  window.localStorage.setItem('member_no_chat', JSON.stringify(teacher_ac_no));
  this.navCtrl.push(Chat);
  
}

openPopover(myEvent) {
    let popover = this.popoverCtrl.create(ParentSetting);
    popover.present({
      ev: myEvent
    });
  }

}
