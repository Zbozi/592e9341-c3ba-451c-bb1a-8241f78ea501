import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { apiUrl } from './config.service';
import { Event } from '../models/event';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //HTTP-Client API get() method => Fetch event list
  getEvents(): Observable<Event> {
    return this.http
      .get<Event>(apiUrl)
      .pipe(retry(1), catchError(this.handleError));
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
    }
    throw new Error('Method not implemented.');
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
