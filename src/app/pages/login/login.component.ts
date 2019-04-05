import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  userName: string;
  password: string;
  validUser = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }
//user login check
  userLoign() {
    this.isValidUser();
    if(this.validUser){
      this.router.navigate(['/index']);
    }
    else{
      alert('Invalid user');
    }
  }

//check user valid
  isValidUser() {
    let users = [];
    users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.length){
      for (let i = 0; i < users.length; i++) {
        if (users[i].userName === this.userName && users[i].password === this.password) {
          this.validUser = true;
          localStorage.setItem('loggedInUser',JSON.stringify(users[i]));
          break;
        }
      }
    }else{
      alert('Please register begore login')
    }
  }

  ngOnDestroy(){
    this.validUser = false;
  }

}
