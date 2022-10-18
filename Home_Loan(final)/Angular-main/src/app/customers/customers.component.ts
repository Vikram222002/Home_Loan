import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetail } from 'src/app/Models/CustomerDetail';
import { AdminDetailService } from '../admin-detail.service';
import { CustomerDetailService } from '../customer-detail.service';
import { AdminDetail } from '../Models/AdminDetail';

@Component({
  selector: 'app-customer-details-list',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  custlist:CustomerDetail[]=[];
  Admin:AdminDetail;
  constructor(private _service:CustomerDetailService,private route:Router,private service:AdminDetailService,private active:ActivatedRoute) { }

  ngOnInit(): void {

    let Id=this.active.snapshot.params["id"];
    this.service.getAdmindetails(Id).subscribe(data=>
      {
        this.Admin=data;
        console.log(this.Admin);
      });
    this._service.getCustomers().subscribe(data=>
      {
        this.custlist=data;
      })
  }

  adminhome() {
    this.route.navigate(['adminpage/'+this.Admin.adminId])
  }
  applications() {
    this.route.navigate(['adminpage/:id/applications/'+this.Admin.adminId])
  }
  accounts() {
    this.route.navigate(['adminpage/:id/accounts/'+this.Admin.adminId])
  }
  

}