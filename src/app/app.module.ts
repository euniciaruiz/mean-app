import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';

import { DestinationsService } from './destinations.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'destinations',
    pathMatch: 'full'
  },
  {
    path: 'destinations',
    component: DestinationsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DestinationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
