import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  upadate(currentobj: any) {
    throw new Error('Method not implemented.');
  }

  url:string="http://localhost:7580/api/Document"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  getdoDuments(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getDocumentdetails(id:number): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);
  }
  create(newobj:any):Observable<any>
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
