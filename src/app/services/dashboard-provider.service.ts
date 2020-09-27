import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {baseUrl} from '../config/baseurl';
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardProviderService {

  constructor(
    private http:HttpClient
    ) { }

  //https://api.spacexdata.com/v3/launches?limit=20&launch_success=true&land_success=true&launch_year=2014
  getData(launch_val,land_val,launch_year){
    return this.http.get(baseUrl+"&launch_success="+launch_val+"&land_success="+land_val+"&launch_year="+launch_year);
  }
}
