import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NavController,AlertController,ModalController, NavParams, ActionSheetController } from 'ionic-angular';
import { ParentDashboard  } from '../parentdashboard/parentdashboard';
import { ChangePassword } from '../changePassword/changePassword';
import { Camera } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions  } from '@ionic-native/media-capture';
import { FileTransfer } from '@ionic-native/file-transfer';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';
import { TeacherNotification } from '../teacherNotifications/teacherNotifications';

@Component({
  templateUrl: 'parentProfile.html',
  providers: [ProfileService]
})

@Component({
  templateUrl: 'parentProfile.html',
   providers: [ProfileService]
})

export class ParentProfile {
                schoolid:any = '';
                item:any= {};
                memberno:any = '';
                name:any = '';
                email:any = '';
                postid:any = ''; 
                profileid: any = '';
                userlist = {};
                url = {};
                type = {};
                imgURI:any;
                selection='0';
                images:any;    
 
    constructor(public navCtrl: NavController,
         public profileService: ProfileService,
         public nav:NavController,
         private altCtrl: AlertController,
         public modalCtrl: ModalController, 
         public actionSheetCtrl: ActionSheetController,
         private camera: Camera ,
         public alertCtrl: AlertController,
         private fileTransfer: FileTransfer ,
         private mediaCapture: MediaCapture)
       {
        this.profileid = window.localStorage.getItem('profileid');
          var data =  window.localStorage.getItem('loggedInUser');
          var teacher_list = JSON.parse(data);
          this.userlist = teacher_list;
          this.memberno = teacher_list[0]['member_no'];
          this.schoolid = window.localStorage.getItem('schoolid');
          this.item.name = teacher_list[0]['name'];
          this.item.email = teacher_list[0]['email'];       
          this.type = teacher_list[0]['type'];
          
          // this.images ="<img src='"+config.data.image_url+"assets/"+"profile_image/"+teacher_list[0]['image']+"?"+func.global_function.randomNumber()+"'>";        
          this.imgURI = config.data.image_url+"assets/"+"profile_image/"+teacher_list[0]['image']+"?"+func.global_function.randomNumber();
              
               
          }     




    editProfile(){
  
  

     this.profileService.editProfile(this.item,this.memberno).then((result) =>{     
      if(result['status'] == "Success"){
       this.userlist[0]['name'] = result['student_name'][0]['name'];
       window.localStorage.setItem('loggedInUser', JSON.stringify(this.userlist));
        let alert = this.altCtrl.create({
              message: 'profile Updated Successfully',
              buttons: [{
                text: 'ok',
                handler: () => {
                  this.nav.push(ParentDashboard);
                }
              }]

            });
            alert.present();            
    }  else if(result['status'] == "Failure"){     
         
    }
    }, (err) => {
      console.log(err);
    });
  } 

      

                       /**    *Function for logOut parent Account **/ 

       logoutParent(){
       window.localStorage.clear();
       window.location.reload();  
      }
                      

                       /**    *Function for Change Password Parent Account **/ 

       changePassword(){
        let profileModal = this.modalCtrl.create(ChangePassword, { userId: 8675309 });
        profileModal.present();
      }


         /**    *Function for update image **/ 
              

              showPicturePopup(){
                let actionSheet = this.actionSheetCtrl.create({
                  title: 'Modify your album',
                  buttons: [
                    {
                      text: 'Take Photo',
                      role: 'Take Photo',
                      handler: () => {
                        this.takePhoto();                       
                      }
                    },{
                      text: 'Choose Photo',
                      handler: () => {
                        this.choosePhoto();
                      }
                    },{
                      text: 'Close',
                      role: 'Close',
                      handler: () => {
                        console.log('Close clicked');
                      }
                    }
                  ]
                });
                actionSheet.present();
              }
         takePhoto(){ 
                this.selection='1';
                let options =  {
                  quality: 100,
                  destinationType: this.camera.DestinationType.FILE_URI,
                  encodingType: this.camera.EncodingType.JPEG,
                  mediaType: this.camera.MediaType.PICTURE,
                  sourceType:this.camera.PictureSourceType.CAMERA,
                  allowEdit:true,
                  saveToPhotoAlbum: true,
                  targetWidth: 300,
                  targetHeight: 300
                }
                this.camera.getPicture(options).then((imageData) => {
                 this.imgURI = imageData;
                  //this.sendMessageInit(1, imageData);
                }, (err) => {
                   console.log(err);
                 });
              }

           choosePhoto(){  
                this.selection='2';
                let options =  {
                  quality: 100,
                  destinationType: this.camera.DestinationType.FILE_URI,
                  encodingType: this.camera.EncodingType.JPEG,
                  mediaType: this.camera.MediaType.PICTURE,
                  sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
                  allowEdit:true,
                  saveToPhotoAlbum: false,
                  targetWidth: 300,
                  targetHeight: 300
                }
                this.camera.getPicture(options).then((imageData) => {     
                  this.imgURI = imageData;

                }, (err) => {
                   console.log(err);
                 });
              }

          save(){              
                if(this.selection == '0')
                {
                 console.log(this.selection);
                  console.log(this.item);
                  console.log(this.memberno);
                this.profileService.editProfile(this.item,this.memberno).then((result) =>{     
                  if(result['status'] == "Success"){
       
       this.userlist[0]['name'] = result['student_name'][0]['name'];
       window.localStorage.setItem('loggedInUser', JSON.stringify(this.userlist));
        let alert = this.altCtrl.create({
              message: 'profile Updated Successfully',
              buttons: [{
                text: 'ok',
                handler: () => {
                  this.nav.push(ParentDashboard);
                }
              }]

            });
            alert.present();            
    }  else if(result['status'] == "Failure"){     
         
    }
    }, (err) => {
      console.log(err);
    });

       }
                else
                {
                             
                  let fileTransfer = this.fileTransfer.create();
                  let options = {
                    fileKey:"upload_file",
                    fileName:"1.jpg",
                    mimeType: "image/jpeg",
                    chunkedMode:false,
                    params:{
                      "name":this.item['name'],
                      "member_no":this.memberno,
                                            
                      }
                    }

                 fileTransfer.upload(this.imgURI,config.data.api_url+':'+config.data.port+'/student/updateimage?token='+config.data.api_token, options).then((data) => {
                          var datas = JSON.parse(data.response);                        
                          var image_name = datas.img_name;
                          var name = datas.name[0].name;                         
                          this.userlist[0]['image'] = image_name;
                          this.userlist[0]['name'] = name;
                          window.localStorage.setItem('loggedInUser', JSON.stringify(this.userlist));  
                          let alert = this.altCtrl.create({
                            message: 'profile Updated Successfully',
                            buttons: [{
                              text: 'ok',
                              handler: () => {
                                this.nav.push(ParentDashboard);
                              }
                            }]
              
                          });
                          alert.present();                        
                       }, (err) => {
                     console.log(err);
                  });

                  


                }
              }

                notificationsetting()
              {
                this.navCtrl.push(TeacherNotification);
              }    
      }



   
 


