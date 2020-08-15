import { TestBed } from '@angular/core/testing';

import { GetPendingRequestService } from './get-pending-request.service';

describe('GetPendingRequestService', () => {
  let service: GetPendingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPendingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
