import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generate } from 'rxjs';
import { AccountDetailService } from '../account-detail.service';
import { AdminDetailService } from '../admin-detail.service';
import { ApplicationsService } from '../applications.service';
import { LoanDetailService } from '../loan-detail.service';
import { AccountDetail } from '../Models/AccountDetail';
import { AdminDetail } from '../Models/AdminDetail';
import { LoanDetail } from '../Models/LoanDetail';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  Applicationlist: any;
  status: any = "Sent For Verification";
  updatedObj: LoanDetail;
  newobj: AccountDetail = { accountNumber: 0, balance: 0, customerId: 0 };
  Admin:AdminDetail;


  constructor(private _service: ApplicationsService, private service1: AccountDetailService,private adminService:AdminDetailService ,private route: Router, private active: ActivatedRoute, private _service2: LoanDetailService) { }


  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
    this.adminService.getAdmindetails(Id).subscribe(data=>
      {
        this.Admin=data;
        console.log(this.Admin);
      });
    this._service.getApplications().subscribe(data => {
      this.Applicationlist = data;
      console.log(this.Applicationlist);
    });
  }
  Approve(id: number, loanAmount: number, customerId: number): void {
    this._service2.Approve(id).subscribe(() => { alert("Approved successfully") });
    this.newobj.balance = loanAmount;
    this.newobj.customerId = customerId;
    this.service1.addNewLoanAccout(this.newobj).subscribe(data => {
      this.newobj = data;
      alert("The Account Number is sent to the User's mail and Phone :" + data.accountNumber)
      this.newobj = { accountNumber: 0, balance: 0, customerId: 0 };
    });

  }
  Reject(id: number): void {
    this._service2.Reject(id).subscribe(() => { alert("Rejected Successfully") });

  }


  adminhome() {
    this.route.navigate(['adminpage/'+this.Admin.adminId])
  }
  
  accounts() {
    this.route.navigate(['adminpage/:id/accounts'+this.Admin.adminId])
  }
  customers() {
    this.route.navigate(['adminpage/:id/customers'+this.Admin.adminId])
  }

}


