import { GetAllProjectsService } from './get-all-projects.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  user_id=sessionStorage.getItem('ID');
  Allproject:any;
  constructor(private service:GetAllProjectsService,private router:Router) { }

  ngOnInit(): void {
      this.getAllData();
     
  }


  //Method will be called when the user wants to see all the project from the database.
  getAllData()
  {
    this.service.getAllProjects().subscribe(data=>
      {
          this.Allproject=data;
          console.log(this.Allproject)
      })
  }

  //Method will be caled when the user want to see any project in details
  getDetailedProject(data:any)
  {
   this.service.saveProjectInfo(data);

   this.router.navigate(['/projectDetail',this.user_id]);
  }


  //Will be called when the user wants to creates a new project
  createOwnProject()
  {
    this.router.navigate(['/project']);
  }


}
