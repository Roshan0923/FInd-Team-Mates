import { TestBed } from '@angular/core/testing';

import { ProjectDetailWithUserService } from './project-detail-with-user.service';

describe('ProjectDetailWithUserService', () => {
  let service: ProjectDetailWithUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDetailWithUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
