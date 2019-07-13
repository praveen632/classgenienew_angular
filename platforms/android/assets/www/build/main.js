webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentSignup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentSignupPage_studentSignupPage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentSignup = (function () {
    function StudentSignup(navCtrl, altCtrl, studentService) {
        this.navCtrl = navCtrl;
        this.altCtrl = altCtrl;
        this.studentService = studentService;
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.item = {};
        this.student_no = {};
    }
    StudentSignup.prototype.ngOnInit = function () {
    };
    StudentSignup.prototype.saveStudent = function () {
        var _this = this;
        var stu = this.item['student_no'];
        if (stu.length >= 9) {
            this.studentService.saveStudents(this.item).then(function (result) {
                if (result['status'] == "Failure") {
                    var alert_1 = _this.altCtrl.create({
                        message: result['comments'],
                        buttons: [{
                                text: 'ok',
                                handler: function () {
                                    alert_1.dismiss();
                                    return false;
                                }
                            }]
                    });
                    alert_1.present();
                }
                else {
                    window.localStorage.setItem('student_list', JSON.stringify(result['user_list']));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__studentSignupPage_studentSignupPage__["a" /* StudentSignupPage */]);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            var alert_2 = this.altCtrl.create({
                message: 'Code length too short..',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert_2.dismiss();
                            return false;
                        }
                    }]
            });
            alert_2.present();
        }
    };
    StudentSignup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-studentSignup',template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentSignup\studentSignup.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n    STUDENT  INVITE\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n\n\n<form (ngSubmit)="saveStudent()" #itemForm="ngForm">\n\n<ion-list>\n\n<ion-item>\n\n \n\n    <ion-input type="text"  placeholder="ex.S123456" [(ngModel)]="item.student_no" name="student_no"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<div>\n\n<button [navPush]="studentsignupnew" ion-button color="orange"  class="button-block login0  mar45"  [disabled]="!itemForm.form.valid">Check student code\n\n</button>\n\n</div>\n\n\n\n</form>\n\n\n\n<div class="account-l">\n\nAlready have any account ? \n\n <button ion-button outline item-end  class="login-btn">\n\n    <a [navPush]="login">Login  </a> \n\n</button>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentSignup\studentSignup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__["a" /* StudentSignupService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__["a" /* StudentSignupService */]])
    ], StudentSignup);
    return StudentSignup;
}());

//# sourceMappingURL=studentSignup.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentSignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentSignupService = (function () {
    function StudentSignupService(http) {
        this.http = http;
    }
    StudentSignupService.prototype.saveStudents = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/add?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&student_no=' + data.student_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService.prototype.signupSave = function (data, stu_data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student', {
                username: data.username,
                age: data.age,
                password: data.password,
                id: stu_data[0].id,
                student_no: stu_data[0].student_no,
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService.prototype.getStudentList = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&student_ac_no=' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService.prototype.getStudentSearch = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/teacher/search?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&member_no=' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService.prototype.inviteParent = function (data, student_name, student_no, parent_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/sendmail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&email=' + data + '&id=4' + '&student_name='
                + student_name + '&student_no=' + student_no + '&parent_no=' + parent_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService.prototype.addStudent = function (data, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/addstudentcode?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&student_ac_no=' + member_no + '&student_no=' + data.student_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService.prototype.removeStudent = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/disconnect?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&student_no=' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentSignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StudentSignupService);
    return StudentSignupService;
}());

//# sourceMappingURL=studentSignup.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentStory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_studentStory_service__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentStory = (function () {
    function StudentStory(navCtrl, studentstoryService) {
        this.navCtrl = navCtrl;
        this.studentstoryService = studentstoryService;
        this.loggedInUser = {};
        this.classList = [];
        this.status = '';
        this.kidstory = 0;
    }
    StudentStory.prototype.ngOnInit = function () {
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.status = window.localStorage.getItem('stud_status');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.getClassid();
    };
    StudentStory.prototype.getClassid = function () {
        var _this = this;
        this.studentstoryService.getclassid(this.loggedInUser.member_no).then(function (res) {
            _this.classList = window.localStorage.setItem('classid', res['class_id']);
        }, function (err) {
            console.log(err);
        });
    };
    StudentStory.prototype.loadData = function () {
        if (this.kidstory == 0) {
            this.studentstoryService.getclassid(this.loggedInUser.member_no).then(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
        else {
        }
    };
    StudentStory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentStory\studentStory.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n          Story\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n<ion-list>\n\n<div class="class-section">\n\n	<button ion-button class="class-btn  width-c">Class Story</button>\n\n	<button ion-button outline   class="kid-btn width-c">Your Story</button>\n\n	<button ion-button outline   class="kid-btn width-c">My Story</button>\n\n</div>\n\n</ion-list>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentStory\studentStory.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_studentStory_service__["a" /* StudentstoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_studentStory_service__["a" /* StudentstoryService */]])
    ], StudentStory);
    return StudentStory;
}());

//# sourceMappingURL=studentStory.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentcodecheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parentSignup_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classStory_classStory__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__yourkids_yourkids__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParentcodecheckPage = (function () {
    function ParentcodecheckPage(navCtrl, parentsignupService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.parentsignupService = parentsignupService;
        this.toastCtrl = toastCtrl;
        this.item = {};
        this.classstory = __WEBPACK_IMPORTED_MODULE_3__classStory_classStory__["a" /* ClassStory */];
        this.yourkids = __WEBPACK_IMPORTED_MODULE_4__yourkids_yourkids__["a" /* YourkidsPage */];
        this.loggedInUser = {};
    }
    ParentcodecheckPage.prototype.ngOnInit = function () {
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
    };
    ParentcodecheckPage.prototype.checkparentcode = function () {
        var _this = this;
        this.parentsignupService.checkParentcodecheck(this.item, this.loggedInUser.member_no).then(function (result) {
            if (result['status'] == "Success") {
                if (result['student_list'].length < 2) {
                    _this.navCtrl.push(_this.classstory);
                }
                else {
                    _this.navCtrl.push(_this.yourkids);
                    var toast = _this.toastCtrl.create({
                        message: 'student successfully added..',
                        duration: 2000,
                        position: 'Show Middle'
                    });
                    toast.present();
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    ParentcodecheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentcodecheck\parentcodecheck.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    Parent Code Check\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding  class="body-back1">\n\n\n\n\n\n	<form (ngSubmit)="checkparentcode()" #itemForm="ngForm">\n\n  \n\n\n\n\n\n<ion-list>\n\n<ion-item>\n\n <ion-input type="text"  placeholder="ex.P123456" [(ngModel)]="item.parent_no" name="parent_no" ></ion-input>\n\n</ion-item>\n\n</ion-list>\n\n\n\n \n\n\n\n<div>\n\n <button type="submit" ion-button color="orange"  class="button-block login0 mar45" [disabled]="!itemForm.form.valid">Check parents code</button>\n\n</div>\n\n</form>\n\n\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentcodecheck\parentcodecheck.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_parentSignup_service__["a" /* ParentsignupService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_parentSignup_service__["a" /* ParentsignupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ParentcodecheckPage);
    return ParentcodecheckPage;
}());

//# sourceMappingURL=parentcodecheck.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourkidsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_kidsList_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parentcodecheck_parentcodecheck__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var YourkidsPage = (function () {
    function YourkidsPage(navCtrl, kidslistService) {
        this.navCtrl = navCtrl;
        this.kidslistService = kidslistService;
        this.check_parent_code = __WEBPACK_IMPORTED_MODULE_3__parentcodecheck_parentcodecheck__["a" /* ParentcodecheckPage */];
        this.kidsList = [];
        this.loggedInUser = {};
    }
    YourkidsPage.prototype.ngOnInit = function () {
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.getKids();
    };
    YourkidsPage.prototype.getKids = function () {
        var _this = this;
        this.kidslistService.getKidsList(this.loggedInUser.member_no).then(function (res) {
            _this.kidsList = res['student_list'];
            console.log(_this.kidsList);
        }, function (err) {
            console.log(err);
        });
    };
    YourkidsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\yourkids\yourkids.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Your Kids</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<div class="content-p  m-school  add-c">\n\n<h2>Your Kids</h2>\n\n<div class="add-c2">\n\n <ion-grid>\n\n  <ion-row *ngFor="let branch of kidsList">\n\n    \n\n    <ion-col col-10><h3>{{branch.name}} </h3>\n\n    </ion-col>\n\n </ion-row>\n\n </ion-grid>\n\n</div>\n\n<div class="add-c1">\n\n  <a [navPush]="check_parent_code">\n\n  <ion-grid>\n\n  <ion-row>\n\n    <ion-col col-1>  <ion-icon name="add-circle"></ion-icon></ion-col>\n\n    <ion-col col-10><h3> Add New Parent Code</h3></ion-col> \n\n  </ion-row>\n\n </ion-grid>\n\n</a>\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\yourkids\yourkids.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_kidsList_service__["a" /* KidsListServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_kidsList_service__["a" /* KidsListServices */]])
    ], YourkidsPage);
    return YourkidsPage;
}());

//# sourceMappingURL=yourkids.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinSchoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_base64__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_base64__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JoinSchoolService = (function () {
    function JoinSchoolService(http) {
        this.http = http;
        this.join = {};
    }
    JoinSchoolService.prototype.listSchool = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/list?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + '&member_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JoinSchoolService.prototype.teacherList = function (school_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/teacherlist?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + '&school_id=' + school_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JoinSchoolService.prototype.joinyourSchool = function (school_id, member_no, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/joinschools', {
                token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(),
                school_id: school_id.toString(),
                member_no: member_no,
                type: type
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JoinSchoolService.prototype.joinSchoolMailSend = function (Toemail, member_no) {
        var _this = this;
        var email = __WEBPACK_IMPORTED_MODULE_4_js_base64__["Base64"].encode(Toemail);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/sendmail?id=' + 5, {
                token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(),
                emaildata: email,
                member_no: member_no
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JoinSchoolService.prototype.filterSchoolItems = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/search?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + '&school_name=' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    JoinSchoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], JoinSchoolService);
    return JoinSchoolService;
}());

//# sourceMappingURL=joinSchool.service.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassIcon = (function () {
    function ClassIcon(navCtrl, dashboardService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.dashboardService = dashboardService;
        this.viewCtrl = viewCtrl;
        this.iconList = [];
        this.iconImageBase = '';
    }
    ClassIcon.prototype.ngOnInit = function () {
        this.iconImageBase = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "class/";
        this.classIconPopup();
    };
    /*Find the list of icon to choose for class */
    ClassIcon.prototype.classIconPopup = function () {
        var _this = this;
        this.dashboardService.classIconPopup().then(function (res) {
            _this.iconList = res['user_list'];
        }, function (err) {
            console.log(err);
        });
    };
    ClassIcon.prototype.setImage = function (imageName) {
        this.viewCtrl.dismiss({ 'selectedIcon': imageName });
        window.localStorage.setItem('classIcon', imageName);
        //this.navCtrl.push(AddNewClass);
        //this.navCtrl.setRoot(AddNewClass);
    };
    ClassIcon = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\classIcon\classIcon.html"*/`\n\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n  	\n\n    <ion-title>\n\n     Choose Smiley      \n\n    </ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n<img *ngFor="let x of iconList" src={{iconImageBase}}{{x.image}} (tap)="setImage(x.image)"  name="add_class_user" />\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\classIcon\classIcon.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ClassIcon);
    return ClassIcon;
}());

//# sourceMappingURL=classIcon.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolStoryupdatePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editschoolstoryPost_editschoolstoryPost__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schoolStory_schoolStory__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolStoryupdatePopoverPage = (function () {
    function SchoolStoryupdatePopoverPage(viewCtrl, schoolStoryService, navCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.schoolStoryService = schoolStoryService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.post_id = '';
        this.member_no = '';
        this.loggedInUser = {};
    }
    SchoolStoryupdatePopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SchoolStoryupdatePopoverPage.prototype.editSchoolstory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editschoolstoryPost_editschoolstoryPost__["a" /* EditSchoolstoryPostPage */]);
    };
    SchoolStoryupdatePopoverPage.prototype.deleteSchoolstory = function () {
        var _this = this;
        this.post_id = window.localStorage.getItem('postid');
        this.post_id = this.post_id.toLocaleString();
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        var alert = this.alertCtrl.create({
            title: 'Please Confirm!',
            message: 'Are you sure you want to delete this post?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.schoolStoryService.deleteSchoolstoryPost(_this.post_id, _this.member_no).then(function (res) {
                            if (res['status'] == "Success") {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__schoolStory_schoolStory__["a" /* SchoolStory */]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SchoolStoryupdatePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherSchoolstoryupdatePopover\teacherSchoolstoryupdatePopover.html"*/`<div class="abcd">\n\n<ion-list>\n\n      \n\n      <button ion-item (click)="editSchoolstory();" tappable>Edit Story</button>\n\n      <button ion-item (click)="deleteSchoolstory();" tappable>Delete</button>\n\n      \n\n</ion-list>\n\n</div>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherSchoolstoryupdatePopover\teacherSchoolstoryupdatePopover.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SchoolStoryupdatePopoverPage);
    return SchoolStoryupdatePopoverPage;
}());

//# sourceMappingURL=teacherSchoolstoryupdatePopover.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherClassroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addStudent_addStudent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editStudent_editStudent__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addGroup_addGroup__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teacherClassstory_teacherClassstory__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__studentPopoverMenu_studentPopoverMenu__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__awardGroup_awardGroup__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__teacherClassroomPopovermenu_teacherClassroomPopovermenu__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__attendence_attendence__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__awardMultiStudent_awardMultiStudent__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__viewReport_viewReport__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var TeacherClassroomPage = (function () {
    function TeacherClassroomPage(navCtrl, teacherClassroomService, alertCtrl, toastCtrl, popoverCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.teacherClassroomService = teacherClassroomService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.addStudent = __WEBPACK_IMPORTED_MODULE_2__addStudent_addStudent__["a" /* AddStudent */];
        this.addGroup = __WEBPACK_IMPORTED_MODULE_6__addGroup_addGroup__["a" /* AddGroup */];
        this.attendence = __WEBPACK_IMPORTED_MODULE_12__attendence_attendence__["a" /* Attendence */];
        this.awardMultiStudent = __WEBPACK_IMPORTED_MODULE_13__awardMultiStudent_awardMultiStudent__["a" /* AwardMultiStudent */];
        this.viewReport = __WEBPACK_IMPORTED_MODULE_14__viewReport_viewReport__["a" /* ViewReport */];
        this.item = {};
        this.class_studentlist = [];
        this.groupList = [];
        this.imageBasePath = '';
        this.student = {};
        this.currentTab = 'student';
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_7__teacherClassstory_teacherClassstory__["a" /* TeacherClassstoryPage */];
    }
    TeacherClassroomPage.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.item.classimage = window.localStorage.getItem('classimage');
        this.item.classgrade = window.localStorage.getItem('classgrade');
        this.item.classpoint = window.localStorage.getItem('classpoint');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_5__assets_json_config__["a" /* data */].image_url;
        this.studentlisting();
        this.grouplisting();
        if (this.navParams.get("currentTab")) {
            this.currentTab = this.navParams.get("currentTab");
        }
        else if (window.localStorage.getItem('currentTab')) {
            this.currentTab = window.localStorage.getItem('currentTab');
            window.localStorage.removeItem('currentTab');
        }
        else {
            this.currentTab = 'student';
        }
    };
    TeacherClassroomPage.prototype.studentlisting = function () {
        var _this = this;
        this.teacherClassroomService.studentlisting(this.item.class_id).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['class_details']['student_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherClassroomPage.prototype.editStudentPage = function (id, name, imageName) {
        alert(name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editStudent_editStudent__["a" /* EditStudent */], { id: id, name: name, imageName: imageName });
    };
    TeacherClassroomPage.prototype.openGroupTab = function () {
        this.currentTab = 'group';
        this.grouplisting();
    };
    TeacherClassroomPage.prototype.openStudentTab = function () {
        this.currentTab = 'student';
        this.studentlisting();
    };
    TeacherClassroomPage.prototype.grouplisting = function () {
        var _this = this;
        this.teacherClassroomService.grouplisting(this.item.class_id).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.groupList = resp['group_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherClassroomPage.prototype.openPopover = function (myEvent, id, name, imageName) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__studentPopoverMenu_studentPopoverMenu__["a" /* StudentPopoverMenu */]);
        popover.present({
            ev: myEvent
        });
    };
    TeacherClassroomPage.prototype.openGroupDetail = function (groupId, groupName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__awardGroup_awardGroup__["a" /* AwardGroup */], { 'class_id': this.item.class_id, 'groupId': groupId, 'groupName': groupName });
    };
    TeacherClassroomPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard__["a" /* Dashboard */]);
        window.localStorage.removeItem('classid');
        window.localStorage.removeItem('classname');
        window.localStorage.removeItem('currentTab');
    };
    TeacherClassroomPage.prototype.openheaderMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__teacherClassroomPopovermenu_teacherClassroomPopovermenu__["a" /* ClassroomPopovermenuPage */]);
        popover.present({
            ev: myEvent
        });
    };
    TeacherClassroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassroom\teacherClassroom.html"*/`<ion-header>\n\n  <ion-navbar >    \n\n    <ion-icon name="arrow-back" (click)="back();" tappable></ion-icon>\n\n    <ion-title>\n\n<div class="login-g das">\n\n    {{item.classname}}\n\n<ion-icon name="more" (click)="openheaderMenu($event);" tappable></ion-icon> \n\n</div>\n\n</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<div class="back-c">\n\n\n\n<div class="class-section">\n\n\n\n<button *ngIf="currentTab==\'student\'" ion-button class="class-btn  width-c" (tap)="openStudentTab()">\n\n  Students\n\n </button>\n\n <button *ngIf="currentTab != \'student\'" ion-button outline class="kid-btn  width-c" (tap)="openStudentTab()">\n\n  Students\n\n </button>\n\n\n\n<button *ngIf="currentTab != \'student\'" ion-button class="class-btn width-c" (tap)="openGroupTab()"> \n\nGroups\n\n</button>\n\n<button *ngIf="currentTab == \'student\'" ion-button outline class="kid-btn width-c" (tap)="openGroupTab()"> \n\nGroups\n\n</button>\n\n\n\n</div>\n\n\n\n<!-- content -->\n\n\n\n<!-- START FOR STUDENT TAB CONTENT -->\n\n<div class="class-sec" *ngIf="currentTab==\'student\'">\n\n  <ion-grid>\n\n   <ion-row>\n\n    <!-- FOR CLASS -->\n\n     <ion-col width-25 >\n\n        <div class="back-change  room-high  font-icon">\n\n          <div>\n\n         \n\n            <div class="menu-class {{ item.classpoint>0? \'positivePoint\':item.classpoint<0?\'negativePoint\':\'\' }}">\n\n           <b class="ng-binding">{{item.classpoint}}</b>\n\n           </div>\n\n          </div>\n\n          <div>\n\n          <img src="{{imageBasePath}}assets/class/{{item.classimage}}"> \n\n          </div>\n\n          <p> {{item.classname}} </p>\n\n        </div>\n\n    </ion-col>\n\n    <!-- FOR STUDENT LIST -->  \n\n     <ion-col width-25 *ngFor=" let student of class_studentlist">\n\n        <div class="back-change change-back  room-high  font-icon">\n\n          <div>\n\n           <div class="redius_cont">\n\n             <ion-icon name="more" (click)="openPopover($event,student.id,student.name,student.image)"></ion-icon>\n\n           </div>\n\n            <div class="menu-class {{ student.pointweight>0? \'positivePoint\':student.pointweight<0?\'negativePoint\':\'\' }}">\n\n           <b class="ng-binding ">{{student.pointweight}}</b>\n\n           </div>\n\n          </div>\n\n          <div>\n\n          <img src="{{imageBasePath}}assets/student/{{student.image}}"> \n\n          </div>\n\n          <p>{{student.name}} </p>\n\n        </div>\n\n    </ion-col>   \n\n   \n\n      \n\n     <!-- FOR ADD STUDENT ICON -->   \n\n   <ion-col width-25>\n\n  <div class="back-change  change-back  room-high   plus-icon">\n\n    <a [navPush]="addStudent">  <ion-icon name="add"></ion-icon> </a> \n\n    <p> Add </p>\n\n  </div>\n\n  </ion-col>\n\n  \n\n   </ion-row>\n\n</ion-grid>\n\n</div>\n\n<!-- END FOR STUDENT TAB CONTENT -->\n\n\n\n\n\n<!-- START FOR GROUP TAB CONTENT -->\n\n<div class="class-sec" *ngIf="currentTab==\'group\'">\n\n  <ion-grid>\n\n   <ion-row>\n\n    \n\n    <!-- FOR GROUP LIST -->  \n\n     <ion-col width-25 *ngFor=" let gr of groupList" (click)="openGroupDetail(gr.id,gr.group_name)" tappable>\n\n        <div class="back-change change-back  room-high  font-icon">\n\n          <div>\n\n           \n\n          <div class="menu-class {{ gr.pointweight>0? \'positivePoint\':gr.pointweight<0?\'negativePoint\':\'\' }}">\n\n           <b class="ng-binding ">{{gr.pointweight}}</b>\n\n          </div>\n\n          </div>\n\n          <div>\n\n            <img  src="assets/imgs/one.png" *ngIf="gr.total_no_of_student == 1">\n\n            <img  src="assets/imgs/two.png" *ngIf="gr.total_no_of_student == 2">\n\n            <img  src="assets/imgs/three.png" *ngIf="gr.total_no_of_student == 3">\n\n            <img  src="assets/imgs/four.png" *ngIf="gr.total_no_of_student > 3"> \n\n          </div>\n\n          <p>{{gr.group_name}} </p>\n\n        </div>\n\n    </ion-col>   \n\n   \n\n      \n\n     <!-- FOR ADD GROUP ICON -->   \n\n   <ion-col width-25>\n\n  <div class="back-change  change-back  room-high   plus-icon">\n\n    <a [navPush]="addGroup">  <ion-icon name="add"></ion-icon> </a> \n\n    <p> Add </p>\n\n  </div>\n\n  </ion-col>\n\n  \n\n   </ion-row>\n\n</ion-grid>\n\n</div>\n\n<!-- END FOR GROUP TAB CONTENT -->\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n<!-- footer code only for student tab-->\n\n\n\n<ion-footer class="foooter-section" *ngIf="currentTab==\'student\'">\n\n  <ion-toolbar>\n\n     <ion-grid>\n\n   <ion-row>\n\n <ion-col col-4>\n\n  <div class="">\n\n <a href="" [navPush]="attendence"><ion-icon name="calendar"></ion-icon>Attendance </a>\n\n</div>\n\n</ion-col>\n\n<ion-col col-4>\n\n <div class="footer">\n\n <a href="" [navPush]="awardMultiStudent"><ion-icon ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>Award multiple </a>\n\n</div>\n\n</ion-col>\n\n  <ion-col col-4>\n\n    <div class="footer">\n\n <a href="" [navPush]="viewReport"><ion-icon ios="ios-stats" md="md-stats"></ion-icon> View Report  </a>\n\n</div>\n\n  </ion-col>\n\n</ion-row>\n\n </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<!-- footer end -->`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassroom\teacherClassroom.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeacherClassroomPage);
    return TeacherClassroomPage;
}());

//# sourceMappingURL=teacherClassroom.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddGroup = (function () {
    function AddGroup(navCtrl, teacherClassroomService, alertCtrl, navParams, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.teacherClassroomService = teacherClassroomService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.class_studentlist = [];
        this.item = {};
        this.imageBasePath = '';
        this.selectedStudent = [];
        this.groupStudentListing = [];
        this.groupdata = [];
        this.loading = loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    }
    AddGroup.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.item.groupId = this.navParams.get("groupId");
        this.item.groupname = this.navParams.get("groupName");
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].image_url;
        this.item.student_list = '';
        this.studentlisting();
        //if there is group id it means it is edit case so fetch the group detail
        if (this.item.groupId) {
            this.getGroupDetail();
        }
    };
    AddGroup.prototype.studentlisting = function () {
        var _this = this;
        this.teacherClassroomService.studentlisting(this.item.class_id).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['class_details']['student_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddGroup.prototype.selectStudent = function (student_no) {
        this.item.student_list = '';
        if (this.selectedStudent.indexOf(student_no) !== -1) {
            var ax = this.selectedStudent.indexOf(student_no);
            this.selectedStudent.splice(ax, 1);
        }
        else {
            this.selectedStudent.push(student_no);
        }
        for (var i = 0; i < (this.class_studentlist).length; i++) {
            if (this.selectedStudent.indexOf(this.class_studentlist[i].student_no) !== -1) {
                this.item.student_list += ", " + this.class_studentlist[i].name;
            }
        }
    };
    AddGroup.prototype.createGroup = function () {
        var _this = this;
        if ((this.selectedStudent).length < 2) {
            var alert_1 = this.alertCtrl.create({
                message: 'Add more than one students to the group',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert_1.dismiss();
                            return false;
                        }
                    }]
            });
            alert_1.present();
            return false;
        }
        this.groupdata = [];
        //if there is group id then need to update else create the group
        if (this.item.groupId) {
            var groupApiUrl = '/groupinfo/update';
            var successMessage = 'Group Updated Successfully!';
        }
        else {
            var groupApiUrl = '/groupinfo/addgroup';
            var successMessage = 'Group Created Successfully!';
        }
        for (var i = 0; i < (this.selectedStudent).length; i++) {
            if (this.item.groupId) {
                this.groupdata.push({ 'class_id': this.item.class_id, 'student_no': this.selectedStudent[i], 'group_name': this.item.groupname, 'group_id': this.item.groupId });
            }
            else {
                this.groupdata.push({ 'class_id': this.item.class_id, 'student_no': this.selectedStudent[i], 'group_name': this.item.groupname });
            }
        }
        var lists_value = btoa(JSON.stringify(this.groupdata));
        this.teacherClassroomService.createGroup(lists_value, groupApiUrl).then(function (resp) {
            if (resp['message'] == "Failure") {
                var alert_2 = _this.alertCtrl.create({
                    message: 'Group Name already exists!',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
                return false;
            }
            else if (resp['status'] == "Success") {
                var alert_3 = _this.alertCtrl.create({
                    message: successMessage,
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_3.dismiss();
                                return false;
                            }
                        }]
                });
                //this.navCtrl.setRoot(TeacherClasstab);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */], { currentTab: 'group', classid: _this.item.class_id,
                    classname: _this.item.classname });
                alert_3.present();
                //this.events.publish('reloadDetails');
                return false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddGroup.prototype.getGroupDetail = function () {
        var _this = this;
        this.teacherClassroomService.getGroupDetail(this.item.class_id, this.item.groupId).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.groupStudentListing = resp['student_info'];
                for (var i = 0; i < (_this.groupStudentListing).length; i++) {
                    _this.selectStudent(_this.groupStudentListing[i].student_no);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddGroup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\addGroup\addGroup.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\n    {{item.groupId ? \'Edit Group\' : \'Add Group\'}} \n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content >\n\n<form #addGroupForm="ngForm" (submit)="createGroup()">\n\n<div class="back-c">\n\n<!-- content -->\n\n<div class="m-school">\n\n<!--listing code here -->\n\n<div class="list-margin">\n\n<ion-list>\n\n<ion-item>\n\n    <ion-label floating>Group Name</ion-label>\n\n    <ion-input id="groupname" name="groupname" type="text" placeholder="Group name"  [(ngModel)]="item.groupname" required></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Students</ion-label>\n\n    <ion-input disabled id="student_list" name="student_list" type="text" placeholder="Student list"  [(ngModel)]="item.student_list" required></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n<div>\n\n<button ion-button color="orange"  class="button-block  save-btn" [disabled]="!addGroupForm.form.valid" >Save changes\n\n</button>\n\n</div>\n\n</div> \n\n  <!--listing code end -->\n\n</div>\n\n\n\n<!--list-->\n\n<div class="content-p  add-list">\n\n  <div>\n\n<ion-list *ngFor=" let student of class_studentlist" class="{{ selectedStudent.indexOf(student.student_no) !== -1 ? \' list list-md selectedBg\' : \'list list-md\' }}">\n\n    <ion-item (click)="selectStudent(student.student_no)" tappable>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imageBasePath}}assets/student/{{student.image}}">  \n\n      </ion-thumbnail>\n\n      <h2>{{student.name}}</h2>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n</div>\n\n</div>\n\n\n\n<!-- end-->\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</form>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\addGroup\addGroup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AddGroup);
    return AddGroup;
}());

//# sourceMappingURL=addGroup.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherClassstoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inviteparents_inviteparents__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacherClassStoryPosts_teacherClassStoryPosts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeacherClassstoryPage = (function () {
    function TeacherClassstoryPage(navCtrl, teacherclassstoryService) {
        this.navCtrl = navCtrl;
        this.teacherclassstoryService = teacherclassstoryService;
        this.classid = '';
        this.studentList = [];
        this.classstoryposts = __WEBPACK_IMPORTED_MODULE_4__teacherClassStoryPosts_teacherClassStoryPosts__["a" /* TeacherClassstoryPostsPage */];
        this.inviteparents = __WEBPACK_IMPORTED_MODULE_3__inviteparents_inviteparents__["a" /* InviteparentsPage */];
        this.parent_ac_no = '';
        this.student_no = '';
        this.dashboard = __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* Dashboard */];
        this.classname = '';
    }
    TeacherClassstoryPage.prototype.ngOnInit = function () {
        this.classname = window.localStorage.getItem('classname');
        this.getStudentmessageList();
    };
    TeacherClassstoryPage.prototype.openInviteparents = function () {
        //this.navCtrl.setRoot(this.inviteparents);
        this.navCtrl.push(this.inviteparents);
    };
    TeacherClassstoryPage.prototype.getStudentmessageList = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.teacherclassstoryService.getStudentMessagelist(this.classid).then(function (res) {
            _this.studentList = res['user_list'];
            console.log(_this.studentList);
        }, function (err) {
            console.log(err);
        });
    };
    TeacherClassstoryPage.prototype.openClassStory = function (parent_ac_no, student_no) {
        this.navCtrl.push(this.classstoryposts, {
            parent_ac_no: parent_ac_no,
            student_no: student_no
        });
    };
    TeacherClassstoryPage.prototype.allClassStory = function () {
        this.navCtrl.push(this.classstoryposts);
    };
    TeacherClassstoryPage.prototype.back = function () {
        this.navCtrl.push(this.dashboard);
        window.localStorage.removeItem('classid');
        window.localStorage.removeItem('classname');
    };
    TeacherClassstoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassstory\teacherClassstory.html"*/`<!-- logo -->\n\n<ion-header>\n\n  <ion-navbar >\n\n    <ion-icon name="arrow-back" (click)="back();" tappable></ion-icon>\n\n    <ion-title>\n\n  {{classname}}\n\n  </ion-title>\n\n  \n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo code -->\n\n\n\n<ion-content padding>\n\n  <div class="back-c  search-c">\n\n\n\n  <div class="head-con">\n\n<h3>Student\'s List</h3>\n\n </div>\n\n\n\n<!-- content -->\n\n<div class="m-school  mar-t">\n\n\n\n<!--listing code here -->\n\n<div class="list-margin">\n\n<div class="add-c  content-p">\n\n<div>\n\n\n\n          <a (click) ="allClassStory();" tappable>\n\n            <ion-list>\n\n                <ion-item>\n\n                  <ion-thumbnail item-start>\n\n                    <img src="assets/imgs/school_icon.png">  \n\n                       </ion-thumbnail>\n\n          \n\n            <h2>Whole Class Story</h2>\n\n           </ion-item>\n\n  </ion-list> \n\n          </a>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let studentItem of studentList" (click) ="openClassStory(studentItem.parent_ac_no,studentItem.student_no);" tappable>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imagePath}}class/{{studentItem.image}}">  \n\n      </ion-thumbnail>\n\n          <h2>{{studentItem.name}}</h2>\n\n\n\n\n\n          <a>\n\n            <span *ngIf="studentItem.parent_ac_no==\'0\'" (tap)="openInviteparents();" tappable> Invite parent</span></a>\n\n         </ion-item>\n\n      </ion-list>\n\n       </div>\n\n        </div>\n\n              </div>\n\n             \n\n         </div>\n\n      </div>\n\n</ion-content>\n\n\n\n `/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassstory\teacherClassstory.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]])
    ], TeacherClassstoryPage);
    return TeacherClassstoryPage;
}());

//# sourceMappingURL=teacherClassstory.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassStoryPopovermenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editclassstoryPost_editclassstoryPost__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacherClassStoryPosts_teacherClassStoryPosts__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClassStoryPopovermenuPage = (function () {
    function ClassStoryPopovermenuPage(viewCtrl, navCtrl, alertCtrl, teacherclassstoryService) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.teacherclassstoryService = teacherclassstoryService;
        this.class_id = '';
        this.post_id = '';
        this.editclassstorypost = __WEBPACK_IMPORTED_MODULE_2__editclassstoryPost_editclassstoryPost__["a" /* EditclassstoryPostPage */];
        this.classstoryposts = __WEBPACK_IMPORTED_MODULE_4__teacherClassStoryPosts_teacherClassStoryPosts__["a" /* TeacherClassstoryPostsPage */];
    }
    ClassStoryPopovermenuPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClassStoryPopovermenuPage.prototype.editPost = function () {
        this.navCtrl.push(this.editclassstorypost);
    };
    ClassStoryPopovermenuPage.prototype.deletePost = function () {
        var _this = this;
        this.post_id = window.localStorage.getItem('postid');
        this.class_id = window.localStorage.getItem('classid');
        this.post_id = this.post_id.toLocaleString();
        var alert = this.alertCtrl.create({
            title: 'Please Confirm!',
            message: 'Are you sure you want to delete this post?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.teacherclassstoryService.deletePost(_this.post_id, _this.class_id).then(function (res) {
                            if (res['status'] == "Success") {
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
        this.navCtrl.push(this.classstoryposts);
    };
    ClassStoryPopovermenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassstoryPopovermenu\teacherClassstoryPopovermenu.html"*/`<div class="abcd">\n\n<ion-list>\n\n      \n\n      <button ion-item (click)="editPost()">Edit Post</button>\n\n      <button ion-item (click)="deletePost()">Delete Post</button>\n\n      \n\n</ion-list>\n\n</div>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassstoryPopovermenu\teacherClassstoryPopovermenu.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]])
    ], ClassStoryPopovermenuPage);
    return ClassStoryPopovermenuPage;
}());

//# sourceMappingURL=teacherClassstoryPopovermenu.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassstoryLikesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassstoryLikesPage = (function () {
    function ClassstoryLikesPage(navCtrl, teacherclassstoryService, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.teacherclassstoryService = teacherclassstoryService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.like_list_items = [];
        this.randno = '';
        this.storyid = this.navParams.get("storyid");
        this.classid = this.navParams.get("classid");
    }
    ClassstoryLikesPage.prototype.ngOnInit = function () {
        this.loadlike();
    };
    ClassstoryLikesPage.prototype.getRandom = function () {
        return Math.random();
    };
    ClassstoryLikesPage.prototype.loadlike = function () {
        var _this = this;
        this.teacherclassstoryService.Likelist(this.classid, this.storyid).then(function (result) {
            if (result['status'] == "Success") {
                var data1 = result['like_list'];
                _this.like_list_items = data1;
                for (var i = 0; i < data1.length; i++) {
                    _this.randno = _this.getRandom();
                }
            }
            else {
            }
        }, function (err) {
        });
    };
    ClassstoryLikesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\classstoryLikes\classstoryLikes.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Likes\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <div class="list add-student">\n\n          <ion-list id="student_list">\n\n            <ion-item class="item-avatar" *ngFor="let item of like_list_items">            >\n\n            <img src="{{imagePath}}profile_image/{{item.name.image}}?{{randno}}" *ngIf="item.name.image!==\'\'"/> \n\n            <img ng-src="img/chat_user.png" ng-if="item.name.image==\'\'" /> \n\n            <h2 ng-model="className" class="class_name_heading" *ngIf="item.name!=\'\'">{{item.name.name}} </h2>\n\n            <h2 ng-model="className" class="class_name_heading" *ngIf="item.student_name!=\'\'">{{item.student_name}} </h2>\n\n            </ion-item>\n\n          </ion-list>\n\n      </div>\n\n \n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\classstoryLikes\classstoryLikes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ClassstoryLikesPage);
    return ClassstoryLikesPage;
}());

//# sourceMappingURL=classstoryLikes.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiveGroupfeedback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GiveGroupfeedback = (function () {
    function GiveGroupfeedback(navCtrl, navParams, teacherClassroomService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.loadingCtrl = loadingCtrl;
        this.item = {};
        this.currentTab = 'positive';
        this.imageBasePath = '';
        this.optionPositive = [];
        this.optionNegative = [];
        this.selectedStudent = [];
    }
    GiveGroupfeedback.prototype.ngOnInit = function () {
        this.item.class_id = this.navParams.get("class_id");
        this.item.class_name = window.localStorage.getItem('classname');
        this.item.groupId = this.navParams.get("groupId");
        this.item.groupName = this.navParams.get("groupName");
        this.item.awardMultiStudent = this.navParams.get("awardMultiStudent");
        this.item.awardSingleStudent = this.navParams.get("awardSingleStudent");
        this.item.awardWholeClass = this.navParams.get("awardWholeClass");
        if (this.item.groupId) {
            this.item.headerTitlePart = this.item.groupName;
        }
        else if (this.item.awardMultiStudent) {
            this.item.headerTitlePart = 'selected students';
        }
        else if (this.item.awardSingleStudent) {
            //this.item.headerTitlePart = this.item.studentName;
        }
        else if (this.item.awardWholeClass) {
            this.item.headerTitlePart = 'Whole Class';
        }
        this.selectedStudent = this.navParams.get("selectedStudent");
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url;
        this.getFeedbackOption();
    };
    GiveGroupfeedback.prototype.initLOader = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    };
    GiveGroupfeedback.prototype.getFeedbackOption = function () {
        var _this = this;
        this.initLOader();
        this.loading.present();
        this.teacherClassroomService.getFeedbackOption(this.item.class_id).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.optionPositive = resp['user_list'];
                _this.optionNegative = resp['needwork'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    GiveGroupfeedback.prototype.giveReward = function (pointweight, skills_id) {
        //if this page called by group reward then call feedback for group
        if (this.item.groupId) {
            this.giveRewardToGroup(pointweight, skills_id);
        }
        else if (this.item.awardMultiStudent) {
            this.giveRewardToMultiStudent(pointweight, skills_id);
        }
    };
    GiveGroupfeedback.prototype.giveRewardToGroup = function (pointweight, skills_id) {
        var _this = this;
        this.initLOader();
        this.loading.present();
        var dataParam = {
            group_name: (this.item.groupName).toString(),
            pointweight: (pointweight).toString(),
            class_id: (this.item.class_id).toString(),
            group_id: (this.item.groupId).toString(),
            customize_skills_id: (skills_id).toString(),
            token: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getToken()
        };
        this.teacherClassroomService.giveReward(dataParam).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                //this.navCtrl.pop(AwardGroup);
                //this.navCtrl.pop();     
                //this.navCtrl.setRoot(TeacherClasstab,{currentTab:'group',classid: this.item.class_id, classname: this.item.class_name});   
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */], { currentTab: 'group', classid: _this.item.class_id, classname: _this.item.class_name });
                //this.navCtrl.setRoot(TeacherClasstab);
            }
        }, function (err) {
            console.log(err);
        });
    };
    GiveGroupfeedback.prototype.giveRewardToMultiStudent = function (pointweight, skills_id) {
        var _this = this;
        this.initLOader();
        this.loading.present();
        var dataParam = {
            id: this.selectedStudent,
            pointweight: (pointweight).toString(),
            class_id: (this.item.class_id).toString(),
            customize_skills_id: (skills_id).toString()
        };
        var finalParam = {
            data: JSON.stringify(dataParam),
            token: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getToken()
        };
        this.teacherClassroomService.giveRewardToMultiStudent(finalParam).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */], { classid: _this.item.class_id, classname: _this.item.class_name });
                //this.navCtrl.setRoot(TeacherClasstab);
            }
        }, function (err) {
            console.log(err);
        });
    };
    GiveGroupfeedback.prototype.changeTab = function (tabName) {
        this.currentTab = tabName;
    };
    GiveGroupfeedback = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\giveGroupfeedback\giveGroupfeedback.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g das">\n\n    Give feedback to {{item.headerTitlePart}} \n\n    </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n<div class="back-c">\n\n  <!-- tabs -->\n\n\n\n<div class="class-section  feed-top">\n\n  <button ion-button class="class-btn  width-c" (click)="changeTab(\'positive\')" *ngIf="currentTab==\'positive\'"> \n\n  Positive\n\n  </button>\n\n  <button ion-button outline   class="kid-btn width-c" (click)="changeTab(\'positive\')" *ngIf="currentTab!=\'positive\'"> \n\n  Positive\n\n  </button>\n\n  <button ion-button outline   class="kid-btn width-c" (click)="changeTab(\'negative\')" *ngIf="currentTab==\'positive\'"> \n\n   Needs work\n\n  </button>\n\n  <button ion-button class="class-btn  width-c" (click)="changeTab(\'negative\')" *ngIf="currentTab!=\'positive\'"> \n\n   Needs work\n\n  </button>\n\n</div>\n\n\n\n<!-- START || CONTAINER FOR POSITIVE FEEDBACK OPTIOPN -->\n\n<div *ngIf="currentTab==\'positive\'">\n\n  <ion-grid>\n\n   <ion-row>\n\n   <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor=" let opt of optionPositive" (click)="giveReward(opt.pointweight,opt.id)" tappable>\n\n        <div class="back-change change-back  room-high  font-icon">\n\n          <div>\n\n           <div class="menu-class {{ opt.pointweight>0? \'positivePoint\':opt.pointweight<0?\'negativePoint\':\'\' }}">\n\n           <b class="ng-binding ">{{opt.pointweight}}</b>\n\n           </div>\n\n          </div>\n\n          <div>\n\n          <img src="{{imageBasePath}}assets/skill/{{opt.image}}"> \n\n          </div>\n\n          <p> {{opt.name}}</p>\n\n        </div>\n\n    </ion-col>    \n\n    </ion-row>\n\n</ion-grid>\n\n</div>\n\n<!-- END || CONTAINER FOR POSITIVE FEEDBACK OPTIOPN -->\n\n\n\n\n\n<!-- START || CONTAINER FOR NEGATIVE FEEDBACK OPTIOPN -->\n\n<div *ngIf="currentTab!=\'positive\'">\n\n  <ion-grid>\n\n   <ion-row>\n\n   <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor=" let opt of optionNegative" (click)="giveReward(opt.pointweight,opt.id)" tappable>\n\n        <div class="back-change change-back  room-high  font-icon">\n\n          <div>\n\n           <div class="menu-class {{ opt.pointweight>0? \'positivePoint\':opt.pointweight<0?\'negativePoint\':\'\' }}">\n\n           <b class="ng-binding ">{{opt.pointweight}}</b>\n\n           </div>\n\n          </div>\n\n          <div>\n\n          <img src="{{imageBasePath}}assets/skill/{{opt.image}}"> \n\n          </div>\n\n          <p> {{opt.name}}</p>\n\n        </div>\n\n    </ion-col>    \n\n    </ion-row>\n\n</ion-grid>\n\n</div>\n\n<!-- END || CONTAINER FOR NEGATIVE FEEDBACK OPTIOPN -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\giveGroupfeedback\giveGroupfeedback.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], GiveGroupfeedback);
    return GiveGroupfeedback;
}());

//# sourceMappingURL=giveGroupfeedback.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceDateRange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AttendanceDateRange = (function () {
    function AttendanceDateRange(navCtrl, viewCtrl, navParams, teacherClassroomService, loadingCtrl, alertCtrl, datePipe) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.item = {};
        this.loading = loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    }
    AttendanceDateRange.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.item.endDate = this.item.startDate;
        this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
    };
    AttendanceDateRange.prototype.close = function () {
        this.viewCtrl.dismiss({});
    };
    AttendanceDateRange.prototype.submitOk = function () {
        if (this.item.startDate > this.item.endDate) {
            var alert_1 = this.alertCtrl.create({
                message: 'End date should be greater than start date',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert_1.dismiss();
                            return false;
                        }
                    }]
            });
            alert_1.present();
            return false;
        }
        this.viewCtrl.dismiss({ startDate: this.item.startDate, endDate: this.item.endDate, datetoken: 'daterange' });
    };
    AttendanceDateRange.prototype.onDateChange = function () {
        if (!this.item.startDate) {
            this.item.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        }
        if (!this.item.endDate) {
            this.item.endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        }
    };
    AttendanceDateRange = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\attendanceDateRange\attendanceDateRange.html"*/`<ion-header>\n\n	<ion-navbar hideBackButton="true">\n\n		\n\n	  <ion-title>\n\n	   Select Date range\n\n	  </ion-title>\n\n	</ion-navbar>\n\n	\n\n  </ion-header>\n\n  \n\n  \n\n  \n\n  \n\n  <ion-content padding>\n\n <div>\n\n	<input type="date" value={{item.startDate}} name="startDate" [(ngModel)]="item.startDate" (change)="onDateChange()">\n\n	<input type="date" value={{item.endDate}} name="endDate" [(ngModel)]="item.endDate" (change)="onDateChange()">\n\n </div> \n\n <div class="list-school ">\n\n	<button ion-button color="orange" (click)="close()">\n\n	  Cancel\n\n	</button>\n\n	<button ion-button color="orange" (click)="submitOk()">\n\n	Ok\n\n	</button>\n\n	</div>\n\n \n\n  </ion-content>\n\n  \n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\attendanceDateRange\attendanceDateRange.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], AttendanceDateRange);
    return AttendanceDateRange;
}());

//# sourceMappingURL=attendanceDateRange.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherClassroomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherClassroomService = (function () {
    function TeacherClassroomService(http) {
        this.http = http;
    }
    TeacherClassroomService.prototype.studentlisting = function (classId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo/studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.grouplisting = function (classId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/groupinfo?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.createGroup = function (lists_value, groupApiUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + groupApiUrl, { group: lists_value, token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.getGroupDetail = function (classId, groupId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/groupinfo/group_studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classId + '&group_id=' + groupId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.getFeedbackOption = function (classId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/points/student?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.giveReward = function (dataParam) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/groupinfo/pointweight', dataParam)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.deleteGroup = function (class_id, group_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/groupinfo/delete', { class_id: class_id, group_id: group_id, token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.studentAttendance = function (classId, date1) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/attendance/studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classId + '&date1=' + date1)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.saveAttendance = function (attendanceList, date1) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/attendance/save', { student_list: attendanceList, date: date1, token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.resetAttendence = function (class_id, date1) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/attendance_reset', { class_id: class_id, date: date1, token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.getAttendanceMail = function (dataParam) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/download_exl', dataParam)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.giveRewardToMultiStudent = function (dataParam) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/awardmultiple/class', dataParam)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.getClassPerformReport = function (dataParam) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/class_perform?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + dataParam.class_id + '&datetoken=' + dataParam.datetoken + '&startdate=' + dataParam.startdate + '&enddate=' + dataParam.enddate)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService.prototype.getStudentPerformReport = function (dataParam) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/report/student?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + dataParam.class_id + '&datetoken=' + dataParam.datetoken + '&student_info_no=' + dataParam.student_info_no + '&startdate=' + dataParam.startdate + '&enddate=' + dataParam.enddate)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassroomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeacherClassroomService);
    return TeacherClassroomService;
}());

//# sourceMappingURL=teacherClassroom.service.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventManagement_eventManagement__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__referTeacher_referTeacher__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__joinSchool_joinSchool__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addNewClass_addNewClass__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schoolStory_schoolStory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__teacherClasstab_teacherClasstab__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Dashboard = (function () {
    function Dashboard(navCtrl, dashboardService, modalCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.dashboardService = dashboardService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.eventManagement = __WEBPACK_IMPORTED_MODULE_4__eventManagement_eventManagement__["a" /* EventManagement */];
        this.referTeacher = __WEBPACK_IMPORTED_MODULE_5__referTeacher_referTeacher__["a" /* ReferTeacher */];
        this.joinSchool = __WEBPACK_IMPORTED_MODULE_6__joinSchool_joinSchool__["a" /* JoinSchool */];
        this.addNewClass = __WEBPACK_IMPORTED_MODULE_7__addNewClass_addNewClass__["a" /* AddNewClass */];
        this.schoolStory = __WEBPACK_IMPORTED_MODULE_8__schoolStory_schoolStory__["a" /* SchoolStory */];
        this.profile = __WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* Profile */];
        this.item = {};
        this.loggedInUser = {};
        this.classList = [];
        this.school = {};
        this.subTitle = '';
        this.deviceId = '';
        this.imagePath = '';
        this.hideshow = '';
        this.res1 = {};
        this.classlength = '';
        this.classid = '';
        this.classname = '';
        this.imagePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url;
    }
    Dashboard.prototype.ngOnInit = function () {
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.school = window.localStorage.getItem('school');
        this.deviceId = window.localStorage.getItem('das_device_id');
        this.imgURI = this.loggedInUser[0]['image'] + "?" + __WEBPACK_IMPORTED_MODULE_11__app_function__["a" /* global_function */].randomNumber();
        console.log(this.imgURI);
        if (this.school) {
            this.school = JSON.parse(this.school);
            this.school = this.school[0];
        }
        this.loggedInUser = this.loggedInUser[0];
        //If no school associate
        if (this.loggedInUser.school_id == 0 || this.loggedInUser.school_id == undefined) {
            this.school = {};
            this.school.school_name = 'Join Your School';
            this.subTitle = 'Connect with teachers at your school';
        }
        this.getClassList();
    };
    Dashboard.prototype.getClassList = function () {
        var _this = this;
        this.dashboardService.getClassList(this.loggedInUser.member_no).then(function (res) {
            if (typeof res != 'undefined') {
                _this.classList = res['user_list'];
                _this.classlength = res['user_list'].length;
                console.log(_this.classList);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Dashboard.prototype.schoolinfo = function () {
        if (this.loggedInUser.school_id == 0) {
            if (this.loggedInUser.user_type == 5 || this.loggedInUser.user_type == 1) {
                this.hideshow = false;
            }
            else {
                this.hideshow = true;
            }
            var schoolModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__joinSchool_joinSchool__["a" /* JoinSchool */]);
            schoolModal.present();
        }
        else {
            this.schoolvarify();
        }
    };
    Dashboard.prototype.schoolvarify = function () {
        var _this = this;
        this.dashboardService.schoolvarify(this.loggedInUser.member_no).then(function (res) {
            _this.res1 = res;
            if (_this.res1.status == "Success") {
                if (_this.res1.user_list[0].status == '1' && _this.loggedInUser.school_id != 0) {
                    window.localStorage.setItem('school_id', _this.loggedInUser.school_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__schoolStory_schoolStory__["a" /* SchoolStory */]);
                }
                else if (_this.res1.user_list[0].status == '0' && _this.loggedInUser.school_id != 0) {
                    var toast = _this.toastCtrl.create({
                        message: 'Your account is under verification',
                        duration: 3000,
                        position: 'center'
                    });
                    toast.present();
                }
            }
            else if (_this.res1.error_code == 1) {
                var alert_1 = _this.alertCtrl.create({
                    message: _this.res1.error_msg,
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Dashboard.prototype.openClassDetail = function (classid, classname, classimage, classgrade, classpoint) {
        window.localStorage.setItem('classid', classid);
        window.localStorage.setItem('classname', classname);
        window.localStorage.setItem('classimage', classimage);
        window.localStorage.setItem('classgrade', classgrade);
        window.localStorage.setItem('classpoint', classpoint);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */], {
            classid: classid,
            classname: classname
        });
    };
    Dashboard.prototype.doRefresh = function (refresher) {
        this.getClassList();
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    Dashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\dashboard\dashboard.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g das">\n\n     Classgenie \n\n    <a [navPush]="profile">\n\n      <img src="{{imagePath}}/assets/profile_image/{{imgURI}}" />\n\n    </a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n  <ion-refresher\n\n      pulling-text="Pull to refresh..."\n\n      on-refresh="doRefresh()">\n\n      </ion-refresher>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh..."\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n\n\n\n\n        \n\n<div class="content-p  m-school">\n\n<h2>Your School</h2>\n\n<a (tap)="schoolinfo()">\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-1 ><img src="assets/imgs/school_icon.png"> </ion-col>\n\n        <ion-col col-10>\n\n          <h3>{{school.school_name}}</h3>\n\n          <p>{{subTitle}}</p>\n\n        </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n\n\n</a>\n\n</div>\n\n<!-- add class-->\n\n<div class="content-p  m-school  add-c">\n\n<h2>Your Class</h2>\n\n<div class="add-c2">\n\n\n\n<ion-grid>\n\n  <ion-row  *ngFor="let classItem of classList"  \n\n            (tap)="openClassDetail(classItem.class_id,classItem.class_name,classItem.image,classItem.grade,classItem.pointweight)">\n\n    <ion-col col-1>\n\n       <img src="{{imagePath}}assets/class/{{classItem.image}}" />     </ion-col>\n\n        <ion-col col-10><h3>{{classItem.class_name}} </h3>\n\n          <h4 style="display:none">{{classItem.class_name}} </h4>\n\n        </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n\n\n</div>\n\n\n\n\n\n<div class="add-c1">\n\n<a [navPush]="addNewClass">\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-1>  <ion-icon name="add-circle"></ion-icon> </ion-col>\n\n        <ion-col col-10><h3> Add a new class</h3></ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</a>\n\n</div>\n\n</div>\n\n<!-- add class  end-->\n\n<div class="content-p  m-school ">\n\n<h2>Next steps</h2>\n\n<a [navPush]="referTeacher">\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-1><img src="assets/imgs/refer_teacher.png">   </ion-col>\n\n        <ion-col col-10><h3> Refer a teacher </h3>\n\n    <p>introduce classgenie</p></ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</a>\n\n<br/>\n\n\n\n<div class="add-c1">\n\n<a [navPush]="eventManagement">\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-1><img src="assets/imgs/event_management.png">     </ion-col>\n\n        <ion-col col-10><h3> Event management </h3></ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</a>\n\n</div>\n\n</div>\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\dashboard\dashboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Dashboard);
    return Dashboard;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentSignup_studentSignup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parentsignup_parentsignup__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teachersignup_teachersignup__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schoolleadersignup_schoolleadersignup__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.studentsignup = __WEBPACK_IMPORTED_MODULE_3__studentSignup_studentSignup__["a" /* StudentSignup */];
        this.parentsignup = __WEBPACK_IMPORTED_MODULE_4__parentsignup_parentsignup__["a" /* ParentSignupPage */];
        this.teachersignup = __WEBPACK_IMPORTED_MODULE_5__teachersignup_teachersignup__["a" /* TeacherSignupPage */];
        this.schoolleadersignup = __WEBPACK_IMPORTED_MODULE_6__schoolleadersignup_schoolleadersignup__["a" /* SchoolLeaderSignupPage */];
    }
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\signup\signup.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n    REGISTER\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n\n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n<div class="signup-g">\n\nRegister for ClassGenie as a...\n\n</div>\n\n\n\n<ion-grid>\n\n   <ion-row>\n\n      <ion-col width-25 >\n\n        <div class="back-change">\n\n          <a [navPush]="teachersignup"> <img src="assets/imgs/teacher_icon.png">  </a> \n\n          <p> Teacher </p>\n\n        </div>\n\n      </ion-col>\n\n          <ion-col width-25 >\n\n     <div class="back-change">\n\n       <a [navPush]="parentsignup"> <img src="assets/imgs/parants_icon.png">  </a> \n\n         <p> Parent </p>\n\n      </div> \n\n    </ion-col>\n\n      <ion-col width-25 >\n\n      <div class="back-change">\n\n      <a [navPush]="studentsignup"> <img src="assets/imgs/student_icon.png">  </a> \n\n        <p> Student </p>\n\n      </div> \n\n    </ion-col>\n\n      <ion-col width-25 >\n\n     <div class="back-change">\n\n       <a [navPush]="schoolleadersignup"> <img src="assets/imgs/student_icon.png">  </a> \n\n       <p> School Leader </p>\n\n      </div> \n\n    </ion-col>\n\n   </ion-row>\n\n</ion-grid>\n\n\n\n<div class="account-l">\n\nAlready have any account  \n\n <button ion-button outline item-end  class="login-btn" [navPush]="login">\n\n   Login\n\n</button>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentTab_studentTab__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentSignupPage = (function () {
    function StudentSignupPage(navCtrl, altCtrl, studentService) {
        this.navCtrl = navCtrl;
        this.altCtrl = altCtrl;
        this.studentService = studentService;
        this.item = {};
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
    }
    StudentSignupPage.prototype.ngOnInit = function () {
    };
    StudentSignupPage.prototype.saveStudent = function () {
        var _this = this;
        var student_data = window.localStorage.getItem('student_list');
        var stu_data = JSON.parse(student_data);
        this.studentService.signupSave(this.item, stu_data).then(function (result) {
            if (result['status'] == "Failure") {
                var alert_1 = _this.altCtrl.create({
                    message: result['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else if (result['status'] == "Success") {
                if (result['user_list'][0]['type'] == 4) {
                    window.localStorage.setItem('loggedInUser', JSON.stringify(result['user_list']));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__studentTab_studentTab__["a" /* StudentTab */]);
                }
            }
            else if (result['error_code'] == 1) {
                var alert_2 = _this.altCtrl.create({
                    message: result['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.altCtrl.create({
                    message: 'Server issue while saving,Please try after some time',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_3.dismiss();
                                return false;
                            }
                        }]
                });
                alert_3.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    StudentSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-studentSignupPage',template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentSignupPage\studentSignupPage.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n    STUDENT  SIGNUP\n\n    </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n\n\n<form (ngSubmit)="saveStudent()" #itemForm="ngForm">\n\n<ion-list>\n\n<ion-item>\n\n <ion-input type="text"  placeholder="Username"  [(ngModel)]="item.username" name="username" required></ion-input>\n\n  </ion-item>\n\n<ion-item>\n\n    <ion-label><span>Please Select</span></ion-label>\n\n    <ion-select [(ngModel)]="item.age" name="age" required>\n\n                  <ion-option selected="" value="3 Years">3 Years</ion-option>\n\n                  <ion-option selected="" value="4 Years">4 Years</ion-option>\n\n                  <ion-option selected="" value="5 Years">5 Years</ion-option>\n\n                  <ion-option selected="" value="6 Years">6 Years</ion-option>\n\n                  <ion-option selected="" value="7 Years">7 Years</ion-option>\n\n                  <ion-option selected="" value="8 Years">8 Years</ion-option>\n\n                  <ion-option selected="" value="9 Years">9 Years</ion-option>\n\n                  <ion-option selected="" value="10 Years">10 Years</ion-option>\n\n                  <ion-option selected="" value="11 Years">11 Years</ion-option>\n\n                  <ion-option selected="" value="12 Years">12 Years</ion-option>\n\n                  <ion-option selected="" value="13 Years">13 Years</ion-option>\n\n                  <ion-option selected="" value="14 Years">14 Years</ion-option>\n\n                  <ion-option selected="" value="15 Years">15 Years</ion-option>\n\n                  <ion-option selected="" value="16 Years">16 Years</ion-option>\n\n                  <ion-option selected="" value="17 Years">17 Years</ion-option>\n\n                  <ion-option selected="" value="18 Years">18 Years</ion-option>\n\n                  <ion-option selected="" value="19 Years">18 Years above</ion-option>\n\n     </ion-select>\n\n  </ion-item>\n\n    <ion-item>\n\n<ion-input type="password"  placeholder="Password" [(ngModel)]="item.password" name="password" required></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n<div>\n\n<button ion-button color="orange"  class="button-block login0  mar45" [disabled]="!itemForm.form.valid">Create Account\n\n</button>\n\n</div>\n\n</form>\n\n\n\n\n\n<div class="account-l">\n\nAlready have any account  \n\n <button ion-button outline item-end  class="login-btn">\n\n  <a [navPush]="login">Login  </a> \n\n</button>\n\n</div>\n\n\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentSignupPage\studentSignupPage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__["a" /* StudentSignupService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__["a" /* StudentSignupService */]])
    ], StudentSignupPage);
    return StudentSignupPage;
}());

//# sourceMappingURL=studentSignupPage.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentInvite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentStory_studentStory__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popoverPageStudent_popoverPageStudent__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentInvite = (function () {
    function StudentInvite(navCtrl, altCtrl, studentService, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.altCtrl = altCtrl;
        this.studentService = studentService;
        this.popoverCtrl = popoverCtrl;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__studentStory_studentStory__["a" /* StudentStory */];
        this.item = {};
        this.member_no = {};
        this.status = '';
        this.detalis = [];
        this.username = {};
        this.verified = {};
        this.unverified = {};
        this.disconnected = {};
        var data = window.localStorage.getItem('loggedInUser');
        var student_list = JSON.parse(data);
        this.username = student_list[0]['username'];
        this.member_no = student_list[0].member_no;
        this.status = student_list[0].status;
        window.localStorage.setItem('stud_status', this.status);
        this.disconnected = true;
    }
    StudentInvite.prototype.ngOnInit = function () {
        this.getStudentList();
    };
    StudentInvite.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popoverPageStudent_popoverPageStudent__["a" /* PopoverPageStudent */]);
        popover.present({
            ev: myEvent
        });
    };
    StudentInvite.prototype.getStudentList = function () {
        var _this = this;
        this.studentService.getStudentList(this.member_no).then(function (result) {
            if (result['status'] == "Failure") {
                _this.disconnected = false;
                var alert_1 = _this.altCtrl.create({
                    message: result['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                _this.disconnected = true;
                _this.detalis = result['student_list'];
                window.localStorage.setItem('student_lists', JSON.stringify(result['student_list']));
            }
        }, function (err) {
            console.log(err);
        });
        if (this.status == '0') {
            this.studentService.getStudentSearch(this.member_no).then(function (result) {
                if (result['status'] == "Failure") {
                    var alert_2 = _this.altCtrl.create({
                        message: result['comments'],
                        buttons: [{
                                text: 'ok',
                                handler: function () {
                                    alert_2.dismiss();
                                    return false;
                                }
                            }]
                    });
                    alert_2.present();
                }
                else if (result['user_list'][0]['status'] == '1') {
                    _this.unverified = false;
                    _this.verified = true;
                    window.localStorage.setItem('parentdata', JSON.stringify(result['user_list']));
                    var alert_3 = _this.altCtrl.create({
                        message: 'You account has been activated by your parent',
                        buttons: [{
                                text: 'ok',
                                handler: function () {
                                    alert_3.dismiss();
                                    return false;
                                }
                            }]
                    });
                    alert_3.present();
                }
                else {
                    _this.unverified = true;
                    _this.verified = false;
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.unverified = false;
            this.verified = true;
        }
    };
    StudentInvite.prototype.shownotice = function () {
        var _this = this;
        this.getStudentList();
        if (this.detalis[0]['student_no'] === undefined) {
            var alert_4 = this.altCtrl.create({
                message: 'no class connected! add student code',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert_4.dismiss();
                            return false;
                        }
                    }]
            });
            alert_4.present();
        }
        else {
            var alert_5 = this.altCtrl.create({
                title: 'Classgenie',
                subTitle: '<h4>Enter ' + this.username + "'s " + 'Parent Email address<h4>',
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'parent email address',
                        type: 'email'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Invite',
                        handler: function (inviteData) {
                            if (inviteData.email != '') {
                                var student_name = _this.detalis[0]['name'];
                                var student_no = _this.detalis[0]['student_no'];
                                var parent_no = _this.detalis[0]['parent_no'];
                                _this.studentService.inviteParent(inviteData.email, student_name, student_no, parent_no).then(function (result) {
                                    if (result['status'] == "Failure") {
                                        var alert_6 = _this.altCtrl.create({
                                            message: result['comments'],
                                            buttons: [{
                                                    text: 'ok',
                                                    handler: function () {
                                                        alert_6.dismiss();
                                                        return false;
                                                    }
                                                }]
                                        });
                                        alert_6.present();
                                    }
                                    else if (result['mail_flage'] == "teacher") {
                                        var alert_7 = _this.altCtrl.create({
                                            message: 'This email id already exists as a teacher id',
                                            buttons: [{
                                                    text: 'ok',
                                                    handler: function () {
                                                        alert_7.dismiss();
                                                        return false;
                                                    }
                                                }]
                                        });
                                        alert_7.present();
                                    }
                                    else {
                                        var alert_8 = _this.altCtrl.create({
                                            message: 'invitation sent successfully  to ' + _this.username + "'s" + ' parent',
                                            buttons: [{
                                                    text: 'ok',
                                                    handler: function () {
                                                        alert_8.dismiss();
                                                        return false;
                                                    }
                                                }]
                                        });
                                        alert_8.present();
                                    }
                                }, function (err) {
                                    console.log(err);
                                });
                            }
                            else {
                                var alert_9 = _this.altCtrl.create({
                                    message: 'Email Should not empty!!',
                                    buttons: [{
                                            text: 'ok',
                                            handler: function () {
                                                alert_9.dismiss();
                                                return false;
                                            }
                                        }]
                                });
                                alert_9.present();
                            }
                        }
                    }
                ]
            });
            alert_5.present();
        }
    };
    StudentInvite.prototype.addStudent = function () {
        var _this = this;
        this.getStudentList();
        console.log(this.item);
        this.studentService.addStudent(this.item, this.member_no).then(function (result) {
            if (result['status'] == "Failure") {
                var alert_10 = _this.altCtrl.create({
                    message: result['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_10.dismiss();
                                return false;
                            }
                        }]
                });
                alert_10.present();
            }
            else {
                _this.getStudentList();
                var alert_11 = _this.altCtrl.create({
                    message: 'student code added successfully',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_11.dismiss();
                                return false;
                            }
                        }]
                });
                alert_11.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    StudentInvite.prototype.removeStudent = function (datas) {
        var _this = this;
        this.getStudentList();
        var alert = this.altCtrl.create({
            title: '<img src="/assets/imgs/alert.png" class="alert"/><b>Classgenie</b>',
            subTitle: 'class ' + datas.class_name + ' will be removed!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.studentService.removeStudent(datas.student_no).then(function (result) {
                            if (result['status'] == "Failure") {
                                var alert_12 = _this.altCtrl.create({
                                    message: 'can not remove student code',
                                    buttons: [{
                                            text: 'ok',
                                            handler: function () {
                                                alert_12.dismiss();
                                                return false;
                                            }
                                        }]
                                });
                                alert_12.present();
                            }
                            else {
                                _this.getStudentList();
                                var alert_13 = _this.altCtrl.create({
                                    message: 'Student Remove Successfully',
                                    buttons: [{
                                            text: 'ok',
                                            handler: function () {
                                                alert_13.dismiss();
                                                return false;
                                            }
                                        }]
                                });
                                alert_13.present();
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    StudentInvite = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentInvite\studentInvite.html"*/`\n\n<ion-header [hidden] = "headderTab">\n\n  <ion-navbar>\n\n    <ion-title>\n\n          {{username}}\n\n          <button ion-button icon-only (click)="presentPopover($event)">\n\n            <ion-icon name="more"></ion-icon>\n\n          </button>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n \n\n\n\n	<form (ngSubmit)="addStudent()" #itemForm="ngForm">\n\n  <div class="col col-100 invite_parent_student">\n\n    <div *ngIf="unverified" >\n\n    <button class="button button-positive" on-tap="shownotice()">Invite Parent</button><br><br>\n\n    <p>Invite your parent to review performance graph</p></div>\n\n     <div *ngIf="verified"><div class="parent_invite">\n\n          <div class="row">\n\n    <!-- <div class="col col-40 responsive-img new_img"><img  ng-src="{{photo_image\n\n    }}" /></div> -->\n\n  <a href="javascript:void(0)" on-tap="getData()" style="margin-left: 25%"><div class="col col-100 invite_content" style="margin-right: 58%"><h3>View {{username}} report</h3> <p class="repotr-date"></p></div></a>   \n\n  </div>\n\n  </div></div>\n\n     <label class="item item-input parent_box">\n\n    <input id="stu_code" type="text"  [(ngModel)]="item.student_no" name="student_no" placeholder="Ex. SXYRF2C9Q" class="parent_box">\n\n  </label><br>\n\n  <div class="col col-100">\n\n        <button class="button button-positive date_btn" [disabled]="!itemForm.form.valid">\n\n              Submit Code\n\n        </button>\n\n  </div>\n\n  </div> \n\n</form>\n\n <div class="list classgenie-list" id="classgenie_school_list">\n\n<ion-list>\n\n<ion-item *ngFor="let detali of detalis">\n\n  <h1>{{ detali.name }}</h1>\n\n  <span on-tap="removeStudent(detali)"><p class="ion-md-close-circle ion-close new_icon remove"></p></span>\n\n  <h1>{{ detali.class_name }}</h1>\n\n  </ion-item>\n\n  <ion-item [hidden]="disconnected"><b>No class connected</b><br></ion-item>\n\n</ion-list>\n\n</div>  \n\n\n\n\n\n\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentInvite\studentInvite.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__["a" /* StudentSignupService */], __WEBPACK_IMPORTED_MODULE_4__popoverPageStudent_popoverPageStudent__["a" /* PopoverPageStudent */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_studentSignup_service__["a" /* StudentSignupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
    ], StudentInvite);
    return StudentInvite;
}());

//# sourceMappingURL=studentInvite.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPageStudent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentAccountSetting_studentAccountSetting__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPageStudent = (function () {
    function PopoverPageStudent(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PopoverPageStudent.prototype.accountSetting = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__studentAccountSetting_studentAccountSetting__["a" /* StudentAccountSetting */]);
    };
    PopoverPageStudent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\popoverPageStudent\popoverPageStudent.html"*/` <ion-list class="popOver">\n\n      <ion-list-header>Ionic</ion-list-header>\n\n      <button ion-item  (click)="accountSetting()">Account Setting</button>\n\n      <button ion-item (click)="close()">School Story</button>      \n\n </ion-list>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\popoverPageStudent\popoverPageStudent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PopoverPageStudent);
    return PopoverPageStudent;
}());

//# sourceMappingURL=popoverPageStudent.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentAccountSetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentAccountSetting = (function () {
    function StudentAccountSetting(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StudentAccountSetting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentAccountSetting\studentAccountSetting.html"*/`<ion-header >\n\n  <ion-navbar>\n\n    <ion-title>\n\n          fdsfdscvsd\n\n          \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentAccountSetting\studentAccountSetting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], StudentAccountSetting);
    return StudentAccountSetting;
}());

//# sourceMappingURL=studentAccountSetting.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parentSignup_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parentcodecheck_parentcodecheck__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParentSignupPage = (function () {
    function ParentSignupPage(navCtrl, parentsignupService) {
        this.navCtrl = navCtrl;
        this.parentsignupService = parentsignupService;
        this.item = {};
        this.parentcodecheck = __WEBPACK_IMPORTED_MODULE_3__parentcodecheck_parentcodecheck__["a" /* ParentcodecheckPage */];
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
    }
    ParentSignupPage.prototype.ngOnInit = function () {
    };
    ParentSignupPage.prototype.parentrsignup = function () {
        var _this = this;
        this.parentsignupService.saveParentsignup(this.item).then(function (result) {
            if (result['status'] == "Success") {
                window.localStorage.setItem('loggedInUser', JSON.stringify(result['user_list']));
                var jsonresponse = result['user_list'];
                for (var i = 0; i < jsonresponse.length; i++) {
                    if (jsonresponse[0].type == 3) {
                        _this.navCtrl.push(_this.parentcodecheck);
                    }
                }
            }
            else if (result['status'] == "failure") {
                alert('Email id already exists');
            }
        }, function (err) {
            console.log(err);
        });
    };
    ParentSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentsignup\parentsignup.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    Parent Sign Up\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n<div class="signup-g">\n\nGet ready for your best classroom yet :)\n\n</div>\n\n\n\n<form #loginForm="ngForm" (ngSubmit)="parentrsignup()">\n\n<ion-list>\n\n<ion-item >\n\n \n\n   <ion-input type="text"  placeholder="Username" [(ngModel)]="item.username" name="username" required></ion-input>\n\n  </ion-item>\n\n\n\n  \n\n  \n\n  <ion-item >\n\n \n\n    <ion-input type="number"  placeholder="Phonenumber" [(ngModel)]="item.number" name="number" required ></ion-input>\n\n  </ion-item>\n\n\n\n \n\n\n\n\n\n  	<ion-item >\n\n \n\n    <ion-input type="email"  placeholder="Email" [(ngModel)]="item.email" name="email" required></ion-input>\n\n  </ion-item>\n\n\n\n \n\n\n\n<ion-item >\n\n    <ion-input type="password"  placeholder="Password" [(ngModel)]="item.password" name="password" required ></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n\n\n\n\n<ion-item class="check-p">\n\n  <ion-label>By creating an account,you agree to the Terms Of Service and Privacy Policy</ion-label>\n\n  <ion-checkbox color="positive" [(ngModel)]="item.agree" name="agree"  checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<div>\n\n<button ion-button color="primary"  class="button-block login0"  [disabled]="!loginForm.form.valid" >Create Account</button>\n\n</div>\n\n\n\n</form>\n\n\n\n<div class="account-l">\n\nAlready have any account  \n\n <button ion-button outline item-end  class="login-btn" [navPush]="login">\n\n   Login\n\n</button>\n\n</div>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentsignup\parentsignup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_parentSignup_service__["a" /* ParentsignupService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_parentSignup_service__["a" /* ParentsignupService */]])
    ], ParentSignupPage);
    return ParentSignupPage;
}());

//# sourceMappingURL=parentsignup.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentsignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParentsignupService = (function () {
    function ParentsignupService(http) {
        this.http = http;
    }
    ParentsignupService.prototype.saveParentsignup = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/parent', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), name: data.username, phone: data.number, email: data.email, password: data.password })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentsignupService.prototype.checkParentcodecheck = function (data, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/parentcode', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), parent_no: data.parent_no, parent_ac_no: member_no })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentsignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ParentsignupService);
    return ParentsignupService;
}());

//# sourceMappingURL=parentSignup.service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parentkidList_parentkidList__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parentpostComment_parentpostComment__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parentstoriesLikes_parentstoriesLikes__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParentDashboard = (function () {
    function ParentDashboard(navCtrl, alertCtrl, modalCtrl, parentclassstoryService, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.parentclassstoryService = parentclassstoryService;
        this.navParams = navParams;
        this.loggedInUser = {};
        this.parentname = '';
        this.classList = [];
        this.kidstory = '';
        this.postCount = '';
        this.arr_length = '';
        this.pagecount = 1;
        this.nameofsearch = '';
        this.classid = '';
        this.showmsg = '';
        this.status_val = '';
        this.items = [];
        this.teacher_ac_no = '';
        this.imagefolder = '';
        this.student_no = '';
        this.parentpostCommentPage = __WEBPACK_IMPORTED_MODULE_5__parentpostComment_parentpostComment__["a" /* parentpostCommentPage */];
        this.parentstoryLikesPage = __WEBPACK_IMPORTED_MODULE_6__parentstoriesLikes_parentstoriesLikes__["a" /* ParentstoryLikesPage */];
        this.searchTerm = '';
        this.currentTab = '';
        this.student_no = navParams.get("student_no");
        this.kidstory = navParams.get("kidstory");
    }
    ParentDashboard.prototype.ngOnInit = function () {
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.parentname = this.loggedInUser.name;
        this.getClassid();
        this.loadData();
    };
    ParentDashboard.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 10);
    };
    ParentDashboard.prototype.getClassid = function () {
        var _this = this;
        this.parentclassstoryService.getparentStories(this.loggedInUser.member_no).then(function (res) {
            _this.classList = window.localStorage.setItem('classid', res['class_id']);
        }, function (err) {
            console.log(err);
        });
    };
    ParentDashboard.prototype.loadData = function () {
        var _this = this;
        this.currentTab = 'student';
        this.kidstory = 0;
        this.postCount = 0;
        this.arr_length = 0;
        this.classid = window.localStorage.getItem('classid');
        this.parentclassstoryService.loaddata(this.classid, this.pagecount, this.loggedInUser.member_no, this.searchTerm).then(function (res) {
            _this.showmsg = false;
            _this.postCount = 0;
            var res1 = res;
            console.log(res1);
            _this.status_val = res1['status'];
            if (!res1.hasOwnProperty('posts')) {
                _this.status_val = "";
            }
            else {
                _this.status_val = res1['status'];
                _this.arr_length = res1['posts']['length'];
                var arraylength = res1['posts']['length'];
                if (arraylength < __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */]['page_size']) {
                    _this.status_val = "";
                }
            }
            if (res1['status'] == "Success") {
                _this.items = res1['posts'];
                var list = _this.items;
                _this.items.forEach(function (list) {
                    var number = String(list.teacher_ac_no);
                    if (number.substr(0, 1) == '4') {
                        list.image_folder = 'student_stories';
                    }
                    else if (number.substr(0, 1) == '2') {
                        list.image_folder = 'class_stories';
                    }
                });
                _this.postCount = res['posts']['length'];
                for (var i = 0; i < _this.postCount; i++) {
                    _this.teacher_ac_no = res1['posts'][i]['teacher_ac_no'];
                    var value1 = _this.teacher_ac_no.toString();
                    var res2 = value1.slice(0, 1);
                    if (res2 == 4) {
                        _this.imagefolder = "student_stories";
                    }
                    else {
                        _this.imagefolder = "class_stories";
                    }
                    ;
                    if (res1['posts'][i]['status']) {
                        for (var j = 0; j < res1['posts'][i]['status'].length; j++) {
                            if (res1['posts'][i]['status'][j]['member_no'] == _this.loggedInUser.member_no) {
                                if (res1['posts'][i]['status'][j]['status'] == '0')
                                    _this.items[i]['liked'] = 0;
                                else
                                    _this.items[i]['liked'] = 1;
                            }
                            else {
                                _this.items[i]['liked'] = 0;
                            }
                        }
                    }
                    else {
                        _this.items[i]['liked'] = 0;
                    }
                }
                console.log(_this.items);
            }
            else {
                _this.items = [];
                _this.showmsg = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ParentDashboard.prototype.showkidstory = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__parentkidList_parentkidList__["a" /* ParentkidListPage */], { member_no: this.loggedInUser.member_no, kidstory: 1 });
        profileModal.onDidDismiss(function (data) {
            _this.student_no = data.student_no;
            _this.load_student_story(_this.student_no);
            console.log(data);
        });
        profileModal.present();
    };
    ParentDashboard.prototype.load_student_story = function (student_no) {
        var _this = this;
        this.currentTab = 'kids';
        this.kidstory = 1;
        this.parentclassstoryService.load_student_story(this.loggedInUser.member_no, student_no, this.searchTerm, this.pagecount).then(function (res) {
            _this.postCount = 0;
            var res1 = res;
            console.log(res1);
            _this.showmsg = false;
            _this.status_val = res1['status'];
            if (!res1.hasOwnProperty('posts')) {
                _this.status_val = "";
            }
            else {
                _this.status_val = res1['status'];
                var arraylength = res1['posts']['length'];
            }
            if (res1['status'] == "Success") {
                _this.items = res1['posts'];
                var list = _this.items;
                _this.items.forEach(function (list) {
                    var number = String(list.teacher_ac_no);
                    if (number.substr(0, 1) == '4') {
                        list.image_folder = 'student_stories';
                    }
                    else if (number.substr(0, 1) == '2') {
                        list.image_folder = 'class_stories';
                    }
                });
                _this.postCount = res1['posts']['length'];
                for (var i = 0; i < res1['posts']['length']; i++) {
                    _this.teacher_ac_no = res1['posts'][i]['teacher_ac_no'];
                    var value1 = _this.teacher_ac_no.toString();
                    var res2 = value1.slice(0, 1);
                    if (res == 4) {
                        _this.imagefolder = "student_stories";
                    }
                    else {
                        _this.imagefolder = "class_stories";
                    }
                    if (res1['posts'][i]['status']) {
                        for (var j = 0; j < res1['posts'][i]['status']['length']; j++) {
                            if (res1['posts'][i]['status'][j]['member_no'] == _this.loggedInUser.member_no) {
                                if (res1['posts'][i]['status'][j]['status'] == '0')
                                    _this.items[i]['liked'] = 0;
                                else
                                    _this.items[i]['liked'] = 1;
                            }
                            else {
                                _this.items[i]['liked'] = 0;
                            }
                        }
                    }
                    else {
                        _this.items[i]['liked'] = 0;
                    }
                }
            }
            else {
                _this.items = [];
                _this.showmsg = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ParentDashboard.prototype.openclassstory = function () {
        this.kidstory = 0;
        this.items = [];
        this.loadData();
    };
    ParentDashboard.prototype.openCommentPage = function (id, classname, classid) {
        this.navCtrl.push(this.parentpostCommentPage, {
            storyid: id,
            classname: classname,
            classid: classid
        });
    };
    ParentDashboard.prototype.openLikePage = function (id, class_id) {
        var profileModal = this.modalCtrl.create(this.parentstoryLikesPage, { storyid: id, classid: class_id });
        profileModal.present();
    };
    ParentDashboard.prototype.ionViewDidLoad = function () {
        this.getAllPostsearchStories(this.searchTerm);
    };
    ParentDashboard.prototype.getAllPostsearchStories = function (searchTerm) {
        this.nameofsearch = searchTerm;
        if (this.nameofsearch) {
            if (this.kidstory == 1) {
                this.load_student_story(this.student_no);
            }
            else {
                this.loadData();
            }
        }
    };
    ParentDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentdashboard\parentdashboard.html"*/`<ion-content padding >\n\n\n\n    <ion-refresher\n\n    pulling-text="Pull to refresh..."\n\n    on-refresh="doRefresh()">\n\n    </ion-refresher>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n  <ion-refresher-content\n\n    pullingIcon="arrow-dropdown"\n\n    pullingText="Pull to refresh..."\n\n    refreshingSpinner="circles"\n\n    refreshingText="Refreshing...">\n\n  </ion-refresher-content>\n\n</ion-refresher>\n\n\n\n\n\n<div class="back-c">\n\n\n\n<!-- search code  here-->\n\n<ion-searchbar [(ngModel)]="searchTerm" (ionInput)="getAllPostsearchStories($event)" placeholder=""></ion-searchbar>\n\n\n\n<!-- search code  here end-->\n\n\n\n<!-- tab button  here -->\n\n<div class="class-section">\n\n<button *ngIf="currentTab==\'student\'" ion-button class="class-btn  width-c" (tap)="openclassstory();" tappable>Class Story</button>\n\n\n\n<button *ngIf="currentTab != \'student\'" ion-button outline class="kid-btn  width-c"  (tap)="openclassstory();" tappable>Class Story</button>\n\n\n\n<button *ngIf="currentTab==\'kids\'" ion-button class="class-btn width-c"  (tap)="showkidstory();" tappable>Kids Story</button>\n\n\n\n<button *ngIf="currentTab != \'kids\'"  ion-button outline class="kid-btn width-c" (tap)="showkidstory();" tappable>Kids Story</button>\n\n</div>\n\n<!--  tab button here end-->\n\n\n\n<!-- content -->\n\n<div class="content-p">\n\n<h2>Welcome {{parentname}}</h2>\n\nHere you\'ll see updates, photos, and announcements from school.\n\n</div>\n\n\n\n<div class="col col-100 no_post" *ngIf="showmsg==true">\n\n  <p >No post available now..</p> \n\n  </div>\n\n\n\n  <div class="m-school" *ngFor="let client of items ; let i = index">\n\n    <div class=" invite-f  story-h  scholl-list ">\n\n      <div class="border-b">\n\n    <ion-grid>\n\n      <ion-row>\n\n      <ion-col col-9>\n\n        <img *ngIf="!client.teacher_name.image" src="/assets/imgs/chat_user.png">\n\n        <img  *ngIf="client.teacher_name.image" src="{{imagePath}}profile_image/{{client.teacher_name.image}}">\n\n        <h3>{{client.teacher_name.name}}</h3>\n\n       <div class="story-c">\n\n        <p><ion-icon name="arrow-round-forward"></ion-icon>  {{client.class_name.class_name}}&nbsp;&nbsp;({{client.class_name.grade}}) </p>\n\n      </div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n       <div class="r-icon">\n\n       {{client.date}}\n\n        </div>\n\n      </ion-col>\n\n      </ion-row>\n\n     </ion-grid>\n\n    </div>\n\n    <div class="border-b1">\n\n    <ion-grid>\n\n      <ion-row>\n\n      <ion-col col-12>\n\n      <div class="head-story">\n\n          <img class="full-image" *ngIf="client.ext ==\'jpg\'" src="{{imagePath}}{{client.image_folder}}/{{client.image}}" />\n\n    \n\n          <div *ngIf="client.ext ==\'mp4\' || client.ext ==\'3gp\'">\n\n              <video src="{{video(client.image)}}" class="centerme" controls="controls" >\n\n              </video>\n\n              </div>\n\n        <h3>{{client.message}}</h3>\n\n      </div> \n\n      <div class="like-section">\n\n      <p>\n\n        <span>\n\n           <ion-icon name="checkmark-circle" (click) = "openLikePage(client.id,client.class_id);"></ion-icon> {{client.likes}} Likes\n\n        </span>\n\n          <span>\n\n           <ion-icon name="checkmark-circle"></ion-icon>\n\n      {{client.comment_count}} Comments\n\n        </span>\n\n      </p>\n\n      </div>\n\n     </ion-col>\n\n      </ion-row>\n\n     </ion-grid>\n\n    </div>\n\n    <!-- section end -->\n\n    <!-- section satrt -->\n\n    <div class="border-b0  like-section">\n\n    <ion-grid>\n\n      <ion-row>\n\n      <ion-col col-9>\n\n        <ion-icon name="heart"></ion-icon> \n\n        <ion-icon name="chatboxes" (click)="openCommentPage(client.id,client.class_name.class_name,client.class_id);" tappable></ion-icon>\n\n      </ion-col>\n\n      </ion-row>\n\n     </ion-grid>\n\n    </div>\n\n    </div>\n\n    </div>\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentdashboard\parentdashboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ParentDashboard);
    return ParentDashboard;
}());

//# sourceMappingURL=parentdashboard.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentkidListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentkidListPage = (function () {
    function ParentkidListPage(navCtrl, params, parentclassstoryService, view) {
        this.navCtrl = navCtrl;
        this.parentclassstoryService = parentclassstoryService;
        this.view = view;
        this.member_no = '';
        this.items = [];
        this.kidstory = '';
        this.member_no = params.get('member_no');
        this.kidstory = params.get('kidstory');
    }
    ParentkidListPage.prototype.ngOnInit = function () {
        this.kidlist();
    };
    ParentkidListPage.prototype.kidlist = function () {
        var _this = this;
        this.parentclassstoryService.parent_kidlist(this.member_no).then(function (res) {
            _this.items = res['student_list'];
            console.log(_this.items);
        }, function (err) {
            console.log(err);
        });
    };
    ParentkidListPage.prototype.showkidStory = function (student_no) {
        this.view.dismiss({ student_no: student_no });
    };
    ParentkidListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentkidList\parentkidList.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n    Kid List\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding >\n\n\n\n  <ion-list>\n\n   <ion-item *ngFor="let client of items" (click)="showkidStory(client.student_no);"> \n\n     <p> {{client.name}} ({{client.class_name}})<p>\n\n   <p style="display:none">{{client.student_no}}</p>\n\n      </ion-item>\n\n  </ion-list> \n\n\n\n\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentkidList\parentkidList.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ParentkidListPage);
    return ParentkidListPage;
}());

//# sourceMappingURL=parentkidList.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parentpostCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var parentpostCommentPage = (function () {
    function parentpostCommentPage(navCtrl, alertCtrl, parentclassstoryService, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.parentclassstoryService = parentclassstoryService;
        this.navParams = navParams;
        this.storyid = '';
        this.loggedInUser = '';
        this.image = '';
        this.postId = '';
        this.like = '';
        this.like_status = '';
        this.teacher_ac_no = '';
        this.message = '';
        this.ext = '';
        this.items = '';
        this.username = '';
        this.imgURI = '';
        this.teacher_name = '';
        this.imagePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path;
        this.item = {};
        this.userImage = '';
        this.commentCount = '';
        this.teacher_image = '';
        this.imagefolder = '';
        this.path_url = '';
        this.classid = '';
        this.classname = '';
        this.storyid = this.navParams.get("storyid");
        this.classname = this.navParams.get("classname");
        this.classid = this.navParams.get("classid");
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        console.log(this.storyid);
    }
    parentpostCommentPage.prototype.ngOnInit = function () {
        this.loadComment();
    };
    parentpostCommentPage.prototype.getRandom = function () {
        return Math.random();
    };
    parentpostCommentPage.prototype.loadComment = function () {
        var _this = this;
        this.parentclassstoryService.loadcomment(this.storyid, this.loggedInUser.member_no).then(function (res) {
            if (res['status'] == "Success") {
                var json = res['post'];
                _this.image = json[0].image;
                _this.postId = json[0].id;
                _this.like = json[0].likes;
                _this.like_status = json[0].status;
                _this.teacher_ac_no = json[0].teacher_ac_no;
                _this.message = json[0].message;
                _this.ext = json[0].ext;
                _this.teacher_image = res['teacher_name'][0]['image'];
                _this.items = res['comment_list'];
                _this.commentCount = _this.items.length;
                _this.username = json[0].username;
                if (_this.username == "" || _this.username == "undefined" || _this.username == "null") {
                    _this.teacher_name = res['teacher_name'][0]['name'];
                }
                else {
                    _this.teacher_name = _this.username;
                }
            }
            console.log(res);
            var value1 = _this.teacher_ac_no.toString();
            var res2 = value1.slice(0, 1);
            if (res2 == 4) {
                _this.imagefolder = "student_stories";
            }
            else {
                _this.imagefolder = "class_stories";
            }
            _this.path_url = _this.imagePath + _this.imagefolder + "/" + _this.image + '?' + _this.getRandom();
        }, function (err) {
            console.log(err);
        });
    };
    parentpostCommentPage.prototype.saveComment = function () {
        var _this = this;
        this.storyid = this.storyid.toLocaleString();
        this.parentclassstoryService.saveComment(this.storyid, this.loggedInUser.member_no, this.classid, this.item).then(function (res) {
            if (res['status'] == "Success") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Comment successfully...',
                    buttons: ['Ok']
                });
                alert_1.present();
                _this.loadComment;
            }
        }, function (err) {
            console.log(err);
        });
        console.log(this.item);
    };
    parentpostCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentpostComment\parentpostComment.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Class Genie\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n<div class="back-c">\n\n\n\n<!-- post section -->\n\n<div class="comment-s">\n\n\n\n\n\n<div class=" invite-f  story-h1">\n\n<div class="border-b">\n\n <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="{{imageurl}}">  \n\n      </ion-thumbnail>\n\n      \n\n      <h2>{{teacher_name}}</h2>\n\n      <p><ion-icon name="arrow-round-forward"></ion-icon>  {{classname}}  </p>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n<div class="border-b1">\n\n  <div class="head-story">\n\n    <h2>{{message}}</h2>\n\n  </div>\n\n  <div class="like-section1">\n\n   <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <span>\n\n       <ion-icon name="checkmark-circle"></ion-icon> {{like}}  Likes\n\n       </span> \n\n      </ion-thumbnail>\n\n       <ion-thumbnail item-start>\n\n        <span>\n\n          <ion-icon name="checkmark-circle"></ion-icon> {{commentCount}} Comments\n\n       </span> \n\n      </ion-thumbnail>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</div>\n\n<!-- section end -->\n\n<!-- section satrt -->\n\n<div class="border-b0  like-section">\n\n</div>\n\n\n\n<!-- below section start-->\n\n<div class="border-class">\n\n<div class="like-section1">\n\n <ion-grid  *ngFor="let item of items">\n\n <ion-row>\n\n <ion-col col-10>\n\n <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="{{imagePath}}/profile_image/{{item.name.image}}?{{randNo}}"> \n\n         <img  src="/assets/imgs/chat_user.png" class="user_right" *ngIf="item.name.image==\'\'">\n\n      <span class="user_neme_comment" *ngIf="item.name.name!=\'\'">{{item.name.name}}</span>\n\n      <span class="user_neme_comment" *ngIf="item.name.name==\'\'">{{item.student_name}}</span> \n\n      </ion-thumbnail>\n\n      <h2> <span class="user_neme_comment" *ngIf="item.name.name!=\'\'">{{item.name.name}}</span>\n\n      <span class="user_neme_comment" *ngIf="item.name.name==\'\'">{{item.student_name}}</span> </h2>\n\n      <p> {{item.comment}}  </p>\n\n     </ion-item>\n\n  </ion-list>\n\n</ion-col>\n\n </ion-row>\n\n</ion-grid>\n\n\n\n</div>\n\n</div>\n\n<!-- below section end-->\n\n</div>\n\n </div> \n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="foooter-section  class-s">\n\n  <form #loginForm="ngForm" (ngSubmit)="saveComment()">\n\n  <ion-toolbar>\n\n   <div>\n\n  <ion-list>\n\n    <ion-item>\n\n    <ion-input type="text"  placeholder="Add Your Comment" [(ngModel)]="item.comment" name="message" required ></ion-input>\n\n    </ion-item>\n\n   </ion-list>\n\n   </div>\n\n   <div>\n\n   <button   ion-button outline item-end  class="btn-invite1" [disabled]="!loginForm.form.valid">\n\n  <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n  </button> \n\n   </div>\n\n  </ion-toolbar>\n\n</form>\n\n</ion-footer>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentpostComment\parentpostComment.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], parentpostCommentPage);
    return parentpostCommentPage;
}());

//# sourceMappingURL=parentpostComment.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentstoryLikesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentstoryLikesPage = (function () {
    function ParentstoryLikesPage(navCtrl, parentclassstoryService, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.parentclassstoryService = parentclassstoryService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.like_list_items = [];
        this.randno = '';
        this.storyid = this.navParams.get("storyid");
        this.classid = this.navParams.get("classid");
    }
    ParentstoryLikesPage.prototype.ngOnInit = function () {
        this.loadlike();
    };
    ParentstoryLikesPage.prototype.getRandom = function () {
        return Math.random();
    };
    ParentstoryLikesPage.prototype.loadlike = function () {
        var _this = this;
        this.parentclassstoryService.Likelist(this.storyid).then(function (result) {
            if (result['status'] == "Success") {
                var data1 = result['like_list'];
                _this.like_list_items = data1;
                for (var i = 0; i < data1.length; i++) {
                    _this.randno = _this.getRandom();
                }
            }
            else {
            }
        }, function (err) {
        });
    };
    ParentstoryLikesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentstoriesLikes\parentstoriesLikes.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Likes\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <div class="list add-student">\n\n          <ion-list id="student_list">\n\n            <ion-item class="item-avatar" *ngFor="let item of like_list_items">            >\n\n            <img src="{{imagePath}}profile_image/{{item.name.image}}?{{randno}}" *ngIf="item.name.image!==\'\'"/> \n\n            <img ng-src="img/chat_user.png" ng-if="item.name.image==\'\'" /> \n\n            <h2 ng-model="className" class="class_name_heading" *ngIf="item.name!=\'\'">{{item.name.name}} </h2>\n\n            <h2 ng-model="className" class="class_name_heading" *ngIf="item.student_name!=\'\'">{{item.student_name}} </h2>\n\n            </ion-item>\n\n          </ion-list>\n\n      </div>\n\n \n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentstoriesLikes\parentstoriesLikes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_parentClassstory_service__["a" /* ParentClassstoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ParentstoryLikesPage);
    return ParentstoryLikesPage;
}());

//# sourceMappingURL=parentstoriesLikes.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentMessagePage = (function () {
    function ParentMessagePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ParentMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\parentMessage\parentMessage.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Messages\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <p>\n\n    Messages\n\n  </p>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\parentMessage\parentMessage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ParentMessagePage);
    return ParentMessagePage;
}());

//# sourceMappingURL=parentMessage.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teachersSignup_service__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherSignupPage = (function () {
    function TeacherSignupPage(navCtrl, teacherService) {
        this.navCtrl = navCtrl;
        this.teacherService = teacherService;
        this.item = {};
        this.dashboard = __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* Dashboard */];
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
    }
    TeacherSignupPage.prototype.ngOnInit = function () {
    };
    TeacherSignupPage.prototype.doTeachersignup = function () {
        var _this = this;
        this.teacherService.saveTeacher(this.item).then(function (result) {
            if (result['status'] == "Success") {
                window.localStorage.setItem('loggedInUser', JSON.stringify(result['user_list']));
                var jsonresponse = result['user_list'];
                for (var i = 0; i < jsonresponse.length; i++) {
                    if (jsonresponse[0].type == 2) {
                        _this.navCtrl.push(_this.dashboard);
                    }
                }
            }
            else if (result['comments'] == "already exists!") {
                alert('Email id already exists');
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teachersignup',template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teachersignup\teachersignup.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    Teacher Signup\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n<div class="signup-g">\n\nGet ready for your best classroom yet :)\n\n</div>\n\n\n\n<form #loginForm="ngForm" (ngSubmit)="doTeachersignup()">\n\n<ion-list>\n\n<ion-item >\n\n \n\n   <ion-input type="text"  placeholder="Username" [(ngModel)]="item.username" name="username" required></ion-input>\n\n  </ion-item>\n\n\n\n  \n\n  \n\n  <ion-item >\n\n \n\n    <ion-input type="number"  placeholder="Phonenumber" [(ngModel)]="item.number" name="number" required ></ion-input>\n\n  </ion-item>\n\n\n\n \n\n\n\n\n\n  	<ion-item >\n\n \n\n    <ion-input type="email"  placeholder="Email" [(ngModel)]="item.email" name="email" required></ion-input>\n\n  </ion-item>\n\n\n\n \n\n\n\n<ion-item >\n\n    <ion-input type="password"  placeholder="Password" [(ngModel)]="item.password" name="password" required ></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n <ion-item class="check-p">\n\n  <ion-label>By creating an account,you agree to the Terms Of Service and Privacy Policy</ion-label>\n\n  <ion-checkbox color="positive" [(ngModel)]="item.agree" name="agree"  checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<div>\n\n<button ion-button color="primary"  class="button-block login0"  [disabled]="!loginForm.form.valid" >Create Account</button>\n\n</div>\n\n\n\n</form>\n\n\n\n<div class="account-l">\n\nAlready have any account  \n\n <button ion-button outline item-end  class="login-btn" [navPush]="login">\n\nLogin\n\n</button>\n\n</div>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teachersignup\teachersignup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teachersSignup_service__["a" /* TeacherSignupService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_teachersSignup_service__["a" /* TeacherSignupService */]])
    ], TeacherSignupPage);
    return TeacherSignupPage;
}());

//# sourceMappingURL=teachersignup.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventManagement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventManagement = (function () {
    function EventManagement(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventManagement = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\eventManagement\eventManagement.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n event Management\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\eventManagement\eventManagement.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], EventManagement);
    return EventManagement;
}());

//# sourceMappingURL=eventManagement.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferTeacher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReferTeacher = (function () {
    function ReferTeacher(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReferTeacher = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\referTeacher\referTeacher.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Refer Teacher \n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\referTeacher\referTeacher.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ReferTeacher);
    return ReferTeacher;
}());

//# sourceMappingURL=referTeacher.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinSchool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_joinSchool_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schoolTeacherlist_schoolTeacherlist__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addSchool_addSchool__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoinSchool = (function () {
    function JoinSchool(navCtrl, joinschoolService, altCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.joinschoolService = joinschoolService;
        this.altCtrl = altCtrl;
        this.modalCtrl = modalCtrl;
        this.school = {};
        this.schoolList = [];
        this.member_no = '';
        this.school_list = {};
        this.addSchool = __WEBPACK_IMPORTED_MODULE_4__addSchool_addSchool__["a" /* AddSchool */];
        this.searchTerm = '';
        this.items = [];
        this.addSchoolButt = {};
        var loggedInUsers = window.localStorage.getItem('loggedInUser');
        var member_nos = JSON.parse(loggedInUsers);
        this.member_no = member_nos[0]['member_no'];
        this.addSchoolButt = true;
    }
    JoinSchool.prototype.ngOnInit = function () {
        this.listSchool();
    };
    JoinSchool.prototype.listSchool = function () {
        var _this = this;
        this.joinschoolService.listSchool(this.member_no).then(function (res) {
            if (res['status'] == 'Success') {
                _this.schoolList = res['school_list'];
            }
            else {
                alert(12);
            }
        }, function (err) {
            console.log(err);
        });
    };
    JoinSchool.prototype.schoolSelect = function (school_detail) {
        var _this = this;
        this.school_list = school_detail;
        this.joinschoolService.teacherList(school_detail.school_id).then(function (res) {
            if (res['status'] == 'Success') {
                _this.chooseSchool(res['Teacher_list']);
            }
            else {
                alert(32);
            }
        }, function (err) {
            console.log(err);
        });
        return false;
    };
    JoinSchool.prototype.chooseSchool = function (list) {
        var schoolTeacherlistModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__schoolTeacherlist_schoolTeacherlist__["a" /* SchoolTeacherlist */], this.school_list);
        schoolTeacherlistModal.present();
        return false;
    };
    JoinSchool.prototype.ionViewDidLoad = function () {
        this.getItems();
    };
    JoinSchool.prototype.getItems = function () {
        var _this = this;
        console.log(this.searchTerm);
        this.joinschoolService.filterSchoolItems(this.searchTerm).then(function (res) {
            if (res['status'] == 'Success') {
                console.log(res['school_list']);
                _this.schoolList = res['school_list'];
                if (res['school_list'] == '' || res['school_list'] == 'undefine') {
                    _this.addSchoolButt = false;
                }
            }
            else {
                alert(32);
            }
        }, function (err) {
            console.log(err);
        });
    };
    JoinSchool = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\joinSchool\joinSchool.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\nJoin your school\n\n <a href="">  </a>\n\n  </div> \n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n<!-- search code  here-->\n\n<div class="class-search">\n\n<ion-searchbar [(ngModel)]="searchTerm" (ionInput)="getItems($event)"></ion-searchbar>\n\n<!-- <ion-list>\n\n  <ion-item *ngFor="let item of items">\n\n    <h3 ng-model="schoolId">{{item.school_name}}</h3> \n\n     <p ng-model="schoolId">{{item.address}}</p>\n\n  </ion-item>\n\n</ion-list> -->\n\n</div>\n\n<!-- search code  here end-->\n\n\n\n<!-- add school here start-->\n\n<a [hidden] = "addSchoolButt"  [navPush]="addSchool">add school here</a>\n\n<div>\n\n<a [hidden] = "addSchoolButt">No record found!</a>\n\n</div>\n\n<!-- add school here end-->  \n\n\n\n\n\n<!-- add class-->\n\n<div class="content-p  m-school  add-c">\n\n<div class="scholl-list">\n\n\n\n<a href="">\n\n<ion-grid> \n\n  <ion-list col-12 *ngFor="let schoolDetails of schoolList" (click)="schoolSelect(schoolDetails)">\n\n    <ion-item>\n\n     <h3 ng-model="schoolId">{{schoolDetails.school_name}}</h3> \n\n     <p ng-model="schoolId">{{schoolDetails.address}}</p>\n\n    </ion-item>\n\n  </ion-list> \n\n    <button ion-button (click)="teacherList()">I am not in School  </button>   \n\n </ion-grid>  \n\n</a>\n\n</div>\n\n<!-- content end-->\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\joinSchool\joinSchool.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_joinSchool_service__["a" /* JoinSchoolService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_joinSchool_service__["a" /* JoinSchoolService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], JoinSchool);
    return JoinSchool;
}());

//# sourceMappingURL=joinSchool.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolTeacherlist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_joinSchool_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolTeacherlist = (function () {
    function SchoolTeacherlist(navCtrl, platform, params, joinschoolService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.params = params;
        this.joinschoolService = joinschoolService;
        this.alertCtrl = alertCtrl;
        this.school_names = '';
        this.address = '';
        this.idList = {};
        this.SchoolTeacherlist = {};
        this.schoolTeacher = [];
        this.school_Teacherlist = [];
        this.school_id = '';
        this.dashboard = {};
        this.teacher_len = '';
        this.member_no = {};
        this.user_data = {};
        this.school_data = [];
        this.type = {};
        this.join = {};
        this.school_id = params.data.school_id;
        this.school_names = params.data.school_name;
        this.address = params.data.address;
        var user_data = window.localStorage.getItem('loggedInUser');
        var datas = JSON.parse(user_data);
        this.user_data = datas;
        this.member_no = datas[0]['member_no'];
        this.type = datas[0]['type'];
    }
    SchoolTeacherlist.prototype.ngOnInit = function () {
        this.teacherList();
    };
    SchoolTeacherlist.prototype.teacherList = function () {
        var _this = this;
        this.joinschoolService.teacherList(this.school_id).then(function (res) {
            if (res['status'] == 'Success') {
                _this.schoolTeacher = res['Teacher_list'];
                _this.teacher_len = res['Teacher_list'].length;
            }
            else {
                alert(22);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SchoolTeacherlist.prototype.chooseSchool = function (school_id) {
        var _this = this;
        this.join = window.localStorage.getItem('join');
        var alert = this.alertCtrl.create({
            title: '<img src="/assets/imgs/alert.png" class="alert"/><b></b>',
            message: 'Are you Sure want to join this School',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function (school_names) {
                        _this.joinyourSchool();
                    }
                }
            ]
        });
        alert.present();
    };
    SchoolTeacherlist.prototype.schoolnotSelect = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* Dashboard */]);
    };
    SchoolTeacherlist.prototype.joinyourSchool = function () {
        var _this = this;
        this.joinschoolService.joinyourSchool(this.school_id, this.member_no, this.type).then(function (res) {
            if (res['status'] == 'Success') {
                _this.user_data[0]['school_id'] = res['user_list'][0]['school_id'];
                var schoolData = [{ 'school_name': _this.school_names }];
                window.localStorage.setItem('loggedInUser', JSON.stringify(_this.user_data));
                window.localStorage.setItem('school', JSON.stringify(schoolData));
                _this.sendrequest();
                var alert_1 = _this.alertCtrl.create({
                    message: "You Joined the school",
                    buttons: [{
                            text: 'ok',
                            handler: function (event) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* Dashboard */]);
                            }
                        }]
                });
                alert_1.present();
            }
            else if (res['status'] == 'Failure') {
                var alert_2 = _this.alertCtrl.create({
                    message: res['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
            else if (res['error_code'] == 1) {
                var alert_3 = _this.alertCtrl.create({
                    message: res['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_3.dismiss();
                                return false;
                            }
                        }]
                });
                alert_3.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    SchoolTeacherlist.prototype.sendrequest = function () {
        for (var i = 0; i < this.schoolTeacher.length; i++) {
            this.idList += this.schoolTeacher[i].email + ',';
        }
        this.joinschoolService.joinSchoolMailSend(this.idList, this.member_no).then(function (res) {
            if (res['status'] == 'Success') {
                return true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SchoolTeacherlist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\schoolTeacherlist\schoolTeacherlist.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\n     Teacher School list\n\n <a href="" (click)="teacherList()">Skip</a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n<div class="list-school ">\n\n<h3> {{school_names}} </h3>\n\n<h5>{{ address }}</h5>\n\n  <button ion-button color="orange"  class="button-block  save-btn  invite-btn" (click)="chooseSchool()">\n\n    Join this School\n\n </button>\n\n <p>All Teacher ({{teacher_len}})</p>\n\n<div>\n\n</div>\n\n</div>\n\n\n\n<div class="m-school">\n\n <!--listing code here -->\n\n<div class="list-margin">\n\n<div class="add-c  content-p">\n\n  <div>\n\n<a href="">\n\n<ion-grid> \n\n  <ion-list *ngFor="let teacherlist of schoolTeacher">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n      <img src="assets/imgs/event_management.png">  \n\n      </ion-thumbnail>\n\n      <h2>{{teacherlist.name}}</h2>\n\n      <p>{{teacherlist.email}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button (click)="teacherList()">I am not in School</button>\n\n</ion-grid> \n\n</a>\n\n</div>\n\n</div>\n\n</div> \n\n  <!--listing code end -->\n\n</div> \n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\schoolTeacherlist\schoolTeacherlist.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_joinSchool_service__["a" /* JoinSchoolService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_joinSchool_service__["a" /* JoinSchoolService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], SchoolTeacherlist);
    return SchoolTeacherlist;
}());

//# sourceMappingURL=schoolTeacherlist.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_school_service__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shareSchoolInfo_shareSchoolInfo__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSchool = (function () {
    function AddSchool(navCtrl, schoolService, alertCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.schoolService = schoolService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.item = {};
        this.school = {};
        this.user_data = {};
        this.data = {};
        var user_data = window.localStorage.getItem('loggedInUser');
        var datas = JSON.parse(user_data);
        this.user_data = datas;
    }
    AddSchool.prototype.ngOnInit = function () {
        this.school.schoolname = window.localStorage.getItem('joinschool');
        this.school.member_no = window.localStorage.getItem('das_member_no');
    };
    AddSchool.prototype.saveschool = function () {
        var _this = this;
        this.schoolService.saveschool(this.school).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.user_data[0]['school_id'] = resp['teacher_list'][0]['school_id'];
                var schoolData = [{ 'school_name': resp['teacher_list'][0]['school_name'] }];
                window.localStorage.setItem('loggedInUser', JSON.stringify(_this.user_data));
                window.localStorage.setItem('school', JSON.stringify(schoolData));
                _this.approveSchool(resp['teacher_list']);
                _this.shareSchool(resp['teacher_list']);
            }
            else if (resp['error_code'] == 1) {
                var alert_1 = _this.alertCtrl.create({
                    message: resp['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddSchool.prototype.shareSchool = function (data) {
        var schoolTeacherlistModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__shareSchoolInfo_shareSchoolInfo__["a" /* ShareSchoolInfo */], data);
        schoolTeacherlistModal.present();
        return false;
    };
    AddSchool.prototype.approveSchool = function (data) {
        console.log(11);
        console.log(data[0]['school_name']);
        console.log(this.user_data[0]['name']);
        this.schoolService.approveSchool(data[0]['school_name'], this.user_data[0]['name']).then(function (res) {
            if (res['status'] == 'Success') {
                return true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddSchool = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\addSchool\addSchool.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n      Add school\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n\n\n<!-- add class-->\n\n<div class="content-p  m-school  add-c">\n\n<form #formAddSchool="ngForm" (submit)="saveschool()">\n\n<ion-list>\n\n<ion-item>\n\n<ion-input type="text"  placeholder="School Name" name="schoolname" [(ngModel)]="school.schoolname" required></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n <ion-input type="text"  placeholder="Address of school" name="address" [(ngModel)]="school.address" required></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n<ion-input type="text"  placeholder="City or town" name="city" [(ngModel)]="school.city" required></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n<ion-input type="text"  placeholder="State or province" name="state" [(ngModel)]="school.state" required></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n<ion-input type="text"  placeholder="Country" name="country" [(ngModel)]="school.country" required></ion-input>\n\n  </ion-item>\n\n    <ion-item>\n\n<ion-input type="number"  placeholder="Pin Code" name="pin" [(ngModel)]="school.pin" required></ion-input>\n\n  </ion-item>\n\n    <ion-item>\n\n<ion-input type="number"  placeholder="Phone" name="phone" [(ngModel)]="school.phone" required></ion-input>\n\n  </ion-item>\n\n    <ion-item>\n\n<ion-input type="email"  placeholder="Email" name="email" [(ngModel)]="school.email" required></ion-input>\n\n  </ion-item>\n\n      <ion-item>\n\n<ion-input type="text"  placeholder="School Website" name="site" [(ngModel)]="school.site" ></ion-input>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n<div>\n\n<button ion-button color="orange"  class="button-block  save-btn" [disabled]="!formAddSchool.form.valid">Save School\n\n</button>\n\n</div>\n\n</form>\n\n</div>\n\n<!-- add class  end-->\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\addSchool\addSchool.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_school_service__["a" /* SchoolService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AddSchool);
    return AddSchool;
}());

//# sourceMappingURL=addSchool.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareSchoolInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_joinSchool_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShareSchoolInfo = (function () {
    function ShareSchoolInfo(navCtrl, params, joinschoolService) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.joinschoolService = joinschoolService;
        this.school_name = {};
        this.school_name = params.data[0]['school_name'];
    }
    ShareSchoolInfo.prototype.gotoDeskboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* Dashboard */]);
    };
    ShareSchoolInfo.prototype.inviteTeacher = function () {
        alert(1);
    };
    ShareSchoolInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\shareSchoolInfo\shareSchoolInfo.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\n   {{school_name}}\n\n <a href="" (click)="gotoDeskboard()" >Skip</a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n<div class="list-school ">\n\n<h2> {{school_name}} </h2>\n\n<h3> You are the first person added for this school </h3>\n\n  <button ion-button color="orange"  class="button-block  save-btn  invite-btn" (click)="inviteTeacher()">\n\n    Invite Other Teacher\n\n </button>\n\n</div>\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\shareSchoolInfo\shareSchoolInfo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_joinSchool_service__["a" /* JoinSchoolService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_joinSchool_service__["a" /* JoinSchoolService */]])
    ], ShareSchoolInfo);
    return ShareSchoolInfo;
}());

//# sourceMappingURL=shareSchoolInfo.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classIcon_classIcon__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addStudent_addStudent__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddNewClass = (function () {
    function AddNewClass(navCtrl, dashboardService, alertCtrl, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.dashboardService = dashboardService;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.selectGrades = [];
        this.loggedInUser = {};
        this.item = {};
        this.iconImageBase = '';
        this.imageName = '6_6_c_6.png';
    }
    AddNewClass.prototype.ngOnInit = function () {
        var _this = this;
        this.iconImageBase = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "class/";
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.item.imageName = window.localStorage.getItem('classIcon');
        if (this.item.imageName) {
            window.localStorage.setItem('classIcon', '');
            this.item.imagePath = this.iconImageBase + this.item.imageName;
        }
        else {
            this.item.imagePath = 'assets/imgs/addimg.png';
            this.item.imageName = '6_6_c_6.png';
        }
        this.dashboardService.getGradeList(this.loggedInUser.member_no).then(function (res) {
            _this.selectGrades = res;
        }, function (err) {
            console.log(err);
        });
    };
    AddNewClass.prototype.createNewClass = function () {
        var _this = this;
        this.item.schoolId = (this.loggedInUser.school_id).toString();
        this.item.member_no = this.loggedInUser.member_no;
        this.dashboardService.createNewClass(this.item).then(function (res) {
            //if class added successfully then send it to add student page
            if (res['status'] == "Success") {
                var class_id = res['user_list'][0]['class_id'];
                window.localStorage.setItem('classid', class_id);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addStudent_addStudent__["a" /* AddStudent */]);
            }
            else if (res['error_code'] == 1) {
                var alert_1 = _this.alertCtrl.create({
                    message: res['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    message: res['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
        return false;
    };
    /*Find the list of icon to choose for class */
    AddNewClass.prototype.classIconPopup = function () {
        var _this = this;
        //this.navCtrl.setRoot(ClassIcon);
        //this.navCtrl.push(ClassIcon);
        var classIcon = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__classIcon_classIcon__["a" /* ClassIcon */]);
        classIcon.onDidDismiss(function (data) {
            if (data && data['selectedIcon']) {
                _this.item.imageName = data.selectedIcon;
                _this.item.imagePath = _this.iconImageBase + _this.item.imageName;
            }
        });
        classIcon.present();
    };
    AddNewClass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\addNewClass\addNewClass.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n    Add New Class\n\n <a href="">  </a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n<form #formClass="ngForm" (submit)="createNewClass()">\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n<div class="add-img">\n\n  <img src="{{item.imagePath}}" (click)="classIconPopup()">\n\n</div> \n\n\n\n<div class=" m-school  new-border  new-grid">\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col col-8>\n\n   <!-- text box code  here-->\n\n    <ion-item>\n\n   <ion-input type="text"  placeholder="Class Name" required [(ngModel)]="item.className" name="className"></ion-input>\n\n    </ion-item>\n\n\n\n<!--text box code here end--> \n\n    </ion-col>\n\n  <ion-col col-4>\n\n    <ion-item>\n\n      <ion-label><span>Select Grade</span></ion-label>\n\n      <ion-select  name="selectGrade" required [(ngModel)]="item.selectGrade">\n\n      <ion-option *ngFor="let x of selectGrades" value="{{x.key}}">{{x.value}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n<div>\n\n<button [disabled]="!formClass.form.valid" ion-button color="orange"  class="button-block  save-btn">Create new class\n\n</button>\n\n</div>\n\n\n\n</div>\n\n<!-- content end-->\n\n</div>\n\n</form>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\addNewClass\addNewClass.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AddNewClass);
    return AddNewClass;
}());

//# sourceMappingURL=addNewClass.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
    }
    StudentService.prototype.addStudent = function (itemData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/addstudent', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                name: itemData.name,
                class_id: itemData.class_id
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentService.prototype.studentlisting = function (classId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo/studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StudentService);
    return StudentService;
}());

//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolStoryPopovermenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherList_teacherList__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changeSchool_changeSchool__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolStoryPopovermenuPage = (function () {
    function SchoolStoryPopovermenuPage(viewCtrl, navCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.teacherList = __WEBPACK_IMPORTED_MODULE_2__teacherList_teacherList__["a" /* TeacherList */];
    }
    SchoolStoryPopovermenuPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SchoolStoryPopovermenuPage.prototype.changeSchool = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__changeSchool_changeSchool__["a" /* ChangeSchool */]);
    };
    SchoolStoryPopovermenuPage.prototype.teacherlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacherList_teacherList__["a" /* TeacherList */]);
    };
    SchoolStoryPopovermenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherSchoolstoryPopovermenu\teacherSchoolstoryPopovermenu.html"*/`<div class="abcd">\n\n<ion-list>\n\n      \n\n      <button ion-item (click)="changeSchool();" tappable>Change School</button>\n\n      <button ion-item (click)="teacherlist();" tappable>Teacher list</button>\n\n      \n\n</ion-list>\n\n</div>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherSchoolstoryPopovermenu\teacherSchoolstoryPopovermenu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SchoolStoryPopovermenuPage);
    return SchoolStoryPopovermenuPage;
}());

//# sourceMappingURL=teacherSchoolstoryPopovermenu.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherList_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherList = (function () {
    function TeacherList(navCtrl, teacherListService, alertCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.teacherListService = teacherListService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.items = [];
        this.school_id = 0;
        this.leader_member_no = 0;
        this.imageBasePath = '';
        this.total_count = 0;
        this.listsize = 5;
        this.pagecount = 1;
        this.loadMore = 1;
        this.loggedInUser = {};
    }
    TeacherList.prototype.ngOnInit = function () {
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url;
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        if (this.loggedInUser) {
            this.loggedInUser = JSON.parse(this.loggedInUser);
            this.school_id = this.loggedInUser[0].school_id;
            this.leader_member_no = this.loggedInUser[0].member_no;
        }
        this.getTeacherlist();
    };
    TeacherList.prototype.approoveTeacherCnf = function (member_no) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Approove teacher',
            message: 'Are you sure want to change status?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'ok',
                    handler: function () {
                        _this.approoveTeacher(member_no);
                    }
                }]
        });
        alert.present();
    };
    TeacherList.prototype.approoveTeacher = function (member_no) {
        var _this = this;
        var param = {
            member_no: member_no,
            school_id: (this.school_id).toString(),
            sender_ac_no: this.leader_member_no,
            token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken()
        };
        this.teacherListService.approoveTeacher(param).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.getTeacherlist();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    message: 'We are unable to Approve this teacher',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherList.prototype.removeTeacherCnf = function (member_no) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete teacher',
            message: 'Are you sure want to delete?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'ok',
                    handler: function () {
                        _this.removeTeacher(member_no);
                    }
                }]
        });
        alert.present();
    };
    TeacherList.prototype.removeTeacher = function (member_no) {
        var _this = this;
        var param = {
            member_no: member_no,
            school_id: this.school_id,
            sender_ac_no: this.leader_member_no,
            token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken()
        };
        this.teacherListService.removeTeacher(param).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.getTeacherlist();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    message: 'We are unable to delete this teacher',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherList.prototype.getTeacherlist = function () {
        var _this = this;
        this.teacherListService.getTeacherlist(this.school_id, this.pagecount).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.items = resp['Teacher_list'];
                _this.total_count = resp['count_list'][0]['count'];
                //this.listsize = (this.items).length;          
                if (_this.total_count > (_this.listsize * _this.pagecount)) {
                    _this.loadMore = 1;
                }
                else {
                    _this.loadMore = 0;
                }
            }
            else {
                _this.loadMore = 0;
                var alert_3 = _this.alertCtrl.create({
                    message: 'There is No More teacher..',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_3.dismiss();
                                return false;
                            }
                        }]
                });
                alert_3.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherList.prototype.pagging = function () {
        this.pagecount = this.pagecount + 1;
        this.getTeacherlist();
    };
    TeacherList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherList\teacherList.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\nTeacher  list\n\n \n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n<div class="white-back">\n\n <!--listing code here -->\n\n<div class="add-c  list-c">\n\n  <div>\n\n<ion-list *ngFor=" let item of items">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imageBasePath}}/assets/profile_image/{{item.image}}" *ngIf="item.image">\n\n    <img src="assets/imgs/chat_user.png" *ngIf="!item.image">\n\n      </ion-thumbnail>\n\n      <h2>{{item.name}}</h2>\n\n      <p>{{item.email}}</p>\n\n      <div class="btn-as">\n\n    <button ion-button outline item-end  class="send-btn" *ngIf="item.status == 0" (click)="approoveTeacherCnf(item.member_no)">  <ion-icon name="time"></ion-icon> Pending</button>\n\n      <button ion-button outline item-end  class="approved-btn" *ngIf="item.status == 1"> <ion-icon name="checkmark"></ion-icon> Approved</button>\n\n      <button ion-button outline item-end  class="Delete-btn" (click)="removeTeacherCnf(item.member_no)"> <ion-icon name="trash"></ion-icon> Delete</button>\n\n      </div>\n\n    </ion-item>\n\n</ion-list>\n\n</div>\n\n</div>\n\n\n\n  <!--listing code end -->\n\n</div> \n\n\n\n\n\n<!-- more button -->\n\n<div class="list-school ">\n\n<button ion-button color="orange"  class="button-block  save-btn list-btn" (tap)="pagging()" *ngIf="loadMore">\n\n  More\n\n </button>\n\n</div>\n\n<!-- more button  end -->\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherList\teacherList.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherList_service__["a" /* TeacherListService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_teacherList_service__["a" /* TeacherListService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TeacherList);
    return TeacherList;
}());

//# sourceMappingURL=teacherList.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeSchool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_changeSchool_service__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeSchool = (function () {
    function ChangeSchool(navCtrl, changeSchoolService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.changeSchoolService = changeSchoolService;
        this.alertCtrl = alertCtrl;
    }
    ChangeSchool = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\changeSchool\changeSchool.html"*/`ANand Singh`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\changeSchool\changeSchool.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_changeSchool_service__["a" /* ChangeSchoolService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_changeSchool_service__["a" /* ChangeSchoolService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ChangeSchool);
    return ChangeSchool;
}());

//# sourceMappingURL=changeSchool.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchoolstoryPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddSchoolstoryPostPage = (function () {
    function AddSchoolstoryPostPage(navCtrl, actionSheetCtrl, camera, SchoolstoryService, alertCtrl, fileTransfer, mediaCapture) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.SchoolstoryService = SchoolstoryService;
        this.alertCtrl = alertCtrl;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.item = {};
        this.school_id = '';
        this.member_no = '';
        this.loggedInUser = {};
        this.selection = "0";
        this.imgURI = '';
        this.videoPath = '';
        this.school_id = window.localStorage.getItem('school_id');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
    }
    AddSchoolstoryPostPage.prototype.ngOnInit = function () {
    };
    AddSchoolstoryPostPage.prototype.showPopup = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Take Photo',
                    role: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.choosePhoto();
                    }
                }, {
                    text: 'Video',
                    role: 'Video',
                    handler: function () {
                        _this.chooseVideo();
                    }
                }, {
                    text: 'Close',
                    role: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AddSchoolstoryPostPage.prototype.takePhoto = function () {
        var _this = this;
        this.selection = "1";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AddSchoolstoryPostPage.prototype.choosePhoto = function () {
        var _this = this;
        this.selection = "2";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AddSchoolstoryPostPage.prototype.chooseVideo = function () {
        var _this = this;
        this.selection = "3";
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureVideo(options).then(function (Videodata) {
            console.log(Videodata);
            var file_path = Videodata[0].fullPath;
            _this.videoPath = file_path;
        }, function (err) {
            console.log(err);
        });
    };
    AddSchoolstoryPostPage.prototype.savePost = function (imageData) {
        var _this = this;
        if (this.selection == '0') {
            this.SchoolstoryService.addschoolstoryPost(this.item, this.member_no, this.school_id).then(function (res) {
                if (res['status'] == "Success") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'School Story added successfully',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                    _this.navCtrl.pop();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.selection == "3") {
            console.log(this.videoPath);
            var s = this.videoPath;
            var fields = s.split('/');
            var nameOfVideo = fields.slice(-1)[0];
            console.log(this.item['message']);
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: nameOfVideo,
                mimeType: "video/3gp",
                chunkedMode: false,
                params: {
                    "message": this.item['message'],
                    "school_id": this.school_id,
                    "teacher_ac_no": this.member_no,
                    "sender_ac_no": this.member_no
                }
            };
            console.log(options);
            fileTransfer.upload(this.videoPath, __WEBPACK_IMPORTED_MODULE_6__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_6__assets_json_config__["a" /* data */].port + '/schoolstory/post?token=' + __WEBPACK_IMPORTED_MODULE_7__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'School Story added successfully',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.pop();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log(this.imgURI);
            console.log(this.item['message']);
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: "1.jpg",
                mimeType: "image/jpeg",
                chunkedMode: false,
                params: {
                    "message": this.item['message'],
                    "school_id": this.school_id,
                    "teacher_ac_no": this.member_no,
                    "sender_ac_no": this.member_no
                }
            };
            console.log(options);
            fileTransfer.upload(this.imgURI, __WEBPACK_IMPORTED_MODULE_6__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_6__assets_json_config__["a" /* data */].port + '/schoolstory/post?token=' + __WEBPACK_IMPORTED_MODULE_7__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'School Story added successfully',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.pop();
            }, function (err) {
                console.log(err);
            });
        }
    };
    AddSchoolstoryPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\addSchoolstoryPost\addSchoolstoryPost.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n  	\n\n    <ion-title>\n\n      Add School Story\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n <div class="back-c">\n\n  <form #loginForm="ngForm" (ngSubmit)="savePost()">\n\n      \n\n\n\n      <div class="m-school  class_post">\n\n<div class="post-btn">\n\n<a (tap) ="showPopup()">Add photo or video</a>\n\n<img class="image_border" src="{{imgURI}}" *ngIf="selection==1 || selection==2">\n\n<video src="{{videoPath}}" *ngIf="selection==3" class="centerme image_border" controls="controls" ></video>\n\n</div>\n\n     \n\n     \n\n     <ion-list>\n\n    <ion-item>\n\n      	<ion-input type="text"  placeholder="What\'s happening in your School?" [(ngModel)]="item.message" name="message" required></ion-input>\n\n     </ion-item>\n\n</ion-list>\n\n<!-- button code start -->\n\n       <div>\n\n          <button ion-button color="orange"  class="button-block  save-btn" [disabled]="!loginForm.form.valid">save</button>\n\n        </div> \n\n        <!-- button code end -->\n\n      </div>\n\n<!-- button code end -->\n\n\n\n\n\n</form>\n\n</div>\n\n<!-- content end-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\addSchoolstoryPost\addSchoolstoryPost.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], AddSchoolstoryPostPage);
    return AddSchoolstoryPostPage;
}());

//# sourceMappingURL=addSchoolstoryPost.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSchoolstoryPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schoolStory_schoolStory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditSchoolstoryPostPage = (function () {
    function EditSchoolstoryPostPage(navCtrl, actionSheetCtrl, schoolStoryService, alertCtrl, camera, fileTransfer, mediaCapture) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.schoolStoryService = schoolStoryService;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.classid = '';
        this.item = {};
        this.memberno = '';
        this.username = '';
        this.postid = '';
        this.items = {};
        this.message = '';
        this.imagePath = '';
        this.imgURI = '';
        this.image = '';
        this.videoPath = '';
        this.selection = "0";
        this.postid = window.localStorage.getItem('postid');
        var data = window.localStorage.getItem('loggedInUser');
        var teacher_list = JSON.parse(data);
        this.memberno = teacher_list[0]['member_no'];
        this.classid = window.localStorage.getItem('classid');
        this.username = teacher_list[0]['name'];
        this.imagePath = __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].image_path;
    }
    EditSchoolstoryPostPage.prototype.ngOnInit = function () {
        this.getPostdata();
    };
    EditSchoolstoryPostPage.prototype.getPostdata = function () {
        var _this = this;
        this.postid = this.postid.toLocaleString();
        this.schoolStoryService.getSchoolstory_id(this.postid, this.memberno).then(function (res) {
            if (res['status'] == "Success") {
                _this.message = res['post'][0]['message'];
                _this.image = res['post'][0]['image'];
                _this.imgURI = _this.imagePath + "school_stories/" + _this.image;
                console.log(_this.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditSchoolstoryPostPage.prototype.showPopup = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Take Photo',
                    role: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.choosePhoto();
                    }
                }, {
                    text: 'Video',
                    role: 'Video',
                    handler: function () {
                        _this.chooseVideo();
                    }
                }, {
                    text: 'Close',
                    role: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditSchoolstoryPostPage.prototype.takePhoto = function () {
        var _this = this;
        this.selection = "1";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    EditSchoolstoryPostPage.prototype.choosePhoto = function () {
        var _this = this;
        this.selection = "2";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    EditSchoolstoryPostPage.prototype.chooseVideo = function () {
        var _this = this;
        this.selection = "3";
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureVideo(options).then(function (Videodata) {
            console.log(Videodata);
            var file_path = Videodata[0].fullPath;
            _this.videoPath = file_path;
        }, function (err) {
            console.log(err);
        });
    };
    EditSchoolstoryPostPage.prototype.savePost = function () {
        var _this = this;
        this.postid = this.postid.toLocaleString();
        if (this.selection == '0') {
            this.schoolStoryService.updateSchoolstoryPost(this.postid, this.message, this.memberno).then(function (res) {
                if (res['status'] == "Success") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Story Updated successfully',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__schoolStory_schoolStory__["a" /* SchoolStory */]);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.selection == "3") {
            var s = this.videoPath;
            var fields = s.split('/');
            var nameOfVideo = fields.slice(-1)[0];
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: nameOfVideo,
                mimeType: "video/3gp",
                chunkedMode: false,
                params: {
                    "message": this.message,
                    "id": this.postid,
                    "sender_ac_no": this.memberno
                }
            };
            fileTransfer.upload(this.videoPath, __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].port + '/schoolstory/post_update?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'School Story Updated successfully',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.pop();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log(this.imgURI);
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: "1.jpg",
                mimeType: "image/jpeg",
                chunkedMode: false,
                params: {
                    "message": this.message,
                    "id": this.postid,
                    "sender_ac_no": this.memberno
                }
            };
            console.log(options);
            fileTransfer.upload(this.imgURI, __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].port + '/schoolstory/post_update?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'School Story Updated successfully',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.pop();
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditSchoolstoryPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\editschoolstoryPost\editschoolstoryPost.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n  	\n\n    <ion-title>\n\n      Edit School Story\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n   \n\n      <div class="back-c">\n\n     <div class="m-school  class_post">\n\n<div class="post-btn">\n\n<a (tap) ="showPopup()">Add photo or video</a>\n\n<img class="image_border" src="{{imgURI}}"/>\n\n</div>\n\n     \n\n      \n\n     <ion-list>\n\n    <ion-item>\n\n      	<ion-input type="text"  placeholder="What\'s happening in your classroom?"  [(ngModel)]="this.message" required></ion-input>\n\n      </ion-item>\n\n</ion-list>\n\n       <div>\n\n      \n\n          <button ion-button color="orange"  class="button-block  save-btn" (click)="savePost()" tappable>save</button>\n\n        </div> \n\n       </div> \n\n      </div>\n\n   \n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\editschoolstoryPost\editschoolstoryPost.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], EditSchoolstoryPostPage);
    return EditSchoolstoryPostPage;
}());

//# sourceMappingURL=editschoolstoryPost.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolstoryCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolstoryCommentPage = (function () {
    function SchoolstoryCommentPage(navCtrl, schoolStoryService, alertCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.schoolStoryService = schoolStoryService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.member_no = '';
        this.loggedInUser = {};
        this.storyid = '';
        this.image = '';
        this.postId = '';
        this.like = '';
        this.like_status = '';
        this.teacher_ac_no = '';
        this.message = '';
        this.ext = '';
        this.items = '';
        this.username = '';
        this.imgURI = '';
        this.teacher_name = '';
        this.imagePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path;
        this.item = {};
        this.userImage = '';
        this.commentCount = '';
        this.teacher_image = '';
        this.school_id = '';
        this.pathUrl = '';
        this.school_id = window.localStorage.getItem('school_id');
        this.storyid = this.navParams.get("storyid");
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        var userImage = this.loggedInUser.image;
    }
    SchoolstoryCommentPage.prototype.ngOnInit = function () {
        this.loadComment();
    };
    SchoolstoryCommentPage.prototype.loadComment = function () {
        var _this = this;
        this.schoolStoryService.loadComment(this.storyid, this.member_no).then(function (result) {
            if (result['status'] == "Success") {
                var json = result['post'];
                _this.image = json[0]['image'];
                _this.postId = json[0]['id'];
                _this.like = json[0]['likes'];
                _this.like_status = json[0]['status'];
                _this.teacher_ac_no = json[0]['teacher_ac_no'];
                _this.message = json[0]['message'];
                _this.ext = json[0]['ext'];
                _this.pathUrl = _this.imagePath + "school_stories/" + _this.image;
                if (result['teacher_name'][0].hasOwnProperty('name') == true) {
                    _this.teacher_name = result['teacher_name'][0]['name'];
                }
                _this.items = result['comment_list'];
                _this.commentCount = _this.items['length'];
            }
            else {
                alert('No post available now..');
            }
        }, function (err) {
        });
    };
    SchoolstoryCommentPage.prototype.saveComment = function () {
        var _this = this;
        this.storyid = this.storyid.toLocaleString();
        this.schoolStoryService.saveComment(this.storyid, this.member_no, this.item, this.school_id).then(function (res) {
            if (res['status'] == "Success") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Comment successfully...',
                    buttons: ['Ok']
                });
                alert_1.present();
                _this.loadComment;
            }
            else if (res['error_code'] == 1) {
                var alert_2 = _this.alertCtrl.create({
                    title: res['error_msg'],
                    buttons: ['Ok']
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Comment not send...',
                    buttons: ['Ok']
                });
                alert_3.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    SchoolstoryCommentPage.prototype.openCommentMenu = function (myEvent) {
        window.localStorage.setItem('postid', this.storyid);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__["a" /* SchoolStoryupdatePopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SchoolstoryCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\schoolstoryComment\schoolstoryComment.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Class Genie\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n<div class="back-c">\n\n\n\n<!-- post section -->\n\n<div class="comment-s">\n\n\n\n\n\n<div class=" invite-f  story-h1">\n\n<div class="border-b">\n\n <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="{{imageurl}}">  \n\n      </ion-thumbnail>\n\n      \n\n      <h2>{{teacher_name}}</h2>\n\n      <p><ion-icon name="arrow-round-forward"></ion-icon>  {{nameOfClass}}  </p>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n<div class="border-b1">\n\n  <div class="head-story">\n\n    <h2>{{message}}</h2>\n\n  </div>\n\n  <div class="like-section1">\n\n   <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <span>\n\n       <ion-icon name="checkmark-circle"></ion-icon> {{like}}  Likes\n\n       </span> \n\n      </ion-thumbnail>\n\n       <ion-thumbnail item-start>\n\n        <span>\n\n          <ion-icon name="checkmark-circle"></ion-icon> {{commentCount}} Comments\n\n       </span> \n\n      </ion-thumbnail>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</div>\n\n<!-- section end -->\n\n<!-- section satrt -->\n\n<div class="border-b0  like-section">\n\n<div class="r-icon">\n\n<ion-icon name="more" (click)="openCommentMenu($event)" *ngIf="pagestatus!=\'tabpending\'"></ion-icon>\n\n</div>\n\n</div>\n\n\n\n\n\n<!-- below section start-->\n\n<div class="border-class">\n\n<div class="like-section1">\n\n <ion-grid  *ngFor="let item of items">\n\n <ion-row>\n\n <ion-col col-10>\n\n <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="{{imagePath}}/profile_image/{{item.name.image}}?{{randNo}}"> \n\n         <img  src="assets/imgs/chat_user.png" class="user_right" *ngIf="item.name.image==\'\'">\n\n      <span class="user_neme_comment" *ngIf="item.name.name!=\'\'">{{item.name.name}}</span>\n\n      <span class="user_neme_comment" *ngIf="item.name.name==\'\'">{{item.student_name}}</span> \n\n      </ion-thumbnail>\n\n      <h2> <span class="user_neme_comment" *ngIf="item.name.name!=\'\'">{{item.name.name}}</span>\n\n      <span class="user_neme_comment" *ngIf="item.name.name==\'\'">{{item.student_name}}</span> </h2>\n\n      <p> {{item.comment}}  </p>\n\n     </ion-item>\n\n  </ion-list>\n\n</ion-col>\n\n </ion-row>\n\n</ion-grid>\n\n\n\n</div>\n\n</div>\n\n<!-- below section end-->\n\n</div>\n\n </div> \n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="foooter-section  class-s">\n\n  <form #loginForm="ngForm" (ngSubmit)="saveComment()">\n\n  <ion-toolbar>\n\n   <div>\n\n  <ion-list>\n\n    <ion-item>\n\n    <ion-input type="text"  placeholder="Add Your Comment" [(ngModel)]="item.comment" name="message" required ></ion-input>\n\n    </ion-item>\n\n   </ion-list>\n\n   </div>\n\n   <div>\n\n   <button   ion-button outline item-end  class="btn-invite1" [disabled]="!loginForm.form.valid">\n\n  <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n  </button> \n\n   </div>\n\n  </ion-toolbar>\n\n</form>\n\n</ion-footer>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\schoolstoryComment\schoolstoryComment.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
    ], SchoolstoryCommentPage);
    return SchoolstoryCommentPage;
}());

//# sourceMappingURL=schoolstoryComment.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolstoryLikesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchoolstoryLikesPage = (function () {
    function SchoolstoryLikesPage(navCtrl, schoolstoryService, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.schoolstoryService = schoolstoryService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.like_list_items = [];
        this.randno = '';
        this.storyid = this.navParams.get("storyid");
        this.school_id = this.navParams.get("schoolid");
    }
    SchoolstoryLikesPage.prototype.ngOnInit = function () {
        this.loadlike();
    };
    SchoolstoryLikesPage.prototype.getRandom = function () {
        return Math.random();
    };
    SchoolstoryLikesPage.prototype.loadlike = function () {
        var _this = this;
        this.schoolstoryService.Likelist(this.school_id, this.storyid).then(function (result) {
            if (result['status'] == "Success") {
                var data1 = result['like_list'];
                _this.like_list_items = data1;
                for (var i = 0; i < data1.length; i++) {
                    _this.randno = _this.getRandom();
                }
            }
            else {
            }
        }, function (err) {
        });
    };
    SchoolstoryLikesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\schoolstoryLikes\schoolstoryLikes.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Likes\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <div class="list add-student">\n\n          <ion-list id="student_list">\n\n            <ion-item class="item-avatar" *ngFor="let item of like_list_items">            >\n\n            <img src="{{imagePath}}profile_image/{{item.name.image}}?{{randno}}" *ngIf="item.name.image!==\'\'"/> \n\n            <img ng-src="img/chat_user.png" ng-if="item.name.image==\'\'" /> \n\n            <h2 ng-model="className" class="class_name_heading" *ngIf="item.name!=\'\'">{{item.name.name}} </h2>\n\n            <h2 ng-model="className" class="class_name_heading" *ngIf="item.student_name!=\'\'">{{item.student_name}} </h2>\n\n            </ion-item>\n\n          </ion-list>\n\n      </div>\n\n \n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\schoolstoryLikes\schoolstoryLikes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_schoolStory_service__["a" /* SchoolStoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SchoolstoryLikesPage);
    return SchoolstoryLikesPage;
}());

//# sourceMappingURL=schoolstoryLikes.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherMassage_service__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inviteparents_inviteparents__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TeacherMessagePage = (function () {
    function TeacherMessagePage(navCtrl, tescherMessage, altCtrl) {
        this.navCtrl = navCtrl;
        this.tescherMessage = tescherMessage;
        this.altCtrl = altCtrl;
        this.class_id = '';
        this.user_list = {};
        this.no_of_users = '0';
        this.user_data = {};
        this.content = {};
        this.member_no = {};
        this.details = [];
        this.online_user = [];
        this.offline_user = [];
        this.pending_user = [];
        this.notification_sender_ac_no = '';
        this.chat_notification = [];
        this.responseData = [];
        this.parent_details = [];
        this.parentDetails = [];
        this.inviteParent = {};
        this.classname = '';
        var data = window.localStorage.getItem('classid');
        this.class_id = data;
        var user_data = window.localStorage.getItem('loggedInUser');
        var datas = JSON.parse(user_data);
        this.member_no = datas[0]['member_no'];
        this.classname = window.localStorage.getItem('classname');
        ;
    }
    TeacherMessagePage.prototype.ngOnInit = function () {
        this.getStudentMessgList();
    };
    TeacherMessagePage.prototype.getStudentMessgList = function () {
        var _this = this;
        this.tescherMessage.getStudentMessgList(this.class_id).then(function (result) {
            if (result['status'] == "Failure") {
                var alert_1 = _this.altCtrl.create({
                    message: result['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                _this.user_list = result['user_list'];
                if (result['user_list'].length > 0) {
                    _this.chat_notifications(result['user_list']);
                    if (_this.no_of_users < '2') {
                        //$('div.massage-list #lnk_all_parents').hide();
                    }
                }
                else {
                    //$('div.massage-list #no_of_users').html(0);
                    //$('div.massage-list #lnk_all_parents').show();
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMessagePage.prototype.chat_notifications = function (datas) {
        var _this = this;
        for (var i = 0; i < datas.length; i++) {
            if (typeof datas[i].parent_detail != 'undefined') {
                this.notification_sender_ac_no += ',' + datas[i].parent_ac_no;
            }
        }
        if (this.notification_sender_ac_no != '') {
            this.notification_sender_ac_no = this.notification_sender_ac_no.substring(1);
        }
        console.log(this.notification_sender_ac_no);
        var chat_notification = {};
        this.tescherMessage.teacherChat_notification(this.notification_sender_ac_no, this.member_no).then(function (result) {
            _this.responseData = result;
            for (var i = 0; i < (_this.responseData).length; i++) {
                if (typeof chat_notification[result[i].sender_ac_no] == 'undefined') {
                    _this.chat_notification[result[i].sender_ac_no] = [];
                }
                if (typeof chat_notification[result[i].sender_ac_no][result[i].receiver_class_id] == 'undefined') {
                    _this.chat_notification[result[i].sender_ac_no][result[i].receiver_class_id] = [];
                }
                _this.chat_notification[result[i].sender_ac_no][result[i].receiver_class_id].push(result[i]);
            }
        }, function (err) {
            console.log(err);
        });
        this.parentDetails = datas;
        console.log(this.parentDetails);
        for (var i = 0; i < datas.length; i++) {
            if (typeof datas[i].parent_detail != 'undefined') {
                this.no_of_users++;
            }
        }
    };
    TeacherMessagePage.prototype.setParentDetail = function (name, parent_ac_no) {
        window.localStorage.setItem('message_account_name', JSON.stringify(name));
        window.localStorage.removeItem('class_id_chat');
        window.localStorage.setItem('member_no_chat', JSON.stringify(parent_ac_no));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* Chat */]);
    };
    TeacherMessagePage.prototype.inviteParents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inviteparents_inviteparents__["a" /* InviteparentsPage */]);
    };
    TeacherMessagePage.prototype.setParentDetailAll = function () {
        console.log(this.no_of_users);
        if (this.no_of_users == '0') {
            var alert_2 = this.altCtrl.create({
                title: "<b>Classgenie</b>",
                message: "Sorry, No parent is connected!",
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert_2.dismiss();
                            return false;
                        }
                    }]
            });
            alert_2.present();
        }
        else {
            window.localStorage.removeItem('member_no_chat');
            window.localStorage.setItem('class_id_chat', this.class_id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* Chat */]);
        }
    };
    TeacherMessagePage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* Dashboard */]);
        window.localStorage.removeItem('classid');
        window.localStorage.removeItem('classname');
    };
    TeacherMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherMessage\teacherMessage.html"*/`<ion-header>\n\n  <ion-navbar >    \n\n    <ion-icon name="arrow-back" (click)="back();" tappable></ion-icon>\n\n    <ion-title>\n\n {{classname}}\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n<div class="head-con1">\n\n<h3>Message</h3>\n\n </div>\n\n\n\n<div class="m-school  list-b">\n\n<!--listing code here -->\n\n<div class="list-margin">\n\n<div class="add-c  content-p">\n\n\n\n  <div>\n\n  <ion-grid>\n\n   <ion-list>\n\n    <ion-item>\n\n      <a class="item item-avatar" href="javascript:void(0)" (click)="setParentDetailAll()" id="lnk_all_parents" >\n\n              <img ng-src="../assets/imgs/all_parent.png">\n\n              <h2>All Parents</h2>\n\n              <p><span></span>{{no_of_users}} parents connected</p>              \n\n            </a>          \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-grid>\n\n</div>\n\n\n\n  <div>\n\n  <ion-grid>\n\n   <ion-list *ngFor="let details of parentDetails">\n\n    <ion-item>      \n\n              <img ng-src="../assets/imgs/chat_user.png">              \n\n              <h2 (click) = "setParentDetail(details.name,details.parent_ac_no)">{{details.name}}\'s Parent</h2>\n\n              <p (click) = "inviteParents();" [hidden]="details.parent_detail !== undefined"><a>Invite parent</a></p>                    \n\n    </ion-item>\n\n  </ion-list>\n\n</ion-grid>\n\n</div>\n\n \n\n</div>\n\n</div>  \n\n</div>\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherMessage\teacherMessage.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherMassage_service__["a" /* TeacherMassageServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_teacherMassage_service__["a" /* TeacherMassageServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TeacherMessagePage);
    return TeacherMessagePage;
}());

//# sourceMappingURL=teacherMessage.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smileyIcon_smileyIcon__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media_capture__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Chat = (function () {
    function Chat(navCtrl, altCtrl, chatservicess, modalCtrl, loadingCtrl, actionSheetCtrl, camera, alertCtrl, fileTransfer, mediaCapture) {
        this.navCtrl = navCtrl;
        this.altCtrl = altCtrl;
        this.chatservicess = chatservicess;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.class_ids = '';
        this.sender_ac_no = '';
        this.sender_name = {};
        this.member_no_msg = '';
        this.Name = '';
        this.parent_id = '';
        this.teacher_id = '';
        this.class_id = '';
        this.class_id_chat = '';
        this.receiver_name = '';
        this.receiver_ac_no = '';
        this.page_number = '';
        this.user_details = [];
        this.paginations = {};
        this.item = {};
        this.imageName = '';
        this.iconImageBase = '';
        this.imagePath = '';
        this.source = '0';
        this.class_ids = window.localStorage.getItem('classid');
        var user_data = window.localStorage.getItem('loggedInUser');
        var datas = JSON.parse(user_data);
        this.sender_ac_no = datas[0]['member_no'];
        this.sender_name = datas[0]['name'];
        this.member_no_msg = window.localStorage.getItem('member_no_chat');
        this.class_id_chat = window.localStorage.getItem('class_id_chat');
        this.imageName = window.localStorage.getItem('classIcon');
        this.iconImageBase = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "chaticon/";
        this.page_number = '1';
    }
    Chat.prototype.ngOnInit = function () {
        this.getChatList();
    };
    Chat.prototype.inItLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getLoader()
        });
    };
    Chat.prototype.getChatList = function () {
        var _this = this;
        if (this.member_no_msg) {
            this.Name = 'Message';
            //Check teacher or parent login for one parent
            if ((this.sender_ac_no).substr(0, 1) == '2') {
                this.parent_id = this.member_no_msg;
                this.teacher_id = this.sender_ac_no;
            }
            else {
                this.class_id = this.class_ids;
                this.teacher_id = this.member_no_msg;
                this.parent_id = this.sender_ac_no;
            }
            this.updateNotification(this.sender_ac_no, this.member_no_msg, this.class_ids); //update notification
            this.inItLoader();
            this.loading.present();
            this.chatservicess.parentSearch(this.member_no_msg).then(function (result) {
                if (result['status'] == "Success") {
                    _this.receiver_ac_no = _this.member_no_msg;
                    _this.receiver_name = result['user_list'][0]['name'];
                }
                _this.loadMessages({ teacher_id: _this.teacher_id, parent_id: _this.parent_id });
            }, function (err) {
                console.log(err);
            });
        }
        else {
            //far all partent        
            this.Name = 'All Parents';
            this.teacher_id = this.sender_ac_no;
            var parent_ac_nos = '', receiver_names = '', receiver_ac_nos = '';
            this.inItLoader();
            this.loading.present();
            this.chatservicess.studentMsgList(this.class_id_chat).then(function (result) {
                if (result['user_list'] != '') {
                    var data = result['user_list'];
                    _this.responseData = data;
                    for (var i = 0; i < (_this.responseData).length; i++) {
                        if (data[i].parent_ac_no != '0') {
                            parent_ac_nos += ',' + data[i].parent_ac_no;
                            receiver_names += ',' + data[i].parent_detail.name;
                            receiver_ac_nos += ',' + data[i].parent_ac_no;
                        }
                    }
                    if (parent_ac_nos != '') {
                        _this.parent_id = parent_ac_nos.substring(1);
                        _this.receiver_name = receiver_names.substring(1);
                        _this.receiver_ac_no = receiver_ac_nos.substring(1);
                        _this.loadMessages({ teacher_id: _this.sender_ac_no, parent_id: _this.parent_id });
                    }
                    else {
                        _this.parent_id = '';
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    Chat.prototype.loadMessages = function (resp) {
        var _this = this;
        this.chatservicess.chatList(resp.teacher_id, resp.parent_id, this.class_ids, this.page_number).then(function (result) {
            //if(result['status'] == "Success"){
            _this.loading.dismiss();
            var user_info = result['user_list'];
            var data = result['user_list'];
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var message = '';
                    if (data[i].message.indexOf('image#$#') > -1) {
                        var msg = data[i].message.split('#$#');
                        message = "<img src='" + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "chat/" + msg[1] + "'>";
                    }
                    else if (data[i].message.indexOf('video#$#') > -1) {
                        var msg = data[i].message.split('#$#');
                        var arr_video = msg[1].split('.');
                        message = '<video width="200" height="200" controls="controls"><source src="' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + 'assets/chat/' + msg[1] + '" type="video/' + arr_video[2] + '" /></video>';
                    }
                    else if (data[i].message.indexOf('emotion_image') > -1) {
                        var msg = data[i].message.split('~');
                        message = "<img src='" + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "chaticon/" + msg[1] + "' class='bubble_icon'>";
                    }
                    else {
                        message = data[i]['message'];
                    }
                    user_info[i]['message'] = message;
                }
                var create = data[0]['created_at'];
                _this.user_details = user_info;
            }
            else {
                _this.paginations = false;
            }
            if (data.length > 9) {
                _this.paginations = false;
            }
            else {
                _this.paginations = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Execute on button click
    Chat.prototype._sendMessage = function () {
        this.sendMessageInit(0, 0);
        this.item['message'] = '';
    };
    /**
    * Send message
    */
    Chat.prototype.sendMessageInit = function (source, imgData) {
        if (this.member_no_msg) {
            if (source == 1) {
                //source 1 means for image or video
                this.updateDBMedia(this.teacher_id, this.parent_id, imgData);
            }
            else if (source == 2) {
                this.updateDBVedio(this.teacher_id, this.parent_id, imgData);
            }
            else {
                this.updateDB(this.teacher_id, this.parent_id, this.item['message']);
            }
        }
        else {
            if (source == 1) {
                this.updateDBMedia(this.teacher_id, this.parent_id, imgData);
            }
            else if (source == 2) {
                this.updateDBVedio(this.teacher_id, this.parent_id, imgData);
            }
            else {
                this.updateDB(this.teacher_id, this.parent_id, this.item['message']);
            }
        }
        this.item['message'] = '';
    };
    Chat.prototype.updateDB = function (teacher_id, parent_id, message) {
        var _this = this;
        var data = {
            teacher_id: teacher_id,
            parent_id: parent_id,
            message: message,
            sender_name: this.sender_name,
            receiver_name: this.receiver_name,
            sender_ac_no: this.sender_ac_no,
            receiver_ac_no: this.receiver_ac_no,
            class_id: this.class_ids,
            token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(),
        };
        this.inItLoader();
        this.loading.present();
        this.chatservicess.updateDB(data).then(function (result) {
            if (result['message'] == 1) {
                _this.loading.dismiss();
                _this.getChatList();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.loadPrevious = function () {
        this.page_number++;
        this.getChatList();
    };
    Chat.prototype.removeChat = function (id, receiver_ac_no, message) {
        var _this = this;
        this.chatservicess.removeChat(id, receiver_ac_no, message).then(function (result) {
            var alert = _this.altCtrl.create({
                message: "Massege has been deleted",
                buttons: [{
                        text: 'ok',
                        handler: function (event) {
                            _this.getChatList();
                        }
                    }]
            });
            alert.present();
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.showEmotionList = function () {
        var _this = this;
        var smileyIcon = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__smileyIcon_smileyIcon__["a" /* SmileyIcon */]);
        smileyIcon.onDidDismiss(function (data) {
            if (data && data['selectedIcon']) {
                _this.imageName = data.selectedIcon;
                _this.item['message'] = 'emotion_image~' + _this.imageName;
                _this.sendMessageInit(0, 0);
            }
        });
        smileyIcon.present();
    };
    Chat.prototype.updateNotification = function (sender_ac_no, member_no, class_id) {
        this.chatservicess.updateChat(sender_ac_no, member_no, class_id).then(function (result) {
            return true;
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.showPicturePopup = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Take Photo',
                    role: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.choosePhoto();
                    }
                }, {
                    text: 'Video',
                    role: 'Video',
                    handler: function () {
                        _this.chooseVideo();
                    }
                }, {
                    text: 'Close',
                    role: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Chat.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.sendMessageInit(1, imageData);
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.choosePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.sendMessageInit(1, imageData);
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.chooseVideo = function () {
        var _this = this;
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureVideo(options).then(function (Videodata) {
            console.log(Videodata);
            var file_path = Videodata[0].fullPath;
            _this.sendMessageInit(2, file_path);
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.updateDBMedia = function (teacher_id, parent_id, imgData) {
        var _this = this;
        var fileTransfer = this.fileTransfer.create();
        var options = {
            fileKey: "upload_file",
            fileName: "1.jpg",
            mimeType: "image/jpeg",
            chunkedMode: false,
            params: {
                "teacher_id": teacher_id,
                "parent_id": parent_id,
                "sender_name": this.sender_name,
                "receiver_name": this.receiver_name,
                "sender_ac_no": this.sender_ac_no,
                "receiver_ac_no": this.receiver_ac_no,
                "class_id": this.class_ids,
            }
        };
        fileTransfer.upload(imgData, __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/chats/chat_media?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
            _this.getChatList();
        }, function (err) {
            console.log(err);
        });
    };
    Chat.prototype.updateDBVedio = function (teacher_id, parent_id, imgData) {
        var _this = this;
        var s = imgData;
        var fields = s.split('/');
        var nameOfVideo = fields.slice(-1)[0];
        var fileTransfer = this.fileTransfer.create();
        var options = {
            fileKey: "upload_file",
            fileName: nameOfVideo,
            mimeType: "video/3gp",
            chunkedMode: false,
            params: {
                "teacher_id": teacher_id,
                "parent_id": parent_id,
                "sender_name": this.sender_name,
                "receiver_name": this.receiver_name,
                "sender_ac_no": this.sender_ac_no,
                "receiver_ac_no": this.receiver_ac_no,
                "class_id": this.class_ids,
            }
        };
        fileTransfer.upload(imgData, __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/chats/chat_media?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
            _this.getChatList();
        }, function (err) {
            console.log(err);
        });
    };
    Chat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\chat\chat.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\n{{Name}}\n\n</div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n<ion-content>\n\n <!-- load code--> \n\n<div [hidden] = "paginations" class="load-data" >\n\n  <a (click) = "loadPrevious()">Load previous data</a>  \n\n</div>\n\n  <!-- load code--> \n\n<div class="chat-msg  new_chat" *ngFor="let details of user_details.reverse()">\n\n  <div class="chat-message" [innerHtml] = "details.message">\n\n    {{details.message}}\n\n  </div>\n\n<ion-icon name="close" [hidden]="details.sender_ac_no !== sender_ac_no" (click) = "removeChat(details.id,details.message,details.receiver_ac_no)"></ion-icon>\n\n<div class="chat-message">\n\n {{details.sender_name}} ,\n\n <span>{{details.created_at | amTimeAgo}}</span>\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n\n\n<!-- footer code -->\n\n<form #loginForm="ngForm" (ngSubmit)="_sendMessage()">\n\n<ion-footer class="foooter-section top-chat">  \n\n<ion-toolbar>\n\n <span> \n\n<ion-icon name="camera" (click)="showPicturePopup()"></ion-icon>\n\n<ion-icon name="happy" (click)="showEmotionList()"></ion-icon>\n\n<ion-input type="text" [(ngModel)]="item.message" name="message" placeholder="Type your message" required ></ion-input>\n\n</span>\n\n<button ion-button outline item-end  class="border-n" [disabled]="!loginForm.form.valid" >\n\n <ion-icon name="send"></ion-icon>\n\n</button>\n\n</ion-toolbar>\n\n</ion-footer>\n\n</form>\n\n<!-- footer end -->\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\chat\chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], Chat);
    return Chat;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.parentSearch = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/parent/search?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&member_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.studentMsgList = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentmessagelist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + member_no + '&source=chat&sort_by=A')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.chatList = function (teacher_id, parent_id, class_id, page_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/chats?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&teacher_id=' + teacher_id + '&parent_id=' + parent_id + '&class_id=' + class_id + '&page_size=' + page_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.updateDB = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/chats', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.removeChat = function (id, receiver_ac_no, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/chats/remove_chat', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                id: id,
                receiver_ac_no: receiver_ac_no,
                message: message,
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.showEmotionList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classlist/chaticon?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken())
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.updateChat = function (sender_ac_no, member_no, class_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/chats/update_chat', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                sender_ac_no: sender_ac_no,
                member_no: member_no,
                class_id: class_id,
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmileyIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmileyIcon = (function () {
    function SmileyIcon(navCtrl, chatservicess, viewCtrl) {
        this.navCtrl = navCtrl;
        this.chatservicess = chatservicess;
        this.viewCtrl = viewCtrl;
        this.iconList = [];
        this.iconImageBase = '';
    }
    SmileyIcon.prototype.ngOnInit = function () {
        this.iconImageBase = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "chaticon/";
        this.classIconPopup();
    };
    /*Find the list of icon to choose for class */
    SmileyIcon.prototype.classIconPopup = function () {
        var _this = this;
        this.chatservicess.showEmotionList().then(function (result) {
            _this.iconList = result;
        }, function (err) {
            console.log(err);
        });
    };
    SmileyIcon.prototype.setImage = function (imageName) {
        this.viewCtrl.dismiss({ 'selectedIcon': imageName });
        window.localStorage.setItem('smileyIcon', imageName);
    };
    SmileyIcon = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\smileyIcon\smileyIcon.html"*/`\n\n<ion-header>\n\n        <ion-navbar hideBackButton="true">\n\n            \n\n          <ion-title>\n\n                Choose Message Icon     \n\n          </ion-title>\n\n        </ion-navbar>\n\n        \n\n      </ion-header>\n\n      \n\n      \n\n      \n\n      \n\n      <ion-content padding>\n\n      \n\n      <img *ngFor="let x of iconList" src={{iconImageBase}}{{x.value}} (tap)="setImage(x.value)"  name="add_class_user" />\n\n      </ion-content>\n\n      `/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\smileyIcon\smileyIcon.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SmileyIcon);
    return SmileyIcon;
}());

//# sourceMappingURL=smileyIcon.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddclassstoryPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacherClassStoryPosts_teacherClassStoryPosts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddclassstoryPostPage = (function () {
    function AddclassstoryPostPage(navCtrl, actionSheetCtrl, camera, teacherclassstoryService, alertCtrl, fileTransfer, mediaCapture) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.teacherclassstoryService = teacherclassstoryService;
        this.alertCtrl = alertCtrl;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.classid = '';
        this.item = {};
        this.memberno = '';
        this.username = '';
        this.teacherclassstorypost = __WEBPACK_IMPORTED_MODULE_3__teacherClassStoryPosts_teacherClassStoryPosts__["a" /* TeacherClassstoryPostsPage */];
        this.selection = "0";
        this.imgURI = '';
        this.videoPath = '';
        this.parent_ac_no = '';
        this.student_no = '';
        var data = window.localStorage.getItem('loggedInUser');
        var teacher_list = JSON.parse(data);
        this.memberno = teacher_list[0]['member_no'];
        this.classid = window.localStorage.getItem('classid');
        this.username = teacher_list[0]['name'];
    }
    AddclassstoryPostPage.prototype.ngOnInit = function () {
        this.parent_ac_no = window.localStorage.getItem('parent_ac_no');
        this.student_no = window.localStorage.getItem('student_no');
    };
    AddclassstoryPostPage.prototype.showPopup = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Take Photo',
                    role: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.choosePhoto();
                    }
                }, {
                    text: 'Video',
                    role: 'Video',
                    handler: function () {
                        _this.chooseVideo();
                    }
                }, {
                    text: 'Close',
                    role: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AddclassstoryPostPage.prototype.takePhoto = function () {
        var _this = this;
        this.selection = "1";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AddclassstoryPostPage.prototype.choosePhoto = function () {
        var _this = this;
        this.selection = "2";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AddclassstoryPostPage.prototype.chooseVideo = function () {
        var _this = this;
        this.selection = "3";
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureVideo(options).then(function (Videodata) {
            console.log(Videodata);
            var file_path = Videodata[0].fullPath;
            _this.videoPath = file_path;
        }, function (err) {
            console.log(err);
        });
    };
    AddclassstoryPostPage.prototype.savePost = function (imageData) {
        var _this = this;
        if (this.parent_ac_no === "undefined") {
            if (this.selection == '0') {
                this.teacherclassstoryService.addClassstoryPost(this.memberno, this.classid, this.username, this.item).then(function (res) {
                    if (res['status'] == "Success") {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Story added successfully',
                            buttons: ['Ok']
                        });
                        alert_1.present();
                        _this.navCtrl.push(_this.teacherclassstorypost);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else if (this.selection == "3") {
                console.log(this.videoPath);
                var s = this.videoPath;
                var fields = s.split('/');
                var nameOfVideo = fields.slice(-1)[0];
                console.log(this.item['message']);
                var fileTransfer = this.fileTransfer.create();
                var options = {
                    fileKey: "upload_file",
                    fileName: nameOfVideo,
                    mimeType: "video/3gp",
                    chunkedMode: false,
                    params: {
                        "message": this.item['message'],
                        "class_id": this.classid,
                        "teacher_ac_no": this.memberno,
                        "teacher_name": this.username,
                        "sender_ac_no": this.memberno
                    }
                };
                console.log(options);
                fileTransfer.upload(this.videoPath, __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].port + '/upload?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                    var alert = _this.alertCtrl.create({
                        title: 'Class Story added successfully',
                        buttons: ['Ok']
                    });
                    alert.present();
                    _this.navCtrl.push(_this.teacherclassstorypost);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log(this.imgURI);
                console.log(this.item['message']);
                var fileTransfer = this.fileTransfer.create();
                var options = {
                    fileKey: "upload_file",
                    fileName: "1.jpg",
                    mimeType: "image/jpeg",
                    chunkedMode: false,
                    params: {
                        "message": this.item['message'],
                        "class_id": this.classid,
                        "teacher_ac_no": this.memberno,
                        "teacher_name": this.username,
                        "sender_ac_no": this.memberno
                    }
                };
                console.log(options);
                fileTransfer.upload(this.imgURI, __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].port + '/upload?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                    var alert = _this.alertCtrl.create({
                        title: 'Class Story added successfully',
                        buttons: ['Ok']
                    });
                    alert.present();
                    _this.navCtrl.pop();
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            if (this.selection == '0') {
                this.teacherclassstoryService.addClassstory_studentPost(this.memberno, this.classid, this.username, this.item, this.parent_ac_no, this.student_no).then(function (res) {
                    if (res['status'] == "Success") {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Story added successfully',
                            buttons: ['Ok']
                        });
                        alert_2.present();
                        _this.navCtrl.push(_this.teacherclassstorypost);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
            else if (this.selection == "3") {
                console.log(this.videoPath);
                var s = this.videoPath;
                var fields = s.split('/');
                var nameOfVideo = fields.slice(-1)[0];
                console.log(this.item['message']);
                var fileTransfer = this.fileTransfer.create();
                var options = {
                    fileKey: "upload_file",
                    fileName: nameOfVideo,
                    mimeType: "video/3gp",
                    chunkedMode: false,
                    params: {
                        "message": this.item['message'],
                        "class_id": this.classid,
                        "teacher_ac_no": this.memberno,
                        "parent_ac_no": this.parent_ac_no,
                        "student_no": this.student_no,
                        "teacher_name": this.username,
                        "sender_ac_no": this.memberno
                    }
                };
                console.log(options);
                fileTransfer.upload(this.videoPath, __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].port + '/upload?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                    var alert = _this.alertCtrl.create({
                        title: 'Class Story added successfully',
                        buttons: ['Ok']
                    });
                    alert.present();
                    _this.navCtrl.push(_this.teacherclassstorypost);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                console.log(this.imgURI);
                console.log(this.item['message']);
                var fileTransfer = this.fileTransfer.create();
                var options = {
                    fileKey: "upload_file",
                    fileName: "1.jpg",
                    mimeType: "image/jpeg",
                    chunkedMode: false,
                    params: {
                        "message": this.item['message'],
                        "class_id": this.classid,
                        "teacher_ac_no": this.memberno,
                        "parent_ac_no": this.parent_ac_no,
                        "student_no": this.student_no,
                        "teacher_name": this.username,
                        "sender_ac_no": this.memberno
                    }
                };
                console.log(options);
                fileTransfer.upload(this.imgURI, __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].port + '/upload?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                    var alert = _this.alertCtrl.create({
                        title: 'Class Story added successfully',
                        buttons: ['Ok']
                    });
                    alert.present();
                    _this.navCtrl.push(_this.teacherclassstorypost);
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    AddclassstoryPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\addclassstoryPost\addclassstoryPost.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n  	\n\n    <ion-title>\n\n      Add class Story\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n <div class="back-c">\n\n  <form #loginForm="ngForm" (ngSubmit)="savePost()">\n\n      <div class="m-school  class_post">\n\n<div class="post-btn">\n\n    <div>\n\n<a (tap) ="showPopup()">Add photo or video\n\n\n\n<img class="image_border" src="{{imgURI}}" *ngIf="selection==1 || selection==2">\n\n<video src="{{videoPath}}" *ngIf="selection==3" class="centerme image_border" controls="controls" ></video></a>\n\n</div>\n\n</div>\n\n      \n\n     \n\n     <ion-list>\n\n    <ion-item>\n\n      	<ion-input type="text"  placeholder="What\'s happening in your classroom?" [(ngModel)]="item.message" name="message" required></ion-input>\n\n     </ion-item>\n\n</ion-list>\n\n       <div>\n\n          <button ion-button color="orange"  class="button-block  save-btn" [disabled]="!loginForm.form.valid">save</button>\n\n        </div> \n\n      </div>\n\n<!-- button code end -->\n\n\n\n\n\n</form>\n\n</div>\n\n<!-- content end-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\addclassstoryPost\addclassstoryPost.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], AddclassstoryPostPage);
    return AddclassstoryPostPage;
}());

//# sourceMappingURL=addclassstoryPost.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassstoryCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classstoryLikes_classstoryLikes__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassstoryCommentPage = (function () {
    function ClassstoryCommentPage(navCtrl, teacherclassstoryService, alertCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.teacherclassstoryService = teacherclassstoryService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.member_no = '';
        this.classid = '';
        this.loggedInUser = {};
        this.storyid = '';
        this.image = '';
        this.postId = '';
        this.like = '';
        this.like_status = '';
        this.teacher_ac_no = '';
        this.message = '';
        this.ext = '';
        this.items = '';
        this.username = '';
        this.imgURI = '';
        this.teacher_name = '';
        this.imagePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path;
        this.item = {};
        this.userImage = '';
        this.commentCount = '';
        this.teacher_image = '';
        this.classstoryLike = __WEBPACK_IMPORTED_MODULE_5__classstoryLikes_classstoryLikes__["a" /* ClassstoryLikesPage */];
        this.storyid = this.navParams.get("storyid");
        this.classid = window.localStorage.getItem('classid');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        var userImage = this.loggedInUser.image;
    }
    ClassstoryCommentPage.prototype.ngOnInit = function () {
        this.loadComment();
    };
    ClassstoryCommentPage.prototype.loadComment = function () {
        var _this = this;
        this.teacherclassstoryService.loadComment(this.storyid, this.member_no).then(function (result) {
            if (result['status'] == "Success") {
                var json = result['post'];
                _this.image = json[0].image;
                _this.postId = json[0].id;
                _this.like = json[0].likes;
                _this.like_status = json[0].status;
                _this.teacher_ac_no = json[0].teacher_ac_no;
                _this.message = json[0].message;
                _this.ext = json[0].ext;
                _this.items = result['comment_list'];
                _this.username = json[0].username;
                if (_this.username) {
                    _this.teacher_name = _this.username;
                    _this.items = result['comment_list'];
                    _this.commentCount = _this.items.length;
                    console.log("comment count" + _this.commentCount);
                }
                else {
                    _this.teacher_name = result['teacher_name'][0]['name'];
                    _this.items = result['comment_list'];
                    _this.commentCount = _this.items.length;
                    _this.teacher_image = result['teacher_name'][0]['image'];
                    console.log("else comment count" + _this.commentCount);
                }
                if (_this.userImage == "" || _this.userImage == undefined) {
                    _this.imgURI = "img/chat_user.png";
                }
                else {
                    _this.imgURI = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path + 'profile_image/' + _this.image;
                }
            }
            else {
                alert('No post available now..');
            }
        }, function (err) {
        });
    };
    ClassstoryCommentPage.prototype.saveComment = function () {
        var _this = this;
        this.storyid = this.storyid.toLocaleString();
        this.teacherclassstoryService.saveComment(this.storyid, this.member_no, this.classid, this.item).then(function (res) {
            if (res['status'] == "Success") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Comment successfully...',
                    buttons: ['Ok']
                });
                alert_1.present();
                _this.loadComment;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClassstoryCommentPage.prototype.deleteComment = function (id) {
        var _this = this;
        var id = id.toLocaleString();
        this.teacherclassstoryService.deleteComment(id).then(function (res) {
            if (res['status'] == "Success") {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Comment deleted successfully..',
                    buttons: ['Ok']
                });
                alert_2.present();
                _this.loadComment;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClassstoryCommentPage.prototype.openCommentMenu = function (myEvent) {
        window.localStorage.setItem('postid', this.storyid);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__["a" /* ClassStoryPopovermenuPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ClassstoryCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\classstoryComment\classstoryComment.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Class Genie\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n \n\n<div class="back-c">\n\n\n\n<!-- post section -->\n\n<div class="comment-s">\n\n\n\n\n\n<div class=" invite-f  story-h1">\n\n<div class="border-b">\n\n <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="{{imageurl}}">  \n\n      </ion-thumbnail>\n\n      <h2>{{teacher_name}}</h2>\n\n      <p><ion-icon name="arrow-round-forward"></ion-icon>  {{nameOfClass}}  </p>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n<div class="border-b1">\n\n  <div class="head-story">\n\n    <h2>{{message}}</h2>\n\n  </div>\n\n  <div class="like-section1">\n\n   <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <span>\n\n       <ion-icon name="checkmark-circle"></ion-icon> {{like}}  Likes\n\n       </span> \n\n      </ion-thumbnail>\n\n       <ion-thumbnail item-start>\n\n        <span>\n\n          <ion-icon name="checkmark-circle"></ion-icon> {{commentCount}} Comments\n\n       </span> \n\n      </ion-thumbnail>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</div>\n\n<!-- section end -->\n\n<!-- section satrt -->\n\n<div class="border-b0  like-section">\n\n<div class="r-icon">\n\n<ion-icon name="more" (click)="openCommentMenu($event);" *ngIf="pagestatus!=\'tabpending\'" tappable></ion-icon>\n\n</div>\n\n</div>\n\n\n\n\n\n<!-- below section start-->\n\n<div class="border-class">\n\n<div class="like-section1">\n\n <ion-grid  *ngFor="let item of items">\n\n <ion-row>\n\n <ion-col col-10>\n\n <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="{{imagePath}}/profile_image/{{item.name.image}}?{{randNo}}"> \n\n         <img  src="assets/imgs/chat_user.png" class="user_right" *ngIf="item.name.image==\'\'">\n\n         </ion-thumbnail>\n\n      <h2> <span class="user_neme_comment" *ngIf="item.name.name!=\'\'">{{item.name.name}}</span>\n\n      <span class="user_neme_comment" *ngIf="item.name.name==\'\'">{{item.student_name}}</span> </h2>\n\n      <p> {{item.comment}}  </p>\n\n     </ion-item>\n\n  </ion-list>\n\n</ion-col>\n\n  <ion-col col-2>\n\n  <button   ion-button outline item-end  class="btn-invite" (click)="deleteComment(item.id);" tappable>\n\n   Delete  \n\n  </button> \n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n\n\n</div>\n\n</div>\n\n<!-- below section end-->\n\n</div>\n\n </div> \n\n\n\n</div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="foooter-section  class-s">\n\n  <form #loginForm="ngForm" (ngSubmit)="saveComment()">\n\n  <ion-toolbar>\n\n   <div>\n\n  <ion-list>\n\n    <ion-item>\n\n    <ion-input type="text"  placeholder="Add Your Comment" [(ngModel)]="item.comment" name="message" required ></ion-input>\n\n    </ion-item>\n\n   </ion-list>\n\n   </div>\n\n   <div>\n\n   <button   ion-button outline item-end  class="btn-invite1" [disabled]="!loginForm.form.valid">\n\n  <ion-icon ios="ios-send" md="md-send"></ion-icon>\n\n  </button> \n\n   </div>\n\n  </ion-toolbar>\n\n</form>\n\n</ion-footer>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\classstoryComment\classstoryComment.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ClassstoryCommentPage);
    return ClassstoryCommentPage;
}());

//# sourceMappingURL=classstoryComment.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditclassstoryPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacherClassStoryPosts_teacherClassStoryPosts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditclassstoryPostPage = (function () {
    function EditclassstoryPostPage(navCtrl, actionSheetCtrl, camera, teacherclassstoryService, alertCtrl, fileTransfer, mediaCapture) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.teacherclassstoryService = teacherclassstoryService;
        this.alertCtrl = alertCtrl;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.classid = '';
        this.item = {};
        this.memberno = '';
        this.username = '';
        this.teacherclassstorypost = __WEBPACK_IMPORTED_MODULE_3__teacherClassStoryPosts_teacherClassStoryPosts__["a" /* TeacherClassstoryPostsPage */];
        this.selection = "0";
        this.imgURI = '';
        this.videoPath = '';
        this.parent_ac_no = '';
        this.student_no = '';
        this.postid = '';
        this.message = '';
        this.image = '';
        this.imagePath = '';
        this.postid = window.localStorage.getItem('postid');
        var data = window.localStorage.getItem('loggedInUser');
        var teacher_list = JSON.parse(data);
        this.memberno = teacher_list[0]['member_no'];
        this.classid = window.localStorage.getItem('classid');
        this.username = teacher_list[0]['name'];
        this.imagePath = __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].image_path;
    }
    EditclassstoryPostPage.prototype.ngOnInit = function () {
        this.getPostdata();
    };
    EditclassstoryPostPage.prototype.getPostdata = function () {
        var _this = this;
        this.postid = this.postid.toLocaleString();
        this.teacherclassstoryService.loadPost(this.postid, this.memberno).then(function (res) {
            if (res['status'] == "Success") {
                _this.message = res['post'][0]['message'];
                _this.image = res['post'][0]['image'];
                _this.imgURI = _this.imagePath + "class_stories/" + _this.image;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditclassstoryPostPage.prototype.showPopup = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Take Photo',
                    role: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.choosePhoto();
                    }
                }, {
                    text: 'Video',
                    role: 'Video',
                    handler: function () {
                        _this.chooseVideo();
                    }
                }, {
                    text: 'Close',
                    role: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditclassstoryPostPage.prototype.takePhoto = function () {
        var _this = this;
        this.selection = "1";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    EditclassstoryPostPage.prototype.choosePhoto = function () {
        var _this = this;
        this.selection = "2";
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    EditclassstoryPostPage.prototype.chooseVideo = function () {
        var _this = this;
        this.selection = "3";
        var options = { limit: 1, duration: 30 };
        this.mediaCapture.captureVideo(options).then(function (Videodata) {
            console.log(Videodata);
            var file_path = Videodata[0].fullPath;
            _this.videoPath = file_path;
        }, function (err) {
            console.log(err);
        });
    };
    EditclassstoryPostPage.prototype.savePost = function () {
        var _this = this;
        if (this.selection == '0') {
            this.postid = this.postid.toLocaleString();
            this.teacherclassstoryService.updateClassstoryPost(this.postid, this.message, this.memberno).then(function (res) {
                if (res['status'] == "Success") {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Story Updated successfully',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                    _this.navCtrl.push(_this.teacherclassstorypost);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.selection == '3') {
            this.postid = this.postid.toLocaleString();
            console.log(this.videoPath);
            var s = this.videoPath;
            var fields = s.split('/');
            var nameOfVideo = fields.slice(-1)[0];
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: nameOfVideo,
                mimeType: "video/3gp",
                chunkedMode: false,
                params: {
                    "message": this.message,
                    "id": this.postid,
                    "sender_ac_no": this.memberno
                }
            };
            console.log(options);
            fileTransfer.upload(this.videoPath, __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].port + '/upload/update?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Class Story updated successfully',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.push(_this.teacherclassstorypost);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log(this.imgURI);
            this.postid = this.postid.toLocaleString();
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: "1.jpg",
                mimeType: "image/jpeg",
                chunkedMode: false,
                params: {
                    "message": this.message,
                    "id": this.postid,
                    "sender_ac_no": this.memberno
                }
            };
            console.log(options);
            fileTransfer.upload(this.imgURI, __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_7__assets_json_config__["a" /* data */].port + '/upload/update?token=' + __WEBPACK_IMPORTED_MODULE_8__app_function__["a" /* global_function */].getToken(), options).then(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Class Story Updated successfully',
                    buttons: ['Ok']
                });
                alert.present();
                _this.navCtrl.push(_this.teacherclassstorypost);
            }, function (err) {
                console.log(err);
            });
        }
    };
    EditclassstoryPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\editclassstoryPost\editclassstoryPost.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n  	\n\n    <ion-title>\n\n      Edit Class Story\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n   \n\n      <div class="back-c">\n\n     <div class="m-school  class_post">\n\n      <div class="post-btn">\n\n          <div>\n\n        <a (tap) ="showPopup()">Add photo or video\n\n         <img class="image_border" src="{{imgURI}}">\n\n        </a>\n\n        </div>\n\n</div>\n\n     \n\n      \n\n     <ion-list>\n\n    <ion-item>\n\n      	<ion-input type="text"  placeholder="What\'s happening in your classroom?"  [(ngModel)]="this.message" required></ion-input>\n\n      </ion-item>\n\n</ion-list>\n\n       <div>\n\n      \n\n          <button ion-button color="orange"  class="button-block  save-btn" (click)="savePost()" tappable>save</button>\n\n        </div> \n\n       </div> \n\n      </div>\n\n   \n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\editclassstoryPost\editclassstoryPost.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], EditclassstoryPostPage);
    return EditclassstoryPostPage;
}());

//# sourceMappingURL=editclassstoryPost.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentPopoverMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentPopoverMenu = (function () {
    function StudentPopoverMenu(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    StudentPopoverMenu.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    StudentPopoverMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentPopoverMenu\studentPopoverMenu.html"*/`<ion-list class="edit-c">\n\n      <!-- <ion-list-header color="danger">Select Topic</ion-list-header>  -->\n\n      <button ion-item (click)="close()">Edit</button>\n\n      <button ion-item (click)="close()">Delete</button>\n\n      <!--<button ion-item (click)="close()">Magento</button>\n\n      <button ion-item (click)="close()">Html 5</button> -->\n\n</ion-list>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentPopoverMenu\studentPopoverMenu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], StudentPopoverMenu);
    return StudentPopoverMenu;
}());

//# sourceMappingURL=studentPopoverMenu.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__giveGroupfeedback_giveGroupfeedback__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupPopoverMenu_groupPopoverMenu__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AwardGroup = (function () {
    function AwardGroup(navCtrl, navParams, teacherClassroomService, popoverCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.givefeedback = __WEBPACK_IMPORTED_MODULE_2__giveGroupfeedback_giveGroupfeedback__["a" /* GiveGroupfeedback */];
        this.item = {};
        this.imageBasePath = '';
        this.studentListing = [];
    }
    AwardGroup.prototype.ngOnInit = function () {
        this.item.class_id = this.navParams.get("class_id");
        this.item.groupId = this.navParams.get("groupId");
        this.item.groupName = this.navParams.get("groupName");
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url;
        this.getGroupDetail();
    };
    AwardGroup.prototype.getGroupDetail = function () {
        var _this = this;
        this.teacherClassroomService.getGroupDetail(this.item.class_id, this.item.groupId).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.studentListing = resp['student_info'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    AwardGroup.prototype.openFeedBackOption = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__giveGroupfeedback_giveGroupfeedback__["a" /* GiveGroupfeedback */], { 'class_id': this.item.class_id, 'groupId': this.item.groupId, 'groupName': this.item.groupName });
    };
    AwardGroup.prototype.openPopover = function (myEvent) {
        var dataParam = {
            class_id: this.item.class_id,
            groupId: this.item.groupId,
            groupName: this.item.groupName
        };
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__groupPopoverMenu_groupPopoverMenu__["a" /* GroupPopoverMenu */], dataParam);
        popover.present({
            ev: myEvent
        });
        this.events.subscribe('reloadDetails', function () {
            //call methods to refresh content
        });
    };
    AwardGroup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\awardGroup\awardGroup.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g das">\n\n    {{item.groupName}}     \n\n    <a href="#" (click)="openPopover($event)"><ion-icon name="more"></ion-icon></a>\n\n    </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n<div class="back-c">\n\n  <!-- tabs -->\n\n\n\n<!-- content -->\n\n<div>\n\n  <ion-grid>\n\n   <ion-row>\n\n   <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor=" let student of studentListing">\n\n        <div class="back-change change-back  room-high  font-icon">\n\n          <div>\n\n           <div class="menu-class {{ student.pointweight>0? \'positivePoint\':student.pointweight<0?\'negativePoint\':\'\' }}">\n\n           <b class="ng-binding ">{{student.pointweight}}</b>\n\n           </div>\n\n          </div>\n\n          <div>\n\n          <img src="{{imageBasePath}}assets/student/{{student.image}}"> \n\n          </div>\n\n          <p>{{student.name}}</p>\n\n        </div>\n\n    </ion-col>    \n\n    </ion-row>\n\n</ion-grid>\n\n\n\n<!--  button code -->\n\n\n\n<div class="list-school ">\n\n<button   (click)="openFeedBackOption()"   ion-button color="orange"  class="button-block  save-btn list-btn">\n\n Award group\n\n</button>\n\n</div>\n\n\n\n<!-- end-->\n\n</div>\n\n<!-- content end-->\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\awardGroup\awardGroup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AwardGroup);
    return AwardGroup;
}());

//# sourceMappingURL=awardGroup.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPopoverMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addGroup_addGroup__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupPopoverMenu = (function () {
    function GroupPopoverMenu(navCtrl, viewCtrl, navParams, teacherClassroomService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.item = {};
        this.loading = loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    }
    GroupPopoverMenu.prototype.ngOnInit = function () {
        this.item.class_id = this.navParams.get("class_id");
        this.item.classname = window.localStorage.getItem('classname');
        this.item.groupId = this.navParams.get("groupId");
        this.item.groupName = this.navParams.get("groupName");
    };
    GroupPopoverMenu.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    GroupPopoverMenu.prototype.editGroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addGroup_addGroup__["a" /* AddGroup */], { 'class_id': this.item.class_id, 'groupId': this.item.groupId, 'groupName': this.item.groupName });
        this.viewCtrl.dismiss();
    };
    GroupPopoverMenu.prototype.deleteGroupCnf = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete group',
            message: 'Are you sure want to delete?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'ok',
                    handler: function () {
                        _this.deleteGroup();
                    }
                }]
        });
        alert.present();
    };
    GroupPopoverMenu.prototype.deleteGroup = function () {
        var _this = this;
        this.loading.present();
        this.teacherClassroomService.deleteGroup(this.item.class_id, this.item.groupId).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                //this.navCtrl.setRoot(TeacherClasstab);   
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */], { currentTab: 'group', classid: _this.item.class_id,
                    classname: _this.item.classname });
                var alert_1 = _this.alertCtrl.create({
                    message: 'Group deleted Successfully!',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    GroupPopoverMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\groupPopoverMenu\groupPopoverMenu.html"*/`<ion-list class="edit-c">     \n\n	<button ion-item (click)="editGroup()">Edit Group</button>\n\n	<button ion-item (click)="deleteGroupCnf()">Delete Group</button>\n\n</ion-list>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\groupPopoverMenu\groupPopoverMenu.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GroupPopoverMenu);
    return GroupPopoverMenu;
}());

//# sourceMappingURL=groupPopoverMenu.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassroomPopovermenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pendingStories_pendingStories__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editClass_editClass__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editSkills_editSkills__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inviteparents_inviteparents__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editStudent_editStudent__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClassroomPopovermenuPage = (function () {
    function ClassroomPopovermenuPage(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.pendingstories = __WEBPACK_IMPORTED_MODULE_2__pendingStories_pendingStories__["a" /* PendingStories */];
        this.editskills = __WEBPACK_IMPORTED_MODULE_4__editSkills_editSkills__["a" /* EditSkills */];
        this.inviteparent = __WEBPACK_IMPORTED_MODULE_5__inviteparents_inviteparents__["a" /* InviteparentsPage */];
        this.editstudent = __WEBPACK_IMPORTED_MODULE_6__editStudent_editStudent__["a" /* EditStudent */];
        this.editclass = __WEBPACK_IMPORTED_MODULE_3__editClass_editClass__["a" /* EditClass */];
    }
    ClassroomPopovermenuPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClassroomPopovermenuPage.prototype.editSkills = function () {
        this.navCtrl.push(this.editskills);
    };
    ClassroomPopovermenuPage.prototype.editClass = function () {
        this.navCtrl.push(this.editclass);
        this.viewCtrl.dismiss();
    };
    ClassroomPopovermenuPage.prototype.editStudent = function () {
        this.navCtrl.push(this.editstudent);
    };
    ClassroomPopovermenuPage.prototype.inviteParents = function () {
        this.navCtrl.push(this.inviteparent);
    };
    ClassroomPopovermenuPage.prototype.pendingStories = function () {
        this.navCtrl.push(this.pendingstories);
    };
    ClassroomPopovermenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassroomPopovermenu\teacherClassroomPopovermenu.html"*/`<div class="abcd">\n\n<ion-list>\n\n      \n\n      <button ion-item (click)="editClass();" tappable>Edit/Remove Class</button>\n\n      <button ion-item (click)="editStudent();" tappable>Edit Student</button>\n\n      <button ion-item (click)="editSkills();" tappable>Edit Skills</button>\n\n      <button ion-item (click)="inviteParents();" tappable>Invite Parents</button>\n\n      <button ion-item (click)="pendingStories();" tappable>Pending Stories</button>\n\n   \n\n      \n\n</ion-list>\n\n</div>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassroomPopovermenu\teacherClassroomPopovermenu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ClassroomPopovermenuPage);
    return ClassroomPopovermenuPage;
}());

//# sourceMappingURL=teacherClassroomPopovermenu.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingStories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pendingStoriesPosts_pendingStoriesPosts__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingStories = (function () {
    function PendingStories(navCtrl, teacherclassstoryService) {
        this.navCtrl = navCtrl;
        this.teacherclassstoryService = teacherclassstoryService;
        this.classid = '';
        this.studentList = [];
        this.parent_ac_no = '';
        this.student_no = '';
        this.classname = '';
        this.pendingstoriesposts = __WEBPACK_IMPORTED_MODULE_3__pendingStoriesPosts_pendingStoriesPosts__["a" /* PendingStoriesPostsPage */];
    }
    PendingStories.prototype.ngOnInit = function () {
        this.classname = window.localStorage.getItem('classname');
        this.getStudentmessageList();
    };
    PendingStories.prototype.getStudentmessageList = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.teacherclassstoryService.getStudentMessagelist(this.classid).then(function (res) {
            _this.studentList = res['user_list'];
            console.log(_this.studentList);
        }, function (err) {
            console.log(err);
        });
    };
    PendingStories.prototype.openClassStory = function (parent_ac_no, student_no) {
        this.navCtrl.push(this.pendingstoriesposts, {
            parent_ac_no: parent_ac_no,
            student_no: student_no
        });
    };
    PendingStories.prototype.allClassStory = function () {
        this.navCtrl.push(this.pendingstoriesposts);
    };
    PendingStories = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\pendingStories\pendingStories.html"*/`<!-- logo -->\n\n<ion-header>\n\n  <ion-navbar >\n\n    \n\n    <ion-title>\n\n  {{classname}}\n\n  </ion-title>\n\n  \n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo code -->\n\n\n\n<ion-content padding>\n\n  <div class="back-c  search-c">\n\n\n\n  <div class="head-con">\n\n<h3>Student\'s List</h3>\n\n </div>\n\n\n\n<!-- content -->\n\n<div class="m-school  mar-t">\n\n\n\n<!--listing code here -->\n\n<div class="list-margin">\n\n<div class="add-c  content-p">\n\n<div>\n\n\n\n          <a (click) ="allClassStory();" tappable>\n\n            <ion-list>\n\n                <ion-item>\n\n                  <ion-thumbnail item-start>\n\n                    <img src="assets/imgs/school_icon.png">  \n\n                       </ion-thumbnail>\n\n          \n\n            <h2>Whole Class Story</h2>\n\n           </ion-item>\n\n  </ion-list> \n\n          </a>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let studentItem of studentList" (click) ="openClassStory(studentItem.parent_ac_no,studentItem.student_no);" tappable>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imagePath}}class/{{studentItem.image}}">  \n\n      </ion-thumbnail>\n\n          <h2>{{studentItem.name}}</h2>\n\n         </ion-item>\n\n      </ion-list>\n\n       </div>\n\n        </div>\n\n              </div>\n\n             \n\n         </div>\n\n      </div>\n\n</ion-content>\n\n\n\n `/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\pendingStories\pendingStories.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]])
    ], PendingStories);
    return PendingStories;
}());

//# sourceMappingURL=pendingStories.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingStoriesPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingStoriesPostsPage = (function () {
    function PendingStoriesPostsPage(navCtrl, navParams, teacherclassstoryService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacherclassstoryService = teacherclassstoryService;
        this.alertCtrl = alertCtrl;
        this.member_no = '';
        this.classid = '';
        this.loggedInUser = {};
        this.pagecount = 1;
        this.showmsg = true;
        this.items = [];
        this.postCount = '';
        this.randNO = '';
        this.imagePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */]['file_url'] + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */]['image_path'];
        this.storyid = '';
    }
    PendingStoriesPostsPage.prototype.ngOnInit = function () {
        this.parent_ac_no = this.navParams.get("parent_ac_no");
        this.student_no = this.navParams.get("student_no");
        this.showmsg = true;
        this.getAllPostStories();
        this.randNO = this.getRandom();
    };
    PendingStoriesPostsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 10);
    };
    PendingStoriesPostsPage.prototype.getRandom = function () {
        return Math.random();
    };
    PendingStoriesPostsPage.prototype.getAllPostStories = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        if (this.parent_ac_no === undefined) {
            this.teacherclassstoryService.getAllclassPendingPosts(this.classid, this.pagecount).then(function (res) {
                if (res['status'] == "Success") {
                    _this.items = res['user_list'];
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.teacherclassstoryService.getAllclassPendingPosts_Student(this.classid, this.student_no, this.pagecount).then(function (res) {
                if (res['status'] == "Success") {
                    _this.items = res['user_list'];
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    PendingStoriesPostsPage.prototype.approve_story = function (story_id) {
        var _this = this;
        this.storyid = story_id.toLocaleString();
        this.teacherclassstoryService.approvePost(this.storyid, this.member_no).then(function (res) {
            if (res['status'] == "Success") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Story approved successfully',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    PendingStoriesPostsPage.prototype.unapprove_story = function (story_id) {
        var _this = this;
        this.storyid = story_id.toLocaleString();
        this.teacherclassstoryService.disapprovePost(this.storyid, this.member_no).then(function (res) {
            if (res['status'] == "Success") {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Story Disapproved successfully',
                    buttons: ['Ok']
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    PendingStoriesPostsPage.prototype.ionViewWillEnter = function () {
        this.getAllPostStories();
    };
    PendingStoriesPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\pendingStoriesPosts\pendingStoriesPosts.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Class Genie\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-refresher\n\n      pulling-text="Pull to refresh..."\n\n      on-refresh="doRefresh()">\n\n      </ion-refresher>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh..."\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n<div class="back-c">\n\n\n\n<div class="col col-100 no_post" *ngIf="showmsg==false">\n\n   <p style="" >No post available now..</p> \n\n   </div>\n\n\n\n<div class="m-school" *ngFor="let client of items; let i = index">\n\n  \n\n<div class=" invite-f  story-h  scholl-list ">\n\n  <div class="border-b">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <img src="/assets/imgs/status_profile.png?{{randNO}}" *ngIf="client.image_name==\'\'">\n\n    <img src="{{imagePath}}profile_image/{{client.image_name}}?{{randNO}}" *ngIf="client.image_name!=\'\'">\n\n    <h3>{{client.class_name}}</h3>\n\n     <div class="story-c">\n\n    <p><ion-icon name="arrow-round-forward"></ion-icon>  {{client.username}}</p>\n\n  </div>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   {{client.date}}\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n\n\n <div class="border-b1">\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col col-12>\n\n    <div class="head-story">\n\n      <h3>{{client.message}}</h3>\n\n    </div>\n\n    <div class="like-section">\n\n   \n\n      <div class="btn-as" *ngIf=\'client.status==0\'> <button ion-button outline item-end  class="send-btn" (click)="approve_story(client.id)" tappable>  <ion-icon name="time"></ion-icon>Approve</button> <button ion-button outline item-end  class="Delete-btn" (click)="unapprove_story(client.id)" > <ion-icon name="trash"></ion-icon>Unapprove</button></div>\n\n\n\n    </div>\n\n   </ion-col>\n\n    </ion-row>\n\n   </ion-grid>\n\n  </div>\n\n\n\n\n\n\n\n\n\n</div>\n\n\n\n</div>\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\pendingStoriesPosts\pendingStoriesPosts.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PendingStoriesPostsPage);
    return PendingStoriesPostsPage;
}());

//# sourceMappingURL=pendingStoriesPosts.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classIcon_classIcon__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditClass = (function () {
    function EditClass(navCtrl, dashboardService, alertCtrl, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.dashboardService = dashboardService;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.selectGrades = [];
        this.loggedInUser = {};
        this.item = {};
        this.iconImageBase = '';
        this.imageName = '6_6_c_6.png';
    }
    EditClass.prototype.ngOnInit = function () {
        var _this = this;
        this.iconImageBase = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url + "assets/" + "class/";
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.item.imageName = window.localStorage.getItem('classIcon');
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.item.imageName = window.localStorage.getItem('classimage');
        this.item.selectGrade = window.localStorage.getItem('classgrade');
        this.item.classpoint = window.localStorage.getItem('classpoint');
        if (this.item.imageName) {
            window.localStorage.setItem('classIcon', '');
            this.item.imagePath = this.iconImageBase + this.item.imageName;
        }
        else {
            this.item.imagePath = 'assets/imgs/addimg.png';
            this.item.imageName = '6_6_c_6.png';
        }
        this.dashboardService.getGradeList(this.loggedInUser.member_no).then(function (res) {
            _this.selectGrades = res;
        }, function (err) {
            console.log(err);
        });
    };
    EditClass.prototype.updateClass = function () {
        var _this = this;
        this.item.schoolId = (this.loggedInUser.school_id).toString();
        this.item.member_no = this.loggedInUser.member_no;
        this.dashboardService.updateClass(this.item).then(function (res) {
            //if class added successfully then send it to add student page
            if (res['status'] == "Success") {
                //the class has been update so we need to store the updated data for class
                window.localStorage.setItem('classname', _this.item.classname);
                window.localStorage.setItem('classimage', _this.item.imageName);
                window.localStorage.setItem('classgrade', _this.item.selectGrade);
                //this.navCtrl.pop();
                _this.navCtrl.remove(3, 1);
                _this.navCtrl.pop();
            }
            else if (res['error_code'] == 1) {
                var alert_1 = _this.alertCtrl.create({
                    message: res['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    message: res['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
        return false;
    };
    /*Find the list of icon to choose for class */
    EditClass.prototype.classIconPopup = function () {
        var _this = this;
        var classIcon = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__classIcon_classIcon__["a" /* ClassIcon */]);
        classIcon.onDidDismiss(function (data) {
            if (data && data['selectedIcon']) {
                _this.item.imageName = data.selectedIcon;
                _this.item.imagePath = _this.iconImageBase + _this.item.imageName;
            }
        });
        classIcon.present();
    };
    EditClass.prototype.removeClassCnf = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Classgenie',
            message: 'Are you sure you want to delete class ' + this.item.classname + ' ?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                        return false;
                    }
                },
                {
                    text: 'ok',
                    handler: function () {
                        _this.removeClass();
                    }
                }]
        });
        alert.present();
    };
    EditClass.prototype.removeClass = function () {
        var _this = this;
        this.dashboardService.removeClass(this.item.class_id).then(function (res) {
            //if class added successfully then send it to add student page
            if (res['status'] == "Success") {
                _this.navCtrl.pop();
            }
            else if (res['error_code'] == 1) {
                var alert_3 = _this.alertCtrl.create({
                    message: res['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_3.dismiss();
                                return false;
                            }
                        }]
                });
                alert_3.present();
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    message: res['comments'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_4.dismiss();
                                return false;
                            }
                        }]
                });
                alert_4.present();
            }
        }, function (err) {
            console.log(err);
        });
        return false;
    };
    EditClass = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\editClass\editClass.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n	  <div class="login-g das">\n\n		Edit Class\n\n	  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding >\n\n<form #formClass="ngForm" (submit)="updateClass()">\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n<div class="add-img">\n\n  <img src="{{item.imagePath}}" (click)="classIconPopup()">\n\n</div> \n\n\n\n<div class=" m-school  new-border  new-grid">\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col col-8>\n\n   <!-- text box code  here-->\n\n    <ion-item>\n\n   <ion-input type="text"  placeholder="Class Name" required [(ngModel)]="item.classname" name="classname"></ion-input>\n\n    </ion-item>\n\n\n\n<!--text box code here end--> \n\n    </ion-col>\n\n  <ion-col col-4>\n\n    <ion-item>\n\n      <ion-label><span>Select Grade</span></ion-label>\n\n      <ion-select  name="selectGrade" required [(ngModel)]="item.selectGrade" value>\n\n      <ion-option *ngFor="let x of selectGrades" value="{{x.key}}">{{x.value}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n<div>\n\n<button [disabled]="!formClass.form.valid" ion-button color="orange"  class="button-block  save-btn">Update class\n\n</button>\n\n</div>\n\n\n\n<div class="remove-new col-100">\n\n	<a class="remove_btn disable-user-behavior" (click)="removeClassCnf()">Remove class</a>\n\n</div>\n\n\n\n</div>\n\n<!-- content end-->\n\n</div>\n\n</form>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\editClass\editClass.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], EditClass);
    return EditClass;
}());

//# sourceMappingURL=editClass.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSkills; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditSkills = (function () {
    function EditSkills(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EditSkills = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\editSkills\editSkills.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n	  <div class="login-g das">\n\n	Edit Skills\n\n	  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  >\n\n\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\editSkills\editSkills.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], EditSkills);
    return EditSkills;
}());

//# sourceMappingURL=editSkills.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attendence; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attendancePopoverMenu_attendancePopoverMenu__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendanceDateRange_attendanceDateRange__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Attendence = (function () {
    function Attendence(navCtrl, teacherClassroomService, alertCtrl, navParams, loadingCtrl, datePipe, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.teacherClassroomService = teacherClassroomService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.datePipe = datePipe;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.class_studentlist = [];
        this.item = {};
        this.imageBasePath = '';
        this.selectedStudent = [];
    }
    Attendence.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].image_url;
        this.item.displayResetBtn = 0;
        this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
        this.item.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.item.currentDate = this.item.today;
        this.studentAttendance();
    };
    Attendence.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    };
    Attendence.prototype.studentAttendance = function () {
        var _this = this;
        if (!this.item.currentDate) {
            this.item.currentDate = this.item.today;
        }
        if (this.item.currentDate > this.item.today) {
            this.item.currentDate = this.item.today;
            var alert_1 = this.alertCtrl.create({
                message: 'You can\'t mark attendance for upcoming dates.',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert_1.dismiss();
                            return false;
                        }
                    }]
            });
            alert_1.present();
        }
        this.teacherClassroomService.studentAttendance(this.item.class_id, this.item.currentDate).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['user_list'];
                _this.setAttendance();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Attendence.prototype.saveAttendance = function () {
        var _this = this;
        if (!this.item.currentDate) {
            this.item.currentDate = this.item.today;
        }
        var objSend = { class_id: 0, student_list: [] };
        objSend.class_id = this.item.class_id;
        objSend.student_list = [];
        for (var i = 0; i < (this.class_studentlist).length; i++) {
            var key = this.class_studentlist[i].student_no[0].student_no;
            objSend.student_list.push({ student_no: key, attendance: this.selectedStudent[key] });
        }
        var lists_value = btoa(JSON.stringify(objSend));
        this.initLoading();
        this.loading.present();
        this.teacherClassroomService.saveAttendance(lists_value, this.item.currentDate).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.item.displayResetBtn = 1;
                var alert_2 = _this.alertCtrl.create({
                    message: 'Attendance updated',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    message: 'Unable to update Attendance',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_3.dismiss();
                                return false;
                            }
                        }]
                });
                alert_3.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Attendence.prototype.setAttendance = function () {
        for (var i = 0; i < (this.class_studentlist).length; i++) {
            var key = this.class_studentlist[i].student_no[0].student_no;
            if ((this.class_studentlist[i]).hasOwnProperty('id')) {
                this.item.displayResetBtn = 1;
            }
            else {
                this.item.displayResetBtn = 0;
            }
            if (this.class_studentlist[i].student_no[0].attendance == '' || this.class_studentlist[i].student_no[0].attendance == 'NA') {
                this.selectedStudent[key] = 'H';
            }
            else {
                this.selectedStudent[key] = this.class_studentlist[i].student_no[0].attendance;
            }
        }
    };
    Attendence.prototype.changeAttendance = function (student_no) {
        if (this.selectedStudent[student_no] == '' || this.selectedStudent[student_no] == 'NA' || this.selectedStudent[student_no] == 'H' || this.selectedStudent[student_no] == 'L') {
            this.selectedStudent[student_no] = 'P';
        }
        else if (this.selectedStudent[student_no] == 'P') {
            this.selectedStudent[student_no] = 'A';
        }
        else if (this.selectedStudent[student_no] == 'A') {
            this.selectedStudent[student_no] = 'L';
        }
    };
    Attendence.prototype.changeAttendanceForAll = function (attendanceVal) {
        for (var i = 0; i < (this.class_studentlist).length; i++) {
            var key = this.class_studentlist[i].student_no[0].student_no;
            this.selectedStudent[key] = attendanceVal;
        }
    };
    Attendence.prototype.resetAttendence = function () {
        var _this = this;
        this.initLoading();
        this.loading.present();
        this.teacherClassroomService.resetAttendence(this.item.class_id, this.item.currentDate).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.studentAttendance();
                var alert_4 = _this.alertCtrl.create({
                    message: 'Attendance reset successfully.',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_4.dismiss();
                                return false;
                            }
                        }]
                });
                alert_4.present();
            }
            else {
                var alert_5 = _this.alertCtrl.create({
                    message: 'Unable to reset Attendance',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_5.dismiss();
                                return false;
                            }
                        }]
                });
                alert_5.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Attendence.prototype.openPopover = function (myEvent) {
        var _this = this;
        var dataParam = {
            class_id: this.item.class_id
        };
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__attendancePopoverMenu_attendancePopoverMenu__["a" /* AttendancePopoverMenu */], dataParam);
        //callback function after close the popover
        popover.onDidDismiss(function (data) {
            //if datarange selected then call model pop for date range
            if (data['dateRange'] == 1) {
                _this.openDateRangePop();
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    Attendence.prototype.openDateRangePop = function () {
        var _this = this;
        var popupDateRange = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__attendanceDateRange_attendanceDateRange__["a" /* AttendanceDateRange */]);
        popupDateRange.onDidDismiss(function (data) {
            if (data && (data.datetoken == 'daterange')) {
                _this.getAttendanceMailForRange(data);
            }
        });
        popupDateRange.present();
    };
    Attendence.prototype.getAttendanceMailForRange = function (data) {
        var _this = this;
        this.initLoading();
        this.loading.present();
        var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
        var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
        var daterange = { "date1": startDate.toString(), "date2": endDate.toString() };
        var dataParam = {
            datetoken: 'daterange',
            class_id: (this.item.class_id).toString(),
            teacher_name: this.item.loggedInUser[0].name,
            member_no: (this.item.loggedInUser[0].member_no).toString(),
            email: this.item.loggedInUser[0].email,
            daterange: JSON.stringify(daterange),
            token: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getToken()
        };
        this.teacherClassroomService.getAttendanceMail(dataParam).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                var message = 'Attendence record for selected date range has been successfully mailed on your id ' + _this.item.loggedInUser[0].email;
                var alert_6 = _this.alertCtrl.create({
                    message: message,
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_6.dismiss();
                                return false;
                            }
                        }]
                });
                alert_6.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Attendence = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\attendence\attendence.html"*/`\n\n<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n    <div class="login-g das">\n\n  Take Attendance\n\n   <a  href="javascript:void(0)" (click)="openPopover($event)" tappable>Get Attendance</a>\n\n   </div>\n\n    </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <!-- header -->\n\n  \n\n  <ion-content >\n\n  <div class="back-c">\n\n  <!-- calender code -->\n\n  <div class="top-back">\n\n  <ion-item>\n\n  <ion-icon ios="ios-calendar" md="md-calendar"></ion-icon>\n\n  <input type="date" value={{item.currentDate}} name="currentDate" [(ngModel)]="item.currentDate" (change)="studentAttendance()">\n\n  </ion-item>\n\n  </div>\n\n  <!-- calender code  end-->\n\n  \n\n  <!-- select code -->\n\n  <div class="atten-select   new-grid">\n\n    <ion-item>\n\n          <ion-label><span>Attendance</span></ion-label>\n\n          <ion-select (ionChange)="changeAttendanceForAll($event)" name="attendanceAll">\n\n          <ion-option value="P">Mark All Present</ion-option>\n\n          <ion-option value="A">Mark All Absent</ion-option>\n\n          <ion-option value="H">Mark Holiday</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </div>\n\n  <!-- select code  end-->\n\n  \n\n  \n\n  <!-- listing code -->\n\n  <div class="white-back  atten-head">\n\n  <div>\n\n  <div class="add-c  content-p">\n\n  <div>\n\n  <ion-grid>\n\n    <ion-row  *ngFor=" let student of class_studentlist">\n\n    <ion-col col-9 col-sm-9 col-md-6 col-lg-4 col-xl-11>\n\n     <ion-item>\n\n     <ion-thumbnail item-start>\n\n     <img src="{{imageBasePath}}assets/student/{{student.image}}">  \n\n     </ion-thumbnail>\n\n     <h2>{{student.name}}</h2>\n\n     </ion-item>\n\n     </ion-col>\n\n      <ion-col col-3 col-sm-9 col-md-6 col-lg-4 col-xl-1>\n\n        \n\n        <div class="atten-img">\n\n        <img src="assets/imgs/attendance_na.png" *ngIf="selectedStudent[student.student_no[0].student_no]==\'NA\' || selectedStudent[student.student_no[0].student_no]==\'H\' || selectedStudent[student.student_no[0].student_no]==\'\' " (click)="changeAttendance(student.student_no[0].student_no)" tappable>\n\n        <img src="assets/imgs/attendance_l.png" *ngIf="selectedStudent[student.student_no[0].student_no]==\'L\'" (click)="changeAttendance(student.student_no[0].student_no)" tappable>\n\n        <img src="assets/imgs/attendance_a.png" *ngIf="selectedStudent[student.student_no[0].student_no]==\'A\'" (click)="changeAttendance(student.student_no[0].student_no)" tappable>\n\n        <img src="assets/imgs/attendance_p.png" *ngIf="selectedStudent[student.student_no[0].student_no]==\'P\'" (click)="changeAttendance(student.student_no[0].student_no)" tappable> \n\n        </div> \n\n        \n\n     </ion-col>\n\n     </ion-row>    \n\n  </ion-grid>\n\n  </div>\n\n  </div>\n\n  </div> \n\n  </div>\n\n    <!--listing code end -->\n\n  \n\n  <!--  button -->\n\n  <div class="list-school ">\n\n  <button ion-button color="orange"  class="reset_btn" *ngIf="item.displayResetBtn" (click)="resetAttendence()">\n\n    Reset\n\n  </button>\n\n  <button ion-button color="orange"  class="save-btn  save-atten" (click)="saveAttendance()">\n\n  Save attendance\n\n  </button>\n\n  </div>\n\n  <!-- button  end -->\n\n  \n\n  </div>\n\n  </ion-content>\n\n  \n\n  \n\n  `/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\attendence\attendence.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], Attendence);
    return Attendence;
}());

//# sourceMappingURL=attendence.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePopoverMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendancePopoverMenu = (function () {
    function AttendancePopoverMenu(navCtrl, viewCtrl, navParams, teacherClassroomService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.item = {};
        this.loading = loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    }
    AttendancePopoverMenu.prototype.ngOnInit = function () {
        this.item.class_id = this.navParams.get("class_id");
        this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
    };
    AttendancePopoverMenu.prototype.close = function (returnData) {
        this.viewCtrl.dismiss(returnData);
    };
    AttendancePopoverMenu.prototype.getAttendanceMail = function (datetoken, label) {
        var _this = this;
        this.viewCtrl.dismiss({});
        this.loading.present();
        var dataParam = {
            datetoken: datetoken,
            class_id: this.item.class_id,
            teacher_name: this.item.loggedInUser[0].name,
            member_no: this.item.loggedInUser[0].member_no,
            email: this.item.loggedInUser[0].email,
            daterange: '',
            token: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getToken()
        };
        this.teacherClassroomService.getAttendanceMail(dataParam).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                var message = 'Attendence record for ' + label + ' has been successfully mailed on your id ' + _this.item.loggedInUser[0].email;
                var alert_1 = _this.alertCtrl.create({
                    message: message,
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AttendancePopoverMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\attendancePopoverMenu\attendancePopoverMenu.html"*/`<ion-list class="edit-c">     \n\n	<button ion-item (click)="getAttendanceMail(\'today\',\'today\')">Today</button>\n\n	<button ion-item (click)="getAttendanceMail(\'thisweek\',\'this week\')">This week</button>\n\n	<button ion-item (click)="getAttendanceMail(\'thismonth\',\'this month\')">This Month</button>\n\n	<button ion-item (click)="close({dateRange:1})">Date Range</button>\n\n</ion-list>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\attendancePopoverMenu\attendancePopoverMenu.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AttendancePopoverMenu);
    return AttendancePopoverMenu;
}());

//# sourceMappingURL=attendancePopoverMenu.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardMultiStudent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__giveGroupfeedback_giveGroupfeedback__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_teacherClassroom_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AwardMultiStudent = (function () {
    function AwardMultiStudent(navCtrl, navParams, teacherClassroomService, popoverCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.givefeedback = __WEBPACK_IMPORTED_MODULE_3__giveGroupfeedback_giveGroupfeedback__["a" /* GiveGroupfeedback */];
        this.item = {};
        this.imageBasePath = '';
        this.class_studentlist = [];
        this.selectedStudent = [];
    }
    AwardMultiStudent.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.selectAll = false;
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].image_url;
        this.studentlisting();
        this.item.noOfSelectedStu = this.selectedStudent.length;
    };
    AwardMultiStudent.prototype.initLOader = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    };
    AwardMultiStudent.prototype.studentlisting = function () {
        var _this = this;
        this.initLOader();
        this.loading.present();
        this.teacherClassroomService.studentlisting(this.item.class_id).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['class_details']['student_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    AwardMultiStudent.prototype.selectStudent = function (student_no) {
        if (this.selectedStudent.indexOf(student_no) !== -1) {
            var ax = this.selectedStudent.indexOf(student_no);
            this.selectedStudent.splice(ax, 1);
        }
        else {
            this.selectedStudent.push(student_no);
        }
        this.item.noOfSelectedStu = this.selectedStudent.length;
    };
    AwardMultiStudent.prototype.selectAll = function () {
        this.selectedStudent = [];
        this.item.selectAll = !this.item.selectAll;
        if (this.item.selectAll) {
            for (var i = 0; i < (this.class_studentlist).length; i++) {
                this.selectedStudent.push(this.class_studentlist[i].id);
                ;
            }
        }
        this.item.noOfSelectedStu = this.selectedStudent.length;
    };
    AwardMultiStudent.prototype.awardMultiplestudents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__giveGroupfeedback_giveGroupfeedback__["a" /* GiveGroupfeedback */], { 'class_id': this.item.class_id, selectedStudent: this.selectedStudent, awardMultiStudent: 1 });
    };
    AwardMultiStudent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\awardMultiStudent\awardMultiStudent.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g  das">\n\n     Award Multiple Student\n\n    </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- header code -->\n\n\n\n<ion-content>\n\n<div class="back-c">\n\n\n\n<!-- content -->\n\n<div class="class-section">\n\n  <ion-grid>\n\n   <ion-row>\n\n     <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 (click)="selectAll()" tappable>\n\n      <div class="back-change change-back  room-high">\n\n         <div>\n\n          <img src="assets/imgs/select_all_group.png"> \n\n          </div>\n\n          <p>{{item.selectAll ? \'Deselect All\' : \'Select All\'}}</p>\n\n      </div>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 *ngFor=" let student of class_studentlist" (click)="selectStudent(student.id)" tappable class="{{ selectedStudent.indexOf(student.id) !== -1 ? \'selectedBg\' : \'\' }}">\n\n          <div class="back-change change-back  room-high  award-margin">\n\n            <ion-checkbox color="positive" checked="{{ selectedStudent.indexOf(student.id) !== -1 ? true : false }}" disabled></ion-checkbox>\n\n            <div>           \n\n                <div class="menu-class {{ student.pointweight>0? \'positivePoint\':student.pointweight<0?\'negativePoint\':\'\' }}">\n\n              <b class="ng-binding">{{student.pointweight}}</b>\n\n              </div>\n\n            </div>\n\n              <div>\n\n              <img src="{{imageBasePath}}assets/student/{{student.image}}"> \n\n              </div>\n\n              <p>{{student.name}}</p>\n\n          </div>\n\n      </ion-col>  \n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n</div>\n\n<!-- content end-->\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<!-- footer code -->\n\n\n\n<ion-footer class="foooter-section">\n\n<ion-toolbar>\n\n<div>\n\n <button [disabled]="!item.noOfSelectedStu" (click)="awardMultiplestudents()">Give award to {{item.noOfSelectedStu}} students</button>\n\n</div>\n\n</ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<!-- footer end -->`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\awardMultiStudent\awardMultiStudent.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AwardMultiStudent);
    return AwardMultiStudent;
}());

//# sourceMappingURL=awardMultiStudent.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewReport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__performanceReport_performanceReport__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewReport = (function () {
    function ViewReport(navCtrl, teacherClassroomService, alertCtrl, navParams, loadingCtrl, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.teacherClassroomService = teacherClassroomService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.item = {};
        this.imageBasePath = '';
        this.class_studentlist = [];
    }
    ViewReport.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    };
    ViewReport.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.item.classimage = window.localStorage.getItem('classimage');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].image_url;
        //load the student list for current class
        this.studentlisting();
    };
    ViewReport.prototype.studentlisting = function () {
        var _this = this;
        this.initLoading();
        this.loading.present();
        this.teacherClassroomService.studentlisting(this.item.class_id).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['class_details']['student_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    ViewReport.prototype.openPerformanceReport = function (student_no, student_name) {
        var dataParam = {
            student_no: student_no,
            student_name: student_name
        };
        console.log(dataParam);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__performanceReport_performanceReport__["a" /* PerformanceReport */], dataParam);
    };
    ViewReport = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\viewReport\viewReport.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\nView Report\n\n</div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n<div class="head-con1">\n\n<h3>Student\'s List</h3>\n\n</div>\n\n\n\n<div class="content-p  add-list">\n\n<a (click)="openPerformanceReport(0,\'\')">\n\n<ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imageBasePath}}assets/class/{{item.classimage}}">  \n\n      </ion-thumbnail>\n\n      <h2>Whole Class Performance</h2>\n\n    </ion-item>\n\n</ion-list>\n\n</a>\n\n\n\n<ion-list *ngFor=" let student of class_studentlist" (click)="openPerformanceReport(student.student_no,student.name)" tappable>\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imageBasePath}}assets/student/{{student.image}}">  \n\n      </ion-thumbnail>\n\n      <h2>{{student.name}}</h2>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n</div>\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\viewReport\viewReport.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ViewReport);
    return ViewReport;
}());

//# sourceMappingURL=viewReport.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherClassStoryServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherClassStoryServices = (function () {
    function TeacherClassStoryServices(http) {
        this.http = http;
    }
    TeacherClassStoryServices.prototype.getStudentMessagelist = function (classid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentmessagelist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classid + '&sort_by=A')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.getclassStudentlist = function (classid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo/studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + classid)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.inviteTeacherParent = function (data, student_name, student_no, parent_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/sendmail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&email=' + data + '&id=3' + '&student_name='
                + student_name + '&student_no=' + student_no + '&parent_no=' + parent_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.pdfgenerate = function (member_no, classId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/pdfgenerate?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&member_no=' + member_no + '&class_id=' + classId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.inviteAllParents = function (member_no, classId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/sendmail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&member_no=" + member_no + "&id=1" + "&class_id="
                + classId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.getAllclassPosts = function (classid, member_no, pagecount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/allPost?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&source=ac&class_id=" + classid + "&member_no=" + member_no + "&page_number=" + pagecount + "&name=")
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.getAllclasssearchPosts = function (classid, member_no, pagecount, val) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/allPost?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&source=ac&class_id=" + classid + "&member_no=" + member_no + "&page_number=" + pagecount + "&name=" + val)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.getAllclassPosts_student = function (classid, parent_ac_no, member_no, student_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/allPost?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&class_id=" + classid + "&parent_ac_no=" + parent_ac_no + "&member_no=" + member_no + "&student_no=" + student_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.addClassstoryPost = function (memberno, classid, username, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                class_id: classid,
                message: data.message,
                teacher_ac_no: memberno,
                teacher_name: username,
                sender_ac_no: memberno })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.addClassstory_studentPost = function (memberno, classid, username, data, parentNo, studentNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                class_id: classid,
                message: data.message,
                teacher_ac_no: memberno,
                parent_ac_no: parentNo,
                student_no: studentNo,
                teacher_name: username,
                sender_ac_no: memberno
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.loadComment = function (story_id, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/commentDetail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&story_id=" + story_id + "&teacher_ac_no=" + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.saveComment = function (story_id, member_no, class_id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/comment', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), story_id: story_id, member_no: member_no, class_id: class_id, comment: data.comment, sender_ac_no: member_no, student_no: '' })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.deleteComment = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/comment/delete', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), id: id })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.loadPost = function (storyId, stored_memberNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/commentDetail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&story_id=" + storyId + "&teacher_ac_no=" + stored_memberNo + "&sender_ac_no=" + stored_memberNo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.updateClassstoryPost = function (storyId, textmessage, memberNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/update', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), id: storyId,
                message: textmessage,
                sender_ac_no: memberNo })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.deletePost = function (storyId, stored_classId) {
        var _this = this;
        console.log(storyId);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/delete', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), id: storyId, class_id: stored_classId })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.likePost = function (storyId, classId, liked_status, memberNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/likes', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                story_id: storyId,
                class_id: classId,
                member_no: memberNo,
                status: liked_status,
                sender_ac_no: memberNo
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.Likelist = function (classId, storyId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/likesList?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&class_id=" + classId + "&story_id=" + storyId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.getAllclassPendingPosts = function (classid, pagecount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentstory/class/postlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&source=ac&class_id=" + classid + "&page_number=" + pagecount)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.getAllclassPendingPosts_Student = function (classid, student_no, pagecount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentstory/postlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&source=ac&class_id=" + classid + "&page_number=" + pagecount + "&student_no=" + student_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.approvePost = function (story_id, memberNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentstory/approveteacher', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                id: story_id,
                status: "1",
                sender_ac_no: memberNo
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices.prototype.disapprovePost = function (story_id, memberNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentstory/approveteacher', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                id: story_id,
                status: "-1",
                sender_ac_no: memberNo
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherClassStoryServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeacherClassStoryServices);
    return TeacherClassStoryServices;
}());

//# sourceMappingURL=teacherClassstory.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceReport; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__performPopoverMenu_performPopoverMenu__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__attendanceDateRange_attendanceDateRange__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerformanceReport = (function () {
    function PerformanceReport(navCtrl, teacherClassroomService, alertCtrl, navParams, loadingCtrl, datePipe, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.teacherClassroomService = teacherClassroomService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.datePipe = datePipe;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.item = {};
        this.imageBasePath = '';
        this.reportList = [];
        this.doughnutChartType = '';
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.chartColors = [{}];
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'nearest',
                callbacks: {
                    label: function (tooltipItem, data) {
                        var labelData = data.datasets[0].data[tooltipItem.index];
                        var labelText = data.labels[tooltipItem.index];
                        var customLabel = labelText + ' - ' + labelData + '%';
                        return customLabel;
                    }
                }
            }
        };
    }
    PerformanceReport.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_4__assets_json_config__["a" /* data */].image_url;
        this.item.student_no = this.navParams.get("student_no");
        this.item.student_name = this.navParams.get('student_name');
        this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
        this.item.reportLabel = 'This Month';
        this.doughnutChartType = 'doughnut';
        this.doughnutChartLabels = ['Positive', 'Need Work'];
        this.doughnutChartData = [
            {
                data: [0, 0],
                dataPointWidth: 5,
                backgroundColor: [
                    "green",
                    "blue"
                ],
                hoverBackgroundColor: [
                    "rgb(198, 235, 215)",
                    "rgb(192, 221, 240)"
                ]
            }
        ];
        this.getPerformReport({ datetoken: 'thismonth', label: 'This Month' });
        if (this.item.student_no) {
            this.item.headerTitlePart = this.item.student_name + ' Performance';
        }
        else {
            this.item.headerTitlePart = 'Whole Class Performance';
        }
    };
    PerformanceReport.prototype.initLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    };
    PerformanceReport.prototype.openPopover = function (myEvent) {
        var _this = this;
        var dataParam = {
            class_id: this.item.class_id
        };
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__performPopoverMenu_performPopoverMenu__["a" /* PerformPopoverMenu */], dataParam);
        //callback function after close the popover
        popover.onDidDismiss(function (data) {
            //if datarange selected then call model pop for date range
            if (data && data['datetoken'] == 'dateRange') {
                _this.openDateRangePop();
            }
            else if (data && data['datetoken']) {
                _this.getPerformReport(data);
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    PerformanceReport.prototype.openDateRangePop = function () {
        var _this = this;
        var popupDateRange = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__attendanceDateRange_attendanceDateRange__["a" /* AttendanceDateRange */]);
        popupDateRange.onDidDismiss(function (data) {
            if (data && data['datetoken']) {
                _this.getPerformReport(data);
            }
        });
        popupDateRange.present();
    };
    PerformanceReport.prototype.getPerformReport = function (data) {
        /*
          if we come from whole class then get whole class report
          else get student report.
          
          if there is student_no it means we came student report
        */
        //reset the graph data
        this.doughnutChartData[0].data = [0, 0];
        if (data.datetoken != 'daterange') {
            this.item.reportLabel = data.label;
        }
        else {
            var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
            var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
            this.item.reportLabel = 'From ' + startDate + ' To ' + endDate;
        }
        if (this.item.student_no) {
            this.getStudentPerformReport(data);
        }
        else {
            this.getClassPerformReport(data);
        }
    };
    PerformanceReport.prototype.getStudentPerformReport = function (data) {
        var _this = this;
        if (data.datetoken == 'daterange') {
            var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
            var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
        }
        else {
            var startDate = '';
            var endDate = '';
        }
        var dataParam = {
            class_id: this.item.class_id,
            student_info_no: this.item.student_no,
            datetoken: data.datetoken,
            startdate: startDate,
            enddate: endDate
        };
        this.initLoading();
        this.loading.present();
        this.reportList = [];
        this.teacherClassroomService.getStudentPerformReport(dataParam).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.reportList = resp['point'];
                _this.item.nocontent = 0;
                _this.item.graph = 1;
                _this.setupDataForChart();
            }
            else {
                _this.item.nocontent = 1;
                _this.item.graph = 0;
            }
        }, function (err) {
            console.log(err);
        });
    };
    PerformanceReport.prototype.getClassPerformReport = function (data) {
        var _this = this;
        if (data.datetoken == 'daterange') {
            var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
            var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
        }
        else {
            var startDate = '';
            var endDate = '';
        }
        var dataParam = {
            class_id: this.item.class_id,
            datetoken: data.datetoken,
            startdate: startDate,
            enddate: endDate
        };
        this.initLoading();
        this.loading.present();
        this.reportList = [];
        this.teacherClassroomService.getClassPerformReport(dataParam).then(function (resp) {
            _this.loading.dismiss();
            if (resp['status'] == "Success") {
                _this.reportList = resp['point'];
                _this.item.nocontent = 0;
                _this.item.graph = 1;
                _this.setupDataForChart();
            }
            else {
                _this.item.nocontent = 1;
                _this.item.graph = 0;
            }
        }, function (err) {
            console.log(err);
        });
    };
    PerformanceReport.prototype.setupDataForChart = function () {
        /*run the loop to build data for chart*/
        var pos_total = 0;
        var need_total = 0;
        for (var i = 0; i < (this.reportList).length; i++) {
            if (this.reportList[i].customize_detail.pointweight > 0) {
                pos_total += this.reportList[i].customize_detail.pointweight;
            }
            else if (this.reportList[i].customize_detail.pointweight < 0) {
                need_total += this.reportList[i].customize_detail.pointweight;
            }
        }
        pos_total = Math.abs(pos_total);
        need_total = Math.abs(need_total);
        var positive_skill = Math.round((pos_total / (pos_total + need_total)) * 100);
        var needwork_skill = Math.round((need_total / (pos_total + need_total)) * 100);
        this.doughnutChartData[0].data = [positive_skill, needwork_skill];
        if (this.chart !== undefined) {
            this.chart.ngOnDestroy();
            this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
        }
    };
    // events
    PerformanceReport.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PerformanceReport.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("baseChart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["BaseChartDirective"])
    ], PerformanceReport.prototype, "chart", void 0);
    PerformanceReport = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\performanceReport\performanceReport.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\n{{item.headerTitlePart}}\n\n<br/>\n\n({{item.reportLabel}})\n\n <a (click)="openPopover($event)"><ion-icon name="calendar"></ion-icon></a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n<!-- START || IF THERE IS DATA THEN DISPLAY THE GRAPH -->\n\n<div class="list-school" *ngIf="item.graph">\n\n  <canvas baseChart #baseChart="base-chart" width="400" height="250"\n\n    [datasets]="doughnutChartData"\n\n    [labels]="doughnutChartLabels"\n\n    [colors] = "chartColors"\n\n    [chartType]="doughnutChartType" \n\n    [options]="chartOptions" \n\n    (chartHover)="chartHovered($event)"\n\n    (chartClick)="chartClicked($event)">  \n\n  </canvas>\n\n</div>\n\n<!-- END || IF THERE IS DATA THEN DISPLAY THE GRAPH -->\n\n\n\n<!-- START || IF THERE IS NO DATA THEN DISPLAY IT -->\n\n<div *ngIf="item.nocontent" class="list-school ">\n\n    <div class="col col-100 graph_img">\n\n        <img src="assets/imgs/graph.png" />\n\n        <div class="positive_1">\n\n            <span>No points for current date selected</span>\n\n        </div>\n\n    </div>\n\n</div>\n\n<!-- END || IF THERE IS NO DATA THEN DISPLAY IT -->\n\n\n\n<!-- START || IF THERE IS DATA THEN DISPLAY THE LISTING -->\n\n<div class="m-school" *ngIf="!item.nocontent">\n\n<div class="list-margin">\n\n<div class="add-c  content-p">\n\n<ion-list *ngFor=" let item of reportList">\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n      <img src="{{imageBasePath}}skill/{{item.customize_detail.image}}">  \n\n      </ion-thumbnail>\n\n      <h2 *ngIf="item.point>0">+{{item.point}} for {{item.customize_detail.name}}</h2>\n\n	  <h2 *ngIf="item.point<=0">{{item.point}} for {{item.customize_detail.name}}</h2>\n\n      <p>by {{item.class_name.teacher_name}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</div>\n\n</div>\n\n<!-- END || IF THERE IS DATA THEN DISPLAY THE LISTING -->\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\performanceReport\performanceReport.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["BaseChartDirective"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], PerformanceReport);
    return PerformanceReport;
}());

//# sourceMappingURL=performanceReport.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformPopoverMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerformPopoverMenu = (function () {
    function PerformPopoverMenu(navCtrl, viewCtrl, navParams, teacherClassroomService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.teacherClassroomService = teacherClassroomService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.item = {};
        this.loading = loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
    }
    PerformPopoverMenu.prototype.ngOnInit = function () {
        this.item.class_id = this.navParams.get("class_id");
        this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
    };
    PerformPopoverMenu.prototype.close = function (returnData) {
        this.viewCtrl.dismiss(returnData);
    };
    PerformPopoverMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\performPopoverMenu\performPopoverMenu.html"*/`<ion-list class="edit-c">     \n\n	<button ion-item (click)="close({datetoken:\'today\', label:\'Today\'})">Today</button>\n\n	<button ion-item (click)="close({datetoken:\'thisweek\', label:\'This Week\'})">This week</button>\n\n	<button ion-item (click)="close({datetoken:\'thismonth\', label:\'This Month\'})">This Month</button>\n\n	<button ion-item (click)="close({datetoken:\'dateRange\', label:\'selected Date Range\'})">Date Range</button>\n\n</ion-list>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\performPopoverMenu\performPopoverMenu.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PerformPopoverMenu);
    return PerformPopoverMenu;
}());

//# sourceMappingURL=performPopoverMenu.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_function__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotPassword_forgotPassword__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_login_service__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classStory_classStory__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__studentTab_studentTab__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tutorialSlide_tutorialSlide__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = (function () {
    function LoginPage(navCtrl, loginService, toastCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = {};
        this.signup = __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */];
        this.forgotPassword = __WEBPACK_IMPORTED_MODULE_4__forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */];
        this.dashboard = __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* Dashboard */];
        this.classStory = __WEBPACK_IMPORTED_MODULE_7__classStory_classStory__["a" /* ClassStory */];
        this.tutorialSlide = __WEBPACK_IMPORTED_MODULE_9__tutorialSlide_tutorialSlide__["a" /* TutorialSlide */];
        this.loggedInUser = null;
        this.checkAlreadyLoggedIn();
    }
    LoginPage.prototype.checkAlreadyLoggedIn = function () {
        //check if user is already login then redirect to respective dashboard
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        if (this.loggedInUser) {
            this.loggedInUser = JSON.parse(this.loggedInUser);
            var userType = this.loggedInUser[0].type;
            if (userType == 1 || userType == 2 || userType == 5) {
                this.navCtrl.setRoot(this.dashboard);
                this.navCtrl.push(this.dashboard);
            }
            else if (userType == 3) {
                this.navCtrl.setRoot(this.classStory);
                this.navCtrl.push(this.classStory);
            }
            else if (userType == 4) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__studentTab_studentTab__["a" /* StudentTab */]);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__studentTab_studentTab__["a" /* StudentTab */]);
            }
        }
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: __WEBPACK_IMPORTED_MODULE_2__app_function__["a" /* global_function */].getLoader()
        });
        this.loading.present();
        this.loginService.doLogin(this.item).then(function (res) {
            _this.loading.dismiss();
            if (res['status'] == 'Success') {
                var jsonresponse = res['user_list'];
                var deviceId = window.localStorage.getItem('das_device_id');
                var skipdata = window.localStorage.getItem('skipdta');
                window.localStorage.clear();
                window.localStorage.setItem('das_device_id', deviceId);
                window.localStorage.setItem('skipdta', skipdata);
                window.localStorage.setItem('loggedInUser', JSON.stringify(jsonresponse));
                //For Principal, vice principal and teacher
                if (jsonresponse[0].type == '2' || jsonresponse[0].type == '1' || jsonresponse[0].type == '5') {
                    if (res.hasOwnProperty("school") == true) {
                        window.localStorage.setItem('school', JSON.stringify(res['school']));
                        window.localStorage.setItem('school_id', JSON.stringify(res['school_id']));
                    }
                    //if user has not skipped tutorial then show it
                    if (skipdata == "" || skipdata == null) {
                        _this.navCtrl.push(_this.tutorialSlide);
                    }
                    else {
                        //load Principal, vice principal and teacher dashboard 
                        _this.navCtrl.setRoot(_this.dashboard);
                        _this.navCtrl.push(_this.dashboard);
                    }
                }
                else if (jsonresponse[0].type == '3') {
                    window.localStorage.setItem('school_id', JSON.stringify(res['school_id']));
                    //if user has not skipped tutorial then show it
                    if (skipdata == "" || skipdata == null) {
                        _this.navCtrl.push(_this.tutorialSlide);
                    }
                    else {
                        //load parent dashboard
                        _this.navCtrl.setRoot(_this.classStory);
                        _this.navCtrl.push(_this.classStory);
                    }
                }
                else if (jsonresponse[0].type == '4') {
                    //if user has not skipped tutorial then show it
                    if (skipdata == "" || skipdata == null) {
                        _this.navCtrl.push(_this.tutorialSlide);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__studentTab_studentTab__["a" /* StudentTab */]);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__studentTab_studentTab__["a" /* StudentTab */]);
                    }
                    if (jsonresponse[0].status == '0') {
                        var toast = _this.toastCtrl.create({
                            message: 'Account not verified',
                            duration: 3000,
                            position: 'center'
                        });
                        toast.present();
                    }
                }
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    message: 'Please check username or password',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\login\login.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n    Login\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n<form #loginForm="ngForm" (ngSubmit)="doLogin()">\n\n<ion-list>\n\n<ion-item class="login-m">\n\n \n\n    <ion-input type="text"  placeholder="Username" name="username" [(ngModel)]="item.username" required></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n  \n\n    <ion-input type="password"  placeholder="Password" name="password" [(ngModel)]="item.password" required></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<div>\n\n<button ion-button color="orange"  class="button-block login0  mar45" [disabled]="!loginForm.form.valid">Log in</button>\n\n</div>\n\n<ion-grid>\n\n   <ion-row>\n\n      <ion-col width-50 >\n\n        <div class="forget">\n\n          <a [navPush]="forgotPassword">Forget password ?</a> \n\n        </div>\n\n      </ion-col>\n\n      <ion-col width-50>\n\n      <div class="sig-up">\n\n        Don’t have any account ?  <a [navPush]="signup" >Signup</a>\n\n      </div> \n\n    </ion-col>\n\n   </ion-row>\n\n</ion-grid>\n\n</form>\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_service__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changePassword_changePassword__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Profile = (function () {
    function Profile(navCtrl, profileService, nav, altCtrl, modalCtrl, actionSheetCtrl, camera, alertCtrl, fileTransfer, mediaCapture) {
        this.navCtrl = navCtrl;
        this.profileService = profileService;
        this.nav = nav;
        this.altCtrl = altCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.fileTransfer = fileTransfer;
        this.mediaCapture = mediaCapture;
        this.schoolid = '';
        this.item = {};
        this.memberno = '';
        this.name = '';
        this.email = '';
        this.postid = '';
        this.profileid = '';
        this.userlist = {};
        this.url = {};
        this.type = {};
        this.selection = '';
        this.profileid = window.localStorage.getItem('profileid');
        var data = window.localStorage.getItem('loggedInUser');
        var teacher_list = JSON.parse(data);
        this.userlist = teacher_list;
        this.memberno = teacher_list[0]['member_no'];
        this.schoolid = window.localStorage.getItem('schoolid');
        this.item.name = teacher_list[0]['name'];
        this.item.email = teacher_list[0]['email'];
        this.type = teacher_list[0]['type'];
        this.selection = 0;
        // this.images ="<img src='"+config.data.image_url+"assets/"+"profile_image/"+teacher_list[0]['image']+"?"+func.global_function.randomNumber()+"'>";        
        this.imgURI = __WEBPACK_IMPORTED_MODULE_8__assets_json_config__["a" /* data */].image_url + "assets/" + "profile_image/" + teacher_list[0]['image'] + "?" + __WEBPACK_IMPORTED_MODULE_9__app_function__["a" /* global_function */].randomNumber();
    }
    Profile.prototype.ngOnInit = function () {
    };
    /**    *Function for edit profile **/
    Profile.prototype.editProfile = function () {
        var _this = this;
        this.profileService.editProfile(this.item, this.memberno).then(function (result) {
            if (result['status'] == "Success") {
                _this.userlist[0]['name'] = result['student_name'][0]['name'];
                window.localStorage.setItem('loggedInUser', JSON.stringify(_this.userlist));
                var alert_1 = _this.altCtrl.create({
                    message: 'profile Updated Successfully',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* Dashboard */]);
                            }
                        }]
                });
                alert_1.present();
            }
            else if (result['status'] == "Failure") {
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**    *Function for edit profile Teacher **/
    Profile.prototype.logoutTeacher = function () {
        var _this = this;
        window.localStorage.clear();
        var alert = this.altCtrl.create({
            message: 'Successfully logout',
            buttons: [{
                    text: 'ok',
                    handler: function () {
                        _this.nav.pop();
                        window.location.reload();
                    }
                }]
        });
        alert.present();
    };
    /**    *Function for delete Account **/
    Profile.prototype.deleteAccount = function () {
        var _this = this;
        this.url = "";
        if (this.type == 1) {
            this.url = 'teacher';
        }
        else if (this.type == 2) {
            this.url = 'parent';
        }
        else if (this.type == 3) {
            this.url = 'parent';
        }
        this.profileService.deleteAccount(this.url, this.memberno).then(function (result) {
            if (result['status'] == "Success") {
                var alert_2 = _this.altCtrl.create({
                    message: 'deleted Successfully',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                window.localStorage.clear();
                                window.location.reload();
                            }
                        }]
                });
                alert_2.present();
            }
            else if (result['status'] == "Failure") {
            }
        }, function (err) {
            console.log(err);
        });
    };
    Profile.prototype.changePassword = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__changePassword_changePassword__["a" /* ChangePassword */], { userId: 8675309 });
        profileModal.present();
    };
    /**    *Function for update image **/
    Profile.prototype.showPicturePopup = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Take Photo',
                    role: 'Take Photo',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Choose Photo',
                    handler: function () {
                        _this.choosePhoto();
                    }
                }, {
                    text: 'Close',
                    role: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Profile.prototype.takePhoto = function () {
        var _this = this;
        this.selection = 1;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
            //this.sendMessageInit(1, imageData);
        }, function (err) {
            console.log(err);
        });
    };
    Profile.prototype.choosePhoto = function () {
        var _this = this;
        this.selection = 2;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            saveToPhotoAlbum: false,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imgURI = imageData;
        }, function (err) {
            console.log(err);
        });
    };
    Profile.prototype.save = function () {
        var _this = this;
        if (this.selection = 0) {
            this.profileService.editProfile(this.item, this.memberno).then(function (result) {
                if (result['status'] == "Success") {
                    _this.userlist[0]['name'] = result['student_name'][0]['name'];
                    window.localStorage.setItem('loggedInUser', JSON.stringify(_this.userlist));
                    var alert_3 = _this.altCtrl.create({
                        message: 'profile Updated Successfully',
                        buttons: [{
                                text: 'ok',
                                handler: function () {
                                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* Dashboard */]);
                                }
                            }]
                    });
                    alert_3.present();
                }
                else if (result['status'] == "Failure") {
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            var fileTransfer = this.fileTransfer.create();
            var options = {
                fileKey: "upload_file",
                fileName: "1.jpg",
                mimeType: "image/jpeg",
                chunkedMode: false,
                params: {
                    "name": this.item['name'],
                    "member_no": this.memberno,
                }
            };
            fileTransfer.upload(this.imgURI, __WEBPACK_IMPORTED_MODULE_8__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_8__assets_json_config__["a" /* data */].port + '/student/updateimage?token=' + __WEBPACK_IMPORTED_MODULE_8__assets_json_config__["a" /* data */].api_token, options).then(function (data) {
                var datas = JSON.parse(data.response);
                var image_name = datas.img_name;
                var name = datas.name[0].name;
                _this.userlist[0]['image'] = image_name;
                _this.userlist[0]['name'] = name;
                window.localStorage.setItem('loggedInUser', JSON.stringify(_this.userlist));
                var alert = _this.altCtrl.create({
                    message: 'profile Updated Successfully',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* Dashboard */]);
                            }
                        }]
                });
                alert.present();
            }, function (err) {
                console.log(err);
            });
        }
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\profile\profile.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\nProfile\n\n <a href="">  </a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n<div class="add-img" (click)="showPicturePopup()">\n\n <a >\n\n<h3>Add Photo</h3>\n\n\n\n<img src={{imgURI}}>\n\n</a>\n\n</div> \n\n\n\n<div class="m-school  new-border  profile-f">\n\n<h3> Account</h3>\n\n\n\n  <!-- text box code  here-->\n\n <form (ngSubmit)="save()" #itemForm="ngForm">\n\n<ion-list>\n\n    <ion-item>\n\n <ion-input type="text"  placeholder="" [(ngModel)]="item.name" name="name"></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n <ion-input type="text"  placeholder="abc@gmail.com" [(ngModel)]="item.email" \n\n   name="email" readonly></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<div>\n\n<button ion-button full  color="orange"  class="button-block  save-btn">Save changes\n\n</button>\n\n</div>\n\n </form>\n\n\n\n<!-- setting code start -->\n\n<div class="setting-profile">\n\n  <h3>Resource</h3>\n\n  <a (click)="changePassword()"> Change Password </a>\n\n  <a (click)="deleteAccount()"> Delete Account </a>\n\n  <a href=""> Terms and Conditions </a>\n\n  <a href=""> Privacy & Policy </a>\n\n  <a [navPush]="notificationsetting">Notification Setting </a>\n\n  <a (click)="logoutTeacher()">Sign out </a>\n\n</div>\n\n\n\n<!-- setting end-->\n\n\n\n</div>\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\profile\profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], Profile);
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_changePassword_service__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePassword = (function () {
    function ChangePassword(navCtrl, changePasswordService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.changePasswordService = changePasswordService;
        this.alertCtrl = alertCtrl;
        this.item = {};
        this.memberno = '';
        var data = window.localStorage.getItem('loggedInUser');
        var teacher_list = JSON.parse(data);
        this.memberno = teacher_list[0]['member_no'];
    }
    ChangePassword.prototype.savepassword = function () {
        var _this = this;
        this.changePasswordService.updatepassword(this.item, this.memberno).then(function (res) {
            if (res['status'] == "Success") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Password Updated Sucessfully',
                    buttons: ['Ok']
                });
                alert_1.present();
                _this.navCtrl.pop();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ChangePassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\changePassword\changePassword.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\nChange password\n\n <a href="">  </a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content >\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n<div class="m-school  new-border  profile-f">\n\n<!-- text box code  here-->\n\n<form #loginForm="ngForm" (ngSubmit)="savepassword()">\n\n<ion-list>\n\n    <ion-item>\n\n <ion-input type="password"  placeholder="Current password" [(ngModel)]="item.currpass" name="currpass" ></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n <ion-input type="password"  placeholder="New password" [(ngModel)]="item.newpass" name="newpass" ></ion-input>\n\n  </ion-item>\n\n   <ion-item>\n\n <ion-input type="password"  placeholder=" Confirm Password" [(ngModel)]="item.confirmpass" name="confirmpass" ></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<div>\n\n<button  ion-button color="orange"  class="button-block  save-btn" [disabled]="!loginForm.form.valid">Change Password\n\n</button>\n\n</div>\n\n</form>\n\n\n\n</div>\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\changePassword\changePassword.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_changePassword_service__["a" /* ChangePasswordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_changePassword_service__["a" /* ChangePasswordService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ChangePassword);
    return ChangePassword;
}());

//# sourceMappingURL=changePassword.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolLeaderSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schoolLeaderSignup_service__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolLeaderSignupPage = (function () {
    function SchoolLeaderSignupPage(navCtrl, schooleaderService) {
        this.navCtrl = navCtrl;
        this.schooleaderService = schooleaderService;
        this.item = {};
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.dashboard = __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* Dashboard */];
    }
    SchoolLeaderSignupPage.prototype.ngOnInit = function () {
    };
    SchoolLeaderSignupPage.prototype.doSchoolleadersignup = function () {
        var _this = this;
        this.schooleaderService.saveSchoolleader(this.item).then(function (result) {
            if (result['status'] == "Success") {
                window.localStorage.setItem('loggedInUser', JSON.stringify(result['user_list']));
                var jsonresponse = result['user_list'];
                for (var i = 0; i < jsonresponse.length; i++) {
                    if (jsonresponse[0].type == 1 || jsonresponse[0].type == 5) {
                        _this.navCtrl.push(_this.dashboard);
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    SchoolLeaderSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\schoolleadersignup\schoolleadersignup.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    School Leader Sign Up\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n<div class="signup-g">\n\nGet ready for your best classroom yet :)\n\n</div>\n\n\n\n\n\n<form #loginForm="ngForm" (ngSubmit)="doSchoolleadersignup()">\n\n<ion-list>\n\n<ion-item>\n\n \n\n   <ion-input type="text"  placeholder="Username" [(ngModel)]="item.username" name="username" required></ion-input>\n\n  </ion-item>\n\n\n\n  \n\n  \n\n  <ion-item>\n\n \n\n    <ion-input type="number"  placeholder="Phonenumber" [(ngModel)]="item.number" name="number" required ></ion-input>\n\n  </ion-item>\n\n\n\n \n\n\n\n\n\n  	<ion-item>\n\n \n\n    <ion-input type="email"  placeholder="Email" [(ngModel)]="item.email" name="email" required></ion-input>\n\n  </ion-item>\n\n\n\n \n\n\n\n<ion-item>\n\n    <ion-input type="password"  placeholder="Password" [(ngModel)]="item.password" name="password" required ></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<ion-item>\n\n <ion-label><span>Please Select</span></ion-label>\n\n  <ion-select [(ngModel)]="item.selectGrade" name="selectGrade">\n\n    <ion-option value="5">Vice Principal</ion-option>\n\n    <ion-option value="1">Pricipal</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n\n\n\n\n<ion-item class="check-p">\n\n  <ion-label>By creating an account,you agree to the Terms Of Service and Privacy Policy</ion-label>\n\n  <ion-checkbox color="positive" [(ngModel)]="item.agree" name="agree"  checked="true"></ion-checkbox>\n\n</ion-item>\n\n\n\n<div>\n\n<button ion-button color="primary"  class="button-block login0"  [disabled]="!loginForm.form.valid" >Create Account</button>\n\n</div>\n\n\n\n</form>\n\n\n\n<div class="account-l">\n\nAlready have any account  \n\n <button ion-button outline item-end  class="login-btn" [navPush]="login">\n\n   Login\n\n    \n\n</button>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\schoolleadersignup\schoolleadersignup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_schoolLeaderSignup_service__["a" /* SchoolleaderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_schoolLeaderSignup_service__["a" /* SchoolleaderService */]])
    ], SchoolLeaderSignupPage);
    return SchoolLeaderSignupPage;
}());

//# sourceMappingURL=schoolleadersignup.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forgotpassword_service__ = __webpack_require__(574);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, forgotpasswordService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.forgotpasswordService = forgotpasswordService;
        this.toastCtrl = toastCtrl;
        this.item = {};
    }
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        this.forgotpasswordService.forgotPassword(this.item).then(function (result) {
            if (result['status'] == "Success") {
                var toast = _this.toastCtrl.create({
                    message: 'Password reset link has been sent to your email id',
                    duration: 2000,
                    position: 'Show Middle'
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'Username or Email address not registered',
                    duration: 2000,
                    position: 'Show Middle'
                });
                toast.present();
            }
        }, function (err) {
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\forgotPassword\forgotPassword.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    <div class="login-g">\n\n RESET PASSWORD\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  class="body-back1">\n\n<div class="logo">\n\n<img src="assets/imgs/logo3.png">\n\n</div>\n\n\n\n<div class="passw-p">\n\n  If you\'ve forgotten your password, please ask your teacher.\n\n</div>\n\n\n\n<form  (ngSubmit)="forgotPassword()" #itemForm="ngForm">\n\n<ion-list>\n\n<ion-item class="login-m">\n\n \n\n    <ion-input type="text"  placeholder="Username or Email" [(ngModel)]="item.email" name="email" required ></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n<div>\n\n<button ion-button color="orange"  class="button-block login0  mar45" [disabled]="!itemForm.form.valid">Reset Password</button>\n\n</div>\n\n\n\n</form>\n\n\n\n\n\n</ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\forgotPassword\forgotPassword.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_forgotpassword_service__["a" /* ForgotPasswordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_forgotpassword_service__["a" /* ForgotPasswordService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgotPassword.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialSlide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classStory_classStory__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__studentTab_studentTab__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TutorialSlide = (function () {
    function TutorialSlide(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dashboard = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* Dashboard */];
        this.classStory = __WEBPACK_IMPORTED_MODULE_3__classStory_classStory__["a" /* ClassStory */];
    }
    TutorialSlide.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    TutorialSlide.prototype.skipTutorial = function () {
        window.localStorage.setItem('skipdta', "1");
        var loggedInUser = window.localStorage.getItem('loggedInUser');
        if (loggedInUser != "" && loggedInUser != null) {
            var loggedInUserData = JSON.parse(loggedInUser);
            var user_type = loggedInUserData[0].type;
            var status = loggedInUserData[0].status;
            if (user_type == 2 || user_type == 1 || user_type == 5) {
                this.navCtrl.push(this.dashboard);
            }
            if (user_type == 3) {
                this.navCtrl.push(this.classStory);
            }
            if (user_type == 4) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__studentTab_studentTab__["a" /* StudentTab */]);
                if (status == '0') {
                    var toast = this.toastCtrl.create({
                        message: 'Account not verified',
                        duration: 3000,
                        position: 'center'
                    });
                    toast.present();
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], TutorialSlide.prototype, "slides", void 0);
    TutorialSlide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\tutorialSlide\tutorialSlide.html"*/`<ion-content>\n\n	<ion-slides (ionSlideDidChange)="slideChanged()" pager="true">\n\n		<ion-slide class="solicitacoes">\n\n		    <div id="logo">\n\n		        <img src="/assets/imgs/tutorialSlide/first_slider.png">\n\n		    </div>\n\n		    <h3>Manage your classroom</h3>\n\n\n\n		    <p>\n\n		        Join your school to manage entire classroom. Add students to maintain performance and attendance records.\n\n\n\n		    </p>\n\n		    <button class="skip" (click)="skipTutorial()">SKIP TUTORIAL</button>\n\n		</ion-slide>\n\n\n\n		<ion-slide class="sem-internet">\n\n		    <div id="logo">\n\n		        <img src="/assets/imgs/tutorialSlide/second_slider.png">\n\n		    </div>\n\n		    <h3>Share the Stories</h3>\n\n		    <p>\n\n		        Share the special moment of your classroom or school level activities as images or videos with parents and students.\n\n		    </p>\n\n		    <button class="skip" (click)="skipTutorial()">SKIP TUTORIAL</button>\n\n\n\n		</ion-slide>\n\n\n\n		<ion-slide class="notificacoes">\n\n		    <div id="logo">\n\n		        <img src="/assets/imgs/tutorialSlide/third_slider.png">\n\n		    </div>\n\n		    <h3>Make Communication Easier</h3>\n\n		    <p>\n\n		        No need to wait for parent-teacher meetings,always keep in touch with the parents through message\n\n		    </p>\n\n		    <button class="skip" (click)="skipTutorial()">SKIP TUTORIAL</button>\n\n\n\n		</ion-slide>\n\n\n\n		<ion-slide class="sem-internet four_slide">\n\n		    <div id="logo">\n\n		        <img src="/assets/imgs/tutorialSlide/four_slider.png">\n\n		    </div>\n\n		    <h3>Keep Track of your Task</h3>\n\n		    <p>\n\n		        Never miss any assignment, Stay up-to-date about the assigned task, get notified & view the scored grades as well.\n\n		    </p>\n\n		    <button class="skip" (click)="skipTutorial()">SKIP TUTORIAL</button>\n\n\n\n		</ion-slide>\n\n\n\n\n\n		<ion-slide class="notificacoes five_slide">\n\n		    <div id="logo">\n\n		        <img src="/assets/imgs/tutorialSlide/five_slider.png">\n\n		    </div>\n\n		    <h3>Keep in touch with all events</h3>\n\n		    <p>\n\n		        Get aware about all the school\'s event, be a part of it as volunteer. Get instant information about all the changes.\n\n		    </p>\n\n		    <button class="skip" (click)="skipTutorial()">Go to Dashboard</button>\n\n\n\n		</ion-slide>\n\n	</ion-slides>\n\n<ion-content>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\tutorialSlide\tutorialSlide.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], TutorialSlide);
    return TutorialSlide;
}());

//# sourceMappingURL=tutorialSlide.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(458);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_studentSignup_studentSignup__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forgotPassword_forgotPassword__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_parentsignup_parentsignup__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_schoolleadersignup_schoolleadersignup__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_teachersignup_teachersignup__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_studentSignupPage_studentSignupPage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_dashboard_dashboard__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_classStory_classStory__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_studentInvite_studentInvite__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_parentcodecheck_parentcodecheck__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tutorialSlide_tutorialSlide__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_eventManagement_eventManagement__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_referTeacher_referTeacher__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_parentMessage_parentMessage__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_yourkids_yourkids__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_joinSchool_joinSchool__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_studentStory_studentStory__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_popoverPageStudent_popoverPageStudent__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_addNewClass_addNewClass__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_schoolStory_schoolStory__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_studentAccountSetting_studentAccountSetting__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_studentSideMenu_studentSideMenu__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_studentTab_studentTab__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_parentdashboard_parentdashboard__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_teacherClasstab_teacherClasstab__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_teacherMessage_teacherMessage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_teacherClassroom_teacherClassroom__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_teacherClassstory_teacherClassstory__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_inviteparents_inviteparents__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_schoolTeacherlist_schoolTeacherlist__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_classIcon_classIcon__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_teacherClassStoryPosts_teacherClassStoryPosts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_addclassstoryPost_addclassstoryPost__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_classstoryComment_classstoryComment__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_editclassstoryPost_editclassstoryPost__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_addStudent_addStudent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_changePassword_changePassword__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_profile_profile__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_addSchool_addSchool__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_editStudent_editStudent__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_teacherSchoolstoryPopovermenu_teacherSchoolstoryPopovermenu__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_teacherList_teacherList__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_addSchoolstoryPost_addSchoolstoryPost__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_editschoolstoryPost_editschoolstoryPost__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_schoolstoryComment_schoolstoryComment__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_group_group__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_shareSchoolInfo_shareSchoolInfo__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_studentPopoverMenu_studentPopoverMenu__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_addGroup_addGroup__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_awardGroup_awardGroup__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_giveGroupfeedback_giveGroupfeedback__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_classstoryLikes_classstoryLikes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_schoolstoryLikes_schoolstoryLikes__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_chat_chat__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_pendingStories_pendingStories__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_editClass_editClass__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_editSkills_editSkills__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_teacherClassroomPopovermenu_teacherClassroomPopovermenu__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_groupPopoverMenu_groupPopoverMenu__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_pendingStoriesPosts_pendingStoriesPosts__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_attendence_attendence__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_attendancePopoverMenu_attendancePopoverMenu__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_attendanceDateRange_attendanceDateRange__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_awardMultiStudent_awardMultiStudent__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_viewReport_viewReport__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_performanceReport_performanceReport__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_smileyIcon_smileyIcon__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86_angular2_moment__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_86_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_parentkidList_parentkidList__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_performPopoverMenu_performPopoverMenu__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ng2_charts__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_89_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_parentpostComment_parentpostComment__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_parentstoriesLikes_parentstoriesLikes__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__pages_changeSchool_changeSchool__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_studentSignup_studentSignup__["a" /* StudentSignup */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_teachersignup_teachersignup__["a" /* TeacherSignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_schoolleadersignup_schoolleadersignup__["a" /* SchoolLeaderSignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_parentsignup_parentsignup__["a" /* ParentSignupPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_studentSignupPage_studentSignupPage__["a" /* StudentSignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_dashboard_dashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_24__pages_classStory_classStory__["a" /* ClassStory */],
                __WEBPACK_IMPORTED_MODULE_25__pages_studentInvite_studentInvite__["a" /* StudentInvite */],
                __WEBPACK_IMPORTED_MODULE_26__pages_parentcodecheck_parentcodecheck__["a" /* ParentcodecheckPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tutorialSlide_tutorialSlide__["a" /* TutorialSlide */],
                __WEBPACK_IMPORTED_MODULE_28__pages_eventManagement_eventManagement__["a" /* EventManagement */],
                __WEBPACK_IMPORTED_MODULE_29__pages_referTeacher_referTeacher__["a" /* ReferTeacher */],
                __WEBPACK_IMPORTED_MODULE_30__pages_parentMessage_parentMessage__["a" /* ParentMessagePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_yourkids_yourkids__["a" /* YourkidsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_studentStory_studentStory__["a" /* StudentStory */],
                __WEBPACK_IMPORTED_MODULE_32__pages_joinSchool_joinSchool__["a" /* JoinSchool */],
                __WEBPACK_IMPORTED_MODULE_34__pages_popoverPageStudent_popoverPageStudent__["a" /* PopoverPageStudent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_addNewClass_addNewClass__["a" /* AddNewClass */],
                __WEBPACK_IMPORTED_MODULE_36__pages_schoolStory_schoolStory__["a" /* SchoolStory */],
                __WEBPACK_IMPORTED_MODULE_40__pages_parentdashboard_parentdashboard__["a" /* ParentDashboard */],
                __WEBPACK_IMPORTED_MODULE_41__pages_teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */],
                __WEBPACK_IMPORTED_MODULE_42__pages_teacherMessage_teacherMessage__["a" /* TeacherMessagePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_teacherClassroom_teacherClassroom__["a" /* TeacherClassroomPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_teacherClassstory_teacherClassstory__["a" /* TeacherClassstoryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_studentAccountSetting_studentAccountSetting__["a" /* StudentAccountSetting */],
                __WEBPACK_IMPORTED_MODULE_38__pages_studentSideMenu_studentSideMenu__["a" /* StudentSideMenu */],
                __WEBPACK_IMPORTED_MODULE_39__pages_studentTab_studentTab__["a" /* StudentTab */],
                __WEBPACK_IMPORTED_MODULE_40__pages_parentdashboard_parentdashboard__["a" /* ParentDashboard */],
                __WEBPACK_IMPORTED_MODULE_45__pages_inviteparents_inviteparents__["a" /* InviteparentsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_schoolTeacherlist_schoolTeacherlist__["a" /* SchoolTeacherlist */],
                __WEBPACK_IMPORTED_MODULE_48__pages_teacherClassStoryPosts_teacherClassStoryPosts__["a" /* TeacherClassstoryPostsPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_addclassstoryPost_addclassstoryPost__["a" /* AddclassstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_classIcon_classIcon__["a" /* ClassIcon */],
                __WEBPACK_IMPORTED_MODULE_50__pages_classstoryComment_classstoryComment__["a" /* ClassstoryCommentPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__["a" /* ClassStoryPopovermenuPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_editclassstoryPost_editclassstoryPost__["a" /* EditclassstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_addStudent_addStudent__["a" /* AddStudent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_changePassword_changePassword__["a" /* ChangePassword */],
                __WEBPACK_IMPORTED_MODULE_55__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_56__pages_addSchool_addSchool__["a" /* AddSchool */],
                __WEBPACK_IMPORTED_MODULE_57__pages_editStudent_editStudent__["a" /* EditStudent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_shareSchoolInfo_shareSchoolInfo__["a" /* ShareSchoolInfo */],
                __WEBPACK_IMPORTED_MODULE_58__pages_teacherSchoolstoryPopovermenu_teacherSchoolstoryPopovermenu__["a" /* SchoolStoryPopovermenuPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_teacherList_teacherList__["a" /* TeacherList */],
                __WEBPACK_IMPORTED_MODULE_60__pages_addSchoolstoryPost_addSchoolstoryPost__["a" /* AddSchoolstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__["a" /* SchoolStoryupdatePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_editschoolstoryPost_editschoolstoryPost__["a" /* EditSchoolstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_schoolstoryComment_schoolstoryComment__["a" /* SchoolstoryCommentPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_group_group__["a" /* Group */],
                __WEBPACK_IMPORTED_MODULE_66__pages_studentPopoverMenu_studentPopoverMenu__["a" /* StudentPopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_67__pages_addGroup_addGroup__["a" /* AddGroup */],
                __WEBPACK_IMPORTED_MODULE_68__pages_awardGroup_awardGroup__["a" /* AwardGroup */],
                __WEBPACK_IMPORTED_MODULE_69__pages_giveGroupfeedback_giveGroupfeedback__["a" /* GiveGroupfeedback */],
                __WEBPACK_IMPORTED_MODULE_70__pages_classstoryLikes_classstoryLikes__["a" /* ClassstoryLikesPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_schoolstoryLikes_schoolstoryLikes__["a" /* SchoolstoryLikesPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_chat_chat__["a" /* Chat */],
                __WEBPACK_IMPORTED_MODULE_73__pages_pendingStories_pendingStories__["a" /* PendingStories */],
                __WEBPACK_IMPORTED_MODULE_74__pages_editClass_editClass__["a" /* EditClass */],
                __WEBPACK_IMPORTED_MODULE_75__pages_editSkills_editSkills__["a" /* EditSkills */],
                __WEBPACK_IMPORTED_MODULE_76__pages_teacherClassroomPopovermenu_teacherClassroomPopovermenu__["a" /* ClassroomPopovermenuPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_groupPopoverMenu_groupPopoverMenu__["a" /* GroupPopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_78__pages_pendingStoriesPosts_pendingStoriesPosts__["a" /* PendingStoriesPostsPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_attendence_attendence__["a" /* Attendence */],
                __WEBPACK_IMPORTED_MODULE_80__pages_attendancePopoverMenu_attendancePopoverMenu__["a" /* AttendancePopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_81__pages_attendanceDateRange_attendanceDateRange__["a" /* AttendanceDateRange */],
                __WEBPACK_IMPORTED_MODULE_82__pages_awardMultiStudent_awardMultiStudent__["a" /* AwardMultiStudent */],
                __WEBPACK_IMPORTED_MODULE_83__pages_viewReport_viewReport__["a" /* ViewReport */],
                __WEBPACK_IMPORTED_MODULE_84__pages_performanceReport_performanceReport__["a" /* PerformanceReport */],
                __WEBPACK_IMPORTED_MODULE_85__pages_smileyIcon_smileyIcon__["a" /* SmileyIcon */],
                __WEBPACK_IMPORTED_MODULE_87__pages_parentkidList_parentkidList__["a" /* ParentkidListPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_performPopoverMenu_performPopoverMenu__["a" /* PerformPopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_90__pages_parentpostComment_parentpostComment__["a" /* parentpostCommentPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_parentstoriesLikes_parentstoriesLikes__["a" /* ParentstoryLikesPage */],
                __WEBPACK_IMPORTED_MODULE_92__pages_changeSchool_changeSchool__["a" /* ChangeSchool */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_86_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_89_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_studentSignup_studentSignup__["a" /* StudentSignup */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgotPassword_forgotPassword__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_teachersignup_teachersignup__["a" /* TeacherSignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_schoolleadersignup_schoolleadersignup__["a" /* SchoolLeaderSignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_parentsignup_parentsignup__["a" /* ParentSignupPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_studentSignupPage_studentSignupPage__["a" /* StudentSignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_dashboard_dashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_24__pages_classStory_classStory__["a" /* ClassStory */],
                __WEBPACK_IMPORTED_MODULE_25__pages_studentInvite_studentInvite__["a" /* StudentInvite */],
                __WEBPACK_IMPORTED_MODULE_26__pages_parentcodecheck_parentcodecheck__["a" /* ParentcodecheckPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_tutorialSlide_tutorialSlide__["a" /* TutorialSlide */],
                __WEBPACK_IMPORTED_MODULE_28__pages_eventManagement_eventManagement__["a" /* EventManagement */],
                __WEBPACK_IMPORTED_MODULE_29__pages_referTeacher_referTeacher__["a" /* ReferTeacher */],
                __WEBPACK_IMPORTED_MODULE_30__pages_parentMessage_parentMessage__["a" /* ParentMessagePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_yourkids_yourkids__["a" /* YourkidsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_studentStory_studentStory__["a" /* StudentStory */],
                __WEBPACK_IMPORTED_MODULE_32__pages_joinSchool_joinSchool__["a" /* JoinSchool */],
                __WEBPACK_IMPORTED_MODULE_34__pages_popoverPageStudent_popoverPageStudent__["a" /* PopoverPageStudent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_addNewClass_addNewClass__["a" /* AddNewClass */],
                __WEBPACK_IMPORTED_MODULE_36__pages_schoolStory_schoolStory__["a" /* SchoolStory */],
                __WEBPACK_IMPORTED_MODULE_40__pages_parentdashboard_parentdashboard__["a" /* ParentDashboard */],
                __WEBPACK_IMPORTED_MODULE_41__pages_teacherClasstab_teacherClasstab__["a" /* TeacherClasstab */],
                __WEBPACK_IMPORTED_MODULE_42__pages_teacherMessage_teacherMessage__["a" /* TeacherMessagePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_teacherClassroom_teacherClassroom__["a" /* TeacherClassroomPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_teacherClassstory_teacherClassstory__["a" /* TeacherClassstoryPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_studentAccountSetting_studentAccountSetting__["a" /* StudentAccountSetting */],
                __WEBPACK_IMPORTED_MODULE_38__pages_studentSideMenu_studentSideMenu__["a" /* StudentSideMenu */],
                __WEBPACK_IMPORTED_MODULE_39__pages_studentTab_studentTab__["a" /* StudentTab */],
                __WEBPACK_IMPORTED_MODULE_40__pages_parentdashboard_parentdashboard__["a" /* ParentDashboard */],
                __WEBPACK_IMPORTED_MODULE_45__pages_inviteparents_inviteparents__["a" /* InviteparentsPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_schoolTeacherlist_schoolTeacherlist__["a" /* SchoolTeacherlist */],
                __WEBPACK_IMPORTED_MODULE_48__pages_teacherClassStoryPosts_teacherClassStoryPosts__["a" /* TeacherClassstoryPostsPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_addclassstoryPost_addclassstoryPost__["a" /* AddclassstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_classIcon_classIcon__["a" /* ClassIcon */],
                __WEBPACK_IMPORTED_MODULE_50__pages_classstoryComment_classstoryComment__["a" /* ClassstoryCommentPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__["a" /* ClassStoryPopovermenuPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_editclassstoryPost_editclassstoryPost__["a" /* EditclassstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_addStudent_addStudent__["a" /* AddStudent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_changePassword_changePassword__["a" /* ChangePassword */],
                __WEBPACK_IMPORTED_MODULE_55__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_56__pages_addSchool_addSchool__["a" /* AddSchool */],
                __WEBPACK_IMPORTED_MODULE_57__pages_editStudent_editStudent__["a" /* EditStudent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_shareSchoolInfo_shareSchoolInfo__["a" /* ShareSchoolInfo */],
                __WEBPACK_IMPORTED_MODULE_58__pages_teacherSchoolstoryPopovermenu_teacherSchoolstoryPopovermenu__["a" /* SchoolStoryPopovermenuPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_teacherList_teacherList__["a" /* TeacherList */],
                __WEBPACK_IMPORTED_MODULE_60__pages_addSchoolstoryPost_addSchoolstoryPost__["a" /* AddSchoolstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__["a" /* SchoolStoryupdatePopoverPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_editschoolstoryPost_editschoolstoryPost__["a" /* EditSchoolstoryPostPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_schoolstoryComment_schoolstoryComment__["a" /* SchoolstoryCommentPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_group_group__["a" /* Group */],
                __WEBPACK_IMPORTED_MODULE_66__pages_studentPopoverMenu_studentPopoverMenu__["a" /* StudentPopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_67__pages_addGroup_addGroup__["a" /* AddGroup */],
                __WEBPACK_IMPORTED_MODULE_68__pages_awardGroup_awardGroup__["a" /* AwardGroup */],
                __WEBPACK_IMPORTED_MODULE_69__pages_giveGroupfeedback_giveGroupfeedback__["a" /* GiveGroupfeedback */],
                __WEBPACK_IMPORTED_MODULE_70__pages_classstoryLikes_classstoryLikes__["a" /* ClassstoryLikesPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_schoolstoryLikes_schoolstoryLikes__["a" /* SchoolstoryLikesPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_chat_chat__["a" /* Chat */],
                __WEBPACK_IMPORTED_MODULE_73__pages_pendingStories_pendingStories__["a" /* PendingStories */],
                __WEBPACK_IMPORTED_MODULE_74__pages_editClass_editClass__["a" /* EditClass */],
                __WEBPACK_IMPORTED_MODULE_75__pages_editSkills_editSkills__["a" /* EditSkills */],
                __WEBPACK_IMPORTED_MODULE_76__pages_teacherClassroomPopovermenu_teacherClassroomPopovermenu__["a" /* ClassroomPopovermenuPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_groupPopoverMenu_groupPopoverMenu__["a" /* GroupPopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_78__pages_pendingStoriesPosts_pendingStoriesPosts__["a" /* PendingStoriesPostsPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_attendence_attendence__["a" /* Attendence */],
                __WEBPACK_IMPORTED_MODULE_80__pages_attendancePopoverMenu_attendancePopoverMenu__["a" /* AttendancePopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_81__pages_attendanceDateRange_attendanceDateRange__["a" /* AttendanceDateRange */],
                __WEBPACK_IMPORTED_MODULE_82__pages_awardMultiStudent_awardMultiStudent__["a" /* AwardMultiStudent */],
                __WEBPACK_IMPORTED_MODULE_83__pages_viewReport_viewReport__["a" /* ViewReport */],
                __WEBPACK_IMPORTED_MODULE_84__pages_performanceReport_performanceReport__["a" /* PerformanceReport */],
                __WEBPACK_IMPORTED_MODULE_85__pages_smileyIcon_smileyIcon__["a" /* SmileyIcon */],
                __WEBPACK_IMPORTED_MODULE_87__pages_parentkidList_parentkidList__["a" /* ParentkidListPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_performPopoverMenu_performPopoverMenu__["a" /* PerformPopoverMenu */],
                __WEBPACK_IMPORTED_MODULE_90__pages_parentpostComment_parentpostComment__["a" /* parentpostCommentPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_parentstoriesLikes_parentstoriesLikes__["a" /* ParentstoryLikesPage */],
                __WEBPACK_IMPORTED_MODULE_92__pages_changeSchool_changeSchool__["a" /* ChangeSchool */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = {
    "port": 3000,
    "envMode": "development",
    "api_url": "http://182.76.98.134",
    "api_token": "aforetechnical@321!",
    "image_url": "http://182.76.98.134/stagingclassgenie_node_api/",
    "page_size": "10",
    "file_url": "http://182.76.98.134/stagingclassgenie_node_api/",
    "image_path": "assets/",
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolStoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchoolStoryService = (function () {
    function SchoolStoryService(http, fileTransfer) {
        this.http = http;
        this.fileTransfer = fileTransfer;
    }
    SchoolStoryService.prototype.getSchoolstory = function (school_id, pagecount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/allpostschoolstory?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + "&school_id=" + school_id + "&page_number=" + pagecount)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.addschoolstoryPost = function (item, member_no, school_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/savemsgpost', { token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(),
                school_id: school_id,
                message: item.message,
                teacher_ac_no: member_no,
                sender_ac_no: member_no })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.getSchoolstory_id = function (story_id, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/allcommentDetail?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + "&story_id=" + story_id + "&teacher_ac_no=" + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.updateSchoolstoryPost = function (story_id, item, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/update', { token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(), id: story_id, message: item, sender_ac_no: member_no })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.deleteSchoolstoryPost = function (storyId, member_no) {
        var _this = this;
        console.log(storyId);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/delete', { token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(), id: storyId, teacher_ac_no: member_no })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.loadComment = function (story_id, member_no) {
        var _this = this;
        console.log(story_id, member_no);
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/allcommentDetail?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + "&story_id=" + story_id + "&teacher_ac_no=" + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.saveComment = function (story_id, member_no, data, school_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/comment', { token: __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken(), story_id: story_id, member_no: member_no, school_id: school_id, comment: data.message, sender_ac_no: member_no })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService.prototype.Likelist = function (school_id, story_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schoolstory/likesList?token=' + __WEBPACK_IMPORTED_MODULE_5__app_function__["a" /* global_function */].getToken() + "&story_id=" + story_id + "&school_id=" + school_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolStoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], SchoolStoryService);
    return SchoolStoryService;
}());

//# sourceMappingURL=schoolStory.service.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, network, alertCtrl, device, http, push) {
        var _this = this;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.device = device;
        this.http = http;
        this.push = push;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            console.log('Device UUID is: ' + _this.device.uuid);
            _this.checkNetworkConnection();
            statusBar.styleDefault();
            splashScreen.hide();
            _this.getToken();
            _this.pushsetup();
        });
    }
    //Check network connection
    MyApp.prototype.checkNetworkConnection = function () {
        var _this = this;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            var alert = _this.alertCtrl.create({
                message: 'The internet is disconnected on your device.',
                buttons: [{
                        text: 'ok',
                        handler: function () {
                            alert.dismiss();
                            return false;
                        }
                    }]
            });
            alert.present();
        });
    };
    MyApp.prototype.getToken = function () {
        this.http.get(__WEBPACK_IMPORTED_MODULE_10__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_10__assets_json_config__["a" /* data */].port + '/return_token')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            window.localStorage.setItem('app_token', res['token']);
        }, function (err) {
        });
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '458889188965'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            //do whatever you want with the registration ID
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\app\app.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentstoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentstoryService = (function () {
    function StudentstoryService(http) {
        this.http = http;
    }
    StudentstoryService.prototype.getclassid = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/classlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&member_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentstoryService.prototype.getlist = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/studentlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&student_ac_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    StudentstoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StudentstoryService);
    return StudentstoryService;
}());

//# sourceMappingURL=studentStory.service.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidsListServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KidsListServices = (function () {
    function KidsListServices(http) {
        this.http = http;
    }
    KidsListServices.prototype.getKidsList = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/parent/kidslist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&parent_ac_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    KidsListServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], KidsListServices);
    return KidsListServices;
}());

//# sourceMappingURL=kidsList.service.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherSignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherSignupService = (function () {
    function TeacherSignupService(http) {
        this.http = http;
    }
    TeacherSignupService.prototype.saveTeacher = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/teacher', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), name: data.username, phone: data.number, email: data.email, usertype: "2", password: data.password })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherSignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeacherSignupService);
    return TeacherSignupService;
}());

//# sourceMappingURL=teachersSignup.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolService = (function () {
    function SchoolService(http) {
        this.http = http;
    }
    SchoolService.prototype.saveschool = function (itemData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/addschoolslist', {
                token: __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_token,
                school_name: itemData.schoolname,
                address: itemData.address,
                city: itemData.city,
                state: itemData.state,
                country: itemData.country,
                pincode: itemData.pin,
                phone: itemData.phone,
                email_id: itemData.email,
                web_url: itemData.site,
                member_no: itemData.member_no
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolService.prototype.approveSchool = function (school_name, teacher_name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/sendmail?token=' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_token + '&teacher_name=' + teacher_name + '&school_name=' + school_name + '&id=' + 6)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SchoolService);
    return SchoolService;
}());

//# sourceMappingURL=school.service.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherListService = (function () {
    function TeacherListService(http) {
        this.http = http;
    }
    TeacherListService.prototype.getTeacherlist = function (school_id, pageCount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/teacherlistlimit?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&school_id=' + school_id + '&page_number=' + pageCount)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherListService.prototype.approoveTeacher = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/schools/teacherapprove', param)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherListService.prototype.removeTeacher = function (param) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/teacher/delete', param)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeacherListService);
    return TeacherListService;
}());

//# sourceMappingURL=teacherList.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeSchoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangeSchoolService = (function () {
    function ChangeSchoolService(http) {
        this.http = http;
    }
    ChangeSchoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ChangeSchoolService);
    return ChangeSchoolService;
}());

//# sourceMappingURL=changeSchool.service.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherMassageServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherMassageServices = (function () {
    function TeacherMassageServices(http) {
        this.http = http;
    }
    TeacherMassageServices.prototype.getStudentMessgList = function (datas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/studentmessagelist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&class_id=' + datas + '&sort_by=A')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherMassageServices.prototype.teacherChat_notification = function (data, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/teacher/chat_notification?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&notification_sender_ac_no=' + data + '&receiver_ac_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    TeacherMassageServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TeacherMassageServices);
    return TeacherMassageServices;
}());

//# sourceMappingURL=teacherMassage.service.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 298,
	"./af.js": 298,
	"./ar": 299,
	"./ar-dz": 300,
	"./ar-dz.js": 300,
	"./ar-kw": 301,
	"./ar-kw.js": 301,
	"./ar-ly": 302,
	"./ar-ly.js": 302,
	"./ar-ma": 303,
	"./ar-ma.js": 303,
	"./ar-sa": 304,
	"./ar-sa.js": 304,
	"./ar-tn": 305,
	"./ar-tn.js": 305,
	"./ar.js": 299,
	"./az": 306,
	"./az.js": 306,
	"./be": 307,
	"./be.js": 307,
	"./bg": 308,
	"./bg.js": 308,
	"./bm": 309,
	"./bm.js": 309,
	"./bn": 310,
	"./bn.js": 310,
	"./bo": 311,
	"./bo.js": 311,
	"./br": 312,
	"./br.js": 312,
	"./bs": 313,
	"./bs.js": 313,
	"./ca": 314,
	"./ca.js": 314,
	"./cs": 315,
	"./cs.js": 315,
	"./cv": 316,
	"./cv.js": 316,
	"./cy": 317,
	"./cy.js": 317,
	"./da": 318,
	"./da.js": 318,
	"./de": 319,
	"./de-at": 320,
	"./de-at.js": 320,
	"./de-ch": 321,
	"./de-ch.js": 321,
	"./de.js": 319,
	"./dv": 322,
	"./dv.js": 322,
	"./el": 323,
	"./el.js": 323,
	"./en-au": 324,
	"./en-au.js": 324,
	"./en-ca": 325,
	"./en-ca.js": 325,
	"./en-gb": 326,
	"./en-gb.js": 326,
	"./en-ie": 327,
	"./en-ie.js": 327,
	"./en-nz": 328,
	"./en-nz.js": 328,
	"./eo": 329,
	"./eo.js": 329,
	"./es": 330,
	"./es-do": 331,
	"./es-do.js": 331,
	"./es-us": 332,
	"./es-us.js": 332,
	"./es.js": 330,
	"./et": 333,
	"./et.js": 333,
	"./eu": 334,
	"./eu.js": 334,
	"./fa": 335,
	"./fa.js": 335,
	"./fi": 336,
	"./fi.js": 336,
	"./fo": 337,
	"./fo.js": 337,
	"./fr": 338,
	"./fr-ca": 339,
	"./fr-ca.js": 339,
	"./fr-ch": 340,
	"./fr-ch.js": 340,
	"./fr.js": 338,
	"./fy": 341,
	"./fy.js": 341,
	"./gd": 342,
	"./gd.js": 342,
	"./gl": 343,
	"./gl.js": 343,
	"./gom-latn": 344,
	"./gom-latn.js": 344,
	"./gu": 345,
	"./gu.js": 345,
	"./he": 346,
	"./he.js": 346,
	"./hi": 347,
	"./hi.js": 347,
	"./hr": 348,
	"./hr.js": 348,
	"./hu": 349,
	"./hu.js": 349,
	"./hy-am": 350,
	"./hy-am.js": 350,
	"./id": 351,
	"./id.js": 351,
	"./is": 352,
	"./is.js": 352,
	"./it": 353,
	"./it.js": 353,
	"./ja": 354,
	"./ja.js": 354,
	"./jv": 355,
	"./jv.js": 355,
	"./ka": 356,
	"./ka.js": 356,
	"./kk": 357,
	"./kk.js": 357,
	"./km": 358,
	"./km.js": 358,
	"./kn": 359,
	"./kn.js": 359,
	"./ko": 360,
	"./ko.js": 360,
	"./ky": 361,
	"./ky.js": 361,
	"./lb": 362,
	"./lb.js": 362,
	"./lo": 363,
	"./lo.js": 363,
	"./lt": 364,
	"./lt.js": 364,
	"./lv": 365,
	"./lv.js": 365,
	"./me": 366,
	"./me.js": 366,
	"./mi": 367,
	"./mi.js": 367,
	"./mk": 368,
	"./mk.js": 368,
	"./ml": 369,
	"./ml.js": 369,
	"./mr": 370,
	"./mr.js": 370,
	"./ms": 371,
	"./ms-my": 372,
	"./ms-my.js": 372,
	"./ms.js": 371,
	"./mt": 373,
	"./mt.js": 373,
	"./my": 374,
	"./my.js": 374,
	"./nb": 375,
	"./nb.js": 375,
	"./ne": 376,
	"./ne.js": 376,
	"./nl": 377,
	"./nl-be": 378,
	"./nl-be.js": 378,
	"./nl.js": 377,
	"./nn": 379,
	"./nn.js": 379,
	"./pa-in": 380,
	"./pa-in.js": 380,
	"./pl": 381,
	"./pl.js": 381,
	"./pt": 382,
	"./pt-br": 383,
	"./pt-br.js": 383,
	"./pt.js": 382,
	"./ro": 384,
	"./ro.js": 384,
	"./ru": 385,
	"./ru.js": 385,
	"./sd": 386,
	"./sd.js": 386,
	"./se": 387,
	"./se.js": 387,
	"./si": 388,
	"./si.js": 388,
	"./sk": 389,
	"./sk.js": 389,
	"./sl": 390,
	"./sl.js": 390,
	"./sq": 391,
	"./sq.js": 391,
	"./sr": 392,
	"./sr-cyrl": 393,
	"./sr-cyrl.js": 393,
	"./sr.js": 392,
	"./ss": 394,
	"./ss.js": 394,
	"./sv": 395,
	"./sv.js": 395,
	"./sw": 396,
	"./sw.js": 396,
	"./ta": 397,
	"./ta.js": 397,
	"./te": 398,
	"./te.js": 398,
	"./tet": 399,
	"./tet.js": 399,
	"./th": 400,
	"./th.js": 400,
	"./tl-ph": 401,
	"./tl-ph.js": 401,
	"./tlh": 402,
	"./tlh.js": 402,
	"./tr": 403,
	"./tr.js": 403,
	"./tzl": 404,
	"./tzl.js": 404,
	"./tzm": 405,
	"./tzm-latn": 406,
	"./tzm-latn.js": 406,
	"./tzm.js": 405,
	"./uk": 407,
	"./uk.js": 407,
	"./ur": 408,
	"./ur.js": 408,
	"./uz": 409,
	"./uz-latn": 410,
	"./uz-latn.js": 410,
	"./uz.js": 409,
	"./vi": 411,
	"./vi.js": 411,
	"./x-pseudo": 412,
	"./x-pseudo.js": 412,
	"./yo": 413,
	"./yo.js": 413,
	"./zh-cn": 414,
	"./zh-cn.js": 414,
	"./zh-hk": 415,
	"./zh-hk.js": 415,
	"./zh-tw": 416,
	"./zh-tw.js": 416
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 553;

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.editProfile = function (data, memberno) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/student/update', {
                token: __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_token,
                member_no: memberno,
                name: data.name
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProfileService.prototype.deleteAccount = function (type, memberno) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/' + type + '/delete', {
                token: __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_token,
                member_no: memberno
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordService = (function () {
    function ChangePasswordService(http) {
        this.http = http;
    }
    ChangePasswordService.prototype.updatepassword = function (item, member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/changepassword/update', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                password: item.currpass,
                newpassword: item.newpass,
                confirmpassword: item.confirmpass,
                member_no: member_no
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChangePasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ChangePasswordService);
    return ChangePasswordService;
}());

//# sourceMappingURL=changePassword.service.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolleaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchoolleaderService = (function () {
    function SchoolleaderService(http) {
        this.http = http;
    }
    SchoolleaderService.prototype.saveSchoolleader = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/teacher', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), name: data.username, phone: data.number, email: data.email, usertype: data.selectGrade, password: data.password })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SchoolleaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SchoolleaderService);
    return SchoolleaderService;
}());

//# sourceMappingURL=schoolLeaderSignup.service.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordService = (function () {
    function ForgotPasswordService(http) {
        this.http = http;
        this.item = {};
    }
    ForgotPasswordService.prototype.forgotPassword = function (data) {
        var _this = this;
        {
            var id = '';
            var param = '';
            if (data.email.indexOf('@') != '-1') {
                param = 'email';
                id = '10';
            }
            else {
                param = 'username';
                id = '17';
            }
            return new Promise(function (resolve, reject) {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/sendmail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&' + param + '=' + data.email + '&id=' + id)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        }
    };
    ForgotPasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ForgotPasswordService);
    return ForgotPasswordService;
}());

//# sourceMappingURL=forgotpassword.service.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.doLogin = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/login?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&email=' + data.username + '&password=' + data.password)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentSignup_studentSignup__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__studentSignup_studentSignup__["a" /* StudentSignup */];
        this.login = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n\n\n\n\n    \n\n  <button [navPush]="tab2Root">Go To Student Signup</button>\n\n\n\n  <button  [navPush]="login">Login </button>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentSideMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentSideMenu = (function () {
    function StudentSideMenu(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    StudentSideMenu.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    StudentSideMenu.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    StudentSideMenu.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    StudentSideMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentSideMenu\studentSideMenu.html"*/`<ion-header>\n\n  <ion-navbar>\n\n   <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\' ></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Tutorialsplane\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item>\n\n        IONIC\n\n    </ion-item>\n\n    <ion-item>\n\n        PHP\n\n    </ion-item>\n\n    <ion-item>\n\n        Bootstrap\n\n    </ion-item>\n\n    <ion-item>\n\n        Materialize\n\n    </ion-item>\n\n    <ion-item>\n\n        jQuery\n\n    </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentSideMenu\studentSideMenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], StudentSideMenu);
    return StudentSideMenu;
}());

//# sourceMappingURL=studentSideMenu.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addStudent_addStudent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editStudent_editStudent__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teacherClassroom_teacherClassroom__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Group = (function () {
    function Group(navCtrl, teacherClassroomService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.teacherClassroomService = teacherClassroomService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.addStudent = __WEBPACK_IMPORTED_MODULE_2__addStudent_addStudent__["a" /* AddStudent */];
        this.teacherClassroomPage = __WEBPACK_IMPORTED_MODULE_6__teacherClassroom_teacherClassroom__["a" /* TeacherClassroomPage */];
        this.item = {};
        this.groupList = [];
        this.imageBasePath = '';
    }
    Group.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.item.classname = window.localStorage.getItem('classname');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_5__assets_json_config__["a" /* data */].image_url;
        this.grouplisting();
    };
    Group.prototype.grouplisting = function () {
        var _this = this;
        this.teacherClassroomService.grouplisting(this.item.class_id).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.groupList = resp['group_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    Group.prototype.editStudentPage = function (id, name, imageName) {
        alert(name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editStudent_editStudent__["a" /* EditStudent */], { id: id, name: name, imageName: imageName });
    };
    Group.prototype.back = function () {
        window.localStorage.removeItem('classid');
        window.localStorage.removeItem('classname');
    };
    Group = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\group\group.html"*/`<ion-header>\n\n  <ion-navbar>  \n\n    <ion-title>    \n\n    <div class="login-g das">\n\n      {{item.classname}}\n\n    </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding >\n\n<div class="back-c">\n\n  <!-- tabs -->\n\n\n\n<!-- search code  here end-->\n\n\n\n<div class="class-section">\n\n<button ion-button outline class="kid-btn   width-c" [navPush]="teacherClassroom"> \n\n  Students\n\n </button>\n\n<button ion-button class="class-btn width-c"> \n\nGroups\n\n</button>\n\n</div>\n\n\n\n<!-- content -->\n\n<div class="class-sec">\n\n  <ion-grid>\n\n   <ion-row>\n\n\n\n      <!-- FOR STUDENT LIST -->\n\n      <ion-col width-25 *ngFor=" let gr of groupList" (tap)="editStudentPage(student.id,student.name,student.image)">\n\n        <div class="back-change change-back  room-high">\n\n          <a [navPush]="teachersignup">  <div class="redius_cont"><b class="ng-binding">{{gr.pointweight}}</b></div><img src=""> </a> \n\n          <p> {{gr.group_name}} </p>\n\n        </div>\n\n      </ion-col>\n\n       \n\n       <!-- FOR aDD STUDENT ICON --> \n\n      <ion-col width-25 >\n\n        <div class="back-change  change-back  room-high">\n\n          <a [navPush]="addStudent">  <ion-icon name="add"></ion-icon> </a> \n\n          <p> Add </p>\n\n        </div>\n\n      </ion-col>\n\n\n\n   </ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n</div>\n\n<!-- content end-->\n\n\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n<!-- footer code -->\n\n\n\n<ion-footer class="foooter-section">\n\n  <ion-toolbar>\n\n     <ion-grid>\n\n   <ion-row>\n\n <ion-col col-4>\n\n  <div class="">\n\n <a href=""><ion-icon name="calendar"></ion-icon>Attendance </a>\n\n</div>\n\n</ion-col>\n\n<ion-col col-4>\n\n <div class="footer">\n\n <a href=""><ion-icon ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>Award multiple </a>\n\n</div>\n\n</ion-col>\n\n  <ion-col col-4>\n\n    <div class="footer">\n\n <a href=""><ion-icon ios="ios-stats" md="md-stats"></ion-icon> View Report  </a>\n\n</div>\n\n  </ion-col>\n\n</ion-row>\n\n </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<!-- footer end -->\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\group\group.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_teacherClassroom_service__["a" /* TeacherClassroomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], Group);
    return Group;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global_function; });
var global_function = {
    "getLoader": function () {
        return '<ion-spinner name="circles"></ion-spinner>';
    },
    "randomNumber": function () {
        return Math.random();
    },
    "getToken": function () {
        return window.localStorage.getItem('app_token');
    }
};
//# sourceMappingURL=function.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherClasstab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__teacherMessage_teacherMessage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherClassroom_teacherClassroom__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacherClassstory_teacherClassstory__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherClasstab = (function () {
    function TeacherClasstab(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__teacherClassroom_teacherClassroom__["a" /* TeacherClassroomPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__teacherMessage_teacherMessage__["a" /* TeacherMessagePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__teacherClassstory_teacherClassstory__["a" /* TeacherClassstoryPage */];
        this.classid = navParams.get("classid");
        this.classname = navParams.get("classname");
        this.currentTab = navParams.get("currentTab");
        window.localStorage.setItem('classid', this.classid);
        window.localStorage.setItem('classname', this.classname);
        if (this.currentTab) {
            window.localStorage.setItem('currentTab', this.currentTab);
        }
    }
    TeacherClasstab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherClasstab\teacherClasstab.html"*/`\n\n\n\n<ion-content padding> \n\n<ion-tabs tabsPlacement="top">\n\n  <ion-tab [root]="tab1Root" tabTitle="Class Room" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Message" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Class Story" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherClasstab\teacherClasstab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */]])
    ], TeacherClasstab);
    return TeacherClasstab;
}());

//# sourceMappingURL=teacherClasstab.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherClassstoryPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addclassstoryPost_addclassstoryPost__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classstoryComment_classstoryComment__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classstoryLikes_classstoryLikes__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeacherClassstoryPostsPage = (function () {
    function TeacherClassstoryPostsPage(navCtrl, navParams, teacherclassstoryService, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacherclassstoryService = teacherclassstoryService;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.member_no = '';
        this.classid = '';
        this.loggedInUser = {};
        this.nameofsearch = '';
        this.pagecount = 1;
        this.concept = [];
        this.showmsg = true;
        this.items = [];
        this.searchTerm = '';
        this.postCount = '';
        this.addclasspost = __WEBPACK_IMPORTED_MODULE_4__addclassstoryPost_addclassstoryPost__["a" /* AddclassstoryPostPage */];
        this.classstorycomment = __WEBPACK_IMPORTED_MODULE_5__classstoryComment_classstoryComment__["a" /* ClassstoryCommentPage */];
        this.storyid = '';
        this.toggle = {};
        this.likes = '';
        this.like = '';
        this.imagePath = '';
        this.classstoryLike = __WEBPACK_IMPORTED_MODULE_7__classstoryLikes_classstoryLikes__["a" /* ClassstoryLikesPage */];
        this.imagePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path;
    }
    TeacherClassstoryPostsPage.prototype.ngOnInit = function () {
        this.parent_ac_no = this.navParams.get("parent_ac_no");
        this.student_no = this.navParams.get("student_no");
        window.localStorage.setItem('parent_ac_no', this.parent_ac_no);
        window.localStorage.setItem('student_no', this.student_no);
        this.showmsg = true;
        this.getAllPostStories();
    };
    TeacherClassstoryPostsPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 10);
    };
    TeacherClassstoryPostsPage.prototype.getRandom = function () {
        return Math.random();
    };
    TeacherClassstoryPostsPage.prototype.getAllPostStories = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        if (this.parent_ac_no === undefined) {
            this.teacherclassstoryService.getAllclassPosts(this.classid, this.member_no, this.pagecount).then(function (res) {
                if (res['status'] == "Success") {
                    _this.items = res['posts'];
                    var list = _this.items;
                    _this.postCount = res['posts']['length'];
                    for (var i = 0; i < _this.postCount; i++) {
                        var userImage;
                        userImage = res['posts'][i]['teacher_name']['image'];
                        if (userImage == '' || userImage == undefined) {
                            _this.items[i]['imgURI'] = "/assets/imgs/chat_user.png?" + _this.getRandom();
                        }
                        else {
                            _this.items[i]['imgURI'] = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path + 'profile_image' + userImage + '?' + _this.getRandom();
                        }
                        if (res['posts'][i]['status']) {
                            for (var j = 0; j < res['posts'][i]['status'].length; j++) {
                                if (res['posts'][i]['status'][j]['member_no'] == _this.member_no) {
                                    if (res['posts'][i]['status'][j]['status'] == '0')
                                        _this.items[i]['liked'] = 0;
                                    else
                                        _this.items[i]['liked'] = 1;
                                }
                                else {
                                    _this.items[i]['liked'] = 0;
                                }
                            }
                        }
                        else {
                            _this.items[i]['liked'] = 0;
                        }
                    }
                    console.log(_this.items);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.teacherclassstoryService.getAllclassPosts_student(this.classid, this.parent_ac_no, this.member_no, this.student_no).then(function (res) {
                if (res['status'] == "Success") {
                    _this.items = res['posts'];
                    var list = _this.items;
                    _this.postCount = res['posts']['length'];
                    for (var i = 0; i < _this.postCount; i++) {
                        var userImage;
                        userImage = res['posts'][i]['teacher_name']['image'];
                        if (userImage == '' || userImage == undefined) {
                            _this.items[i]['imgURI'] = "/assets/imgs/chat_user.png";
                        }
                        else {
                            _this.items[i]['imgURI'] = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path + 'profile_image' + userImage;
                        }
                        if (res['posts'][i]['status']) {
                            for (var j = 0; j < res['posts'][i]['status'].length; j++) {
                                if (res['posts'][i]['status'][j]['member_no'] == _this.member_no) {
                                    if (res['posts'][i]['status'][j]['status'] == '0')
                                        _this.items[i]['liked'] = 0;
                                    else
                                        _this.items[i]['liked'] = 1;
                                }
                                else {
                                    _this.items[i]['liked'] = 0;
                                }
                            }
                        }
                        else {
                            _this.items[i]['liked'] = 0;
                        }
                    }
                    console.log(_this.items);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    TeacherClassstoryPostsPage.prototype.addpost = function () {
        this.navCtrl.push(this.addclasspost);
    };
    /*
    
    openLikePage(data)
    {
    
    
    if (this.toggle[0].toLocaleString() =='true')
    {
      this.like = "+1";
      this.storyid = data.toLocaleString();
      this.teacherclassstoryService.likePost(this.storyid,this.class_id,this.like,this.member_no).then((res) => {
        if(res['status'] == "Success"){
                  
                }
    
               })
    
    
    } else {
      
    this.like = "-1";
    
      this.storyid = data.toLocaleString();
      this.teacherclassstoryService.likePost(this.storyid,this.class_id,this.like,this.member_no).then((res) => {
        if(res['status'] == "Success"){
                  
                }
    
               })
    }
        
    
    
    }
    
    */
    TeacherClassstoryPostsPage.prototype.openCommentPage = function (id) {
        this.navCtrl.push(this.classstorycomment, {
            storyid: id,
        });
    };
    TeacherClassstoryPostsPage.prototype.openposteditMenu = function (storyid, myEvent) {
        window.localStorage.setItem('postid', storyid);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__teacherClassstoryPopovermenu_teacherClassstoryPopovermenu__["a" /* ClassStoryPopovermenuPage */]);
        popover.present({
            ev: myEvent
        });
    };
    TeacherClassstoryPostsPage.prototype.openLikePage = function (id) {
        var profileModal = this.modalCtrl.create(this.classstoryLike, { storyid: id, classid: this.classid });
        profileModal.present();
    };
    TeacherClassstoryPostsPage.prototype.ionViewDidLoad = function () {
        this.getAllPostsearchStories();
    };
    TeacherClassstoryPostsPage.prototype.getAllPostsearchStories = function () {
        var _this = this;
        this.showmsg = true;
        this.classid = window.localStorage.getItem('classid');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        if (this.parent_ac_no === undefined) {
            this.teacherclassstoryService.getAllclasssearchPosts(this.classid, this.member_no, this.pagecount, this.searchTerm).then(function (res) {
                if (res['status'] == "Success") {
                    _this.items = res['posts'];
                    var list = _this.items;
                    _this.postCount = res['posts']['length'];
                    for (var i = 0; i < _this.postCount; i++) {
                        var userImage;
                        userImage = res['posts'][i]['teacher_name']['image'];
                        if (userImage == '' || userImage == "undefined") {
                            _this.items[i]['imgURI'] = "/assets/imgs/chat_user.png?" + _this.getRandom();
                        }
                        else {
                            _this.items[i]['imgURI'] = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_path + 'profile_image/' + userImage + '?' + _this.getRandom();
                        }
                        if (res['posts'][i]['status']) {
                            for (var j = 0; j < res['posts'][i]['status'].length; j++) {
                                if (res['posts'][i]['status'][j]['member_no'] == _this.member_no) {
                                    if (res['posts'][i]['status'][j]['status'] == '0')
                                        _this.items[i]['liked'] = 0;
                                    else
                                        _this.items[i]['liked'] = 1;
                                }
                                else {
                                    _this.items[i]['liked'] = 0;
                                }
                            }
                        }
                        else {
                            _this.items[i]['liked'] = 0;
                        }
                    }
                    console.log(_this.items);
                }
                else {
                    _this.showmsg = false;
                    _this.items = [];
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
        }
    };
    TeacherClassstoryPostsPage.prototype.video = function (videoId) {
        return this.imagePath + 'class_stories/' + videoId;
    };
    ;
    TeacherClassstoryPostsPage.prototype.removeDollerChar = function (string) {
        return string.replace('$', '?');
    };
    TeacherClassstoryPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassStoryPosts\teacherClassStoryPosts.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Class Genie\n\n       \n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n<ion-searchbar  [(ngModel)]="searchTerm" (ionInput)="getAllPostsearchStories($event)" placeholder=""></ion-searchbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-refresher\n\n      pulling-text="Pull to refresh..."\n\n      on-refresh="doRefresh()">\n\n      </ion-refresher>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh..."\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n<div class="back-c">\n\n<div class="m-school">\n\n<div class=" invite-f  story-h">\n\n<a class=""  (click)="addpost();" tappable>\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <ion-icon name="contact"></ion-icon> \n\n    <h3>What\'s happening in your classroom?</h3>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   <ion-icon name="camera"></ion-icon>\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</a>\n\n\n\n</div>\n\n</div> \n\n\n\n<div class="clear"></div>\n\n\n\n<div class="col col-100 no_post" *ngIf="showmsg==false">\n\n   <p style="" >No post available now..</p> \n\n   </div>\n\n\n\n<div class="m-school" *ngFor="let client of items ; let i = index">\n\n  \n\n<div class=" invite-f  story-h  scholl-list ">\n\n  <div class="border-b">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <img src="{{client.imgURI}}">\n\n    <h3>{{client.username}}</h3>\n\n     <h3 *ngIf="client.teacher_name.name!=\'\'"> {{client.teacher_name.name}}</h3>\n\n    <div class="story-c">\n\n    <p><ion-icon name="arrow-round-forward"></ion-icon>  {{client.class_name.class_name}}&nbsp;&nbsp;({{client.class_name.grade}}) </p>\n\n  </div>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   {{client.date}}\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</div>\n\n<div class="border-b1">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-12>\n\n  <div class="head-story">\n\n      <img class="full-image" *ngIf="client.ext ==\'jpg\'" src="{{imagePath}}{{client.image_folder}}{{removeDollerChar(client.image_new)}}" />\n\n\n\n      <div *ngIf="client.ext ==\'mp4\' || client.ext ==\'3gp\'">\n\n          <video src="{{video(client.image)}}" class="centerme" controls="controls" >\n\n          </video>\n\n          </div>\n\n    <h3>{{client.message}}</h3>\n\n  </div> \n\n  <div class="like-section">\n\n  <p>\n\n    <span>\n\n       <ion-icon name="checkmark-circle" (click) = "openLikePage(client.id);"></ion-icon> {{client.likes}} Likes\n\n    </span>\n\n      <span>\n\n       <ion-icon name="checkmark-circle"></ion-icon>\n\n  {{client.comment_count}} Comments\n\n    </span>\n\n  </p>\n\n  </div>\n\n </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</div>\n\n<!-- section end -->\n\n<!-- section satrt -->\n\n<div class="border-b0  like-section">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <ion-icon name="heart"></ion-icon> \n\n    <ion-icon name="chatboxes" (click)="openCommentPage(client.id);" tappable></ion-icon>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   <ion-icon name="more" (click)="openposteditMenu(client.id,$event);" *ngIf="pagestatus!=\'tabpending\'" tappable></ion-icon>\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</div>\n\n</div>\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\teacherClassStoryPosts\teacherClassStoryPosts.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], TeacherClassstoryPostsPage);
    return TeacherClassstoryPostsPage;
}());

//# sourceMappingURL=teacherClassStoryPosts.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentStory_studentStory__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentInvite_studentInvite__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentTab = (function () {
    function StudentTab(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__studentInvite_studentInvite__["a" /* StudentInvite */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__studentStory_studentStory__["a" /* StudentStory */];
    }
    StudentTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\studentTab\studentTab.html"*/` <ion-tabs tabbarPlacement="top">\n\n    <ion-tab [root]="tab1Root" tabTitle="Student Invite" tabIcon="information-circle"></ion-tab> \n\n    <ion-tab [root]="tab2Root" tabTitle="Story" tabIcon="information-circle"></ion-tab>   \n\n  </ion-tabs>`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\studentTab\studentTab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], StudentTab);
    return StudentTab;
}());

//# sourceMappingURL=studentTab.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassStory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parentdashboard_parentdashboard__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parentMessage_parentMessage__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yourkids_yourkids__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassStory = (function () {
    function ClassStory() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__parentdashboard_parentdashboard__["a" /* ParentDashboard */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__parentMessage_parentMessage__["a" /* ParentMessagePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__yourkids_yourkids__["a" /* YourkidsPage */];
    }
    ClassStory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\classStory\classStory.html"*/`\n\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n  	\n\n    <ion-title>\n\n      Class Genie\n\n      \n\n    </ion-title>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n \n\n<ion-tabs tabbarPlacement="top" >\n\n  <ion-tab [root]="tab1Root" tabTitle="Class Story" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Message" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Your Kids" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\classStory\classStory.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ClassStory);
    return ClassStory;
}());

//# sourceMappingURL=classStory.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentClassstoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParentClassstoryService = (function () {
    function ParentClassstoryService(http) {
        this.http = http;
    }
    ParentClassstoryService.prototype.getparentStories = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/parentstories?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&parent_ac_no=' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.getAllpostClassstories = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/allPost?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&parent_ac_no=' + data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.loaddata = function (classid, pagecount, parent_ac_no, nameofsearch) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/allPost?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&source=ac' + '&class_id=' + classid + "&page_number=" + pagecount + "&member_no=" + parent_ac_no + "&name=" + nameofsearch)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.parent_kidlist = function (parent_ac_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/parent/kidslist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&parent_ac_no=' + parent_ac_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.load_student_story = function (parent_ac_no, stud_no, nameofsearch, pagecount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/allPost?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&member_no=' + parent_ac_no + '&parent_ac_no=' + parent_ac_no + '&student_no=' + stud_no + "&name=" + nameofsearch + "&page_number=" + pagecount)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.loadcomment = function (storyId, memberNo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/commentDetail?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&story_id=" + storyId + "&teacher_ac_no=" + memberNo)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.saveComment = function (story_id, member_no, class_id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/comment', { token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(), story_id: story_id, member_no: member_no, class_id: class_id, comment: data.comment, sender_ac_no: member_no, student_no: "" })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService.prototype.Likelist = function (storyId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classstories/likesList?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + "&story_id=" + storyId)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ParentClassstoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ParentClassstoryService);
    return ParentClassstoryService;
}());

//# sourceMappingURL=parentClassstory.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_function__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getClassList = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo/dashboard?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&teacher_ac_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DashboardService.prototype.schoolvarify = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/teacher/search?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&member_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DashboardService.prototype.getGradeList = function (member_no) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classlist?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken() + '&teacher_ac_no=' + member_no)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /*Find the list of icon to choose for class */
    DashboardService.prototype.classIconPopup = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo?token=' + __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken())
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DashboardService.prototype.createNewClass = function (itemData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                class_name: itemData.className,
                image: itemData.imageName,
                grade: itemData.selectGrade,
                teacher_ac_no: itemData.member_no,
                school_id: itemData.schoolId
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DashboardService.prototype.updateClass = function (itemData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo/update', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                class_name: itemData.classname,
                image: itemData.imageName,
                grade: itemData.selectGrade,
                class_id: itemData.class_id,
                teacher_ac_no: itemData.member_no,
                school_id: itemData.schoolId
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DashboardService.prototype.removeClass = function (class_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].api_url + ':' + __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].port + '/classinfo/delete', {
                token: __WEBPACK_IMPORTED_MODULE_4__app_function__["a" /* global_function */].getToken(),
                class_id: class_id
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStudent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddStudent = (function () {
    function AddStudent(navCtrl, studentService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.item = {};
        this.class_studentlist = [];
        this.imageBasePath = '';
    }
    AddStudent.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url;
        this.studentlisting();
    };
    AddStudent.prototype.addStudent = function () {
        var _this = this;
        this.studentService.addStudent(this.item).then(function (resp) {
            if (resp['status'] == "Success") {
                var responseJson = resp['user_list'];
                var jsonObj = JSON.stringify(responseJson);
                window.localStorage.setItem('studentdata', jsonObj);
                _this.item.name = '';
                //load again the student list after adding to reflect it in listing      
                _this.studentlisting();
                var toast = _this.toastCtrl.create({
                    message: 'Student has been added successfully',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else if (resp['error_code'] == 1) {
                var alert_1 = _this.alertCtrl.create({
                    message: resp['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    message: 'Name already exist.',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddStudent.prototype.studentlisting = function () {
        var _this = this;
        this.studentService.studentlisting(this.item.class_id).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['class_details']['student_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddStudent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\addStudent\addStudent.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n  <div class="login-g das">\n\n    Add New Student\n\n <a  [navPush]="inviteparent" >  <ion-icon name="checkmark"></ion-icon>   </a>\n\n  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  >\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n\n\n<div class="m-school  new-border">\n\n<form #formStudent="ngForm" (submit)="addStudent()">\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-9>\n\n <!-- text box code  here-->\n\n    <ion-item>\n\n <ion-input type="text"  placeholder="Add new Student" name="name" required [(ngModel)]="item.name"></ion-input>\n\n  </ion-item>\n\n\n\n<!--text box code here end--> \n\n    </ion-col>\n\n        <ion-col col-3>\n\n     <button [disabled]="!formStudent.form.valid" ion-button color="orange"  class="button-block  save-btn">ADD\n\n     </button>\n\n        </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</form>\n\n\n\n  <ion-grid>\n\n    <ion-row *ngFor=" let student of class_studentlist">\n\n      <ion-col col-12>\n\n        <img src="{{imageBasePath}}assets/student/{{student.image}}"><h3>{{student.name}}</h3>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n<div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\addStudent\addStudent.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], AddStudent);
    return AddStudent;
}());

//# sourceMappingURL=addStudent.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolStory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacherSchoolstoryPopovermenu_teacherSchoolstoryPopovermenu__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_schoolStory_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addSchoolstoryPost_addSchoolstoryPost__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schoolstoryComment_schoolstoryComment__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schoolstoryLikes_schoolstoryLikes__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SchoolStory = (function () {
    function SchoolStory(navCtrl, schoolStoryService, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.schoolStoryService = schoolStoryService;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.schoolid = '';
        this.pagecount = 1;
        this.items = [];
        this.schoolname = '';
        this.member_no = '';
        this.loggedInUser = {};
        this.postCount = '';
        this.addSchoolstory = __WEBPACK_IMPORTED_MODULE_4__addSchoolstoryPost_addSchoolstoryPost__["a" /* AddSchoolstoryPostPage */];
        this.storyid = '';
        this.schoolstoryLike = __WEBPACK_IMPORTED_MODULE_7__schoolstoryLikes_schoolstoryLikes__["a" /* SchoolstoryLikesPage */];
        this.imagePath = '';
        this.imagePath = __WEBPACK_IMPORTED_MODULE_8__assets_json_config__["a" /* data */].file_url + __WEBPACK_IMPORTED_MODULE_8__assets_json_config__["a" /* data */].image_path;
    }
    SchoolStory.prototype.ngOnInit = function () {
        this.getAllPostSchoolStories();
    };
    SchoolStory.prototype.openSchoolMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__teacherSchoolstoryPopovermenu_teacherSchoolstoryPopovermenu__["a" /* SchoolStoryPopovermenuPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SchoolStory.prototype.getRandom = function () {
        return Math.random();
    };
    SchoolStory.prototype.getAllPostSchoolStories = function () {
        var _this = this;
        this.schoolid = window.localStorage.getItem('school_id');
        this.loggedInUser = window.localStorage.getItem('loggedInUser');
        this.loggedInUser = JSON.parse(this.loggedInUser);
        this.loggedInUser = this.loggedInUser[0];
        this.member_no = this.loggedInUser.member_no;
        this.schoolStoryService.getSchoolstory(this.schoolid, this.pagecount).then(function (res) {
            if (res['status'] == "Success") {
                _this.items = res['post'];
                _this.schoolname = res['school_name'][0]['school_name'];
                _this.postCount = res['post']['length'];
                for (var i = 0; i < _this.postCount; i++) {
                    if (res['post'][i]['like_status']) {
                        for (var j = 0; j < res['post'][i]['like_status']['length']; j++) {
                            if (res['post'][i]['like_status'][j]['member_no'] == _this.member_no) {
                                if (res['post'][i]['like_status'][j]['status'] == '0') {
                                    _this.items[i]['liked'] = 0;
                                }
                                else {
                                    _this.items[i]['liked'] = 1;
                                }
                            }
                            else {
                            }
                        }
                    }
                    else {
                        _this.items[i]['liked'] = 0;
                    }
                }
                _this.schoolname = res['school_name'][0]['school_name'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    SchoolStory.prototype.addpost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addSchoolstoryPost_addSchoolstoryPost__["a" /* AddSchoolstoryPostPage */]);
    };
    SchoolStory.prototype.openCommentPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__schoolstoryComment_schoolstoryComment__["a" /* SchoolstoryCommentPage */], {
            storyid: id,
        });
    };
    SchoolStory.prototype.openposteditMenu = function (storyid, myEvent) {
        window.localStorage.setItem('postid', storyid);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__teacherSchoolstoryupdatePopover_teacherSchoolstoryupdatePopover__["a" /* SchoolStoryupdatePopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SchoolStory.prototype.paging = function () {
        this.pagecount = this.pagecount + 1;
        this.getAllPostSchoolStories();
    };
    SchoolStory.prototype.openLikePage = function (id) {
        var profileModal = this.modalCtrl.create(this.schoolstoryLike, { storyid: id, schoolid: this.schoolid });
        profileModal.present();
    };
    SchoolStory.prototype.video = function (videoId) {
        return this.imagePath + 'school_stories/' + videoId;
    };
    ;
    SchoolStory.prototype.removeDollerChar = function (string) {
        return string.replace('$', '?');
    };
    SchoolStory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\schoolStory\schoolStory.html"*/`\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Class Genie\n\n       <button (click)="openSchoolMenu();" tappable>test</button>\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  \n\n<div class="back-c">\n\n<div class="m-school">\n\n<div class=" invite-f  story-h">\n\n  <a class=""  (click)="addpost();" tappable>\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <ion-icon name="contact"></ion-icon> \n\n    <h3>What\'s happening in your School?</h3>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   <ion-icon name="camera"></ion-icon>\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n </a>\n\n</div>\n\n</div> \n\n\n\n<div class="clear"></div>\n\n\n\n<div class="col col-100 no_post" *ngIf="showmsg==true">\n\n   <p style="" >No post available now..</p> \n\n   </div>\n\n\n\n<div class="m-school" *ngFor="let client of items ; let i = index">\n\n  \n\n<div class=" invite-f  story-h  scholl-list ">\n\n  <div class="border-b">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <img src="/assets/imgs/status_profile.png">\n\n    <h3>{{name}}</h3>\n\n      <div class="story-c">\n\n    <p><ion-icon name="arrow-round-forward"></ion-icon>{{schoolname}}</p>\n\n     <p><ion-icon name="arrow-round-forward"></ion-icon>({{client.teacher_name}}) </p>\n\n  </div>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   {{client.date}}\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</div>\n\n<div class="border-b1">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-12>\n\n  <div class="head-story">\n\n      <div *ngIf="client.ext ==\'jpg\'">\n\n          <img class="full-image" src="{{imagePath}}school_stories/{{removeDollerChar(client.image_new)}}" >\n\n       </div>\n\n       <div *ngIf="client.ext ==\'mp4\' || client.ext ==\'3gp\'">\n\n          <video src="{{video(client.image)}}" class="centerme" controls="controls" ></video>\n\n          </div>\n\n    <h3>{{client.message}}</h3>\n\n  </div>\n\n  <div class="like-section">\n\n  <p>\n\n    <span>\n\n       <ion-icon name="checkmark-circle" (click)="openLikePage(client.id);" tappable></ion-icon> {{client.likes}} Likes\n\n    </span>\n\n      <span>\n\n       <ion-icon name="checkmark-circle"></ion-icon>\n\n  {{client.comment_count}} Comments\n\n    </span>\n\n  </p>\n\n  </div>\n\n </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</div>\n\n<!-- section end -->\n\n<!-- section satrt -->\n\n<div class="border-b0  like-section">\n\n<ion-grid>\n\n  <ion-row>\n\n  <ion-col col-9>\n\n    <ion-icon name="heart"></ion-icon> \n\n    <ion-icon name="chatboxes" (click)="openCommentPage(client.id);" tappable></ion-icon>\n\n  </ion-col>\n\n  <ion-col col-3>\n\n   <div class="r-icon">\n\n   <ion-icon name="more" (click)="openposteditMenu(client.id,$event);" *ngIf="pagestatus!=\'tabpending\'" tappable></ion-icon>\n\n    </div>\n\n  </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</div>\n\n</div>\n\n\n\n\n\n</div>\n\n<div class="clearfix"></div>\n\n      \n\n      <button class="more-btn" (click)="paging();"  *ngIf="postCount>=10" tappable>More</button>\n\n\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\schoolStory\schoolStory.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_schoolStory_service__["a" /* SchoolStoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_schoolStory_service__["a" /* SchoolStoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], SchoolStory);
    return SchoolStory;
}());

//# sourceMappingURL=schoolStory.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteparentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InviteparentsPage = (function () {
    function InviteparentsPage(navCtrl, teacherclassstoryService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.teacherclassstoryService = teacherclassstoryService;
        this.alertCtrl = alertCtrl;
        this.class_studentlist = [];
        this.classid = '';
        this.totalstudent = '';
        this.items = [];
        this.connect = '';
        this.username = '';
        this.useremail = '';
        this.memberno = '';
        this.dashboard = __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* Dashboard */];
        var data = window.localStorage.getItem('loggedInUser');
        var student_list = JSON.parse(data);
        this.username = student_list[0]['username'];
        this.useremail = student_list[0]['email'];
        this.memberno = student_list[0]['member_no'];
    }
    InviteparentsPage.prototype.ngOnInit = function () {
        this.getClassStudentList();
    };
    InviteparentsPage.prototype.getClassStudentList = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.teacherclassstoryService.getclassStudentlist(this.classid).then(function (res) {
            _this.totalstudent = res['class_details']['student_list'].length;
            _this.class_studentlist = res['class_details']['student_list'];
            _this.items = _this.class_studentlist;
        }, function (err) {
            console.log(err);
        });
    };
    InviteparentsPage.prototype.inviteParent = function (id, student_no, parent_no, name) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Classgenie',
            subTitle: '<h4>Enter ' + name + "'s " + 'Parent Email address<h4>',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'parent email address',
                    type: 'email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Invite',
                    handler: function (inviteData) {
                        if (inviteData.email != '') {
                            _this.teacherclassstoryService.inviteTeacherParent(inviteData.email, name, student_no, parent_no).then(function (result) {
                                if (result['status'] == "Failure") {
                                    var alert_1 = _this.alertCtrl.create({
                                        message: result['comments'],
                                        buttons: [{
                                                text: 'ok',
                                                handler: function () {
                                                    alert_1.dismiss();
                                                    return false;
                                                }
                                            }]
                                    });
                                    alert_1.present();
                                }
                                else if (result['mail_flage'] == "teacher") {
                                    var alert_2 = _this.alertCtrl.create({
                                        message: 'This email id already exists as a teacher id',
                                        buttons: [{
                                                text: 'ok',
                                                handler: function () {
                                                    alert_2.dismiss();
                                                    return false;
                                                }
                                            }]
                                    });
                                    alert_2.present();
                                }
                                else {
                                    var alert_3 = _this.alertCtrl.create({
                                        message: 'invitation sent successfully  to ' + name + "'s" + ' parent',
                                        buttons: [{
                                                text: 'ok',
                                                handler: function () {
                                                    alert_3.dismiss();
                                                    return false;
                                                }
                                            }]
                                    });
                                    alert_3.present();
                                }
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        else {
                            var alert_4 = _this.alertCtrl.create({
                                message: 'Email Should not empty!!',
                                buttons: [{
                                        text: 'ok',
                                        handler: function () {
                                            alert_4.dismiss();
                                            return false;
                                        }
                                    }]
                            });
                            alert_4.present();
                        }
                    }
                }
            ]
        });
        alert.present();
        console.log(parent_no, name);
    };
    InviteparentsPage.prototype.generateInvitationPdf = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.teacherclassstoryService.pdfgenerate(this.memberno, this.classid).then(function (res) {
            if (res['status'] == "Success") {
                var alert_5 = _this.alertCtrl.create({
                    title: 'Class Genie',
                    subTitle: 'Great We just emailed the parent invites for class' + name + " to " + _this.useremail + ' .',
                    buttons: ['OK']
                });
                alert_5.present();
                _this.inviteAllParents();
            }
        }, function (err) {
            console.log(err);
        });
    };
    InviteparentsPage.prototype.inviteAllParents = function () {
        var _this = this;
        this.classid = window.localStorage.getItem('classid');
        this.teacherclassstoryService.inviteAllParents(this.memberno, this.classid).then(function (res) {
            if (res['status'] == "Success") {
                _this.navCtrl.popToRoot();
                _this.navCtrl.push(_this.dashboard).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    InviteparentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\inviteparents\inviteparents.html"*/`\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n    Invite Parent\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n<div class="back-c">\n\n<div class=" new-border  invite-p">\n\n<h3>You\'ve connected {{connected}} of {{totalstudent}} parents</h3> \n\n<div class="progress_bar meter">\n\n<div class="prog"></div>\n\n</div>\n\n<br/> \n\n<button ion-button color="orange"  class="button-block  save-btn  invite-btn" (click)="generateInvitationPdf()" tappable>\n\n            Download and print all invites\n\n          </button>\n\n<br/> \n\n</div>\n\n\n\n<div class="content-p  m-school  add-c  invite-mar">\n\n<div class="scholl-list  invite-f  border-b">\n\n<ion-grid>\n\n  <ion-row *ngFor="let item of items">\n\n  <ion-col col-9><img src="assets/imgs/school_icon.png"><h3>{{item.name}} </h3></ion-col>\n\n  <ion-col col-3>\n\n  <button ion-button outline item-end  class="btn-invite" (click) ="inviteParent(item.id,item.student_no,item.parent_no,item.name)"  *ngIf="item.request_status==\'0\'" tappable>Invite</button></ion-col>\n\n   <ion-col col-3><button ion-button outline item-end  class="btn-invite"  (click) ="inviteParent(item.id,item.student_no,item.parent_no,item.name)" *ngIf="item.request_status==\'-1\'" tappable>Invited</button></ion-col>\n\n  <ion-col col-3><button ion-button outline item-end  class="btn-invite" *ngIf="item.request_status==\'1\'" style="display:none">Invite</button></ion-col>\n\n</ion-row>\n\n </ion-grid>\n\n</div>\n\n</div>\n\n</div>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\inviteparents\inviteparents.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_teacherClassstory_service__["a" /* TeacherClassStoryServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], InviteparentsPage);
    return InviteparentsPage;
}());

//# sourceMappingURL=inviteparents.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStudent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_json_config__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditStudent = (function () {
    function EditStudent(navCtrl, studentService, alertCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.item = {};
        this.class_studentlist = [];
        this.imageBasePath = '';
    }
    EditStudent.prototype.ngOnInit = function () {
        this.item.class_id = window.localStorage.getItem('classid');
        this.imageBasePath = __WEBPACK_IMPORTED_MODULE_3__assets_json_config__["a" /* data */].image_url;
        this.studentlisting();
        this.item.id = this.navParams.get("id");
        this.item.name = this.navParams.get("id");
        this.item.id = this.navParams.get("id");
    };
    EditStudent.prototype.addStudent = function () {
        var _this = this;
        this.studentService.addStudent(this.item).then(function (resp) {
            if (resp['status'] == "Success") {
                var responseJson = resp['user_list'];
                var jsonObj = JSON.stringify(responseJson);
                window.localStorage.setItem('studentdata', jsonObj);
                _this.item.name = '';
                //load again the student list after adding to reflect it in listing      
                _this.studentlisting();
                var toast = _this.toastCtrl.create({
                    message: 'Student has been added successfully',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else if (resp['error_code'] == 1) {
                var alert_1 = _this.alertCtrl.create({
                    message: resp['error_msg'],
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_1.dismiss();
                                return false;
                            }
                        }]
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    message: 'Name already exist.',
                    buttons: [{
                            text: 'ok',
                            handler: function () {
                                alert_2.dismiss();
                                return false;
                            }
                        }]
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditStudent.prototype.studentlisting = function () {
        var _this = this;
        this.studentService.studentlisting(this.item.class_id).then(function (resp) {
            if (resp['status'] == "Success") {
                _this.class_studentlist = resp['class_details']['student_list'];
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditStudent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\classgenienew\src\pages\editStudent\editStudent.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n	  <div class="login-g das">\n\n		{{item.name}}\n\n	  </div>\n\n  </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!-- logo -->\n\n\n\n<!-- logo code -->\n\n\n\n<ion-content padding  >\n\n<div class="back-c">\n\n<!-- content -->\n\n\n\n\n\n<div class="m-school  new-border">\n\n<form #formStudent="ngForm" (submit)="addStudent()">\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-9>\n\n <!-- text box code  here-->\n\n    <ion-item>\n\n <ion-input type="text"  placeholder="Add new Student" name="name" required [(ngModel)]="item.name"></ion-input>\n\n  </ion-item>\n\n\n\n<!--text box code here end--> \n\n    </ion-col>\n\n        <ion-col col-3>\n\n     <button [disabled]="!formStudent.form.valid" ion-button color="orange"  class="button-block  save-btn">Save\n\n     </button>\n\n        </ion-col>\n\n  </ion-row>\n\n </ion-grid>\n\n</form>\n\n\n\n<div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<!-- content end-->\n\n</div>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\xampp\htdocs\classgenienew\src\pages\editStudent\editStudent.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditStudent);
    return EditStudent;
}());

//# sourceMappingURL=editStudent.js.map

/***/ })

},[435]);
//# sourceMappingURL=main.js.map