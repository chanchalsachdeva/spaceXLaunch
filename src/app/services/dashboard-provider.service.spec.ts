import { TestBed } from '@angular/core/testing';

import { DashboardProviderService } from './dashboard-provider.service';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardProviderService', () => {
  let service: DashboardProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(DashboardProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call getData', () => {
    spyOn(service,'getData').and.callThrough();
    service.getData('','','');
    expect(service.getData).toHaveBeenCalled();
  });
});
