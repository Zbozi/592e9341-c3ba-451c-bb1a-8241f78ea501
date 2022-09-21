import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass'],
})
export class ToolbarComponent implements OnInit {
  searchControl = new FormControl('', []);
  filteredEvents: Observable<Event[]>;
  constructor() {}

  ngOnInit(): void {}
}
