import { Component, Input } from '@angular/core';

import { Classroom } from './classroom';

@Component({
  selector: 'sp-classroom-detail',
  templateUrl: 'app/classroom/classroom.component.html',
})

export class ClassroomDetailComponent {
  @Input()
  classroom: Classroom;
}
