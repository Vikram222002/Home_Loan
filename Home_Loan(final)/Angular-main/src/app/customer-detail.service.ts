import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerDetail } from './Models/CustomerDetail';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {
  url:string="http://localhost:7580/api/CustomerDetail"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

  getCustomers(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getCustomerdetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  getCustomerByPanNo(panNo:string): Observable<any>
  {
    return this.http.get<any>(this.url+"/GetCostomerByPanNo/"+panNo);
  }
  getCustomerByAadharNo(aadharNo:string): Observable<any>
  {
    return this.http.get<any>(this.url+"/GetCostomerByAadharNo/"+aadharNo);
  }
  upadate(modifiedobj:CustomerDetail):Observable<any>

  {

    return this.http.put<any>(this.url+"/"+ modifiedobj.customerId,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  create(newobj:CustomerDetail):Observable<any>

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
