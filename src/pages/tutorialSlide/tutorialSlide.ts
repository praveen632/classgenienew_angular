import { Component, ViewChild  } from '@angular/core';
import { NavController, Slides  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';
import { ClassStory } from '../classStory/classStory';
import { StudentInvite } from '../studentInvite/studentInvite';
import { StudentTab } from '../studentTab/studentTab';
@Component({ 
  templateUrl: 'tutorialSlide.html'
})
export class TutorialSlide {
	
	@ViewChild(Slides) slides: Slides;
	dashboard = Dashboard;
  	classStory = ClassStory;
  	

	constructor(public navCtrl: NavController, private toastCtrl: ToastController) { 

	}

	slideChanged() {
		let currentIndex = this.slides.getActiveIndex();		
	}

	skipTutorial(){

		window.localStorage.setItem('skipdta', "1");
		var loggedInUser = window.localStorage.getItem('loggedInUser');
		if (loggedInUser != "" && loggedInUser != null) {
		  
		    var loggedInUserData = JSON.parse(loggedInUser);   
		    var user_type = loggedInUserData[0].type;       
		    var status = loggedInUserData[0].status;
		    
		    if (user_type == 2 || user_type == 1 || user_type == 5) {

		        this.navCtrl.setRoot(this.dashboard);
		    }
		    if (user_type == 3) {

		        this.navCtrl.setRoot(this.classStory);
		    }
		    if (user_type == 4) {

		        this.navCtrl.setRoot(StudentTab);
		        if (status == '0') {

		            let toast = this.toastCtrl.create({
		                message: 'Account not verified',
		                duration: 3000,
		                position: 'center'
		            });
		            toast.present();

		        }
		    }
		}

	}

}
