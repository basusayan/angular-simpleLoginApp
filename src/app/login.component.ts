import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from './authguard.service';
@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  
})
export class LoginComponent  {
  //name = 'Angular';
  username:string;
  password:string;
  constructor(private route:Router, private auth:AuthGuard){}
  onSubmit(formvalue:any){    
    this.username=formvalue.value.uname;
    this.password=formvalue.value.psw;

    if(this.username=='sayan' && this.password=='sayan'){
      this.route.navigate(['navbar']);
      this.auth.isActivate=true;

    }
    else{
      alert('Wrong Credentials');
    }
  }

}
