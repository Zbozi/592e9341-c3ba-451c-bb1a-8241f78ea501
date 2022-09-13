import { Artist } from './artist';
import { Venue } from './venue';
import { Pick } from './pick';

export interface Event {
  _id: string;
  title: string;
  flyerFront: string;
  attending: number;
  date: string;
  startTime: string;
  endTime: string;
  contentUrl: string;
  venue: Venue;
  pick: Pick;
  artists: Artist[];
  city: string;
  country: string;
  private: boolean;
  __v: number;
}
