import { RegisterUserService } from './register/register-user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateProjectDetailsComponent } from './update-project-details/update-project-details.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectDetailWithUserInfoComponent } from './project-detail-with-user-info/project-detail-with-user-info.component';
import { DialogJoinGroupComponent } from './dialog-join-group/dialog-join-group.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PendingInvitationComponent } from './pending-invitation/pending-invitation.component';
import { AuthGuard } from './auth.guard';
import { TokenIntercepterService } from './token-intercepter.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { NgxPopper } from 'angular-popper';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './all-projects/filter.pipe';
import { NotifierModule } from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomePageComponent,
    HeaderComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    UpdateProjectDetailsComponent,
    AllProjectsComponent,
    ProjectDetailWithUserInfoComponent,
    DialogJoinGroupComponent,
    UserProfileComponent,
    PendingInvitationComponent,
    UpdateProfileComponent,
    AboutUsComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgbModule,FormsModule,MatNativeDateModule, NgxPopper,NotifierModule

  ],
  entryComponents:[DialogJoinGroupComponent],
  providers: [RegisterUserService,MatDatepickerModule,AuthGuard,
  // {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:TokenIntercepterService,
  //   multi:true
  // }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
