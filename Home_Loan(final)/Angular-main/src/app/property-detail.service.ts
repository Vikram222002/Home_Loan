import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PropertyDetail } from './Models/PropertyDetail';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  url:string="http://localhost:7580/api/PropertyDetail"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getproperties(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getPropertydetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  upadate(modifiedobj:PropertyDetail):Observable<any>

  {

    return this.http.put<any>(this.url+"/"+ modifiedobj.propertyId,modifiedobj,this.httpOptions).pipe(catchError(this.handleError));

  }
  create(newobj:PropertyDetail):Observable<any>
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
