import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, from, of, zip } from 'rxjs';
import { groupBy, mergeMap, toArray, mergeAll } from 'rxjs/operators';

import { invokeEventsAPI } from '../state/events.action';
import {
  selectEventGroupsByDate,
  selectEvents,
  selectShoppingCart,
  selectEventGroupsByDateLoDash,
} from '../state/events.selector';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  constructor(private store: Store) {}

  //events$ observable that listens for the changes from the store, 'selectEvents to fetch all the data from the store
  events$ = this.store.pipe(select(selectEvents));

  //
  groupedEvents = this.store.pipe(select(selectEventGroupsByDateLoDash));

  //TODO: shopping cart
  shoppingCart$ = this.store.select(selectShoppingCart);

  /*groupedEvents$ = this.store.pipe(
    select(selectEvents),
    mergeAll(),
    groupBy(
      (event) => new Date(event.date),
      (e) => e
    ),
    mergeMap((group) => zip(of(group.key, group.pipe(toArray()))))
  );
  */

  ngOnInit(): void {
    //Invoke 'invokeEventsApi' action method which will invoke ngrx that invokes an API call
    this.store.dispatch(invokeEventsAPI());
  }
}
