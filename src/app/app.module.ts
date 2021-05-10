import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateSubjectComponent } from './components/subject/create-subject/create-subject.component';
import { UpdateSubjectComponent } from './components/subject/update-subject/update-subject.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling'

@NgModule({
  declarations: [
    AppComponent,
    CreateSubjectComponent,
    UpdateSubjectComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
