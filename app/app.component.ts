import { Component, OnInit } from '@angular/core';

import { Classroom } from './classroom/classroom';
import { ClassroomService } from './classroom/classroom.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ClassroomService]
})

export class AppComponent implements OnInit {
  title = 'Report Cards';
  classroom = {};

  constructor(private classroomService: ClassroomService) {}

  getClassroom(): void {
    this.classroomService.getClassroom().then(classroom => this.classroom = classroom);
  }

  ngOnInit(): void {
    this.getClassroom();
  }
}
