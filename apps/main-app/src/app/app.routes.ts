import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'index-build',
    loadChildren: () =>
      loadRemoteModule('index-build', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'exceptions',
    loadChildren: () =>
      loadRemoteModule('exceptions', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: AppComponent,
  },
];
