import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
  ],
})
export class MaterilasModule {}
