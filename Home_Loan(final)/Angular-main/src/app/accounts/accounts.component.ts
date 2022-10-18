import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetail } from 'src/app/Models/AccountDetail';
import { AccountDetailService } from '../account-detail.service';
import { Pipe } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Accounts } from '../Models/Accounts';
import { AdminDetailService } from '../admin-detail.service';
import { AdminDetail } from '../Models/AdminDetail';



@Component({
  selector: 'app-accountdetail-list',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  acclist:Accounts[]=[]
  Admin:AdminDetail;
  constructor(private _service:AccountsService,private route:Router,private service:AdminDetailService,private active:ActivatedRoute) { }

  ngOnInit(): void {

    let Id=this.active.snapshot.params["id"];
    this.service.getAdmindetails(Id).subscribe(data=>
      {
        this.Admin=data;
        console.log(this.Admin);
      });
    this._service.getAccounts().subscribe(data=>
      {
        this.acclist=data;
      });
      
  }
  adminhome() {
    this.route.navigate(['adminpage/'+this.Admin.adminId])
  }
  applications() {
    this.route.navigate(['adminpage/:id/applications/'+this.Admin.adminId])
  }
  
  customers() {
    this.route.navigate(['adminpage/:id/customers'+this.Admin.adminId])
  }

}