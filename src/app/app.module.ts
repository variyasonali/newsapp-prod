import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { NewsService } from './news.service';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SectionNewsComponent } from './section-news/section-news.component';
import { SubsectionComponent } from './subsection/subsection.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SectionComponent,
    SectionDetailComponent,
    SectionNewsComponent,
    SubsectionComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule
    
  ],
  entryComponents: [
    SectionNewsComponent
  ],
  providers: [NewsService,SectionDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
