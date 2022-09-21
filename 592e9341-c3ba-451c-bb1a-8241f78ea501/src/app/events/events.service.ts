import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, groupBy } from 'rxjs/operators';

import { apiUrl } from '../config.service';
import { Event } from './state/models/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  public events: Observable<Event[]>;

  constructor(private http: HttpClient) {}

  //HTTP-Client API get() method => Fetch event list
  getAllEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(apiUrl)
      .pipe(retry(1), catchError(this.handleError))
      .pipe(
        map((results) =>
          results.sort((e1, e2) =>
            new Date(e1.date) < new Date(e2.date) ? -1 : 1
          )
        )
      );
  }

  get() {
    return this.http.get<Event[]>(apiUrl);
  }

  groupByDate(events: Event[]) {
    let data = new Set(events.map((item) => new Date(item.date)));
    let resultData = [];
    data.forEach((date) => {
      resultData.push({
        date: date,
        products: events.filter((i) => new Date(i.date) === date),
      });
    });
    return resultData;
  }

  //Error Handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get client side error
      errorMessage = error.message;
    } else {
      //Get server side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      throw new Error('Method not implemented.');
    }

    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
