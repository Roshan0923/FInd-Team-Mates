import { GetPendingRequestService } from './get-pending-request.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from "angular-notifier";
@Component({
  selector: 'app-pending-invitation',
  templateUrl: './pending-invitation.component.html',
  styleUrls: ['./pending-invitation.component.css']
})
export class PendingInvitationComponent implements OnInit {

  private readonly notifier: NotifierService;
  constructor(notifierService: NotifierService,private service:GetPendingRequestService,private router:Router,private _aRoute:ActivatedRoute) {
    this.notifier = notifierService;
   }
  //User id is stored here
  user_id=sessionStorage.getItem('ID');

  isError=false;
  showSpinner=false;
  project_data:any
  ngOnInit(): void {
    this._aRoute.queryParams
    .subscribe(params => {
      if(params.decision !== undefined && params.decision === 'true') {
        this.notifier.notify("success", "Your Decision has been notified via email.");
      }});
   this.service.getPendingRequest(this.user_id).subscribe(data=>{
      this.project_data=data;
      console.log(data);
      
    },(error)=>{
   this.isError=true;
   this.notifier.notify("error","Error while fetching the data.Please try agian later.")
    });;
  //  console.log(this.project_data);
  
  }

  visitProfile(req_user_id:any)
  {
    console.log(req_user_id)
    this.router.navigate(['/profile',req_user_id]);
  }

  onAcceptedRequest(data:any)
  {
    this.showSpinner=true;
    console.log(data)
     var val=1;
  this.service.sendEmail(data,val).subscribe(datap=>
    {
      this.showSpinner=false;
     
      this.router.navigate(['/request'],{queryParams: { decision: 'true'}});
    })
  }

  onDeleteRequest(data:any)
  {
    this.showSpinner=true;
    var val=0;
    this.service.sendEmail(data,val).subscribe(datap=>
      {
        this.showSpinner=false;
  
        this.router.navigate(['/request'],{queryParams: { decision: 'true'}});
       
      })
  }
}
