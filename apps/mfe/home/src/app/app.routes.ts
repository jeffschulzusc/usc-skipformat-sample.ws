import { NxWelcomeComponent } from './nx-welcome.component';
    import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
    path: 'mfe-kitchen',
    loadChildren: () => import('mfe-kitchen/Module').then(m => m.RemoteEntryModule)
    },
    {
      path: '',
      component: NxWelcomeComponent
    },