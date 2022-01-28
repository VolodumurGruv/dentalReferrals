import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferralsComponent } from './referrals/referrals.component';

const routes: Routes = [{ path: '', component: ReferralsComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentalRoutingModule {}
