import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { EventsRoutingModule } from './events-routing.module';
import { eventReducer } from './store/events.reducer';
import { EventsEffect } from './store/events.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventsRoutingModule,
    StoreModule.forFeature('event-list', eventReducer),
    EffectsModule.forFeature([EventsEffect]),
  ],
})
export class EventsModule {}
