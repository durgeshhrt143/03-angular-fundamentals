import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return ['course1', 'course2', 'course3', 'course4'];
  }
}
