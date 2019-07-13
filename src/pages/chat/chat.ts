import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ModalController, LoadingController, ActionSheetController, Content } from 'ionic-angular';
import { ChatService } from '../../services/chat.service';
import * as config  from '../../assets/json/config';
import { SmileyIcon } from '../smileyIcon/smileyIcon';
import * as func from '../../app/function';
import Moment from 'moment';
import { MomentModule } from 'angular2-moment';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions  } from '@ionic-native/media-capture';

@Component({
  templateUrl: 'chat.html',
  providers: [ChatService]
})

export class Chat {
  @ViewChild(Content) content: Content;
  loading:any;
  class_ids = '';
  sender_ac_no = '';
  sender_name = {};
  member_no_msg = '';
  Name:any = '';
  parent_id = '';
  teacher_id ='';
  class_id = '';
  class_id_chat ='';
  responseData:any;
  receiver_name = '';
  receiver_ac_no = '';
  page_number:any = '';
  user_details = [];
  paginations = {};
  item = {};
  callByLoadMore:any = 0;
  output:any;
  imageName= '';
  iconImageBase = '';
  imagePath = '';
  atimeago:any;
  source = '0';
  imgData:any;
   constructor(public navCtrl: NavController,  public altCtrl: AlertController, private chatservicess: ChatService, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, private camera: Camera ,public alertCtrl: AlertController,private fileTransfer: FileTransfer ,private mediaCapture: MediaCapture) {
        this.class_ids =  window.localStorage.getItem('classid');
        var user_data = window.localStorage.getItem('loggedInUser');
        var datas = JSON.parse(user_data);
        this.sender_ac_no = datas[0]['member_no'];
        this.sender_name = datas[0]['name'];
        this.member_no_msg = window.localStorage.getItem('member_no_chat');
        this.class_id_chat = window.localStorage.getItem('class_id_chat');
        this.imageName = window.localStorage.getItem('classIcon');
        this.iconImageBase = config.data.image_url+"assets/"+"chaticon/";
        this.page_number = '1';    

  }
  
  
  ngOnInit() {
       this.getChatList();                   
  }

  ionViewDidEnter() {
    this.content.scrollToBottom();
  }

  inItLoader(){
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }


  
  getChatList(){   
    if(this.member_no_msg){   
      this.Name = 'Message';
      //Check teacher or parent login for one parent
      if((this.sender_ac_no).substr(0,1) == '2'){       
              this.parent_id = this.member_no_msg;
              this.teacher_id = this.sender_ac_no;
          }
          else
          {                       
             this.class_id =  this.class_ids;
             this.teacher_id = this.member_no_msg;
             this.parent_id = this.sender_ac_no;
          }
          this.updateNotification(this.sender_ac_no, this.member_no_msg, this.class_ids); //update notification
          this.inItLoader();
          this.loading.present();
          this.chatservicess.parentSearch(this.member_no_msg).then((result) => {    
          if(result['status'] == "Success"){            
             this.receiver_ac_no = this.member_no_msg;           
             this.receiver_name = result['user_list'][0]['name'];            
          }
          this.loadMessages({teacher_id:this.teacher_id, parent_id:this.parent_id});
        }, (err) => {
          console.log(err);
        });
    }else{ 
      //far all partent        
      this.Name = 'All Parents';
      this.teacher_id = this.sender_ac_no;
      var parent_ac_nos = '', receiver_names='', receiver_ac_nos='';
      this.inItLoader();
      this.loading.present();
      this.chatservicess.studentMsgList(this.class_id_chat).then((result) => {
        if(result['user_list'] != ''){ 
        var data = result['user_list'];         
        this.responseData = data;
                         
         for(var i=0;i<(this.responseData).length;i++){
            if(data[i].parent_ac_no != '0'){
                      parent_ac_nos += ','+data[i].parent_ac_no;
                      receiver_names += ','+data[i].parent_detail.name;
                      receiver_ac_nos += ','+data[i].parent_ac_no;
                   }  
         }
          if(parent_ac_nos != ''){
              this.parent_id = parent_ac_nos.substring(1);
              this.receiver_name = receiver_names.substring(1);
              this.receiver_ac_no = receiver_ac_nos.substring(1);
              this.loadMessages({teacher_id:this.sender_ac_no, parent_id:this.parent_id});
           }
           else
           {
              this.parent_id = '';
           }  
          }        
        }, (err) => {
          console.log(err);
        });
    }
  }

  loadMessages(resp){ 
    this.chatservicess.chatList(resp.teacher_id,resp.parent_id,this.class_ids,this.page_number).then((result) => {    
     
      //if(result['status'] == "Success"){
     
      this.loading.dismiss();
       var user_info = result['user_list'];        
       var data = result['user_list'];      
       if(data.length > 0){
        for(var i=0;i<data.length;i++){
         var message = '';
          if(data[i].message.indexOf('image#$#')>-1){
            var msg = data[i].message.split('#$#');
            message="<img src='"+config.data.image_url+"assets/"+"chat/"+msg[1]+"'>";
         }else if(data[i].message.indexOf('video#$#')>-1){
            var msg = data[i].message.split('#$#');
            var arr_video = msg[1].split('.');
            message='<video width="200" height="200" controls="controls"><source src="'+config.data.image_url+'assets/chat/'+msg[1]+'" type="video/'+arr_video[2]+'" /></video>';
           }else if(data[i].message.indexOf('emotion_image')>-1){
              var msg = data[i].message.split('~');
             message="<img src='"+config.data.image_url+"assets/"+"chaticon/"+msg[1]+"' class='bubble_icon'>";
         }else{
             message = data[i]['message'];
         }
            user_info[i]['message'] = message;            
         } 
         var create = data[0]['created_at'];
         if((this.user_details).length>0 && this.callByLoadMore==1)
         {
           for(let k=0;k<(user_info).length;k++)
           {
            (this.user_details).push(user_info[k]);
           }
          
         }
         else{
          this.user_details = user_info;
         }
                    
         this.callByLoadMore = 0;

         

        }else{
         this.paginations = false;
       }
       if(data.length > 9){
         this.paginations = false;
       }else{
        this.paginations = true;
       }            
   
  }, (err) => {
    console.log(err);
  });
  }

