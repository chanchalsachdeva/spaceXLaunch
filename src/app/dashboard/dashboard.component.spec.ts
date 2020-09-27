import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProviderService } from '../services/dashboard-provider.service';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:[DashboardProviderService],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be call getData', () => {
    spyOn(component,'getSpaceData').and.callThrough();
    component.getSpaceData('','','');
    expect(component.getSpaceData).toHaveBeenCalled();
  });
});
