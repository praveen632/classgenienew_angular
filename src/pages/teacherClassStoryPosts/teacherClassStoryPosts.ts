import { Component } from '@angular/core';
import { NavController, NavParams ,PopoverController,ModalController,LoadingController} from 'ionic-angular';
import { TeacherClassStoryServices } from '../../services/teacherClassstory.service';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';
import { AddclassstoryPostPage  } from '../addclassstoryPost/addclassstoryPost';
import { ClassstoryCommentPage  } from '../classstoryComment/classstoryComment';
import { ClassStoryPopovermenuPage  } from '../teacherClassstoryPopovermenu/teacherClassstoryPopovermenu';
import { ClassstoryLikesPage } from '../classstoryLikes/classstoryLikes';


@Component({

 templateUrl: 'teacherClassStoryPosts.html',
 providers: [TeacherClassStoryServices]

})
export class TeacherClassstoryPostsPage {

member_no:any = '';
classid:any = '';
loggedInUser:any = {};
nameofsearch:any ='';
pagecount=1;
public parent_ac_no;
public student_no;
public concept = [];
showmsg:boolean= true;
items = [];
searchTerm: string = '';
postCount :any = '';
addclasspost = AddclassstoryPostPage;
classstorycomment = ClassstoryCommentPage;
storyid:any = '';
toggle = {};
likes :any = '';
like :any = '';
imagePath ='';
loading:any;

classstoryLike = ClassstoryLikesPage;

  constructor(public navCtrl: NavController ,public navParams: NavParams, private teacherclassstoryService: TeacherClassStoryServices,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {
    this.imagePath = config.data.file_url + config.data.image_path;

 }


  
 initLoading()
  {
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }


   ngOnInit()
   {
   	this.parent_ac_no = this.navParams.get("parent_ac_no");
    this.student_no = this.navParams.get("student_no");
    
    window.localStorage.setItem('parent_ac_no',this.parent_ac_no);
    window.localStorage.setItem('student_no',this.student_no);

    this.showmsg = true;
    this.getAllPostStories();

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
  this.initLoading();
  this.loading.present();

this.teacherclassstoryService.getAllclassPosts(this.classid,this.member_no,this.pagecount).then((res) => {
 
  this.loading.dismiss();

  		if (res['status'] == "Success"){
         this.items=res['posts'];
         var list  = this.items;
                
            this.postCount=res['posts']['length'];
               for(var i=0;i<this.postCount;i++){               
                 var userImage;
                 userImage = res['posts'][i]['teacher_name']['image'];
                 if(userImage==''|| userImage==undefined){
                      this.items[i]['imgURI']="/assets/imgs/chat_user.png?"+this.getRandom();
                 }else{
                  this.items[i]['imgURI']=config.data.file_url+config.data.image_path+'profile_image'+userImage+'?'+this.getRandom();

                 }
                 if(res['posts'][i]['status']){
                    for(var j=0;j<res['posts'][i]['status'].length;j++){
                       if(res['posts'][i]['status'][j]['member_no'] == this.member_no){
                           if(res['posts'][i]['status'][j]['status'] == '0')
                           {
                               this.items[i]['liked'] = 0;
                           }else
                             this.items[i]['liked'] = 1;
                       }
                       else
                       {
                          this.items[i]['liked'] = 0;
                       }
                    }
                 }
                 else
                 {
                    this.items[i]['liked'] = 0;
                 }
         }

         console.log(this.items);

       } 		
  	}, (err) => {
      console.log(err);
    });
  




} else {


  	this.teacherclassstoryService.getAllclassPosts_student(this.classid,this.parent_ac_no,this.member_no,this.student_no).then((res) => {
  	
   if (res['status'] == "Success"){
         this.items=res['posts'];
         var list  = this.items;
            this.postCount=res['posts']['length'];
               for(var i=0;i<this.postCount;i++){               
                 var userImage;
                 userImage = res['posts'][i]['teacher_name']['image'];
                 if(userImage==''|| userImage==undefined){
                      this.items[i]['imgURI']="/assets/imgs/chat_user.png";
                 }else{
                  this.items[i]['imgURI']=config.data.file_url+config.data.image_path+'profile_image'+userImage;

                 }
                 if(res['posts'][i]['status']){
                    for(var j=0;j<res['posts'][i]['status'].length;j++){
                       if(res['posts'][i]['status'][j]['member_no'] == this.member_no){
                           if(res['posts'][i]['status'][j]['status'] == '0')
                               this.items[i]['liked'] = 0;
                           else
                             this.items[i]['liked'] = 1;
                       }
                       else
                       {
                          this.items[i]['liked'] = 0;
                       }
                    }
                 }
                 else
                 {
                    this.items[i]['liked'] = 0;
                 }
         }

         console.log(this.items);

       }    
	
  	}, (err) => {
      console.log(err);
    });

}

}

addpost(){
	
	this.navCtrl.push(this.addclasspost);
}



submit_like(data,id)
{
if (data =='1')
{
  this.like = "+1";
  this.storyid =id.toLocaleString();
  console.log(id);
  this.teacherclassstoryService.likePost(this.storyid,this.classid,this.like,this.member_no).then((res) => {
    if(res['status'] == "Success"){
          this.getAllPostStories();    
      }

     })


} else {
  
this.like = "-1";

  this.storyid = id.toLocaleString();
  this.teacherclassstoryService.likePost(this.storyid,this.classid,this.like,this.member_no).then((res) => {
    if(res['status'] == "Success"){
      this.getAllPostStories();
            }

           })
}
	


}



openCommentPage(id){
	
	this.navCtrl.push(this.classstorycomment,{
      storyid: id,
     
      });

}



openposteditMenu(storyid,myEvent){

     window.localStorage.setItem('postid', storyid);  
      let popover = this.popoverCtrl.create(ClassStoryPopovermenuPage);
         popover.present({
          ev: myEvent
        });
          
   }


openLikePage(id){

let profileModal = this.modalCtrl.create(this.classstoryLike,{storyid:id,classid:this.classid});
   profileModal.present();
 }



