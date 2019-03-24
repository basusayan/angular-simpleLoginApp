import { Component } from '@angular/core';
import { GetCoursesServices } from './GetCourses.services';
import { Course } from 'ICourse';
import { Router } from '@angular/router';
@Component({
  selector: 'course-app',
  templateUrl: './course.component.html',
  
})
export class CourseComponent  {
  name = 'Angular';

  constructor(private geAllCourses: GetCoursesServices,private route:Router){}
  courses:Course[];

  ngOnInit(){
    this.getAllCourses();

  }
  getAllCourses(){
    this.courses=this.geAllCourses.getallCourses();
  }

  onSelect(course){
    this.route.navigate(['navbar/course',course.id]);
    
  }
  


}