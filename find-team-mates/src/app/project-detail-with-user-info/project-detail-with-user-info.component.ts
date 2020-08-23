import { user_request } from './user_request';
import { DialogJoinGroupComponent } from './../dialog-join-group/dialog-join-group.component';
import { GetAllProjectsService } from './../all-projects/get-all-projects.service';
import { ProjectDetailWithUserService } from './project-detail-with-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from "angular-notifier";
@Component({
  selector: 'app-project-detail-with-user-info',
  templateUrl: './project-detail-with-user-info.component.html',
  styleUrls: ['./project-detail-with-user-info.component.css']
})
export class ProjectDetailWithUserInfoComponent implements OnInit {

current_logged_in_user_id=+sessionStorage.getItem('ID');
  user_request_message:any
  project_data: any
  registered_user_list:any;
  user_data: any[];
  technology:any[];
  languale:any[];
  u_reques: user_request;
  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService,private _routeNaviagte:Router, private route: ActivatedRoute,public dialog:MatDialog, private service: ProjectDetailWithUserService, private projectInfoservice: GetAllProjectsService) {
    this.project_data = this.projectInfoservice.retriveProjectInfo();
    this.u_reques=new user_request();
    this.notifier = notifierService;
   }


  ngOnInit(): void {
    //Getting the user_id of the user who created the project(WHich is selected by the current logged in user)
    let user_id_temp = parseInt(this.route.snapshot.paramMap.get('user_id'));
    //Method is called to get the user_ddetail who created the project
    console.log("user id who created the project is"+user_id_temp);
   this.user_data= this.getUSerInfo(user_id_temp);
   //Method is called to get the project detail(Which is selected by the current logged in user to see the details)
    this.project_data = this.projectInfoservice.retriveProjectInfo();
    //console.log(this.project_data)

   //  console.log(this.user_data);
  }


  //This method is called to get the user detail who created the project.
  getUSerInfo(user_id: any) {
    var user_info: any = [];
  this.service.getUserInfo(user_id).subscribe(data => {
      let temp = data['image'];
      data['image'] = 'data:image/jpeg;base64,' + temp;
      user_info.push(data);
      
    var tech_slpit=this.user_data[0].technology.split(',');
    this.technology=tech_slpit;
    var language=this.user_data[0].language.split(',');
    this.languale=language;

    this.service.getregisteredUserList(this.project_data.project_id).subscribe(data=>{
      this.registered_user_list=data;
      console.log(this.registered_user_list);
    })
      
    });
    console.log("pring the list of registered user")
    console.log(this.registered_user_list);
      return user_info;

  }


  animal: string;
  name: string;
  openDialog()
  {
    console.log(this.registered_user_list);
   let dialogRef= this.dialog.open(DialogJoinGroupComponent,{ width: '250px',
   data: {name: this.name, animal: this.animal}});
   dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user_request_message = result;
      if(result !="false")
      {
        console.log("called")
        this.u_reques.message=this.user_request_message
        this.u_reques.project_id=this.project_data.project_id;
        this.u_reques.user_id=this.project_data.user_id
        this.u_reques.request_user_id=this.current_logged_in_user_id
        this.service.storeUserRequestToJoin(this.u_reques).subscribe((data)=>{
          this.notifier.notify("success","Your message has been sent successfully.You will be notified via Email regarding the decision.")
        },
        (error)=>{
          console.log("error"+error)
        });
      }
     
    });
  }

  
  visitProfile(req_user_id:any)
  {
    console.log(req_user_id)
    this._routeNaviagte.navigate(['/profile',req_user_id]);
  }

}
