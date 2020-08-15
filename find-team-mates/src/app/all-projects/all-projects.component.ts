import { GetAllProjectsService } from './get-all-projects.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  user_id=8;
  Allproject:any;
  constructor(private service:GetAllProjectsService,private router:Router) { }

  ngOnInit(): void {
      this.getAllData();
     
  }

  getAllData()
  {
    this.service.getUserCreatedProjects().subscribe(data=>
      {
          this.Allproject=data;
          console.log(this.Allproject)
      })
  }

  getDetailedProject(data:any)
  {
   this.service.saveProjectInfo(data);

   this.router.navigate(['/projectDetail',this.user_id]);
  }


}
