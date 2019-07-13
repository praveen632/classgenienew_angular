import { Component } from '@angular/core';
import { NavController,AlertController, PopoverController, ViewController } from 'ionic-angular';
import { ChatService } from '../../services/chat.service';
import * as config  from '../../assets/json/config';
import { Chat } from '../chat/chat';

@Component({
  templateUrl: 'smileyIcon.html',
  providers: [ChatService]
})
export class SmileyIcon { 
  iconList:any = [];
  iconImageBase = '';

  constructor(public navCtrl: NavController, private chatservicess: ChatService, public viewCtrl: ViewController) {

  }

ngOnInit()
{
	this.iconImageBase = config.data.image_url+"assets/"+"chaticon/";
	this.classIconPopup();
}
  /*Find the list of icon to choose for class */ 
  classIconPopup()
  {  	
    this.chatservicess.showEmotionList().then((result) => {
		
		this.iconList = result;
  
  	}, (err) => {
      console.log(err);
    });
  }

  setImage(imageName)
  { 
    this.viewCtrl.dismiss({'selectedIcon':imageName}); 	
    window.localStorage.setItem('smileyIcon',imageName);  	   
  }
}
