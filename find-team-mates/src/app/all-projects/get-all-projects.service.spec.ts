import { TestBed } from '@angular/core/testing';

import { GetAllProjectsService } from './get-all-projects.service';

describe('GetAllProjectsService', () => {
  let service: GetAllProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
