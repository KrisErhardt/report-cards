import { Injectable } from '@angular/core';

import { Classroom } from './classroom';
import { CLASSROOM } from './mock-classroom';

@Injectable()
export class ClassroomService {
  getClassroom(): Promise<Classroom> {
    return Promise.resolve(CLASSROOM);
  }

  setConfig(): void {}
}
