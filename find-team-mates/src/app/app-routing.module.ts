import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PendingInvitationComponent } from './pending-invitation/pending-invitation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectDetailWithUserInfoComponent } from './project-detail-with-user-info/project-detail-with-user-info.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { UpdateProjectDetailsComponent } from './update-project-details/update-project-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {
    path:'register',component:RegisterComponent
  },  {
    path:'project',component:CreateProjectComponent,canActivate:[AuthGuard]
  },
  {
    path:'projectById',component:UpdateProjectComponent,canActivate:[AuthGuard]
  },
  {
    path:'updateProjectDetails',component:UpdateProjectDetailsComponent,canActivate:[AuthGuard]
  },
  {
    path:'allProjects',component:AllProjectsComponent,canActivate:[AuthGuard]
  },
  {
    path:'projectDetail/:user_id',component:ProjectDetailWithUserInfoComponent,canActivate:[AuthGuard]
  },
  {
    path:'profile/:req_user_id',component:UserProfileComponent,canActivate:[AuthGuard]
  },
  {
    path:'updateProfile',component:UpdateProfileComponent,canActivate:[AuthGuard]
  },
  {
    path:'request',component:PendingInvitationComponent,canActivate:[AuthGuard]
  },
  {path : '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
