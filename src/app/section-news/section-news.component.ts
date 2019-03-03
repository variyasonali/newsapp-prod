import { Component, OnInit,inject, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from '../news.service';
import 'rxjs/Rx';
import { sectionNewsItem } from '../sectionNews';
import { ElementRef } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { from } from 'rxjs';

@Component({
  selector: 'app-section-news',
  templateUrl: './section-news.component.html',
  styleUrls: ['./section-news.component.scss']
})
export class SectionNewsComponent implements OnInit {

  constructor(private _newsService : NewsService, public thisDialogRef:MatDialogRef<SectionNewsComponent>,private route : ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit() {

  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //     let sName = params.get('sectionName');
  //     this.sectionName = sName;   

  //   this._newsService.getSectionNews(this.sectionName)
  //       .subscribe(
  //         data => { 
  //           this.sectionNews = data;
  }
// onCloseConfirm(){
// this.thisDialogRef.close('Confirm');
// }

onCloseCancle(){
  this.thisDialogRef.close('close');
}

}
