import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/referrals', pathMatch: 'full' },
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'referrals',
        loadChildren: () =>
          import('./dental/dental-routing.module').then(
            (m) => m.DentalRoutingModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
