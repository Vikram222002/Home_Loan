import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { IncomeDetailService } from '../income-detail.service';
import { CustomerDetail } from '../Models/CustomerDetail';
import { IncomeDetail } from '../Models/IncomeDetail';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent implements OnInit {

  Income:IncomeDetail={
    incomeId:0,
    customerId:0,
    monthlyIncome:0,
    typeofEmployment:"",
    retirementAge:0,
    organizationType:"",
    employerName:""
  }
  Customer:CustomerDetail={
    customerId: 0,
    firstName: "" ,
    middleName:"",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dOB:new Date,
    gender: "",
    nationality: "",
    aadharNo:"",
    panNo: ""
};
  income:IncomeDetail[]=[];
  constructor(private service:CustomerDetailService,private service2:IncomeDetailService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
    this.service.getCustomerdetails(Id).subscribe(data=>
     {
       this.Customer=data;
     });
   
  }
  


  onSubmit(obj:any)
  {  this.Income=obj.value;
    this.service2.create(this.Income).subscribe(data=>{
      this.Income=data;
      sessionStorage.setItem("Income",JSON.stringify(this.Income));
      alert("Income Details successfully Submitted")
      this.route.navigateByUrl("userpage/:id/incomeform/:id/propertyform/"+this.Customer.customerId);
  
    });
  }
}



    