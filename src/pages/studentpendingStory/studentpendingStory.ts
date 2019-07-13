import { Component } from '@angular/core';
import { NavController ,PopoverController,ModalController,MenuController,LoadingController } from 'ionic-angular';
import { StudentstoryService } from '../../services/studentStory.service';
import * as config  from '../../assets/json/config';
import { AddstudentstoryPostPage } from '../addstudentstoryPost/addstudentstoryPost';
import { StudentStoryupdatePopoverPage } from '../studentstoryupdatePopover/studentstoryupdatePopover';
import * as func from '../../app/function';

@Component({ 
  templateUrl: 'studentpendingStory.html',
  providers: [StudentstoryService]
})
export class StudentpendingStory {
  loggedInUser:any = {};
  classList:any = [];
  status:any='';
  kidstory:any = '0';
  mylist_data:any =[];
  firstclass:any= '';
  pagecount:any = '1';
  classid:any='';
  storycount:any='';
  status_value:any='';
  failure:any='';
  items = [];
  imagePath ='';
  showmsg:boolean= true;
  searchTerm: string = '';
  rawdata:any = [];
  message:any ='';
  student_no:any ='';
  postCount:any='';
  imgURI:any='';
  class_name:any='';
  firstclass_name:any='';
  student_code:any='';
  loading:any='';
  


  constructor(public navCtrl: NavController,private studentstoryService: StudentstoryService,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public menuCtrl: MenuController,public loadingCtrl: LoadingController) {
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
    this.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.status = window.localStorage.getItem('stud_status');
    this.student_no = window.localStorage.getItem('studentNo');
   	this.loggedInUser = JSON.parse(this.loggedInUser);
    this.loggedInUser = this.loggedInUser[0];
    var userImage =  this.loggedInUser.image;
    this.getClassid();

     if (userImage == "" || userImage == undefined) {
      this.imgURI = "/assets/imgs/chat_user.png";

  } else {
      this.imgURI = config.data['file_url'] + config.data['image_path'] + 'profile_image/' + userImage;

  }

  if(this.classid == '' || this.classid == 'undefined')
  {
    this.classid = window.localStorage.getItem('firstclass_id');
    this.student_no = window.localStorage.getItem('first_student_code');

  }

  console.log(this.student_code);
     this.loadData();
  
  
}

doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 10);
}



  getClassid()
{
 
	this.studentstoryService.getlist(this.loggedInUser.member_no).then((res) => {
      
      if(res['status'] == "Success")
      { 
        
        this.mylist_data = res['student_list'];
        this.firstclass = window.localStorage.setItem('firstclass_id',res['student_list'][0].class_id);
        this.firstclass_name= res['student_list'][0].class_name;
        this.student_code = window.localStorage.setItem('first_student_code',res['student_list'][0].student_no);
                     
      } else {

      }
       
  		
  	}, (err) => {
      console.log(err);
    });
  }



  loadData()
  {
    this.initLoading();
    this.loading.present();
   
    this.studentstoryService.getStudent_pendingStory(this.student_no,this.classid,this.pagecount,this.loggedInUser.member_no).then((res) => {
    
      this.loading.dismiss();
    if(!res.hasOwnProperty('posts'))
      {
        this.storycount = true;
      }else{
        this.status_value=res['status'];
        var arraylength=res['posts']['length'];
        if(arraylength < config.data['page_size'])
        {
          this.storycount = true;
        }
      } if (res['status'] == "Success")
                          {   
                            this.items = res['user_list'];
                            this.postCount= res['user_list']['length'];
                           for (var i = 0; i < res['user_list']['length']; i++) {
                               if (res['user_list'][i]['status']) {
                                   for (var j = 0; j < res['user_list'][i]['status'].length; j++) {
                                           if (res['user_list'][i]['status'][j]['status'] == '0')
                                       if (res['user_list'][i]['status'][j]['member_no'] == this.loggedInUser.member_no) {
                                           if (res['user_list'][i]['status'][j]['status'] == '0')
                                               this.items[i]['liked'] = 0;
                                           else
                                               this.items[i]['liked'] = 1;
                                       } else
                                       {
                                           this.items[i]['liked'] = 0;
                                       }
                                   }
                               } else
                               {
                                   this.items[i]['liked'] = 0;
                               }
                           }
  
  
                          } else {
                              //global._alert({template: "No post available now..", dependency: $ionicPopup});
                              this.failure = "No post available now..";
                          }
                       

     console.log(this.items);
         
       
     }, (err) => {
       console.log(err);
     });
    
  }


  
video(videoId) {
  return  this.imagePath + 'class_stories/' + videoId;
};


removeDollerChar(string) {
  return string.replace('$', '?');
}


showpendingstory()
{
  
}



openposteditMenu(storyid,myEvent){

  window.localStorage.setItem('postid', storyid);  
   let popover = this.popoverCtrl.create(StudentStoryupdatePopoverPage);
      popover.present({
       ev: myEvent
     });
       
}


loadpost(classname,classid,studentno)
{
this.classid = classid;
this.class_name = classname;
this.student_no = studentno;
this.loadData();
this.menuCtrl.close();
}



addpost()
{
this.navCtrl.push(AddstudentstoryPostPage,{classid:this.classid,class_name:this.class_name});
}

back()
{
  this.navCtrl.pop();
}

}

