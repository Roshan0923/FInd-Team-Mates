import { GetPendingRequestService } from './get-pending-request.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-invitation',
  templateUrl: './pending-invitation.component.html',
  styleUrls: ['./pending-invitation.component.css']
})
export class PendingInvitationComponent implements OnInit {

  constructor(private service:GetPendingRequestService,private router:Router) { }
  user_id=1;
  project_data:any
  ngOnInit(): void {
   this.service.getPendingRequest(this.user_id).subscribe(data=>{
      this.project_data=data;
      console.log(data);
      
    });;
    console.log(this.project_data);
  }

  visitProfile(req_user_id:any)
  {
    console.log(req_user_id)
    this.router.navigate(['/profile',req_user_id]);
  }

  onAcceptedRequest(data:any)
  {
    console.log(data)
     var val=1;
  this.service.sendEmail(data,val).subscribe(datap=>
    {
      console.log(datap)
    })
  }

  onDeleteRequest(data:any)
  {
    var val=0;
    this.service.sendEmail(data,val).subscribe(datap=>
      {
        console.log(datap)
      })
  }
}
