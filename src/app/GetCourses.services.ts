import {Injectable } from '@angular/core';
import { Course } from 'ICourse';
const courses:Course=[
{id:1,name:"Angular JS"},
{id:2,name:"Angular 2"},
{id:3,name:"Node Js"},
{id:4,name:"Full Stack development"}

]

@Injectable()
export class GetCoursesServices{

  getallCourses():Course[]{
    return courses;
  }



}