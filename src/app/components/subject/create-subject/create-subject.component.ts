import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../../class/subject';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']

})
export class CreateSubjectComponent implements OnInit {
  addSubjectForm=new FormGroup({
    subjectName:new FormControl('',Validators.required),
    subjectSemester:new FormControl('',Validators.required),
    courseId:new FormControl('',Validators.required),
    facultyId:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,Validators.minLength(10)])

  })
  get subjectName(){return this.addSubjectForm.get('subjectName')}
  get subjectSemester(){return this.addSubjectForm.get('subjectSemester')}
  get description(){return this.addSubjectForm.get('description')}
  get courseId(){return this.addSubjectForm.get('courseId')}
  get facultyId(){return this.addSubjectForm.get('facultyId')}





  constructor(private router: Router,private subjectService:SubjectService) { }

  subject:Subject=new Subject();

  ngOnInit(): void {
  }

  saveSubject()
  {
    this.subjectService.createSubject(this.subject).subscribe(data=>{
      console.log(data);
      alert("Subject has added successfully");
      this.subject=new Subject();
      this.goToSubjectList();
    },
    error=>console.log(error));
  }
  
  goToSubjectList(){
    this.router.navigate(['/subject-list']);
  }

  onSubmit(){
    this.saveSubject();
  }

}
