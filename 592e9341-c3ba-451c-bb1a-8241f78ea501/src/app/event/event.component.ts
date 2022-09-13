import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../models/event';
import {
  dateStringToDoubleDigitTime,
  dateStringToEuropeanDate,
} from '../helpers';

@Component({
  selector: 'event-view',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass'],
})
export class EventComponent implements OnInit {
  @Input() event: Event;

  startDate = { date: '', time: '' };
  endDate = { date: '', time: '' };

  ngOnInit(): void {
    this.startDate.date = dateStringToEuropeanDate(this.event.startTime);
    this.startDate.time = dateStringToDoubleDigitTime(this.event.startTime);
    this.endDate.date = dateStringToEuropeanDate(this.event.endTime);
    this.endDate.time = dateStringToDoubleDigitTime(this.event.endTime);
  }
}
