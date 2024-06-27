import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
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
