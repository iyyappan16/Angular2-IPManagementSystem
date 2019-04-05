import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-ip',
  templateUrl: './delete-ip.component.html',
  styleUrls: ['./delete-ip.component.css']
})
export class DeleteIpComponent implements OnInit {

  fieldArray = [];
  loggedInUser:any;
  deleteIpIndexes = [];
  constructor() { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    this.fieldArray = JSON.parse(localStorage.getItem("UserIp-"+this.loggedInUser.userName));
  }
  //deleting selected IP's
  deleteIp(index){
    if(this.deleteIpIndexes.length>0)
    {
      if(confirm("Are you sure to delete selected IP.? ")) {
        let localIpList = [];
        console.log('index of selected item ',index);
        if(this.deleteIpIndexes.length>=1){
          for(let i=0;i<this.fieldArray.length;i++){
            if(this.deleteIpIndexes.indexOf(i) == -1){
              localIpList.push(this.fieldArray[i]);
            }
          }
        }
        if(this.deleteIpIndexes.length)
        this.fieldArray = localIpList;
        this.deleteIpIndexes = [];
        localStorage.setItem("UserIp-"+this.loggedInUser.userName,JSON.stringify(this.fieldArray))
        alert("Selected IP's has been deleted sucessfully.!");
      }
      else
      {console.log("Delete Operation Cancelled.!");}
    }
    else{alert("Please select check box")}
  }

  // checkbox => checked/unchecked conditions
  deleteAllIp(deleteCheck,rowIndex){
    if(deleteCheck.checked &&  this.deleteIpIndexes.indexOf(rowIndex)==-1){
      this.deleteIpIndexes.push(rowIndex);
    } else if(!deleteCheck.checked  && this.deleteIpIndexes.indexOf(rowIndex) !=-1){
      this.deleteIpIndexes.splice(this.deleteIpIndexes.indexOf(rowIndex),1)
    }
    console.log('deleteCheck ',deleteCheck.checked, 'rowIndex ',rowIndex);
  }

}
