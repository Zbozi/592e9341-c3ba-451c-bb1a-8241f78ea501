import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../store/models/event';
import {
  dateStringToDoubleDigitTime,
  dateStringToEuropeanDate,
} from '../../helpers';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass'],
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  date = '';
  startDate = { date: '', time: '' };
  endDate = { date: '', time: '' };

  ngOnInit(): void {
    if (this.event.startTime) {
      this.startDate.date = dateStringToEuropeanDate(this.event.startTime);
      this.startDate.time = dateStringToDoubleDigitTime(this.event.startTime);
    }
    if (this.event.endTime) {
      this.endDate.date = dateStringToEuropeanDate(this.event.endTime);
      this.endDate.time = dateStringToDoubleDigitTime(this.event.endTime);
    }
  }
}
