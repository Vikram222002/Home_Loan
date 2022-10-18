import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {

  
  catlist:Category[]=[];

  constructor(private _service:CategoryService,private route:Router) { }

  ngOnInit(): void {

    this._service.getcategories().subscribe(data=>
      {
        this.catlist=data;
        console.log(this.catlist);

      });
      
  }

}
