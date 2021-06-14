import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }
  post(user:any){
    return this.http.post('/api/postData' , user , {responseType:"text"});
  }
  login(user:any){
    return this.http.post('/api/login' , user , {responseType:"text"});
  }
}
