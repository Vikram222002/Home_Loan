import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { CustomerDetail } from '../Models/CustomerDetail';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  currentobj:CustomerDetail[]=[];
  id:number;
  constructor(private _service:CustomerDetailService, private route:Router) { }

  ngOnInit(): void {
    
   this._service.getCustomers().subscribe(data=>
    {
      this.currentobj=data;
      console.log(this.currentobj);
    });
  }
  

  onSubmit(form:any)
  {   let login=form.value;

   
    
      this._service.getCustomerdetails(login.customerId).subscribe(data=>
        {  
        if(data!=null&&login.customerId!=0)
        {
          if(login.password==data.password)
          {
            
            
            this.id=data.customerId;
            this.route.navigateByUrl("userpage/"+this.id);
            alert("logged in successfully");
          } 
          else{
            alert("Invalid password ");
            console.log("the password is :::"+login.customerId);
            console.log("the password is :::"+login.password);
  
          }
       
        }
        else{
          alert("invalid customer Id");
        }
      },(err:any)=>     {
  alert("There is a problem in logging in please try after some time");
  //this.router.navigateByUrl("list");
   });
    }
    
 
}