 ionViewDidLoad() { 
        this.getAllPostsearchStories(); 
    }


getAllPostsearchStories()

{
this.showmsg = true;
this.classid = window.localStorage.getItem('classid');
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];
this.member_no = this.loggedInUser.member_no;
if(this.parent_ac_no === undefined)
{
  
 
this.teacherclassstoryService.getAllclasssearchPosts(this.classid,this.member_no,this.pagecount,this.searchTerm).then((res) => {
 
      if (res['status'] == "Success"){

      this.items=res['posts'];
         var list  = this.items;
                
            this.postCount=res['posts']['length'];
               for(var i=0;i<this.postCount;i++){               
                 var userImage;
                 userImage = res['posts'][i]['teacher_name']['image'];
                 if(userImage==''|| userImage=="undefined"){
                      this.items[i]['imgURI']="/assets/imgs/chat_user.png?"+this.getRandom();
                 }else{
                  this.items[i]['imgURI']=config.data.file_url+config.data.image_path+'profile_image/'+userImage+'?'+this.getRandom();

                 }
                 if(res['posts'][i]['status']){
                    for(var j=0;j<res['posts'][i]['status'].length;j++){
                       if(res['posts'][i]['status'][j]['member_no'] == this.member_no){
                           if(res['posts'][i]['status'][j]['status'] == '0')
                               this.items[i]['liked'] = 0;
                           else
                             this.items[i]['liked'] = 1;
                       }
                       else
                       {
                          this.items[i]['liked'] = 0;
                       }
                    }
                 }
                 else
                 {
                    this.items[i]['liked'] = 0;
                 }
         }

         console.log(this.items);
        

       }  
       else {

        this.showmsg = false;
        this.items =[];

        
       }  
    }, (err) => {
      console.log(err);
    });
  
} else {

   
}

}

video(videoId) {
  return  this.imagePath + 'class_stories/' + videoId;
};


removeDollerChar(string) {
  return string.replace('$', '?');
}


}
