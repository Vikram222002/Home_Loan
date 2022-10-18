import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDetailService } from '../admin-detail.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
Admin:any;
  constructor(private _service:AdminDetailService,private route:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
    this._service.getAdmindetails(Id).subscribe(data=>
      {
        this.Admin=data;
        console.log(this.Admin);
      });
  }
  
 
  customers() {
    this.route.navigate(['customers/'+this.Admin.adminId])
  }

  applications() {
    this.route.navigate(['applications/'+this.Admin.adminId])
  }
  accounts() {
    this.route.navigate(['accounts/'+this.Admin.adminId])
  }
}
