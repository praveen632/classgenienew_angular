import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import {  Platform, NavParams, NavController,AlertController } from 'ionic-angular';
import { JoinSchoolService } from '../../services/joinSchool.service';


@Component({
  templateUrl: 'shareSchoolInfo.html',
  providers: [JoinSchoolService]
 })  


export class ShareSchoolInfo { 
   school_name:any = {};
	 constructor(public navCtrl: NavController, public params: NavParams, public joinschoolService:JoinSchoolService){
   this.school_name = params.data[0]['school_name'];
   }

   gotoDeskboard(){
     this.navCtrl.push(Dashboard);
   }

   inviteTeacher(){
    alert(1);
   }
  }

  
  
  
