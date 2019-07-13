import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
	 templateUrl: 'studentSideMenu.html',
})
export class StudentSideMenu {

 constructor(public menuCtrl: MenuController) {

 }

 openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

}