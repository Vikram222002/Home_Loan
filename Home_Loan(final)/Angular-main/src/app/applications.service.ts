import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  url:string="http://localhost:7580/api/Applications"
  constructor(private http:HttpClient) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };

  getApplications(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  getApplicationsByStatus(): Observable<any>
  {
    return this.http.get<any>(this.url+"/"+"ApplicationsBystatus");
  }
}
