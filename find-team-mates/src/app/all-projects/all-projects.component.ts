import { FilterPipe } from './filter.pipe';
import { GetAllProjectsService } from './get-all-projects.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],


})
export class AllProjectsComponent implements OnInit {


  Search="";
  isError=false;
  user_id=sessionStorage.getItem('ID');
  Allproject:any;
  constructor(private service:GetAllProjectsService,private router:Router) {
   }

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
      },(error)=>
      {
      this.isError=true;
      })
  }

  //Method will be caled when the user want to see any project in details
  getDetailedProject(data:any)
  {
   this.service.saveProjectInfo(data);

   this.router.navigate(['/projectDetail',data.user_id]);
  }


  //Will be called when the user wants to creates a new project
  createOwnProject()
  {
    this.router.navigate(['/project']);
  }


}
