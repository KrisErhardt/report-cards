import { Component, Input } from '@angular/core';

import { Student } from '../models/student';

@Component({
  selector: 'sp-student-detail',
  template: '../templates/student.component'
})

export class StudentDetailComponent {
  @Input()
  student: Student;
}
