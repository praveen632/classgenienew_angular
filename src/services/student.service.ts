import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class StudentService {

  constructor(private http: Http) { } 

  addStudent(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/addstudent',
        {
          token : func.global_function.getToken(),
          name: itemData.name,
          class_id: itemData.class_id           
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  studentlisting(classId) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classinfo/studentlist?token='+func.global_function.getToken()+'&class_id='+classId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  studentIconPopup() {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/addstudent/list?token='+func.global_function.getToken())
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateStudent(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/addstudent/update',
        {
          token : func.global_function.getToken(),
          name: (itemData.name).toString(),         
          image: (itemData.imageName).toString(),         
          id:(itemData.id).toString()            
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}

