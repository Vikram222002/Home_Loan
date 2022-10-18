import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoanDetail } from './Models/LoanDetail';
import { PropertyDetail } from './Models/PropertyDetail';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailService {

  url:string="http://localhost:7580/api/LoanDetail"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getloans(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getloandetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  Approve(id:number):Observable<any>
  {

    return this.http.put<any>(this.url+"/Approve/"+ id,this.httpOptions).pipe(catchError(this.handleError));

  }
  Reject(id:number):Observable<any>
  {

    return this.http.put<any>(this.url+"/Reject/"+ id,this.httpOptions).pipe(catchError(this.handleError));

  }
  create(newobj:LoanDetail):Observable<any>
  {

    return this.http.post<any>(this.url,newobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  handleError(error:HttpErrorResponse){

    let errorMessage="";

    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;

    alert(errorMessage);

    return throwError(errorMessage);

  }
}
