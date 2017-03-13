import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DestinationsService {

  constructor(private http: Http) { }

  headers = new Headers();
  getAllDestinations() {
    return this.http.get('/api/destinations').map(res => res.json());
  }

  createDestination(data){
    let d = "location=" + data.location + "&type="+data.type;
    this.headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.http.post('http://localhost:8888/travelApp_API/createDestination.php', d, {headers: this.headers})
    .map(res => res.json())
    .subscribe( data => console.log(data));
  }

  getDestination(loc: string) {
    return this.http.get('/api/destinations/'+loc).map(res => res.json()); 
  }
}
