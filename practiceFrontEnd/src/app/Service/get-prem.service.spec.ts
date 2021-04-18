import { TestBed } from '@angular/core/testing';

import { GetPremService } from './get-prem.service';

describe('GetPremService', () => {
  let service: GetPremService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPremService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
