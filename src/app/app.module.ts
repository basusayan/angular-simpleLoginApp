import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,AllComponents } from './app-routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//import { AllComponents } from './app-routing.module';

import { GetCoursesServices } from './GetCourses.services';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,AllComponents ],
  bootstrap:    [ AppComponent ],
  providers: [GetCoursesServices]
})
export class AppModule { }
