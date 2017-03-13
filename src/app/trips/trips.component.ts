import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private tripsService: TripsService, private router: Router) { }

  ngOnInit() {
    this.tripsService.getAllTrips().subscribe(trips => {
      console.log(trips);
      this.trips = trips;
    });

    
  }

  onSelectTrip(trip: Trip){
    this.router.navigate(['/trip', trip.id]);
  }

}
