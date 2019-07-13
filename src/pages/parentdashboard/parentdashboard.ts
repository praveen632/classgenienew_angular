import { Component } from '@angular/core';
import { NavController,AlertController,ModalController,NavParams , PopoverController,LoadingController} from 'ionic-angular';
import { ParentClassstoryService } from '../../services/parentClassstory.service';
import * as config  from '../../assets/json/config';
import { Profile } from '../profile/profile';
import { ParentkidListPage } from '../parentkidList/parentkidList';
import { parentpostCommentPage } from '../parentpostComment/parentpostComment';
import { ParentstoryLikesPage } from '../parentstoriesLikes/parentstoriesLikes';
import { ParentSetting } from '../parentSetting/parentSetting';
import * as func from '../../app/function';

@Component({ 
  templateUrl: 'parentdashboard.html',
  providers: [ParentClassstoryService]
})
export class ParentDashboard {
 loggedInUser:any = {};
 parentname:any = '';
 classList:any = [];
 kidstory:any ='';
 postCount:any='';
 arr_length:any= '';
 pagecount:any=1;
 nameofsearch:any='';
 classid:any='';
 showmsg:any='';
 status_val:any='';
 items = [];
 teacher_ac_no:any = '';
 imagefolder:any ='';
 student_no :any = '';
 parentpostCommentPage= parentpostCommentPage;
 parentstoryLikesPage = ParentstoryLikesPage;
 searchTerm: string = '';
 currentTab:any ='';
 imagePath:any='';
 loading:any='';
 like:any='';
 storyid:any='';
 imgURI:any='';
  constructor(public navCtrl: NavController ,public alertCtrl: AlertController,public modalCtrl: ModalController, private parentclassstoryService: ParentClassstoryService,public navParams: NavParams, public popoverCtrl: PopoverController,public loadingCtrl: LoadingController) {

    this.imagePath = config.data.file_url + config.data.image_path;
    this.student_no = navParams.get("student_no");
    this.kidstory = navParams.get("kidstory");  

  }


 ngOnInit()
  {
  	this.loggedInUser = window.localStorage.getItem('loggedInUser');
   	this.loggedInUser = JSON.parse(this.loggedInUser);
   	this.loggedInUser = this.loggedInUser[0];
    this.parentname = this.loggedInUser.name;
    this.imgURI = this.loggedInUser['image']+"?"+func.global_function.randomNumber();
    this.getClassid();
    
    this.loadData();
  
}
/* initilize the Loading */
initLoading()
  {
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }


/* refresher for Pulling the data */

doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 10);
}

/* Get Class list for parent Class Stories */
getClassid()
{
  
  	this.parentclassstoryService.getparentStories(this.loggedInUser.member_no).then((res) => {
     
        this.classList = window.localStorage.setItem('classid', res['class_id']);  
  		
  	}, (err) => {
      console.log(err);
    });
  }


 /* Load Class Stories for parent */

  loadData()
    {

    this.currentTab = 'student';
    this.kidstory=0;
    this.postCount=0;
    this.arr_length=0;
    this.classid = window.localStorage.getItem('classid');
    this.initLoading();
    this.loading.present();
   this.parentclassstoryService.loaddata(this.classid,this.pagecount,this.loggedInUser.member_no,this.searchTerm).then((res) => {
    this.loading.dismiss();
    this.showmsg=false;
    this.postCount=0;
    var res1=res;
    this.status_val=res1['status'];
  if(!res1.hasOwnProperty('posts'))
        {
         this.status_val = "";
         } else {
        this.status_val=res1['status'];
        this.arr_length=res1['posts']['length'];
        var arraylength=res1['posts']['length'];
        if(arraylength<config.data['page_size']) {
           this.status_val = "";
          }
       }
        
       if(res1['status'] == "Success")
       {
         this.items=res1['posts'];
         var list  = this.items;
         this.items.forEach(function(list){
          var number = String(list.teacher_ac_no);   
              if(number.substr(0,1) ==  '4'){
               list.image_folder = 'student_stories';
              }else if(number.substr(0,1) ==  '2'){
               list.image_folder = 'class_stories';
              }   
         });
         this.postCount=res['posts']['length'];
        for(var i=0;i<this.postCount;i++){

             this.teacher_ac_no=res1['posts'][i]['teacher_ac_no'];
              var value1= this.teacher_ac_no.toString();
              var res2 = value1.slice(0,1);
           if(res2==4){
             this.imagefolder="student_stories";
          }else{
           this.imagefolder="class_stories";
          }
             
          if(res1['posts'][i]['status']){
                 for(var j=0;j<res1['posts'][i]['status'].length;j++){
                    if(res1['posts'][i]['status'][j]['member_no'] == this.loggedInUser.member_no){
                        if(res1['posts'][i]['status'][j]['status'] == '0')
                            this.items[i]['liked'] = 0;
                            this.items[i]['liked'] = 1;
                            } else {
                           this.items[i]['liked'] = 0;
                            }
                           }
                          }
                          else
                          {
               this.items[i]['liked'] = 0;
              }
           }
      
           }else{
         this.items=[];
        this.showmsg=true;
        }  
        }, (err) => {
        console.log(err);
        });
      }
  
