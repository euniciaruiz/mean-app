import { Component,Input, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service';
import { Destination } from '../destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private destinationService: DestinationsService) { }
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





}
