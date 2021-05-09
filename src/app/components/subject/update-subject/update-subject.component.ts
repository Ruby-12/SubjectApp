import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/class/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private subjectService:SubjectService) { }

  id: number;
  subject:Subject=new Subject();

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];
    this.subjectService.getSubjectById(this.id).subscribe(data=>
      {this.subject=data;},
      error=>console.log(error));
  }

  onSubmit()
  {
    this.subjectService.updateSubject(this.id,this.subject).subscribe();
    alert("Updated successfully");
    this.router.navigate(['/subject-list']);
  }

 


}
