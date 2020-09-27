import { TestBed } from '@angular/core/testing';

import { DashboardProviderService } from './dashboard-provider.service';

describe('DashboardProviderService', () => {
  let service: DashboardProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
