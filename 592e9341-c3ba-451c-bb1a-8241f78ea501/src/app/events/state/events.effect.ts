import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';

import { EventsService } from '../events.service';
import { eventsFetchAPISuccess, invokeEventsAPI } from './events.action';
import { selectEvents } from './events.selector';

/**
 * The effects are invoked by the actions to call the API
 */
@Injectable()
export class EventsEffect {
  constructor(
    private action$: Actions,
    private eventsService: EventsService,
    private store: Store
  ) {}

  /**
   * If the data does not already exist, invoke the API call, on receiving a successful response save it store by
   * calling the 'bookFetchAPISuccess'(action) otherwise return an 'EMPTY' observable
   *
   * - ofType(): It takes actions as Input and allows execution-only by the action that registered with the got invoked
   * - withLatestFrom(): loads from the rxjs and outputs the latest result of an observable, trying to fetch data from the
   * sotre if it already exists
   *
   * - mergeMap(): 1. first parameter undefined becaus of ofType observable has a void action method, 2. The second input
   * parameter comes from the 'withLatestFrom'
   *  */
  loadAllEvents$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeEventsAPI),
      withLatestFrom(this.store.pipe(select(selectEvents))),
      mergeMap(([, eventsFromStore]) => {
        if (eventsFromStore.length > 0) {
          return EMPTY;
        }
        return this.eventsService
          .getAllEvents()
          .pipe(map((data) => eventsFetchAPISuccess({ allEvents: data })));
      })
    )
  );
}
