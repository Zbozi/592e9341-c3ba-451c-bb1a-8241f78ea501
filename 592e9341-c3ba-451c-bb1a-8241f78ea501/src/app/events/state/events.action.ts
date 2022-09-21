import { createAction, props } from '@ngrx/store';
import { Event } from './models/event';
/**
 * Action that invokes the API call
 */
export const invokeEventsAPI = createAction(
  '[Events API] Invoke Events Fetch API'
);

/**
 * Method invoked after the API call is successful.
 * It saves the API reponse into the store.
 *
 * To send input parameters to the action the paramter needs to be wrapped with 'props'.
 */
export const eventsFetchAPISuccess = createAction(
  '[Events API] Fetch API Success',
  props<{ allEvents: Event[] }>()
);

/**
 * TODO add to selected list
 */
export const addEventToCart = createAction(
  '[Event Cart] Add Event to cart',
  props<{ eventId: string }>()
);

/**
 * TODO add to selected list
 */
export const removeEventFromCart = createAction(
  '[Event Cart] Remove Event from cart',
  props<{ eventId: string }>()
);

/**
 * The 'Actions' represents the events raised by the compoenent to communicate
 * either with the reducers or effects to update the data to store.
 */
export class EventsAction {}
