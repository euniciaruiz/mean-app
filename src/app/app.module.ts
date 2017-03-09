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

const ROUTES = [
  {
    path: '',
    redirectTo: 'destinations',
    pathMatch: 'full'
  },
  {
    path: 'destinations',
    component: DestinationsComponent
  }, {
    path: 'trips',
    component: TripsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    TripsComponent,

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
