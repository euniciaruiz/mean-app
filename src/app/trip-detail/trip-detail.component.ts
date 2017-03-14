import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Trip } from '../trip';
import { Destination } from '../destination';
import { TripsService } from '../trips.service';
import { DestinationsService } from '../destinations.service'
@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  id: number;
  trip: Trip = new Trip();
  allDestinations: Destination[];
  details: Destination = new Destination();
  private sub: any;


  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripsService, private destinationService: DestinationsService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.tripService.getTrip(this.id).subscribe(trip => {
      this.trip = trip;
      this.details = trip.location;
    });

    this.destinationService.getAllDestinations().subscribe(destinations => {
      this.allDestinations = destinations;
    })

  }

  goBack(): void {
    this.router.navigate(['/trips']);
  }

  updateTrip(trip: Trip, details: number): void {
    this.trip = trip;

    this.destinationService.getDestination(details).subscribe(destination => {
      this.trip.location = destination;
      this.tripService.updateTrip(this.trip);
    });
  }
}
