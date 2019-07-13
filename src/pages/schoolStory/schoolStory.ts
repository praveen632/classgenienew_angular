import { Component } from '@angular/core';
import { NavController,PopoverController,ModalController,LoadingController } from 'ionic-angular';
import { SchoolStoryPopovermenuPage  } from '../teacherSchoolstoryPopovermenu/teacherSchoolstoryPopovermenu';
import { SchoolStoryService } from '../../services/schoolStory.service';
import { AddSchoolstoryPostPage  } from '../addSchoolstoryPost/addSchoolstoryPost';
import { SchoolStoryupdatePopoverPage  } from '../teacherSchoolstoryupdatePopover/teacherSchoolstoryupdatePopover';
import { SchoolstoryCommentPage  } from '../schoolstoryComment/schoolstoryComment';
import { SchoolstoryLikesPage } from '../schoolstoryLikes/schoolstoryLikes';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';
@Component({
  templateUrl: 'schoolStory.html',
 providers: [SchoolStoryService]
})
export class SchoolStory {

schoolid:any ='';
pagecount:any = 1;
items: Array<any> = [];
schoolname:any ='';
member_no:any = '';
loggedInUser:any = {};
postCount:any ='';
addSchoolstory = AddSchoolstoryPostPage;
storyid :any ='';
schoolstoryLike = SchoolstoryLikesPage;
imagePath ='';
loading:any='';
like:any='';
 
  constructor(public navCtrl: NavController , private schoolStoryService: SchoolStoryService,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {

    this.imagePath = config.data.file_url + config.data.image_path;
  }
  

  ngOnInit()
   {

   
    this.getAllPostSchoolStories();

    }

    initLoading()
    {
      this.loading = this.loadingCtrl.create({
        content:func.global_function.getLoader()
      });
    }
  


   openSchoolMenu(myEvent){
	 
	    let popover = this.popoverCtrl.create(SchoolStoryPopovermenuPage);
         popover.present({
          ev: myEvent
        });
	   
	   
   }

getRandom(){
  
  return Math.random();
}  


getAllPostSchoolStories(){
 
this.schoolid = window.localStorage.getItem('school_id');
this.loggedInUser = window.localStorage.getItem('loggedInUser');
this.loggedInUser = JSON.parse(this.loggedInUser);
this.loggedInUser = this.loggedInUser[0];
this.member_no = this.loggedInUser.member_no;
this.initLoading();
this.loading.present();
this.schoolStoryService.getSchoolstory(this.schoolid,this.pagecount).then((res) => {
  this.loading.dismiss();
 
  if (res['status'] == "Success"){
        this.items = res['post'];
        
        this.schoolname = res['school_name'][0]['school_name'];
        this.postCount=res['post']['length'];
             for (var i = 0; i < this.postCount; i++) {
                    if (res['post'][i]['like_status']) {
                        for (var j = 0; j < res['post'][i]['like_status']['length']; j++)
                           {
                             if (res['post'][i]['like_status'][j]['member_no'] == this.member_no)
                                {
                                 if (res['post'][i]['like_status'][j]['status'] == '0')
                                            {
                                                this.items[i]['liked'] = 0;
                                            }
                                            else
                                            {
                                                this.items[i]['liked'] = 1;
                                                
                                            }
                                        }
                                        else
                                        {
                                     
                                        }
                                    }
                                }else
                                {
                                    this.items[i]['liked'] = 0;
                                }
                            }  

                            this.schoolname = res['school_name'][0]['school_name'];

       }    
    }, (err) => {
      console.log(err);
    });
  
  

}

addpost(){

this.navCtrl.push(AddSchoolstoryPostPage);
  
}


openCommentPage(id){
  this.navCtrl.push(SchoolstoryCommentPage,{
      storyid: id,
      });
}


openposteditMenu(storyid,myEvent){

window.localStorage.setItem('postid',storyid); 
  let popover = this.popoverCtrl.create(SchoolStoryupdatePopoverPage);
         popover.present({
          ev: myEvent
        });
     
}

submit_like(data,id)
{
if (data =='1')
{
  this.like = "+1";
  this.storyid =id.toLocaleString();
  console.log(id);
  this.schoolStoryService.likePost(this.storyid,this.schoolid,this.like,this.member_no).then((res) => {
    if(res['status'] == "Success"){
          this.getAllPostSchoolStories();    
      }

     })


} else {
  
this.like = "-1";

  this.storyid = id.toLocaleString();
  this.schoolStoryService.likePost(this.storyid,this.schoolid,this.like,this.member_no).then((res) => {
    if(res['status'] == "Success"){
      this.getAllPostSchoolStories();
            }

           })
}
	


}



paging()
{
  
this.pagecount = this.pagecount + 1;
this.getAllPostSchoolStories();
}


openLikePage(id){

let profileModal = this.modalCtrl.create(this.schoolstoryLike,{storyid:id,schoolid:this.schoolid});
   profileModal.present();
 }


 video(videoId) {
  return  this.imagePath + 'school_stories/' + videoId;
};


removeDollerChar(string) {
  return string.replace('$', '?');
}

}
