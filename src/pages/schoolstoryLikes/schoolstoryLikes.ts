import { Component, OnInit } from '@angular/core';
import { NavController , AlertController, NavParams, PopoverController ,ViewController} from 'ionic-angular';
import { SchoolStoryService } from '../../services/schoolStory.service';
import * as config  from '../../assets/json/config';



@Component({
  templateUrl: 'schoolstoryLikes.html',
  providers: [SchoolStoryService]
})
export class SchoolstoryLikesPage {
	public school_id;
   public storyid;
  like_list_items:Array<any> = [];
	randno:any = '';
	
	
  constructor(public navCtrl: NavController , private schoolstoryService: SchoolStoryService ,public navParams: NavParams,public viewCtrl: ViewController ) {
	  
    this.storyid = this.navParams.get("storyid");
    this.school_id = this.navParams.get("schoolid");
	
  }


  ngOnInit() {
	  
	  this.loadlike();
  }


getRandom(){
  
  return Math.random();
}  

  loadlike(){
	  
  this.schoolstoryService.Likelist(this.school_id,this.storyid).then((result) => {
      if(result['status'] == "Success"){
      var data1 = result['like_list'];
      this.like_list_items =data1;
      for(var i=0;i<data1.length;i++){
        this.randno = this.getRandom();
      }
         
			 }
			 else{
				
			 }
			       
         }, (err) => {
      
    });
  }
 
 
}




