import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { SubsectionComponent } from './subsection/subsection.component';

const routes: Routes = [
  //  { path:'section/:sectionName', redirectTo:'section/:sectionName', pathMatch:'full'},
  //  { path:'section/:sectionName', component:SectionDetailComponent},
//    { path:'section/:sectionName', component:SubsectionComponent},
   

//  { path:':subsection', component:SubsectionComponent }

 
 
  {path:'', redirectTo: 'section/home',pathMatch:'full'},
  { path:'section/:sectionName' ,
    component :SubsectionComponent,
    children:[
      {path:':subSection', component:SubsectionComponent},
    ]}
  // {path: 'section/:sectionName',components: {viewportA: 'SubsectionComponent',viewportB: 'SectionDetailComponent'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SectionDetailComponent,SubsectionComponent]