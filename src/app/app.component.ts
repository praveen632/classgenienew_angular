import { Component, Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { Http} from '@angular/http';
import { Push, PushObject, PushOptions} from '@ionic-native/push';
import 'rxjs/add/operator/map';
import { LoginPage } from '../pages/login/login';
import * as config  from '../assets/json/config';
import * as func from '../app/function';
import { ClassStory } from '../pages/classStory/classStory';
import { Dashboard } from '../pages/dashboard/dashboard';
import { ParentMessagePage } from '../pages/parentMessage/parentMessage';

@Component({
  templateUrl: 'app.html'
})

@Injectable()
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private network: Network, private alertCtrl: AlertController, private device: Device, private http: Http, public push: Push) {
    platform.ready().then(() => {
       this.getToken();
       this.checkNetworkConnection();
       statusBar.styleDefault();
       splashScreen.hide();
       this.pushNotificationSetup();
    });
  }

  //Check network connection
  checkNetworkConnection(){
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        let alert = this.alertCtrl.create({
          message: 'The internet is disconnected on your device.',
          buttons: [{
            text: 'ok',
            handler: () => {
              alert.dismiss();
              return false;
            }
          }]
        });
        alert.present();
    });
  }
  
  //Fetch get token
  getToken(){
    this.http.get(config.data.api_url+':'+config.data.port+'/return_token')
          .map(res => res.json())
          .subscribe(res => {
             window.localStorage.setItem('app_token', res['token']);
          }, (err) => {
      });
  }
  
  //Setting push notification
  pushNotificationSetup() {
        const options: PushOptions = {
          android: {
              senderID: config.data.sender_id
          },
          ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
          },
          windows: {
          }
       };

       const pushObject: PushObject = this.push.init(options);
        
       pushObject.on('registration').subscribe((registration: any) => {
          window.localStorage.setItem('das_device_id', registration['registrationId']);
       });

       pushObject.on('notification').subscribe((notification: any) => {
          if (notification.additionalData.foreground) {
              let alert = this.alertCtrl.create({
                title: notification.title,
                message: notification.message,
                buttons: [{
                  text: 'ok',
                  handler: () => {
                    alert.dismiss();
                    this.loadNotification(notification);
                    return false;
                  }
                }]
              });
              alert.present();
           }
           this.loadNotification(notification);
        });

        pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
    }

    loadNotification(notification){
         let member_no=notification.additionalData.member_no;
         let loggedInUser = window.localStorage.getItem('loggedInUser');
         if(loggedInUser == null){
             this.http.get(config.data.api_url+':'+config.data.port+'/teacher/search?token='+func.global_function.getToken()+'&teacher_ac_no='+member_no)
                 .map(res => res.json())
                 .subscribe(res => {
                     let jsonresponse = res['user_list']; 
                     window.localStorage.setItem('loggedInUser', JSON.stringify(jsonresponse));
                     this.redirectModule(notification);
                 }, (err) => {
             });
         }
         else
         {
            this.redirectModule(notification);
         }
    }
    
    //Redirect to specific module
    redirectModule(notification){
         let module_id=notification.additionalData.module_id;
         let member_no=notification.additionalData.member_no;
         if(module_id==1){
              this.rootPage = ClassStory;
          }
          if(module_id==2){
               this.rootPage = Dashboard;
           }
           if(module_id==3){
              if(member_no.substr(0,1)=='2')
                  this.rootPage = Dashboard;
              else
                  this.rootPage = ParentMessagePage;
          }
          if(module_id==4){
             if(member_no.substr(0,1)=='2')
                 this.rootPage = Dashboard;
             else
                this.rootPage = ClassStory;
         }
    }
}

