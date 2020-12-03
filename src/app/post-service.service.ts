import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  //url: string = 'https://jsonplaceholder.typicode.com/posts';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getPost() : Observable<any> {
    return this.http.get(environment.url); // `${this.url}`
  }
}
