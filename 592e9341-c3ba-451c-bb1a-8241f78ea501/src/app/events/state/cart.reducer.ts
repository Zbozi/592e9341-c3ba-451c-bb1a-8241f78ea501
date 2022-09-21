import { createReducer, on } from '@ngrx/store';
import { addEventToCart, removeEventFromCart } from './events.action';

export const initialState: ReadonlyArray<string> = [];

export const cartReducer = createReducer(
  initialState,
  on(removeEventFromCart, (state, { eventId }) =>
    state.filter((id) => id !== eventId)
  ),
  on(addEventToCart, (state, { eventId }) => {
    if (state.indexOf(eventId) > -1) return state;

    return [...state, eventId];
  })
);
