import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
//import {sectionNewsItem} from './sectionNews';

// import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsDetails :any;

  constructor(private http : HttpClient) { }
  getSectionNews(sectionName : string):Observable<any>{

     return this.http.get<any>('https://api.nytimes.com/svc/topstories/v2/'+ sectionName +'.json?api-key=315a5a51483b469a918246dc2753b339');
    
     
  }
}
