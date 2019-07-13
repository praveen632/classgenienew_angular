import { Component, OnInit } from '@angular/core';
import { NavController , AlertController, NavParams, PopoverController ,ViewController} from 'ionic-angular';
import { ParentClassstoryService } from '../../services/parentClassstory.service';
import * as config  from '../../assets/json/config';



@Component({
  templateUrl: 'parentstoriesLikes.html',
  providers: [ParentClassstoryService]
})
export class ParentstoryLikesPage {
	public classid;
   public storyid;
  like_list_items:Array<any> = [];
	randno:any = '';
	
	
  constructor(public navCtrl: NavController , private parentclassstoryService: ParentClassstoryService, public navParams: NavParams,public viewCtrl: ViewController ) {
	  
    this.storyid = this.navParams.get("storyid");
    this.classid = this.navParams.get("classid");
	
  }


  ngOnInit() {
	  
	  this.loadlike();
  }


getRandom(){
  
  return Math.random();
}  

  loadlike(){
	
  this.parentclassstoryService.Likelist(this.storyid).then((result) => {
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




