import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../news.service';

import 'rxjs/Rx';
import{SectionNewsComponent} from '../section-news/section-news.component';

import {MatDialog} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss']
})

export class SectionDetailComponent implements OnInit {
  date; //date Variable
  logedInForm; //These are variables
  emailId;
  password;
  display='none'; //default Variable
  public sectionName: string;
  public subsection:string;
  public sectionNewsRaw: any;
  public SectionNews: any;
  public  urlSegment:any;
  public subSectionretr: any;
  public sectionNewsResult:any;
  public sex:any;
  public subsection1:any;
  @Input() uniqueSubsections:string;
  @Input() subSectionretrx:any;
  @Input() subsectionx:any;
  animal: string;
  name: string;
  dialogResult:"";


  constructor(private route: ActivatedRoute, private _newsService: NewsService, public dialog:MatDialog,private router:Router) {

  }
  ngOnInit() {
    console.log(this.subsectionx);
    // console.log(this.route.snapshot.url[2].path);

    
    //console.log(this.uniqueSubsections);

    // this.sex= this.route.snapshot.paramMap.get('sectionName');
    // console.log(this.sex);
    // this.route.paramMap.subscribe(params => {
     
    this.route.paramMap.subscribe(paramsroot =>{
      this.sectionName = paramsroot.get('sectionName');
      console.log(this.sectionName)
      // console.log(this.route.firstChild);
      // console.log(this.route.firstChild.params);
      // console.log(this.route.firstChild.pathFromRoot);
      //if (this.route.firstChild.paramMap != null) {
        console.log(paramsroot);
      //}

      this.route.paramMap.subscribe(paramsroot =>{
        this.subsection = paramsroot.get('subsection');
        console.log(this.subsection)// Print the parameter to the console. 
    });
    
    // this.route.paramMap.subscribe(params => {
    //   console.log(params)
      //this.subSectionretr = params.get('subsection');
      this.subsectionx = null;

      this._newsService.getSectionNews(this.sectionName)
        .subscribe(
          data => {
            this.sectionNewsRaw = data;
            this.sectionNewsResult = this.sectionNewsRaw.results;
            
            // console.log(this.sectionNewsRaw);
            // console.log(this.sectionNewsRaw.results);
            //console.log(this.sectionNewsRaw.results);
            //this.SectionNews=this.sectionNewsRaw.results;
          });
    // });
  });


  
  
  this._newsService.subsection1.subscribe(subsection1 => this.subsection1 = subsection1);
  
  }
  
  doSomething(){
    this.subsectionx="";
    console.log(this.subsectionx);
   }

  openDialog(caption,url:string){
    // let data=[caption,url];
    
    let dialogREf= this.dialog.open(SectionNewsComponent,{
      height:"100%",
      data: { caption:caption , link:url},
      // data: { caption:caption, url:url},
      width:"100%",
      
    },);
  dialogREf.afterClosed().subscribe(result =>{
    console.log(`Dialog closed: ${result}`);
    this.dialogResult =result;
  })
  }
}
