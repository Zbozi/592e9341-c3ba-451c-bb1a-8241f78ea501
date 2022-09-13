import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Event } from 'src/models/event';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  //events: Event[];
  events: any = [];
  constructor(public api: BackendService) {}

  ngOnInit() {
    this.loadEvents();
  }
  loadEvents() {
    //load events object
    //parse events to Event Array
    //store/cache event array => im Appmodule?
    return this.api.getEvents().subscribe((data: {}) => {
      this.events = data;
    });
  }
}
