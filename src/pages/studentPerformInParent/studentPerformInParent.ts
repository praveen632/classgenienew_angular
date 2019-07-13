import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, PopoverController, ModalController } from 'ionic-angular';
import * as func from '../../app/function';
import { StudentPerformInParentService } from '../../services/studentPerformInParent.service';
import * as config  from '../../assets/json/config';
import { DatePipe } from '@angular/common';
import { PerformPopoverMenu } from '../performPopoverMenu/performPopoverMenu';
import { AttendanceDateRange } from '../attendanceDateRange/attendanceDateRange';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  templateUrl: 'studentPerformInParent.html',
  providers: [StudentPerformInParentService,DatePipe,BaseChartDirective]
})
export class StudentPerformInParent  implements OnInit{ 
  
  @ViewChild("baseChart") chart: BaseChartDirective;

  item:any = {};
  imageBasePath = '';
  currentTab = 'student';
  loading:any ;
  classList:any = [];
  reportList:any = [];
  attendanceList:any = [];
  formatedAttendList:any = [];

  doughnutChartType:string = '';
  doughnutChartLabels:string[] = [];
  doughnutChartData:any = [];
  chartColors: any = [{}];
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
            mode: 'nearest',
            callbacks: {
                label: function(tooltipItem, data) {

                let labelData = data.datasets[0].data[tooltipItem.index]; 
                let labelText = data.labels[tooltipItem.index];
                
                let customLabel = labelText+' - '+labelData+'%';
                return customLabel;
                
                }
            }
    }    
  };

  constructor(public navCtrl: NavController, private studentService: StudentPerformInParentService, private alertCtrl: AlertController, public navParams: NavParams, public loadingCtrl: LoadingController, public datePipe: DatePipe,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
    
  }

  ngOnInit()
  {
    this.item.stu_no = this.navParams.get("stu_no");
    this.item.stu_name = this.navParams.get("stu_name");
    this.item.stu_classId = this.navParams.get("stu_classId");
    this.item.stu_className = this.navParams.get("stu_className");
    this.item.datetoken = 'thismonth';
    this.item.reportLabel = 'This Month';
        
    this.imageBasePath = config.data.image_url;
     
    if(this.navParams.get("currentTab"))
    {
      this.currentTab = this.navParams.get("currentTab");      
    }    
    else
    {
      this.currentTab = 'perform';
    }
    
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
    }];

    this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
    this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
    this.item.parent_ac_no = this.item.loggedInUser[0].member_no;

    this.getStudentClassList();

    if(this.currentTab == 'attendance')
    {
      this.openAttenTab();
    }
    else
    {
      this.openPerformTab();
    }
    
  }

  initLoading()
  {
    this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  setHeaderSubtitle()
  {
    if(this.currentTab == 'attendance')
    {
      if(this.item.stu_className)
      {
         this.item.headerTitlePart = 'Attendance for '+this.item.stu_className;
      }
      else
      {
         this.item.headerTitlePart = 'Attendance for All Class';
      }
    }
    else
    {
      if(this.item.stu_className)
      {
         this.item.headerTitlePart = 'Performance for '+this.item.stu_className;
      }
      else
      {
         this.item.headerTitlePart = 'Performance for All Class';
      }

    }
  }

  openPerformTab()
  {
    this.currentTab = 'perform';
    this.item.datetoken = 'thismonth';
    this.item.reportLabel = 'This Month';
    this.item.dateRangeLabel = '';   
    this.getPerformanceReport();
  }
  openAttenTab()
  {
    this.currentTab = 'attendance'; 
    this.item.datetoken = 'daterange';
    this.item.reportLabel= 'Date Range';
    var startDate = this.datePipe.transform(new Date(), 'yyyy/MM/dd');

    var endDate = this.datePipe.transform(new Date(), 'yyyy/MM/dd');

    this.item.startDate = startDate;
    this.item.endDate = endDate;

    this.item.dateRangeLabel = 'From '+this.datePipe.transform(startDate, 'MM/dd/yyyy')+' To '+this.datePipe.transform(endDate, 'MM/dd/yyyy');  

    this.getAttendance();
  }

  getStudentClassList()
  {    

    this.studentService.getStudentClassList(this.item.parent_ac_no,this.item.stu_name).then((resp) => {
        
        if(resp['status'] == "Success")
        {
          this.classList =resp['class_list'];          
         
        }

    }, (err) => {
        console.log(err);
    });
  }

  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PerformPopoverMenu);

    //callback function after close the popover
    popover.onDidDismiss(data => {
     
    //if datarange selected then call model pop for date range
    if(data && data['datetoken'] == 'dateRange')
    {
      this.item.datetoken = 'daterange';
      this.item.reportLabel= 'Date Range';
      this.openDateRangePop();
    }
    else if(data && data['datetoken'])
    {
      this.item.datetoken = data['datetoken'];
      this.item.reportLabel = data['label'];
      this.item.dateRangeLabel = '';

      this.getPerformanceReport();
    }   

    });

    popover.present({
      ev: myEvent
    });
  } 

  back()
  {
    this.navCtrl.pop();
  }

  getSpecificClassData(stu_no,stu_classId,stu_className)
  {
    this.item.stu_no = stu_no;
    this.item.stu_classId = stu_classId;
    this.item.stu_className = stu_className;

    if(this.currentTab == 'attendance')
    {
      this.getAttendance();
    }
    else
    {
      this.getPerformanceReport();
    }
  }

  openDateRangePop()
  {

    let popupDateRange = this.modalCtrl.create(AttendanceDateRange);
    popupDateRange.onDidDismiss(data => {
     
    if(data && data['datetoken'])
    {
      if(data['datetoken'] == 'daterange')
      {
        this.item.reportLabel= 'Date Range';
        var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');

        var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');

        this.item.startDate = startDate;
        this.item.endDate = endDate;

        this.item.dateRangeLabel = 'From '+this.datePipe.transform(startDate, 'MM/dd/yyyy')+' To '+this.datePipe.transform(endDate, 'MM/dd/yyyy');
      }
      
      if(this.currentTab == 'attendance')
      {
        this.getAttendance();
      }
      else
      {
        this.getPerformanceReport();
      }
    }   

    });
    popupDateRange.present();
  }

  getAttendance()
  {
    //if no class selected then pic the first class from list
    if(!this.item.stu_classId)
    {
      this.item.stu_no = this.classList[0].student_no;
      this.item.stu_classId = this.classList[0]['class_list'].class_id;
      this.item.stu_className = this.classList[0]['class_list'].class_name;
    }
    this.setHeaderSubtitle();

    //this.initLoading();
    //this.loading.present();
    this.reportList = [];

    let startDate = this.datePipe.transform(new Date(this.item.startDate), 'yyyy/MM/dd');

    let endDate = this.datePipe.transform(new Date(this.item.endDate), 'yyyy/MM/dd');


    this.studentService.getStudentAttendance(this.item.stu_no,startDate,endDate).then((resp) => {
      
      //this.loading.dismiss();    
      
      if(resp['status'] == "Success")
      {
        this.attendanceList = resp['attandence_list'];    

        //format the data according to our need
        var diffInDays =  Math.floor(( Date.parse(endDate) - Date.parse(startDate) ) / 86400000);
       
        var attenDate = new Date(startDate);
      
        //reset the data
        this.formatedAttendList = [];
        for(let i=0;i<=diffInDays; i++)
        { 
          let formatedDate = this.datePipe.transform(new Date(attenDate), 'MM/dd/yyyy');

          var label = 'No Attendance';
          var attendImage = 'attendance_na.png';  
          var attendance = 'NA';
          var colorTxt = '';

          for(let k=0; k<(this.attendanceList).length; k++)
          {
            let formatedAttenDate =this.attendanceList[k].date;
           
            if(formatedAttenDate == this.datePipe.transform(new Date(formatedDate), 'dd/MM/yyyy'))
            {
              if(this.attendanceList[k].attendance == 'H')
              {
                var label = 'Holiday';
                var attendImage = 'attendance_h.png';
                var colorTxt = '#1A1815';
              }
              else if(this.attendanceList[k].attendance == 'P')
              {
                var label = 'Present';
                var attendImage = 'attendance_p.png';
                var colorTxt = '#10570A';
              }
              else if(this.attendanceList[k].attendance == 'A')
              {
                var label = 'Absent';
                var attendImage = 'attendance_a.png';
                var colorTxt = '#FF0303';
              }
              else if(this.attendanceList[k].attendance == 'L')
              {
                var label = 'Late';
                var attendImage = 'attendance_l.png';
                var colorTxt = '#FF9D00';
              }            

              attendance = this.attendanceList[k].attendance;
               
            }
            
          }
          
          this.formatedAttendList.push({'date':formatedDate,'label':label,'attendance':attendance,'image':attendImage,'colorTxt':colorTxt});
          attenDate.setDate(attenDate.getDate()+1);
       

        }

        console.log(this.formatedAttendList);

      }      

    }, (err) => {
      console.log(err);
    });    
  }

  getPerformanceReport()
  {
    this.setHeaderSubtitle();
    //reset the graph data
    this.doughnutChartData[0].data = [0, 0];

    var dataApiUrl = '';
    if(this.item.stu_classId)
    {
      dataApiUrl = '/report/student?token='+func.global_function.getToken();
    }
    else
    {
      dataApiUrl = '/report/all/student?token='+func.global_function.getToken();
    }
    if(this.item.stu_classId)
    {
      let class_id = (this.item.stu_classId).toString();
      dataApiUrl += '&class_id='+class_id;
    }
    if(this.item.stu_no)
    {
      let student_info_no = (this.item.stu_no).toString();
      dataApiUrl += '&student_info_no='+student_info_no;
    }
    if(this.item.parent_ac_no)
    {     
      dataApiUrl += '&parent_ac_no='+(this.item.parent_ac_no).toString();
    }
    if(this.item.stu_name)
    {     
      dataApiUrl += '&name='+(this.item.stu_name).toString();
    }
    if(this.item.datetoken)
    {     
      dataApiUrl += '&datetoken='+(this.item.datetoken).toString();
    }
    if(this.item.startDate)
    {     
      dataApiUrl += '&startdate='+this.item.startDate;
    }
    if(this.item.endDate)
    {     
      dataApiUrl += '&enddate='+this.item.endDate;
    }

    //this.initLoading();
    //this.loading.present();
    this.reportList = [];

    this.studentService.getStudentPerformReport(dataApiUrl).then((resp) => {
      
      //this.loading.dismiss();    
      
      if(resp['status'] == "Success")
      {
        this.reportList = resp['point'];
        this.item.nocontent = 0;
        this.item.graph = 1;
        this.setupDataForChart();
      }
    else{      
      this.item.nocontent = 1;
      this.item.graph = 0;
    }

    }, (err) => {
      console.log(err);
    });    
    
  }

  /*For graph */
  setupDataForChart()
  {
    /*run the loop to build data for chart*/
    var pos_total = 0;
    var need_total = 0;
    for(let i=0;i<(this.reportList).length;i++)
    {

    if(this.reportList[i].customize_detail.pointweight > 0)
    {              
      pos_total += this.reportList[i].customize_detail.pointweight;
    }
    else if(this.reportList[i].customize_detail.pointweight < 0)
    {
      need_total += this.reportList[i].customize_detail.pointweight;
    }
    }
     pos_total = Math.abs(pos_total);
     need_total = Math.abs(need_total);

     var positive_skill = Math.round((pos_total/(pos_total+need_total))*100);

     var needwork_skill = Math.round((need_total/(pos_total+need_total))*100);

     this.doughnutChartData[0].data = [positive_skill, needwork_skill];     
     
     if(this.chart !== undefined)
     {
       this.chart.ngOnDestroy();
       this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
   }
   
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



}
