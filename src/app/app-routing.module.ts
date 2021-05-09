import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubjectComponent } from './components/subject/create-subject/create-subject.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { UpdateSubjectComponent } from './components/subject/update-subject/update-subject.component';

const routes: Routes = [
  {path:"create-subject",component:CreateSubjectComponent},
  {path:"subject-list",component:SubjectListComponent},
  {path:"update-subject/:id",component:UpdateSubjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
