import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DestinationsService {

  constructor(private http: Http) { }

  getAllDestinations() {
    return this.http.get('/api/destinations').map(res => res.json());
  }
}
