import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { FacultyComponent } from './faculty.component';
import { CourseDetailsComponent } from './CourseDetails.Components';
import { PageNotFoundComponent } from './pagenotfound.component';
import { TechnicalfacultyComponent } from './technicalfaculty.component';
import { BizzskillfacultyComponent } from './bizzskillfaculty.component';
import { LoginComponent } from './login.component';
import { NavBarComponent } from './navbar.component';
import { AuthGuard } from './authguard.service';

const route:Routes=[
{path:'',redirectTo:'login', pathMatch:'full'},

{path:'login', component:LoginComponent},
{path:'navbar', component:NavBarComponent,
children:[
  {path:'',redirectTo:'course', pathMatch:'full'},
{path:'course', component:CourseComponent},
{path:'course/:id', component:CourseDetailsComponent},
{path:'faculty', component:FacultyComponent,
children:[
  {path:'technical', component:TechnicalfacultyComponent},
  {path:'bizz', component:BizzskillfacultyComponent}  
]
}],
canActivate:[AuthGuard]
}
,
{path:'**', component:PageNotFoundComponent}

]


@NgModule({
  imports:      [ RouterModule.forRoot(route) ],
  //declarations: [ CourseComponent, FacultyComponent ],
  providers:[AuthGuard],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
export const AllComponents =[CourseComponent,FacultyComponent,PageNotFoundComponent,CourseDetailsComponent,TechnicalfacultyComponent,BizzskillfacultyComponent,LoginComponent,NavBarComponent];