import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Destination } from './destination';
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

  getDestination(loc: number) {
    return this.http.get('/api/destinations/'+loc).map(res => res.json()); 
  }

  updateDestination(dest: Destination) {
    let url = "http://localhost:8888/travelApp_API/updateDestination.php";
    this.headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let data = "id="+dest.id+"&location="+dest.location+"&type="+dest.type;
    this.http.post(url, data, {headers: this.headers})
      .map(res => res.json())
      .subscribe(data => console.log(data));    
  }


}
