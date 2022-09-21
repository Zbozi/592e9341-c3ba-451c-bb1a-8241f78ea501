import { createReducer, on } from '@ngrx/store';

import { Event } from './models/event';
import { eventsFetchAPISuccess } from './events.action';

//The 'Reducer' is a purce function, that gets invoked by actions and
//then generates a new state in the store based on the action

export const initialState: ReadonlyArray<Event> = [];

export interface AppState {
  allEvents: ReadonlyArray<Event>;
  selectedEvents: Event[];
}

/**
 * Using 'createReducer' that loads from @ngrx/store we created the eventREcuders
 * by sending initial state as an input parameter an on to register the fetch action
 */
export const eventReducer = createReducer(
  initialState,
  on(eventsFetchAPISuccess, (state, { allEvents }) => {
    return allEvents;
  })
);
