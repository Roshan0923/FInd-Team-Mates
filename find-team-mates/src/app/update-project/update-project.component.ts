import { StoreUserSelectedDataService } from './store-user-selected-data.service';
import { UpdateProjectService } from './update-project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})

//When the user is logged in and the user wants access his created projects
export class UpdateProjectComponent implements OnInit {
  user_id=+sessionStorage.getItem('ID');

  project_data:any;

  constructor(private service:UpdateProjectService,private userDataService :StoreUserSelectedDataService,private router:Router) { }

  ngOnInit(): void {
    this.getProjectContentByUserId(this.user_id);
  }

//Method to get the projec by USER_ID (using service)
  getProjectContentByUserId(user_id:number)
  {
    console.log("gettong data of the "+user_id);
    this.service.getUserCreatedProjects(user_id).subscribe(data=>{
      this.project_data=data;
      console.log("initial")
      console.log(this.project_data);
    });
  }

  
  onClickTOProjectDetails(data:any)
  {
    console.log("on click to project detail")
    console.log(data)
    //Stroring the user selected project in a service
   this.userDataService.saveUserData(data);
   //Navigating the user to user-selected-project component.
   this.router.navigate(['/updateProjectDetails']);
  }

  onClickToDeletProject(data:any)
  {
    console.log(data.project_id);
    this.service.deleteUserSelectedProject(this.user_id,data.project_id).subscribe(data=>
      {
       this.getProjectContentByUserId(this.user_id);
      });
  }
}
