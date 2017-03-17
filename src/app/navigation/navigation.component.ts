import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  places: string[] = ['Home', 'Destinations', 'Trips'];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(place: string): void {
    let p = place.toLowerCase();
    this.router.navigate(['/'+p]);
  }

}
