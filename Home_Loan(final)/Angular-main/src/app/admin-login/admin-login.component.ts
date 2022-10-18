import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDetailService } from '../admin-detail.service';
import { AdminDetail } from '../Models/AdminDetail';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  currentobj:AdminDetail[]=[];
  id:number;
  constructor(private _service:AdminDetailService, private route:Router) { }


  ngOnInit(): void {
    this._service.getAdmins().subscribe(data=>
      {
        this.currentobj=data;
      });
  }


  onSubmit(form:any)
  {   let login=form.value;

   
    
      this._service.getAdmindetails(login.adminId).subscribe(data=>
        {  
        if(data!=null&&login.adminId!=0)
        {
          if(login.password==data.password)
          {
            
            
            this.id=data.adminId;
            this.route.navigateByUrl("adminpage/"+this.id);
            alert("logged in successfully");
          } 
          else{
            alert("Invalid password ");
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
