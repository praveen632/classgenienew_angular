import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController  } from 'ionic-angular';
import { StudentSignupService } from '../../services/studentSignup.service';
import { AlertController } from 'ionic-angular';
import { StudentStory } from '../studentStory/studentStory';
import { StudentPerformanceReport } from '../studentPerformanceReport/studentPerformanceReport';
import { StudentAccountSetting } from '../studentAccountSetting/studentAccountSetting';
import * as func from '../../app/function';
import * as config  from '../../assets/json/config';

@Component({ 
  templateUrl: 'studentInvite.html',
  providers: [StudentSignupService],
  
})


export class StudentInvite implements OnInit {
      tab2Root = StudentStory;
        
	  item = {};
	  member_no = {};
	  status = '';
	  detalis = [];
	  username = {};	  
	  verified = {};
    unverified = {};
		disconnected = {}; 
		student_no:any='';
		imgURI:any = [];
		imagePath:any = '';   
	  constructor(public navCtrl: NavController, public altCtrl: AlertController, private studentService: StudentSignupService, public popoverCtrl: PopoverController) {
			this.imagePath = config.data.image_url;
			var data =  window.localStorage.getItem('loggedInUser');			
		  var student_list = JSON.parse(data);
		  this.username = student_list[0]['username'];
		  this.member_no = student_list[0].member_no;
			this.status = student_list[0].status;
			this.imgURI = student_list[0]['image']+"?"+func.global_function.randomNumber();
			window.localStorage.setItem('stud_status',this.status); 
          this.disconnected = true;         
  }
  ngOnInit() {
       this.getStudentList();    
  }


	// presentPopover(myEvent) {
//     let popover = this.popoverCtrl.create(PopoverPageStudent);
//     popover.present({
//       ev: myEvent
//     });
//   }


  getStudentList(){
     this.studentService.getStudentList(this.member_no).then((result) => {    
		    if(result['status'] == "Failure"){
		      this.disconnected = false;    
		       let alert = this.altCtrl.create({
		          message: result['comments'],
		          buttons: [{
		            text: 'ok',
		            handler: () => {
		              alert.dismiss();
		              return false;
		            }
		          }]
		        });
		        alert.present();             
		    }else{
		       this.disconnected = true;
		       this.detalis = result['student_list'];				
					 window.localStorage.setItem('student_lists', JSON.stringify(result['student_list']));
					 this.student_no = this.detalis[0]['student_no'],
					 window.localStorage.setItem('studentNo', this.student_no);                
		    }  
	    }, (err) => {
	      console.log(err);
	    });	 

     if(this.status == '0'){
       this.studentService.getStudentSearch(this.member_no).then((result) => {          
		    if(result['status'] == "Failure"){    
		         let alert = this.altCtrl.create({
		          message: result['comments'],
		          buttons: [{
		            text: 'ok',
		            handler: () => {
		              alert.dismiss();
		              return false;
		            }
		          }]

		        });
		        alert.present();          
		    }else if(result['user_list'][0]['status'] == '1'){		    			     
		       this.unverified = false;
		       this.verified = true;		     		      
               window.localStorage.setItem('parentdata', JSON.stringify(result['user_list']));
               let alert = this.altCtrl.create({
		          message: 'You account has been activated by your parent',
		          buttons: [{
		            text: 'ok',
		            handler: () => {
		              alert.dismiss();
		              return false;
		            }
		          }]

		        });
		        alert.present();
		      }else{		     
			      this.unverified = true;
			      this.verified = false;
		      }
	    }, (err) => {
	      console.log(err);
	    });
     }else{          
        this.unverified = false;
        this.verified = true;		       		
      } 
  }

  shownotice(){  
    this.getStudentList();   
     if(this.detalis[0]['student_no'] === undefined){
          let alert = this.altCtrl.create({
          message: 'No class connected! add student code',
          buttons: [{
            text: 'ok',
            handler: () => {
              alert.dismiss();
              return false;
            }
          }]
        });
        alert.present();
     }else{
	     let alert = this.altCtrl.create({
	    title: 'Classgenie',
	    subTitle: '<h4>Enter '+this.username+"'s "+'Parent Email address<h4>',
	    inputs: [
	      {
	        name: 'email',
	        placeholder: 'parent email address',
	        type:'email'
	      }
	     ],
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Invite',
	        handler: inviteData => {
	        if(inviteData.email != ''){ 
	        var student_name = this.detalis[0]['name'];
	        var student_no = this.detalis[0]['student_no'];
	        var parent_no = this.detalis[0]['parent_no'];               
	            this.studentService.inviteParent(inviteData.email, student_name, student_no, parent_no ).then((result) => {         
			    if(result['status'] == "Failure"){    
			       let alert = this.altCtrl.create({
			          message: result['comments'],
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              return false;
			            }
			          }]
			        });
			        alert.present();             
			    }else if(result['mail_flage'] == "teacher"){
	                 let alert = this.altCtrl.create({
			          message: 'This email id already exists as a teacher id',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              return false;
			            }
			          }]
			        });
			        alert.present(); 
			    }else{
			         let alert = this.altCtrl.create({
			          message: 'invitation sent successfully  to '+this.username+"'s"+' parent',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              return false;
			            }
			          }]
			        });
			        alert.present();          
			    }  
		    }, (err) => {
		      console.log(err);
		    });         
	        }else{
	           let alert = this.altCtrl.create({
			          message: 'Email Should not empty!!',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              return false;
			            }
			          }]
			        });
			        alert.present();  
	        }
	        }
	      }
	    ]
	  });
	  alert.present();
	     }
  }

  addStudent(){
     this.getStudentList();
   console.log(this.item);
        this.studentService.addStudent(this.item, this.member_no).then((result) => {    
		    if(result['status'] == "Failure"){    
		       let alert = this.altCtrl.create({
		          message: result['comments'],
		          buttons: [{
		            text: 'ok',
		            handler: () => {
		              alert.dismiss();
		              return false;
		            }
		          }]
		        });
		        alert.present();             
		    }else{
		     this.getStudentList();
		        let alert = this.altCtrl.create({
		          message: 'student code added successfully',
		          buttons: [{
		            text: 'ok',
		            handler: () => {
		              alert.dismiss();
		              return false;
		            }
		          }]
		        });
		        alert.present();              
		    }  
	    }, (err) => {
	      console.log(err);
	    });	
  }

  removeStudent(datas){
  this.getStudentList();
       let alert = this.altCtrl.create({
	    title: '<img src="/assets/imgs/alert.png" class="alert"/><b>Classgenie</b>',
	    subTitle: 'class '+datas.class_name+' will be removed!',	   
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {

	        text: 'Ok',
	        handler: data => {		                         
	            this.studentService.removeStudent(datas.student_no).then((result) => {         
			    if(result['status'] == "Failure"){    
			       let alert = this.altCtrl.create({
			          message: 'can not remove student code',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              return false;
			            }
			          }]
			        });
			        alert.present();             
			    }else{
			      this.getStudentList();
			         let alert = this.altCtrl.create({
			          message: 'Student Remove Successfully',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              return false;
			            }
			          }]
			        });
			        alert.present();          
			    }  
		    }, (err) => {
		      console.log(err);
		    });         
	      
	        }
	      }
	    ]
	  });
	  alert.present();
	} 
	
	getReport(){
		this.navCtrl.push(StudentPerformanceReport);
	}


	 openPopover(myEvent) {
    let popover = this.popoverCtrl.create(StudentAccountSetting);
    popover.present({
      ev: myEvent
    });
  }
 
}
