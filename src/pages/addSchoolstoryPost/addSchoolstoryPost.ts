import { Component, OnInit } from '@angular/core';
import { NavController , AlertController,ActionSheetController  } from 'ionic-angular';
import { SchoolStoryService } from '../../services/schoolStory.service';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions  } from '@ionic-native/media-capture';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';



@Component({
  templateUrl: 'addSchoolstoryPost.html',
  providers: [SchoolStoryService]
})
export class AddSchoolstoryPostPage {
 
 item = {};
 school_id :any ='';
 member_no:any = '';
 loggedInUser:any = {};
 selection="0";
 imgURI:any ='';
 videoPath:any ='';
 
  constructor(public navCtrl: NavController ,public actionSheetCtrl: ActionSheetController,private camera: Camera, private SchoolstoryService: SchoolStoryService ,public alertCtrl: AlertController,private fileTransfer: FileTransfer ,private mediaCapture: MediaCapture) {
	  
this.school_id = window.localStorage.getItem('school_id');
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];
this.member_no = this.loggedInUser.member_no;
  
  }


  ngOnInit() {
  }

  showPopup(){

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
          text: 'Video',
          role: 'Video',
          handler: () => {
           this.chooseVideo();
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
    this.selection="1";
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
      this.imgURI =imageData;
       
    }, (err) => {
       console.log(err);
     });
  }



  choosePhoto(){
    this.selection="2";
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
      this.imgURI =imageData;
    }, (err) => {
       console.log(err);
     });
  }


  chooseVideo(){
    this.selection="3";
    let options: CaptureVideoOptions= { limit: 1, duration: 30 };
    this.mediaCapture.captureVideo(options).then((Videodata) =>{
      console.log(Videodata);
      let file_path = Videodata[0].fullPath;
      this.videoPath = file_path;

  }, (err) => {
    console.log(err);
  });
  }


 

savePost(imageData:any) 

 { 

if(this.selection=='0'){
   this.SchoolstoryService.addschoolstoryPost(this.item,this.member_no,this.school_id).then((res) => {


      if(res['status'] == "Success"){
              let alert = this.alertCtrl.create({
                  title: 'School Story added successfully',
                  buttons: ['Ok']
                });
                alert.present();
                 this.navCtrl.pop();
               }

    }, (err) => {
      console.log(err);
    });
  } else if(this.selection=="3"){

    console.log(this.videoPath);
    var s = this.videoPath;
    var fields = s.split( '/' );
   var nameOfVideo = fields.slice(-1)[0];
    console.log(this.item['message']);

    let fileTransfer = this.fileTransfer.create();
    let options = {
      fileKey:"upload_file",
      fileName:nameOfVideo,
      mimeType: "video/3gp",
      chunkedMode:false,
      params:{
         "message":this.item['message'],
         "school_id":this.school_id,
         "teacher_ac_no":this.member_no,
         "sender_ac_no":this.member_no
      }
   }
   console.log(options);
   fileTransfer.upload(this.videoPath,config.data.api_url+':'+config.data.port+'/schoolstory/post?token='+func.global_function.getToken(), options).then((data) => {
            let alert = this.alertCtrl.create({
            title: 'School Story added successfully',
            buttons: ['Ok']
             });
           alert.present();
           this.navCtrl.pop();
         }, (err) => {
       console.log(err);
    });
  }  else {
    console.log(this.imgURI);
    console.log(this.item['message']);

    let fileTransfer = this.fileTransfer.create();
    let options = {
      fileKey:"upload_file",
      fileName:"1.jpg",
      mimeType: "image/jpeg",
      chunkedMode:false,
      params:{
         "message":this.item['message'],
         "school_id":this.school_id,
         "teacher_ac_no":this.member_no,
         "sender_ac_no":this.member_no
      }
   }
   console.log(options);
   fileTransfer.upload(this.imgURI,config.data.api_url+':'+config.data.port+'/schoolstory/post?token='+func.global_function.getToken(), options).then((data) => {
            let alert = this.alertCtrl.create({
            title: 'School Story added successfully',
            buttons: ['Ok']
             });
           alert.present();
           this.navCtrl.pop();
         }, (err) => {
       console.log(err);
    });
   
  }
 
}
}
