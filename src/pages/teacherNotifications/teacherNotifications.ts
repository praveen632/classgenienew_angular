import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NavController,AlertController } from 'ionic-angular';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';

@Component({
  templateUrl: 'teacherNotifications.html',
  providers: [ProfileService]
})


export class TeacherNotification{ 

  userlist:any =''; 
  memberno:any='';
  device_id:any= '';
  items:any =[];
  public isToggled: boolean;
  status:any ='';
  constructor(public navCtrl: NavController,public profileService: ProfileService,private altCtrl: AlertController)
		{
      var data =  window.localStorage.getItem('loggedInUser');
      var teacher_list = JSON.parse(data);
      this.userlist = teacher_list;
      this.memberno = teacher_list[0]['member_no'];
      this.device_id = window.localStorage.getItem('das_device_id');
      this.isToggled = false;
   
    }    
        
        ngOnInit() {
        this.loadNotification();
  
          }

                
          loadNotification()
          {
            this.profileService.loadteacher_notication(this.memberno,this.device_id).then((result) =>{     
              if(result['status'] == "Success")
              { 
              this.isToggled = result['device_list'][0].status == '1' ? true : false;
              } else {
                let alert = this.altCtrl.create({
                  title: 'Device ID is not Found',
                  buttons: ['Ok']
                });
                alert.present();

              }
            }, (err) => {
              console.log(err);
            });

          }
         
         
          notify() {
           
            if(this.isToggled)
            {
              this.status = '1';

            } else {
              this.status = '0';
            }
            this.profileService.notification_save(this.memberno,this.status).then((res) => {
            }   , (err) => {
              console.log(err);
            });
            
          }
        }
 

