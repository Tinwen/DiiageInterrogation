import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private httpClient: HttpClient) { }
  
  public get(){
    return this.httpClient.get('http://localhost:3001/posts');
  }
}
