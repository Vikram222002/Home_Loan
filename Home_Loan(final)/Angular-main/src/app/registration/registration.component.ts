import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomerDetail } from '../Models/CustomerDetail';
import { CompileIdentifierMetadata } from '@angular/compiler';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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
cpassword:any;
DataByPan:any;
DataByAadharNo:any;
  constructor(private _service1:CustomerDetailService,private route:Router,private active:ActivatedRoute,) {}
  
  ngOnInit(): void {
  }
  
  onSubmit(form:any)
  {
    this.Customer=form.value;
    console.log(this.Customer)
    console.log(this.Customer.aadharNo)
    console.log(this.Customer.panNo)
     this._service1.getCustomerByPanNo(this.Customer.panNo).subscribe(data=>{
      if(data!==null)
      {
        console.log(data)
          alert("the Pan Number already exist");
      } 
      else
      {

        this._service1.getCustomerByAadharNo(this.Customer.aadharNo).subscribe(data=>{ 
          if(data!==null)
          {
             alert("the Aadhar Number already exist");
           } 
           else
           {
            this._service1.create(this.Customer).subscribe(data=>
              {
                if(data==null)
                {
                  alert("there was a problem while registering \n so please do after some time.") 
                }
                else
                {
                  this.Customer=data;
                alert("Regestration done successfully \n Your customer id has been sent to your mail. :"+this.Customer.customerId)
                this.route.navigate(['']);
              }

              });
           }

        });
      }
      });
    
      
  }
}