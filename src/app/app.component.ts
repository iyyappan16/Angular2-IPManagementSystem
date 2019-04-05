import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
//import 'rxjs/add/operator/filter';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  loggedInUser :any;
  isLoginRegisterPage = false;


  //validating the page

  constructor(private router:Router){
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url.indexOf('register') == -1 && event.url.indexOf('login') == -1){
          this.isLoginRegisterPage = true;
          if(event.url.indexOf('index') !=-1)
          this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        }else{
          this.isLoginRegisterPage = false;
        }
    }
    });
    this.router.navigated
  }

   //login sesion
  ngOnInit(){
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log('loggedInUser ',this.loggedInUser);
  }

  //reset session
  logout()
  {
    localStorage.removeItem("loggedInUser");
    console.log('currentUser has been removed sucessfuly');
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }
}
