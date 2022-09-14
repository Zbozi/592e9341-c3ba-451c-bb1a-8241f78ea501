import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { apiUrl } from './config.service';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //HTTP-Client API get() method => Fetch event list
  getAllEvents(): Observable<Event[]> {
    return this.http
      .get<Event[]>(apiUrl)
      .pipe(retry(1), catchError(this.handleError))
      .pipe(
        map((results) => results.sort((e1, e2) => (e1.date < e2.date ? -1 : 1)))
      );
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
