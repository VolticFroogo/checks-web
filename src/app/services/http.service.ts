import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getOperators(): Observable<HttpResponse<Operator[]>> {
    return this.http.get<Operator[]>(`${ this.endpoint }/operator/`, { observe: 'response' });
  }

  getOperator(id: string): Observable<HttpResponse<Operator>> {
    return this.http.get<Operator>(`${ this.endpoint }/operator/${ id }`, { observe: 'response' });
  }
}
