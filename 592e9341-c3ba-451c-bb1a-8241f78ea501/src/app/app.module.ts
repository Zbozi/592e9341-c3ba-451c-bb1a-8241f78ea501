import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [AppComponent, EventComponent, EventListComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EventComponent],
})
export class AppModule {}
