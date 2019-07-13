import { Component } from '@angular/core';
import { ParentDashboard } from '../parentdashboard/parentdashboard';
import { ParentMessagePage } from '../parentMessage/parentMessage';
import { YourkidsPage } from '../yourkids/yourkids';


@Component({
  templateUrl: 'classStory.html'
})
export class ClassStory {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ParentDashboard;
  tab2Root: any = ParentMessagePage;
  tab3Root: any = YourkidsPage;
  constructor() {

  }
}
