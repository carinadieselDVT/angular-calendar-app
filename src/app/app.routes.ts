import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  { path: 'home', component: App },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  //   { path: '**', component: PageNotFoundComponent },
];
