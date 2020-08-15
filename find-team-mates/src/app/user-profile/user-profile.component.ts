import { ProjectDetailWithUserService } from './../project-detail-with-user-info/project-detail-with-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user_id:number;
  user_data: any[];
  technology:any[];
  languale:any[];
  constructor(private service:ProjectDetailWithUserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id = parseInt(this.route.snapshot.paramMap.get('req_user_id'));
    this.user_data= this.getUSerInfo(this.user_id);
    console.log(this.user_data);
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
}
