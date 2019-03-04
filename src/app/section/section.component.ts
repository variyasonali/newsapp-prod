import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router'; 
import { NewsService } from '../news.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  public sectionIsSelected="false";
  public subsection1="";
  sections = [
    {"id":"1","sectionName":"home"},
    {"id":"2","sectionName":"opinion"},
    {"id":"3","sectionName":"world"},
    {"id":"4","sectionName":"national"},
    {"id":"5","sectionName":"politics"},
    {"id":"6","sectionName":"business"},
  ]
  data:string;

  constructor(private router:Router,private _NewsService:NewsService) { }
  panelOpenState = false;

  ngOnInit() {
    
    
    console.log(this.subsection1);
  }
  onSelect(section){
    this._NewsService.removeSubsection();
    this.router.navigate(['/section',  section.sectionName]);
    // remove(){}
    this._NewsService.subsection1.subscribe(subsection1 => this.subsection1 = subsection1);
    // this.subsection1="";
    console.log(this.subsection1);
    this.sectionIsSelected="true";
  }
 

}
