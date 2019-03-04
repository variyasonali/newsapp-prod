import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { SectionDetailComponent } from '../section-detail/section-detail.component';
import { NewsService } from '../news.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss']
})
export class SubsectionComponent implements OnInit {
  public sectionName: string;
  public sectionNews: any;
  public subsection: Array<string> ;
  public sectiontitle: Array<string> = [];
  public subsectionlist: Array<string>;
  public uniqueSubSections: Array<string> = [""];
  public output = [];
  public ss: string;
  public sectionNews1:any;
  public subsectionValues:any;
  public subsection2:any;
  public uniqueSubSections1:any;
  public subsection1:any;
  public subSectionretrx:any;
  public sectionNewsResultx:any;
  public p:boolean;
  public nonEmpty:any;
  public isNullOrEmpty:any;
  dialogResult:"";
  data:string;
  constructor(private router: Router, private _newsService: NewsService, private route: ActivatedRoute, private sectionname: SectionDetailComponent, private sectionDetailComponent:SectionDetailComponent,public dialog:MatDialog) {}

  ngOnInit() {
    
    this._newsService.subsection1.subscribe(subsection1 => this.subsection1 = subsection1)
    // this.subsection1="";
    console.log(this.subsection1);

    // this._newsService.getSectionNews("home")
    // .subscribe(
    //   data => {
    //     this.sectionNews1 = data;
  

    //     this.uniqueSubSections1 = [""];
    //     this.subsection1 = [""];

    //     for (var i = 0; i < this.sectionNews1.results.length; i++) {
    //       this.subsection1.push((this.sectionNews1.results[i].subsection).toString());
    //     }

    //     this.uniqueSubSections1 = this.remove_duplicates(this.subsection1);

    //   });
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      let sName = params.get('sectionName');
      this.sectionName = sName;
      
    //if(!this.subsection){
      
    //   this.route.paramMap.subscribe((params: ParamMap) => {
    //     console.log(params);
    //     if(!params.get('subsection')){
    //     this.subsection1 = params.get('subsection');}
    // });
  //}




      this._newsService.getSectionNews(this.sectionName)
        .subscribe(
          data => {
            this.sectionNews = data;
      

            this.uniqueSubSections = [""];
            this.subsection = [""];

            for (var i = 0; i < this.sectionNews.results.length; i++) {
            
              this.subsection.push((this.sectionNews.results[i].subsection).toString());
             
            }
            
           
  
            
            this.uniqueSubSections = this.remove_duplicates(this.subsection);
           
            
          });

    });

  }
  remove_duplicates(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    arr = [];
    for (let key in obj) {
      // if(key != ""){
      arr.push(key);
      // }
    }
    
    return arr;
   
  }
 
  
  openDialog(){
    // let data=[caption,url];
    this._newsService.subsection1.subscribe(subsection1 => this.subsection1 =subsection1);
    let dialogREf= this.dialog.open(SubsectionComponent,{
      height:"500px",
      // data: { caption:[caption] , url:url},
      data: { },
      width:"700px",
    },);
  dialogREf.afterClosed().subscribe(result =>{
    console.log(`Dialog closed: ${result}`);
    this.dialogResult =result;
  })
  }
 
  
  onSelect(subSection) {
    console.log(subSection);
    this._newsService.updateSubsection(subSection);
    // this.router.navigate(['{{this.route}}',subSection]);
    this._newsService.subsection1.subscribe(subsectionValues => this.subsectionValues = subsectionValues);
    this.subsection2 =  this.subsectionValues;
    console.log(this.subsectionValues);
      console.log(this.subsection2);
      this.router.navigate([subSection], { relativeTo: this.route });
      
    // this.p=true;
    
    
    //return this.subsection;
    //console.log(this.route)
    // this.route.paramMap.subscribe(paramsroot =>{
    //   this.sectionName = paramsroot.get('sectionName');
    //   console.log(this.sectionName)
    //   this._newsService.getSectionNews(this.sectionName)
    //     .subscribe(
    //       data => {
    //         this.sectionDetailComponent.sectionNewsRaw = data;

    //         this.sectionNewsResultx = this.sectionDetailComponent.sectionNewsRaw.results;
    //         this.subSectionretrx = subSection;
    //         // console.log(this.sectionDetailComponent.subSectionretr);
          // });

  // });
}


}