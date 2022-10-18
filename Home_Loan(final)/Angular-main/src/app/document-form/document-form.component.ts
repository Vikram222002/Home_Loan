import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { DocumentService } from '../document.service';
import { CustomerDetail } from '../Models/CustomerDetail';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {

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
documentform:any={
  documentId:0,
  customerId:0,
  panCard:"",
  voterId:"",
  salarySlip:"",
  lOA:"",
  nOCFromBuilder:"",
  agreementToSale:"",
}
  constructor(private _service:DocumentService,private route:Router, private active:ActivatedRoute,private _service2:CustomerDetailService) { }

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
    this.documentform=obj.value;
    this._service.create(this.documentform).subscribe(data=>{
      this.documentform=data;
      this.documentform.documentId=data.documentId;
      sessionStorage.setItem("Document", JSON.stringify(this.documentform));
      alert("Documents Submitted successfully")
      this.route.navigateByUrl("userpage/:id/incomeform/:id/propertyform/:id/document/:id/loanform/"+this.Customer.customerId);
  
    });
    
    

  }

}
