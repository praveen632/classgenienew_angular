import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  getClassList(member_no) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classinfo/dashboard?token='+func.global_function.getToken()+'&teacher_ac_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  schoolvarify(member_no) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/teacher/search?token='+func.global_function.getToken()+'&member_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }


  getGradeList(member_no) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classlist?token='+func.global_function.getToken()+'&teacher_ac_no=' +member_no)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  /*Find the list of icon to choose for class */ 
  classIconPopup() {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/classinfo?token='+func.global_function.getToken())
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  createNewClass(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/classinfo',
        {
        token : func.global_function.getToken(),
        class_name: itemData.className,
        image: itemData.imageName,
        grade: itemData.selectGrade,
        teacher_ac_no: itemData.member_no,
        school_id: itemData.schoolId        
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateClass(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/classinfo/update',
        {
          token : func.global_function.getToken(),
          class_name: itemData.classname,
          image: itemData.imageName,
          grade: itemData.selectGrade,
          class_id:itemData.class_id,
          teacher_ac_no: itemData.member_no,
          school_id: itemData.schoolId        
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  removeClass(class_id) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/classinfo/delete',
        {
          token : func.global_function.getToken(),        
          class_id:class_id         
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
  getSchoolList(school_id){
    return new Promise((resolve, reject) => {
      this.http.get(config.data.api_url+':'+config.data.port+'/schools/teacherlist?token='+func.global_function.getToken()+'&school_id='+school_id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
  }

}

