import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../../class/subject';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {



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
