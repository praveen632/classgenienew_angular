import { Component } from '@angular/core';
import { NavController, AlertController,ModalController } from 'ionic-angular';
import { JoinSchoolService } from '../../services/joinSchool.service';
import { SchoolTeacherlist} from '../schoolTeacherlist/schoolTeacherlist';
import { AddSchool} from '../addSchool/addSchool';




@Component({ 
  templateUrl: 'joinSchool.html',
  providers: [JoinSchoolService]
})
export class JoinSchool {  
  school:any = {};
  schoolList =[];
  member_no :any = '';
  school_list = {};
  addSchool = AddSchool;
  searchTerm: string = '';
  items= [];
  addSchoolButt = {};
  constructor(public navCtrl: NavController,  public  joinschoolService:JoinSchoolService, public altCtrl: AlertController
  , public modalCtrl: ModalController) {
 
  var loggedInUsers = window.localStorage.getItem('loggedInUser');
  var member_nos = JSON.parse(loggedInUsers);
  this.member_no = member_nos[0]['member_no'];
  this.addSchoolButt = true;
  }


   ngOnInit()
    {  
      this.listSchool();    	
    }     

 listSchool()
  {
   	this.joinschoolService.listSchool(this.member_no).then((res) => {    		
     if(res['status'] == 'Success'){
       this.schoolList = res['school_list'];  
    }else{
      alert(12);
    }
  	}, (err) =>{
      console.log(err);
    });
  }


  schoolSelect(school_detail){
  this.school_list = school_detail; 
    this.joinschoolService.teacherList(school_detail.school_id ).then((res) => {       
     if(res['status'] == 'Success'){
      this.chooseSchool(res['Teacher_list']); 
    }else{
      alert(32);
    }
    }, (err) =>{
      console.log(err);
    }); 
    return false;
  }
  chooseSchool(list){
   let schoolTeacherlistModal = this.modalCtrl.create(SchoolTeacherlist,this.school_list);
   schoolTeacherlistModal.present();
   return false;
  } 



 ionViewDidLoad() { 
        this.getItems(); 
    }


  getItems(){  
  console.log(this.searchTerm);
   this.joinschoolService.filterSchoolItems(this.searchTerm).then((res) => {       
     if(res['status'] == 'Success'){
     console.log(res['school_list']);
      this.schoolList = res['school_list'];
      if(res['school_list'] == '' || res['school_list'] == 'undefine'){
      this.addSchoolButt = false;
      }
    }else{
      alert(32);
    }
    }, (err) =>{
      console.log(err);
    }); 
  
  } 
 
}




