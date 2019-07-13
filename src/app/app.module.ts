import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { MediaCapture } from '@ionic-native/media-capture';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
import { Push} from '@ionic-native/push';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StudentSignup } from '../pages/studentSignup/studentSignup';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';
import { ParentSignupPage } from '../pages/parentsignup/parentsignup';
import { SchoolLeaderSignupPage } from '../pages/schoolleadersignup/schoolleadersignup';
import { TeacherSignupPage } from '../pages/teachersignup/teachersignup';
import { HttpModule } from '@angular/http';
import { StudentSignupPage } from '../pages/studentSignupPage/studentSignupPage';
import { IonicStorageModule } from '@ionic/storage';
import { Dashboard } from '../pages/dashboard/dashboard';
import { ClassStory } from '../pages/classStory/classStory';
import { StudentInvite } from '../pages/studentInvite/studentInvite';
import { ParentcodecheckPage } from '../pages/parentcodecheck/parentcodecheck';
import { TutorialSlide } from '../pages/tutorialSlide/tutorialSlide';
import { EventManagement } from '../pages/eventManagement/eventManagement';
import { ReferTeacher } from '../pages/referTeacher/referTeacher';
import { ParentMessagePage } from '../pages/parentMessage/parentMessage';
import { YourkidsPage } from '../pages/yourkids/yourkids';
import { JoinSchool } from '../pages/joinSchool/joinSchool';
import { StudentStory } from '../pages/studentStory/studentStory';
import { PopoverPageStudent } from '../pages/popoverPageStudent/popoverPageStudent';
import { AddNewClass } from '../pages/addNewClass/addNewClass';
import { SchoolStory } from '../pages/schoolStory/schoolStory';
import { StudentAccountSetting } from '../pages/studentAccountSetting/studentAccountSetting';
import { StudentSideMenu } from '../pages/studentSideMenu/studentSideMenu';
import { StudentTab } from '../pages/studentTab/studentTab';
import { ParentDashboard } from '../pages/parentdashboard/parentdashboard';
import { TeacherClasstab } from '../pages/teacherClasstab/teacherClasstab';
import { TeacherMessagePage } from '../pages/teacherMessage/teacherMessage';
import { TeacherClassroomPage } from '../pages/teacherClassroom/teacherClassroom';
import { TeacherClassstoryPage } from '../pages/teacherClassstory/teacherClassstory';
import { InviteparentsPage } from '../pages/inviteparents/inviteparents';
import { SchoolTeacherlist } from '../pages/schoolTeacherlist/schoolTeacherlist';
import { ClassIcon } from '../pages/classIcon/classIcon';
import { TeacherClassstoryPostsPage } from '../pages/teacherClassStoryPosts/teacherClassStoryPosts';
import { AddclassstoryPostPage  } from '../pages/addclassstoryPost/addclassstoryPost';
import { ClassstoryCommentPage  } from '../pages/classstoryComment/classstoryComment';
import { ClassStoryPopovermenuPage  } from '../pages/teacherClassstoryPopovermenu/teacherClassstoryPopovermenu';
import { EditclassstoryPostPage  } from '../pages/editclassstoryPost/editclassstoryPost';
import { AddStudent  } from '../pages/addStudent/addStudent';
import { ChangePassword } from '../pages/changePassword/changePassword';
import { Profile } from '../pages/profile/profile';
import { AddSchool } from '../pages/addSchool/addSchool';
import { EditStudent  } from '../pages/editStudent/editStudent';
import { SchoolStoryPopovermenuPage  } from '../pages/teacherSchoolstoryPopovermenu/teacherSchoolstoryPopovermenu';
import { TeacherList  } from '../pages/teacherList/teacherList';
import { AddSchoolstoryPostPage  } from '../pages/addSchoolstoryPost/addSchoolstoryPost';
import { SchoolStoryupdatePopoverPage  } from '../pages/teacherSchoolstoryupdatePopover/teacherSchoolstoryupdatePopover';
import { EditSchoolstoryPostPage  } from '../pages/editschoolstoryPost/editschoolstoryPost';
import { SchoolstoryCommentPage  } from '../pages/schoolstoryComment/schoolstoryComment';
import { Group  } from '../pages/group/group';
import { ShareSchoolInfo } from '../pages/shareSchoolInfo/shareSchoolInfo';
import { StudentPopoverMenu } from '../pages/studentPopoverMenu/studentPopoverMenu';
import { AddGroup } from '../pages/addGroup/addGroup';
import { AwardGroup } from '../pages/awardGroup/awardGroup';
import { GiveGroupfeedback } from '../pages/giveGroupfeedback/giveGroupfeedback';
import { ClassstoryLikesPage } from '../pages/classstoryLikes/classstoryLikes';
import { SchoolstoryLikesPage } from '../pages/schoolstoryLikes/schoolstoryLikes';
import { Chat } from '../pages/chat/chat';
import { PendingStories } from '../pages/pendingStories/pendingStories';
import { EditClass } from '../pages/editClass/editClass';
import { EditSkills } from '../pages/editSkills/editSkills';
import { ClassroomPopovermenuPage } from '../pages/teacherClassroomPopovermenu/teacherClassroomPopovermenu';
import { GroupPopoverMenu } from '../pages/groupPopoverMenu/groupPopoverMenu';
import { PendingStoriesPostsPage } from '../pages/pendingStoriesPosts/pendingStoriesPosts';
import { Attendence } from '../pages/attendence/attendence';
import { AttendancePopoverMenu } from '../pages/attendancePopoverMenu/attendancePopoverMenu';
import { AttendanceDateRange } from '../pages/attendanceDateRange/attendanceDateRange';
import { AwardMultiStudent } from '../pages/awardMultiStudent/awardMultiStudent';
import { ViewReport } from '../pages/viewReport/viewReport';
import { PerformanceReport } from '../pages/performanceReport/performanceReport';
import { SmileyIcon } from '../pages/smileyIcon/smileyIcon';
import { MomentModule } from 'angular2-moment';
import { ParentkidListPage } from '../pages/parentkidList/parentkidList';
import { PerformPopoverMenu } from '../pages/performPopoverMenu/performPopoverMenu';
import { ChartsModule } from 'ng2-charts';
import { parentpostCommentPage } from '../pages/parentpostComment/parentpostComment';
import { ParentstoryLikesPage } from '../pages/parentstoriesLikes/parentstoriesLikes';
import { StudentpendingStory } from '../pages/studentpendingStory/studentpendingStory';
import { SkillIcon } from '../pages/skillIcon/skillIcon';
import { AddSkills } from '../pages/addSkills/addSkills';
import { StudentIcon } from '../pages/studentIcon/studentIcon';
import { AddstudentstoryPostPage } from '../pages/addstudentstoryPost/addstudentstoryPost';
import { StudentStoryupdatePopoverPage } from '../pages/studentstoryupdatePopover/studentstoryupdatePopover';
import { EditStudentstoryPostPage } from '../pages/editstudentstoryPost/editstudentstoryPost';
import { ParentSetting } from '../pages/parentSetting/parentSetting';
import { ParentProfile } from '../pages/parentProfile/parentProfile';
import { StudentSchoolStory } from '../pages/studentschoolStory/studentschoolStory';
import { StudentstoryLikesPage } from '../pages/studentstoryLikes/studentstoryLikes';
import { StudentstoryCommentPage } from '../pages/studentstoryComment/studentstoryComment';
import { StudentPerformInParent } from '../pages/studentPerformInParent/studentPerformInParent';
import { StudentPerformanceReport } from '../pages/studentPerformanceReport/studentPerformanceReport';
import { StudentClassListPage } from '../pages/studentclassList/studentclassList';
import { ClassListpopover } from '../pages/classListpopover/classListpopover';
import { StudentProfile } from '../pages/studentProfile/studentProfile';
import { StudentClassPopover } from '../pages/studentClassPopover/studentClassPopover';
import { TeacherNotification } from '../pages/teacherNotifications/teacherNotifications';
import { StudentRemoveParent } from '../pages/studentRemoveParent/studentRemoveParent';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentSignup,   
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    TeacherSignupPage,
    SchoolLeaderSignupPage,
    ParentSignupPage,
    StudentSignupPage,   
    Dashboard,
    ClassStory,
    StudentInvite,
    ParentcodecheckPage,
    TutorialSlide,
    EventManagement,
    ReferTeacher,
    ParentMessagePage,
    YourkidsPage,  
    StudentStory,
    JoinSchool,
    PopoverPageStudent,
    AddNewClass,
    SchoolStory,
    ParentDashboard,
    TeacherClasstab,
    TeacherMessagePage,
    TeacherClassroomPage,
    TeacherClassstoryPage,
    StudentAccountSetting,
    StudentSideMenu,
    StudentTab,
    ParentDashboard,
    InviteparentsPage,
    SchoolTeacherlist,
    TeacherClassstoryPostsPage,
    AddclassstoryPostPage,
    ClassIcon,
    ClassstoryCommentPage,
    ClassStoryPopovermenuPage,
    EditclassstoryPostPage,
    AddStudent,  
    ChangePassword,
    Profile,
    AddSchool,
    EditStudent,
    ShareSchoolInfo,
    SchoolStoryPopovermenuPage,
    TeacherList,
    AddSchoolstoryPostPage,
    SchoolStoryupdatePopoverPage,
    EditSchoolstoryPostPage,
    SchoolstoryCommentPage,
    Group,
    StudentPopoverMenu,
    AddGroup,
    AwardGroup,
    GiveGroupfeedback,
    ClassstoryLikesPage,
    SchoolstoryLikesPage,
    Chat,
    PendingStories,
   EditClass,
   EditSkills,
   ClassroomPopovermenuPage,
   GroupPopoverMenu,
   PendingStoriesPostsPage,
   Attendence,
   AttendancePopoverMenu,
   AttendanceDateRange,
   AwardMultiStudent,
   ViewReport,
   PerformanceReport,
   SmileyIcon,
   ParentkidListPage,
   PerformPopoverMenu,
   parentpostCommentPage,
   ParentstoryLikesPage,
   StudentpendingStory,
   ParentstoryLikesPage,
   SkillIcon,
   AddSkills,
   StudentIcon,
   AddstudentstoryPostPage,
   StudentStoryupdatePopoverPage,
   EditStudentstoryPostPage,
   ParentSetting,
   ParentProfile,
   StudentSchoolStory,
   StudentstoryLikesPage,
   StudentstoryCommentPage,
   StudentPerformInParent,
   StudentPerformanceReport,
   StudentClassListPage,
   StudentClassPopover,
   TeacherNotification,
   ClassListpopover,
   StudentProfile,
   StudentClassPopover,
   StudentRemoveParent

   ],

  imports: [    
    BrowserModule,
    HttpModule,
    MomentModule,
    ChartsModule,
    IonicModule.forRoot(MyApp,{
    tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentSignup,    
    LoginPage,
    SignupPage,
    ForgotPasswordPage ,
    TeacherSignupPage,
    SchoolLeaderSignupPage,
    ParentSignupPage,
    StudentSignupPage,    
    Dashboard,
    ClassStory,
    StudentInvite,
    ParentcodecheckPage,
    TutorialSlide,
    EventManagement,
    ReferTeacher,
    ParentMessagePage,
    YourkidsPage,  
    StudentStory,
    JoinSchool,
    PopoverPageStudent,
    AddNewClass,
    SchoolStory,
    ParentDashboard,
    TeacherClasstab,
    TeacherMessagePage,
    TeacherClassroomPage,
    TeacherClassstoryPage,
    StudentAccountSetting,
    StudentSideMenu,
    StudentTab,
    ParentDashboard,
    InviteparentsPage,
    SchoolTeacherlist,
    TeacherClassstoryPostsPage,
    AddclassstoryPostPage,
    ClassIcon,
    ClassstoryCommentPage,
    ClassStoryPopovermenuPage,
    EditclassstoryPostPage,
    AddStudent,  
    ChangePassword,
    Profile,
   AddSchool,
   EditStudent,
   ShareSchoolInfo,
   SchoolStoryPopovermenuPage,
   TeacherList,
   AddSchoolstoryPostPage,
   SchoolStoryupdatePopoverPage,
   EditSchoolstoryPostPage,
   SchoolstoryCommentPage,
   Group,
   StudentPopoverMenu,
   AddGroup,
   AwardGroup,
   GiveGroupfeedback,
   ClassstoryLikesPage,
   SchoolstoryLikesPage,
   Chat,
   PendingStories,
   EditClass,
   EditSkills,
   ClassroomPopovermenuPage,
   GroupPopoverMenu,
   PendingStoriesPostsPage,
   Attendence,
   AttendancePopoverMenu,
   AttendanceDateRange,
   AwardMultiStudent,
   ViewReport,
   PerformanceReport,
   SmileyIcon,
   ParentkidListPage,
   PerformPopoverMenu,
   parentpostCommentPage,
   ParentstoryLikesPage, 
   ParentstoryLikesPage,
   StudentpendingStory,
   SkillIcon,
   AddSkills,
   StudentIcon,
   AddstudentstoryPostPage,
   StudentStoryupdatePopoverPage,
   EditStudentstoryPostPage,
   ParentSetting,
   ParentProfile,
   StudentSchoolStory,
   StudentstoryLikesPage,
   StudentstoryCommentPage,
   StudentPerformInParent,
   StudentPerformanceReport,
   StudentClassListPage,
   StudentClassPopover,
   TeacherNotification,
   ClassListpopover,
   StudentProfile,
   StudentClassPopover,
   StudentRemoveParent


 ],

  providers: [
    StatusBar,
    SplashScreen, Camera, FileTransfer, MediaCapture, Network, Device, Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {} 
