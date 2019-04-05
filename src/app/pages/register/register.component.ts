import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname:string;
  lname:string;
  userName:string;
  password:string;
  userType = 'Select UserType';
  
  constructor(public router: Router) { }
  ngOnInit() {
  }

  // user registration
  userRegister(){
    let user = {
      "fname":this.fname,
      "lname":this.lname,
      "userName":this.userName,
      "password":this.password,
      "userType":this.userType
    }
    let users = [];
    if(!localStorage.getItem('users')){
      users.push(user);
      localStorage.setItem('users',JSON.stringify(users));
    }
    else{
      users = JSON.parse(localStorage.getItem('users'));

      // user exist or not validation
      for(let i = 0; i<=users.length;i++){
        if (users[i] && users[i].userName === this.userName) {
          alert("User already exist");
          return ('Username is already taken');
          }
      }
      users.push(user);
      localStorage.setItem('users',JSON.stringify(users));
    }
    alert('User registered successfully')

    this.router.navigate(['/login']);
  }

}
