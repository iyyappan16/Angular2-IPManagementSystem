import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loggedInUser:any
  fieldArray = [];
  //login in session checking
  constructor(private router:Router) { 
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if(!localStorage.getItem('loggedInUser')){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.fieldArray = JSON.parse(localStorage.getItem("UserIp-"+this.loggedInUser.userName))
  }
}
