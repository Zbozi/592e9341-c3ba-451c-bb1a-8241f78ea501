import { createFeatureSelector, createSelector } from '@ngrx/store';
import { groupBy } from 'lodash';

import { Event } from './models/event';

//The 'Selector' is used to fetch any number of slices of data from the store into the component.

/**
 * The selector is used to fetch all the data from the event module.
 * The name 'eventlist' of our selector must be used to register the 'eventReducer'
 * into the 'events.module.ts' to register the feature or child store.
 */
export const selectEvents = createFeatureSelector<Event[]>('event-list');

export const selectShoppingCartState =
  createFeatureSelector<ReadonlyArray<Event>>('shopping-cart');

export const selectShoppingCart = createSelector(
  selectEvents,
  selectShoppingCartState,
  (eventList, shoppingCart) => {
    return shoppingCart.map((event) =>
      eventList.find((e) => e._id === event._id)
    );
  }
);

//Group events by date, retunrs = [{date:Date, events: Event[]}]
export const selectEventGroupsByDate = createSelector(
  selectEvents,
  (events) => {
    let data = new Set(events.map((item) => new Date(item.date)));
    console.log(data);
    let resultData = [];
    data.forEach((date) => {
      resultData.push({
        date: date,
        events: events.filter((i) => new Date(i.date) === date),
      });
    });
    console.log(resultData);
    return resultData;
  }
);

//Group events by date, retunrs = [{date:Date, events: Event[]}]
export const selectEventGroupsByDateLoDash = createSelector(
  selectEvents,
  (events) => {
    let groupedEvents = groupBy(events, 'date');
    console.log(groupedEvents);
    return groupedEvents;
  }
);
