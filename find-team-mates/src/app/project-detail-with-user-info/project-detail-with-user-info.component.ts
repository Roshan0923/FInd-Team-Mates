import { user_request } from './user_request';
import { DialogJoinGroupComponent } from './../dialog-join-group/dialog-join-group.component';
import { GetAllProjectsService } from './../all-projects/get-all-projects.service';
import { ProjectDetailWithUserService } from './project-detail-with-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-detail-with-user-info',
  templateUrl: './project-detail-with-user-info.component.html',
  styleUrls: ['./project-detail-with-user-info.component.css']
})
export class ProjectDetailWithUserInfoComponent implements OnInit {

current_logged_in_user_id=5;
  user_request_message:any
  project_data: any
  user_data: any[];
  technology:any[];
  languale:any[];
  u_reques: user_request;
  constructor(private route: ActivatedRoute,public dialog:MatDialog, private service: ProjectDetailWithUserService, private projectInfoservice: GetAllProjectsService) {
    this.project_data = this.projectInfoservice.retriveProjectInfo();
    this.u_reques=new user_request();
   }


  ngOnInit(): void {
    let user_id = parseInt(this.route.snapshot.paramMap.get('user_id'));
   this.user_data= this.getUSerInfo(user_id);
    this.project_data = this.projectInfoservice.retriveProjectInfo();
    console.log(this.project_data)

   //  console.log(this.user_data);
  }

  getUSerInfo(user_id: any) {
    var user_info: any = [];
  this.service.getUserCreatedProjects(user_id).subscribe(data => {
      let temp = data['image'];
      data['image'] = 'data:image/jpeg;base64,' + temp;
      user_info.push(data);
      
    var tech_slpit=this.user_data[0].technology.split(',');
    this.technology=tech_slpit;
    var language=this.user_data[0].language.split(',');
    this.languale=language;
  
   
      
    });
      return user_info;
  }


  animal: string;
  name: string;
  openDialog()
  {
   let dialogRef= this.dialog.open(DialogJoinGroupComponent,{ width: '350px',height:'200px',
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
        this.service.storeUserRequestToJoin(this.u_reques);
      }
     
    });
  }

}
