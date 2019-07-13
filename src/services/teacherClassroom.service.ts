import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class TeacherClassroomService {

  constructor(private http: Http) { }   

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

  grouplisting(classId) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/groupinfo?token='+func.global_function.getToken()+'&class_id='+classId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  createGroup(lists_value,groupApiUrl) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+groupApiUrl,{group:lists_value,token:func.global_function.getToken()})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getGroupDetail(classId,groupId) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/groupinfo/group_studentlist?token='+func.global_function.getToken()+'&class_id='+classId+'&group_id='+groupId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getFeedbackOption(classId) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/points/student?token='+func.global_function.getToken()+'&class_id='+classId)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  giveReward(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/groupinfo/pointweight',dataParam)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteGroup(class_id,group_id) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/groupinfo/delete',{class_id:class_id,group_id:group_id,token:func.global_function.getToken()})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  studentAttendance(classId, date1) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/attendance/studentlist?token='+func.global_function.getToken()+'&class_id='+classId+'&date1='+date1)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveAttendance(attendanceList,date1) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/attendance/save',{student_list:attendanceList,date:date1,token:func.global_function.getToken()})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  resetAttendence(class_id,date1) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/attendance_reset',{class_id:class_id,date:date1,token:func.global_function.getToken()})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAttendanceMail(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/download_exl',dataParam)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  giveRewardToMultiStudent(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/awardmultiple/class',dataParam)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getClassPerformReport(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/class_perform?token='+func.global_function.getToken()+'&class_id='+dataParam.class_id+'&datetoken='+dataParam.datetoken+'&startdate='+dataParam.startdate+'&enddate='+dataParam.enddate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStudentPerformReport(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/report/student?token='+func.global_function.getToken()+'&class_id='+dataParam.class_id+'&datetoken='+dataParam.datetoken+'&student_info_no='+dataParam.student_info_no+'&startdate='+dataParam.startdate+'&enddate='+dataParam.enddate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  pointWeightList(pointListApiUrl) {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+pointListApiUrl+'?token='+func.global_function.getToken())
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  skillIconPopup() {
    return new Promise((resolve, reject) => {
        this.http.get(config.data.api_url+':'+config.data.port+'/editskills/imagelist?token='+func.global_function.getToken())
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateSkill(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/editskills/update',
        {
          token : func.global_function.getToken(),
          name: btoa((itemData.skill_name).toString()),
          pointweight: (itemData.skill_weight).toString(),
          image: (itemData.imageName).toString(),
          id:(itemData.skill_id).toString()            
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  removeSkill(skill_id) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/editskills/delete',
        {
          token : func.global_function.getToken(),         
          id:(skill_id).toString()            
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  addSkill(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/editskills',
        {
          token : func.global_function.getToken(),
          name: btoa((itemData.skill_name).toString()),
          pointweight: (itemData.skill_weight).toString(),
          image: (itemData.imageName).toString(),
          member_no:(itemData.member_no).toString(),
          class_id:(itemData.class_id).toString()            
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  removeStudent(student_id) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/addstudent/delete',
        {
          token : func.global_function.getToken(),
          id: (student_id).toString() 
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  giveRewardToSingleStudent(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/points/student/update',dataParam)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  giveRewardToClass(dataParam) {
    return new Promise((resolve, reject) => {
        this.http.post(config.data.api_url+':'+config.data.port+'/points/class/update',dataParam)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }   

}

