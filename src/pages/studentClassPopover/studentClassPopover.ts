import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';



@Component({
  templateUrl: 'studentClassPopover.html'
})

export class StudentClassPopover {

constructor(public viewCtrl: ViewController,public navCtrl: NavController ) {}


close() {
    this.viewCtrl.dismiss();
  }



}

