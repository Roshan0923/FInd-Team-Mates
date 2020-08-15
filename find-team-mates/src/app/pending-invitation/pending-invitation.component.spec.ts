import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvitationComponent } from './pending-invitation.component';

describe('PendingInvitationComponent', () => {
  let component: PendingInvitationComponent;
  let fixture: ComponentFixture<PendingInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
