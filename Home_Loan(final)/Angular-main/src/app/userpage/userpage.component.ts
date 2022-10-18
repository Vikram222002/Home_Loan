import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { CustomerDetail } from '../Models/CustomerDetail';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
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
  constructor(private _service:CustomerDetailService, private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
    this._service.getCustomerdetails(Id).subscribe(data=>
      {
        this.Customer=data;
        console.log(this.Customer);
      });
  }

}
