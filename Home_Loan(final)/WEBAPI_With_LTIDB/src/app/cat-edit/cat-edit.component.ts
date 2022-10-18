import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
currentobj:any;
  constructor(private _service:CategoryService,private route:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    let Id=this.active.snapshot.params["id"];
   this._service.getcategorydetails(Id).subscribe(data=>
    {
      this.currentobj=data;
      console.log(this.currentobj);
    });
  }
  onSubmit(obj:any)
  {
    
    this._service.upadate(this.currentobj).subscribe(()=>{alert("success")});
    this.route.navigateByUrl("catlist");
  }



}
