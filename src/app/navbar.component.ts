import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'nav-app',
  template: `<nav class="navbar navbar-expand-sm bg-light">
<a class="nav-link" routerLink="course">Course</a> 
<a class="nav-link" routerLink="faculty">Faculty</a> 
<a class="nav-link" routerLink="" (click)="logout()">Logout</a> 
</nav><br>
<router-outlet></router-outlet>`,
  
})
export class NavBarComponent  {
  name = 'Angular';

  constructor(private router:Router){}
  logout(){
    this.router.navigate(['login']);

  }

  
}