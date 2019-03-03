import { Component, OnInit, ViewChild, ViewChildren, Input ,inject} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../news.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { stringify } from '@angular/core/src/render3/util';
import { variable } from '@angular/compiler/src/output/output_ast';
import 'rxjs/Rx';
import{SectionNewsComponent} from '../section-news/section-news.component';
import { sectionNewsItem } from '../sectionNews';
import { ElementRef } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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

  public sectionNewsRaw: any;
  public SectionNews: any;
  public subSectionretr: any;
  public sectionNewsResult:any;
  public sex:any;
  @Input() uniqueSubsections:string;
  @Input() subSectionretrx:any;
  @Input() subsectionx:any;
  animal: string;
  name: string;
  dialogResult:"";


  constructor(private route: ActivatedRoute, private _newsService: NewsService, public dialog:MatDialog) {

  }
  ngOnInit() {

    
    //console.log(this.uniqueSubsections);

    // this.sex= this.route.snapshot.paramMap.get('sectionName');
    // console.log(this.sex);
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    this.route.paramMap.subscribe(paramsroot =>{
      this.sectionName = paramsroot.get('sectionName');
      console.log(this.sectionName)
      // console.log(this.route.firstChild);
      // console.log(this.route.firstChild.params);
      // console.log(this.route.firstChild.pathFromRoot);
      //if (this.route.firstChild.paramMap != null) {
        
      //}

    
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


  
  
  
  
  }
  


  openDialog(caption,url){
    // let data=[caption,url];
    
    let dialogREf= this.dialog.open(SectionNewsComponent,{
      height:"100%",
      // data: { caption:[caption] , url:url},
      data: { caption:caption, url:url},
      width:"100%",
      
    },);
  dialogREf.afterClosed().subscribe(result =>{
    console.log(`Dialog closed: ${result}`);
    this.dialogResult =result;
  })
  }
}
