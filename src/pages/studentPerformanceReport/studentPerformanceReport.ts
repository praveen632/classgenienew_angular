import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, PopoverController, ModalController } from 'ionic-angular';
import * as func from '../../app/function';
import { StudentPerformanceServices } from '../../services/StudentPerformance.service';
import * as config  from '../../assets/json/config';
import { TeacherClasstab } from '../teacherClasstab/teacherClasstab';
import { DatePipe } from '@angular/common';
import { PerformPopoverMenu } from '../performPopoverMenu/performPopoverMenu';
import { AttendanceDateRange } from '../attendanceDateRange/attendanceDateRange';
import { BaseChartDirective } from 'ng2-charts';
import { ClassListpopover } from '../classListpopover/classListpopover';

@Component({    
  templateUrl: 'studentPerformanceReport.html',
  providers: [StudentPerformanceServices,DatePipe,BaseChartDirective]
})
export class  StudentPerformanceReport { 
 @ViewChild("baseChart") chart: BaseChartDirective;
  item:any = {};
  loading:any ;
  imageBasePath = '';
  reportList:any = [];
  doughnutChartType:string = '';
  doughnutChartLabels:string[] = [];
  doughnutChartData:any = [];
	chartColors: any = [{}];
	username:any;
	member_no:any;
	mylist_data = [];
	StudentNumber:any;
	studentCode:any;
	parentCode:any;
	allClass:any = 0;
	student_no:any;
	class_id:any;
	class_name:any

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

  constructor(public navCtrl: NavController, private studentPerformance: StudentPerformanceServices, private alertCtrl: AlertController, public navParams: NavParams, public loadingCtrl: LoadingController, public datePipe: DatePipe,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
	   
	}
	
  ngOnInit()
  {      	
    this.getReport();   
	}
	
	getReport(){
		this.imageBasePath = config.data.image_url;	
    this.item.loggedInUser = window.localStorage.getItem('loggedInUser');
		this.item.loggedInUser = JSON.parse(this.item.loggedInUser);
		this.username = this.item.loggedInUser[0]['username'];
		this.member_no = this.item.loggedInUser[0]['member_no'];
   	this.item.reportLabel  = 'This Month';
  	this.doughnutChartType = 'doughnut';
		this.doughnutChartLabels = ['Positive', 'Need Work'];
		this.StudentNumber = window.localStorage.getItem('studentNo');		
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
//get student list
  this.initLoading();
  this.loading.present();
	this.studentPerformance.getStudentList(this.member_no).then((resp) => {      
      if(resp['status'] == "Success")
      {
			this.loading.dismiss();
			 this.mylist_data = resp['student_list']; 
			 if((this.mylist_data).length > 0){				 
              if((this.StudentNumber) === null){
								window.localStorage.setItem('studentNo', resp['student_list'][0]['student_no']); 
								window.localStorage.setItem('parentcode', resp['student_list'][0]['parent_no']); 
							}
			 }
			 if((this.mylist_data).length > 0){	
					this.studentCode = resp['student_list'][0]['student_no'];
					this.parentCode = resp['student_list'][0]['parent_no'];
			 }
      }else{
				window.localStorage.removeItem('studentNo');
				window.localStorage.removeItem('parentcode');
	  }
    }, (err) => {
    console.log(err);
    });

	this.getPerformReport({datetoken:'thismonth',label:'This Month'})

	}

  initLoading()
  {
  	this.loading = this.loadingCtrl.create({
      content:func.global_function.getLoader()
    });
  }

  openPopover(myEvent)
  {
    let dataParam = {
      class_id:this.item.class_id 
    }
    let popover = this.popoverCtrl.create(PerformPopoverMenu,dataParam);    

    //callback function after close the popover
    popover.onDidDismiss(data => {
     
		//if datarange selected then call model pop for date range
		if(data && data['datetoken'] == 'dateRange')
		{
			this.openDateRangePop();
		}
		else if(data && data['datetoken'])
		{
			this.getPerformReport(data);
		}   

    });

    popover.present({
      ev: myEvent
    });
	}
	
	openClassList(myEvent){
		let dataParam = {
      stu_data:this.mylist_data 
    }
    let popover = this.popoverCtrl.create(ClassListpopover,dataParam);    

    //callback function after close the popover
    popover.onDidDismiss(data => {
     
			if(data['datetoken'] == 'thismonth')
			{				
				this.allClass = 0;
				this.getReport(); 
			}else if(data){
				this.allClass = 1;
				this.student_no = data['student_no'];
				this.class_id = data['class_id'];
				this.class_name = data['class_name'];
				this.getReport(); 
		}   

    });

    popover.present({
      ev: myEvent
    });
	}

  openDateRangePop()
  {

  	let popupDateRange = this.modalCtrl.create(AttendanceDateRange);
  	popupDateRange.onDidDismiss(data => {
     
		if(data && data['datetoken'])
		{
			this.getPerformReport(data);
		}   

    });
    popupDateRange.present();
  }
  
  getPerformReport(data)
  {
	  /*
		if we come from whole class then get whole class report
		else get student report.
		
		if there is student_no it means we came student report
	  */

	  //reset the graph data
	  this.doughnutChartData[0].data = [0, 0];	 
	  
	  if(data.datetoken != 'daterange')
	  {
		this.item.reportLabel = data.label;  
	  }
	  else{
		var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
		var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
		this.item.reportLabel = 'From '+startDate+' To '+endDate;    
	  }
		
	  if(this.allClass == 0)
	  {				
			this.getAllClassReport(data);				  
	  }else{
			this.getClassPerformReport(data);
	  }
	 
  }
  
  getAllClassReport(data)
  {
		if(data.datetoken == 'daterange')
	 {
		var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
		var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
	 }
	 else{
		var startDate = '';
		var endDate = ''; 
	 }
	 let dataParam = {
		member_no:this.member_no,
		datetoken:data.datetoken,
		startdate:startDate,	
		enddate:endDate
	 }
		
	 	this.reportList = [];		
	  this.studentPerformance.classreportlist(dataParam).then((resp) => {      
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
	

  getClassPerformReport(data)
  {
	 if(data.datetoken == 'daterange')
	 {
		var startDate = this.datePipe.transform(new Date(data.startDate), 'yyyy/MM/dd');
		var endDate = this.datePipe.transform(new Date(data.endDate), 'yyyy/MM/dd');
	 }
	 else{
		var startDate = '';
		var endDate = ''; 
	 }
	 
	 let dataParam = {
		class_id:this.class_id,	
		student_no:this.student_no,	
		datetoken:data.datetoken,
		startdate:startDate,	
		enddate:endDate
	 }

	this.reportList = [];
	this.studentPerformance.getStudentPerformReport(dataParam).then((resp) => {
    
      if(resp['status'] == "Success")
      {
        this.reportList = resp['point'];
				this.item.nocontent = 0;
				this.item.graph = 1;
				this.setupDataForChart();
      }else{		  
        this.item.nocontent = 1;
		    this.item.graph = 0;
	  }
    }, (err) => {
    console.log(err);
    }); 	 	 
	 
  }

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
