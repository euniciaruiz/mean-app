import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { TripsComponent } from './trips/trips.component';

import { DestinationsService } from './destinations.service';
import { TripsService } from './trips.service';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const ROUTES = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'destinations',
    component: DestinationsComponent
  }, {
    path: 'trips',
    component: TripsComponent
  },
  {
    path: 'trip/:id',
    component: TripDetailComponent
  },
  {
    path: 'destination/:id',
    component: DestinationDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    TripsComponent,
    TripDetailComponent,
    DestinationDetailComponent,
    NavigationComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DestinationsService, TripsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