/* Load the Kid Story based on the parents Kids list */

    showkidstory()
    {
      let profileModal = this.modalCtrl.create(ParentkidListPage, { member_no:this.loggedInUser.member_no,kidstory:1 });
      profileModal.onDidDismiss(data => {
        this.student_no = data.student_no;
     if(this.student_no == '' || this.student_no == 'undefined')
        {
          this.loadData();
        }  else {
      this.load_student_story(this.student_no);
        }
     });
      profileModal.present();
    }

/* Loading the kid story*/

    load_student_story(student_no)
    {
      this.currentTab = 'kids';
      this.kidstory=1;
      this.initLoading();
      this.loading.present();
      this.parentclassstoryService.load_student_story(this.loggedInUser.member_no,student_no,this.searchTerm,this.pagecount).then((res) => {
 
        this.loading.dismiss();
        this.postCount=0; 
        var res1=res;
           
           this.showmsg=false;
          this.status_val=res1['status'];
            if(!res1.hasOwnProperty('posts'))
          {
            this.status_val = "";
          }else{
           this.status_val=res1['status'];
           var arraylength=res1['posts']['length'];
         }
           
          if(res1['status'] == "Success")
          {
            this.items=res1['posts'];
            var list  = this.items;
            this.items.forEach(function(list){
             var number = String(list.teacher_ac_no);   
                 if(number.substr(0,1) ==  '4'){
                  list.image_folder = 'student_stories';
                 }else if(number.substr(0,1) ==  '2'){
                  list.image_folder = 'class_stories';
                 }   
            });
            this.postCount=res1['posts']['length'];
           for(var i=0;i<res1['posts']['length'];i++){

                this.teacher_ac_no=res1['posts'][i]['teacher_ac_no'];
                 var value1= this.teacher_ac_no.toString();
                 var res2 = value1.slice(0,1);
              if(res==4){
                this.imagefolder="student_stories";
             }else{
              this.imagefolder="class_stories";
             }


                 if(res1['posts'][i]['status']){
                    for(var j=0;j<res1['posts'][i]['status']['length'];j++){
                       if(res1['posts'][i]['status'][j]['member_no'] == this.loggedInUser.member_no){
                           if(res1['posts'][i]['status'][j]['status'] == '0')
                           {
                               this.items[i]['liked'] = 0;
                            } else
                            {
                             this.items[i]['liked'] = 1;
                       }
                      } else
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
        }else{
           
            this.items=[];
            this.showmsg=true;
            
        }  
           
       
  		
  	}, (err) => {
      console.log(err);
    });


    }


    openclassstory()
    {
      this.kidstory=0; 
       this.items= [];
      this.loadData();
    }


    openCommentPage(id,classname,classid)
    {
      this.navCtrl.push(this.parentpostCommentPage,{
        storyid: id,
        classname:classname,
        classid:classid
       
        });
    }

   
submit_like(data,id,classid)
{
if (data =='1')
{
  this.like = "+1";
  this.storyid =id.toLocaleString();
  this.classid = classid.toLocaleString();
  console.log(id);
  this.parentclassstoryService.likePost(this.storyid,this.classid,this.like,this.loggedInUser.member_no).then((res) => {
    if(res['status'] == "Success"){
          this.loadData();    
      }

     })


} else {
  
this.like = "-1";

  this.storyid = id.toLocaleString();
  this.classid = classid.toLocaleString();
  this.parentclassstoryService.likePost(this.storyid,this.classid,this.like,this.loggedInUser.member_no).then((res) => {
    if(res['status'] == "Success"){
      this.loadData();
            }

           })
}
	


}




    openLikePage(id,class_id)
    {
      let profileModal = this.modalCtrl.create(this.parentstoryLikesPage,{storyid:id,classid:class_id});
      profileModal.present();
    }

    ionViewDidLoad() { 
      this.getAllPostsearchStories(this.searchTerm); 
  }

  video(videoId) {
    return  this.imagePath + 'class_stories/' + videoId;
  };
  


  getAllPostsearchStories(searchTerm)
  {
  this.nameofsearch=searchTerm;
    
    if(this.nameofsearch){
      
       if(this.kidstory==1){
        
        this.load_student_story(this.student_no);

        }else{
          
           this.loadData();
          
      } 
    
    }
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(ParentSetting);
    popover.present({
      ev: myEvent
    });
  }
  
}
