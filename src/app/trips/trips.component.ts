import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { Destination } from '../destination';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips: Trip[] = [];
  trip: Trip = new Trip();
  
  constructor(private tripsService: TripsService) { }

  ngOnInit() {
    this.tripsService.getAllTrips().subscribe(trips => {
      console.log(trips);
      this.trips = trips;
    });
  }

}
