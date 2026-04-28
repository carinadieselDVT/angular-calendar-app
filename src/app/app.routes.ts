import { Routes } from '@angular/router';
import { MonthPageComponent } from './calendar/pages/month/month-page.component';
import { YearPageComponent } from './calendar/pages/year/year-page.component';

export const routes: Routes = [
  { path: 'month-view', component: MonthPageComponent },
  { path: 'year-view', component: YearPageComponent },
  { path: '', redirectTo: '/month-view', pathMatch: 'full' },
  //   { path: '**', component: PageNotFoundComponent },
];
