import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IncomeDetail } from './Models/IncomeDetail';

@Injectable({
  providedIn: 'root'
})
export class IncomeDetailService {

  url:string="http://localhost:7580/api/IncomeDetail"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getincomes(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getincomedetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  upadate(modifiedobj:IncomeDetail):Observable<any>

  {

    return this.http.put<any>(this.url+"/"+ modifiedobj.incomeId,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  create(newobj:IncomeDetail):Observable<any>

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
