import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationsService } from '../destinations.service';
import { Destination } from '../destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private destinationService: DestinationsService, private router: Router) { }
  destinations: Destination[] = [];
  @Input()
  destination: Destination = new Destination();

  types = ['local', 'international'];
  ngOnInit() {
    this.destinationService.getAllDestinations().subscribe( destinations => {
      this.destinations = destinations;
    });
  }

  createDestination() {
    this.destinationService.createDestination(this.destination);
  }

  selectedDestination(dest: Destination) {
    this.router.navigate(['/destination', dest.id]);
  }





}
