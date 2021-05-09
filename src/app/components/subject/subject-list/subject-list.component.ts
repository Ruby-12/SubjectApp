import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/class/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

 subjects:Subject[];
  constructor(private subjectService:SubjectService,private router:Router) { }

  ngOnInit(): void 
  {
    this.getSubjectList();
  }

  getSubjectList()
  {
    this.subjectService.getSubjectList().subscribe(data=>this.subjects=data);
  }

  updateSubject(id:number)
  {
    this.router.navigate(['update-subject', id]);
  }

  deleteSubject(id:number)
  {
    this.subjectService.deleteSubject(id).subscribe(
      data=>{alert("Subject has deleted successfully");
      this.getSubjectList();}
      ,
      error=>{
        console.log(error);
        alert("Deletion failed");}
    );
    
  }

}
