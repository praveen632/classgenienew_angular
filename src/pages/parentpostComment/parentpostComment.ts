import { Component, OnInit } from '@angular/core';
import { NavController , AlertController, NavParams} from 'ionic-angular';
import { ParentClassstoryService } from '../../services/parentClassstory.service';
import * as config  from '../../assets/json/config';



@Component({
  templateUrl: 'parentpostComment.html',
  providers: [ParentClassstoryService]
})
export class parentpostCommentPage {
  storyid:any ='';
  loggedInUser:any='';
  image:any = '';
	postId:any = '';
	like:any = '';
	like_status:any = '';
	teacher_ac_no:any = '';
	message:any = '';
  ext:any = '';
	items:any = '';
	username:any = '';
	imgURI:any = '';
	teacher_name :any = '';
	imagePath = config.data.file_url+config.data.image_path;
	item = {};
	userImage:any = '';
	commentCount :any = '';
  teacher_image :any = '';
  imagefolder:any='';
  path_url:any='';
  classid:any='';
  classname:any='';
	
	
	
	
  constructor(public navCtrl: NavController,public alertCtrl: AlertController , private parentclassstoryService: ParentClassstoryService,public navParams: NavParams) {
	  
    this.storyid = this.navParams.get("storyid");
    this.classname = this.navParams.get("classname");
    this.classid = this.navParams.get("classid");
  
   
    this.loggedInUser = window.localStorage.getItem('loggedInUser');
   	this.loggedInUser = JSON.parse(this.loggedInUser);
   	this.loggedInUser = this.loggedInUser[0];

	  console.log(this.storyid);
  }


  ngOnInit() {
	  
	  this.loadComment();
  }

  getRandom(){
	
    return Math.random();
  }  
  

  loadComment(){
  	this.parentclassstoryService.loadcomment(this.storyid,this.loggedInUser.member_no).then((res) => {
      if(res['status'] == "Success"){
      var json =res['post'];
          
      this.image=json[0].image;
      this.postId=json[0].id;
      this.like =json[0].likes;

       
      this.like_status=json[0].status;
      this.teacher_ac_no=json[0].teacher_ac_no;
      this.message=json[0].message;
      
      this.ext=json[0].ext;
      this.teacher_image=res['teacher_name'][0]['image'];
      this.items=res['comment_list'];
      this.commentCount=this.items.length;
      this.username=json[0].username;

      if(this.username==""||this.username=="undefined"|| this.username=="null"){
        this.teacher_name=res['teacher_name'][0]['name'];
      }else{
         this.teacher_name=this.username;
      }
      
    }
    console.log(res);
    
         var value1= this.teacher_ac_no.toString();
         var res2 = value1.slice(0,1);    
          if(res2 == 4){
               this.imagefolder="student_stories";
          }else{
            this.imagefolder="class_stories";
          }
           this.path_url=this.imagePath+this.imagefolder+"/"+this.image+'?'+this.getRandom();

  }, (err) => {
    console.log(err);
  });

	 
  }
 
  
  saveComment()
  {

    this.storyid = this.storyid.toLocaleString();
      this.parentclassstoryService.saveComment(this.storyid,this.loggedInUser.member_no,this.classid,this.item).then((res) => {
        if(res['status'] == "Success"){
					  let alert = this.alertCtrl.create({
                  title: 'Comment successfully...',
                  buttons: ['Ok']
                });
                  alert.present();
                  this.loadComment;
					 				                  
               }

    }, (err) => {
      console.log(err);
    });
	    console.log(this.item);
  }
      

}




