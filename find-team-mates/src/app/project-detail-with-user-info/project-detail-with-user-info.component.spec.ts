import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailWithUserInfoComponent } from './project-detail-with-user-info.component';

describe('ProjectDetailWithUserInfoComponent', () => {
  let component: ProjectDetailWithUserInfoComponent;
  let fixture: ComponentFixture<ProjectDetailWithUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailWithUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailWithUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
