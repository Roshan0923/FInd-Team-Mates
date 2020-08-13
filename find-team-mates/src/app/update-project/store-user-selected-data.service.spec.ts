import { TestBed } from '@angular/core/testing';

import { StoreUserSelectedDataService } from './store-user-selected-data.service';

describe('StoreUserSelectedDataService', () => {
  let service: StoreUserSelectedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreUserSelectedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
