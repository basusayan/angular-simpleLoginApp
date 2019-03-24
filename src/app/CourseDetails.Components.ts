import { Component } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'courseDetails-app',
  templateUrl: './CourseDetails.html',
  
})
export class CourseDetailsComponent  {

  constructor(private route:ActivatedRoute, private navigateRoute:Router){}
  public courseId:number;
  ngOnInit(){
    //let id= parseInt(this.route.snapshot.paramMap.get('id'));
   // this.courseId=id;

   this.route.paramMap.subscribe((param:ParamMap)=>{
     let id= parseInt(param.get('id'));
     this.courseId = id;
   })
  }

  goPrevious(){
    let previousId=this.courseId-1;
    this.navigateRoute.navigate(['navbar/course',previousId]);

  }

  goNext(){
    let nextId=this.courseId+1;
    this.navigateRoute.navigate(['navbar/course',nextId]);

  }




  


}