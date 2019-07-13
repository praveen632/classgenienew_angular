import { Component } from '@angular/core';
import { NavController ,ModalController,LoadingController } from 'ionic-angular';
import { StudentstoryService } from '../../services/studentStory.service';
import { StudentpendingStory } from '../studentpendingStory/studentpendingStory';
import * as config  from '../../assets/json/config';
import { StudentstoryLikesPage } from '../studentstoryLikes/studentstoryLikes';
import { StudentstoryCommentPage } from '../studentstoryComment/studentstoryComment';
import { StudentClassListPage } from '../studentclassList/studentclassList';
import * as func from '../../app/function';
@Component({ 
  templateUrl: 'studentStory.html',
  providers: [StudentstoryService]
})
export class StudentStory {
  loggedInUser:any = {};
  classList:any = [];
  status:any='';
  kidstory:any = '0';
  mylist_data:any =[];
  firstclass:'';
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
  student_no:any='';
  parent_no:any='';
  loading:any='';


  constructor(public navCtrl: NavController,private studentstoryService: StudentstoryService,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {

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
   	this.loggedInUser = JSON.parse(this.loggedInUser);
   	this.loggedInUser = this.loggedInUser[0];
    this.getClassid();
    this.getStudentList();
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
  	this.studentstoryService.getclassid(this.loggedInUser.member_no).then((res) => {
      
     this.classList = window.localStorage.setItem('classid', res['class_id']); 

        
  		
  	}, (err) => {
      console.log(err);
    });
  }

  getStudentList()
{

  	this.studentstoryService.getlist(this.loggedInUser.member_no).then((res) => {
      
      if(res['status'] == "Success")
    {     
      this.mylist_data = res['student_list'];
      this.firstclass=res['student_list'][0]['class_id'];
      window.localStorage.setItem('stud_classid',this.firstclass);
     
          
    }else if(res['error_code']==1){

       

      }

        
  		
  	}, (err) => {
      console.log(err);
    });
  }



  loadData()
  {
    this.classid=window.localStorage.getItem('classid');
    this.initLoading();
    this.loading.present();
    this.studentstoryService.getStudent_ClassStory(this.classid,this.pagecount,this.loggedInUser.member_no).then((res) => {
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
                            this.failure = "";
                            this.items = res['posts'];
                           
  
  
                              var list  = this.items;
                              this.items.forEach(function(list){
                               var number = String(list['teacher_ac_no']);   
                                   if(number.substr(0,1) ==  '4'){
                                    list.image_folder = 'student_stories';
                                   }else if(number.substr(0,1) ==  '2'){
                                    list.image_folder = 'class_stories';
                                   }   
                              });
  
                              for (var i = 0; i < res['posts']['length']; i++) {
                                  if (res['posts'][i]['status']) {
                                      for (var j = 0; j < res['posts'][i]['status']['length']; j++) {
                                          if (res['posts'][i]['status'][j]['member_no'] == this.loggedInUser.member_no) {
                                              if (res['posts'][i]['status'][j]['status'] == '0')
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
  
                              //this.class_name=res1.class_name[0].class_name;
  
  
                          } else {
                              //global._alert({template: "No post available now..", dependency: $ionicPopup});
                              this.failure = "No post available now..";
                              this.items =[];
                              this.showmsg=false;
                          }
                       

     console.log(this.items);
         
       
     }, (err) => {
       console.log(err);
     });
    
  }

  loadData_student_no()
  {
    
    this.classid=window.localStorage.getItem('classid');
    this.studentstoryService.getStudent_ClassStory_studentno(this.loggedInUser.member_no,this.parent_no,this.student_no,this.pagecount).then((res) => {
        
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
                            this.failure = "";
                            this.items = res['posts'];
                           
  
  
                              var list  = this.items;
                              this.items.forEach(function(list){
                               var number = String(list['teacher_ac_no']);   
                                   if(number.substr(0,1) ==  '4'){
                                    list.image_folder = 'student_stories';
                                   }else if(number.substr(0,1) ==  '2'){
                                    list.image_folder = 'class_stories';
                                   }   
                              });
  
                              for (var i = 0; i < res['posts']['length']; i++) {
                                  if (res['posts'][i]['status']) {
                                      for (var j = 0; j < res['posts'][i]['status']['length']; j++) {
                                          if (res['posts'][i]['status'][j]['member_no'] == this.loggedInUser.member_no) {
                                              if (res['posts'][i]['status'][j]['status'] == '0')
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
  
                              //this.class_name=res1.class_name[0].class_name;
  
  
                          } else {
                              //global._alert({template: "No post available now..", dependency: $ionicPopup});
                              this.failure = "No post available now..";
                              this.items =[];
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

getAllPostsearchStories(searchbar)
{

for (var i = 0; i < this.items['length']; i++) {
 this.message = this.items[i]['message'];
 this.rawdata.push(this.message);


}

console.log(this.rawdata);
}

showpendingstory()
{
  this.navCtrl.push(StudentpendingStory);
}


openLikePage(id,classid)
{
  console.log(classid);
  let profileModal = this.modalCtrl.create(StudentstoryLikesPage,{storyid:id,classid:classid});
   profileModal.present();
 }


 openCommentPage(id,classid)
 {
   this.navCtrl.push(StudentstoryCommentPage,{storyid:id,classid:classid});
 }

 showclassList_student()
{
  let profileModal = this.modalCtrl.create(StudentClassListPage, { member_no:this.loggedInUser.member_no,kidstory:1 });
  profileModal.onDidDismiss(data => {
    this.student_no = data.student_no;
    this.parent_no = data.parent_no
   this.loadData_student_no();
  console.log(data);
  });
  profileModal.present();
}

pagging()
{
  this.pagecount = this.pagecount + 1;
 this.loadData();
}

}

