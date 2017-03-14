import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Destination } from '../destination';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})

export class DestinationDetailComponent implements OnInit {
  types: string[] = ['local', 'international'];
  destination: Destination = new Destination();
  id: number; 
  constructor(private route: ActivatedRoute, private router: Router, private destService: DestinationsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.destService.getDestination(this.id).subscribe(dest => {
      this.destination = dest;
      console.log(this.destination);
    });
  }

  updateDestination(): void {
    this.destService.updateDestination(this.destination);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
