import { Injectable } from '@angular/core' ;
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
constructor(private router:Router){}
  canActivate(){
    //let i=10;
    if(this.isActivate){
      return true;
    }
      console.log("Service AUTH"+this.isActivate);
    this.router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

  isActivate:boolean=false;
  
  }