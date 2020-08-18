import { ProjectDetailWithUserService } from './../project-detail-with-user-info/project-detail-with-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  user_id=sessionStorage.getItem('ID');
  user_data: any[];
  technology:any[];
  languale:any[];

  constructor(private service:ProjectDetailWithUserService) { }

  ngOnInit(): void {
    this.user_data=  this.getUSerInfo(this.user_id);
    console.log(this.user_data);

  }

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
    });
      return user_info;
  }

}
