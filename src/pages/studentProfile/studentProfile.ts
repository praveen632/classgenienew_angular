import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NavController,AlertController, ModalController, ActionSheetController} from 'ionic-angular';
import { ChangePassword } from '../changePassword/changePassword';
import { TeacherNotification } from '../teacherNotifications/teacherNotifications';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';
import { Camera } from '@ionic-native/camera';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions  } from '@ionic-native/media-capture';
import { FileTransfer } from '@ionic-native/file-transfer';
import { StudentInvite } from '../studentInvite/studentInvite';

@Component({
  templateUrl: 'studentProfile.html',
  providers: [ProfileService]
})

export class StudentProfile { 
                 schoolid:any = '';
                item:any= {};
                memberno:any = '';
                username:any = '';
                email:any = '';
                postid:any = ''; 
                profileid: any = ''; 
                userlist = {};
                url = {};
                type = {};
                imgURI:any;           
    constructor(public navCtrl: NavController,
         public profileService: ProfileService,
         public nav:NavController,
         private altCtrl: AlertController,
         public alertCtrl: AlertController,
         public modalCtrl: ModalController,
         private camera: Camera,        
         private fileTransfer: FileTransfer,
         private mediaCapture: MediaCapture,
         public actionSheetCtrl: ActionSheetController) {
          this.profileid = window.localStorage.getItem('profileid');
          var data =  window.localStorage.getItem('loggedInUser');
          var teacher_list = JSON.parse(data);
          this.userlist = teacher_list;
          this.memberno = teacher_list[0]['member_no'];
          this.schoolid = window.localStorage.getItem('schoolid');
          this.username = teacher_list[0]['username'];
          this.item.email = teacher_list[0]['email'];       
          this.type = teacher_list[0]['type'];
          this.imgURI = config.data.image_url+"assets/"+"profile_image/"+teacher_list[0]['image']+"?"+func.global_function.randomNumber();
         
          }   
        
                          /**    *Function for Change Password Student Account **/ 

       changePassword(){
        let profileModal = this.modalCtrl.create(ChangePassword, { userId: 8675309 });
        profileModal.present();
      }
        
         
                           /**    *Function for logOut Student Account **/ 

       logoutStudent(){
       window.localStorage.clear();
       window.location.reload();  
      }


         
                       /**    *Function for delete Account **/ 

      deleteAccount(){  
          this.profileService.deleteStudent(this.memberno).then((result) =>{     
               if(result['status'] == "Success"){
                 let alert = this.altCtrl.create({
                  message:'deleted Successfully',
                 buttons: [{
                  text: 'ok',
                  handler: () => {
              
                   window.localStorage.clear();
                  window.location.reload();
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

       notificationsetting()
              {
                this.navCtrl.push(TeacherNotification);
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
                  let fileTransfer = this.fileTransfer.create();
                  let options = {
                    fileKey:"upload_file",
                    fileName:"1.jpg",
                    mimeType: "image/jpeg",
                    chunkedMode:false,
                    params:{                  
                      "member_no":this.memberno,                                            
                      }
                    }

                 fileTransfer.upload(this.imgURI,config.data.api_url+':'+config.data.port+'/student/updateimage?token='+config.data.api_token, options).then((data) => {
                          var datas = JSON.parse(data.response);                        
                          var image_name = datas.img_name;                                                  
                          this.userlist[0]['image'] = image_name;                         
                          window.localStorage.setItem('loggedInUser', JSON.stringify(this.userlist));  
                          let alert = this.altCtrl.create({
                            message: 'profile Updated Successfully',
                            buttons: [{
                              text: 'ok',
                              handler: () => {
                                this.nav.push(StudentInvite);
                              }
                            }]
              
                          });
                          alert.present();                        
                       }, (err) => {
                     console.log(err);
                  });             
              }  
      }



   
 


