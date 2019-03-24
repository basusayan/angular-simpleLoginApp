import { Component } from '@angular/core';

@Component({
  selector: 'faculty-app',
  template: `<h3> Faculty Page </h3>
  <a routerLink="technical">Technical</a>
   <a routerLink="bizz">Bizz</a><hr>
  <router-outlet></router-outlet>
  
  `,
  
})
export class FacultyComponent  {
  name = 'Angular';
}