import { Route } from '@angular/router';

import { DefaultComponent } from './default.component';

export const DefaultRoutes: Route[] = [
    {
        path: 'default',
        component: DefaultComponent,
        pathMatch: 'full'
    }
];

