import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanDetail } from 'src/app/Models/LoanDetail';
import { CustomerDetailService } from '../customer-detail.service';
import { LoanDetailService } from '../loan-detail.service';

@Component({
  selector: 'app-account-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {
  acclist:LoanDetail[]=[];
  loanStatus:any;
  Customer:any;
  constructor(private _service:LoanDetailService,private _service2:CustomerDetailService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
    this._service2.getCustomerdetails(Id).subscribe(data=>
     {
       this.Customer=data;
       console.log(this.Customer);
     });
  }
  onSubmit(obj: any) {
    let acc = obj.value;
    this._service.getloandetails(acc.applicationId).subscribe(data => {
      if (data != null) {
        if(data.customerId==this.Customer.customerId)
        {
          this.acclist=data;
        if(data.loanStatus==null)
        {
          this.loanStatus="Sent for Verification "
        }
        else
        {
          this.loanStatus=data.loanStatus;
        }
        }
        
        else
        {
          this.loanStatus=null;
          alert("This Application Number is not belogs to you")
        }
       
      }
      else
      {
        this.loanStatus=null;
        alert("Invalid application number.");
      }

    })
  }



}