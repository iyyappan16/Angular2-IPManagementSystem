import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-ip',
  templateUrl: './add-ip.component.html',
  styleUrls: ['./add-ip.component.css']
})
export class AddIpComponent implements OnInit {

    currentUser;
    ut = '';
    dbipcount;
    invalidipErrMsg='';
    db_table;
    constructor(public router: Router) {
        this.ut= JSON.parse(localStorage.getItem('loggedInUser')).userType;
        this.currentUser = JSON.parse(localStorage.getItem('loggedInUser')).userName;
        this.dbipcount = JSON.parse(localStorage.getItem("UserIp-"+this.currentUser)) ? JSON.parse(localStorage.getItem("UserIp-"+this.currentUser)).length:0;
        this.db_table = JSON.parse(localStorage.getItem("UserIp-"+this.currentUser));
    }
    ngOnInit() { }
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    get totalRows(): number {
        return this.fieldArray.length;
      }
      //ip address validation
       validateIPaddress(ipaddress)   
      {  
       if (/^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/.test(ipaddress))  
        { 
          return (true)  
        }  
      return (false)  
      }  
    // add IP in form based on user type
    addFieldValue() {
        console.log('this.newAttribute ',this.newAttribute);
        if(!this.validateIPaddress(this.newAttribute.code)){
            this.invalidipErrMsg = "Please enter IP address in valid format";
            return
        }else{
            this.invalidipErrMsg = '';
            if(this.ut == 'Basic')
            {
                if(this.fieldArray.length <=4 ){
                this.fieldArray.push(this.newAttribute);
                this.newAttribute = {};
                    }
                    else{
                    alert("You are a Basic User. You can add only 5 IP address.");
                    }
            }
            else if(this.ut == 'Premium')
            {
                if(this.fieldArray.length <=9 ){
                    this.fieldArray.push(this.newAttribute);
                    this.newAttribute = {};
                    }
                    else
                    {
                    alert("You are a Premium User. You can add only 10 IP address.");
                    }
                }
            else{
                alert("Not a valid user type");
            }

        }
    }

    //save user IP's based on user type
    saveFieldValue() {
      if(this.fieldArray.length>0)
      {
            if(this.ut == 'Basic'){
                if((this.fieldArray.length + this.dbipcount) <=5 ){
                    if(this.db_table) {
                    let ips = this.fieldArray.concat(this.db_table);
                    localStorage.setItem("UserIp-"+this.currentUser,JSON.stringify(ips));
                    alert("IP address added sucessfully.!");
                    this.router.navigate(['/index']);
                    }
                    else {
                    localStorage.setItem("UserIp-"+this.currentUser,JSON.stringify(this.fieldArray));
                    alert("IP address added sucessfully.!");
                    this.router.navigate(['/index']);
                    this.dbipcount = this.db_table.length;
                    }
                
                }
                else{
                    alert("You are a Basic User. You can add only 5 IP address.");
                }
            }
            else if(this.ut == 'Premium'){
                if((this.fieldArray.length + this.dbipcount) <=10 ){
                    if(this.db_table) {
                        let ips = this.fieldArray.concat(this.db_table);
                        localStorage.setItem("UserIp-"+this.currentUser,JSON.stringify(ips));
                        alert("IP address added sucessfully.!");
                        this.router.navigate(['/index']);
                    }
                    else {
                        localStorage.setItem("UserIp-"+this.currentUser,JSON.stringify(this.fieldArray));
                        alert("IP address added sucessfully.!");
                        this.router.navigate(['/index']);
                        this.dbipcount = this.db_table.length;
                    }
                    
                    }
                else{
                    alert("You are a Premium User. You can add only 10 IP address.");
                }
            }
        }
      else{
          alert("Please Enter IP Address")
        }

    }      
        
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
 }
