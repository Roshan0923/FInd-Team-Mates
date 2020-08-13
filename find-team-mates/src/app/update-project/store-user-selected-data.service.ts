import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUserSelectedDataService {


  userSelectedData:Array<any>=[];
  constructor() { }
  //To store the user selected project information
  saveUserData(data:any)
  {
    console.log(data);
    this.userSelectedData=data;
  }
  //To retrive the user selected project details
  retriveUserData()
  {
    console.log("inside the servide");
 //   console.log(this.userSelectedData);
    return this.userSelectedData;
  }

}
