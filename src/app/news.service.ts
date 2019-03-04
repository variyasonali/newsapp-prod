import { Component, Injectable,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
//import {sectionNewsItem} from './sectionNews';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class NewsService {


  public newsDetails :any;
 
  public subsectionvalue:any;
  public subsectionValues=this.subsectionvalue;
 

  private messageSource = new BehaviorSubject(this.subsectionvalue);
  subsection1 = this.messageSource.asObservable();

  constructor(private http : HttpClient) { }
  
  
  getSectionNews(sectionName : string):Observable<any>{

     return this.http.get<any>('https://api.nytimes.com/svc/topstories/v2/'+ sectionName +'.json?api-key=315a5a51483b469a918246dc2753b339');
    
    
  }
 
  updateSubsection(subsection){
    console.log(subsection);
    alert("update subsection");
   this.subsectionvalue=subsection;
   console.log(this.subsectionvalue);
   this.messageSource.next(this.subsectionvalue);
  }
  removeSubsection(){
    this.subsectionvalue="";
    this.messageSource.next(this.subsectionvalue);
    // this.subsection.next("");
    alert("remove subsection");
  }
  remove(){
    this.subsectionvalue="";
    alert("remove");
  }
}