  //Execute on button click
  _sendMessage(){ 
    this.sendMessageInit(0, 0);
    this.item['message'] = '';  
  }

  /**
  * Send message
  */
  sendMessageInit(source, imgData){    
    if(this.member_no_msg){
      if(source == 1){  
            //source 1 means for image or video
            this.updateDBMedia(this.teacher_id, this.parent_id, imgData);
           }else if(source == 2){
            this.updateDBVedio(this.teacher_id, this.parent_id, imgData);
           }
          else
          {
            this.updateDB(this.teacher_id, this.parent_id, this.item['message']);
          }
    }else{
      if(source == 1){  
        this.updateDBMedia(this.teacher_id, this.parent_id, imgData);
      }
      else if(source == 2){
        this.updateDBVedio(this.teacher_id, this.parent_id, imgData);
       }
      else
      {
        this.updateDB(this.teacher_id, this.parent_id, this.item['message']);
      }
    }
    this.item['message'] = '';
  }

  
  updateDB(teacher_id, parent_id, message){
   var data = {
    teacher_id:teacher_id,
    parent_id:parent_id,
    message:message,
    sender_name:this.sender_name,
    receiver_name:this.receiver_name,
    sender_ac_no:this.sender_ac_no,
    receiver_ac_no:this.receiver_ac_no,
    class_id:this.class_ids,
    token : func.global_function.getToken(),
   }
   this.inItLoader();
   this.loading.present();
   this.chatservicess.updateDB(data).then((result) => { 
     if(result['message'] == 1){
    this.loading.dismiss();
    this.page_number = 1;   
        this.getChatList();
     }    
  }, (err) => {
    console.log(err);
  });   
  }

  loadPrevious(){
    this.page_number++;
    this.callByLoadMore = 1;
    this.getChatList();
  }

  removeChat(id,receiver_ac_no,message){        
    this.chatservicess.removeChat(id,receiver_ac_no,message).then((result) => {   
      let alert = this.altCtrl.create({
        message: "Massege has been deleted",
        buttons: [{
          text: 'ok',
          handler: (event) => {
            this.getChatList();
          }
        }]
      });
      alert.present();
    }, (err) => {
      console.log(err);
    }); 

  }

  showEmotionList(){
    let smileyIcon = this.modalCtrl.create(SmileyIcon);
    smileyIcon.onDidDismiss(data => {
      if(data && data['selectedIcon'])
      {
        this.imageName = data.selectedIcon;
        this.item['message'] = 'emotion_image~'+this.imageName;
        this.sendMessageInit(0,0);
      }
      
    });   
     smileyIcon.present();    
  }

  updateNotification(sender_ac_no, member_no, class_id){   
    this.chatservicess.updateChat(sender_ac_no,member_no,class_id).then((result) => {        
      return true;      
    }, (err) => {
      console.log(err);
    }); 
  }

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
      this.sendMessageInit(1, imageData);
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
      this.sendMessageInit(1, imageData);
    }, (err) => {
       console.log(err);
     });
  }


  chooseVideo(){   
    let options: CaptureVideoOptions= { limit: 1, duration: 30 };
    this.mediaCapture.captureVideo(options).then((Videodata) =>{
      let file_path = Videodata[0].fullPath;
      this.sendMessageInit(2, file_path);
     }, (err) => {
    console.log(err);
  });
  }

  updateDBMedia(teacher_id, parent_id, imgData){    
    let fileTransfer = this.fileTransfer.create();
    let options = {
      fileKey:"upload_file",
      fileName:"1.jpg",
      mimeType: "image/jpeg",
      chunkedMode:false,
      params:{        
        "teacher_id":teacher_id,
        "parent_id":parent_id,
        "sender_name":this.sender_name,
        "receiver_name":this.receiver_name,
        "sender_ac_no":this.sender_ac_no,
        "receiver_ac_no":this.receiver_ac_no,
        "class_id":this.class_ids,        
      }
   }  
   fileTransfer.upload(imgData,config.data.api_url+':'+config.data.port+'/chats/chat_media?token='+func.global_function.getToken(), options).then((data) => {
    this.page_number = 1;    
    this.getChatList();
         }, (err) => {
       console.log(err);
    });
  }


  updateDBVedio(teacher_id, parent_id, imgData){
   var s = imgData;
    var fields = s.split( '/' );
   var nameOfVideo = fields.slice(-1)[0];
   let fileTransfer = this.fileTransfer.create();
    let options = {
      fileKey:"upload_file",
      fileName:nameOfVideo,
      mimeType: "video/3gp",
      chunkedMode:false,
      params:{
        "teacher_id":teacher_id,
        "parent_id":parent_id,
        "sender_name":this.sender_name,
        "receiver_name":this.receiver_name,
        "sender_ac_no":this.sender_ac_no,
        "receiver_ac_no":this.receiver_ac_no,
        "class_id":this.class_ids, 
      } 
   }

   fileTransfer.upload(imgData,config.data.api_url+':'+config.data.port+'/chats/chat_media?token='+func.global_function.getToken(), options).then((data) => {
    this.page_number = 1;
    this.getChatList();
         }, (err) => {
       console.log(err);
    });
  }

}
