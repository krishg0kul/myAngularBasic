import { Component, OnInit } from '@angular/core';
import {LoginService} from '../auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
modal ='Login';
user={
  email:'',
  pass:''
}
logdetails:any={}
  constructor(private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit=()=>{
    if(this.user.email==='' || this.user.pass===''){
      alert("fill the all fields.")
    }
    else{
      this.login.signUp(this.user)
      .subscribe((data)=>{
        this.logdetails = data;
        console.log(data)
        if(this.logdetails===400){
          alert('Invalid Credentials');
        }
        else if(this.logdetails===401)
          alert('Check your password.')
        else{
          localStorage.setItem("userdetails",this.logdetails);
          alert('logged')
          this.router.navigate(['/']);
        }
      })
    }
  }

}
