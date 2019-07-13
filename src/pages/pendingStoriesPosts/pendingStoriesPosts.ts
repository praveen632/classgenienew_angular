import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,PopoverController } from 'ionic-angular';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service';
import * as config  from '../../assets/json/config';
import { StudentStoryupdatePopoverPage } from '../studentstoryupdatePopover/studentstoryupdatePopover';


@Component({

 templateUrl: 'pendingStoriesPosts.html',
 providers: [TeacherClassStoryServices]

})
export class PendingStoriesPostsPage {

member_no:any = '';
classid:any = '';
loggedInUser:any = {};
pagecount=1;
public parent_ac_no;
public student_no;
showmsg:boolean= true;
items = [];
postCount :any = '';
randNO:any = '';
imagePath =config.data['file_url']+config.data['image_path'];
storyid:any ='';



  constructor(public navCtrl: NavController ,public navParams: NavParams, private teacherclassstoryService: TeacherClassStoryServices,public alertCtrl: AlertController,public popoverCtrl: PopoverController) {


  }


  


   ngOnInit()
   {
   	this.parent_ac_no = this.navParams.get("parent_ac_no");
    this.student_no = this.navParams.get("student_no");
    this.showmsg = true;
    this.getAllPostStories();
    this.randNO=this.getRandom();

    }




doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 10);
  }

  
  
getRandom(){
	
	return Math.random();
}  

getAllPostStories()

{

this.classid = window.localStorage.getItem('classid');
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];
this.member_no = this.loggedInUser.member_no;
if(this.parent_ac_no === undefined)
{
	
this.teacherclassstoryService.getAllclassPendingPosts(this.classid,this.pagecount).then((res) => {

  		if (res['status'] == "Success"){
         this.items=res['user_list'];
         
        } 		
  	}, (err) => {
      console.log(err);
    });
  
} else {

  	this.teacherclassstoryService.getAllclassPendingPosts_Student(this.classid,this.student_no,this.pagecount).then((res) => {
  		
   if (res['status'] == "Success"){
         this.items=res['user_list'];
      }    
	
  	}, (err) => {
      console.log(err);
   });

   }

  }


  approve_story(story_id){

    this.storyid = story_id.toLocaleString();
  	this.teacherclassstoryService.approvePost(this.storyid,this.member_no).then((res) => {
  		
      if (res['status'] == "Success"){
        let alert = this.alertCtrl.create({
          title: 'Story approved successfully',
          buttons: ['Ok']
        });
          alert.present();
                                  
       }
              
       }, (err) => {
         console.log(err);
      });
   


  }

  unapprove_story(story_id){

    this.storyid = story_id.toLocaleString();
  	this.teacherclassstoryService.disapprovePost(this.storyid,this.member_no).then((res) => {
  		
      if (res['status'] == "Success"){
        let alert = this.alertCtrl.create({
          title: 'Story Disapproved successfully',
          buttons: ['Ok']
        });
          alert.present();
                
                                
          }    
     
       }, (err) => {
         console.log(err);
      });
   
  }

  ionViewWillEnter() { 
    
    this.getAllPostStories(); 
}


openposteditMenu(storyid,myEvent){

  window.localStorage.setItem('postid', storyid);  
   let popover = this.popoverCtrl.create(StudentStoryupdatePopoverPage);
      popover.present({
       ev: myEvent
     });
       
}

}
