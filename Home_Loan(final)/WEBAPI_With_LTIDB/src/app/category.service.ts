import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from './Models/Category';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url:string="http://localhost:7580/api/Category"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getcategories(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getcategorydetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  upadate(modifiedobj:Category):Observable<any>

  {

    return this.http.put<any>(this.url+"/"+ modifiedobj.catid,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  handleError(error:HttpErrorResponse){

    let errorMessage="";

    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;

    alert(errorMessage);

    return throwError(errorMessage);

  }
}
