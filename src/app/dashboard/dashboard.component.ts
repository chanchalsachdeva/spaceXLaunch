import { Component, OnInit } from '@angular/core';
import { DashboardProviderService } from '../services/dashboard-provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  spaceData: any;
  years: any = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  launch_val: boolean[] = [true, false];
  land_val: boolean[] = [true, false];
  launch_year: any = "";
  launch_bool_val: any = "";
  land_bool_val: any = "";
  loader: any;

  constructor(public _dashboardService: DashboardProviderService) { }

  ngOnInit(): void {
    this.getSpaceData('','','');
  }

  getSpaceData(launch_bool_val, land_bool_val, launch_year) {
    console.log(launch_year + " " + launch_bool_val + " " + land_bool_val);
    this.launch_year = launch_year;
    this.launch_bool_val = launch_bool_val;
    this.land_bool_val = land_bool_val;
    this.loader = true;
    this._dashboardService.getData(this.launch_bool_val, this.land_bool_val, this.launch_year).subscribe(
      data => {
      this.loader = false;
      this.spaceData = data;
        console.log(data)
      },
      err => console.error(err),
      () => console.log('done loading data')
    );
  }

}
