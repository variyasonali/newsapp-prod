import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router'; 

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  public sectionIsSelected="false";
  sections = [
    {"id":"1","sectionName":"home"},
    {"id":"2","sectionName":"opinion"},
    {"id":"3","sectionName":"world"},
    {"id":"4","sectionName":"national"},
    {"id":"5","sectionName":"politics"},
    {"id":"6","sectionName":"business"},
  ]

  constructor(private router:Router) { }
  panelOpenState = false;

  ngOnInit() {
  }
  onSelect(section){
    this.router.navigate(['/section',  section.sectionName]);
    
    this.sectionIsSelected="true";
  }

}
