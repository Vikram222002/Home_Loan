import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { DocumentService } from '../document.service';
import { IncomeDetailService } from '../income-detail.service';
import { LoanDetailService } from '../loan-detail.service';
import { CustomerDetail } from '../Models/CustomerDetail';
import { IncomeDetail } from '../Models/IncomeDetail';
import { Document } from '../Models/Document';
import { LoanDetail } from '../Models/LoanDetail';
import { PropertyDetail } from '../Models/PropertyDetail';
import { PropertyDetailsService } from '../property-detail.service';
import { delay, pipe } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})
export class LoanformComponent implements OnInit {

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
  Loanform:any;
  document:Document={
    documentId:0,
    customerId:0,
    panCard:"",
    voterId:"",
    salarySlip:"",
    lOA:"",
    nOCFromBuilder:"",
    agreementToSale:"",
};
  Property:PropertyDetail={propertyId:0,
    customerId:0,
    propertyLocation:"",
    propertyName:"",
    estimatedAmount:0
  }
  Income:IncomeDetail={
    incomeId:0,
    customerId:0,
    monthlyIncome:0,
    typeofEmployment:"",
    retirementAge:0,
    organizationType:"",
    employerName:"",
}
  
  constructor(private _service1:LoanDetailService,private _service2:CustomerDetailService,private _service3:DocumentService,private _service4:PropertyDetailsService,private _service5:IncomeDetailService,private route:Router, private active:ActivatedRoute) { };

  ngOnInit(): void {

    let Id=this.active.snapshot.params["id"];
   this._service2.getCustomerdetails(Id).subscribe(data=>
    {
      this.Customer=data;
    });
      console.log(this.Customer);
      let propertyStr: any = sessionStorage.getItem("Property"); 
      let incomeStr: any = sessionStorage.getItem("Income"); 
      let documentStr: any = sessionStorage.getItem("Document"); 
      if (propertyStr!=null) {
        this.Property = JSON.parse(propertyStr) as PropertyDetail;
    }
    if (incomeStr!==null) {
      this.Income = JSON.parse(incomeStr) as IncomeDetail;
  }
  if (documentStr!==null) {
    this.document = JSON.parse(documentStr) as Document;
}

     
      

  }
  onSubmit(obj:any)
  {
    this.Loanform=obj.value;
    this.Loanform.loanStatus="Sent For Verification";
    this.Loanform.incomeId=this.Income.incomeId;
    this.Loanform.documentId=this.document.documentId;
    this.Loanform.propertyId=this.Property.propertyId;
     this._service1.create(this.Loanform).subscribe(data=>
        {
          this.Loanform=data;
          let msg= "You have successfully sumbitted your application.\nYour application number is: "+data.applicationId;
          alert(msg)
          this.route.navigateByUrl("userpage/"+this.Customer.customerId);
        });
      
      
  }



}
