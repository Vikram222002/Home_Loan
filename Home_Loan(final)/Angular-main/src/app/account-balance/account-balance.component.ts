import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetail } from 'src/app/Models/AccountDetail';
import { AccountDetailService } from '../account-detail.service';
import { NgForm } from '@angular/forms';
import { CustomerDetailService } from '../customer-detail.service';
import { CustomerDetail } from '../Models/CustomerDetail';


@Component({
  selector: 'app-showbalance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent implements OnInit {

  accdetail:AccountDetail[]=[];
  accbalance:any;
  Customer:any;

  constructor(private _service1:AccountDetailService, private route: Router, private active: ActivatedRoute,private _service2:CustomerDetailService) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
    this._service2.getCustomerdetails(Id).subscribe(data=>
     {
       this.Customer=data;
       console.log(this.Customer);
     });
  }
  onSubmit(balanceform: any) {
    let acc = balanceform.value;
    if(acc.accountNumber!=0)
    {
    this._service1.getaccountdetails(acc.accountNumber).subscribe(data => {
      if (data != null) {
        if(data.customerId==this.Customer.customerId)
        {
          this.accdetail=data;
        this.accbalance=data.balance;
        console.log(acc);

        console.log(data.balance);
        }
        else{
          this.accbalance=null;
          alert("This account does not belongs to you")
        }
      
        
      }
      else
      {
        this.accbalance=null;
        alert("Invalid Account number.");
      }
    

    })
  }
  else
  {
    this.accbalance=null;
    alert("please enter You 10 digit Account number")
  }
  }
}