import { Component } from '@angular/core';
import { NavController,PopoverController,ModalController,LoadingController } from 'ionic-angular';
import { StudentstoryService } from '../../services/studentStory.service';
import * as config  from '../../assets/json/config';
import * as func from '../../app/function';


@Component({
  templateUrl: 'studentschoolStory.html',
 providers: [StudentstoryService]
})
export class StudentSchoolStory {

schoolid:any ='';
pagecount:any = 1;
items: Array<any> = [];
schoolname:any ='';
member_no:any = '';
loggedInUser:any = {};
postCount:any ='';
imagePath ='';
school_id:any='';
school_name:any='';
loading:any='';
 
  constructor(public navCtrl: NavController ,private studentstoryService: StudentstoryService,public popoverCtrl: PopoverController,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {

    this.imagePath = config.data.file_url + config.data.image_path;
  }
  

  ngOnInit()
   {

   this.getschoolData();
  

    }

    initLoading()
    {
      this.loading = this.loadingCtrl.create({
        content:func.global_function.getLoader()
      });
    }
  
 

getRandom(){
  
  return Math.random();
}  

getschoolData()
{
  this.loggedInUser = window.localStorage.getItem('loggedInUser');
  this.loggedInUser = JSON.parse(this.loggedInUser);
  this.loggedInUser = this.loggedInUser[0];
  this.member_no = this.loggedInUser.member_no;

 this.studentstoryService.getSchooldata(this.member_no).then((res) => {
   
 
    if(res['status'] == "Success")
    {
      this.school_id = res['school_name'][0].school_id;

      this.getAllPostSchoolStories();
      console.log(this.school_id);
      
    } 
 
  }, (err) => {
    console.log(err);
  });
}

getAllPostSchoolStories(){
  this.initLoading();
  this.loading.present();
 this.studentstoryService.getallSchoolstory(this.school_id,this.pagecount).then((res) => {
  this.loading.dismiss();
 
    if(res['status'] == "Success")
    {
      this.items = res['post'];
      this.school_name = res['school_name'][0]['school_name'];
      this.postCount=res['post'].length;
      for (var i = 0; i < res['post'].length; i++) {
        if (res['post'][i]['status']) {
          for (var j = 0; j < res['post'][i]['status'].length; j++) {
            if (res['post'][i]['status'][j]['member_no'] == this.member_no)
             {
              if (res['post'][i]['status'][j]['status'] == '0')
              {
                this.items[i]['liked'] = 0;
              }
              else
              {
                this.items[i]['liked'] = 1;
              }
            

            } else{
             //this.items[i]['liked'] = 0;
            }
             }
           } else {
            this.items[i]['liked'] = 0;
          }
        } 

        this.school_name = res['school_name'][0].school_name;
        console.log(this.items);
      }
   
    else {
      this.postCount=0;
      this.items=[];
    }
 
 
  }, (err) => {
    console.log(err);
  });

}





paging()
{
  
this.pagecount = this.pagecount + 1;
this.getAllPostSchoolStories();
}



 video(videoId) {
  return  this.imagePath + 'school_stories/' + videoId;
};


removeDollerChar(string) {
  return string.replace('$', '?');
}


}
