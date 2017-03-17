import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Trip } from './trip';
import 'rxjs/add/operator/map';

@Injectable()
export class TripsService {

  constructor(private http: Http) { }
  trips: any;
  headers: Headers = new Headers();
  getAllTrips(){
    this.trips = this.http.get('/api/trips').map(res => res.json());
    return this.trips;
  }

  getTrip(id: number){
   return this.http.get('/api/trip/'+id).map(res => res.json()); 
  }

  updateTrip(trip: Trip){
    let url = "http://localhost:8888/travelApp_API/updateTrip.php";
    this.headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let data = "id="+trip.id+"&amount="+trip.amount+"&location="+trip.location.id;
    this.http.post(url, data, {headers: this.headers})
      .map(res => res.json())
      .subscribe( data => console.log(data));
  }
}
