import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly url = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getTestData(): Observable<Test[]>{
    return this.http.get<Test[]>(`${this.url}/tests/test`);
  }

}
