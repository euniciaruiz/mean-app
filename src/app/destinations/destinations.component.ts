import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private destinationService: DestinationsService) { }
  destinations: any = [];
  
  ngOnInit() {
    this.destinationService.getAllDestinations().subscribe( destinations => {
      this.destinations = destinations;
    })
  }

}
