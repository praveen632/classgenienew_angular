import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as config  from '../assets/json/config';
import * as func from '../app/function';

@Injectable()
export class SchoolService {

  constructor(private http: Http) { } 

  saveschool(itemData) {
    return new Promise((resolve, reject) => {
        this.http.post(func.global_function.getToken()+':'+config.data.port+'/schools/addschoolslist',
        {
          token : config.data.api_token,
          school_name: itemData.schoolname,
          address:     itemData.address,
          city:        itemData.city,
          state:       itemData.state,
          country:     itemData.country,
          pincode:     itemData.pin,
          phone:       itemData.phone,
          email_id:    itemData.email,
          web_url:     itemData.site,
          member_no:itemData.member_no     
        })
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  approveSchool(school_name, teacher_name){
      return new Promise((resolve, reject) => {
        this.http.get(func.global_function.getToken()+':'+config.data.port+'/sendmail?token='+config.data.api_token+'&teacher_name='+teacher_name+'&school_name='+school_name+'&id='+6)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}

