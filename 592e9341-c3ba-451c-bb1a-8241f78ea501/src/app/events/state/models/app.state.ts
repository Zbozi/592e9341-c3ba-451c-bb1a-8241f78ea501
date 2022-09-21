import { Event } from './event';

export interface AppState {
  events: ReadonlyArray<Event>;
  shoppingCart: ReadonlyArray<Event>;
}
