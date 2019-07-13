import { Component, OnInit } from '@angular/core';
import { NavController , AlertController, NavParams, PopoverController } from 'ionic-angular';
import { SchoolStoryService } from '../../services/schoolStory.service';
import * as config  from '../../assets/json/config';
import { SchoolStoryupdatePopoverPage  } from '../teacherSchoolstoryupdatePopover/teacherSchoolstoryupdatePopover';


@Component({
  templateUrl: 'schoolstoryComment.html',
  providers: [SchoolStoryService]
})
export class SchoolstoryCommentPage {
	member_no:any = '';
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
  school_id :any = '';
  pathUrl:any = '';
	
	
	
	
  constructor(public navCtrl: NavController,private schoolStoryService: SchoolStoryService,public alertCtrl: AlertController ,public navParams: NavParams ,public popoverCtrl: PopoverController) {
	  
    this.school_id = window.localStorage.getItem('school_id');
    this.storyid = this.navParams.get("storyid");
	  this.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.loggedInUser = JSON.parse(this.loggedInUser);
    this.loggedInUser = this.loggedInUser[0];
    this.member_no = this.loggedInUser.member_no;
    var userImage = this.loggedInUser.image;
	  
	  
  }


  ngOnInit() {
	  
	  this.loadComment();
  }

  loadComment(){


	  this.schoolStoryService.loadComment(this.storyid,this.member_no).then((result) => {
      if(result['status'] == "Success"){
          var json =result['post'];
          
          this.image=json[0]['image'];
          this.postId=json[0]['id'];
          this.like =json[0]['likes'];
          this.like_status=json[0]['status'];
          this.teacher_ac_no=json[0]['teacher_ac_no'];
          this.message=json[0]['message'];
       
          this.ext=json[0]['ext'];
          this.pathUrl=this.imagePath+"school_stories/"+this.image;
       
          if(result['teacher_name'][0].hasOwnProperty('name') == true)
          {
            
          this.teacher_name=result['teacher_name'][0]['name']; 
          
          }
          this.items=result['comment_list'];
          this.commentCount=this.items['length'];


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
      this.schoolStoryService.saveComment(this.storyid,this.member_no,this.item,this.school_id).then((res) => {


                 if(res['status'] == "Success"){
					  let alert = this.alertCtrl.create({
                  title: 'Comment successfully...',
                  buttons: ['Ok']
                });
                  alert.present();
                  this.loadComment;
					 				                  
               }
               else if(res['error_code']==1){

                let alert = this.alertCtrl.create({
                  title: res['error_msg'],
                  buttons: ['Ok']
                });
                  alert.present();


               } else {

                let alert = this.alertCtrl.create({
                  title: 'Comment not send...',
                  buttons: ['Ok']
                });
                  alert.present();


               }


    }, (err) => {
      console.log(err);
    });
  }
   
   
   
   
    
   openCommentMenu(myEvent){
	   window.localStorage.setItem('postid', this.storyid);  
	   let popover = this.popoverCtrl.create(SchoolStoryupdatePopoverPage);
         popover.present({
          ev: myEvent
        });
	   
	  
   }

}




