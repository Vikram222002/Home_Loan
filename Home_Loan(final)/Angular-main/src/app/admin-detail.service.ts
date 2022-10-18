import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerDetail } from './Models/CustomerDetail';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminDetailService {
  url:string="http://localhost:7580/api/AdminDetail"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getAdmins(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getAdmindetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  upadate(modifiedobj:CustomerDetail):Observable<any>
  {

    return this.http.put<any>(this.url+"/"+ modifiedobj.customerId,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  handleError(error:HttpErrorResponse){

    let errorMessage="";

    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;

    alert(errorMessage);

    return throwError(errorMessage);

  }

  
}