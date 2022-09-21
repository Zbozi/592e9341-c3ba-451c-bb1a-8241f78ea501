import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EventsRoutingModule } from './events-routing.module';
import { eventReducer } from './state/events.reducer';
import { EventsEffect } from './state/events.effect';

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
