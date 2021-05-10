import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CreateSubjectComponent,
    HomePageComponent,
    SubjectListComponent,
    UpdateSubjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  exports : [
    CreateSubjectComponent,
    HomePageComponent,
    SubjectListComponent,
    UpdateSubjectComponent
  ]
})
export class SubjectModule { }
