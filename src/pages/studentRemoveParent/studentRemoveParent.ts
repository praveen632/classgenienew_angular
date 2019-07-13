import { Component } from '@angular/core';
import { NavController, PopoverController  } from 'ionic-angular';
import { ParentClassstoryService } from '../../services/parentClassstory.service';
import { AlertController } from 'ionic-angular';

@Component({ 
  templateUrl: 'studentRemoveParent.html',
  providers: [ParentClassstoryService],  
})

export class StudentRemoveParent {        
	  item = {};
	  member_no = {};
      studDetalis = [];
      disconnected = {};
	  constructor(public navCtrl: NavController, public altCtrl: AlertController, private parentClassstoryService: ParentClassstoryService, public popoverCtrl: PopoverController) {
			var data =  window.localStorage.getItem('loggedInUser');		
		    var student_list = JSON.parse(data);		    
            this.member_no = student_list[0].member_no;
            this.disconnected = true;

  }
  ngOnInit() {
       this.getStudentList();    
  }

  getStudentList(){
      console.log(this.member_no);
    this.parentClassstoryService.getStudentList(this.member_no).then((result) => {    
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
          this.studDetalis = result['student_list'];
          this.disconnected = true;                         
        }  
    }, (err) => {
      console.log(err);
    });	
  } 
 

  removeStudent(datas){  
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
	            this.parentClassstoryService.removeStudent(datas.student_no).then((result) => {         
			    if(result['status'] == "Failure"){    
			       let alert = this.altCtrl.create({
			          message: 'can not remove student code',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
			              this.getStudentList();
			            }
			          }]
			        });
			        alert.present();             
			    }else{			     
			         let alert = this.altCtrl.create({
			          message: 'Student Remove Successfully',
			          buttons: [{
			            text: 'ok',
			            handler: () => {
			              alert.dismiss();
                          this.getStudentList();
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
	
  }
 

