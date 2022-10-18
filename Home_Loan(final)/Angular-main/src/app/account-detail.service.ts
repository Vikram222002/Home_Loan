
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerDetail } from './Models/CustomerDetail';
import { catchError, throwError } from 'rxjs';
import { AccountDetail } from './Models/AccountDetail';
@Injectable({
  providedIn: 'root'
})
export class AccountDetailService {
  url:string="http://localhost:7580/api/AccountDetail"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getAccounts(): Observable<any>
  {
    return this.http.get<any>(this.url+"/GetAccountsList");
  }
  getaccountdetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/GetAccountById/"+id);
  }
  upadate(modifiedobj:AccountDetail):Observable<any>
  {

    return this.http.put<any>(this.url+"/"+ modifiedobj.customerId,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  GetAccountNumber():Observable<any>
  {

    return this.http.get<any>(this.url+"/GetMaxId");

  }
  addNewLoanAccout(newobj:AccountDetail):Observable<any>

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