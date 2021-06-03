import { Route } from '@angular/router';

import { AddNewComponent } from './add-new.component';

export const AddNewRoutes: Route[] = [
    {
        path: 'add',
        component: AddNewComponent,
        pathMatch: 'full'
    }
];

