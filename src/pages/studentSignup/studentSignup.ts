import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentSignupService } from '../../services/studentSignup.service';
import { StudentSignupPage } from '../studentSignupPage/studentSignupPage';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-studentSignup',
  templateUrl: 'studentSignup.html',
  providers: [StudentSignupService]
})

export class StudentSignup implements OnInit{
  login = LoginPage;
  item = {};
  student_no = {};
  constructor(public navCtrl: NavController, public altCtrl: AlertController, private studentService: StudentSignupService) {

  }

 ngOnInit() {
  }

   saveStudent() {  
	   var stu = this.item['student_no'];   
	   if(stu.length >= 9){    
	       this.studentService.saveStudents(this.item).then((result) => {    
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
		        window.localStorage.setItem('student_list', JSON.stringify(result['user_list']));
		        this.navCtrl.push(StudentSignupPage);
		    }  
	    }, (err) => {
	      console.log(err);
	    });
	    }else{
	       let alert = this.altCtrl.create({
		          message: 'Code length too short..',
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
