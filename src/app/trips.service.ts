import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TripsService {

  constructor(private http: Http) { }

  getAllTrips(){
    return this.http.get('/api/trips').map(res => res.json());
  }

}
