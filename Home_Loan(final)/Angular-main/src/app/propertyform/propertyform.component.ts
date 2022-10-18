import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetailService} from '../account-detail.service';
import { CustomerDetailService } from '../customer-detail.service';
import { CustomerDetail } from '../Models/CustomerDetail';
import { PropertyDetail } from '../Models/PropertyDetail';
import { PropertyDetailsService } from '../property-detail.service';

@Component({
  selector: 'app-propertyform',
  templateUrl: './propertyform.component.html',
  styleUrls: ['./propertyform.component.css']
})
export class PropertyformComponent implements OnInit {

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
propertyform:PropertyDetail={propertyId:0,
  customerId:0,
  propertyLocation:"",
  propertyName:"",
  estimatedAmount:0
}
  constructor(private _service:PropertyDetailsService,private route:Router, private active:ActivatedRoute,private _service2:CustomerDetailService) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
   this._service2.getCustomerdetails(Id).subscribe(data=>
    {
      this.Customer=data;
      console.log(this.Customer);
    });
  }
  onSubmit(obj:any)
  {
    this.propertyform=obj.value;
   
    this._service.create(this.propertyform).subscribe(data=>{
      this.propertyform=data;
       this.propertyform.propertyId=data.propertyId;
       sessionStorage.setItem("Property",JSON.stringify(this.propertyform));
      alert("Property details successfully submitted")
      this.route.navigateByUrl("userpage/:id/incomeform/:id/propertyform/:id/document/"+this.Customer.customerId);
    });
    
  }



}
