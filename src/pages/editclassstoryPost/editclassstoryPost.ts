import { Component, OnInit } from '@angular/core';
import { NavController , AlertController , ActionSheetController} from 'ionic-angular';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service'; 
import { TeacherClassstoryPostsPage  } from '../teacherClassStoryPosts/teacherClassStoryPosts';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions  } from '@ionic-native/media-capture';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';


@Component({
  templateUrl: 'editclassstoryPost.html',
  providers: [TeacherClassStoryServices]
})
export class EditclassstoryPostPage {
 classid:any = '';
 item = {};
 memberno:any = '';
 username:any = '';
 teacherclassstorypost = TeacherClassstoryPostsPage;
 selection="0";
 imgURI:any ='';
 videoPath:any ='';
 parent_ac_no :any ='';
 student_no :any ='';
 postid:any = '';
 message:any='';
 image:any='';
 imagePath :any ='';
  constructor(public navCtrl: NavController ,public actionSheetCtrl: ActionSheetController,private camera: Camera ,private teacherclassstoryService: TeacherClassStoryServices ,public alertCtrl: AlertController,private fileTransfer: FileTransfer ,private mediaCapture: MediaCapture ) {
	  this.postid = window.localStorage.getItem('postid');
	  var data =  window.localStorage.getItem('loggedInUser');
      var teacher_list = JSON.parse(data);
      this.memberno = teacher_list[0]['member_no'];
	  this.classid = window.localStorage.getItem('classid');
	  this.username = teacher_list[0]['name'];
	  this.imagePath = config.data.file_url + config.data.image_path;
	  
	  
  }


  ngOnInit() {
	  
	  this.getPostdata();
  }


  getPostdata(){
    this.postid = this.postid.toLocaleString();
    this.teacherclassstoryService.loadPost(this.postid,this.memberno).then((res) => {
         if(res['status'] == "Success"){
          this.message = res['post'][0]['message'];
          this.image=res['post'][0]['image'];
          this.imgURI=this.imagePath+"class_stories/"+this.image;
          }
 
     }, (err) => {
       console.log(err);
     });
     
     
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




savePost() 
 { 
  if(this.selection =='0'){
   this.postid = this.postid.toLocaleString();
    this.teacherclassstoryService.updateClassstoryPost(this.postid,this.message,this.memberno).then((res) => {


      if(res['status'] == "Success"){
              let alert = this.alertCtrl.create({
                  title: 'Story Updated successfully',
                  buttons: ['Ok']
                });
                alert.present();
                  this.navCtrl.push(this.teacherclassstorypost);
                  
               }

    }, (err) => {
      console.log(err);
    });
  }  else if(this.selection =='3'){
    this.postid = this.postid.toLocaleString();
    console.log(this.videoPath);
    var s = this.videoPath;
    var fields = s.split( '/' );
   var nameOfVideo = fields.slice(-1)[0];
    

    let fileTransfer = this.fileTransfer.create();
    let options = {
      fileKey:"upload_file",
      fileName:nameOfVideo,
      mimeType: "video/3gp",
      chunkedMode:false,
      params:{
         "message":this.message,
         "id":this.postid,
         "sender_ac_no":this.memberno
      }
 
   }
   console.log(options);
   fileTransfer.upload(this.videoPath,config.data.api_url+':'+config.data.port+'/upload/update?token='+func.global_function.getToken(), options).then((data) => {
            let alert = this.alertCtrl.create({
            title: 'Class Story updated successfully',
            buttons: ['Ok']
             });
           alert.present();
           this.navCtrl.push(this.teacherclassstorypost);
         }, (err) => {
       console.log(err);
    });
} else{
  console.log(this.imgURI);
    
    this.postid = this.postid.toLocaleString();
    let fileTransfer = this.fileTransfer.create();
    let options = {
      fileKey:"upload_file",
      fileName:"1.jpg",
      mimeType: "image/jpeg",
      chunkedMode:false,
      params:{
        "message":this.message,
        "id":this.postid,
        "sender_ac_no":this.memberno
      }
   }
   console.log(options);
   fileTransfer.upload(this.imgURI,config.data.api_url+':'+config.data.port+'/upload/update?token='+func.global_function.getToken(), options).then((data) => {
            let alert = this.alertCtrl.create({
            title: 'Class Story Updated successfully',
            buttons: ['Ok']
             });
           alert.present();
           this.navCtrl.push(this.teacherclassstorypost);
         }, (err) => {
       console.log(err);
    });

}

}

}
