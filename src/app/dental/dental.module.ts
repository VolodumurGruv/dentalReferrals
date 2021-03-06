import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DentalRoutingModule } from './dental-routing.module';
import { ReferralsComponent } from './referrals/referrals.component';
import { InformationComponent } from './information/information.component';
import { HistoryComponent } from './history/history.component';
import { MaterilasModule } from '../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ReferralsComponent, InformationComponent, HistoryComponent],
  imports: [CommonModule, DentalRoutingModule, MaterilasModule],
  exports: [DentalRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DentalModule {}
