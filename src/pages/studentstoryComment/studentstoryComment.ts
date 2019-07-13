import { Component, OnInit } from '@angular/core';
import { NavController , AlertController, NavParams, PopoverController,ModalController } from 'ionic-angular';
import { StudentstoryService } from '../../services/studentStory.service';
import * as config  from '../../assets/json/config';
import { ClassStoryPopovermenuPage  } from '../teacherClassstoryPopovermenu/teacherClassstoryPopovermenu';
import { ClassstoryLikesPage } from '../classstoryLikes/classstoryLikes';

@Component({
  templateUrl: 'studentstoryComment.html',
  providers: [StudentstoryService]
})
export class StudentstoryCommentPage {
	member_no:any = '';
  classid:any = '';
  loggedInUser:any = {};
	storyid:any = '';
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
  classstoryLike = ClassstoryLikesPage;
  student_no:any = '';

  constructor(public navCtrl: NavController , private studentstoryService: StudentstoryService ,public alertCtrl: AlertController ,public navParams: NavParams ,public popoverCtrl: PopoverController,public modalCtrl: ModalController) {
    this.imagePath = config.data.file_url + config.data.image_path;
    this.storyid = this.navParams.get("storyid");
    this.classid = this.navParams.get('classid');
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];
this.member_no = this.loggedInUser.member_no;
var userImage = this.loggedInUser.image;
this.student_no = window.localStorage.getItem('studentNo');

	  
	  
  }


  ngOnInit() {
	  
	  this.loadComment();
  }

  loadComment(){
	  
  this.studentstoryService.loadComment(this.storyid,this.member_no).then((result) => {
      if(result['status'] == "Success"){
          var json =result['post'];
          this.image=json[0].image;
          this.postId=json[0].id;
          this.like =json[0].likes;
          this.like_status=json[0].status;
          this.teacher_ac_no=json[0].teacher_ac_no;
          this.message=json[0].message;
          this.ext=json[0].ext;
          this.items=result['comment_list'];
          this.username=json[0].username;
		  
		  if(this.username){
             this.teacher_name=this.username;
             this.items=result['comment_list'];
             this.commentCount=this.items.length;
             console.log("comment count"+this.commentCount);
          }else{
              this.teacher_name=result['teacher_name'][0]['name'];
              this.items=result['comment_list'];
              this.commentCount=this.items.length;
              this.teacher_image=result['teacher_name'][0]['image'];
              console.log("else comment count"+this.commentCount);
            } if(this.userImage=="" || this.userImage== undefined ){
                this.imgURI="img/chat_user.png";
   
              }else{
              this.imgURI=config.data.file_url+config.data.image_path+'profile_image/'+this.teacher_image;

              }
			 }
			 else{
				 alert('No post available now..');
			 }
			       
         }, (err) => {
      
    });
  }
 
  
  saveComment()
  {
	  this.storyid = this.storyid.toLocaleString();
      this.studentstoryService.saveComment(this.storyid,this.member_no,this.classid,this.item,this.student_no).then((res) => {


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
 
   }
   
}




