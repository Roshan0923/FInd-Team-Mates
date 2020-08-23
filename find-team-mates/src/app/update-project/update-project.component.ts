import { NotifierService } from 'angular-notifier';
import { StoreUserSelectedDataService } from './store-user-selected-data.service';
import { UpdateProjectService } from './update-project.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})

//When the user is logged in and the user wants access his created projects
export class UpdateProjectComponent implements OnInit {
  user_id=+sessionStorage.getItem('ID');

  project_data:any;
  errorMessage=""
  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService,private _aRoute:ActivatedRoute,private service:UpdateProjectService,private userDataService :StoreUserSelectedDataService,private router:Router) { 
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getProjectContentByUserId(this.user_id);
    this._aRoute.queryParams
    .subscribe(params => {
      if(params.created !== undefined && params.created === 'true') {
        this.notifier.notify("success", "Your Project created successfully.You can edit your project details here.");
      }
      if(params.deleted !== undefined && params.deleted === 'true') {
        this.notifier.notify("info", "Your Project Deletd successfully.");
      }
      if(params.updated !== undefined && params.updated === 'true') {
        this.notifier.notify("info", "Your Project Updated successfully.");
      }
    });
  }

//Method to get the projec by USER_ID (using service)
  getProjectContentByUserId(user_id:number)
  {
    console.log("gettong data of the "+user_id);
    this.service.getUserCreatedProjects(user_id).subscribe((data)=>{
      this.project_data=data;
      console.log("initial")
      console.log(this.project_data);
    },(error)=>{
    this.errorMessage="Error while fetching the data.Server Error please try again later."
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
        this.router.navigate(['/projectById'],{queryParams: { deleted: 'true'}});
       this.getProjectContentByUserId(this.user_id);

      });
  }
}
