import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubjectComponent } from './subject/create-subject/create-subject.component';
import { HomePageComponent } from './subject/home-page/home-page.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { UpdateSubjectComponent } from './subject/update-subject/update-subject.component';

const routes: Routes = [
  {path:"create-subject",component:CreateSubjectComponent},
  {path:"subject-list",component:SubjectListComponent},
  {path:"update-subject/:id",component:UpdateSubjectComponent},
  {path:"home-page",component:HomePageComponent},

  {path:'', redirectTo:'home-page', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
