import { Component } from '@angular/core';
import { NavController,PopoverController,ViewController } from 'ionic-angular';


@Component({
 templateUrl:'studentPopoverMenu.html'
})
export class StudentPopoverMenu {

 
  constructor(public viewCtrl: ViewController) {

  }

  close(returnData)
  {
    this.viewCtrl.dismiss(returnData);
  }
 
}
